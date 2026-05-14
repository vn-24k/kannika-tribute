"use client";
import { motion } from "framer-motion";
import { Reveal } from "../atoms/Reveal";

const milestones = [
  { year: "2024", title: "Primeiro Encontro", desc: "O início de uma jornada escrita com luz." },
  { year: "2025", title: "Evolução", desc: "Fortalecendo laços e construindo nosso mundo." },
  { year: "2026", title: "O Agora", desc: "Celebrando a mulher magnífica que você é." }
];

export const Timeline = () => (
  <section className="py-60 px-6">
    <div className="max-w-6xl mx-auto">
      <Reveal className="mb-32 text-center mx-auto">
        <h2 className="text-zinc-600 text-[10px] tracking-[1em] uppercase">The Journey</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((m, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10, borderColor: 'rgba(234,179,8,0.2)' }}
            className="glass-card p-12 rounded-[40px] transition-all duration-700"
          >
            <span className="text-yellow-500/30 font-mono text-[10px] mb-8 block tracking-widest">{m.year}</span>
            <h3 className="text-3xl text-white font-light mb-6 tracking-tight">{m.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
