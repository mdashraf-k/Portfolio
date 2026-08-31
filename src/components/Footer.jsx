import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-primary font-mono text-xs text-primary flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-margin-desktop py-8 gap-4 mx-auto transition-colors duration-300">
      {/* Brand & Version */}
      <div className="flex items-center gap-3">
        <a href="#hero" className="font-display-lg text-primary text-[22px] font-black tracking-tighter">
          ASHRAF.IO
        </a>
        <span className="text-[10px] text-secondary border border-primary/30 px-1.5 py-0.5">
          BUILD_v2.4.0-PROD
        </span>
      </div>

      {/* Center Copyright & Live Clock */}
      <div className="text-secondary text-[11px] text-center flex flex-col sm:flex-row items-center gap-2">
        <span>© 2026 MD ASHRAF KAMAL. ENGINEERED WITH PRECISION.</span>
        <span className="hidden sm:inline">//</span>
        <span className="text-primary font-bold">{timeStr}</span>
      </div>

      {/* Links & Scroll Top */}
      <div className="flex items-center gap-4 text-[11px]">
        <a
          href="https://github.com/mdashraf-k"
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mdashraf-k"
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-primary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ashrafk0205@gmail.com"
          className="text-secondary hover:text-primary transition-colors"
        >
          Email
        </a>
        <button
          onClick={scrollToTop}
          className="p-1 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors arch-hover ml-2"
          title="Return to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
