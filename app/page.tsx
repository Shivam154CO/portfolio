import Head from "next/head";
import CertificatesSection from "@/components/main/CertificatesSection";
import ContactUsSection from "@/components/main/ContactUsSection";
import { Hero } from "@/components/main/hero";
// import { AboutMeSection } from "@/components/main/AboutMeSection";
import { HighlightsSection } from "@/components/main/HighlightsSection";
import { Skills } from "@/components/main/skills";
import { ExperienceSection } from "@/components/main/ExperienceSection";
import { ProjectsSection } from "@/components/main/projects";


export const metadata = {
  title: "Shivam Pawar",
  description: "Welcome to my portfolio site.",
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
