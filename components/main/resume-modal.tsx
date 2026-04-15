"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export const ResumeModal = ({ isOpen, onClose, resumeUrl }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl h-[90vh] bg-[#030014] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">CV</span>
              </div>
              <h3 className="text-white font-bold hidden sm:block">Professional Resume</h3>
            </div>
            
            <div className="flex items-center gap-2">
              <a
                href={resumeUrl}
                download
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                title="Download Resume"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
              </a>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                title="Open in New Tab"
              >
                <ArrowsPointingOutIcon className="w-5 h-5" />
              </a>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 ml-2"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 w-full relative bg-gray-900/50">
            <iframe
              src={`${resumeUrl}#toolbar=0`}
              className="w-full h-full border-none"
              title="Resume Preview"
            />
          </div>
          
          {/* Footer - Mobile optimized */}
          <div className="p-4 border-t border-white/10 bg-white/5 flex sm:hidden justify-center">
             <a
                href={resumeUrl}
                download
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-bold text-sm"
              >
                <ArrowDownTrayIcon className="w-4 h-4" /> Download
              </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
