import React, { useState } from 'react';
import GeometricCanvas from './components/GeometricCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { Terminal } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md relative selection:bg-primary selection:text-on-primary">
      {/* Background Interactive Wireframe Canvas */}
      <GeometricCanvas />

      {/* Top Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Container */}
      <main className="max-w-container-max mx-auto px-4 md:px-margin-desktop pt-[80px] relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
        />
        <About />
        <AboutSkills />
        <Projects />
        <Certificates />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      {resumeOpen && (
        <ResumeModal onClose={() => setResumeOpen(false)} />
      )}

      {/* Brutalist Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary border-2 border-primary px-4 py-3 font-mono text-xs shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200">
          <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-on-primary/60 hover:text-on-primary ml-2 font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
