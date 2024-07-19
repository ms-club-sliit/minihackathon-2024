import Image from "next/image";
import HackathonImage from "../../../../public/images/AIBot.png";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-8 m-6">
      <main className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#E6F2FF] via-[#B3D7FF] to-[#FFFFFF] rounded-3xl md:p-10 max-w-screen-lg w-full relative">
        <section className="w-full flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 md:pr-6">
            <p className="text-textBlue text-left">MINIHACKATHON 2024</p>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4 text-left">
              IT&apos;S HACKATHON TIME!
            </h2>
            <h1 className="mt-10 text-6xl font-bold text-left">
              ARE YOU READY?
            </h1>
            <p className="text-textGrey text-left mt-6">
              Showcase your creativity and technical skills<br/>In our tech
              competition!
            </p>
            <div className="mt-6 space-x-4 text-left">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 font-bold"
                style={{
                  width: "156px",
                  height: "53px",
                  borderRadius: "8px",
                }}
              >
                Register
              </button>
              <button
                className="px-4 py-2 text-blue-500 bg-white rounded border hover:bg-blue-700 hover:text-white font-bold"
                style={{
                  width: "265.66px",
                  height: "53px",
                  marginLeft: "20px",
                  borderRadius: "8px",
                }}
              >
                Get Full Instructions
              </button>
            </div>
          </div>
          <div className="w-full h-[350px] md:w-1/3 md:h-auto mt-10 md:mt-0 flex justify-center">
            <Image
              src={HackathonImage}
              alt="AI Bot"
              className="rounded-lg object-contain md:w-full md:h-auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
}