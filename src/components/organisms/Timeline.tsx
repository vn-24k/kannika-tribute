"use client";
import { motion } from "framer-motion";

const events = [
  { year: "2024", title: "O Despertar", desc: "Onde o brilho nos seus olhos mudou o meu mundo." },
  { year: "2025", title: "A Aliança", desc: "Cada dia um novo capítulo de um conto de fadas real." },
  { year: "2026", title: "O Legado", desc: "Sua existência é o meu maior presente." }
];

export const Timeline = () => (
  <section className="py-40 px-6">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {events.map((e, i) => (
        <motion.div 
          key={i}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="princess-card p-12 rounded-sm text-center"
        >
          <span className="text-yellow-500/40 serif italic text-lg mb-4 block">{e.year}</span>
          <h3 className="text-xl text-white font-light tracking-widest mb-6 uppercase">{e.title}</h3>
          <p className="text-zinc-500 text-sm leading-relaxed serif italic">{e.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
