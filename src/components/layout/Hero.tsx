"use client";
import { Reveal } from "../animations/Reveal";
export const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black">
    <Reveal><span className="text-yellow-500 tracking-[0.3em] text-sm uppercase mb-4 block">An Elite Dedication</span></Reveal>
    <Reveal delay={0.4}><h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">Kannika</h1></Reveal>
    <Reveal delay={0.6}><p className="text-zinc-400 text-lg">สุขสันต์วันเกิด (Feliz Aniversário).</p></Reveal>
  </section>
);
