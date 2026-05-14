"use client";
import { Reveal } from "../animations/Reveal";

export const Hero = () => (
  <section className="h-screen flex flex-col items-center justify-center text-center px-6 sticky top-0">
    <Reveal>
      <span className="text-yellow-500/80 tracking-[0.6em] text-[10px] uppercase mb-6 block font-medium">Digital Tribute • 2026</span>
    </Reveal>
    <Reveal delay={0.4}>
      <h1 className="text-7xl md:text-9xl font-extrabold mb-8 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
        Kannika
      </h1>
    </Reveal>
    <Reveal delay={0.6}>
      <div className="h-[1px] w-24 bg-yellow-500/40 mx-auto mb-8" />
      <p className="text-zinc-400 text-sm tracking-widest leading-relaxed max-w-xs mx-auto uppercase">
        สุขสันต์วันเกิด <br/> A celebration of your light.
      </p>
    </Reveal>
  </section>
);
