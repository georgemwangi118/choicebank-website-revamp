import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface EmailField {
  label: string;
  value: string;
}

export interface SendEmailPayload {
  to: string;
  subject: string;
  formTitle: string;
  replyTo?: string;
  fields: EmailField[];
}

function buildHtml(formTitle: string, fields: EmailField[]): string {
  const rows = fields
    .filter((f) => f.value)
    .map(
      (f) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:40%;vertical-align:top">${f.label}</td>
        <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0A0534;vertical-align:top">${f.value}</td>
      </tr>`
    )
    .join('');

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9">
      <div style="background:#0A0534;padding:24px;border-radius:12px 12px 0 0">
        <h2 style="color:white;margin:0;font-size:20px">${formTitle}</h2>
        <p style="color:#E8192C;margin:4px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:2px">Choice Microfinance Bank</p>
      </div>
      <div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
      </div>
      <p style="color:#9ca3af;font-size:11px;text-align:center;margin-top:16px">
        Submitted via choice-bank.com
      </p>
    </div>`;
}

export async function POST(req: NextRequest) {
  const body: SendEmailPayload = await req.json();
  const { to, subject, formTitle, replyTo, fields } = body;

  if (!to || !subject || !fields?.length) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"Choice Microfinance Bank" <${process.env.SMTP_USER}>`,
      to,
      ...(replyTo ? { replyTo } : {}),
      subject,
      html: buildHtml(formTitle, fields),
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to send email';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
