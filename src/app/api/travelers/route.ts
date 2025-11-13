import { NextResponse } from 'next/server';

export async function GET() {
  const travelers = [
    { name: 'Sarah Johnson' },
    { name: 'Emily Davis' },
    { name: 'Michael Brown' },
  ];

  return NextResponse.json(travelers);
}
