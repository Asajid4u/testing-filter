// AgencyCard

"use client";

import { useState } from "react";
import Image from "next/image";
import Trip from "../../../../public/searchpageimg/view_trips.png";
import Profile from "../../../../public/searchpageimg/view_profile.png";
import Join from "../../../../public/searchpageimg/join_trips.png";
// import Rating from "../../../../public/searchpageimg/Ratinghigh.png"
import {
  FaMapMarkerAlt,
  FaCalendarAlt, // Reverted to CalendarAlt for trip date
  FaCheckCircle,
  FaHeart,
  FaShieldAlt,
  FaFlag,
  FaExclamationTriangle, // For spots left
  FaWallet, // For price
} from "react-icons/fa";
import { PiMedalDuotone } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

// Define the type for an Agency object, which now matches your 'trip' structure
export interface Agency {
  // Renamed from Trip to Agency to fit your context
  id: number;
  title: string; // This is the main title for the card
  description: string;
  tags: string[];
  from: string;
  to: string;
  travelersNeeded: number; // You might display this
  price: string;
  date: string; // This is the trip date
  spotsLeft: number;
  host: {
    // This is the agency/host information
    name: string;
    age: number; // You might display this
    verified: boolean;
    location: string;
    rating: number;
    match: number; // The match percentage
    safeScore: number;
    category:
      | "Travel Enthusiast"
      | "Featured Trip Leader"
      | "Featured Trip Agency"; // Your original categories
  };
  image: string; // This is the main image for the card
}

export default function AgencyCard({ agency }: { agency: Agency }) {
  const [liked, setLiked] = useState(false); // State for liking a trip/agency

  const toggleLike = () => {
    setLiked((prev) => !prev);
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

  const catStyle = getCategoryStyle(agency.host.category); // Use host's category for styling

  return (
    // Changed fixed width/height to responsive max-width, min-height
    <div className=" bg-white rounded-xl shadow-sm h-80 flex flex-col sm:flex-row overflow-hidden w-[950px]  ">
      {/* Left Image Section */}
      <div className="relative flex shrink-0 w-full sm:w-64 md:w-72  sm:h-auto rounded-bl-md">
        <img
          src={agency.image} // Using 'image' from your trip data
          alt={agency.title}
          className="w-full h-full object-cover"
        />

        {/* Match Badge (top-left) - from host.match */}
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
          {agency.host.match}% Match
        </div>

        {/* Like Button (top-right) */}
        <button
          onClick={toggleLike}
          aria-pressed={liked}
          className={`absolute top-3 right-3 w-8 h-8 flex cursor-pointer items-center justify-center rounded-full transition ${
            liked ? "text-rose-500" : "text-white"
          }`}
        >
          <FaHeart size={18} />
        </button>
      </div>

      {/* Right Content Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h2
                id={`agency-${agency.id}-heading`}
                className="text-lg font-semibold text-gray-900 leading-tight mb-2"
              >
                {agency.title} {/* Using 'title' from your trip data */}
              </h2>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2 mb-1">
                {agency.description}
              </p>
            </div>

            {/* Warning + Spots left */}
            {agency.spotsLeft > 0 && (
              <div className="flex items-center gap-1">
                <span className="flex gap-2 items-center bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap">
                  <FaExclamationTriangle /> {agency.spotsLeft} spots left
                </span>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2 mb-1">
            {agency.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Trip Info (from, to, date, price) */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-2 mb-2">
            <div className="flex items-center gap-1">
              <GoDotFill className="text-black" /> {agency.from}
            </div>
            <span className="text-gray-400">→</span>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-gray-400" /> {agency.to}
            </div>
          </div>

          <div className="flex items-center gap-x-8 gap-y-1 mt-1 text-sm text-gray-600 mb-2 ">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400 " />
              <div>{agency.date}</div>
            </div>

            <div className="flex items-center gap-2 ml-8">
              <FaWallet className="text-gray-400" />
              <div>{agency.price}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
            <FaFlag className="text-gray-400" />{" "}
            <span>
              {/* You might put host's trips completed here, if available */}30
              Trips Completed
            </span>
          </div>

          <hr className="my-3 mt-6" />
        </div>

        {/* Host Info & Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            {/* Host Initials Avatar */}
            <div
              className={`relative w-12 h-12 flex items-center justify-center rounded-full font-semibold text-sm border ${catStyle.avatarBg}`}
            >
              {getInitials(agency.host.name)}

              {/* Badge for non-enthusiast categories */}
              {agency.host.category !== "Travel Enthusiast" && (
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                  <PiMedalDuotone
                    className={`${
                      agency.host.category === "Featured Trip Leader"
                        ? "text-yellow-500"
                        : "text-orange-500"
                    }`}
                    size={12}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900">
                {agency.host.name}, {agency.host.age}{" "}
                {agency.host.verified && (
                  <FaCheckCircle className="inline text-sky-500 ml-1" />
                )}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div
                  className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-md font-medium ${catStyle.bg}`}
                >
                  {agency.host.category}
                </div>
                <span className={getSafeScoreStyle(agency.host.safeScore)}>
                  <FaShieldAlt /> {agency.host.safeScore}% Safe
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {agency.host.location} • ⭐ {agency.host.rating}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="bg-[#0A4D4A] text-white text-xs px-4 py-2 rounded-md hover:bg-[#093f3c] flex items-center justify-center h-8 w-28">
              <Image
                src={Trip}
                alt="View Trip Icon"
                width={10}
                height={10}
                className="mr-1 filter brightness-0 invert"
              />{" "}
              View Trip
            </button>
            <button className="bg-[#0A4D4A] text-white text-xs px-4 py-2 rounded-md hover:bg-[#093f3c] flex items-center justify-center h-8 w-28">
              <Image
                src={Join}
                alt="Join Trip Icon"
                width={20}
                height={20}
                className="mr-1 filter brightness-0 invert"
              />{" "}
              Join Trip
            </button>
            <button className="bg-[#0A4D4A] text-white text-xs px-4 py-2 rounded-md hover:bg-[#093f3c] flex items-center justify-center h-8 w-28">
              <Image
                src={Profile}
                alt="View Profile Icon"
                width={12}
                height={12}
                className="mr-1 filter brightness-0 invert"
              />{" "}
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
