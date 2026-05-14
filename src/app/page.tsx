import { AmbientBackground } from "@/components/atoms/AmbientBackground";
import { Hero } from "@/components/organisms/Hero";
import { Quotes } from "@/components/organisms/Quotes";
import { Timeline } from "@/components/organisms/Timeline";

export default function Home() {
  return (
    <main className="relative bg-black">
      <AmbientBackground />
      <div className="relative z-10">
        <Hero />
        <Quotes />
        <Timeline />
        {/* Footer será o toque final na próxima fase */}
      </div>
    </main>
  );
}
