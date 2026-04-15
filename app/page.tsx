import Head from "next/head";
import CertificatesSection from "@/components/main/CertificatesSection";
import ContactUsSection from "@/components/main/ContactUsSection";
import { Hero } from "@/components/main/hero";
import { TechMarquee } from "@/components/main/tech-marquee";
import { HighlightsSection } from "@/components/main/HighlightsSection";
import { Skills } from "@/components/main/skills";
import { ExperienceSection } from "@/components/main/ExperienceSection";
import { ProjectsSection } from "@/components/main/projects";


export const metadata = {
  title: "Shivam Pawar | Full Stack Developer Portfolio",
  description: "Explore the portfolio of Shivam Pawar, a Full Stack Developer specializing in building modern web and mobile applications with React, Next.js, and Supabase.",
  keywords: ["Shivam Pawar", "Full Stack Developer", "Software Engineer", "React Developer", "Next.js Portfolio"],
  icons: {
    icon: "/coding.png",
  },
};

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section id="home">
          <Hero />
        </section>

        <TechMarquee />

        <section id="highlights">
          <HighlightsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="certificates">
          <CertificatesSection />
        </section>

        <section id="contact">
          <ContactUsSection />
        </section>
      </div>
    </main>
  );
}
