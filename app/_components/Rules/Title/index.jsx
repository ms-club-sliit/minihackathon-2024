import Image from "next/image";

export default function Title() {
  return (
    <div className="container mx-auto text-justify text-[#161414] px-10 lg:px-0">
      <div className="relative w-full h-[350px] flex gradient-45 rounded-[50px] mt-10 mb-40 lg:my-20">
        <div className="w-full lg:w-[90%] h-full flex flex-col mt-10 lg:mt-0 lg:justify-center items-center">
          <p className="text-xl lg:text-4xl uppercase text-[#1E8FFE] my-3">
            Minihackathon 2024
          </p>
          <p className="text-4xl lg:text-7xl font-bold text-center uppercase">
            Official Rules and <br />
            Regulations
          </p>
        </div>
        <Image
          className="absolute lg:right-32 -bottom-40 lg:-bottom-24"
          src="/images/robot-right.png"
          alt="robot"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}
