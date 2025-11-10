"use client";

import Link from "next/link";
import { FOOTER_DATA } from "@/constants";
import { useEffect, useState } from "react";
import { Eye, Heart, Share2 } from "lucide-react";

export const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      const count = localStorage.getItem('visitorCount');
      let newCount = 1;
      
      if (count) {
        newCount = parseInt(count) + 1;
      }
      
      localStorage.setItem('visitorCount', newCount.toString());
      sessionStorage.setItem('hasVisited', 'true');
      setVisitorCount(newCount);
    } else {
      const count = localStorage.getItem('visitorCount');
      setVisitorCount(count ? parseInt(count) : 0);
    }
  }, []);

  return (
    <footer className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            {FOOTER_DATA.map((column) => (
              <div
                key={column.title}
                className="min-w-[200px] h-auto flex flex-col items-center justify-start"
              >
                <h3 className="font-bold text-[16px]">{column.title}</h3>
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-1"
                  >
                    {Icon && (
                      <Icon className="w-4 h-4 mr-3 text-blue-400 group-hover:text-purple-400 transition-colors" />
                    )}
                    <span className="text-[15px] font-medium">{name}</span>
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Share2 className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center bg-gray-800/30 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50 shadow-lg">
              <Eye className="w-4 h-4 mr-2 text-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white">
                <span className="text-gray-400 mr-1">Visitors:</span>
                {visitorCount.toLocaleString()}
              </span>
            </div>
            
            <div className="hidden sm:flex items-center text-xs text-gray-400 bg-gray-800/20 rounded-full px-3 py-1">
              <div className="flex -space-x-2 mr-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-900"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-2 border-gray-900"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-gray-900"></div>
              </div>
              Join {Math.floor(visitorCount * 0.8).toLocaleString()}+ developers
            </div>
          </div>

          <div className="mb-[20px] mt-[20px] text-[15px] text-center">
            &copy; Shivam Pawar {new Date().getFullYear()} Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};