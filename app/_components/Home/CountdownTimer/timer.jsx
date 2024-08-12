"use client";
import { useState, useEffect } from "react";

export default function Timer() {
  const targetDate = new Date("2024-08-15T19:30:00");

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Calculate initial time left on client side only
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  const createCircle = (value, max, label) => {
    const radius = isMobile ? 40 : 45;
    const circumference = isMobile
      ? 1.3 * Math.PI * radius
      : 2.5 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = (1 - value / max) * circumference;
    const strokeWidth = isMobile ? 5 : 10;

    return (
      <div className="flex flex-col items-center">
        <div className={`relative ${isMobile ? "w-16 h-16" : "w-32 h-32"}`}>
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r={`${radius}%`}
              stroke="#D9D9D9"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r={`${radius}%`}
              stroke="#0080FF"
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`text-lg ${isMobile ? "text-base" : "text-2xl"
                } font-semibold`}
            >
              {value}
            </span>
          </div>
        </div>
        <div className={`text-sm ${isMobile ? "text-xs" : "text-xl"} mt-2`}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-row justify-center space-x-2 sm:space-x-4">
      {createCircle(days, 365, "Days")}
      {createCircle(hours, 24, "Hours")}
      {createCircle(minutes, 60, "Minutes")}
      {createCircle(seconds, 60, "Seconds")}
    </div>
  );
}
