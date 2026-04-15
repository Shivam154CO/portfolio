"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Senior Project Manager",
    content: "Shivam's attention to detail and ability to translate complex requirements into intuitive UIs is remarkable. A top-tier developer.",
    stars: 5,
  },
  {
    name: "Sarah Chen",
    role: "Lead Frontend Engineer",
    content: "Working with Shivam was a breeze. His knowledge of React and performance optimization helped us hit our launch targets ahead of schedule.",
    stars: 5,
  },
  {
    name: "James Wilson",
    role: "Startup Founder",
    content: "The custom mobile app Shivam built for us exceeded all expectations. The performance is incredibly smooth across all devices.",
    stars: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
          Client Feedback
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Honest thoughts from people I&apos;ve collaborated with on real-world products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl">
        {TESTIMONIALS.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-6 relative group"
          >
            <div className="flex gap-1">
              {[...Array(t.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-300 italic leading-relaxed font-medium">
              &quot;{t.content}&quot;
            </p>
            <div className="mt-auto">
              <h4 className="text-white font-bold">{t.name}</h4>
              <p className="text-xs text-gray-500">{t.role}</p>
            </div>
            
            <div className="absolute top-4 right-8 text-8xl font-serif text-white/5 pointer-events-none group-hover:text-purple-500/10 transition-colors">
              &rdquo;
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
