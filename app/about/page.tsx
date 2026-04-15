import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient"; 
import { AboutMeSection } from "@/components/main/AboutMeSection";

export const metadata = {
  title: "About Me | Shivam Pawar - Full Stack Engineer",
  description: "Learn more about Shivam Pawar's journey as a software developer. Expertise in full-stack development, mobile apps, and UI/UX design.",
  icons: {
    icon: "/coding.png",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full text-white">
      <div className="mt-20 px-6 md:px-16">
        <AboutMeSection />
      </div>
    </main>
  );
}



