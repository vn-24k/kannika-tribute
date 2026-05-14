import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white selection:bg-yellow-500/30">
      <AmbientBackground />
      <Hero />
      <Footer />
    </main>
  );
}
