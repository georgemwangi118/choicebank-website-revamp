import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const base = process.env.LOAN_API_BASE_URL;

  body.channel = 'Official Website';
  const res = await fetch(`${base}/api/loan/app/pre-approval/apply`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
