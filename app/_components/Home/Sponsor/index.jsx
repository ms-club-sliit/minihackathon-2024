// TODO: Create a Sponsor component.
import Image from "next/image";
import sponsorData from "../../../data/home/sponsors/goldSponsors.json"

export default function Sponsor() {
    return (
      <div className="relative flex items-center justify-center h-screen bg-cover bg-no-repeat"  >
      <div className="text-center p-8 bg-white bg-opacity-75 rounded-lg">
        <h1 id="sponsor" className="text-6xl font-bold mb-4">Gold Sponsor</h1>
      <div className="flex flex-row justify-center">
          {sponsorData.map((Sponsor) => (
            <div key={Sponsor.id} className="flex flex-row justify-center mx-4">
              <Image
                className="w-[300px]"
                src={Sponsor.src}
                alt={Sponsor.alt}
                width={Sponsor.width}
                height={Sponsor.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    );
  }
  