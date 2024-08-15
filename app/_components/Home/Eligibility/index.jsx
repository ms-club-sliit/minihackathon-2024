export default function Eligibility() {
  const url = "https://teams.microsoft.com/l/message/19:4f089d55432e44b7b05e71c61a7b9bf8@thread.v2/1723704794568?context=%7B%22contextType%22%3A%22chat%22%7D";
  return (
    <main
      id="eligibility"
      className="container mx-auto px-10 lg:px-0 sm:mt-10 mt-3"
    >
      <h1 className="text-3xl text-[#1E293B] font-bold text-center mt-10 mb-4 min-[744px]:text-[40px] min-[744px]:mb-9 min-[1440px]:text-[48px] min-[1440px]:mb-7">
        Who Can Participate?
      </h1>
      <h3 className="text-base text-[#475569] text-center mb-7 min-[744px]:text-[15px] min-[744px]:mx-24 min-[744px]:mb-5 min-[1440px]:text-[19px] min-[1440px]:mx-[370px] min-[1440px]:mb-14">
        Open to Students of Sri Lanka Institute of Information Technology
        (SLIIT) from the following batches.
      </h3>
      <div className="flex flex-wrap justify-center gap-4 min-[744px]:gap-3 min-[744px]:mx-32 min-[1440px]:gap-3 font-medium">
        <div className="bg-[#E2E2E2] text-[#312F2F] text-base px-7 py-2 rounded-[52px] min-[1440px]:px-11 min-[1440px]:py-4 min-[1440px]:text-lg">
          All 1st Year Students
        </div>
        <div className="bg-[#E2E2E2] text-[#312F2F] text-base px-7 py-2 rounded-[52px] min-[1440px]:px-11 min-[1440px]:py-4 min-[1440px]:text-lg">
          All 2nd Year Students
        </div>
        <div className="bg-[#E2E2E2] text-[#312F2F] text-base px-7 py-2 rounded-[52px] min-[1440px]:px-11 min-[1440px]:py-4 min-[1440px]:text-lg">
          All 3rd Year 1st Semester Students
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="text-xs lg:text-base px-4 py-2 lg:px-8 lg:py-3 text-white bg-blue-500 rounded-lg lg:rounded-xl hover:bg-blue-700 font-bold">
            Join our Teams Channel
          </button>
        </a>
      </div>
    </main>
  );
}