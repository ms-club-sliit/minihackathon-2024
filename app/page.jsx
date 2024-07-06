import CountdownTimer from "./_components/Home/CountdownTimer";
import Eligibility from "./_components/Home/Eligibility";
import Gallery from "./_components/Home/Gallery";
import Hero from "./_components/Home/Hero";
import PastWinners from "./_components/Home/PastWinners";
import Sponsor from "./_components/Home/Sponsor";
import Timeline from "./_components/Home/Timeline";
//
export default function Home() {
  return (
    <main>
      <Hero />
      <CountdownTimer />
      <Eligibility />
      <Timeline />
      <Gallery />
      <Sponsor />
      <PastWinners />
    </main>
  );
}