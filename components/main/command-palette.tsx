"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RocketLaunchIcon, 
  UserIcon, 
  CodeBracketIcon, 
  BriefcaseIcon, 
  AcademicCapIcon, 
  EnvelopeIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants";

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/10 bg-[#030014]/90 shadow-[0_0_50px_rgba(112,66,248,0.2)] backdrop-blur-2xl"
          >
            <Command className="flex flex-col h-full">
              <div className="flex items-center border-b border-white/10 px-4">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-2" />
                <Command.Input
                  autoFocus
                  placeholder="Command Center: Navigate anywhere..."
                  className="w-full bg-transparent py-4 text-white placeholder-gray-500 outline-none text-sm"
                />
                <div className="flex items-center gap-1 rounded bg-white/5 px-1.5 py-0.5 border border-white/10">
                  <span className="text-[10px] text-gray-400 font-mono">ESC</span>
                </div>
              </div>

              <Command.List className="max-h-[400px] overflow-y-auto p-2 scrollbar-hide">
                <Command.Empty className="px-4 py-8 text-center text-sm text-gray-500">
                  No coordinates found...
                </Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {NAV_LINKS.map((link) => (
                    <Command.Item
                      key={link.title}
                      onSelect={() => runCommand(() => router.push(link.link))}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 aria-selected:bg-white/10 aria-selected:text-white"
                    >
                      <RocketLaunchIcon className="h-4 w-4" />
                      <span>{link.title}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Direct Actions" className="px-2 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                   <Command.Item
                      onSelect={() => runCommand(() => window.open('https://github.com/Shivam154CO', '_blank'))}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 aria-selected:bg-white/10 aria-selected:text-white"
                    >
                      <CodeBracketIcon className="h-4 w-4" />
                      <span>Open GitHub Profile</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => runCommand(() => window.open('mailto:shivampawar44330j@gmail.com', '_blank'))}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 aria-selected:bg-white/10 aria-selected:text-white"
                    >
                      <EnvelopeIcon className="h-4 w-4" />
                      <span>Email Directly</span>
                    </Command.Item>
                </Command.Group>
                
                <div className="p-4 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl mt-2 border border-purple-500/10">
                    <p className="text-xs text-purple-300 font-medium">✨ Pro Tip: Use <kbd className="font-mono text-white">Cmd+K</kbd> anywhere to launch the Command Center.</p>
                </div>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
