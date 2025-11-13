'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaMapMarkerAlt, FaCheckCircle, FaCircle, FaRegCircle, FaChevronLeft, FaChevronRight, FaRupeeSign, FaStar, FaRoute, FaCalendarAlt, FaWallet, FaUsers } from 'react-icons/fa';

interface Message {
  id: number;
  message: string;
  timestamp: string;
  sender: string;
  userId: string;
}

const user = {
  rating: "4.1",
  reviews: 410,
};

const reviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    title: "Bali Adventure",
    date: "2023-11-15",
    rating: 5,
    text: "Absolutely loved the trip! The beaches were stunning and the culture was rich. Highly recommend!",
  },
  {
    id: 2,
    author: "Mike Chen",
    title: "Tokyo Experience",
    date: "2023-12-20",
    rating: 4,
    text: "Great food and sights. The guide was knowledgeable. Would go again.",
  },
  {
    id: 3,
    author: "Emma Wilson",
    title: "Swiss Alps",
    date: "2024-01-10",
    rating: 5,
    text: "Incredible hiking and scenery. Perfect for nature lovers.",
  },
  {
    id: 4,
    author: "David Lee",
    title: "Paris Getaway",
    date: "2024-02-05",
    rating: 4,
    text: "Romantic and beautiful. The Eiffel Tower was magical at night.",
  },
];

const upcomingTrips = [
  {
    id: 1,
    title: "Bali Beach & Culture Adventure",
    location: "Bali, Indonesia",
    date: "Nov 3 - Nov 10, 2025",
    travelers: 3,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
  {
    id: 3,
    title: "Northern Lights in Iceland",
    location: "Reykjavik, Iceland",
    date: "Jan 15 - Jan 22, 2026",
    travelers: 4,
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
  {
    id: 4,
    title: "Swiss Alps Hiking Expedition",
    location: "Zurich, Switzerland",
    date: "Feb 5 - Feb 12, 2026",
    travelers: 4,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
  {
    id: 5,
    title: "Paris Romantic Getaway",
    location: "Paris, France",
    date: "Mar 10 - Mar 17, 2026",
    travelers: 2,
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
];

const pastTrips = [
  {
    id: 2,
    title: "Bali Beach & Culture Adventure",
    location: "Bali, Indonesia",
    date: "Nov 3 - Nov 10, 2024",
    travelers: 3,
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
  {
    id: 3,
    title: "Tokyo City Lights & Temples",
    location: "Tokyo, Japan",
    date: "Dec 15 - Dec 22, 2024",
    travelers: 2,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
  {
    id: 4,
    title: "Swiss Alps Hiking Expedition",
    location: "Zurich, Switzerland",
    date: "Jan 5 - Jan 12, 2025",
    travelers: 4,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
  {
    id: 5,
    title: "Northern Lights in Iceland",
    location: "Reykjavik, Iceland",
    date: "Feb 10 - Feb 17, 2025",
    travelers: 3,
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
  {
    id: 6,
    title: "Paris Romantic Getaway",
    location: "Paris, France",
    date: "Mar 5 - Mar 12, 2025",
    travelers: 2,
    image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=180&q=80",
    avatars: ["https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80", "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=30&h=30&q=80"],
  },
];

const travelPhotos = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
  "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
  "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
  "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200&q=80",
];

const tripLeaders = [
  {
    title: "Wanderlust Adventures",
    rating: 4.1,
    level: "Moderate",
    trips: 15,
    travelers: 500,
    years: 2,
    tags: ["Adventure Travel", "Cultural Tours", "Sustainable Tours"],
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
    ],
    profileImg:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nulla varius faucibus elementum nibh neque eget.",
  },
  {
    title: "Mountain Seekers",
    rating: 4.7,
    level: "Challenging",
    trips: 25,
    travelers: 800,
    years: 4,
    tags: ["Trekking", "Camping", "Snow Adventures"],
    verified: true,
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
    ],
    profileImg:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80",
    description:
      "Join thrilling expeditions and experience the mountains like never before.",
  },
  {
    title: "Nomad Expeditions",
    rating: 4.3,
    level: "Easy",
    trips: 10,
    travelers: 300,
    years: 1,
    tags: ["Desert Safari", "Local Culture", "Photography"],
    verified: false,
    images: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80",
      "https://images.unsplash.com/photo-1521334884684-d80222895322?w=600&q=80",
    ],
    profileImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    description:
      "Explore hidden destinations and local experiences with our travel experts.",
  },
];

const travelers = [
  {
    name: "Sarah Johnson",
    age: 26,
    location: "Goa, India",
    from: "Kolkata, West Bengal, India",
    to: "Simla, Himachal Pradesh, India",
    date: "Nov 15–25, 2025",
    price: "₹15k – ₹50k",
    tags: ["Beach", "Photography", "Romance", "Fashion"],
    match: 88,
    spots: 3,
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    ],
  },
  {
    name: "Alicia Brown",
    age: 29,
    location: "Delhi, India",
    from: "Mumbai, Maharashtra",
    to: "Leh, Ladakh",
    date: "Dec 5–15, 2025",
    price: "₹20k – ₹45k",
    tags: ["Adventure", "Nature", "Road Trip"],
    match: 91,
    spots: 2,
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
    ],
  },
  {
    name: "Emma Watson",
    age: 27,
    location: "Bangalore, India",
    from: "Pune, Maharashtra",
    to: "Munnar, Kerala",
    date: "Jan 10–18, 2026",
    price: "₹10k – ₹35k",
    tags: ["Hiking", "Nature", "Food", "Culture"],
    match: 84,
    spots: 1,
    images: [
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=600&q=80",
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&q=80",
    ],
  },
];

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Upcoming Trips');
  const [currentImage, setCurrentImage] = useState(
    new Array(travelers.length).fill(0)
  );
  const [imageIndexes, setImageIndexes] = useState(
    new Array(tripLeaders.length).fill(0)
  );
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(1234);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setIsLoading(true);
    const userMessage = {
      id: Date.now(),
      message: newMessage,
      timestamp: new Date().toISOString(),
      sender: 'user',
      userId: 'current-user'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: newMessage,
          userId: 'current-user'
        }),
      });

      const data = await response.json();
      if (data.success) {
        setMessages(prev => [...prev, data.response]);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNext = (index:number, total:number) => {
    const updated = [...currentImage];
    updated[index] = (updated[index] + 1) % total;
    setCurrentImage(updated);
  };

  const handlePrev = (index:number, total:number) => {
    const updated = [...currentImage];
    updated[index] =
      updated[index] === 0 ? total - 1 : updated[index] - 1;
    setCurrentImage(updated);
  };

  const nextImage = (index:number, length:number) => {
    const updated = [...imageIndexes];
    updated[index] = (updated[index] + 1) % length;
    setImageIndexes(updated);
  };

  const prevImage = (index:number, length:number) => {
    const updated = [...imageIndexes];
    updated[index] = updated[index] === 0 ? length - 1 : updated[index] - 1;
    setImageIndexes(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Cover and Profile Container */}
      <div className="relative">
        {/* Cover Image Section */}
        <div className="w-full h-64 overflow-hidden rounded-2xl relative">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Cover"
            fill
            className="object-cover"
          />
          <button onClick={() => router.back()} className="absolute top-4 left-4 text-white bg-black/40 px-3 py-1 rounded-md hover:bg-black/60 transition z-10">
            ← Back
          </button>

          {/* Avatar - positioned half on cover and half on card, on the left */}
          <div className="absolute bottom-0 left-12 top-25 w-48 h-48 overflow-hidden shadow-md rounded-lg z-20">
            <Image
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
              alt="Profile"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-screen mx-auto mt-0 flex flex-col md:flex-row gap-6 items-center" style={{marginTop: '-2rem'}}>
          {/* Info */}
          <div className="flex-1 mt-8 text-center">
            <h2 className="text-2xl font-semibold flex items-center justify-center gap-2">
              Jane Cooper
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md flex items-center gap-1">
                <Image src="/ic_baseline-check-circle-outline.png" alt="Verified" width={16} height={16} /> Verified Traveler
              </span>
            </h2>
            <p className="text-gray-600 flex items-center justify-center gap-1 mt-1">
              <FaMapMarkerAlt className="text-gray-500" /> Kiev, Ukraine
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <Image src="/star-icon.png" alt="Star" width={16} height={16} className="inline mr-1" style={{filter: 'invert(100%) sepia(100%) saturate(10000%) hue-rotate(25deg) brightness(550%) contrast(100%)'}} /> 4.1 (410 reviews) • <span className="font-medium">88%</span> Safe Traveler
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4 text-center">
              <div className="bg-gray-200 p-3">
                <p className="text-lg font-semibold">{followersCount}</p>
                <p className="text-gray-500 text-sm">Followers</p>
              </div>
              <div className="bg-gray-200 p-3">
                <p className="text-lg font-semibold">567</p>
                <p className="text-gray-500 text-sm">Following</p>
              </div>
              <div className="bg-gray-200 p-3">
                <p className="text-lg font-semibold">15</p>
                <p className="text-gray-500 text-sm">Trips Completed</p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-2 mr-4">
            <button onClick={() => setIsChatOpen(true)} className="flex items-center justify-center gap-2 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 hover:scale-105 transition-all duration-200">
              <Image src="/chat-icon.png" alt="Chat" width={20} height={20} className="filter invert" /> Chat
            </button>
            <button
              onClick={() => {
                const newFollowing = !isFollowing;
                setIsFollowing(newFollowing);
                setFollowersCount(prev => newFollowing ? prev + 1 : prev - 1);
              }}
              className={`flex items-center justify-center gap-2 px-5 py-2 rounded-md hover:scale-105 transition-all duration-200 ${
                isFollowing
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              {!isFollowing && (
                <Image src="/join-trip.png" alt="Follow" width={20} height={20} className="filter invert" />
              )}
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md hover:scale-105 transition-all duration-200">
              <Image src="/view-trip.png" alt="View Trip" width={20} height={20} className="filter invert" /> Join Trip
            </button>
          </div>
        </div>
      </div>

      {/* About + Tabs Section */}
      <div className="max-w-6xl mx-auto mt-8 px-6 flex flex-col md:flex-row md:items-start gap-8">
        {/* About Section */}
        <div className="w-full md:w-80 md:self-start bg-white shadow-lg rounded-2xl p-4 m-2" style={{boxShadow: '4px 0 8px rgba(0,0,0,0.1)'}}>
          <h3 className="text-lg font-semibold mb-1">About</h3>
          <p className="text-gray-600 text-sm">
            Wildlife photographer and nature lover. Eco-conscious traveler.
          </p>

          <h4 className="font-semibold mt-2 mb-4 flex items-center gap-1"><Image src="/language.png" alt="Languages" width={16} height={16} className="[filter:brightness(0)]" /> Languages</h4>
          <div className="flex flex-wrap gap-2">
            {['English', 'Spanish', 'Ukrainian'].map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-sm"
              >
                {lang}
              </span>
            ))}
          </div>

          <h4 className="font-semibold mt-2 mb-1"> Travel Style</h4>
          <div className="flex flex-wrap gap-2">
            {['Adventure', 'Cultural', 'Budget-friendly'].map((style) => (
              <span
                key={style}
                className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-sm"
              >
                {style}
              </span>
            ))}
          </div>

          <h4 className="font-semibold mt-2 mb-1"> Interests</h4>
          <div className="flex flex-wrap gap-2">
            {['Hiking', 'Photography', 'Local cuisine'].map((interest) => (
              <span
                key={interest}
                className="px-3 py-1 border border-gray-300 rounded-full text-gray-700 text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="w-full md:w-2/3">
          <div className="bg-gray-50 rounded-2xl shadow-md">
            {/* Tabs Header */}
            <div className="flex space-x-8 border-b border-gray-200 mb-6 px-4">
              <button
                onClick={() => setActiveTab("Upcoming Trips")}
                className={`pb-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === "Upcoming Trips"
                    ? "text-[#F76C6C] border-b-2 border-[#F76C6C]"
                    : "text-gray-500 hover:text-[#F76C6C]"
                }`}
              >
                Upcoming Trips
              </button>
              <button
                onClick={() => setActiveTab("Past Trips")}
                className={`pb-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === "Past Trips"
                    ? "text-[#F76C6C] border-b-2 border-[#F76C6C]"
                    : "text-gray-500 hover:text-[#F76C6C]"
                }`}
              >
                Past Trips
              </button>
              <button
                onClick={() => setActiveTab("Reviews")}
                className={`pb-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === "Reviews"
                    ? "text-[#F76C6C] border-b-2 border-[#F76C6C]"
                    : "text-gray-500 hover:text-[#F76C6C]"
                }`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("Travel Photos")}
                className={`pb-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === "Travel Photos"
                    ? "text-[#F76C6C] border-b-2 border-[#F76C6C]"
                    : "text-gray-500 hover:text-[#F76C6C]"
                }`}
              >
                Travel Photos
              </button>
            </div>

            {activeTab === "Reviews" && (
              <>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold ml-4">Travelers Reviews</h3>
                    <div className="text-sm text-gray-500 mt-1 flex items-center gap-1 ml-4">
                      <FaStar className="text-yellow-400" /> {user.rating} ({user.reviews} reviews)
                    </div>
                  </div>
                  <div className="text-sm text-[#F76C6C] cursor-pointer mr-4">
                    Show All Reviews
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reviews.slice(0, 2).map((r) => (
                    <div
                      key={r.id}
                      className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            S
                          </div>
                          <div>
                            <div className="text-sm font-semibold">
                              {r.author}{" "}
                              <span className="text-xs text-red-500 font-bold ml-2">
                                Verified User
                              </span>
                            </div>
                            <div className="text-xs text-gray-400">
                              {new Date(r.date).toLocaleDateString('en-GB')}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">⋯</div>
                      </div>

                      <div className="mt-3 flex items-center gap-1">
                        {Array.from({ length: r.rating }, (_, i) => (
                          <span key={i} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 text-sm text-gray-700">
                        {r.text}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Upcoming Trips" && (
              <section className="w-full max-w-5xl mx-auto mt-10 px-4">
                <div className="flex flex-col gap-6 max-h-[800px] overflow-y-scroll">
                  {upcomingTrips.map((trip) => (
                    <div
                      key={trip.id}
                      className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-5"
                    >
                      {/* Trip Image */}
                      <div className="w-full md:w-1/3">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="rounded-lg object-cover w-full h-[180px]"
                        />
                      </div>

                      {/* Trip Details */}
                      <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{trip.title}</h3>
                        <div className="flex items-center text-gray-600 text-sm mt-1 space-x-4">
                          <div className="flex items-center">
                            <Image src="/location.png" alt="Location" width={16} height={16} className="mr-1" />
                            {trip.location}
                          </div>
                          <div className="flex items-center">
                            <Image src="/calender.png" alt="Calendar" width={16} height={16} className="mr-1" />
                            {trip.date}
                          </div>
                          <div className="flex items-center">
                            <Image src="/join-icon.png" alt="Joined" width={16} height={16} className="mr-1" />
                            3/6 joined
                          </div>
                        </div>
                        </div>

                        {/* Traveler Avatars */}
                        <div className="flex items-center mt-3">
                          <div className="flex -space-x-2">
                            {trip.avatars.map((avatar, i) => (
                              <Image
                                key={i}
                                src={avatar}
                                alt={`Traveler ${i + 1}`}
                                width={30}
                                height={30}
                                className="rounded-full border-2 border-white"
                              />
                            ))}
                          </div>
                          <p className="ml-3 text-sm text-gray-600">
                            3/6 joined
                          </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-3 mt-5">
                          <button className="bg-[#F76C6C] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#f85a5a] hover:scale-105 transition-all duration-200">
                            Join Trip
                          </button>
                          <button className="border border-[#F76C6C] text-[#F76C6C] px-6 py-2.5 rounded-lg font-medium hover:bg-[#fff0f0] hover:scale-105 transition-all duration-200">
                            View trip details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === "Past Trips" && (
              <section className="w-full max-w-4xl mx-auto mt-8 px-4">
                

                {/* Scrollable Container */}
                <div className="flex flex-col gap-5 max-h-[600px] overflow-y-auto pr-2 scroll-smooth">
                  {pastTrips.map((trip, index) => (
                    <div
                      key={trip.id}
                      className="flex items-center justify-between border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white p-4"
                    >
                      {/* Left Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="w-60 h-36 rounded-md object-cover"
                        />
                      </div>

                      {/* Right Details */}
                      <div className="flex flex-col flex-1 px-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {trip.title}
                        </h3>

                        <div className="flex items-center text-sm text-gray-600 gap-5 mb-2">
                          <span className="flex items-center gap-1">
                            <Image src="/location.png" alt="Location" width={16} height={16} /> {trip.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Image src="/calender.png" alt="Calendar" width={16} height={16} /> {trip.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Image src="/join-icon.png" alt="Joined" width={16} height={16} /> {trip.travelers}
                          </span>
                        </div>

                        {/* Travelers Joined */}
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex -space-x-2">
                            {trip.avatars.map((img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt="traveler"
                                className="w-6 h-6 rounded-full border-2 border-white"
                              />
                            ))}
                          </div>
                          <p className="text-gray-500 text-sm">
                            {trip.travelers} travelers joined
                          </p>
                        </div>

                        {/* Button */}
                        <button className="w-fit border border-red-400 text-red-500 text-sm font-medium px-4 py-2 rounded-md hover:bg-red-50 hover:scale-105 transition-all duration-200">
                          View trip details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeTab === "Travel Photos" && (
              <div className="mt-8">
                <div className="grid grid-cols-3 gap-1">
                  {travelPhotos.map((photo, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={photo}
                        alt={`Travel Photo ${index + 1}`}
                        width={300}
                        height={200}
                        className="object-cover w-full h-48"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Similar Travelers Section */}
      <section className="w-full max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-[#121212]">
          Similar Travelers
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {travelers.slice(0, 3).map((t, index) => (
            <div
              key={index}
              className="min-w-[80px] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Image Section with Arrows */}
              <div className="relative">
                <img
                  src={t.images[currentImage[index]]}
                  alt={t.name}
                  className="w-full h-32 object-cover transition-all duration-500 ease-in-out blur-md"
                />

                {/* Match Badge */}
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-full shadow-sm">
                  {t.match}% Match
                </div>

                {/* Spots Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-normal px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                   <Image src="/ic_round-warning-amber.png" alt="Warning" width={14} height={14} className="filter invert" />
                   {t.spots} spots left
                </div>

                {/* Left Arrow */}
                <button
                  onClick={() => handlePrev(index, t.images.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow"
                >
                  <FaChevronLeft size={14} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => handleNext(index, t.images.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow"
                >
                  <FaChevronRight size={14} />
                </button>

                {/* Traveler Info */}
                <div className="absolute bottom-2 left-3 text-white drop-shadow-md">
                  <h3 className="text-sm font-normal flex items-center gap-1">
                    {t.name},<span className="font-bold text-2xl">{t.age}</span>{" "}
                    <Image src="/ic_baseline-check-circle-outline.png" alt="Verified" width={16} height={16} className="[filter:invert(0)_sepia(1)_saturate(5)_hue-rotate(100deg)]" />
                  </h3>
                  <p className="text-xs">{t.location}</p>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-2 right-20 bg-white text-black text-xs font-normal px-2 py-1 rounded-full shadow-sm flex items-center gap-1 mr-2">
                  <FaStar className="text-yellow-400" /> 4.1
                </div>

                {/* Match Badge */}
                <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <FaCheckCircle className="text-white" /> 88%
                </div>
              </div>

              {/* Card Body */}
              <div className="p-2">
                {/* Locations */}
                <div className="text-xs text-gray-600 space-y-1 mb-3">
                  <div className="flex items-center gap-2">
                    <FaCircle className="text-black text-xs" />
                    <span>{t.from}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 border-l-2 border-dotted border-black"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCircle className="text-black text-xs" />
                    <span>{t.to}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-2">
                      <Image src="/calender.png" alt="Calendar" width={16} height={16} /> {t.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaRupeeSign className="text-gray-400" /> {t.price}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {t.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-red-50 text-red-500 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {t.tags.length > 3 && (
                    <span className="text-red-500 text-xs font-bold">...</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mb-3">
                  <button className="flex items-center justify-center gap-2 flex-1 border border-red-400 text-red-500 text-sm font-medium py-1.5 rounded-md hover:bg-red-50 hover:scale-105 transition-all duration-200">
                    <Image src="/view-profile.png" alt="View Profile" width={20} height={20} className="[filter:invert(0%)_sepia(100%)_saturate(7500%)_hue-rotate(0deg)_brightness(100%)_contrast(100%)]" /> View Profile
                  </button>
                  <button className="flex items-center justify-center gap-2 flex-1 border border-red-400 text-red-500 text-sm font-medium py-1.5 rounded-md hover:bg-red-50 hover:scale-105 transition-all duration-200">
                    <Image src="/view-trip.png" alt="View Trip" width={24} height={24} className="[filter:invert(0%)_sepia(100%)_saturate(7500%)_hue-rotate(0deg)_brightness(100%)_contrast(100%)]" /> View Trip
                  </button>
                </div>

                {/* Join Trip */}
                <button className="w-full bg-red-400 hover:bg-red-500 text-white text-sm font-semibold py-2 rounded-md flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200">
                  <Image src="/join-trip.png" alt="Join Trip" width={20} height={20} className="filter invert" /> Join Trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Trip Leader Section */}
      <section className="w-full max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-[#121212]">
          Featured Trip Leader
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {travelers.slice(0, 1).map((t, index) => (
            <div
              key={index}
              className="min-w-[80px] bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Image Section with Arrows */}
              <div className="relative">
                <img
                  src={t.images[currentImage[index]]}
                  alt={t.name}
                  className="w-full h-32 object-cover transition-all duration-500 ease-in-out blur-md"
                />

                {/* Match Badge */}
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-full shadow-sm">
                  {t.match}% Match
                </div>

                {/* Spots Badge */}
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-normal px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                   <Image src="/ic_round-warning-amber.png" alt="Warning" width={14} height={14} className="filter invert" />
                   {t.spots} spots left
                </div>

                {/* Left Arrow */}
                <button
                  onClick={() => handlePrev(index, t.images.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow"
                >
                  <FaChevronLeft size={14} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={() => handleNext(index, t.images.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow"
                >
                  <FaChevronRight size={14} />
                </button>

                {/* Traveler Info */}
                <div className="absolute bottom-2 left-3 text-white drop-shadow-md">
                  <h3 className="text-sm font-normal flex items-center gap-1">
                    {t.name},<span className="font-bold text-2xl">{t.age}</span>{" "}
                    <Image src="/ic_baseline-check-circle-outline.png" alt="Verified" width={16} height={16} className="[filter:invert(0)_sepia(1)_saturate(5)_hue-rotate(100deg)]" />
                  </h3>
                  <p className="text-xs">{t.location}</p>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-2 right-20 bg-white text-black text-xs font-normal px-2 py-1 rounded-full shadow-sm flex items-center gap-1 mr-2">
                  <FaStar className="text-yellow-400" /> 4.1
                </div>

                {/* Match Badge */}
                <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-normal px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <FaCheckCircle className="text-white" /> 88%
                </div>
              </div>

              {/* Card Body */}
              <div className="p-2">
                {/* Locations */}
                <div className="text-xs text-gray-600 space-y-1 mb-3">
                  <div className="flex items-center gap-2">
                    <FaCircle className="text-black text-xs" />
                    <span>{t.from}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 border-l-2 border-dotted border-black"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCircle className="text-black text-xs" />
                    <span>{t.to}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-2">
                      <Image src="/calender.png" alt="Calendar" width={16} height={16} /> {t.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaRupeeSign className="text-gray-400" /> {t.price}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
      {t.tags.slice(0, 3).map((tag, i) => (
        <span
          key={i}
          className="bg-red-50 text-red-500 text-xs font-medium px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
      {t.tags.length > 3 && (
        <span className="text-red-500 text-xs font-bold">...</span>
      )}
    </div>

    {/* Buttons */}
                <div className="flex gap-2 mb-3">
                  <button className="flex items-center justify-center gap-2 flex-1 border border-red-400 text-red-500 text-sm font-medium py-1.5 rounded-md hover:bg-red-50 hover:scale-105 transition-all duration-200">
                    <Image src="/view-profile.png" alt="View Profile" width={20} height={20} className="[filter:invert(0%)_sepia(100%)_saturate(7500%)_hue-rotate(0deg)_brightness(100%)_contrast(100%)]" /> View Profile
                  </button>
                  <button className="flex items-center justify-center gap-2 flex-1 border border-red-400 text-red-500 text-sm font-medium py-1.5 rounded-md hover:bg-red-50 hover:scale-105 transition-all duration-200">
                    <Image src="/view-trip.png" alt="View Trip" width={24} height={24} className="[filter:invert(0%)_sepia(100%)_saturate(7500%)_hue-rotate(0deg)_brightness(100%)_contrast(100%)]" /> View Trip
                  </button>
                </div>

                {/* Join Trip */}
                <button className="w-full bg-red-400 hover:bg-red-500 text-white text-sm font-semibold py-2 rounded-md flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200">
                  <Image src="/join-trip.png" alt="Join Trip" width={20} height={20} className="filter invert" /> Join Trip
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Travel Agency Section */}
      <section className="w-full max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-[#121212]">
          Featured Travel Agency
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tripLeaders.slice(1).map((trip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={trip.images[imageIndexes[index]]}
                  alt={trip.title}
                  className="w-full h-36 object-cover transition-all duration-500"
                />

                {/* Verified Badge */}

                {trip.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Verified
                  </div>
                )}

                {/* Arrows */}
                <button
                  onClick={() => prevImage(index, trip.images.length)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={() => nextImage(index, trip.images.length)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-1.5 rounded-full shadow"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>

              {/* Content */}
              <div className="p-2">
                {/* Title and Rating */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={trip.profileImg}
                    alt="Profile"
                    className="w-10 h-10 rounded-md object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {trip.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <FaStar className="text-yellow-400" />
                      <span>{trip.rating}</span>
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-0.5 rounded-full">
                        {trip.level}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  {trip.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between text-center text-sm mb-3">
                  <div>
                    <p className="text-red-500 font-semibold">{trip.trips}+</p>
                    <p className="text-gray-500">Trips</p>
                  </div>
                  <div>
                    <p className="text-red-500 font-semibold">
                      {trip.travelers}+
                    </p>
                    <p className="text-gray-500">Travelers</p>
                  </div>
                  <div>
                    <p className="text-red-500 font-semibold">{trip.years}+</p>
                    <p className="text-gray-500">Years</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {trip.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-red-50 text-red-500 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {trip.tags.length > 2 && (
                    <span className="text-red-500 text-xs font-bold">...</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-red-400 hover:bg-red-500 text-white text-sm font-medium py-2 rounded-md hover:scale-105 transition-all duration-200">
                    View Profile
                  </button>
                  <button className="flex-1 border border-red-400 text-red-500 hover:bg-red-50 text-sm font-medium py-2 rounded-md hover:scale-105 transition-all duration-200">
                    {trip.trips > 10 ? "3 trips" : "2 trips"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Window Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isChatOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Chat with Jane Cooper</h3>
          <button
            onClick={() => setIsChatOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 text-sm">
              Start a conversation with Jane Cooper
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-3 py-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.message}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              key="chat-input"
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !newMessage.trim()}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
