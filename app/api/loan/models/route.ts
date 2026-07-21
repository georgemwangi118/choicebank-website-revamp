import { NextRequest, NextResponse } from 'next/server';

interface VehicleModel { model: string; }
interface Pagination { total_pages: number; }

export async function GET(req: NextRequest) {
  const make = req.nextUrl.searchParams.get('make');
  if (!make) return NextResponse.json([], { status: 400 });

  const base = process.env.LOAN_API_BASE_URL;
  let page = 1;
  const allModels: string[] = [];

  while (true) {
    const url = `${base}/api/loan/app/pre-approval/vehicle/model?filter.make=${encodeURIComponent(make)}&page=${page}&per_page=100`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    if (data.code !== 200 || !data.data) break;
    allModels.push(...(data.data as VehicleModel[]).map((m) => m.model));
    const pagination: Pagination = data.meta?.pagination;
    if (!pagination || page >= pagination.total_pages) break;
    page++;
  }

  return NextResponse.json(allModels);
}
