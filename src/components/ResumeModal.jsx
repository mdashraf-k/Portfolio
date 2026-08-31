import React from 'react';
import { X, Download, ExternalLink, ShieldCheck, Printer } from 'lucide-react';
import cvPdf from '../assets/CV.pdf';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-surface border-2 border-primary w-full max-w-5xl h-[92vh] flex flex-col justify-between shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Actions Bar */}
        <div className="border-b-2 border-primary p-3 sm:p-4 bg-white flex flex-wrap justify-between items-center gap-2 sticky top-0 z-20">
          <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate">DOCUMENT: MD_ASHRAF_KAMAL_CV.pdf</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {/* Download Button */}
            <a
              href={cvPdf}
              download="MD_ASHRAF_KAMAL_CV.pdf"
              className="border border-primary px-3 py-1.5 bg-primary text-on-primary hover:bg-surface hover:text-primary transition-colors flex items-center gap-1.5 font-bold arch-hover"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD</span>
            </a>

            {/* Open in New Tab */}
            <a
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
              className="border border-primary px-3 py-1.5 bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1.5 font-bold arch-hover"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">OPEN NEW TAB</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="border border-primary px-3 py-1.5 bg-surface text-primary hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1.5 font-bold arch-hover hidden md:flex"
            >
              <Printer className="w-3.5 h-3.5" /> PRINT
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="border border-primary p-1.5 text-primary hover:bg-primary hover:text-on-primary transition-colors ml-1"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Preview Container */}
        <div className="flex-1 w-full bg-zinc-900 relative p-1 sm:p-2 flex flex-col items-center justify-center overflow-hidden">
          <iframe
            src={cvPdf}
            title="MD Ashraf Kamal CV Preview"
            className="w-full h-full border-0 bg-white shadow-inner"
          />

          {/* Fallback Notice */}
          <div className="w-full bg-surface border-t border-primary p-2 text-center font-mono text-[11px] text-secondary">
            Unable to preview PDF directly in your browser?{' '}
            <a
              href={cvPdf}
              download="MD_ASHRAF_KAMAL_CV.pdf"
              className="text-primary underline font-bold hover:text-emerald-700"
            >
              Click here to download the PDF file directly.
            </a>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="border-t-2 border-primary p-3 bg-white flex justify-between items-center font-mono text-xs">
          <span className="text-secondary font-bold text-[10px] sm:text-xs">
            MD ASHRAF KAMAL — RESUME SPECIFICATION
          </span>
          <button
            onClick={onClose}
            className="border border-primary px-4 py-1 bg-primary text-on-primary hover:bg-surface hover:text-primary transition-colors font-bold text-xs"
          >
            CLOSE PREVIEW
          </button>
        </div>

      </div>
    </div>
  );
}
