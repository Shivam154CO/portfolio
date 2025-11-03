"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { StarsCanvas } from "@/components/main/star-background";

const fetchProfileInfo = async () => {
  try {
    const { data, error } = await supabase
      .from('profile_info')
      .select('*')
      .single();
    
    if (error) {
      console.error('Error fetching profile info:', error);
      return null;
    }

    console.log('Fetched profile info:', data);
    return data;
  } catch (error) {
    console.error('Exception fetching profile info:', error);
    return null;
  }
};

const ProfileVisual = ({ profileData }: { profileData: any }) => (
  <motion.div
    variants={slideInFromLeft(0.5)}
    initial="hidden"
    animate="visible"
    className="relative w-full flex flex-col items-center justify-center p-6 space-y-6"
  >
    <div className="relative z-10 w-64 h-64">
      <div
        className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_80px_rgba(59,130,246,0.2)]"
      >
        <Image
          src={profileData?.profile_image || "/profile1.jpg"}
          alt="Profile"
          width={256}
          height={256}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>

    <div className="relative flex flex-col items-center space-y-4">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white">
          {profileData?.name || "Shivam Pawar"}
        </h3>
      </div>
      
      <div className="relative group">
        <div className="px-6 py-2 rounded-full border border-gray-600/50 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-slate-500/70">
          <div className="relative text-center">
            <span className="text-slate-200 font-medium text-sm tracking-wide">
              {profileData?.title || "Developer"}
            </span>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-12"></div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 pt-2">
        <a
          href={profileData?.linkedin_url || "https://www.linkedin.com/in/shivampawar18/"}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg border border-gray-600/30 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href={profileData?.github_url || "https://github.com/Shivam154CO"}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg border border-gray-600/30 hover:bg-gray-700/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href={profileData?.instagram_url || "https://www.instagram.com/konshivammm_18/"}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/5 rounded-lg border border-gray-600/30 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
        >
          <svg className="w-5 h-5 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
      <div className="flex items-center space-x-2 pt-2 text-gray-300">
        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm font-medium">{profileData?.location || "Pune, Maharashtra"}</span>
      </div>
    </div>
  </motion.div>
);

const AboutMeText = ({ profileData }: { profileData: any }) => (
  <motion.div
    variants={slideInFromRight(0.5)}
    initial="hidden"
    animate="visible"
    className="space-y-6"
  >
    <h3 className="text-2xl font-bold text-white mb-4">
      {profileData?.about_me_title || "More About Me"}
    </h3>
    
    <div className="space-y-4">
      <p className="text-gray-300 text-lg leading-relaxed">
        {profileData?.about_me_content || "Passionate developer with a journey marked by continuous learning and innovation. From humble beginnings to mastering cutting-edge technologies, every milestone represents dedication and growth in the ever-evolving world of software development."}
      </p>
      
      <p className="text-gray-300 text-lg leading-relaxed">
        {profileData?.about_me_content2 || "Specializing in full-stack development, I combine creative problem-solving with technical expertise to build solutions that make a difference. My journey reflects my commitment to excellence and my passion for turning ideas into reality."}
      </p>
    </div>
    <motion.div
      variants={slideInFromRight(0.8)}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-4 justify-start pt-4"
    >
      <a
        href="/projects"
        className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
      >
        View My Work
      </a>
      <a
        href="/contact"
        className="px-6 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
      >
        Let&apos;s Connect
      </a>
    </motion.div>
  </motion.div>
);

export const AboutMeSection = () => {
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProfileInfo();
      setProfileData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <StarsCanvas />
      
      <section id="about" className="relative flex flex-col items-center justify-center py-20 min-h-screen font-sans w-full z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-20">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h2 className="text-[48px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              About Me
            </h2>
          </motion.div>
          
          <div className="relative w-full border border-gray-600/50 rounded-3xl p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ProfileVisual profileData={profileData} />
              </div>
              <div className="space-y-6">
                <div className="border border-gray-600/30 rounded-2xl p-6 h-full">
                  <AboutMeText profileData={profileData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeSection;
