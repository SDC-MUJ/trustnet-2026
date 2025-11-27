import About from "@/components/About";
import Banners from "@/components/Banners";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Committee from "@/components/Committee";
import Contact from "@/components/Contact";
import Schedule from "@/components/Schedule";
import CallForPapers from "@/components/CallForPapers";
import Tracks from "@/components/Tracks";
import Jaipur from "@/components/Jaipur";
import Venue from "@/components/Venue";
import Publication from "@/components/Publication";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="relative">
          <Hero />
        </div>
        <div className="relative z-10 -mt-80 md:-mt-32">
          <About />
        </div>
      </div>
      <Tracks />
      <Speakers />
      <Publication />
      <Partners />
      <Jaipur />
      <Venue />
      {/* <Contact /> */}
    </main>
  );
}
