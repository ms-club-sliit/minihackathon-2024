import React from "react";
import PastWinnersData from "../../data/PastWinners.json";
const PastWinner = () => {
  return (
    <>
      {PastWinnersData.data.map((winner) => (
        <div
          key={winner.id}
          className="grid grid-cols-1 md:grid-cols-2 mb-5 md:mb-10 px-7 py-7 border-2 border-gray-200 rounded-3xl "
        >
          {winner.id % 2 === 0 ? (
            <>
              <div className="flex self-center px-7 hidden md:block ">
                <h1 className="italic text-xl md:text-xl text-justify mb-3 font-bold text-blue-500">{`Winners of ${winner.year}`}</h1>
                <p className="italic text-xl md:text-xl text-justify">{`"${winner.description}"`}</p>
                <h1 className="text-xl md:text-xl font-bold text-justify-right mt-5">{`-${winner.name}-`}</h1>
              </div>
              <div className="flex justify-end">
                <img
                  src={winner.imageUrl}
                  alt="Mini Hackathon Logo"
                  className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl px-7 py-7"
                />
              </div>
              <div className="flex self-center px- block md:hidden">
			  <h1 className="italic text-xl md:text-xl text-justify mb-3 font-bold text-blue-500">{`Winners of ${winner.year}`}</h1>
                <p className="italic text-xl md:text-xl text-justify">{`"${winner.description}"`}</p>
                <h1 className="text-xl md:text-xl font-bold text-justify-right mt-5">{`-${winner.name}-`}</h1>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-start">
                <img
                  src={winner.imageUrl}
                  alt="Mini Hackathon Logo"
                  className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl px-14 py-14"
                />
              </div>
              <div className="flex self-center px-7">
                <p className="italic text-xl md:text-2xl text-justify">{`"${winner.description}"`}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default PastWinner;
