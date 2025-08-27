"use client";
import Image from "next/image";
import HackathonImage from "../../../../public/images/2025-images/hero-image-up.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-0">
      <div className="relative w-full flex flex-col items-center justify-center gradient-120 rounded-[30px] py-8 px-6 lg:px-12 overflow-hidden shadow-md my-12 lg:my-20">
        
        {/* Hero Image (Behind Text) */}
        <div className="absolute -bottom-5 lg:-bottom-8 right-0 lg:right-8 w-[45%] lg:w-[35%] opacity-80">
          <Image
            src={HackathonImage}
            alt="Hackathon Elements"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 text-center max-w-2xl flex flex-col gap-3 lg:gap-4">
          <p className="text-xs sm:text-sm md:text-base text-[#EF4A23] uppercase tracking-wide font-medium">
            MINIHACKATHON 2025
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
            IT&apos;S HACKATHON TIME!
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            ARE YOU READY?
          </h1>
          <p className="text-sm sm:text-base md:text-base text-gray-700">
            Showcase your creativity and technical skills in our tech competition!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
            <button
              className="px-5 py-2 bg-[#EF4A23] text-white font-semibold rounded-lg hover:bg-[#D6341C] transition-colors"
              onClick={() => router.push("/register")}
            >
              Register
            </button>
            <button
              className="px-5 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#EF4A23] transition-colors flex items-center"
              onClick={() => router.push("/rules")}
            >
              Full Instructions
              <span className="material-symbols-outlined ml-1">chevron_right</span>
            </button>
          </div>

          <p className="text-gray-800 mt-2 text-sm sm:text-base">
            Registration for the competition is now closed. Thank you to everyone who registered!
          </p>
        </div>
      </div>
    </div>
  );
}
