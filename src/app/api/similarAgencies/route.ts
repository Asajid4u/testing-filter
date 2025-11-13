import { NextResponse } from 'next/server';

export async function GET() {
  const similarAgencies = [
    {
      id: 1,
      name: 'Adventure Seekers',
      description: 'Specializing in outdoor adventures and expeditions.',
      rating: 4.8,
      trips: 20,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      trust: 'High',
    },
    {
      id: 2,
      name: 'Cultural Journeys',
      description: 'Immersive cultural experiences around the world.',
      rating: 4.9,
      trips: 18,
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
      logo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      trust: 'High',
    },
  ];

  return NextResponse.json(similarAgencies);
}
