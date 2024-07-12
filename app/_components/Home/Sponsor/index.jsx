import Image from "next/image";
import sponsorData from "../../../data/home/sponsors.json"


const Sponsors = () => {
  return (
    <div className="relative text-center justify-center bg-cover bg-no-repeat py-8" >
        {Object.keys(sponsorData).map((category) => (
            <div key={category}>
            <h2 className="text-6xl font-bold mb-4">{category}</h2>
            <div className="flex flex-row justify-center bg-sponsors-bg bg-no-repeat bg-center py-8">
              {sponsorData[category].map((Sponsor) => (
                <div key={Sponsor.id} className=" items-center mx-4">
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
  );
};

export default Sponsors;