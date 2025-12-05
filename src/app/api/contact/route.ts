import { NextResponse } from 'next/server'
import { z } from 'zod'

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
        return NextResponse.json({ ok: true })
    } catch (e) {
        console.error('Contact form error:', e)
        return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
    }
}