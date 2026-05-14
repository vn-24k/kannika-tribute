"use client";
import { Reveal } from "../atoms/Reveal";
import { Countdown } from "../molecules/Countdown";

export const Hero = () => (
  <section className="relative h-screen flex flex-col items-center justify-center bg-black">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/10 via-black to-black -z-10" />
    <Reveal delay={0.2} className="mb-4">
      <span className="text-[10px] tracking-[0.8em] uppercase text-yellow-500/50 font-bold">A Special Tribute</span>
    </Reveal>
    <Reveal delay={0.4}>
      <h1 className="text-8xl md:text-[14rem] font-black tracking-[0.1em] gold-gradient leading-none">
        KANNIKA
      </h1>
    </Reveal>
    <Reveal delay={0.6}>
      <p className="mt-8 text-zinc-500 tracking-[0.4em] text-xs uppercase font-light">
        สุขสันต์วันเกิด — 19.05.2026
      </p>
    </Reveal>
    <Countdown />
  </section>
);
