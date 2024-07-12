
import Image from "next/image";
import sponsorData from "../../../data/home/sponsors.json"


const Sponsors = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-no-repeat"  >
      <div className="text-center p-8 bg-white bg-opacity-75 rounded-lg">
        {Object.keys(sponsorData).map((category) => (
            <div key={category}>
            <h2 className="text-6xl font-bold mb-4">{category}</h2>
            <div className="flex flex-row justify-center">
                {sponsorData[category].map((Sponsor) => (
                <div key={Sponsor.id} className="flex flex-row items-center mx-4">
                    <Image
                    className="rounded-xl w-[300px]"
                    src={Sponsor.src}
                    alt={Sponsor.alt}
                    width={Sponsor.width}
                    height={Sponsor.height}
                    />
                </div>
                ))}
            </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default Sponsors;
