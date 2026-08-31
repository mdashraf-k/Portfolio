import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import spendRecordImg from '../assets/spend_record.png';
import wonderHotelImg from '../assets/wonder_hotel.png';
import todoAppImg from '../assets/todo_app.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: '001',
      title: 'Spend Recorder',
      description: 'Comprehensive expense management application designed to help users track, organize, and analyze financial transactions efficiently.',
      longDescription: 'Developed a feature-complete expense management platform to manage personal and shared group finances. Features RESTful APIs built with FastAPI, user authentication, group expense split calculations, and interactive dashboard visual analytics.',
      tags: ['Python', 'JavaScript', 'FastAPI', 'ReactJS', 'PostgreSQL'],
      metrics: {
        'STACK': 'FastAPI + React',
        'DATABASE': 'PostgreSQL',
        'AUTH': 'JWT Encrypted',
        'API_SLA': '< 20ms'
      },
      highlights: [
        'Developed a comprehensive expense management application to track financial transactions efficiently',
        'Implemented secure user authentication and group expense management for shared expenses',
        'Designed RESTful APIs and a responsive ReactJS user interface with scalable architecture',
        'Built financial query optimization and categorized transaction history views'
      ],
      asciiDiagram: `
+-----------------------+           +-----------------------+
|  ReactJS Dashboard UI | --------> |  FastAPI REST Gateway |
+-----------------------+           +-----------------------+
                                                |
                      +-------------------------+-------------------------+
                      |                                                   |
                      v                                                   v
          +-----------------------+                           +-----------------------+
          |  User Auth & Group API|                           | PostgreSQL DB Engine  |
          +-----------------------+                           +-----------------------+
`,
      imageSrc: spendRecordImg
    },
    {
      id: '002',
      title: 'Complete Hotel Management System (WONDER)',
      description: 'Full-stack accommodation listing and hotel management platform featuring property discovery, booking workflow, and location reviews.',
      longDescription: 'Engineered WONDER, a robust hotel and property management web platform. Enables users to explore accommodation listings, upload property media, manage reviews, and perform CRUD operations with secure role-based authorization.',
      tags: ['JavaScript', 'EJS', 'HTML/CSS', 'Node.js', 'Express', 'MongoDB'],
      metrics: {
        'LISTINGS': 'Interactive',
        'MAPPING': 'Location API',
        'VIEW': 'SSR / EJS',
        'STORAGE': 'Cloud Media'
      },
      highlights: [
        'Full-stack accommodation listing platform for creating, updating, and managing property listings',
        'Built secure user authentication and authorization ensuring owner-only property management',
        'Interactive location mapping, image uploads, and user review rating features',
        'Designed intuitive brutalist UI components and responsive layout architectures'
      ],
      asciiDiagram: `
+-----------------------+     +-----------------------+     +-----------------------+
|  Property Seeker Client| --> | Express Middleware Core| --> | MongoDB Storage Engine |
+-----------------------+     +-----------------------+     +-----------------------+
                                                                        |
                                                                        v
                                                            +-----------------------+
                                                            | Cloud Media Bucket    |
                                                            +-----------------------+
`,
      imageSrc: wonderHotelImg
    },
    {
      id: '003',
      title: 'Todo Application',
      description: 'Personalized task management application designed for organizing daily tasks, tracking completion progress, and productivity workflows.',
      longDescription: 'Created a sleek, user-friendly Todo application with personalized user signup and login. Allows users to categorize tasks, mark milestones, set priority tags, and maintain organized daily task queues with persistent state.',
      tags: ['Python', 'JavaScript', 'ReactJS', 'TailwindCSS'],
      metrics: {
        'SYNC': 'Real-time',
        'AUTH': 'User Accounts',
        'FILTERING': 'Tag Based',
        'PERFORMANCE': 'Instant'
      },
      highlights: [
        'Created a user-friendly Todo application to organize and manage daily tasks efficiently',
        'Enabled secure signup and login functionality for personalized user task queues',
        'Implemented full CRUD task features: adding, editing, tagging, marking complete, & deleting',
        'Fast responsive web interface built with modern React hooks & state persistence'
      ],
      asciiDiagram: `
+------------------+     +------------------------+     +------------------------+
|  User Task Client| --> | React State Manager    | --> | Task Persistence Layer |
+------------------+     +------------------------+     +------------------------+
`,
      imageSrc: todoAppImg
    }
  ];

  return (
    <section className="mb-section-gap" id="projects">
      {/* Section Title Header */}
      <div className="flex justify-between items-end mb-8 border-b-4 border-primary pb-3">
        <div>
          <span className="font-mono text-xs text-secondary uppercase tracking-widest block font-bold mb-1">
            PORTFOLIO // SELECTED WORKS
          </span>
          <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
            03 // FEATURED PROJECTS
          </h2>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs text-secondary border border-primary px-3 py-1 bg-surface">
          TOTAL_SYSTEMS: 03
        </span>
      </div>

      {/* Grid for Projects 1 & 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-gutter">
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="border border-primary bg-surface arch-hover group flex flex-col h-full cursor-pointer transition-all duration-300"
          >
            {/* Project Image Header */}
            <div className="h-52 border-b border-primary relative overflow-hidden bg-white flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute top-2 right-2 bg-white border border-primary px-2.5 py-1 font-mono text-[10px] font-bold text-primary">
                ID: {project.id}
              </div>
              <div className="absolute bottom-2 left-2 bg-primary text-on-primary px-2 py-0.5 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                INSPECT_BLUEPRINT <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>

            {/* Project Info Body */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-[22px] font-bold text-primary mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Metrics Preview */}
                <div className="grid grid-cols-2 gap-2 font-mono text-[11px] mb-4 bg-white border border-primary/30 p-2">
                  {Object.entries(project.metrics).slice(0, 2).map(([k, v]) => (
                    <div key={k}>
                      <span className="text-secondary text-[9px] block">{k}</span>
                      <span className="text-primary font-bold">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-primary border-dashed">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-primary px-2 py-0.5 font-mono text-[11px] text-primary bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project 3 Full Width Banner */}
      {projects[2] && (
        <div
          onClick={() => setSelectedProject(projects[2])}
          className="border border-primary bg-surface arch-hover group flex flex-col md:flex-row cursor-pointer transition-all duration-300"
        >
          <div className="md:w-5/12 h-60 md:h-auto border-b md:border-b-0 md:border-r border-primary relative overflow-hidden bg-white flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
            <img
              src={projects[2].imageSrc}
              alt={projects[2].title}
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute top-2 left-2 bg-white border border-primary px-2.5 py-1 font-mono text-[10px] font-bold text-primary">
              ID: {projects[2].id} // FEATURED_HIGH_PERFORMANCE
            </div>
          </div>

          <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-xs text-secondary border border-primary/30 px-2 py-0.5 font-bold">
                  MISSION_CRITICAL
                </span>
                <span className="font-mono text-xs text-primary flex items-center gap-1 font-bold">
                  EXPAND SPEC <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-headline-md text-[26px] font-bold text-primary mb-3">
                {projects[2].title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                {projects[2].description}
              </p>
            </div>

            <div>
              {/* Telemetry Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs border border-primary p-3 mb-4 bg-white">
                {Object.entries(projects[2].metrics).map(([k, v]) => (
                  <div key={k}>
                    <span className="text-secondary text-[10px] block">{k}</span>
                    <span className="text-primary font-bold text-sm">{v}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {projects[2].tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-primary px-2.5 py-1 font-mono text-[11px] text-primary bg-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Detail Blueprint Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
