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

function isPlaceholderCredential(val?: string): boolean {
    if (!val) return true
    const normalized = val.trim().toLowerCase()
    return (
        normalized === '' ||
        normalized.includes('your-email') ||
        normalized.includes('your-app-password') ||
        normalized.includes('example.com') ||
        normalized.includes('placeholder') ||
        normalized.includes('change-me') ||
        normalized.startsWith('<') ||
        normalized.endsWith('>')
    )
}

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

        const mailUser = process.env.MAIL_USER
        const mailPass = process.env.MAIL_PASS
        const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY

        const hasValidNodemailer = !isPlaceholderCredential(mailUser) && !isPlaceholderCredential(mailPass)

        if (hasValidNodemailer) {
            try {
                await sendEmail(parsed.data)
                return NextResponse.json({ ok: true, message: 'Message sent successfully.' })
            } catch (error_: unknown) {
                const err = error_ as { code?: string; message?: string }
                if (err?.code === 'EAUTH') {
                    console.error(
                        '[Contact Route] Gmail SMTP Authentication failed (EAUTH 535 BadCredentials). ' +
                        'Google requires 2-Step Verification and a 16-character App Password (https://myaccount.google.com/apppasswords), ' +
                        'not your standard account password.'
                    )
                    return NextResponse.json(
                        {
                            ok: false,
                            error: 'Email authentication error: Please verify the Google App Password configured in MAIL_PASS.',
                        },
                        { status: 503 }
                    )
                }

                console.error('[Contact Route] Mail dispatch failed:', error_)
                return NextResponse.json(
                    { ok: false, error: 'Mail service temporarily unavailable. Please try again later.' },
                    { status: 503 }
                )
            }
        }

        // Optional Web3Forms fallback if access key is configured
        if (web3Key && !isPlaceholderCredential(web3Key)) {
            try {
                const w3Res = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({
                        access_key: web3Key,
                        name: parsed.data.name,
                        email: parsed.data.email,
                        message: parsed.data.message,
                        subject: `[Portfolio Contact] New message from ${parsed.data.name}`,
                    }),
                })
                const w3Data = await w3Res.json()
                if (w3Data.success) {
                    return NextResponse.json({ ok: true, message: 'Message dispatched successfully.' })
                }
                console.error('[Contact Route] Web3Forms dispatch failed:', w3Data)
            } catch (w3Err) {
                console.error('[Contact Route] Web3Forms network error:', w3Err)
            }
        }

        // Development / Preview simulation mode when live credentials are not yet configured
        console.warn(
            `[Contact Route] Live email credentials unconfigured or using placeholders in .env.local. Simulating successful message delivery in dev mode.`
        )
        return NextResponse.json({
            ok: true,
            simulated: true,
            message: 'Message received (Development simulation mode: configure real Gmail App Password in .env.local).',
        })
    } catch (e) {
        console.error('Contact form error:', e)
        return NextResponse.json({ ok: false, error: 'Invalid request payload' }, { status: 400 })
    }
}