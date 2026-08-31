import React, { useState } from 'react';
import { Terminal, Code, Cpu, Database, Cloud, Layers } from 'lucide-react';

export default function AboutSkills() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const logs = [
    { time: '16:45:12', msg: 'SYSTEM_BOOT // ALL_SERVICES_NOMINAL' },
    { time: '16:45:15', msg: 'RAFT_CONSENSUS_CLUSTER // NODE_1 ELECTED LEADER' },
    { time: '16:45:18', msg: 'CUDA_PIPELINE // MEMCPY_ASYNC ALLOCATED 4096MB' },
    { time: '16:45:22', msg: 'EVENT_STREAM // P99 LATENCY: 0.42ms' },
  ];

  const skillCategories = ['ALL', 'LANGUAGES', 'FRAMEWORKS', 'TOOLS'];

  const skills = [
    { name: 'JavaScript', category: 'LANGUAGES', icon: Code, level: 92, detail: 'ES6+, Async/Await, DOM manipulation, functional & modern JS execution.' },
    { name: 'Python', category: 'LANGUAGES', icon: Code, level: 90, detail: 'Data processing, backend API integration, scripting & dynamic automation.' },
    { name: 'C', category: 'LANGUAGES', icon: Cpu, level: 85, detail: 'Low-level memory management, pointers, system calls & core performance.' },
    { name: 'C++', category: 'LANGUAGES', icon: Cpu, level: 88, detail: 'Object-oriented systems programming, STL algorithms, templates & optimization.' },
    { name: 'ReactJS', category: 'FRAMEWORKS', icon: Layers, level: 92, detail: 'Component architecture, state hooks, high-performance responsive web interfaces.' },
    { name: 'FastAPI', category: 'FRAMEWORKS', icon: Cloud, level: 90, detail: 'High-throughput async REST APIs, Pydantic validation & OpenAPI specifications.' },
    { name: 'Docker', category: 'FRAMEWORKS', icon: Database, level: 88, detail: 'Containerization, multi-stage Dockerfiles, isolated environment deployments.' },
    { name: 'GitHub', category: 'TOOLS', icon: Code, level: 95, detail: 'Code hosting, pull requests, release management & automated GitHub Actions.' },
    { name: 'Git', category: 'TOOLS', icon: Layers, level: 94, detail: 'Version control, branching strategies, rebasing, bisect & commit hygiene.' },
    { name: 'Postman', category: 'TOOLS', icon: Terminal, level: 90, detail: 'API testing, collection automation, mock servers & endpoint documentation.' },
  ];

  const filteredSkills = selectedCategory === 'ALL'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section className="mb-section-gap" id="skills">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-6 border-b-2 border-primary pb-3">
        <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
          02 // TECH STACK
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-primary bg-surface transition-colors duration-300">
        {/* About Column */}
        <div className="md:col-span-5 p-6 md:p-gutter border-b md:border-b-0 md:border-r border-primary flex flex-col justify-between">
          <div>
            <h3 className="font-headline-md text-[24px] text-primary mb-4 uppercase">
              PHILOSOPHY &amp; METHODOLOGY
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              I specialize in building structural software solutions that scale elegantly under load. My approach strips away the superfluous, focusing intensely on core logic, data integrity, and raw computational efficiency.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Operating at the intersection of computer science theory and brutalist production engineering. Every line of code must justify its existence.
            </p>
          </div>

          {/* Current Status Box */}
          <div className="space-y-4">
            <div className="border border-primary p-4 bg-white relative arch-hover">
              <div className="absolute -top-3 left-3 bg-primary text-on-primary px-2 font-mono text-[10px] tracking-wider uppercase font-bold">
                CURRENT_STATUS
              </div>
              <div className="flex items-start gap-2.5 font-mono text-[12px] text-primary pt-1">
                <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-pulse mt-1 shrink-0"></span>
                <span>Architecting high-throughput event streaming infrastructure &amp; distributed consensus systems.</span>
              </div>
            </div>

            {/* Interactive Terminal Log Simulator */}
            <div className="border border-primary bg-zinc-950 text-emerald-400 p-3 font-mono text-[11px] space-y-1">
              <div className="flex justify-between items-center text-zinc-500 border-b border-zinc-800 pb-1 mb-1">
                <span className="flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  SYSTEM_LOG_STREAM
                </span>
                <span className="text-[9px]">LIVE</span>
              </div>
              {logs.map((log, idx) => (
                <div key={idx} className="flex gap-2 hover:bg-zinc-900 px-1 py-0.5 transition-colors">
                  <span className="text-zinc-500">[{log.time}]</span>
                  <span>{log.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Column */}
        <div className="md:col-span-7 p-6 md:p-gutter bg-white relative" id="skills">
          <div className="absolute inset-0 wireframe-bg opacity-20 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-primary pb-3">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest font-bold">
                TECHNICAL_STACK
              </span>
              <div className="flex flex-wrap gap-1">
                {skillCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-mono text-[11px] px-2.5 py-1 border transition-all ${
                      selectedCategory === cat
                        ? 'bg-primary text-on-primary border-primary font-bold'
                        : 'border-primary/40 text-secondary hover:border-primary hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="border border-primary p-3.5 arch-hover bg-surface flex flex-col justify-between group transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="font-mono text-[10px] text-secondary border border-primary/20 px-1 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <h4 className="font-mono text-[13px] font-bold text-primary mb-1">
                        {skill.name}
                      </h4>
                      <p className="font-body text-[11px] text-secondary leading-tight">
                        {skill.detail}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="w-full bg-zinc-200 h-1.5 mt-3 border border-primary/20">
                      <div
                        className="bg-primary h-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
