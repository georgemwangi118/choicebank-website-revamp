import { NextResponse } from 'next/server';

export function GET() {
  const content = `Contact: mailto:gmwangi@choice-bank.com
Expires: 2027-09-23T00:00:00.000Z
Preferred-Languages: en
Canonical: https://choice-bank.com/.well-known/security.txt
`;
  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
