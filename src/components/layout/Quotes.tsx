"use client";
import { Reveal } from "../animations/Reveal";

export const Quotes = () => (
  <section className="py-40 px-6 flex flex-col items-center justify-center bg-zinc-950/30">
    <Reveal>
      <blockquote className="max-w-2xl text-center">
        <p className="text-2xl md:text-4xl font-light italic text-zinc-200 leading-relaxed">
          "Some people make the world brighter just by being in it."
        </p>
        <footer className="mt-8 text-yellow-500/50 tracking-widest text-xs uppercase">— Dedicated to You</footer>
      </blockquote>
    </Reveal>
  </section>
);
