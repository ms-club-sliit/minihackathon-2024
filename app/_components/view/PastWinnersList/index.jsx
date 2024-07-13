import React from "react";
import PastWinnersData from "../../data/PastWinners.json"; // Ensure this is the correct path
import PastWinner from "../../Home/PastWinner";


const PastWinnersList = () => {

  return (
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
  );
};

export default PastWinnersList;