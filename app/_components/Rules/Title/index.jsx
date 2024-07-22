import Image from "next/image";

export default function Title() {
  return (
    <div className="container mx-auto text-justify text-[#161414] px-10 lg:px-0">
      <div className="w-full h-[350px] lg:h-[300px] flex flex-col lg:flex-row justify-center items-center gradient-45 rounded-[50px] mt-10 mb-16 lg:my-20">
        <div className="w-full lg:w-[50%] h-full flex flex-col mt-10 lg:mt-0 lg:justify-center items-center lg:items-end">
          <div className="w-fit h-fit flex flex-col mt-10 lg:mt-0 lg:justify-center items-center">
            <p className="text-lg lg:text-3xl uppercase text-[#1E8FFE] my-3">
              Minihackathon 2024
            </p>
            <p className="text-3xl px-5 lg:px-0 lg:text-6xl font-bold text-center uppercase">
              Official Rules and <br />
              Regulations
            </p>
          </div>
        </div>
        <Image
          className="block w-[220px] lg:w-[300px]"
          src="/images/robot-right.png"
          alt="robot"
          width={400}
          height={200}
        />
      </div>
    </div>
  );
}
