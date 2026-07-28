import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const position = formData.get('position') as string;
  const coverLetter = formData.get('cover_letter') as string;
  const cv = formData.get('cv') as File | null;

  if (!name || !email || !position) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const attachments: { filename: string; content: Buffer }[] = [];
  if (cv && cv.size > 0) {
    const buffer = Buffer.from(await cv.arrayBuffer());
    attachments.push({ filename: cv.name, content: buffer });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9f9f9">
      <div style="background:#0A0534;padding:24px;border-radius:12px 12px 0 0">
        <h2 style="color:white;margin:0;font-size:20px">New Job Application</h2>
        <p style="color:#E8192C;margin:4px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:2px">Choice Microfinance Bank — Careers</p>
      </div>
      <div style="background:white;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e5e7eb">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;width:35%;vertical-align:top">Position</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:700;color:#E8192C;vertical-align:top">${position}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;vertical-align:top">Full Name</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0A0534;vertical-align:top">${name}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;vertical-align:top">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0A0534;vertical-align:top">${email}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:13px;vertical-align:top">Phone</td>
            <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0A0534;vertical-align:top">${phone || '—'}</td>
          </tr>
          ${coverLetter ? `
          <tr>
            <td style="padding:10px 0;color:#6b7280;font-size:13px;vertical-align:top">Cover Letter</td>
            <td style="padding:10px 0;color:#374151;line-height:1.6;vertical-align:top">${coverLetter.replace(/\n/g, '<br>')}</td>
          </tr>` : ''}
        </table>
        ${cv ? `<p style="margin-top:16px;font-size:13px;color:#6b7280">CV attached: <strong>${cv.name}</strong></p>` : '<p style="margin-top:16px;font-size:13px;color:#9ca3af">No CV attached.</p>'}
      </div>
      <p style="color:#9ca3af;font-size:11px;text-align:center;margin-top:16px">Submitted via choice-bank.com/careers</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: 'hr@choice-bank.com',
      replyTo: email,
      subject: `Job Application — ${position} (${name})`,
      html,
      attachments,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to send';
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
