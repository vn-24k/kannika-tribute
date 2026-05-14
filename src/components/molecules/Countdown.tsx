"use client";
import { useEffect, useState } from "react";
import { Reveal } from "../atoms/Reveal";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const target = new Date("2026-05-19T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center mt-12">
      {Object.entries(timeLeft).map(([label, value], idx) => (
        <Reveal key={label} delay={0.6 + idx * 0.1}>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-extralight text-white tabular-nums">
              {value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-yellow-500/50 mt-2">
              {label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
