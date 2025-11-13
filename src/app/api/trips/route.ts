import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const agencyId = searchParams.get('agencyId');

  const trips = [
    {
      id: 1,
      title: 'Bali Adventure',
      description: 'Explore the beautiful beaches and culture of Bali.',
      dates: 'Dec 15-22, 2024',
      pax: '8-12',
      duration: '7 days',
      price: '$1,200',
      spotsLeft: 3,
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1',
      tags: ['Beach', 'Culture', 'Adventure'],
    },
    {
      id: 2,
      title: 'Tokyo Highlights',
      description: 'Experience the vibrant city life of Tokyo.',
      dates: 'Jan 5-12, 2025',
      pax: '6-10',
      duration: '7 days',
      price: '$1,800',
      spotsLeft: 5,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
      tags: ['City', 'Culture', 'Food'],
    },
  ];

  return NextResponse.json(trips);
}
