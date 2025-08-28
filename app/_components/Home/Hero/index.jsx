"use client";
import Image from "next/image";
import HackathonImage from "../../../../public/images/2025-images/hero-image-up.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-6 sm:px-16 md:px-10 lg:px-10">
      <div className="relative w-full flex flex-col items-center justify-center min-h-[600px] lg:min-h-[600px] rounded-[40px] py-12 px-6 lg:px-16 overflow-hidden my-12 lg:my-20 bg-gradient-to-br from-orange-50 via-white to-red-50 backdrop-blur-sm border border-white/20 shadow-2xl shadow-orange-100/50">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#EF4A23]/20 to-transparent rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/4 -right-8 w-32 h-32 bg-gradient-to-br from-orange-300/30 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-1/4 w-20 h-20 bg-gradient-to-br from-red-400/25 to-transparent rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Image (Behind Text) with Enhanced Styling */}
        <div className="absolute -bottom-8 lg:-bottom-12 right-0 lg:right-12 w-[50%] lg:w-[38%] opacity-30 transform hover:scale-105 transition-transform duration-700 ease-out">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#EF4A23]/10 to-transparent blur-3xl"></div>
            <Image
              src={HackathonImage}
              alt="Hackathon Elements"
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Text Section with Modern Typography */}
        <div className="relative z-20 text-center max-w-3xl flex flex-col gap-4 lg:gap-6">
          {/* Badge */}
          <div className="inline-flex items-center justify-center">
            <div className="px-6 py-2 bg-gradient-to-r from-[#EF4A23] to-red-500 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.15em] rounded-full shadow-lg shadow-[#EF4A23]/25 border border-white/20 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              MINIHACKATHON 2025
            </div>
          </div>

          {/* Main Headlines with Enhanced Typography */}
          <div className="space-y-2 lg:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight tracking-tight">
              IT&apos;S HACKATHON TIME!
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-[#EF4A23] via-red-500 to-orange-600 bg-clip-text text-transparent leading-none tracking-tighter drop-shadow-sm">
              ARE YOU READY?
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Showcase your creativity and technical skills in our tech competition!
          </p>

          {/* Modern Button Group */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              className="group px-8 py-4 bg-gradient-to-r from-[#EF4A23] to-red-500 text-white font-bold text-lg rounded-2xl hover:from-red-500 hover:to-[#EF4A23] transition-all duration-300 shadow-xl shadow-[#EF4A23]/25 hover:shadow-2xl hover:shadow-[#EF4A23]/40 transform hover:-translate-y-1 hover:scale-105 border border-white/10 backdrop-blur-sm"
              onClick={() => router.push("/register")}
            >
              <span className="flex items-center justify-center">
                Register Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-800 font-bold text-lg rounded-2xl hover:bg-white hover:border-[#EF4A23] hover:text-[#EF4A23] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              onClick={() => router.push("/rules")}
            >
              <span className="flex items-center justify-center">
                Full Instructions
                <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300">chevron_right</span>
              </span>
            </button>
          </div>

          {/* Status Message with Enhanced Styling */}
          {/* <div className="mt-8 p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
            <p className="text-gray-800 text-base sm:text-lg font-semibold flex items-center justify-center">
              <svg className="w-5 h-5 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Registration for the competition is now closed. Thank you to everyone who registered!
            </p>
          </div> */}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-2 h-2 bg-[#EF4A23] rounded-full animate-ping"></div>
        <div className="absolute top-16 right-16 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse delay-700"></div>
      </div>
    </div>
  );
}