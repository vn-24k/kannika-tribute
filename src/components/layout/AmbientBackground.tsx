"use client";
import { motion } from "framer-motion";

export const AmbientBackground = () => (
  <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-yellow-600/10 blur-[140px] animate-pulse" />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
        initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
        animate={{ y: "-10vh" }}
        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
      />
    ))}
  </div>
);
