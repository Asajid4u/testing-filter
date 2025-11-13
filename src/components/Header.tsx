"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // change color after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect if we're on the landing/hero page (adjust path if needed)
  const isHeroPage = pathname === "/" || pathname === "/landing-page";

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isHeroPage && !isScrolled
          ? "bg-transparent text-white"
          : "bg-white text-gray-800 shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold ${
            isHeroPage && !isScrolled ? "text-white" : "text-red-500"
          }`}
        >
          Travio.
        </Link>

        {/* Nav Links */}
        <nav
          className={`hidden md:flex items-center space-x-18 text-sm ${
            isHeroPage && !isScrolled ? "text-white" : "text-gray-800"
          }`}
        >
          <Link href="/my-trips" className="hover:text-red-500">
            My Trips
          </Link>
          <Link href="/explore" className="hover:text-red-500">
            Explore Trips
          </Link>
          <Link href="/nearby" className="hover:text-red-500">
            Nearby Essentials
          </Link>
          <Link href="/community" className="hover:text-red-500">
            Community
          </Link>
        </nav>

        {/* Login Button */}
        <Link
          href="/login"
          className={`text-sm px-4 py-2 rounded-full shadow transition ${
            isHeroPage && !isScrolled
              ? "bg-white text-red-500 hover:bg-gray-100"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          Log In
        </Link>
      </div>
    </header>
  );
}
