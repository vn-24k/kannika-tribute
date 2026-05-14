"use client";
import { Reveal } from "../animations/Reveal";

const milestones = [
  { year: "2024", title: "The Beginning", desc: "Where the story started." },
  { year: "2025", title: "Growth", desc: "Building our world together." },
  { year: "2026", title: "Dedication", desc: "Your year, your day, my everything." }
];

export const Timeline = () => (
  <section className="py-32 px-10 bg-black/50">
    <Reveal><h2 className="text-zinc-500 text-xs tracking-[0.4em] uppercase text-center mb-20">The Journey</h2></Reveal>
    <div className="max-w-4xl mx-auto border-l border-yellow-500/20 pl-8 space-y-16">
      {milestones.map((m, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
          <Reveal delay={i * 0.2}>
            <span className="text-yellow-500 font-mono text-sm">{m.year}</span>
            <h3 className="text-2xl text-white mt-1">{m.title}</h3>
            <p className="text-zinc-500 mt-2">{m.desc}</p>
          </Reveal>
        </div>
      ))}
    </div>
  </section>
);
