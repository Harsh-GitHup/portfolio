"use server";

import nodemailer from 'nodemailer'

export type MailPayload = { name: string; email: string; message: string }

function escapeHtml(text: string): string {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

export async function sendEmail(data: MailPayload): Promise<void> {
    const user = process.env.MAIL_USER?.trim()
    const rawPass = process.env.MAIL_PASS?.trim()
    // Google app passwords may contain spaces (e.g. 'abcd efgh ijkl mnop')
    const pass = rawPass ? rawPass.replace(/\s+/g, '') : ''

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        connectionTimeout: 10000,
        greetingTimeout: 5000,
        socketTimeout: 15000,
        auth: {
            user,
            pass,
        },
    })

    const safeName = data.name.replace(/[\r\n]/g, '').slice(0, 100)
    const safeEmail = data.email.replace(/[\r\n]/g, '').slice(0, 200)

    const mailOptions = {
        from: process.env.MAIL_FROM || process.env.MAIL_USER,
        replyTo: safeEmail,
        to: process.env.MAIL_TO || process.env.MAIL_USER,
        subject: `[Backend Portfolio] New message from ${safeName}`,
        text: `Sender Name: ${safeName}\nSender Email: ${safeEmail}\n\nMessage:\n${data.message}`,
        html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; background-color: #0f172a; color: #e2e8f0; border-radius: 8px;">
                <h2 style="color: #38bdf8; margin-top: 0;">New Backend Portfolio Inquiry</h2>
                <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
                <p><strong>Email:</strong> <a href="mailto:${escapeHtml(safeEmail)}" style="color: #38bdf8;">${escapeHtml(safeEmail)}</a></p>
                <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
                <h3 style="color: #94a3b8; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
                <div style="background-color: #1e293b; padding: 16px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${escapeHtml(data.message)}</div>
            </div>
        `,
    }

    await transporter.sendMail(mailOptions)
}
