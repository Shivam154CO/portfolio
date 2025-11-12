"use client";

import { SparklesIcon, ClockIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface HeroData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  resume_link: string;
  role: string;
  created_at: string;
}

interface StatusData {
  id: string;
  type: 'current_company' | 'working_on' | 'recently_launched';
  label: string;
  value: string;
  icon: string;
  order_index: number;
  created_at: string;
  link_to?: string;
}

export const HeroContent = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [statusData, setStatusData] = useState<StatusData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      setLoading(true);
      
      const { data: heroData, error: heroError } = await supabase
        .from('hero_content')
        .select('*')
        .single();

      if (heroError) {
        console.error('Error fetching hero data:', heroError);
      } else {
        setHeroData(heroData);
      }

      const { data: statusData, error: statusError } = await supabase
        .from('status_updates')
        .select('*')
        .order('order_index', { ascending: true });

      if (statusError) {
        console.error('Error fetching status data:', statusError);
      } else {
        setStatusData(statusData || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIconComponent = (type: string) => {
    switch (type) {
      case 'current_company':
        return <BriefcaseIcon className="h-4 w-4 text-green-400 flex-shrink-0" />;
      case 'working_on':
        return <ClockIcon className="h-4 w-4 text-yellow-400 flex-shrink-0" />;
      case 'recently_launched':
        return <SparklesIcon className="h-4 w-4 text-purple-400 flex-shrink-0" />;
      default:
        return <SparklesIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case 'current_company':
        return "Currently at";
      case 'working_on':
        return "Working on";
      case 'recently_launched':
        return "Recently launched";
      default:
        return type;
    }
  };

  const getDefaultLink = (type: string, value: string) => {
    switch (type) {
      case 'current_company':
        return "#experience";
      case 'working_on':
        return "#about";
      case 'recently_launched':
        return "#projects";
      default:
        return "#";
    }
  };

  const handleStatusClick = (status: StatusData) => {
    const link = status.link_to || getDefaultLink(status.type, status.value);
    
    if (link.startsWith('#')) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(link, '_blank');
    }
  };

  const renderTitle = (title: string) => {
    if (!title) return defaultTitle;
    
    if (title.includes('<span')) {
      return (
        <div dangerouslySetInnerHTML={{ __html: title }} />
      );
    }
    
    return title;
  };

  const defaultTitle = (
    <>
      Transforming{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Ideas
      </span>{" "}
      into Innovative User{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Experiences
      </span>
    </>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20] min-h-[400px]">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  const hasStatusData = statusData.length > 0;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20 mt-12 md:mt-20 lg:mt-40 w-full z-[20]"
    > 
      <div className="w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center lg:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto lg:mx-0"
        >
          <Image
            src="/coding.png"
            alt="coding icon"
            width={24}
            height={24}
            className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
          />
          <h1 className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-200 font-semibold">
            {heroData?.role || "Fullstack Developer"}
          </h1>        
        </motion.div>
        
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white max-w-full lg:max-w-[600px] leading-snug sm:leading-tight md:leading-tight"
        >
          {heroData?.title ? renderTitle(heroData.title) : defaultTitle}
        </motion.h1>
        
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-2 sm:my-3 md:my-4 max-w-full sm:max-w-[500px] mx-auto lg:mx-0 leading-relaxed"
        >
          {heroData?.description || "I'm a Full Stack Software Engineer specializing in building modern mobile and web applications. Check out my resume."}
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          href={heroData?.resume_link || "/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 sm:py-4 px-4 sm:px-5 md:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-sm sm:text-base font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[100px] sm:max-w-[110px] md:max-w-[180px] mx-auto lg:mx-0 flex items-center justify-center"
        >
          Resume
        </motion.a>
      </div>
      
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-0"
      >
        {hasStatusData && (
          <motion.div
            variants={slideInFromRight(1)}
            className="w-full max-w-[260px] sm:max-w-[280px] bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#7042f88b] shadow-2xl"
          >
            <h3 className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-3 flex items-center gap-2">
              <SparklesIcon className="h-3 w-4 sm:h-4 sm:w-4 text-purple-400" />
              Current Status
            </h3>
            
            <div className="space-y-2 sm:space-y-3">
              {statusData.map((status) => (
                <button
                  key={status.id}
                  onClick={() => handleStatusClick(status)}
                  className="w-full text-left flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg transition-all duration-200 hover:bg-white/5 hover:scale-105 cursor-pointer group"
                >
                  {getIconComponent(status.type)}
                  <div>
                    <p className="text-[10px] sm:text-xs text-gray-400">{getLabel(status.type)}</p>
                    <p className="text-xs sm:text-sm text-white font-medium group-hover:text-purple-300 transition-colors">
                      {status.value}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={300}
          width={300}
          draggable={false}
          className="select-none drop-shadow-lg w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
        />
      </motion.div>
    </motion.div>
  );
};