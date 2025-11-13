

// searchtrip/page

"use client";

import { useState } from "react";
import { Flame } from "lucide-react";
import TripCard from "@/src/app/searchtrip/components/TripsCard";
import LeaderTrips from "@/src/app/searchtrip/components/LeaderTrips";
import AgencyCarousel from "@/src/app/searchtrip/components/AgencyCarousel";
import Filters from "@/src/app/searchtrip/components/Filters";

/** DEBUG flag */
const DEBUG = false;

export default function Page() {
  // Filter states
  const [query, setQuery] = useState("");
  const [age, setAge] = useState(18);
  const [duration, setDuration] = useState(5);
  const [budget, setBudget] = useState(15000);
  const [minRating, setMinRating] = useState(0);
  const [minSafeScore, setMinSafeScore] = useState(0);

  // Active filter chip
  const [activeFilter, setActiveFilter] = useState<"all" | "enthusiast" | "agency" | "leader">("all");

  // Chip helper
  const chipClass = (type: "enthusiast" | "agency" | "leader") =>
    `px-3 py-1.5 rounded-full text-sm font-medium border transition ${
      activeFilter === type
        ? "bg-[#0A4D4A] text-white"
        : "bg-white text-gray-700 border-gray-200 hover:shadow-sm"
    }`;

  return (
    <div className="min-h-screen p-6 md:p-10 mt-11">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* Filters Panel */}
        <aside className="col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="sticky top-6">
            <Filters
              query={query}
              setQuery={setQuery}
              age={age}
              setAge={setAge}
              duration={duration}
              setDuration={setDuration}
              budget={budget}
              setBudget={setBudget}
              minRating={minRating}
              setMinRating={setMinRating}
              minSafeScore={minSafeScore}
              setMinSafeScore={setMinSafeScore}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-12 lg:col-span-8 xl:col-span-9">
          {/* Filter Chips */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-medium w-fit">
  <Flame className="w-4 h-4 text-orange-500" />
  <span>Trending</span>
</div>

            <button
              onClick={() => setActiveFilter((s) => (s === "enthusiast" ? "all" : "enthusiast"))}
              className={chipClass("enthusiast")}
              aria-pressed={activeFilter === "enthusiast"}
              title="Filter by Travel Enthusiast"
            >
              Travel Enthusiast
            </button>

            <button
              onClick={() => setActiveFilter((s) => (s === "agency" ? "all" : "agency"))}
              className={chipClass("agency")}
              aria-pressed={activeFilter === "agency"}
              title="Filter by Featured Trip Agency"
            >
              Featured Trip Agency
            </button>

            <button
              onClick={() => setActiveFilter((s) => (s === "leader" ? "all" : "leader"))}
              className={chipClass("leader")}
              aria-pressed={activeFilter === "leader"}
              title="Filter by Featured Trip Leader"
            >
              Featured Trip Leader
            </button>
          </div>

          {/* Best Match Trips */}
          {(activeFilter === "all" || activeFilter === "enthusiast") && (
            <section className="">
              <h3 className="text-lg font-semibold mb-4">Best Match</h3>
              <TripCard compact={false} /> {/* TripCard internally handles its demo data */}
            </section>
          )}

          {/* Featured Trip Leaders */}
          {(activeFilter === "all" || activeFilter === "leader") && (
            <section className="mb-6 ml-2">
              <h3 className="text-lg font-semibold  mb-8">Featured Trip Leaders</h3>
              <LeaderTrips compact={false} /> 
            </section>
          )}

          {/* Agencies */}
          {(activeFilter === "all" || activeFilter === "agency") && (
            <section >
              <h3 className="text-lg font-semibold mb-8">Featured Travel Agencies</h3>
              <AgencyCarousel /> {/* AgencyCarousel has internal demo data */}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
