// import Timer from './timer'
import dynamic from "next/dynamic";
const Timer = dynamic(() => import("./timer"), {
  ssr: false,
});

export default function CountdownTimer() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Header Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          
          {/* Event Badge - Mobile Responsive */}
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#EF4A23]/10 to-red-500/10 border border-[#EF4A23]/20 text-[#EF4A23] text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full">
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#EF4A23] rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
              Upcoming Event
            </div>
          </div>

          {/* Typography Section - Mobile First */}
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium tracking-wide">
              Awareness Session
            </h3>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
              Happening In!
            </h2>
            
            {/* Decorative Element - Mobile Responsive */}
            <div className="flex justify-center mt-4 sm:mt-6">
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#EF4A23] to-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Timer Container - Mobile Optimized */}
        <div className="relative">
          {/* Background Decorative Elements - Scaled for Mobile */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-[#EF4A23]/5 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-gradient-to-tl from-red-400/5 to-transparent rounded-full blur-2xl sm:blur-3xl"></div>
          </div>
          
          {/* Timer Wrapper - Mobile First Design */}
          <div className="relative bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl shadow-gray-100/50 mx-2 sm:mx-0">
            
            {/* Inner Container */}
            <div className="relative z-10">
              <Timer />
            </div>

            {/* Decorative Corner Elements - Mobile Scaled */}
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-br from-[#EF4A23]/20 to-transparent rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl lg:rounded-tl-[2rem]"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-tl from-red-500/20 to-transparent rounded-br-xl sm:rounded-br-2xl md:rounded-br-3xl lg:rounded-br-[2rem]"></div>
            
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EF4A23]/3 via-transparent to-red-500/3 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] pointer-events-none"></div>
          </div>
        </div>

        {/* Additional Info Section - Mobile Optimized */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 px-4 sm:px-0">
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
            Don&apos;t miss this important awareness session. Mark your calendar and join us for valuable insights and networking opportunities.
          </p>
        </div>

      </div>

      {/* Floating Decorative Elements - Mobile Safe Positioning */}
      <div className="absolute top-12 sm:top-16 left-4 sm:left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#EF4A23]/30 rounded-full animate-bounce"></div>
      <div className="absolute top-16 sm:top-24 right-6 sm:right-12 w-1 h-1 bg-red-400/40 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-16 sm:bottom-20 left-8 sm:left-16 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-400/30 rounded-full animate-ping delay-700"></div>
      <div className="absolute bottom-20 sm:bottom-32 right-10 sm:right-20 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-[#EF4A23]/50 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
}