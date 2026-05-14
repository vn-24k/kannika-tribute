"use client";
import { motion } from "framer-motion";

const milestones = [
  { year: "2024", title: "Primeiro Encontro", desc: "O início de uma jornada inesquecível." },
  { year: "2025", title: "Evolução", desc: "Construindo sonhos e compartilhando a vida." },
  { year: "2026", title: "O Agora", desc: "Celebrando a mulher que define meu presente." }
];

export const Timeline = () => (
  <section className="py-40 px-6 bg-zinc-950">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {milestones.map((m, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-yellow-500/30 transition-colors group"
          >
            <span className="text-yellow-500 font-mono text-xs tracking-tighter block mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
              {m.year}
            </span>
            <h3 className="text-xl text-white font-medium mb-3">{m.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
