"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpcjcjqhhswcyaygtmxh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2pjanFoaHN3Y3lheWd0bXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTM0MDQsImV4cCI6MjA3NTg2OTQwNH0.dkVfgXIyg9dJvu8-DQRK7RN7tWR4zwPLeQa5b1HrojM";
export const supabase = createClient(supabaseUrl, supabaseKey);

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
    impact: 'High' | 'Medium' | 'Low';
    order_id: number;
}

const fetchTimelineData = async (): Promise<TimelineItemData[]> => {
    let { data, error } = await supabase
        .from('timeline_items')
        .select('*')
        .order('order_id', { ascending: true }); 

    if (error) {
        console.error('Supabase fetch error:', error);
        return [];
    }
    
    const validatedData: TimelineItemData[] = Array.isArray(data)
        ? data.map((item) => ({
            ...item,
            description: Array.isArray(item.description) ? item.description : [],
            technologies: Array.isArray(item.technologies) ? item.technologies : [],
            type: item.type || 'Experience', 
            title: item.title || 'Untitled', 
            institution: item.institution || 'Unknown', 
            dateRange: item.dateRange || 'N/A', 
            location: item.location || 'N/A', 
            duration: item.duration || '0 mos',
            color: item.color || 'cyan',
            achievement: item.achievement || 'None',
            impact: item.impact || 'Low',
            order_id: item.order_id || 0,
        })) as TimelineItemData[]
        : [];

    return validatedData;
};

const BriefcaseIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const GraduationCapIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M12 15V3L2 6l10 3 10-3-10-3v12" /><path d="M3.5 18H21" />
  </svg>
);

const CalendarIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const MapPinIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronDownIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const SparkleIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/>
  </svg>
);

const FilterIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

const FloatingParticles = () => {
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
};

interface TimelineItemProps {
    item: TimelineItemData;
    isLast: boolean;
    index: number;
    isActive: boolean;
    onActivate: (index: number) => void;
}

const TimelineItem = React.memo(({ item, isLast, index, isActive, onActivate }: TimelineItemProps): React.JSX.Element => {
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index, onActivate]);

  const handleClick = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative flex items-start gap-6 group cursor-pointer transition-all duration-500 ${
        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center relative z-20 pt-1">
        <div className="relative">
          <div 
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
              isActive ? 'animate-ping' : ''
            }`}
            style={{ 
              background: isExperience ? 'rgba(6, 182, 212, 0.3)' : 'rgba(139, 92, 246, 0.3)',
              animationDuration: '3s'
            }}
          />
          <div 
            className={`
              relative w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} 
              shadow-lg backdrop-blur-xl border border-white/20
              transition-all duration-300 transform flex items-center justify-center
              ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
              ${isActive ? 'ring-2 ring-white/30' : ''}
            `}
          >
            {React.createElement(isExperience ? BriefcaseIcon : GraduationCapIcon, { 
              className: `w-4 h-4 text-white transition-transform duration-300`
            })}
            {isActive && (
              <div className="absolute -top-1 -right-1">
                <SparkleIcon className="w-3 h-3 text-yellow-400 animate-pulse" />
              </div>
            )}
          </div>
        </div>
        {!isLast && (
          <div 
            className={`
              w-0.5 h-full mt-3 bg-gradient-to-b transition-all duration-500
              ${isExperience 
                ? 'from-cyan-400/40 to-purple-400/20' 
                : 'from-purple-400/40 to-cyan-400/20'
              }
              ${isActive ? 'opacity-70' : 'opacity-30'}
            `}
          />
        )}
      </div>
      <div className="flex-1 pb-12 transition-all duration-500 transform group-hover:translate-x-2">
        <div 
          className={`
            relative p-6 rounded-2xl 
            bg-white/5 backdrop-blur-xl border border-white/10
            shadow-lg transition-all duration-300 overflow-hidden
            ${isHovered ? 'bg-white/8 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : ''}
            ${isActive ? 'ring-1 ring-white/15' : ''}
          `}
        >
          <div 
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 transition-opacity duration-300 ${
              isHovered ? 'opacity-10' : ''
            }`}
          />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className={`px-2 py-1 rounded-lg text-xs font-semibold backdrop-blur-lg border ${
                      isExperience 
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' 
                        : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                    }`}
                  >
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i < (item.impact === 'High' ? 3 : item.impact === 'Medium' ? 2 : 1)
                            ? isExperience ? 'bg-cyan-400' : 'bg-purple-400'
                            : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                  {item.title}
                </h3>
                
                <p className={`text-lg font-semibold ${
                  isExperience ? 'text-cyan-300' : 'text-purple-300'
                }`}>
                  {item.institution}
                </p>
              </div>
              <div className="flex sm:justify-end">
                <span className="px-2 py-1 rounded-lg bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 text-xs font-semibold border border-yellow-500/30 whitespace-nowrap">
                  {item.achievement}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <CalendarIcon className="w-4 h-4 text-gray-400" />
                <span>{item.dateRange}</span>
                <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-xs text-gray-400">
                  {item.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPinIcon className="w-4 h-4 text-gray-400" />
                <span>{item.location}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${
              isExpanded ? 'max-h-80' : 'max-h-20'
            }`}>
              <ul className="list-none space-y-2 text-sm">
                {item.description.map((point, pointIndex) => (
                  <li 
                    key={pointIndex} 
                    className="flex items-start gap-2 text-gray-300 leading-relaxed group/item"
                  >
                    <div 
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-all duration-200 ${
                        isExperience ? 'bg-cyan-500' : 'bg-purple-500'
                      } ${isHovered ? 'scale-125' : 'scale-100'}`}
                    />
                    <span className="text-sm group-hover/item:translate-x-1 transition-transform duration-200">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center mt-4">
              <div className={`flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10 transition-all duration-200 ${
                isHovered ? 'bg-white/10' : ''
              }`}>
                <span className="text-xs text-gray-400">
                  {isExpanded ? 'Show less' : 'Show more'}
                </span>
                <ChevronDownIcon 
                  className={`w-3 h-3 text-gray-400 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';

export const ExperienceSection = () => {
    const [timelineData, setTimelineData] = useState<TimelineItemData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState<'all' | 'experience' | 'education'>('all');

    const applyFilter = useCallback((filter: 'all' | 'experience' | 'education', data: TimelineItemData[]) => {
        switch (filter) {
            case 'experience':
                return data.filter(item => item.type === 'Experience');
            case 'education':
                return data.filter(item => item.type === 'Education');
            case 'all':
            default:
                return data;
        }
    }, []);

    const filteredData = useMemo(() => {
        return applyFilter(activeFilter, timelineData);
    }, [timelineData, activeFilter, applyFilter]);

    const loadData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchTimelineData();
            setTimelineData(data);
            if (data.length > 0) {
                setActiveIndex(prev => Math.min(prev, data.length - 1)); 
            } else {
                setActiveIndex(0);
            }
        } catch (err) {
            setError((err as Error).message || "An unknown error occurred while fetching data.");
        } finally {
            setLoading(false);
        }
    }, []);

    const handleFilterChange = useCallback((filter: 'all' | 'experience' | 'education') => {
        setActiveFilter(filter);
        setActiveIndex(0);
    }, []);

    const handleActivate = useCallback((index: number) => {
        setActiveIndex(index);
    }, []);

    // Load data only once on component mount
    useEffect(() => {
        loadData();
    }, [loadData]);

    // Set up real-time subscription with debouncing
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const channel = supabase
            .channel('timeline_items_changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'timeline_items' },
                () => {
                    // Debounce the reload to prevent rapid refreshes
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        console.log('Supabase Realtime event received. Re-fetching data...');
                        loadData();
                    }, 1000); // 1 second debounce
                }
            )
            .subscribe();

        return () => {
            clearTimeout(timeoutId);
            supabase.removeChannel(channel);
        };
    }, [loadData]);

    const experienceCount = useMemo(() => 
        timelineData.filter(item => item.type === 'Experience').length, 
        [timelineData]
    );
    
    const educationCount = useMemo(() => 
        timelineData.filter(item => item.type === 'Education').length, 
        [timelineData]
    );

    if (loading) {
        return (
            <section id="experience" className="relative flex flex-col items-center justify-center py-16 min-h-screen font-sans text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500"></div>
                <p className="mt-4 text-gray-400">Loading career journey...</p>
            </section>
        );
    }

    if (error || timelineData.length === 0) {
        const displayError = error || "The &apos;timeline_items&apos; table is empty. Please insert data to view the timeline.";
        return (
            <section id="experience" className="relative flex flex-col items-center justify-center py-16 min-h-screen font-sans text-red-400">
                <p className="text-xl font-bold">Failed to Load Timeline</p>
                <p className="text-sm text-red-300 mt-2 max-w-lg text-center">
                    Error Details: {displayError}
                </p>
                <p className="text-sm text-gray-400 mt-4">
                    Check your Supabase &apos;timeline_items&apos; table for data or RLS permissions.
                </p>
            </section>
        );
    }

  return (
    <section 
      id="experience"
      className="relative flex flex-col items-center justify-center py-16 min-h-screen font-sans overflow-hidden"
    >
      <FloatingParticles />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 leading-tight">
              My Journey
            </h2>
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 blur-xl rounded-full opacity-30" />
          </div>
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed mb-8">
            Timeline of growth and achievements
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-2 p-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'all'
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <FilterIcon className="w-4 h-4" />
                All ({timelineData.length})
              </button>
              <button
                onClick={() => handleFilterChange('experience')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'experience'
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <BriefcaseIcon className="w-4 h-4" />
                Experience ({experienceCount})
              </button>
              <button
                onClick={() => handleFilterChange('education')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === 'education'
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <GraduationCapIcon className="w-4 h-4" />
                Education ({educationCount})
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/10 via-purple-500/20 to-cyan-400/10" />
          
          <div className="relative">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === filteredData.length - 1}
                  index={index}
                  isActive={activeIndex === index}
                  onActivate={handleActivate}
                />
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                No {activeFilter === 'experience' ? 'experience' : 'education'} items found.
              </div>
            )}
          </div>
        </div>

        {filteredData.length > 0 && (
          <div className="flex justify-center gap-1.5 mt-12">
            {filteredData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-8 h-1.5 rounded-full transition-all duration-300 backdrop-blur-lg border ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 scale-110 border-white/30' 
                    : 'bg-white/10 border-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-ping {
            animation-duration: 3s;
        }
      `}</style>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <ExperienceSection />
    </div>
  );
}