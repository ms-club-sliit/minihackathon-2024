"use client";
import { useEffect, useState } from "react";

export default function Eligibility() {
  const [isVisible, setIsVisible] = useState(false);
  const url =
    "https://teams.microsoft.com/l/channel/19%3Aef3216a7c6c5411a98ab4d315fed5b2b%40thread.tacv2/Q%20and%20A%20(Support)?groupId=998fb544-0059-40f6-a1b3-c4c2f2768078&tenantId=";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // delay for smooth animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      id="eligibility"
      className="container mx-auto px-10 lg:px-0 sm:mt-10 mt-3"
    >
      {/* Header Section */}
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
          Who Can Participate?
        </h2>
        <div className="flex justify-center mt-4 sm:mt-6">
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#EF4A23] to-red-500 rounded-full mb-5"></div>
        </div>{" "}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Open to Students of{" "}
          <span className="font-semibold text-slate-800">
            Sri Lanka Institute of Information Technology (SLIIT)
          </span>{" "}
          from the following batches.
        </p>
      </div>

      {/* Eligibility Tags */}
      <div className="flex flex-wrap justify-center gap-4 min-[744px]:gap-3 min-[744px]:mx-32 min-[1440px]:gap-3 font-medium">
        <div className="bg-[#E2E2E2] text-[#312F2F] text-base px-7 py-2 rounded-[52px] min-[1440px]:px-11 min-[1440px]:py-4 min-[1440px]:text-lg">
          All 1st Year Students
        </div>
        <div className="bg-[#E2E2E2] text-[#312F2F] text-base px-7 py-2 rounded-[52px] min-[1440px]:px-11 min-[1440px]:py-4 min-[1440px]:text-lg">
          All 2nd Year Students
        </div>
        <div className="bg-[#E2E2E2] text-[#312F2F] text-base px-7 py-2 rounded-[52px] min-[1440px]:px-11 min-[1440px]:py-4 min-[1440px]:text-lg">
          All 3rd Year 1st Semester Students
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="text-xs lg:text-base px-4 py-2 lg:px-8 lg:py-3 text-white bg-[#EF4A23] rounded-lg lg:rounded-xl hover:bg-[#D6341C] font-bold">
            Join our Teams Channel
          </button>
        </a>
      </div>
    </main>
  );
}
