"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_LIST = [
  "React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", 
  "Supabase", "PostgreSQL", "Three.js", "Framer Motion", 
  "Docker", "AWS", "Git", "MongoDB", "Express", "Python"
];

export const TechMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white/5 py-10 border-y border-white/10 relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030014] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030014] to-transparent z-10" />
      
      <motion.div
        animate={{
          x: [0, -1035],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...TECH_LIST, ...TECH_LIST].map((tech, index) => (
          <div
            key={index}
            className="text-2xl md:text-4xl font-black text-white/20 hover:text-cyan-500/50 transition-colors duration-300 cursor-default uppercase tracking-tighter select-none"
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
