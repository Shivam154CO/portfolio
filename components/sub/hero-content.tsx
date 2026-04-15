"use client";

import { useEffect, useState } from "react";
import { SparklesIcon, ClockIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { getHeroData, getStatusUpdates } from "@/lib/actions";
import { ResumeModal } from "@/components/main/resume-modal";

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
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [hero, status] = await Promise.all([getHeroData(), getStatusUpdates()]);
      setHeroData(hero);
      setStatusData(status);
      setLoading(false);
    };
    fetchData();
  }, []);

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

        {hasStatusData && (
          <motion.div 
            variants={slideInFromLeft(0.9)}
            className="flex flex-wrap items-center gap-3 mt-1 mb-6 justify-center lg:justify-start"
          >
            {statusData.map((status) => (
              <button
                key={status.id}
                onClick={() => handleStatusClick(status)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                {getIconComponent(status.type)}
                <span className="text-[10px] sm:text-xs text-gray-300 group-hover:text-white transition-colors">
                  <span className="text-gray-500 mr-1 italic font-medium">{getLabel(status.type)}:</span>
                  {status.value}
                </span>
              </button>
            ))}
          </motion.div>
        )}

        <motion.button
          variants={slideInFromLeft(1)}
          onClick={() => setIsResumeOpen(true)}
          className="py-3 sm:py-4 px-4 sm:px-5 md:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-sm sm:text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#7D43FF]/10 active:scale-95 max-w-[100px] sm:max-w-[110px] md:max-w-[180px] mx-auto lg:mx-0 flex items-center justify-center cursor-pointer"
        >
          View Resume
        </motion.button>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex flex-col lg:flex-row justify-center lg:justify-end items-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-0"
      >


        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={300}
          width={300}
          draggable={false}
          className="select-none drop-shadow-lg w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
        />
      </motion.div>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={heroData?.resume_link || "/resume.pdf"}
      />
    </motion.div>
  );
};