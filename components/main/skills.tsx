"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '../../lib/supabaseClient';

const SkillText = () => (
  <div className="text-center mb-12 relative">
    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 blur-xl rounded-full" />
    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 relative z-10">
      Skills & Technologies
    </h2>
    <p className="text-lg text-gray-400 mt-3 relative z-10">Tools that power my creations</p>
  </div>
);

type SkillDataProviderProps = {
  src?: string | null;
  name: string;
  width: number;
  height: number;
  index: number;
  category?: string | null;
};

const SkillDataProvider = ({ src, name, width, height, index, category }: SkillDataProviderProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (cat: any) => {
    switch (cat) {
      case 'Programming Languages':
        return { gradient: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-500/10' };
      case 'Frontend':
        return { gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' };
      case 'Backend':
        return { gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10' };
      case 'Databases & Cloud':
        return { gradient: 'from-orange-500 to-red-500', bg: 'bg-orange-500/10' };
      case 'Tools & DevOps':
        return { gradient: 'from-yellow-500 to-amber-500', bg: 'bg-yellow-500/10' };
      default:
        return { gradient: 'from-gray-500 to-gray-600', bg: 'bg-gray-500/10' };
    }
  };

  const colors = getCategoryColor(category);
  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative p-4 rounded-xl backdrop-blur-sm border border-white/10 
        bg-white/5 transition-all duration-300 transform overflow-hidden group
        hover:scale-105 hover:shadow-lg hover:border-white/20
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${colors.gradient} opacity-0 
        transition-opacity duration-300
        ${isHovered ? 'opacity-100' : ''}`}
      />
      <div className="relative z-10 flex flex-col items-center">
        <div 
          className={`
            w-12 h-12 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden
            transition-all duration-300 bg-white/5
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        >
          {!imgError && src ? (
            <Image 
              src={src} 
              alt={name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              onError={handleImageError}
            />
          ) : (
            <>
              <div className={`absolute inset-0 rounded-lg ${colors.bg} opacity-60`} />
              <span 
                className={`text-lg font-bold text-transparent bg-clip-text 
                bg-gradient-to-br ${colors.gradient} relative z-10
                `}
              >
                {name.substring(0, 1)}
              </span>
            </>
          )}
        </div>

        <p className="text-center font-medium text-white text-xs leading-tight">
          {name}
        </p>
      </div>
    </div>
  );
};

const mapToNewCategory = (oldCategory: string): string => {
  switch (oldCategory) {
    case 'Programming L & Tools':
      return 'Programming Languages';
    case 'Frameworks & Libraries':
      return 'Frontend';
    case 'Databases':
      return 'Databases & Cloud';
    case 'Design':
      return 'Tools & DevOps';
    default:
      return oldCategory;
  }
};

const categorizeSkill = (skillName: string): string => {
  const name = skillName.toLowerCase();
  
  if (name.includes('html') || name.includes('css') || name.includes('javascript') || 
      name.includes('typescript') || name.includes('python') || name.includes('java') || 
      name.includes('c++') || name === 'c') {
    return 'Programming Languages';
  }
  
  if (name.includes('react') || name.includes('next') || name.includes('tailwind') || 
      name.includes('redux') || name.includes('framer') || name.includes('vite')) {
    return 'Frontend';
  }
  
  if (name.includes('node') || name.includes('express') || name.includes('graphql')) {
    return 'Backend';
  }

  if (name.includes('mongo') || name.includes('mysql') || name.includes('sql') || 
      name.includes('supabase') || name.includes('firebase') || name.includes('aws') || 
      name.includes('vercel')) {
    return 'Databases & Cloud';
  }
  
  if (name.includes('git') || name.includes('docker') || name.includes('linux') || 
      name.includes('figma') || name.includes('opencv') || name.includes('expo') || 
      name.includes('android')) {
    return 'Tools & DevOps';
  }
  
  return 'Programming Languages';
};

const CATEGORIES = [
  "All Skills",
  "Programming Languages",
  "Frontend", 
  "Backend",
  "Databases & Cloud",
  "Tools & DevOps"
];

type Skill = {
  skill_name: string;
  image?: string | null;
  width?: number | null;
  height?: number | null;
  category?: string | null;
};

export const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState('All Skills');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('skills').select('*');

      if (error) {
        console.error('Error fetching skills:', error);
      } else {
        console.log('Fetched skills:', data);
        const categorizedSkills = (data as Skill[]).map(skill => {
          let category;
          if (skill.category) {
            category = mapToNewCategory(skill.category);
          } else {
            category = categorizeSkill(skill.skill_name);
          }
          console.log(`Skill: ${skill.skill_name} -> Category: ${category}`);
          return {
            ...skill,
            category: category
          };
        });
        setSkills(categorizedSkills ?? []);
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  const filteredSkills = skills.filter(skill =>
    activeCategory === 'All Skills' || skill.category === activeCategory
  );

  const getCategoryProps = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return { gradient: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/20' };
      case 'Frontend':
        return { gradient: 'from-purple-500 to-pink-500', border: 'border-purple-500/20' };
      case 'Backend':
        return { gradient: 'from-green-500 to-emerald-500', border: 'border-green-500/20' };
      case 'Databases & Cloud':
        return { gradient: 'from-orange-500 to-red-500', border: 'border-orange-500/20' };
      case 'Tools & DevOps':
        return { gradient: 'from-yellow-500 to-amber-500', border: 'border-yellow-500/20' };
      default:
        return { gradient: 'from-cyan-500 to-purple-500', border: 'border-gray-500/20' };
    }
  };

  const currentProps = getCategoryProps(activeCategory);

  return (
    <section id="skills" className="flex flex-col items-center justify-center py-16 min-h-screen relative">
      <div className="w-full max-w-4xl px-4 flex flex-col items-center">
        <SkillText />
        <div className="w-full max-w-2xl mb-12">
          <div className={`flex p-1 rounded-lg bg-white/5 border ${currentProps.border} transition-colors duration-300`}>
            {CATEGORIES.map((category) => {
              const isActive = category === activeCategory;
              const categorySkills = skills.filter(skill => skill.category === category);
              const skillCount = category === 'All Skills' ? skills.length : categorySkills.length;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all duration-300 relative overflow-hidden
                    ${isActive ? `text-white bg-gradient-to-r ${currentProps.gradient} shadow-lg` : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  {category}
                  <span className="ml-1 text-xs opacity-70">({skillCount})</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full">
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentProps.gradient}`}>
              {activeCategory === 'All Skills' ? 'All Technologies' : activeCategory}
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}
            </p>
          </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 justify-items-center">
              {loading ? (
                <div className="col-span-full text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500 mx-auto"></div>
                  <p className="text-gray-400 mt-2">Loading skills...</p>
                </div>
              ) : (
                filteredSkills.map((skill, i) => (
                  <SkillDataProvider
                    key={skill.skill_name}
                    src={skill.image}
                    name={skill.skill_name}
                    width={skill.width || 80}
                    height={skill.height || 80}
                    index={i}
                    category={skill.category}
                  />
                ))
              )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
