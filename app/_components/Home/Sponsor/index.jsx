import Image from "next/image";
import sponsor from "@/data/home/sponsors.json";
// Use transparent sponsor logos for best effect
const Sponsors = () => {
  if (!sponsor) {
    return null;
  }
  return (
    <div className="text-center py-8">
      {Object.keys(sponsor).map((index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold">{index}</h2>
          <div className="flex flex-row justify-center py-8 bg-sponsors-bg bg-cover bg-center overflow-hidden">
            {sponsor[index] && sponsor[index].length > 0 && (
              sponsor[index].map((Sponsor) => (
                <div key={index} className="items-center mx-4">
                  <Image
                    className="rounded-xl"
                    src={Sponsor.src || '/images/home/sponsors/default.webp'}
                    alt={Sponsor.alt || 'Image Not Found'}
                    width={Sponsor.width || 300}
                    height={Sponsor.height || 300}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
