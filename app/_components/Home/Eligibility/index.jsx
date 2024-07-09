// TODO: Create a Eligibility component.
export default function Eligibility() {
  return (
    <main id="eligibility" className="mb-14">
      <h1 className="text-2xl text-[#1E293B] font-bold text-center mb-4">
        Who Can Participate?
      </h1>
      <h3 className="text-[10px] text-[#475569] text-center mx-11 mb-7">Open to Students of Sri Lanka Institute of Information Technology (SLIIT) from the following batches.</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-[#E2E2E2] text-[#312F2F] text-[13px] px-[39px] py-[13px] rounded-[52px]">All 1st Year Students</div>
        <div className="bg-[#E2E2E2] text-[#312F2F] text-[13px] px-[39px] py-[13px] rounded-[52px]">All 2nd Year Students</div>
        <div className="bg-[#E2E2E2] text-[#312F2F] text-[13px] px-[39px] py-[13px] rounded-[52px]">All 3rd Year 1st Semester Students</div>
      </div>
    </main>
  );
}
