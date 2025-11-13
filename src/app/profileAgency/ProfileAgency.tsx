"use client";
import React, { useEffect, useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  Star,
  BadgeCheck,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Wallet,
} from "lucide-react";

export default function TripAgency() {
  const [agency, setAgency] = useState<any>(null);
  const [trips, setTrips] = useState<any[]>([]);
  const [similarAgencies, setSimilarAgencies] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [agencyRes, tripsRes, similarRes] = await Promise.all([
          fetch("http://localhost:4000/agency"),
          fetch("http://localhost:4000/trips?agencyId=1"),
          fetch("http://localhost:4000/similarAgencies"),
        ]);

        if (!agencyRes.ok || !tripsRes.ok || !similarRes.ok)
          throw new Error("Network response was not ok");

        const agencyData = await agencyRes.json();
        const tripsData = await tripsRes.json();
        const similarData = await similarRes.json();

        setAgency(agencyData[0]);
        setTrips(tripsData);
        setSimilarAgencies(similarData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!agency) return <div className="text-center py-20">Loading...</div>;

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % similarAgencies.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + similarAgencies.length) % similarAgencies.length
    );

  const TripCard = ({ trip }: { trip: any }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:border-[#F76C6C]/40">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-52 flex shrink-0">
          <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-56 md:h-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-[#F76C6C] text-white px-2.5 py-1 rounded text-xs font-medium">
            🔥 {trip.spotsLeft} Spots left
          </span>
        </div>
        <div className="flex-1 p-5">
          <h3 className="text-lg font-bold mb-2 text-gray-900">{trip.title}</h3>
          <p className="text-gray-600 text-xs mb-3 leading-relaxed">
            {trip.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-black" /> {trip.dates}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-black" /> {trip.pax}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-black" /> {trip.duration}
            </div>
            <div className="flex items-center gap-1 font-medium">
              <Wallet className="w-3.5 h-3.5 text-black" /> {trip.price}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {trip.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="border border-gray-300 px-2.5 py-1 rounded-xl text-xs text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className="bg-[#F76C6C] hover:bg-[#f85c5c] text-white px-5 py-2 rounded-md text-xs font-medium transition">
            View Trip Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Hero Section */}
      <div
        className="relative h-60 md:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url('${agency.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative h-full">
          <button className="text-black flex items-center gap-2 pt-4 font-bold transition text-md">
            ← Back
          </button>

          <div className="absolute bottom-5 left-4 right-4 md:left-6 md:right-6">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3">
              <div className="flex items-end gap-3">
                <img
                  src={agency.logo}
                  alt="Agency Logo"
                  className="w-20 h-20 md:w-30 md:h-30 rounded-lg object-cover shadow-lg"
                />
                <div className="pl-8 pb-1">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {agency.badgeTags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="bg-[#F76C6C] text-white px-2.5 py-1 rounded-2xl text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h1 className="text-white text-xl">{agency.name}</h1>
                    <div className="flex items-center gap-1 bg-emerald-500 px-2 py-0.5 rounded-2xl">
                      <BadgeCheck className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">Verified</span>
                    </div>
                    <div className="flex items-center gap-1 bg-emerald-500 px-2 py-0.5 rounded-2xl">
                      <ShieldCheck
                        className="w-3 h-3 text-white fill-current stroke-none"
                        style={{ fill: "white", stroke: "none" }}
                      />
                      <span className="text-white text-xs">High Security</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 md:gap-3 text-white text-xs">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{agency.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span>{agency.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 md:gap-3 pb-1 w-full md:w-auto">
                <button className="flex-1 md:flex-none bg-[#F76C6C] hover:bg-[#f85c5c] text-white px-5 py-2 rounded-md text-xs font-medium transition">
                  Contact Agency
                </button>
                <button className="flex-1 md:flex-none bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-md text-xs font-medium transition">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Main Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-5">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {Object.entries(agency.stats).map(([key, value], i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-sm p-4 md:p-5 text-center border border-gray-200"
                >
                  <div className="text-[#F76C6C] text-2xl md:text-3xl font-bold mb-1">
                    {value as string}
                  </div>
                  <div className="text-gray-600 text-xs capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
              <h2 className="text-xl font-bold mb-3 text-gray-900">
                About {agency.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                {agency.about}
              </p>

              <div className="mb-4">
                <h3 className="text-sm font-bold mb-2 text-gray-900">
                  Specialities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {agency.specialities.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="border border-gray-300 px-2.5 py-1 rounded-xl text-xs text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {agency.certifications?.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold mb-2 text-gray-900">
                    Certifications & Awards
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {agency.certifications.map((item: string, i: number) => (
                      <span
                        key={i}
                        className="border border-gray-300 px-2.5 py-1 rounded-xl text-xs text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Trips */}
            <div className="space-y-4">
              <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 border-b-0">
                <div className="flex overflow-x-auto">
                  {[
                    "Upcoming Trips",
                    "Past Trips",
                    "Reviews",
                    "Travel Photos",
                  ].map((tab, i) => (
                    <button
                      key={i}
                      className={`px-5 py-3 text-sm font-medium flex items-center gap-2 whitespace-nowrap ${
                        tab === "Upcoming Trips"
                          ? "text-[#F76C6C] border-b-2 border-[#F76C6C]"
                          : "text-gray-600"
                      }`}
                    >
                      {tab}
                      {tab === "Upcoming Trips" && (
                        <span className="bg-[#F76C6C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {trips.length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {trips.length ? (
                trips.map((trip) => <TripCard key={trip.id} trip={trip} />)
              ) : (
                <p className="text-gray-500 text-sm">No upcoming trips.</p>
              )}
            </div>

            {/* ✅ Similar Agencies (updated as you wanted) */}
            
            {similarAgencies.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900">
                  Similar Travel Agencies
                </h2>

                <div className="bg-white rounded-2xl shadow-md border border-gray-200 max-w-xs overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:bg-white/95 min-h-[420px]">
                  <div className="relative w-full h-48">
                    <img
                      src={similarAgencies[currentSlide].image}
                      alt={similarAgencies[currentSlide].name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                      Verified
                    </span>

                    <button
                      onClick={prevSlide}
                      className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow transition"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow transition"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-2 w-full flex justify-center gap-1">
                      {similarAgencies.map((_, i) => (
                        <span
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full ${
                            i === currentSlide ? "bg-white" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={similarAgencies[currentSlide].logo}
                        alt="logo"
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-sm text-gray-900">
                          {similarAgencies[currentSlide].name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                          {similarAgencies[currentSlide].rating}
                          <span className="ml-2 inline-flex items-center gap-1 bg-emerald-400 px-2 py-0.5 rounded-full text-white text-[10px]">
                            <ShieldCheck className="w-3 h-3 fill-current stroke-none" />
                            High
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs mt-3 leading-snug">
                      {similarAgencies[currentSlide].description}
                    </p>

                    <div className="flex justify-between items-center mt-4">
                      <button className="bg-[#F76C6C] hover:bg-[#f85c5c] text-white text-xs px-15 py-2 rounded-md font-medium transition">
                        View Profile
                      </button>
                      <button className="border border-[#F76C6C] text-[#F76C6C] text-xs px-7 py-2 rounded-md font-medium">
                        {similarAgencies[currentSlide].trips} trips
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
              <h3 className="text-base font-bold mb-4 text-gray-900">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">
                    Response Time
                  </div>
                  <div className="text-gray-900 font-medium">
                    {agency.contact.responseTime}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">Phone</div>
                  <div className="text-gray-900 font-medium">
                    {agency.contact.phone}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">Email</div>
                  <div className="text-gray-900 font-medium">
                    {agency.contact.email}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500 text-xs mb-0.5">Website</div>
                  <a
                    href={agency.contact.website}
                    className="text-[#F76C6C] hover:underline text-sm"
                  >
                    {agency.contact.website}
                  </a>
                </div>
              </div>
              <button className="w-full mt-4 bg-[#F76C6C] hover:bg-[#f85c5c] text-white py-2.5 rounded-md text-sm font-medium transition">
                Send Message
              </button>
            </div>

            {agency.trustItems?.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
                <h3 className="text-base font-bold mb-4 text-gray-900 flex items-center gap-2">
                  <ShieldCheck
                    className="w-5 h-5 text-emerald-500 fill-current stroke-none"
                    style={{ fill: "#10B981", stroke: "none" }}
                  />
                  Trust and Safety
                </h3>
                <div className="space-y-2.5">
                  {agency.trustItems.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <BadgeCheck className="w-4 h-4 text-emerald-500 flex shrink-0" />
                      <span className="text-xs text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
              <h3 className="text-base font-bold mb-4 text-gray-900">
                Similar Agencies
              </h3>
              <div className="space-y-3">
                {similarAgencies.map((agency, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg transition-all duration-200 hover:bg-gray-200 hover:shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    <img
                      src={agency.image}
                      alt={agency.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-900">
                        {agency.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>{agency.rating}</span>
                        </div>
                        <span>•</span>
                        <ShieldCheck className="w-3 h-4 text-black" />
                        <span>{agency.trust}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
