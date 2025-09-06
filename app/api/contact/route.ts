import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.name || !body.email || !body.message) {
    // Required fields check

    return NextResponse.json(
      { ok: false, error: 'Missing required fields' },
      { status: 400 }
    );
  }
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json(
      { ok: false, error: 'Email is not configured' },
      { status: 500 }
    );
  }
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.mail.me.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) == 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from:
        process.env.SMTP_FROM ||
        process.env.SMTP_USER ||
        'bydelacruz@icloud.com',
      to:
        process.env.CONTACT_TO ||
        process.env.SMTP_USER ||
        'bydelacruz@icloud.com',
      subject: `New Contact Form Submission from ${body.name || 'Unknown'}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
      html: `<p><strong>Name:</strong> ${body.name}</p><p><strong>Email:</strong> ${body.email}</p><p><strong>Message:</strong><br/>${body.message}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
