"use client";
import { useEffect, useState } from "react";
import { Reveal } from "../animations/Reveal";

export const Footer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("2026-05-19T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          mins: Math.floor((diff / 1000 / 60) % 60),
          secs: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-20 text-center bg-zinc-950/50 backdrop-blur-md">
      <Reveal>
        <p className="text-yellow-500/60 text-xs tracking-[0.5em] uppercase mb-8">Countdown to Her Day</p>
        <div className="flex justify-center gap-6 mb-10">
          {Object.entries(timeLeft).map(([unit, val]) => (
            <div key={unit} className="flex flex-col">
              <span className="text-3xl font-light text-white">{val.toString().padStart(2, '0')}</span>
              <span className="text-[10px] text-zinc-500 uppercase mt-1">{unit}</span>
            </div>
          ))}
        </div>
        <p className="text-zinc-500 italic text-sm">"To the woman who defines my 2026."</p>
      </Reveal>
    </footer>
  );
};
