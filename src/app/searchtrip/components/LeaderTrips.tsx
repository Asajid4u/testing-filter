"use client";
 
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaHeart,
  FaShieldAlt,
  FaFlag,
  FaExclamationTriangle,
  FaWallet,
} from "react-icons/fa";
import { PiMedalDuotone } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
 
const trips = [
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
      category: "Featured Trip Leader",
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
      category: "Featured Trip Leader",
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
      category: "Featured Trip Leader",
    },
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80",
  },
];
 
export default function TripCardList() {
  const [likedTrips, setLikedTrips] = useState<number[]>([]);
 
  const toggleLike = (id: number) => {
    setLikedTrips((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };
 
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
 
  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Travel Enthusiast":
        return {
          bg: "bg-blue-100 text-blue-800 border-blue-300",
          avatarBg: "bg-blue-500 text-white",
        };
      case "Featured Trip Leader":
        return {
          bg: "bg-yellow-100 text-yellow-800 border-yellow-300",
          avatarBg: "bg-yellow-500 text-white",
        };
      case "Featured Trip Agency":
        return {
          bg: "bg-orange-100 text-orange-800 border-orange-300",
          avatarBg: "bg-orange-500 text-white",
        };
      default:
        return {
          bg: "bg-gray-100 text-gray-800 border-gray-300",
          avatarBg: "bg-gray-500 text-white",
        };
    }
  };
 
  const getSafeScoreStyle = (score: number) => {
    if (score < 50)
      return "bg-red-100 text-red-700 border border-red-300 px-2 py-[2px] rounded-md flex items-center gap-1 text-xs";
    if (score < 75)
      return "bg-yellow-100 text-yellow-800 border border-yellow-300 px-2 py-[2px] rounded-md flex items-center gap-1 text-xs";
    return "bg-green-100 text-green-700 border border-green-300 px-2 py-[2px] rounded-md flex items-center gap-1 text-xs";
  };
 
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center">
      <div className="w-[95%] max-w-5xl flex flex-col gap-6">
        {trips.map((trip) => {
          const catStyle = getCategoryStyle(trip.host.category);
 
          return (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row overflow-hidden h-80"
            >
              {/* Left Image */}

              <div className="relative flex shrink-0 w-full sm:w-64 md:w-72 h-[180px] sm:h-auto">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover"
                />
 
                {/* Match Badge (top-left) */}
                <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                  {trip.host.match}% Match
                </div>
 
                {/* Like Button (top-right) */}
                <button
                  onClick={() => toggleLike(trip.id)}
                  className={`absolute top-3 right-3 w-8 h-8 flex cursor-pointer items-center justify-center rounded-full transition ${
                    likedTrips.includes(trip.id)
                      ? "text-rose-500"
                      : "text-white"
                  }`}
                >
                  <FaHeart size={18} />
                </button>
              </div>
 
              {/* Right Content */}
              <div className="flex-1 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 leading-tight">
                      {trip.title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                      {trip.description}
                    </p>
                  </div>
 
                  {/* Warning + Spots left */}
                  <div className="flex items-center gap-1">
                    <span className="flex gap-2 items-center bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                      <FaExclamationTriangle /> {trip.spotsLeft} spots left
                    </span>
                  </div>
                </div>
 
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {trip.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
 
                {/* Trip Info */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-1">
                    <GoDotFill className="text-black" /> {trip.from}
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-gray-400" /> {trip.to}
                  </div>
                </div>
 
                <div className="flex items-center gap-16 mt-1 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-400" />
                    <div>{trip.date}</div>
                  </div>
 
                  <div className="flex items-center gap-2">
                    <FaWallet />
                    <div>{trip.price}</div>
                  </div>
                </div>
 
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                  <FaFlag /> <span>30 Trips Completed</span>
                </div>
 
                <hr className="my-3" />
 
                {/* Host Info heere */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 relative">
                    {/* Host Initials Avatar */}
                    <div
                      className={`relative w-12 h-12 flex items-center justify-center rounded-full font-semibold text-sm border ${catStyle.avatarBg}`}
                    >
                      {getInitials(trip.host.name)}
 
                      {/* Badge only for  some categories he */}
                      {trip.host.category !== "Travel Enthusiast" && (
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                          <PiMedalDuotone
                            className={`${
                              trip.host.category === "Featured Trip Leader"
                                ? "text-yellow-500"
                                : "text-orange-500"
                            }`}
                            size={12}
                          />
                        </div>
                      )}
                    </div>
 
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {trip.host.name}, {trip.host.age}{" "}
                        {trip.host.verified && (
                          <FaCheckCircle className="inline text-sky-500 ml-1" />
                        )}
                      </p>
 
                     
                      <div className="flex items-center gap-2 mt-1">
                        <div
                          className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-md font-medium ${catStyle.bg}`}
                        >
                          {trip.host.category}
                        </div>
                        <span className={getSafeScoreStyle(trip.host.safeScore)}>
                          <FaShieldAlt /> {trip.host.safeScore}% Safe
                        </span>
                      </div>
 
                      <p className="text-xs text-gray-600 mt-1">
                        {trip.host.location} • ⭐ {trip.host.rating}
                      </p>
                    </div>
                  </div>
 
             
                  <div className="flex gap-2">
                    <button className="bg-[#0A4D4A] text-white text-xs px-6 py-2 rounded-md hover:bg-[#093f3c]">
                      View Trip
                    </button>
                    <button className="bg-[#0A4D4A] text-white text-xs px-6 py-2 rounded-md hover:bg-[#093f3c]">
                      Join Trip
                    </button>
                    <button className="bg-[#0A4D4A] text-white text-xs px-6 py-2 rounded-md hover:bg-[#093f3c]">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
 
 
