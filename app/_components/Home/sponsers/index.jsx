"use client"
import Image from "next/image";
import { useState } from "react";
import sponsorData from "@/app/data/home/sponsors.json";

const Sponsors = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());

  // Check if sponsor data exists and has content
  if (!sponsorData || Object.keys(sponsorData).length === 0) {
    return (
      <div className="relative text-center py-8">
        <p className="text-gray-500">No sponsors data available</p>
      </div>
    );
  }

  // Flatten all sponsors into one array
  const allSponsors = Object.entries(sponsorData).flatMap(([categoryName, sponsors]) =>
    sponsors.map(sponsor => ({
      ...sponsor,
      category: categoryName
    }))
  );

  const handleImageError = (sponsorId, e) => {
    setImageErrors(prev => new Set([...prev, sponsorId]));
    e.currentTarget.src = "/images/home/sponsors/default.webp";
  };

  const handleSponsorClick = (sponsor) => {
    if (sponsor.url) {
      window.open(sponsor.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Get package color based on category
  const getPackageColor = (category) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('gold')) {
      return 'from-yellow-400 to-yellow-600';
    } else if (categoryLower.includes('silver')) {
      return 'from-gray-400 to-gray-600';
    } else if (categoryLower.includes('bronze')) {
      return 'from-orange-400 to-orange-600';
    }
    return 'from-blue-500 to-purple-500'; // Default
  };

  // Create enough duplicates for seamless infinite scroll
  const duplicatedSponsors = [
    ...allSponsors,
    ...allSponsors,
    ...allSponsors,
    ...allSponsors
  ];

  return (
    <section className="py-16 bg-white-50 dark:bg-white-900">
        
      <div className="max-w-full">
       

        {/* Single Row Slider */}
        <div className="relative overflow-hidden">

          {/* Moving container */}
          <div
            className="flex items-center gap-10 py-8 animate-scroll"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              width: "fit-content",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedSponsors.map((sponsor, index) => {
              const sponsorId = `sponsor-${sponsor.id}-${index}`;
              const isClickable = sponsor.url;
              const packageColor = getPackageColor(sponsor.category);

              return (
                <div
                  key={sponsorId}
                  className={`flex-shrink-0 group relative p-8 bg-gray-100 dark:bg-white-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                    isClickable ? 'cursor-pointer hover:border-blue-400 dark:hover:border-blue-600' : ''
                  }`}
                  onClick={() => handleSponsorClick(sponsor)}
                  tabIndex={isClickable ? 0 : -1}
                  role={isClickable ? 'button' : 'img'}
                  style={{
                    minWidth: '240px',
                    height: '180px',
                  }}
                >
                    
                  {/* Category badge - More prominent */}
                  <div className={`absolute -top-3 left-6 px-4 py-2 bg-gradient-to-r ${packageColor} text-white text-sm font-bold rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                    {sponsor.category.replace(' Sponsors', '')}
                  </div>

                  <div className="flex items-center justify-center h-full w-full mt-4">
                    <Image
                      className={`object-contain max-w-full max-h-full transition-all duration-300 ${
                        !imageErrors.has(sponsorId) ? 'filter grayscale group-hover:grayscale-0' : ''
                      }`}
                      src={sponsor.src || "/images/home/sponsors/default.webp"}
                      alt={sponsor.alt || `${sponsor.category} Sponsor`}
                      width={sponsor.width ? Math.min(sponsor.width, 200) : 200}
                      height={sponsor.height ? Math.min(sponsor.height, 120) : 120}
                      quality={90}
                      loading="lazy"
                      onError={(e) => handleImageError(sponsorId, e)}
                      sizes="240px"
                    />
                  </div>

                  {/* Click indicator */}
                  {isClickable && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg 
                          className="w-4 h-4 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
              );
            })}
          </div>
        </div>

        </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;