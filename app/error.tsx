"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { WrenchScrewdriverIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden bg-[#030303]">
      
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        <motion.div
          initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10"
        >
          <WrenchScrewdriverIcon className="w-12 h-12 text-white/50" />
        </motion.div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            System Failure
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
             Something went wrong with the connection or the server data. We&apos;re currently performing repairs in this sector.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowPathIcon className="w-5 h-5" />
            Try Again
          </button>
          
          <a
            href="/"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            Back to Safety
          </a>
        </div>

        <div className="pt-10">
            <p className="text-xs text-gray-600 font-mono">Error Signature: {error.digest || "UNKNOWN_SECTOR_ERROR"}</p>
        </div>
      </div>

      <div className="absolute top-10 left-10 opacity-10">
          <div className="animate-pulse flex items-center gap-2">
              <div className="w-3 h-3 bg-white/50 rounded-full"></div>
              <span className="text-xs font-mono uppercase tracking-widest">Network Alert</span>
          </div>
      </div>
    </main>
  );
}
