"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, Github, Linkedin, MessageSquare, Terminal, ExternalLink, Phone, MapPin, Download, MessageCircle } from "lucide-react";
import { playHover, playSelect, playAffirmative } from "@/lib/sound";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Game Development Inquiry",
    message: "",
  });

  const email = "islam.velizade1995@gmail.com";
  const whatsapp = "@IslamValizada";
  const location = "Baku, Azerbaijan (AZ 1005)";

  const handleCopyEmail = () => {
    playAffirmative();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playAffirmative();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <MessageSquare className="w-4 h-4" />
              <span>SEC // 04 — TRANSMISSION CHANNEL</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              ESTABLISH CONTACT
            </h2>
            <p className="text-white/60 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Open for game development roles, simulation engineering, custom interactive systems, and collaborative studio projects.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              onMouseEnter={playHover}
              data-cursor="COPY"
              className="px-4 py-2 border border-white/15 hover:border-accent bg-surface-200/80 font-mono text-xs text-white hover:text-accent transition-all flex items-center gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
            </button>
          </div>
        </div>

        {/* Contact Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Direct Channels & Terminal Info */}
          <div className="lg:col-span-5 border border-white/10 bg-surface-200/80 p-6 sm:p-10 hud-corner flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 text-white/40">
                <span className="text-accent flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  DIRECT CHANNELS
                </span>
                <span>STATUS: READY</span>
              </div>

              {/* Direct Email Card */}
              <div className="p-4 bg-surface-100/60 border border-white/5">
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-1">
                  DIRECT EMAIL
                </div>
                <a
                  href={`mailto:${email}`}
                  onMouseEnter={playHover}
                  onClick={playSelect}
                  className="font-mono text-sm sm:text-base font-bold text-accent hover:underline block break-all"
                >
                  {email}
                </a>
                <div className="text-[10px] text-white/40 font-mono mt-1">
                  Direct inquiries &amp; career opportunities
                </div>
              </div>

              {/* Direct WhatsApp Card */}
              <div className="p-4 bg-surface-100/60 border border-white/5">
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WHATSAPP DIRECT</span>
                  </span>
                  <span className="text-emerald-400 text-[9px] border border-emerald-500/30 px-1.5 py-0.5">ONLINE</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-mono text-base font-bold text-accent tracking-wide">
                    {whatsapp}
                  </span>
                  <span className="font-mono text-[11px] text-white/40 border border-white/10 px-2 py-0.5 select-none blur-[4px]" title="Phone number masked for privacy">
                    +994 55 ••• •• ••
                  </span>
                </div>
                <div className="text-[10px] text-white/40 font-mono mt-2">
                  Baku, Azerbaijan (UTC+4) • Reach out directly via WhatsApp {whatsapp}
                </div>
              </div>

              {/* Download CV Card */}
              <a
                href="/resume.pdf"
                download="Islam_Valizada_CV.pdf"
                onMouseEnter={playHover}
                onClick={playAffirmative}
                data-cursor="DOWNLOAD"
                className="p-3.5 border border-accent/40 bg-accent/10 hover:bg-accent hover:text-black text-accent flex items-center justify-between transition-all group font-mono text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4" />
                  <span className="font-bold tracking-wider">OFFICIAL CURRICULUM VITAE (PDF)</span>
                </div>
                <span className="text-[10px] group-hover:text-black">DOWNLOAD</span>
              </a>

              {/* External Profiles */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
                  NETWORKS &amp; REPOSITORIES:
                </div>

                <a
                  href="https://github.com/Devrimano"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playSelect}
                  data-cursor="OPEN ↗"
                  className="p-3.5 border border-white/5 hover:border-accent/40 bg-surface-100/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                    <div>
                      <span className="font-mono text-xs text-white block">GitHub / @Devrimano</span>
                      <span className="font-mono text-[9px] text-white/40">Repositories &amp; Source Code</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-accent transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/islam-valizada-010606351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playSelect}
                  data-cursor="OPEN ↗"
                  className="p-3.5 border border-white/5 hover:border-accent/40 bg-surface-100/40 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-white group-hover:text-accent transition-colors" />
                    <div>
                      <span className="font-mono text-xs text-white block">LinkedIn / Islam Valizada</span>
                      <span className="font-mono text-[9px] text-white/40">Professional Experience &amp; Network</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 font-mono text-xs text-white/40 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {location}
              </span>
              <span className="text-emerald-400">AVAILABLE</span>
            </div>
          </div>

          {/* Interactive Message Console */}
          <div className="lg:col-span-7 border border-white/10 bg-surface-200/80 p-6 sm:p-10 hud-corner">
            <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 mb-6 text-white/40">
              <span className="text-white font-bold">TRANSMIT PACKET</span>
              <span className="text-accent">ENCRYPTED // SHA-256</span>
            </div>

            {formSubmitted ? (
              <div className="p-8 border border-accent/40 bg-accent/5 text-center flex flex-col items-center gap-3">
                <Check className="w-10 h-10 text-accent p-2 border border-accent rounded-full" />
                <h3 className="font-mono text-lg font-bold text-white uppercase tracking-wider">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-xs text-white/60 font-sans max-w-sm">
                  Your message has been buffered into the queue. Islam Valizada will review your transmission and respond promptly.
                </p>
                <button
                  onClick={() => {
                    playSelect();
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "Game Development Inquiry", message: "" });
                  }}
                  className="mt-4 font-mono text-xs text-accent underline hover:text-white"
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-[10px] uppercase mb-1">
                      CALLSIGN / YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-100 border border-white/10 focus:border-accent text-white px-3.5 py-2.5 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/50 text-[10px] uppercase mb-1">
                      RETURN ADDRESS / EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-100 border border-white/10 focus:border-accent text-white px-3.5 py-2.5 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-[10px] uppercase mb-1">
                    TRANSMISSION TYPE
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-surface-100 border border-white/10 focus:border-accent text-white px-3.5 py-2.5 outline-none transition-colors"
                  >
                    <option value="Game Development Inquiry">Game Development Project / Role</option>
                    <option value="Simulation & Hardware">Simulation &amp; CV Hardware System</option>
                    <option value="Backend Architecture">Backend &amp; High-Concurrency Engine</option>
                    <option value="General Exploration">General Technical Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-[10px] uppercase mb-1">
                    PAYLOAD / MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your game project, team requirements, or technical problem..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface-100 border border-white/10 focus:border-accent text-white px-3.5 py-2.5 outline-none transition-colors resize-none font-sans text-xs"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHover}
                  data-cursor="TRANSMIT"
                  className="w-full py-3.5 bg-accent hover:bg-accent-hover text-black font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)]"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT PACKET</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
