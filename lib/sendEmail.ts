export interface EmailField {
  label: string;
  value: string;
}

export interface SendEmailOptions {
  to: string;
  subject: string;
  formTitle: string;
  replyTo?: string;
  fields: EmailField[];
}

export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const res = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(options),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error ?? 'Failed to send email');
  }
}
