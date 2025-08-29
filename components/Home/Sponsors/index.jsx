import React from "react";
import Sponsers from "../../../app/_components/Home/sponsers";

const PastWinnersList = () => {
  return (
    <div className="relative mr-0 px-10 lg:px-0 ">
      {/* <img
        src="images/design-left.png"
        alt="design-left"
        className="absolute -z-10 opacity-0 lg:opacity-50 lg:w-[30%] left-0 top-1/2"
      /> */}
      <div className="lg:px-20 my-10 z-10">
        <div>
          {/* Section Header */}
          <div className="text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 leading-tight px-2 sm:px-0">
              Trusted Sponsors
            </h2>
            <div className="flex justify-center mt-4 sm:mt-6">
              <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#EF4A23] to-red-500 rounded-full"></div>
            </div>{" "}
          </div>
        </div>
        <Sponsers />
      </div>
    </div>
  );
};

export default PastWinnersList;
