"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { submitContactForm } from "@/lib/actions";

const TEXT_GRADIENT_CLASS = "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400";
const BUTTON_GRADIENT_ACTIVE = "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/50";

const FLATICON_IMAGES = {
  whatsapp: "https://cdn-icons-png.flaticon.com/512/124/124034.png",
  instagram: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  github: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
};

interface FlaticonIconProps {
  iconUrl: string;
  isWhatsApp?: boolean;
  className?: string;
}

const FlaticonIcon: React.FC<FlaticonIconProps> = ({ iconUrl, isWhatsApp, className = "" }) => {
  return (
    <div className={`w-6 h-6 ${className}`}>
      <Image 
        src={iconUrl} 
        alt="icon"
        width={24}
        height={24}
        className={`w-full h-full object-contain transition-all duration-300 ${
          isWhatsApp 
            ? 'filter-none' 
            : 'filter brightness-0 invert'
        }`}
      />
    </div>
  );
};

type ContactLinkProps = {
  iconUrl: string;
  title: string;
  subtitle: string;
  href: string;
  isWhatsApp?: boolean;
};

const ContactLink: React.FC<ContactLinkProps> = ({ iconUrl, title, subtitle, href, isWhatsApp }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center p-3 transition-all duration-300 rounded-lg hover:bg-white/5 cursor-pointer group border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
    >
      <div className="mr-4 flex-shrink-0">
        <FlaticonIcon 
          iconUrl={iconUrl}
          isWhatsApp={isWhatsApp}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </span>
        <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
          {subtitle}
        </span>
      </div>
    </a>
  );
};

export default function ContactUsSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" }); // website is honeypot
  const [status, setStatus] = useState<"" | "loading" | "success" | "error">("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: If 'website' value is filled, it's a bot
    if (formData.website) {
       console.warn("Honeypot filled. Bot detected.");
       setStatus("success"); // Fake success to satisfy bot scripts
       return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setFormData({ name: "", email: "", message: "", website: "" });
        setStatus("success");
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#06b6d4', '#3b82f6']
        });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to send message.");
      }
    } catch (err) {
      console.error("Unexpected error during submission:", err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred.");
    }
  };

  const isSubmitting = status === "loading";

  return (
    <div className="min-h-screen bg-transparent text-white p-4 md:p-8 flex flex-col items-center justify-center font-inter">
      <div className="text-center mb-12 px-4">
        <h1 className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3`}>
          Get in Touch
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Feel free to reach out, I&apos;ll get back to you soon.
        </p>
      </div>

      <section id="contact-form-section" className="max-w-4xl w-full flex flex-col lg:flex-row gap-6 px-4">
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <h2 className={`text-2xl font-bold mb-2 ${TEXT_GRADIENT_CLASS}`}>Let&apos;s Connect</h2>
          <p className="text-gray-400 mb-4">
            Ready to start your project? Reach out through any of these channels.
          </p>

          <div className="space-y-3 mb-6">
            <ContactLink
              iconUrl={FLATICON_IMAGES.whatsapp}
              title="WhatsApp"
              subtitle="+91 9049710195"
              href="https://wa.me/919049710195"
              isWhatsApp={true}
            />
          </div>

          <h3 className={`text-lg font-bold mt-4 mb-3 ${TEXT_GRADIENT_CLASS}`}>
            Follow Me
          </h3>

          <div className="space-y-3">
            <ContactLink
              iconUrl={FLATICON_IMAGES.instagram}
              title="Instagram"
              subtitle="Follow my journey"
              href="https://www.instagram.com/konshivammm_18/"
            />
            <ContactLink
              iconUrl={FLATICON_IMAGES.linkedin}
              title="LinkedIn"
              subtitle="Professional network"
              href="https://www.linkedin.com/in/shivampawar18/"
            />
            <ContactLink
              iconUrl={FLATICON_IMAGES.github}
              title="GitHub"
              subtitle="View my projects"
              href="https://github.com/Shivam154CO"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
          <h2 className={`text-2xl font-bold mb-4 ${TEXT_GRADIENT_CLASS}`}>
            Send a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot Field (Hidden from users, visible to bots) */}
            <div className="sr-only opacity-0 absolute pointer-events-none">
                <input 
                    name="website" 
                    value={formData.website} 
                    onChange={handleChange} 
                    tabIndex={-1} 
                    autoComplete="off" 
                />
            </div>
            {status === "success" && (
              <div className="p-3 rounded-lg bg-green-500/10 text-green-300 border border-green-500/30 text-sm backdrop-blur-sm">
                Received! Thank you for reaching out.
              </div>
            )}
            {status === "error" && (
              <div className="p-3 rounded-lg bg-red-500/10 text-red-300 border border-red-500/30 text-sm backdrop-blur-sm">
                {errorMessage}
              </div>
            )}
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-1 ${TEXT_GRADIENT_CLASS}`}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Shivam Pawar"
                required
                disabled={isSubmitting} 
                className="w-full py-2 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition duration-300 backdrop-blur-sm hover:bg-white/10 focus:bg-white/10"
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${TEXT_GRADIENT_CLASS}`}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sample@example.com"
                required
                disabled={isSubmitting} 
                className="w-full py-2 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition duration-300 backdrop-blur-sm hover:bg-white/10 focus:bg-white/10"
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-1 ${TEXT_GRADIENT_CLASS}`}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                required
                disabled={isSubmitting} 
                className="w-full py-2 px-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none transition duration-300 backdrop-blur-sm hover:bg-white/10 focus:bg-white/10"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting} 
              className={`w-full py-2 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg transform text-white backdrop-blur-sm
                ${isSubmitting
                  ? 'opacity-40 cursor-not-allowed bg-gray-600'
                  : `${BUTTON_GRADIENT_ACTIVE} hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]`
                }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
