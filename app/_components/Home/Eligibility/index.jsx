// TODO: Create a Eligibility component.
export default function Eligibility() {
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
    </main>
  );
}
