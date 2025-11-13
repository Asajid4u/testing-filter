import { NextResponse } from 'next/server';

export async function GET() {
  const tripLeaders = [
    { name: 'Alex Thompson' },
    { name: 'Jessica Lee' },
  ];

  return NextResponse.json(tripLeaders);
}
