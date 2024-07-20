import React from "react";
import PastWinner from "../../../app/_components/Home/PastWinners";

const PastWinnersList = () => {
  return (
    <div className="relative mr-0">
      <img
        src="images/design-left.png"
        alt="design-left"
        className="absolute opacity-[50%] h-[760px] md:h-[800px] md:w-auto left-0 top-1/2 transform -translate-y-1/2 bg-sponsors-bg bg-cover bg-center overflow-hidden "
        />
      <div className="lg:px-20 my-5">
        <div>
          <div className="flex justify-center p-6 rounded-lg my-10">
            <h1 className="font-bold text-4xl md:text-5xl text-center">
              Past Winners
            </h1>
          </div>
        </div>
        <PastWinner />
      </div>
    </div>
  );
};

export default PastWinnersList;
