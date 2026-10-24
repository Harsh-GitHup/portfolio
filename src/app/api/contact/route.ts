import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail } from '@/components/ui/Mailer'

// In-memory IP rate limiter: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>()
const RATE_LIMIT_WINDOW = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS = 5

function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const record = rateLimitMap.get(ip)

    if (!record || now > record.expiresAt) {
        rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW })
        return false
    }

    if (record.count >= MAX_REQUESTS) {
        return true
    }

    record.count += 1
    return false
}

const ContactSchema = z.object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
    email: z.string().trim().email('Invalid email address').max(200, 'Email too long'),
    message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000, 'Message too long'),
})

export async function POST(request: Request) {
    try {
        // Extract client IP for rate-limiting
        const forwardedFor = request.headers.get('x-forwarded-for')
        const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1'

        if (isRateLimited(clientIp)) {
            return NextResponse.json(
                { ok: false, error: 'Too many requests. Please try again in 10 minutes.' },
                { status: 429 }
            )
        }

        const data = await request.json()
        const parsed = ContactSchema.safeParse(data)
        if (!parsed.success) {
            return NextResponse.json(
                { ok: false, errors: parsed.error.flatten() },
                { status: 400 }
            )
        }

        const hasMailEnv = !!process.env.MAIL_USER && !!process.env.MAIL_PASS
        if (hasMailEnv) {
            try {
                await sendEmail(parsed.data)
            } catch (error_) {
                console.error('Mail send failed:', error_)
                return NextResponse.json({ ok: false, error: 'Mail service temporarily unavailable' }, { status: 503 })
            }
        } else {
            console.warn('MAIL_USER/MAIL_PASS not configured. Simulation successful in development.')
        }

        return NextResponse.json({ ok: true, message: 'Message sent successfully.' })
    } catch (e) {
        console.error('Contact form error:', e)
        return NextResponse.json({ ok: false, error: 'Invalid request payload' }, { status: 400 })
    }
}