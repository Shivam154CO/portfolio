"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import MyLogo from '@/public/logo.png';

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    > 
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
       <motion.div
  variants={slideInFromTop}
  className="flex items-center justify-center md:justify-start gap-2 py-[6px] px-[6px] border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit mx-auto md:mx-0"
>
  <img
    src="/coding.png"
    alt="logo"
    className="h-6 w-6 md:h-5 md:w-5 object-contain"
  />
  <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
    Fullstack Developer
  </h1>        
  </motion.div>
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Transforming{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ideas
          </span>{" "}
          into Innovative User{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experiences
          </span>
        </motion.h1>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Software Engineer specializing in building modern mobile and web applications. Check out my resume.
        </motion.p>
      <motion.a
  variants={slideInFromLeft(1)}
  href="#projects"
  className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base sm:text-base font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[110px] sm:max-w-[180px] mx-auto md:mx-0 flex items-center justify-center"
>Resume
</motion.a>

      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-end items-center mt-8 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={400}
          width={400}
          draggable={false}
          className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
        />
      </motion.div>
    </motion.div>
  );
};
