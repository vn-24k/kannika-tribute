import { AmbientBackground } from "@/components/atoms/AmbientBackground";
import { Hero } from "@/components/organisms/Hero";
import { Quotes } from "@/components/organisms/Quotes";
import { Timeline } from "@/components/organisms/Timeline";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="relative bg-black selection:bg-yellow-500/30">
      <AmbientBackground />
      <div className="relative z-10">
        <Hero />
        <Quotes />
        <Timeline />
        <Footer />
      </div>
    </main>
  );
}
