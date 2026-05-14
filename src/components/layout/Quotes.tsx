"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Quotes = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={container} className="h-screen flex items-center justify-center bg-black">
      <motion.div style={{ opacity, scale }} className="max-w-4xl px-10 text-center">
        <h2 className="text-yellow-500/40 text-[10px] tracking-[0.8em] uppercase mb-12">The Declaration</h2>
        <p className="text-3xl md:text-5xl font-extralight text-white leading-tight italic">
          "Para o mundo, você pode ser apenas uma pessoa, mas para mim, você é o próprio mundo."
        </p>
        <p className="mt-10 text-zinc-600 text-sm tracking-widest font-light">
          ความรักของฉันจะอยู่เคียงข้างคุณเสมอ
        </p>
      </motion.div>
    </section>
  );
};
