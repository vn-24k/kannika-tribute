"use client";
import { Reveal } from "../atoms/Reveal";

export const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 bg-black text-center">
    <Reveal className="mx-auto">
      <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase">
        Digital Experience Designed by Vinícius Caetano
      </p>
      <div className="mt-6 text-zinc-500 font-light text-sm italic">
        "For the one who defines my 2026."
      </div>
    </Reveal>
  </footer>
);
