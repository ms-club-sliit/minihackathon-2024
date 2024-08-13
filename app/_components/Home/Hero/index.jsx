import Image from "next/image";
import HackathonImage from "../../../../public/images/AIBot.png";

export default function Home() {
  return (
    <div className="container mx-auto text-justify text-[#161414] px-10 lg:px-0">
      <div className="relative w-full h-auto flex flex-row px-10 justify-left items-center lg:justify-center gradient-120 rounded-[20px] lg:rounded-[50px] my-10 lg:my-20 py-10">
        <div className="lg:pr-10">
          <div className="">
            <p className="text-xs lg:text-lg text-textBlue">
              MINIHACKATHON 2024
            </p>
            <h2 className="text-lg lg:text-3xl font-semibold text-gray-800">
              IT&apos;S HACKATHON TIME!
            </h2>
            <div className="py-2 lg:py-5">
              <h1 className="text-3xl lg:text-6xl font-bold text-left">ARE YOU READY?</h1>
              <p className="text-xs lg:text-lg text-gray-600 lg:w-[500px] text-left">
                Showcase your creativity and technical skills In our tech
                competition!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start my-2 gap-3 lg:gap-5">
            {/* <a href="/register">
              <button className="text-xs lg:text-base px-4 py-2 lg:px-8 lg:py-3 text-white bg-blue-500 rounded-lg lg:rounded-xl hover:bg-blue-700 font-bold">
                Register
              </button>
            </a> */}
            <a href="/rules">
              <button className="text-xs lg:text-base px-4 py-2 lg:px-8 lg:py-3 flex items-center text-blue-500 bg-white rounded-lg lg:rounded-xl hover:bg-blue-700 hover:text-white font-bold">
                Full Instructions
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </a>
          </div>
        </div>
        <div className="absolute lg:static right-5 bottom-1">
          <Image
            src={HackathonImage}
            alt="AI Bot"
            className="w-[150px] lg:w-[320px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
