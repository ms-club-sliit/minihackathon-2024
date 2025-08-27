"use client";
import { useState, useEffect } from "react";

export default function Timer() {
  const targetDate = new Date("2025-09-01T17:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Calculate initial time left on client side only
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  const createCircle = (value, max, label) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = (1 - value / max) * circumference;

    return (
      <div className="flex flex-col items-center group">
        {/* Timer Circle Container - Better Mobile Sizing */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 p-3 sm:p-4 bg-white/30 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/40">
          
          {/* Progress Ring */}
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Circle */}
            <circle
              cx="50%"
              cy="50%"
              r={`${radius}%`}
              stroke="rgba(0, 0, 0, 0.1)"
              strokeWidth="8"
              fill="none"
              className="drop-shadow-sm"
            />
            {/* Progress Circle */}
            <circle
              cx="50%"
              cy="50%"
              r={`${radius}%`}
              stroke="#EF4A23"
              strokeWidth="8"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              fill="none"
              strokeLinecap="round"
              className="drop-shadow-md transition-all duration-500"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(239, 74, 35, 0.3))'
              }}
            />
          </svg>
          
          {/* Value Display - Mobile Optimized */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:scale-110">
              {value.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#EF4A23]/5 via-transparent to-orange-400/5 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
        </div>
        
        {/* Label - Mobile Optimized Typography */}
        <div className="mt-1 xs:mt-2 sm:mt-3 text-center">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 uppercase tracking-wide">
            {label}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Timer Grid - Mobile Responsive Layout */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 max-w-5xl mx-auto">
        {createCircle(days, 365, "Days")}
        {createCircle(hours, 24, "Hours")}
        {createCircle(minutes, 60, "Minutes")}
        {createCircle(seconds, 60, "Seconds")}
      </div>

      {/* Additional Info Row for Mobile */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-xs sm:text-sm text-gray-600 font-medium">
          Until the awareness session begins
        </p>
      </div>
    </div>
  );
}