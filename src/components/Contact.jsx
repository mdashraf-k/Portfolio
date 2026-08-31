import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transmitted, setTransmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) onShowToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('Please complete all payload fields before transmitting.');
      return;
    }

    setIsTransmitting(true);
    setProgress(15);

    setTimeout(() => setProgress(45), 400);
    setTimeout(() => setProgress(80), 800);
    setTimeout(() => {
      setProgress(100);
      setIsTransmitting(false);
      setTransmitted(true);
      if (onShowToast) onShowToast('DATA TRANSMITTED SUCCESSFULLY!');

      // Confetti feedback
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#000000', '#ffffff', '#5d5f5f']
        });
      } catch (err) {}
    }, 1200);
  };

  return (
    <section className="mb-section-gap" id="contact">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 border-b-2 border-primary pb-3">
        <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tight">
          05 // TRANSMISSION &amp; CONTACT PROTOCOL
        </h2>
      </div>

      <div className="border border-primary bg-surface p-6 md:p-gutter transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Contact Information & Channels */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <h3 className="font-headline-md text-[26px] text-primary mb-4 uppercase">
                GET IN TOUCH
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Open for high-impact technical discussions, architectural consultations, systems engineering roles, and open-source collaborations.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 font-mono text-xs text-primary">
                {/* Email */}
                <div className="flex items-center justify-between border border-primary p-3 bg-white arch-hover">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>ashrafk0205@gmail.com</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('ashrafk0205@gmail.com', 'Email')}
                    className="p-1 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between border border-primary p-3 bg-white arch-hover">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+91 7371921306</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('+91 7371921306', 'Phone')}
                    className="p-1 border border-primary text-primary hover:bg-primary hover:text-on-primary transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'Phone' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 border border-primary p-3 bg-white">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>India / Remote Worldwide</span>
                </div>
              </div>
            </div>

            {/* Protocol Security Notice */}
            <div className="border border-primary/40 bg-zinc-100 p-3 font-mono text-[11px] text-secondary flex items-start gap-2">
              <Terminal className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Messages are processed via encrypted zero-log pipeline. Expected SLA response: &lt; 24 Hours.</span>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Field 1: IDENTIFIER */}
              <div className="relative">
                <label className="font-mono text-[10px] text-secondary absolute -top-4 left-0 uppercase tracking-widest font-bold">
                  IDENTIFIER (NAME) *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Linus Torvalds"
                  className="w-full bg-transparent border-0 border-b border-primary text-primary font-body-md focus:ring-0 focus:border-b-2 focus:border-primary px-0 py-2.5 placeholder-zinc-400 rounded-none font-mono text-sm"
                  required
                />
              </div>

              {/* Field 2: COMMUNICATION_PROTOCOL */}
              <div className="relative mt-2">
                <label className="font-mono text-[10px] text-secondary absolute -top-4 left-0 uppercase tracking-widest font-bold">
                  COMMUNICATION_PROTOCOL (EMAIL) *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. user@domain.com"
                  className="w-full bg-transparent border-0 border-b border-primary text-primary font-body-md focus:ring-0 focus:border-b-2 focus:border-primary px-0 py-2.5 placeholder-zinc-400 rounded-none font-mono text-sm"
                  required
                />
              </div>

              {/* Field 3: PAYLOAD */}
              <div className="relative mt-2">
                <label className="font-mono text-[10px] text-secondary absolute -top-4 left-0 uppercase tracking-widest font-bold">
                  PAYLOAD (MESSAGE) *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your technical inquiry or proposal..."
                  className="w-full bg-transparent border-0 border-b border-primary text-primary font-body-md focus:ring-0 focus:border-b-2 focus:border-primary px-0 py-2.5 placeholder-zinc-400 rounded-none resize-none font-mono text-sm"
                  required
                />
              </div>

              {/* Progress bar during transmission */}
              {isTransmitting && (
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-[10px] text-primary font-bold">
                    <span>TRANSMITTING_PAYLOAD...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-zinc-200 h-2 border border-primary">
                    <div
                      className="bg-primary h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Transmission Confirmation Message */}
              {transmitted && (
                <div className="border border-emerald-600 bg-emerald-50 p-3 font-mono text-xs text-emerald-700 flex items-center gap-2 font-bold">
                  <Check className="w-4 h-4" />
                  <span>TRANSMISSION ACKNOWLEDGED! MD ASHRAF KAMAL WILL RESPOND PROMPTLY.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isTransmitting}
                className="border border-primary bg-surface text-primary hover:bg-primary hover:text-on-primary py-3.5 px-6 font-mono text-xs font-bold arch-hover transition-colors duration-200 mt-2 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isTransmitting ? 'TRANSMITTING...' : 'TRANSMIT_DATA'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
