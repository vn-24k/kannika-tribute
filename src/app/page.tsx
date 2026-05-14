import { Hero } from "@/components/layout/Hero";
import { Quotes } from "@/components/layout/Quotes";
import { Timeline } from "@/components/layout/Timeline";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Quotes />
      <Timeline />
      <Footer />
    </main>
  );
}
