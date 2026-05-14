"use client";
import { motion } from "framer-motion";
import { Reveal } from "../atoms/Reveal";

const milestones = [
  { year: "2024", title: "Primeiro Encontro", desc: "Onde cada detalhe da nossa história começou a ser escrito." },
  { year: "2025", title: "Evolução", desc: "Crescendo juntos e fortalecendo o que nos une." },
  { year: "2026", title: "O Agora", desc: "Celebrando a mulher incrível que você se torna a cada dia." }
];

export const Timeline = () => (
  <section className="py-40 px-6 bg-zinc-950/20">
    <div className="max-w-6xl mx-auto">
      <Reveal className="mb-24">
        <h2 className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase">The Journey</h2>
      </Reveal>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {milestones.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-yellow-500/20 hover:bg-white/[0.04] transition-all duration-500"
          >
            <span className="text-yellow-500/40 font-mono text-xs mb-6 block">{m.year}</span>
            <h3 className="text-2xl text-white font-light mb-4">{m.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
