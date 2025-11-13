"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

type Step = {
  step: number;
  title: string;
  image: string;
};

export default function LandingPage() {
  const features = [
    {
      image: "/images/container1.png",
      title: "Verified Profiles",
      bgColor: "bg-blue-100",
    },
    {
      image: "/images/container2.png",
      title: "Safety Check-ins",
      bgColor: "bg-orange-100",
    },
    {
      image: "/images/container3.png",
      title: "AI-Based Compatibility & Moderation",
      bgColor: "bg-pink-100",
    },
    {
      image: "/images/container4.png",
      title: 'Emergency Assistance or "Travel Buddy" Mode',
      bgColor: "bg-green-100",
    },
  ];

  const steps: Step[] = [
    { step: 1, title: "Plan smarter with AI", image: "/images/how1.jpg" },
    {
      step: 2,
      title: "Meet verified, like-minded travelers",
      image: "/images/how2.jpg",
    },
    {
      step: 3,
      title: "Stay safe with built-in protection",
      image: "/images/how3.jpg",
    },
    {
      step: 4,
      title: "Earn rewards and discover authentic experiences",
      image: "/images/how4.jpg",
    },
  ];

  const [activeStep, setActiveStep] = useState<number>(1);
  const [imageSrc, setImageSrc] = useState<string>(steps[0].image);
  const router = useRouter();

  const handleGoToTrip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevents form reload
    router.push("/searchtrip"); // navigates to /trip page
  };

  return (
    <main className="flex flex-col">
      {/* ================= Hero Section ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/travell-people.jpg"
            alt="Hero background"
            fill
            priority
            quality={100}
            className="object-cover object-center [filter:contrast(1.05)_saturate(1.1)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,80,80,0.7)] via-[rgba(255,80,80,0.4)] to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative container max-w-4xl px-4 z-10 text-center">
          <div className="py-28 sm:py-32">
            <p className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1 text-xs mb-6 mx-auto text-white">
              <span className="text-xs">*</span> Join 50,000+ Travel Enthusiasts
            </p>

            <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-md">
              Meet
              <span className="mx-2 inline-block w-3 h-3 bg-white rounded-full"></span>
              Match
              <span className="mx-2 inline-block w-3 h-3 bg-white rounded-full"></span>
              Travel
              <span className="mx-2 inline-block w-3 h-3 bg-white rounded-full"></span>
            </h1>

            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Connect with like-minded travelers, personalize your <br />
              journey, and explore the world safely with AI-powered matches.
            </p>

            {/* Search card */}
            <div className="mt-10 flex justify-center">
              <form className="bg-white/95 rounded-md p-4 shadow-lg flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Location Input */}
                <div className="flex-1 min-w-[200px]">
                  <label htmlFor="location" className="sr-only">
                    Location
                  </label>
                  <div className="flex items-center border rounded-md px-3 py-2">
                    <Image
                      src="/images/location.png"
                      alt="Location Icon"
                      width={18}
                      height={18}
                      className="mr-2 opacity-80"
                    />
                    <input
                      id="location"
                      name="location"
                      placeholder="Simla"
                      className="bg-transparent outline-none placeholder-gray-500 text-gray-700 w-full"
                    />
                  </div>
                </div>

                {/* Date Input */}
                <div className="sm:w-44 relative">
                  <label htmlFor="date" className="sr-only">
                    Date
                  </label>
                  <div
                    className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() =>
                      document.getElementById("date")?.showPicker()
                    }
                  >
                    <Image
                      src="/images/calendar.png"
                      alt="Calendar Icon"
                      width={18}
                      height={18}
                      className="opacity-80 hover:opacity-100 transition"
                    />
                  </div>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="w-full border rounded-md pl-10 pr-3 py-2.5 bg-white outline-none text-gray-700 text-sm
      placeholder-gray-500
      [&::-webkit-calendar-picker-indicator]:opacity-0
      [&::-webkit-calendar-picker-indicator]:pointer-events-none"
                    placeholder="mm/dd/yyyy"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={handleGoToTrip}
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md shadow transition"
                >
                  Find Trips →
                </button>
              </form>
            </div>

            {/* Stats Line Below */}
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              100k+ Verified Travelers ★ 98% Safety Rating ★ AI-Powered Matching
            </p>
          </div>
        </div>
      </section>

      {/* ================= Key Features Section ================= */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side - Features */}
            <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/tripplanner1.png"
                  alt="AI Trip Planner Icon"
                  width={65}
                  height={65}
                  className="object-contain red-icon"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    AI Trip Planner
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Personalized itineraries based on your preferences, time,
                    and budget — crafted intelligently for every journey.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/travelmatching1.png"
                  alt="Travel Matching Icon"
                  width={60}
                  height={60}
                  className="object-contain text-red-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Travel Matching
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Find travel companions who share your vibe and explore
                    destinations together.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/safety1.png"
                  alt="Safety Icon"
                  width={52}
                  height={52}
                  className="object-contain text-red-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Safety & Trust
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Verified users, in-app check-ins, and trusted community
                    ratings for peace of mind.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-6">
                <Image
                  src="/images/social1.png"
                  alt="Social Discovery Icon"
                  width={63}
                  height={63}
                  className="object-contain text-red-500"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Social Discovery
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Share your travel stories, join groups, and connect with
                    explorers around the globe.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image grid */}
            <div className="grid grid-cols-2 w-[90%] md:w-[80%] lg:w-[70%] mx-auto h-auto gap-2 bg-white">
              {[
                { src: "/images/img1.jpg", alt: "Trip 1" },
                { src: "/images/img2.jpg", alt: "Trip 2" },
                { src: "/images/img3.jpg", alt: "Trip 3" },
                { src: "/images/img4.jpg", alt: "Trip 4" },
              ].map((img, i) => {
                let cornerClass = "";
                if (i === 0)
                  cornerClass = "rounded-tr-[30px] rounded-bl-[30px]";
                else if (i === 1)
                  cornerClass = "rounded-tl-[30px] rounded-br-[30px]";
                else if (i === 2)
                  cornerClass = "rounded-tl-[30px] rounded-br-[30px]";
                else if (i === 3)
                  cornerClass = "rounded-tr-[30px] rounded-bl-[30px]";

                return (
                  <div
                    key={i}
                    className={`overflow-hidden shadow-md ${cornerClass} w-full h-full`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={350}
                      height={350}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300 ease-out"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= Why Choose Travio Section ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
          Why Choose Travio?
        </h2>
        <p className="text-gray-500 mt-3">
          Experience travel like never before with features designed for modern
          explorers
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
          {[
            {
              iconBg: "bg-blue-400",
              title: "Connect Authentically",
              desc: "Meet verified travelers who share your interests, travel style, and destinations. Build meaningful connections before you go.",
              icon: <Users className="w-8 h-8 text-white" />,
            },
            {
              iconBg: "bg-teal-400",
              title: "AI-Powered Matching",
              desc: "Our smart algorithm matches you with compatible travel companions based on your preferences, personality, and travel goals.",
              icon: <Sparkles className="w-8 h-8 text-white" />,
            },
            {
              iconBg: "bg-red-400",
              title: "Travel Safely",
              desc: "Verified profiles, secure messaging, and safety features ensure you can focus on the adventure, not the worries.",
              icon: <ShieldCheck className="w-8 h-8 text-white" />,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <div
                className={`inline-flex items-center justify-center p-4 rounded-2xl shadow-md ${feature.iconBg}`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================How it Works================================== */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-1">
              How it works
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Experience travel like never before with features designed for
              modern explorers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start relative">
            {/* Left Image */}
            <div className="flex justify-center">
              <Image
                src={imageSrc}
                alt="How it works"
                width={350}
                height={350}
                className="object-cover shadow-md transition-all duration-500 
             rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none"
              />
            </div>

            {/* Right Steps with Progress Bar */}
            <div className="relative mt-6 md:mt-12">
              {/* Vertical line (progress track) */}
              <div className="absolute left-4 top-0 h-full w-1 bg-gray-300 rounded-full" />

              {/* Filled progress */}
              <div
                className="absolute left-3.5 w-2 h-18 bg-gradient-to-tr from-red-400 to-red-400 rounded-full transition-all duration-500"
                style={{
                  top: `${(activeStep - 1) * (100 / (steps.length - 1))}%`,
                  transform: "translateY(-50%)",
                }}
              />

              {/* Steps */}
              <div className="flex flex-col gap-8 ml-10 relative">
                {steps.map(({ step, title, image }) => (
                  <button
                    key={step}
                    onClick={() => {
                      setActiveStep(step);
                      setImageSrc(image);
                    }}
                    className="flex items-start gap-4 text-left group"
                  >
                    {/* Step Number Circle */}
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        activeStep >= step
                          ? "bg-gradient-to-tr from-red-400 to-pink-500 text-white border-none"
                          : "border-gray-400 text-gray-600"
                      }`}
                    >
                      {step}
                    </div>

                    {/* Step Content */}
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          activeStep === step
                            ? "text-red-500"
                            : "text-gray-800 group-hover:text-red-400"
                        }`}
                      >
                        Step {step}
                      </h3>
                      <p className="text-gray-600">{title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Safety & Trust Section ================= */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900">
            Safety & Trust
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Experience travel like never before with features designed for
            modern explorers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Icon Grid */}
          <div className="grid grid-cols-2 gap-10 flex-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 rounded-full ${feature.bgColor} shadow-sm`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-700 text-sm md:text-base font-medium leading-tight">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Main image */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/safety-trust1.png"
              alt="Safety and Trust"
              className="w-[360px] h-[400px] object-cover shadow-md rounded-tl-[100px] rounded-br-[100px]"
            />
          </div>
        </div>
      </section>

      {/* ================= Join Our Global Community Section ================= */}
      <section className="bg-gray-50 py-12 px-4 md:px-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Join Our Global Community
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto">
            Hear from travelers who've found their perfect travel companions
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {[
            {
              name: "Sarah Chen",
              location: "Tokyo, Japan",
              text: "I found the perfect travel buddy for my Southeast Asia trip! We had similar interests and it made the journey unforgettable.",
              initials: "SC",
            },
            {
              name: "Marcus Rodriguez",
              location: "Barcelona, Spain",
              text: "The AI matching is incredible. Every person I connected with was genuinely compatible with my travel style.",
              initials: "MR",
            },
            {
              name: "Emma Wilson",
              location: "New York, USA",
              text: "Safety features gave me peace of mind. I felt secure meeting new people and exploring together.",
              initials: "EW",
            },
            {
              name: "Raj Patel",
              location: "Mumbai, India",
              text: "Made lifelong friends through Travio. Now we’re planning our third trip together!",
              initials: "RP",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-5 text-red-400 text-xl font-bold">
                ”
              </div>

              {/* Stars */}
              <div className="flex mb-3">
                {Array(5)
                  .fill()
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-4 h-4 text-yellow-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.4 4.304h4.523c.969 0 1.371 1.24.588 1.81l-3.66 2.661 1.4 4.304c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.662 2.777c-.784.57-1.838-.197-1.539-1.118l1.4-4.304-3.66-2.661c-.784-.57-.381-1.81.588-1.81h4.523l1.4-4.304z" />
                    </svg>
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {review.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold text-xs">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {review.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center text-center gap-8 md:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-red-500">50K+</h3>
            <p className="text-gray-500 text-xs md:text-sm">Active Travelers</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-500">150+</h3>
            <p className="text-gray-500 text-xs md:text-sm">Countries</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-500">100K+</h3>
            <p className="text-gray-500 text-xs md:text-sm">Trips Planned</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-500">4.9/5</h3>
            <p className="text-gray-500 text-xs md:text-sm">Average Rating</p>
          </div>
        </div>
      </section>

      {/* ================= Footer Section ================= */}
      <footer className="bg-[#f36b6b] text-white py-6">
        {/* Newsletter Section */}
        <div className="text-center mb-6">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-3">
              <Image
                src="/images/mail.png"
                alt="Mail Icon"
                width={40}
                height={40}
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Stay Connected</h2>
            <p className="text-sm mb-5">
              Get travel tips, match suggestions, and exclusive offers delivered
              to your inbox
            </p>
            <div className="flex justify-center items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-xl bg-white text-gray-800 w-64 outline-none placeholder:text-gray-600"
              />
              <button className="bg-white text-[#f36b6b] font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-white/30 mb-6" />

        {/* Footer Links */}
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
          {/* Logo and Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              {/* 🔴 Red circular background with icon */}
              <div className="bg-[#e05757] rounded-full p-2 w-10 h-10 flex items-center justify-center border border-white/30">
                <Image
                  src="/images/aeroplane.png"
                  alt="Travio Icon"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              Travio.
            </h3>
            <p className="text-white/80 mb-4">
              Connecting travelers worldwide for unforgettable journeys and
              meaningful friendships.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:ring-2 hover:ring-white hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:ring-2 hover:ring-white hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:ring-2 hover:ring-white hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-white/20 p-2 rounded-full hover:ring-2 hover:ring-white hover:scale-110 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">AI Tools</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety</a>
              </li>
              <li>
                <a href="#">Community Guidelines</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/30 mt-6" />

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70 mt-6 px-6">
          <p>© 2025 Travio. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
