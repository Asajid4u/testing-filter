





"use client";

import Image from "next/image";
import { ArrowLeft, MapPin, CalendarDays } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
        alt="Bali Beach"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

{/* Content Wrapper with left-right padding */}
<div className="absolute inset-0 flex flex-col justify-between px-20 py-6 text-white">

  {/* Top Navigation */}
<div className="flex items-center gap-2">
  <div className="flex items-center gap-2 px-4 py-2 text-xl md:text-1xl text-black">
    <ArrowLeft size={28} className="text-black" />
    <span className="font-semibold">Back</span>
  </div>
</div>


  {/* Bottom Info Section */}
  <div>
    <div className="bg-[#FF6B6B] text-white font-semibold px-4 py-1 rounded-full inline-block mb-2">
      Beach & Culture
    </div>

<h2 className="text-lg md:text-xl font-medium leading-snug mb-2">
  Bali Beach & Culture Adventure
</h2>

    <div className="flex items-center gap-6 text-sm opacity-90">
      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-[#FFFFFF]" />
        <span>Bali, Indonesia</span>
      </div>
      <div className="flex items-center gap-2">
        <CalendarDays size={16} className="text-[#FFFFFF]" />
        <span>10 days</span>
      </div>
    </div>
  </div>

</div>


    </div>
  );
}
