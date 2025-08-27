"use client";
import Image from "next/image";

export default function Title() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-0">
      <div className="relative w-full flex flex-col items-center justify-center gradient-120 rounded-[30px] py-12 px-6 lg:px-12 overflow-hidden shadow-md my-12 lg:my-20">
        
        {/* Hero Image (Behind Text) */}
        <div className="absolute -bottom-5 lg:-bottom-8 right-0 lg:right-10 w-[40%] lg:w-[30%] opacity-80">
          <Image
            src="/images/2025-images/hero-image-up.png"
            alt="Hero Rules Image"
            className="w-full h-auto object-contain"
            width={200}
            height={140}
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 text-center max-w-2xl flex flex-col gap-3 lg:gap-4">
          <p className="text-xs sm:text-sm md:text-base text-[#EF4A23] uppercase tracking-wide font-medium">
            Minihackathon 2025
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 uppercase leading-tight">
            Official Rules and <br /> Regulations
          </h1>
        </div>
      </div>
    </div>
  );
}
