import React from "react";
import PastWinnersData from "../../data/PastWinners.json";

const PastWinner = () => {
  return (
    <div className="relative mr-0">
      <img 
        src="images/design-left.png" 
        alt="design-left" 
        className="absolute flex flex-row justify-start py-28 bg-sponsors-bg bg-cover bg-center overflow-hidden "/>
      
      {PastWinnersData.data.map((winner) => (
        
<div className="grid grid-cols-1 md:grid-cols-2 mb-5 md:mx-auto px-7 py-7 border-2 border-gray-200 rounded-3xl max-w-6xl mx-auto mx-6">


          {winner.id % 2 === 0 ? (
            <>
              <div className="flex flex-col justify-center px-7">
                <h1 className="italic text-xl mb-3 font-bold text-blue-500">{`Winners of ${winner.year}`}</h1>
                <p className="italic text-xl text-justify">{`"${winner.description}"`}</p>
                <h1 className="text-xl font-bold text-right mt-5">{`-${winner.name}-`}</h1>
              </div>
              <div className="flex justify-end">
                <img
                  src={winner.imageUrl}
                  alt="Mini Hackathon Past winners"
                  className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl px-7 py-7"
                />
              </div>
              <div className="flex flex-col justify-center block md:hidden px-7">
                <h1 className="italic text-xl mb-3 font-bold text-blue-500">{`Winners of ${winner.year}`}</h1>
                <p className="italic text-xl text-justify">{`"${winner.description}"`}</p>
                <h1 className="text-xl font-bold text-right mt-5">{`-${winner.name}-`}</h1>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-start">
                <img
                  src={winner.imageUrl}
                  alt="Mini Hackathon past winners"
                  className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl px-7 py-7"
                />
              </div>
              <div className="flex flex-col justify-center px-7">
                <h1 className="italic text-xl mb-3 font-bold text-blue-500">{`Winners of ${winner.year}`}</h1>
                <p className="italic text-xl text-justify">{`"${winner.description}"`}</p>
                <h1 className="text-xl font-bold text-right mt-5">{`-${winner.name}-`}</h1>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default PastWinner;
