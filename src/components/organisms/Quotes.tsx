"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../atoms/Reveal";

export const Quotes = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);

  return (
    <section ref={targetRef} className="h-[80vh] flex items-center justify-center bg-black/20">
      <motion.div style={{ opacity, scale }} className="max-w-4xl px-10 text-center">
        <Reveal delay={0.2}>
          <span className="text-yellow-500/40 text-[9px] tracking-[0.8em] uppercase mb-10 block">Personal Note</span>
        </Reveal>
        <h2 className="text-3xl md:text-5xl font-extralight text-zinc-100 leading-tight italic">
          "Para o mundo, você pode ser apenas uma pessoa, mas para mim, você é o próprio mundo."
        </h2>
        <Reveal delay={0.4} className="mx-auto mt-12">
          <p className="text-zinc-600 text-xs tracking-[0.3em] font-light uppercase">
            ความรักของฉันจะอยู่เคียงข้างคุณเสมอ
          </p>
        </Reveal>
      </motion.div>
    </section>
  );
};
