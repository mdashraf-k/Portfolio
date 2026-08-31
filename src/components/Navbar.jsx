import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Activity } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [latency, setLatency] = useState(8);

  useEffect(() => {
    // Simulate real-time latency ping
    const interval = setInterval(() => {
      setLatency(Math.floor(7 + Math.random() * 4));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'contact'];
      
      // Check if user has scrolled to the bottom of the page
      const isAtBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top - 60) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-primary font-caption text-caption uppercase tracking-widest text-primary flex justify-between items-center px-4 md:px-margin-desktop py-3 mx-auto transition-colors duration-300">
      {/* Brand Logo */}
      <a
        href="#hero"
        onClick={() => setActiveSection('hero')}
        className="text-body-lg font-display-lg font-black tracking-tighter text-primary flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <span className="w-3 h-3 bg-primary border border-primary inline-block"></span>
        ASHRAF.IO
        <span className="hidden sm:flex items-center gap-1 font-mono text-[10px] lowercase tracking-normal text-secondary border border-primary/30 px-1.5 py-0.5">
          <Activity className="w-2.5 h-2.5 text-emerald-600 animate-pulse" />
          {latency}ms
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-4 items-center">
        {navLinks.map((link) => {
          const targetId = link.href.substring(1);
          const isActive = activeSection === targetId;
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(targetId)}
              className={`transition-all duration-200 px-2.5 py-1.5 text-[12px] font-mono border ${
                isActive
                  ? 'bg-primary text-on-primary border-primary font-bold'
                  : 'text-secondary border-transparent hover:border-primary hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          );
        })}

        {/* Resume Modal Trigger */}
        <button
          onClick={onOpenResume}
          className="border border-primary px-4 py-1.5 bg-primary text-on-primary hover:bg-surface hover:text-primary transition-colors duration-200 font-label-technical text-label-technical arch-hover flex items-center gap-1.5 ml-2"
        >
          <FileText className="w-3.5 h-3.5" />
          RESUME
        </button>
      </div>

      {/* Mobile Actions */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 border border-primary text-primary"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-primary p-4 flex flex-col gap-3 md:hidden shadow-2xl">
          {navLinks.map((link) => {
            const targetId = link.href.substring(1);
            const isActive = activeSection === targetId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveSection(targetId);
                }}
                className={`font-mono text-sm border p-2 flex justify-between items-center ${
                  isActive
                    ? 'bg-primary text-on-primary border-primary font-bold'
                    : 'text-primary border-primary'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-[10px] opacity-80">GO_TO</span>
              </a>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full border border-primary bg-primary text-on-primary p-2 font-mono text-sm flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            VIEW RESUME
          </button>
        </div>
      )}
    </nav>
  );
}
