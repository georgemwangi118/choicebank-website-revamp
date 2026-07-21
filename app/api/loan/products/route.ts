import { NextResponse } from 'next/server';

export async function GET() {
  const base = process.env.LOAN_API_BASE_URL;
  const res = await fetch(`${base}/api/loan/app/product/default-logbook`, { cache: 'no-store' });
  const data = await res.json();
  return NextResponse.json(data);
}
