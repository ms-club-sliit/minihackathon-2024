// pages/index.js
import Image from 'next/image';
import HackathonImage from '../Hero/AIBot.png';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <main className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#E6F2FF] via-[#B3D7FF] to-[#FFFFFF] rounded-3xl shadow-lg p-6 md:p-10 max-w-screen-lg w-full">
        <section className="w-full flex flex-col md:flex-row">
          <div className="md:w-2/3 md:pr-6">
            <p className="text-textBlue_1 text-left">MINIHACKATHON 2024</p>
            <h2 className="text-3xl font-semibold text-gray-800 mt-4 text-left">IT'S HACKATHON TIME!</h2>
            <h1 className="mt-10 text-6xl font-bold text-left">ARE YOU READY?</h1>
            <p className="text-textGrey text-left mt-6">Showcase your creativity and technical skills in our tech competition!</p>
            <div className="mt-6 space-x-4 text-left">
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 font-bold">
                Register
              </button>
              <button className="px-4 py-2 text-blue-500 bg-white rounded border hover:bg-blue-700 hover:text-white font-bold">
                Get Full Instructions
              </button>
            </div>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
            <Image src={HackathonImage} alt="Hackathon Image" className="rounded-lg" width={350} height={350} />
          </div>
        </section>
      </main>
    </div>
  );
}