import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient"; 
import { CertificatesSection } from "@/components/main/CertificatesSection";

export const metadata = {
  title: "Professional Certifications | Shivam Pawar",
  description: "A collection of validated certifications and achievements in Web Development, Mobile Apps, and Cloud Technologies earned by Shivam Pawar.",
  icons: {
    icon: "/coding.png",
  },
};

export default function CertificatesPage() {
  return (
    <main className="min-h-screen w-full text-white">
      <div className="mt-20 px-6 md:px-16">
        <CertificatesSection />
      </div>
    </main>
  );
}