import { NextResponse } from 'next/server';

export async function GET() {
  const agency = [
    {
      name: 'Wanderlust Adventures',
      description: 'Lorem ipsum dolor sit amet consectetur. Nulla varius faucibus elementum.',
      trips: '15+',
      travelers: '500+',
      activeTrips: 2,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      location: 'New York, USA',
      rating: 4.8,
      badgeTags: ['Top Rated', 'Verified'],
      stats: {
        totalTrips: '150+',
        happyTravelers: '5000+',
        yearsExperience: '10+',
      },
      about: 'Wanderlust Adventures is a premier travel agency specializing in curated experiences around the world. With over a decade of experience, we connect travelers with authentic adventures that create lifelong memories.',
      specialities: ['Adventure Travel', 'Cultural Immersion', 'Sustainable Tourism', 'Group Expeditions'],
      certifications: ['ASTA Certified', 'IATA Accredited', 'Green Travel Award'],
      contact: {
        responseTime: 'Within 2 hours',
        phone: '+1 (555) 123-4567',
        email: 'info@wanderlust.com',
        website: 'www.wanderlust.com',
      },
      trustItems: [
        'Verified Identity',
        'Secure Payments',
        '24/7 Support',
        'Cancellation Protection',
      ],
    },
  ];

  return NextResponse.json(agency);
}
