import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient"; 
import { AboutMeSection } from "@/components/main/AboutMeSection";

export const metadata = {
  title: "Shivam Pawar",
  description: "Welcome to my portfolio site.",
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



