import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { Timeline } from "@/components/layout/Timeline";
import { Quotes } from "@/components/layout/Quotes";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

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
