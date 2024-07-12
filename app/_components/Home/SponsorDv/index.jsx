import Image from "next/image";
import sponsorData from "../../../data/home/sponsors.json";

const Sponsors = () => {
  return (
    <div className="text-center justify-center py-8  ">
      {Object.keys(sponsorData).map((category) => (
        <div key={category} className="">
          <h2 className="text-6xl font-bold mb-4">{category}</h2>
          <div className="flex flex-row justify-center py-8 bg-sponsors-bg bg-cover bg-center">
            {sponsorData[category].map((Sponsor) => (
              <div key={Sponsor.id} className="items-center mx-4">
                <Image
                  className="rounded-xl"
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
