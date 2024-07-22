import React from "react";
import PastWinnersData from "../../../data/home/PastWinners.json";

const PastWinner = () => {
  return (
    <>
      {PastWinnersData.data.length > 0 ? (
        PastWinnersData.data.map((winner, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 mb-5 md:mx-auto px-7 py-7 border-2 border-gray-200 rounded-3xl max-w-6xl mx-auto mx-8 z-50 bg-white"
          >
            {winner.id % 2 === 0 ? (
              <div className="flex flex-col lg:flex-row-reverse lg:flex-row col-span-2 gap-10 p-2">
                <div className="flex justify-start">
                  <img
                    src={winner.imageUrl}
                    alt="Mini Hackathon past winners"
                    className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="italic text-base lg:text-xl mb-3 font-bold text-blue-500">{`Winners of ${winner.year}`}</h1>
                  <p className="italic text-base lg:text-xl text-justify">{`"${winner.description}"`}</p>
                  <h1 className="text-base lg:text-xl font-bold text-right mt-5">{`-${winner.name}-`}</h1>
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row col-span-2 gap-10 p-2">
                <div className="flex justify-start">
                  <img
                    src={winner.imageUrl}
                    alt="Mini Hackathon past winners"
                    className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="italic text-base lg:text-xl mb-3 font-bold text-blue-500">{`Winners of ${winner.year}`}</h1>
                  <p className="italic text-base lg:text-xl text-justify">{`"${winner.description}"`}</p>
                  <h1 className="text-base lg:text-xl font-bold text-right mt-5">{`-${winner.name}-`}</h1>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold text-gray-500">
            No past winners found.
          </h1>
        </div>
      )}
    </>
  );
};

export default PastWinner;
