"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpcjcjqhhswcyaygtmxh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2pjanFoaHN3Y3lheWd0bXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTM0MDQsImV4cCI6MjA3NTg2OTQwNH0.dkVfgXIyg9dJvu8-DQRK7RN7tWR4zwPLeQa5b1HrojM";
export const supabase = createClient(supabaseUrl, supabaseKey);

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const ExternalLinkIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const AwardIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

const CalendarIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);

const ClockIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
);

const CertificateIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 13 2 2 4-4" />
    </svg>
);

const TrophyIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
);

type Certificate = {
    id: string | number;
    title: string;
    issuer: string;
    image_url: string;
    verification_url: string;
    duration: string;
    level: string;
    category: string;
    description: string;
    issue_date: string;
    credential_id: string;
    skills: string[];
    type: 'certificate' | 'achievement';
};

export const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'Frontend Development':
                return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
            case 'Project Competition':
                return 'bg-orange-500/10 text-orange-300 border-orange-500/30';
            case 'React Development':
                return 'bg-green-500/10 text-green-300 border-green-500/30';
            case 'Mobile Development':
                return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
            case 'Web Development':
                return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
            case 'Open Source Contribution':
                return 'bg-orange-500/10 text-orange-300 border-orange-500/30';
            case 'Full Stack Development':
                return 'bg-green-500/10 text-green-300 border-green-500/30';
            case 'Design':
                return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
            case 'Python':
                return 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30';
            default:
                return 'bg-gray-500/10 text-gray-300 border-gray-500/30';
        }
    };

    return (
        <div
            className="w-full max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-col lg:flex-row gap-4 p-5">
                <div className="lg:w-2/5 space-y-4">
                    <div className="relative group">
                        <div className="relative rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
                            <Image
                                src={certificate.image_url} 
                                alt={`${certificate.title} ${certificate.type === 'certificate' ? 'Certificate' : 'Achievement'}`}
                                width={300}
                                height={160}
                                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                                <a href={certificate.verification_url} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium hover:bg-white/30 transition-all duration-300">
                                    View {certificate.type === 'certificate' ? 'Certificate' : 'Achievement'}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                            <ClockIcon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                            <div className="text-sm font-semibold text-white">{certificate.duration}</div>
                            <div className="text-xs text-gray-400">Duration</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                            <AwardIcon className="w-4 h-4 text-green-400 mx-auto mb-1" />
                            <div className="text-sm font-semibold text-white">{certificate.level}</div>
                            <div className="text-xs text-gray-400">Level</div>
                        </div>
                    </div>

                    <div className={`px-3 py-2 rounded-lg text-center border ${getCategoryColor(certificate.category)}`}>
                        <span className="text-sm font-medium">{certificate.category}</span>
                    </div>
                </div>

                <div className="lg:w-3/5 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                {certificate.title}
                            </h2>
                            <p className="text-gray-400 text-sm mt-1">Issued by {certificate.issuer}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            certificate.type === 'certificate' 
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                                : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        }`}>
                            {certificate.type === 'certificate' ? 'Certificate' : 'Achievement'}
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                        {certificate.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-400">
                                <CalendarIcon className="w-4 h-4" />
                                <span>Issued: {certificate.issue_date}</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <h4 className="text-white font-semibold text-sm mb-2">Skills Acquired:</h4>
                        <div className="flex flex-wrap gap-2">
                            {Array.isArray(certificate.skills) && certificate.skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex space-x-2 pt-3">
                        <a
                            href={certificate.verification_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                        >
                            <ExternalLinkIcon className="w-4 h-4" />
                            <span>Verify</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CertificatesSection = () => {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeType, setActiveType] = useState<"all" | "certificate" | "achievement">("all");
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const fetchCertificates = async () => {
            setLoading(true);
            try {
                let { data, error } = await supabase
                    .from('achievements_certificates')
                    .select('*')
                    .order('id', { ascending: true });

                if (error) {
                    console.error('Supabase fetch error:', error);
                    setError(`Fetch Error: ${error.message}. Please check RLS policy and table name.`);
                    setCertificates([]);
                } else {
                    setCertificates(data ?? []);
                    setError(null);
                }
            } catch (err) {
                console.error('General fetch error:', err);
                setError(
                    typeof err === "object" && err !== null && "message" in err
                        ? String((err as { message?: unknown }).message)
                        : "An unknown network error occurred."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCertificates();
    }, []);

    const allTypes = ["all", "certificate", "achievement"] as const;
    
    const allCategories = ["All", ...Array.from(new Set(certificates.map((cert) => cert.category).filter(Boolean)))];
    
    const getCategoriesForType = () => {
        if (activeType === "all") return allCategories;
        
        const typeCertificates = certificates.filter(cert => cert.type === activeType);
        const categories = Array.from(new Set(typeCertificates.map((cert) => cert.category).filter(Boolean)));
        return ["All", ...categories];
    };

    const filteredCertificates = certificates.filter(cert => {
        const typeMatch = activeType === "all" || cert.type === activeType;
        const categoryMatch = activeCategory === "All" || cert.category === activeCategory;
        return typeMatch && categoryMatch;
    });

    useEffect(() => {
        setActiveCategory("All");
    }, [activeType]);

    if (loading) {
        return (
            <section id="certificates" className="flex flex-col items-center justify-center py-16 min-h-screen font-sans text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
                <p className="mt-4 text-gray-400">Loading certifications...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section id="certificates" className="flex flex-col items-center justify-center py-16 min-h-screen font-sans text-red-400">
                <p className="text-xl font-bold">Failed to Fetch Certifications</p>
                <p className="text-sm text-red-300 mt-2 max-w-lg text-center">
                    Details: {error}
                </p>
            </section>
        );
    }

    return (
        <section
            id="certificates"
            className="flex flex-col items-center justify-center py-16 min-h-screen font-sans"
        >
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
                        Certifications & Achievements
                    </h1>
                    <p className="text-gray-400">
                        Validated expertise and continuous learning achievements
                    </p>
                </div>

                {/* Type Filter */}
                <div className="flex justify-center mb-6">
                    <div className="flex flex-wrap justify-center gap-2 p-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                        {allTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveType(type)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                    activeType === type
                                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {type === 'certificate' && <CertificateIcon className="w-4 h-4" />}
                                {type === 'achievement' && <TrophyIcon className="w-4 h-4" />}
                                {type === 'all' && <AwardIcon className="w-4 h-4" />}
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filter - Always visible */}
                <div className="flex justify-center mb-8">
                    <div className="flex flex-wrap justify-center gap-2 p-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                        {getCategoriesForType().map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {filteredCertificates.length > 0 ? (
                        filteredCertificates.map((certificate) => (
                            <CertificateCard
                                key={certificate.id}
                                certificate={certificate}
                            />
                        ))
                    ) : (
                        <div className="text-center text-gray-500 pt-10">
                            No {activeType !== 'all' ? activeType + 's' : 'items'} found {activeCategory !== 'All' ? `for ${activeCategory}` : ''}.
                        </div>
                    )}
                </div>

                <div className="text-center mt-10">
                    <div className="inline-flex items-center gap-6 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-center">
                            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                {certificates.length}
                            </div>
                            <div className="text-sm text-gray-400">Total Items</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                {certificates.filter(c => c.type === 'certificate').length}
                            </div>
                            <div className="text-sm text-gray-400">Certificates</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                {certificates.filter(c => c.type === 'achievement').length}
                            </div>
                            <div className="text-sm text-gray-400">Achievements</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function App() {
    return (
        <div className="min-h-screen text-white"> 
            <CertificatesSection />
        </div>
    );
}
