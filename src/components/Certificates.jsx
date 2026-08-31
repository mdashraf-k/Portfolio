import React, { useState } from 'react';
import { Award, ExternalLink, Download, X, Eye, FileText, CheckCircle2 } from 'lucide-react';
import fastApiCert from '../assets/FastApi.jpg';
import javaScriptCert from '../assets/JavaScript.jpg';
import pythonCert from '../assets/Python.jpg';
import cCertPdf from '../assets/C.pdf';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 'CERT-001',
      title: 'FastAPI - The Complete Course 2026',
      subtitle: 'Beginner + Advanced Mastery',
      platform: 'Udemy',
      instructors: 'Eric Roby, Chad Darby',
      date: 'Jan 29, 2026',
      hours: '21.5 Hours',
      certId: 'UC-068930f4-4af3-4065-b523-365ab04d7563',
      type: 'image',
      src: fastApiCert,
      tags: ['FastAPI', 'Python', 'REST APIs', 'Async']
    },
    {
      id: 'CERT-002',
      title: 'The Complete JavaScript Course 2025',
      subtitle: 'From Zero to Expert!',
      platform: 'Udemy',
      instructors: 'Jonas Schmedtmann',
      date: 'Sept 11, 2025',
      hours: '71 Hours',
      certId: 'UC-a2b4059e-a853-4554-bafa-4692ecee65e2',
      type: 'image',
      src: javaScriptCert,
      tags: ['JavaScript', 'ES6+', 'DOM', 'Async/Await']
    },
    {
      id: 'CERT-003',
      title: '100 Days of Code™: Complete Python Pro',
      subtitle: 'Python Professional Bootcamp',
      platform: 'Udemy',
      instructors: 'Dr. Angela Yu',
      date: 'Dec 10, 2025',
      hours: '56.5 Hours',
      certId: 'UC-85345748-b7a1-48b2-bb31-8a915604b694',
      type: 'image',
      src: pythonCert,
      tags: ['Python', 'OOP', 'Data Science', 'Automation']
    },
    {
      id: 'CERT-004',
      title: 'C Programming Masterclass Certificate',
      subtitle: 'Core Systems & Memory Architecture',
      platform: 'Udemy / Certification',
      instructors: 'Professional Certification',
      date: '2025',
      hours: 'Comprehensive',
      certId: 'CERT-C-PROGRAMMING',
      type: 'pdf',
      src: cCertPdf,
      tags: ['C Language', 'Memory', 'Pointers', 'Low-Level']
    }
  ];

  return (
    <section className="mb-section-gap" id="certificates">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-6 border-b-2 border-primary pb-3">
        <div>
          <span className="font-mono text-xs text-secondary uppercase tracking-widest block font-bold mb-1">
            CREDENTIALS // VERIFIED CERTIFICATIONS
          </span>
          <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
            04 // CERTIFICATIONS
          </h2>
        </div>
        <span className="hidden sm:inline-block font-mono text-xs text-secondary border border-primary px-3 py-1 bg-surface">
          VERIFIED_CERTS: 04
        </span>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="border border-primary bg-surface arch-hover group flex flex-col justify-between cursor-pointer transition-all duration-300 p-5"
          >
            {/* Header Badge */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span className="font-mono text-[11px] font-bold text-secondary uppercase">
                  {cert.platform}
                </span>
              </div>
              <span className="font-mono text-[10px] bg-white border border-primary px-2 py-0.5 font-bold text-primary">
                {cert.id}
              </span>
            </div>

            {/* Thumbnail Preview Area */}
            <div className="h-44 border border-primary mb-4 relative overflow-hidden bg-zinc-100 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
              {cert.type === 'image' ? (
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-4 text-center bg-zinc-900 text-white w-full h-full">
                  <FileText className="w-10 h-10 text-emerald-400 mb-2" />
                  <span className="font-mono text-xs font-bold text-emerald-400">C PROGRAMMING CERTIFICATE</span>
                  <span className="font-mono text-[10px] text-zinc-400 mt-1">PDF DOCUMENT</span>
                </div>
              )}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <span className="bg-primary text-on-primary font-mono text-xs font-bold px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                  <Eye className="w-3.5 h-3.5" /> INSPECT CERTIFICATE
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div>
              <h3 className="font-mono text-base font-bold text-primary mb-1 group-hover:text-emerald-700 transition-colors">
                {cert.title}
              </h3>
              <p className="font-body text-xs text-secondary mb-3">
                Instructor: {cert.instructors} • {cert.hours}
              </p>

              {/* Tags & Action */}
              <div className="flex justify-between items-center pt-3 border-t border-primary/30 font-mono text-xs">
                <div className="flex flex-wrap gap-1">
                  {cert.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="border border-primary/30 px-1.5 py-0.5 text-[10px] text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-primary font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  VIEW <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-surface border-2 border-primary w-full max-w-4xl max-h-[92vh] flex flex-col justify-between shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="border-b-2 border-primary p-4 bg-white flex justify-between items-center sticky top-0 z-20">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-emerald-600 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> VERIFIED CREDENTIAL // {selectedCert.platform}
                </div>
                <h3 className="font-display-lg text-lg sm:text-xl font-bold text-primary">
                  {selectedCert.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <a
                  href={selectedCert.src}
                  download={`${selectedCert.title.replace(/\s+/g, '_')}_Certificate`}
                  className="border border-primary px-3 py-1.5 bg-primary text-on-primary hover:bg-surface hover:text-primary transition-colors flex items-center gap-1.5 font-bold"
                >
                  <Download className="w-3.5 h-3.5" /> DOWNLOAD
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="border border-primary p-1.5 text-primary hover:bg-primary hover:text-on-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Media Body */}
            <div className="p-4 bg-zinc-900 flex justify-center items-center overflow-auto max-h-[70vh]">
              {selectedCert.type === 'image' ? (
                <img
                  src={selectedCert.src}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[65vh] object-contain border border-primary shadow-2xl bg-white"
                />
              ) : (
                <iframe
                  src={selectedCert.src}
                  title={selectedCert.title}
                  className="w-full h-[65vh] border-0 bg-white"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t-2 border-primary p-4 bg-white flex flex-wrap justify-between items-center font-mono text-xs gap-2">
              <div className="text-secondary text-[11px]">
                CERTIFICATE ID: <span className="text-primary font-bold">{selectedCert.certId}</span> • ISSUED: <span className="text-primary font-bold">{selectedCert.date}</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="border border-primary px-4 py-1 bg-primary text-on-primary hover:bg-surface hover:text-primary transition-colors font-bold text-xs"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
