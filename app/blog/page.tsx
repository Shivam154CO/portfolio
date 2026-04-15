"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { StarsCanvas } from "@/components/main/star-background";

const BLOG_POSTS = [
  {
    id: 1,
    title: "How I Built a Real-Time Dashboard with Supabase",
    excerpt: "Deep dive into the architectural choices behind building a low-latency analytics dashboard using Postgres changes.",
    date: "April 10, 2024",
    readTime: "8 min",
    category: "Fullstack",
    image: "/tech-blog-1.jpg"
  },
  {
    id: 2,
    title: "Optimizing 3D Elements in Next.js",
    excerpt: "Learn how to use Three.js and Framer Motion together without killing your page load performance.",
    date: "March 25, 2024",
    readTime: "5 min",
    category: "Frontend",
    image: "/tech-blog-2.jpg"
  }
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030014] pt-32 pb-20 px-4">
      <StarsCanvas />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 py-2"
          >
            Insights & Thought
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the boundaries of modern web development, architecture, and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {post.readTime} read
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="flex items-center gap-2 text-white font-bold group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
