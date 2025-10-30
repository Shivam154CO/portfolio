import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient"; 
import ContactUsSection from "@/components/main/ContactUsSection";

export const metadata = {
  title: "Shivam Pawar",
  description: "Welcome to my portfolio site.",
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