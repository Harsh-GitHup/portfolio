"use server";

import nodemailer from 'nodemailer'

export type MailPayload = { name: string; email: string; message: string }

export async function sendEmail(data: MailPayload): Promise<void> {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.MAIL_FROM || data.email,
        to: process.env.MAIL_TO || process.env.MAIL_USER,
        subject: `Contact form submission from ${data.name}`,
        text: data.message,
    }

    await transporter.sendMail(mailOptions)
}
