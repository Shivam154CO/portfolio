"use client";

import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import { getProjects } from "@/lib/actions";

// Reusable UI Components extracted for performance
const ArrowRightIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
));
ArrowRightIcon.displayName = "ArrowRightIcon";

const ExternalLinkIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
));
ExternalLinkIcon.displayName = "ExternalLinkIcon";

const GithubIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
));
GithubIcon.displayName = "GithubIcon";

const TechBadge = memo(({ name, icon: Icon }: { name: string; icon: any }) => (
  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full group hover:border-[#7042f88b] hover:bg-white/10 transition-all duration-300">
    <Icon className="w-3.5 h-3.5" />
    <span className="text-[10px] sm:text-xs text-gray-300 font-medium group-hover:text-white">{name}</span>
  </div>
));
TechBadge.displayName = "TechBadge";

// Simplified Icon Mapping
const mapTechNameToIcon = (techName: string) => {
    // Keep internal consistency by returning a simple component or a string
    return { name: techName, icon: () => <div className="w-4 h-4 rounded-full bg-purple-500/50"></div> };
};

type Project = {
    id: number;
    title: string;
    description: string;
    image?: string;
    secondary_images?: string[];
    github_link?: string;
    live_link?: string;
    tech_stack_names?: string[];
    features?: string[];
    project_type: "web" | "mobile" | "desktop";
};

const MobileFrame = memo(({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-[200px] sm:w-[250px] aspect-[9/19] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl p-2 overflow-hidden ring-4 ring-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-800 rounded-b-2xl z-20" />
        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative">
            {children}
        </div>
    </div>
));
MobileFrame.displayName = "MobileFrame";

const DesktopFrame = memo(({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-full max-w-[500px] h-fit bg-gray-900 rounded-xl border-[4px] border-gray-800 shadow-2xl overflow-hidden ring-4 ring-white/5">
        <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 flex items-center px-3 gap-1 z-20">
            <div className="w-2 h-2 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/50" />
        </div>
        <div className="w-full pt-6 bg-black relative">
            <div className="aspect-video relative overflow-hidden">
                {children}
            </div>
        </div>
    </div>
));
DesktopFrame.displayName = "DesktopFrame";

const ProjectCardContent = memo(({ project }: { project: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const allImages = useMemo(() => {
        let images: string[] = [];
        if (Array.isArray(project.images)) images = project.images;
        else if (typeof project.images === 'string') images = [project.images];
        else if (project.image) images = [project.image];
        else if (project.image_url) images = [project.image_url];
        if (Array.isArray(project.secondary_images)) images = [...images, ...project.secondary_images];
        return images.filter(Boolean);
    }, [project]);

    useEffect(() => {
        if (allImages.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [allImages]);

    const isMobile = project.project_type === "mobile";
    const isDesktop = project.project_type === "desktop" || project.project_type === "web";
    const finalImages = allImages.length > 0 ? allImages : ["/coding.png"];

    return (
        <div className="group relative bg-[#030014]/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(112,66,248,0.1)]">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className={`w-full lg:w-1/2 relative bg-gray-950/80 flex items-center justify-center p-6 sm:p-10 min-h-[450px] overflow-hidden`}>
                    {/* Background Blur Effect for Ultra-Premium feel */}
                    <div className="absolute inset-0 opacity-30 blur-[40px] scale-125 z-0">
                        <Image src={finalImages[currentImageIndex]} alt="bg blur" fill className="object-cover" quality={10} priority />
                    </div>

                    <div className="relative z-10 w-full flex justify-center transform transition-transform duration-500 group-hover:scale-[1.02]">
                        {isMobile ? (
                            <MobileFrame>
                                {finalImages.map((img: string, idx: number) => (
                                    <div key={img} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImageIndex ? "opacity-100" : "opacity-0"}`}>
                                        <Image src={img} alt="project-mobile" fill className="object-cover" sizes="300px" quality={100} />
                                    </div>
                                ))}
                            </MobileFrame>
                        ) : isDesktop ? (
                            <DesktopFrame>
                                {finalImages.map((img: string, idx: number) => (
                                    <div key={img} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImageIndex ? "opacity-100" : "opacity-0"}`}>
                                        <Image src={img} alt="project-desktop" fill className="object-cover" sizes="800px" quality={100} />
                                    </div>
                                ))}
                            </DesktopFrame>
                        ) : (
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
                                {finalImages.map((img: string, idx: number) => (
                                    <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImageIndex ? "opacity-100" : "opacity-0"}`}>
                                        <Image src={img} alt="project" fill className="object-contain" sizes="800px" quality={100} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {finalImages.length > 1 && (
                        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-10">
                            {finalImages.map((_: any, idx: number) => (
                                <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/20"}`} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col h-full bg-gradient-to-br from-white/5 to-transparent">
                    <div className="flex items-center gap-2 mb-3">
                         <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-purple-500/20 text-purple-400 border border-purple-500/20">
                            {project.project_type}
                        </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                        {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 overflow-hidden">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                        {project.tech_stack_names?.map((techName: string) => (
                             <div key={techName} className="px-2 py-1 bg-white/5 rounded-md text-[10px] sm:text-xs text-gray-300 border border-white/5 font-medium">
                                {techName}
                             </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {project.live_link && (
                            <a
                                href={project.live_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] text-sm"
                            >
                                <ExternalLinkIcon className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                        {project.github_link && (
                            <a
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 px-6 bg-white/5 border border-white/10 rounded-xl text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/20 text-sm"
                            >
                                <GithubIcon className="w-4 h-4" />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
ProjectCardContent.displayName = "ProjectCardContent";

type FilterType = "all" | "mobile" | "web" | "desktop";

export const ProjectsSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");

    useEffect(() => {
        const fetchProjectsData = async () => {
            setLoading(true);
            const data = await getProjects();
            setProjects(data as Project[]);
            setLoading(false);
        };
        fetchProjectsData();
    }, []);

    const filteredProjects = useMemo(() => 
        projects.filter(p => activeFilter === 'all' || p.project_type === activeFilter),
        [projects, activeFilter]
    );

    if (loading) {
        return (
            <section id="projects" className="flex flex-col items-center justify-center py-20 min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
                <p className="mt-4 text-gray-400">Loading projects...</p>
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 px-4 flex flex-col items-center overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 mb-6 py-2">
                        My Portfolio
                    </h1>
                    <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Explore my journey through full-stack development, mobile experiences, and modern software architectures.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm flex gap-2">
                        {(["all", "mobile", "web", "desktop"] as const).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${
                                    activeFilter === filter
                                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid gap-12 max-w-5xl mx-auto">
                    {filteredProjects.map((project) => (
                        <ProjectCardContent key={project.id} project={project} />
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="text-center text-gray-500 py-20 italic">No projects found in this category.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
