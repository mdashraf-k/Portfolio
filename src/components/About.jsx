import React from 'react';
import { GraduationCap, Rocket, Award, Terminal, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section className="mb-section-gap" id="about">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6 border-b-2 border-primary pb-3">
        <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
          01 // ABOUT ME
        </h2>
      </div>

      <div className="border border-primary bg-surface transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Main Bio Column */}
          <div className="lg:col-span-7 p-6 md:p-gutter border-b lg:border-b-0 lg:border-r border-primary flex flex-col justify-between">
            <div className="space-y-6">
              {/* Intro Tag */}
              <div className="inline-flex items-center gap-2 border border-primary bg-white px-3 py-1 font-mono text-xs font-bold text-primary shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>STUDENT &amp; SOFTWARE DEVELOPER</span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p className="text-base text-primary font-medium">
                  Hi, I'm <strong className="text-primary font-bold">MD Ashraf Kamal</strong>, a Computer Science and Engineering student at <strong className="text-primary font-bold underline decoration-primary/40 underline-offset-4">Lovely Professional University</strong> with a deep passion for software development and creative problem-solving.
                </p>
                
                <p className="text-sm text-secondary leading-relaxed">
                  I enjoy building practical, user-friendly, and high-performance applications. Through projects such as <span className="font-mono text-xs bg-zinc-100 border border-primary/30 px-1.5 py-0.5 text-primary font-bold">SpendRecord</span>, <span className="font-mono text-xs bg-zinc-100 border border-primary/30 px-1.5 py-0.5 text-primary font-bold">WONDER</span>, and an interactive <span className="font-mono text-xs bg-zinc-100 border border-primary/30 px-1.5 py-0.5 text-primary font-bold">Todo Application</span>, I have gained hands-on experience in developing web applications and turning complex ideas into functional, real-world solutions.
                </p>

                <p className="text-sm text-secondary leading-relaxed">
                  I am continuously expanding my technical skill set, exploring modern frameworks, and refining my software engineering practices to build software that creates real-world impact.
                </p>
              </div>
            </div>

            {/* Quick Metadata Matrix */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs mt-8 pt-6 border-t border-primary/30">
              <div className="border border-primary/30 p-3 bg-white">
                <span className="text-secondary block text-[10px] uppercase font-bold mb-1">INSTITUTION</span>
                <span className="text-primary font-bold flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-primary shrink-0" /> LPU
                </span>
              </div>
              <div className="border border-primary/30 p-3 bg-white">
                <span className="text-secondary block text-[10px] uppercase font-bold mb-1">MAJOR</span>
                <span className="text-primary font-bold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-primary shrink-0" /> B.Tech CSE
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Feature Cards Column */}
          <div className="lg:col-span-5 p-6 md:p-gutter bg-white flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest block font-bold border-b border-primary/30 pb-2">
                CORE_HIGHLIGHTS &amp; MILESTONES
              </span>

              {/* Highlight 1: Education */}
              <div className="border border-primary p-4 bg-surface arch-hover transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <h4 className="font-mono text-xs font-bold text-primary uppercase">Education</h4>
                </div>
                <p className="font-mono text-xs text-primary font-bold">Lovely Professional University</p>
                <p className="font-body text-xs text-secondary mt-1">Computer Science &amp; Engineering — Core software engineering, algorithms, &amp; web architecture.</p>
              </div>

              {/* Highlight 2: Practical Projects */}
              <div className="border border-primary p-4 bg-surface arch-hover transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-4 h-4 text-primary" />
                  <h4 className="font-mono text-xs font-bold text-primary uppercase">Key Build Achievements</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-2">
                  <span className="border border-primary bg-white px-2 py-0.5 font-bold text-primary">SpendRecord</span>
                  <span className="border border-primary bg-white px-2 py-0.5 font-bold text-primary">WONDER</span>
                  <span className="border border-primary bg-white px-2 py-0.5 font-bold text-primary">Todo Suite</span>
                </div>
                <p className="font-body text-xs text-secondary">Hands-on experience developing end-to-end full-stack web applications with clean user interfaces.</p>
              </div>

              {/* Highlight 3: Development Philosophy */}
              <div className="border border-primary p-4 bg-surface arch-hover transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <h4 className="font-mono text-xs font-bold text-primary uppercase">Engineering Ethos</h4>
                </div>
                <p className="font-body text-xs text-secondary">Continuous learning, pragmatic problem-solving, clean code standards, and user-first product design.</p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="border border-primary/40 bg-zinc-950 text-emerald-400 p-3 font-mono text-[11px] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>ACTIVE_LEARNER_MODE</span>
              </span>
              <span className="text-zinc-500 text-[10px]">LPU // CSE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
