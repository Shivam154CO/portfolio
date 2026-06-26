"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden bg-[#030303]">
      
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[150px] md:text-[200px] font-black leading-none text-white filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
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
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you are looking for has been pulled into a black hole or never existed in this nebula.
          </p>
          
          <Link
            href="/"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Back to Mission Control
          </Link>
        </motion.div>
      </div>

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
