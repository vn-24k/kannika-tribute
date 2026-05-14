"use client";
import { Reveal } from "../atoms/Reveal";
import { Countdown } from "../molecules/Countdown";

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
    <div className="z-10 text-center">
      <Reveal delay={0.2}>
        <span className="text-yellow-500/60 text-[10px] tracking-[0.6em] uppercase mb-8 block">
          Exclusive Tribute • Brazil 2026
        </span>
      </Reveal>
      
      <Reveal delay={0.4}>
        <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none text-white mix-blend-difference">
          Kannika
        </h1>
      </Reveal>

      <Reveal delay={0.6}>
        <p className="mt-6 text-zinc-500 tracking-[0.2em] text-sm uppercase italic">
          สุขสันต์วันเกิด — A Journey of Light
        </p>
      </Reveal>

      <Countdown />
    </div>

    {/* Detalhe de luxo: Linha vertical de scroll */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-yellow-500/50 to-transparent" />
  </section>
);
