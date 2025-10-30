"use client";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { useRouter, usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const closeMenu = () => setIsMobileMenuOpen(false);
  
  const handleNavClick = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    
    if (href.startsWith('/')) {
      router.push(href);
    } else if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      if (pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      } else {
        router.push(`/#${targetId}`);
      }
    }
    
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50">
      <div className="flex items-center justify-between h-[70px] px-5 md:px-10">
        <a
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          onClick={(e) => handleNavClick('/', e)}
        >
          <Image
            src="/coding.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 bg-[rgba(3,0,20,0.37)] px-8 py-2 rounded-full border border-[rgba(112,66,248,0.38)] text-gray-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.link}
              onClick={(e) => handleNavClick(link.link, e)}
              className="relative hover:text-[rgb(112,66,248)] transition-all font-medium cursor-pointer hover:scale-105 duration-300 group"
            >
              {link.title}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(112,66,248)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition-all hover:scale-110 duration-300 ease-out" />
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-white text-3xl flex items-center justify-center hover:scale-110 transition-all duration-300 ease-out"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#030014]/95 backdrop-blur-lg shadow-lg flex flex-col items-center justify-center text-gray-300 md:hidden">
          <button
            className="absolute top-5 right-6 text-white text-3xl hover:scale-110 transition-all duration-300 ease-out"
            onClick={closeMenu}
          >
            ✖
          </button>
          <div className="flex flex-col items-center space-y-8 text-lg font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.link}
                onClick={(e) => handleNavClick(link.link, e)}
                className="relative hover:text-[rgb(112,66,248)] transition-all cursor-pointer hover:scale-105 duration-300 group"
              >
                {link.title}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(112,66,248)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex space-x-6 mt-10">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Icon className="h-8 w-8 text-white hover:text-[rgb(112,66,248)] transition-all hover:scale-110 duration-300 ease-out" />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};