"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { getProjects } from "@/lib/actions";
import { ProjectCardContent } from "@/components/sub/project-card-content";
import { revealVariants } from "@/lib/motion";
import { ProjectSkeleton } from "@/components/sub/skeleton";

import { Project, FilterType } from "@/types";

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
            <section id="projects" className="py-20 px-4 flex flex-col items-center">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid gap-12 max-w-5xl mx-auto">
                        {[...Array(3)].map((_, i) => (
                            <ProjectSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 px-4 flex flex-col items-center overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 mb-6 py-2 leading-tight">
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
                                className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-300 ${activeFilter === filter
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
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={revealVariants}
                        >
                            <ProjectCardContent project={project} />
                        </motion.div>
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
