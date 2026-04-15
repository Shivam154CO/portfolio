import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient"; 
import ContactUsSection from "@/components/main/ContactUsSection";

export const metadata = {
  title: "Get in Touch | Shivam Pawar - Hire for Projects",
  description: "Contact Shivam Pawar for collaboration, hiring, or technical consultation. Available for Full Stack development opportunities in Web and Mobile.",
  icons: {
    icon: "/coding.png",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full text-white">
      <div className="mt-20 px-6 md:px-16">
        <ContactUsSection />
      </div>
    </main>
  );
}