"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://zpcjcjqhhswcyaygtmxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwY2pjanFoaHN3Y3lheWd0bXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTM0MDQsImV4cCI6MjA3NTg2OTQwNH0.dkVfgXIyg9dJvu8-DQRK7RN7tWR4zwPLeQa5b1HrojM'; // Replace with your Supabase Key
export const supabase = createClient(supabaseUrl, supabaseKey);

const CodeIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const UsersIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const RocketIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const AwardIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-float"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#06b6d4' : '#8b5cf6',
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 20 + 10}s`,
          }}
        />
      ))}
    </div>
  );
};

type Metric = {
  id: string | number;
  icon?: 'rocket' | 'code' | 'users' | 'award' | string;
  value?: string | number;
  label?: string;
  [key: string]: any;
};

const fetchMetrics = async (): Promise<Metric[]> => {
  const { data, error } = await supabase
    .from('metrics')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching metrics:', error);
    return [];
  }

  return (data as Metric[]) ?? [];
};
export const HighlightsSection = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const loadData = useCallback(async () => {
    const data = await fetchMetrics();
    setMetrics(data);
  }, []);

  useEffect(() => {
    loadData();
    const channel = supabase
      .channel('metrics_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'metrics' }, () => {
        console.log('Realtime event triggered. Reloading data...');
        loadData(); 
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [loadData]);

  return (
    <section id="highlights" className="relative flex flex-col items-center justify-center py-16 font-sans overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
            Proven Results
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Quantifiable impact through dedicated work and innovation
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-0 transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-30' : ''
                }`}
              />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-500 group-hover:border-cyan-500/50">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {metric.icon === 'rocket' && <RocketIcon className="w-6 h-6 text-white" />}
                  {metric.icon === 'code' && <CodeIcon className="w-6 h-6 text-white" />}
                  {metric.icon === 'users' && <UsersIcon className="w-6 h-6 text-white" />}
                  {metric.icon === 'award' && <AwardIcon className="w-6 h-6 text-white" />}
                </div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-1">
                  {metric.value}
                </div>
                <div className="text-gray-300 font-semibold text-sm">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <HighlightsSection />
    </div>
  );
}
