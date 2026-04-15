"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react';
import { getTimelineData } from "@/lib/actions";

interface TimelineItemData {
    id: number;
    type: 'Experience' | 'Education';
    title: string;
    institution: string;
    dateRange: string;
    location: string;
    duration: string;
    description: string[]; 
    technologies: string[];
    color: 'cyan' | 'purple';
    achievement: string;
    order_id: number;
}

const BriefcaseIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
));
BriefcaseIcon.displayName = "BriefcaseIcon";

const GraduationCapIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M12 15V3L2 6l10 3 10-3-10-3v12" /><path d="M3.5 18H21" />
  </svg>
));
GraduationCapIcon.displayName = "GraduationCapIcon";

const CalendarIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
));
CalendarIcon.displayName = "CalendarIcon";

const MapPinIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
));
MapPinIcon.displayName = "MapPinIcon";

const ChevronDownIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
));
ChevronDownIcon.displayName = "ChevronDownIcon";

const SparkleIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/>
  </svg>
));
SparkleIcon.displayName = "SparkleIcon";

const FilterIcon = memo((props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
));
FilterIcon.displayName = "FilterIcon";

const FloatingParticles = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-10 animate-float"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#06b6d4' : '#8b5cf6',
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 30 + 20}s`,
          }}
        />
      ))}
    </div>
  );
});
FloatingParticles.displayName = "FloatingParticles";

const TimelineItem = memo(({ item, isLast, index, isActive, onActivate }: { item: TimelineItemData, isLast: boolean, index: number, isActive: boolean, onActivate: (i: number) => void }) => {
  const isExperience = item.type === 'Experience';
  const cardRef = useRef<HTMLDivElement>(null);
  
  const gradient = isExperience 
    ? 'from-cyan-400 via-blue-500 to-purple-600' 
    : 'from-purple-400 via-fuchsia-500 to-pink-600';
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActivate(index);
        }
      },
      { threshold: 0.7 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index, onActivate]);

  return (
    <div 
      ref={cardRef}
      className="relative flex items-start gap-6 group cursor-pointer transition-all duration-500 scale-100 opacity-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => isExperience && setIsExpanded(p => !p)}
    >
      <div className="flex flex-col items-center relative z-20 pt-1">
        <div className="relative">
          <div className="absolute inset-0 rounded-full transition-all duration-1000"
            style={{ background: isExperience ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)' }}
          />
          <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} shadow-lg backdrop-blur-xl border border-white/20 transition-all duration-300 transform flex items-center justify-center ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'} ${isActive ? 'ring-2 ring-white/30' : ''}`}>
            {isExperience ? <BriefcaseIcon className="w-4 h-4 text-white" /> : <GraduationCapIcon className="w-4 h-4 text-white" />}
          </div>
        </div>
        {!isLast && (
          <div className={`w-0.5 h-full mt-3 bg-gradient-to-b transition-all duration-500 ${isExperience ? 'from-cyan-400/40 to-purple-400/20' : 'from-purple-400/40 to-cyan-400/20'} ${isActive ? 'opacity-70' : 'opacity-30'}`} />
        )}
      </div>
      <div className="flex-1 pb-12 transition-all duration-500 transform group-hover:translate-x-2">
        <div className={`relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-300 overflow-hidden ${isHovered ? 'bg-white/8 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : ''}`}>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
              <div>
                <span className={`px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-lg border ${isExperience ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' : 'bg-purple-500/10 text-purple-300 border-purple-500/30'}`}>
                  {item.type}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 leading-tight">{item.title}</h3>
                <p className={`text-lg font-semibold ${isExperience ? 'text-cyan-300' : 'text-purple-300'}`}>{item.institution}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 text-sm text-gray-300">
              <div className="flex items-center gap-2 font-medium">
                <CalendarIcon className="w-4 h-4" /> <span>{item.dateRange}</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" /> <span>{item.location}</span>
              </div>
            </div>
            {isExperience && (
              <>
                <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-80' : 'max-h-24'}`}>
                  <ul className="space-y-2">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${isExperience ? 'bg-cyan-400' : 'bg-purple-400'}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center mt-4">
                   <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors">
                      {isExpanded ? 'Show less' : 'Show more'} <ChevronDownIcon className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                   </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
TimelineItem.displayName = "TimelineItem";

export const ExperienceSection = () => {
    const [timelineItems, setTimelineItems] = useState<TimelineItemData[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'education'>('all');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getTimelineData();
            setTimelineItems(data as TimelineItemData[]);
            setLoading(false);
        };
        fetchData();
    }, []);

    const filteredData = useMemo(() => 
        timelineItems.filter(item => activeFilter === 'all' || item.type.toLowerCase() === activeFilter),
        [timelineItems, activeFilter]
    );

    if (loading) return (
      <section className="flex flex-col items-center justify-center py-20 min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
        <p className="mt-4 text-gray-400 font-medium">Analyzing career path...</p>
      </section>
    );

    return (
      <section id="experience" className="relative py-20 px-4 overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 tracking-tight">
              Professional Journey
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-medium">A chronological evolution through technologies and impactful roles.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white/5 p-1 rounded-2xl border border-white/10 backdrop-blur-xl flex gap-2">
              {(['all', 'experience', 'education'] as const).map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold capitalize transition-all duration-300 ${
                    activeFilter === filter ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-xl" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-400/20 via-purple-500/30 to-cyan-400/20" />
            <div className="space-y-4">
              {filteredData.map((item, index) => (
                <TimelineItem 
                  key={item.id} 
                  item={item} 
                  isLast={index === filteredData.length - 1} 
                  index={index} 
                  isActive={activeIndex === index} 
                  onActivate={setActiveIndex} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExperienceSection;