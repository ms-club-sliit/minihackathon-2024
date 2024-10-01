// import Timer from './timer'
import dynamic from "next/dynamic";
const Timer = dynamic(() => import("./timer"), {
  ssr: false,
});
export default function CountdownTimer() {
  return (
    <div className="bg-sponsors-bg bg-cover bg-center overflow-hidden">
      <div className="row text-center lg:pb-10">
        <h2 className="text-lg lg:text-2xl text-neutral-500">
          Round 2 Live Presentations
        </h2>
        <h2 className="text-3xl lg:text-5xl font-semibold mt-2">
          Happening in!
        </h2>
      </div>
      <div className="row my-5 w-full h-auto">
        <Timer />
      </div>
    </div>
  );
}
