import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient"; 
import { ExperienceSection } from "@/components/main/ExperienceSection";

export const metadata = {
  title: "Professional Experience | Shivam Pawar - Journey",
  description: "A detailed timeline of Shivam Pawar's professional career, internships, and educational background in Full Stack Software Engineering.",
  icons: {
    icon: "/coding.png",
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full text-white">
      <div className="mt-20 px-6 md:px-16">
        <ExperienceSection />
      </div>
    </main>
  );
}