"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StarsCanvas } from "@/components/main/star-background";

export default function NotFound() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden bg-[#030014]">
      <StarsCanvas />
      
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 filter drop-shadow-[0_0_30px_rgba(112,66,248,0.3)]"
        >
          404
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">You&apos;ve Drifted Into Deep Space</h1>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for has been pulled into a black hole or never existed in this nebula.
          </p>
          
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(112,66,248,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            Back to Mission Control
          </Link>
        </motion.div>
      </div>

      {/* Floating Astronaut Animation or similar could go here */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-20 opacity-20 hidden md:block"
      >
        <div className="w-40 h-40 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center">
            <span className="text-xs text-white/40 font-mono italic">Lost Signal...</span>
        </div>
      </motion.div>
    </main>
  );
}
