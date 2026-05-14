"use client";
import { motion } from "framer-motion";
import { Countdown } from "../molecules/Countdown";

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
    {/* Fundo com névoa champanhe suave */}
    <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[60%] rounded-full bg-yellow-900/5 blur-[120px] -z-10" />
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <span className="text-[10px] tracking-[0.6em] text-yellow-500/40 uppercase mb-12 block serif italic">
        A Dedicated Celebration for My Queen
      </span>
      
      <h1 className="text-8xl md:text-[11rem] serif font-light leading-none mb-6 gold-shimmer">
        Kannika
      </h1>
      
      <div className="flex items-center justify-center gap-6 mb-12">
        <div className="h-[0.5px] w-12 bg-yellow-500/20" />
        <p className="text-zinc-400 text-[11px] tracking-[0.4em] uppercase font-light">
          19 • 05 • 2026
        </p>
        <div className="h-[0.5px] w-12 bg-yellow-500/20" />
      </div>
    </motion.div>

    <div className="mt-8">
      <Countdown />
    </div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2 }}
      className="absolute bottom-12 text-yellow-500/30 serif italic text-sm tracking-widest"
    >
      Deslize para ver o seu reino
    </motion.div>
  </section>
);
