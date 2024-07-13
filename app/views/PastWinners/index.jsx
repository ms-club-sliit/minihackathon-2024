import React from "react";
import PastWinners from "../../_components/Home/PastWinner";
import PastWinnersData from "../../data/PastWinners.json";

const PastWinners = () => {
	return (
		<div className="lg:px-20 my-5">
			<div>
				<div className="flex justify-center p-6 rounded-lg my-10">
					<h1 className="font-bold text-4xl md:text-5xl text-center">
						Past Winners
					</h1>
				</div>
			</div>
			{PastWinnersData.data.map((winner) => (
				<PastWinners data={winner} />
			))}
		</div>
	);
};

export default PastWinners;