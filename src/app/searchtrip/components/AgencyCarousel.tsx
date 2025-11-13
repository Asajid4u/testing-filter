


// AgencyCarousel


"use client";

// Make sure the import path to AgencyCard is correct relative to this file
import AgencyCard, { Agency } from "./AgencyCard"; // Import both the component and the type

// Sample data for agencies, now matching your 'trip' object structure
const AGENCIES_DEMO: Agency[] = [
  {
    id: 1,
    title: "Weekend Hiking Adventure in the Alps",
    description:
      "Looking for 2-3 people to join me for an amazing hiking experience! We'll explore beautiful trails and camp under the stars.",
    tags: ["Hiking", "Culture", "Adventure"],
    from: "Kolkata, West Bengal",
    to: "Simla, Himachal Pradesh",
    travelersNeeded: 3,
    price: "₹1,500 / person (shared costs)",
    date: "Dec 15–17, 2025",
    spotsLeft: 2,
    host: {
      name: "Sarah Johnson",
      age: 26,
      verified: true,
      location: "Goa, India",
      rating: 4.8,
      match: 92,
      safeScore: 88,
      category: "Trip Agency",
    },
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    id: 2,
    title: "Desert Safari Escape in Rajasthan",
    description:
      "Join us for a thrilling desert safari experience in Jaisalmer! Camel rides, star gazing, and camping in golden dunes await.",
    tags: ["Adventure", "Camping", "Culture"],
    from: "Ahmedabad, Gujarat",
    to: "Jaisalmer, Rajasthan",
    travelersNeeded: 4,
    price: "₹2,000 / person (shared costs)",
    date: "Jan 10–12, 2026",
    spotsLeft: 1,
    host: {
      name: "Ravi Patel",
      age: 29,
      verified: true,
      location: "Surat, India",
      rating: 4.9,
      match: 88,
      safeScore: 72,
      category: "Trip Agency",
    },
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80",
  },
  {
    id: 3,
    title: "Coastal Yoga & Meditation Retreat",
    description:
      "Relax and rejuvenate by the beach with guided meditation, yoga sessions, and peaceful sunsets.",
    tags: ["Wellness", "Beach", "Relaxation"],
    from: "Mumbai, India",
    to: "Gokarna, Karnataka",
    travelersNeeded: 5,
    price: "₹1,800 / person (shared costs)",
    date: "Feb 5–9, 2026",
    spotsLeft: 3,
    host: {
      name: "Ananya Verma",
      age: 30,
      verified: true,
      location: "Bangalore, India",
      rating: 4.7,
      match: 90,
      safeScore: 45,
      category: "Trip Agency",
    },
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
  {
    id: 4,
    title: "Historical City Walk in Delhi",
    description:
      "Discover the rich history of Delhi with a guided walk through ancient monuments and bustling markets.",
    tags: ["History", "Culture", "City"],
    from: "Chennai, Tamil Nadu",
    to: "Delhi, Delhi",
    travelersNeeded: 4,
    price: "₹1,200 / person (shared costs)",
    date: "Apr 1-3, 2026",
    spotsLeft: 2,
    host: {
      name: "Akash Sharma",
      age: 32,
      verified: true,
      location: "Delhi, India",
      rating: 4.6,
      match: 85,
      safeScore: 78,
      category: "Trip Agency",
    },
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80",
  },
  {
    id: 5,
    title: "Wildlife Safari in Ranthambore",
    description:
      "Experience thrilling jeep safaris to spot tigers and other wildlife in Ranthambore National Park.",
    tags: ["Wildlife", "Adventure", "Nature"],
    from: "Jaipur, Rajasthan",
    to: "Ranthambore, Rajasthan",
    travelersNeeded: 6,
    price: "₹3,000 / person (shared costs)",
    date: "May 10-14, 2026",
    spotsLeft: 4,
    host: {
      name: "Priya Singh",
      age: 28,
      verified: true,
      location: "Jaipur, India",
      rating: 4.9,
      match: 95,
      safeScore: 90,
      category: "Trip Agency",
    },
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
];


export default function AgencyCarousel() {
  return (
    

      <div className="flex flex-col items-center space-y-8 -ml-4 rounded-xl w-[950px] h-[200px]">
        {AGENCIES_DEMO.map((agency) => ( // Mapping over sampleAgencies
          <section
            key={agency.id}
            className="w-full flex justify-center px-4"
            aria-labelledby={`agency-${agency.id}-heading`}
          >
            <AgencyCard agency={agency} /> {/* Passing each 'agency' (which is a trip-like object) */}
          </section>
        ))}
      </div>
  
  );
}


