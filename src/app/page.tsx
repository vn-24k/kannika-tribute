import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { Timeline } from "@/components/layout/Timeline";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white bg-black">
      <AmbientBackground />
      <Hero />
      <Timeline />
      <Footer />
    </main>
  );
}
