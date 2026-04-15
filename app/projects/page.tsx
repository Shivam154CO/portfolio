import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient"; 
import { ProjectsSection } from "@/components/main/projects";

export const metadata = {
  title: "Featured Projects | Shivam Pawar Portfolio",
  description: "A showcase of full-stack web and mobile projects built using React, Next.js, Node.js, and Supabase. From real-time dashboards to complex e-commerce platforms.",
  icons: {
    icon: "/coding.png",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full text-white">
      <div className="mt-20 px-6 md:px-16">
        <ProjectsSection />
      </div>
    </main>
  );
}