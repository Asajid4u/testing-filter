"use client";

import TripDetailsPage from "./TripDetails/TripDetailsPage";
import HeroSection from "./HeroSection";
import TripDetails from "./triphighlight/TripDetails";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-visible">
       <HeroSection />
      <TripDetailsPage/>
      <TripDetails/>
    </div>
  );
}
