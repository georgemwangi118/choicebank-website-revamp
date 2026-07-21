import { NextResponse } from 'next/server';

interface Brand { make: string; model_count: number; }
interface Pagination { total_pages: number; }

export async function GET() {
  const base = process.env.LOAN_API_BASE_URL;
  let page = 1;
  const allBrands: string[] = [];

  while (true) {
    const res = await fetch(
      `${base}/api/loan/app/pre-approval/vehicle/brand?page=${page}&per_page=100`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    allBrands.push(...(data.data as Brand[]).map((b) => b.make));
    const pagination: Pagination = data.meta?.pagination;
    if (!pagination || page >= pagination.total_pages) break;
    page++;
  }

  return NextResponse.json(allBrands);
}
