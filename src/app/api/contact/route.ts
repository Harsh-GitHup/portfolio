import { NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail } from '@/components/ui/Mailer'

const ContactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
})

export async function POST(request: Request) {
    try {
        const data = await request.json()
        const parsed = ContactSchema.safeParse(data)
        if (!parsed.success) {
            return NextResponse.json(
                { ok: false, errors: parsed.error.flatten() },
                { status: 400 }
            )
        }

        // TODO: Integrate with email service or storage
        const hasMailEnv = !!process.env.MAIL_USER && !!process.env.MAIL_PASS
        if (hasMailEnv) {
            try {
                await sendEmail(parsed.data)
            } catch (error_) {
                console.error('Mail send failed:', error_)
                return NextResponse.json({ ok: false, error: 'Mail service unavailable' }, { status: 503 })
            }
        } else {
            // In dev or when mail credentials are not set, skip sending but succeed
            console.warn('MAIL_USER/MAIL_PASS not set. Skipping email send.')
        }
        return NextResponse.json({ ok: true })
    } catch (e) {
        console.error('Contact form error:', e)
        return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
    }
}