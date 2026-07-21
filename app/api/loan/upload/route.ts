import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const base = process.env.LOAN_API_BASE_URL;
  const formData = await req.formData();

  const res = await fetch(`${base}/api/loan/app/assets/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
