import React from 'react';
import { ArrowRight, Mail, Terminal, ShieldCheck, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profileImg from '../assets/profile.jpg';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center border-x border-b border-primary bg-surface p-6 md:p-gutter mb-section-gap relative overflow-hidden transition-colors duration-300"
    >
      {/* Background dense wireframe grid overlay */}
      <div className="absolute inset-0 wireframe-bg opacity-40 pointer-events-none z-0"></div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Protocol Header Tag */}
          <div className="inline-flex items-center gap-2 border border-primary bg-white px-3 py-1 mb-6 text-xs font-mono shadow-sm w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-primary font-semibold">SYSTEM_STATUS:</span>
            <span className="text-secondary">ONLINE // ALL SYSTEMS NOMINAL</span>
          </div>

          {/* Hero Title */}
          <h1 className="font-display-lg text-[40px] sm:text-[54px] md:text-[70px] font-black text-primary leading-none uppercase tracking-tighter mb-4">
            MD ASHRAF KAMAL
          </h1>

          {/* Role & Bio Subtitle */}
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl border-l-2 border-primary pl-4 mb-8 leading-relaxed">
            Software Engineer &amp; Systems Architect. Specializing in high-throughput backend services, full-stack applications, and clean system engineering. Minimalist ethos, maximalist execution.
          </p>

          {/* Actions & Social Links */}
          <div className="flex flex-wrap gap-4 items-center mb-8">
            {/* Primary View Projects */}
            <a
              href="#projects"
              className="border border-primary bg-primary text-on-primary hover:bg-surface hover:text-primary px-6 py-3 font-label-technical text-label-technical arch-hover flex items-center gap-2 transition-colors duration-200"
            >
              VIEW PROJECTS <ArrowRight className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="border border-primary bg-surface text-primary hover:bg-primary hover:text-on-primary px-6 py-3 font-label-technical text-label-technical arch-hover flex items-center gap-2 transition-colors duration-200"
            >
              <FileText className="w-4 h-4" /> VIEW RESUME
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 border-l border-primary/30 pl-4 py-1">
              <a
                href="https://github.com/mdashraf-k"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 border border-primary bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors arch-hover"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/mdashraf-k"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 border border-primary bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors arch-hover"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:ashrafk0205@gmail.com"
                className="p-2.5 border border-primary bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors arch-hover"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Live System Stats Grid Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px] border border-primary/40 bg-white/90 p-3 shadow-sm">
            <div>
              <span className="text-secondary block text-[10px] uppercase font-bold">LANGUAGES</span>
              <span className="text-primary font-bold">JavaScript / Python / C / C++</span>
            </div>
            <div>
              <span className="text-secondary block text-[10px] uppercase font-bold">FRAMEWORKS</span>
              <span className="text-primary font-bold">ReactJS / FastAPI / Docker</span>
            </div>
            <div>
              <span className="text-secondary block text-[10px] uppercase font-bold">TOOLS</span>
              <span className="text-primary font-bold">GitHub / Git / Postman</span>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
            <div className="border-2 border-primary bg-white p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group">
              <div className="relative overflow-hidden border border-primary aspect-[4/5] bg-zinc-100">
                <img
                  src={profileImg}
                  alt="MD Ashraf Kamal Profile"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-surface/90 backdrop-blur-md border border-primary px-3 py-1.5 flex justify-between items-center font-mono text-[10px] font-bold">
                  <span className="text-primary">MD ASHRAF KAMAL</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full animate-ping"></span>
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Technical Geometry */}
      <div className="absolute right-6 bottom-4 hidden md:flex items-center gap-2 font-mono text-[10px] text-secondary">
        <Terminal className="w-3.5 h-3.5 text-primary" />
        <span>SYS_INIT_SEQUENCE_COMPLETE</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-primary"></div>
          <div className="w-2 h-2 bg-primary"></div>
          <div className="w-2 h-2 bg-primary"></div>
        </div>
      </div>
    </section>
  );
}
