"use client";

import React, { useState } from "react";
import { 
  Terminal, 
  Shield, 
  Cpu, 
  Code2, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Globe, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { playHover, playSelect, playAffirmative } from "@/lib/sound";
import { careerTimeline, awardsList, educationInfo, candidateDetails, indieReleases } from "@/data/projects";

export function About() {
  const [activeTab, setActiveTab] = useState<"DOSSIER" | "EXPERIENCE" | "GAMES & AWARDS" | "PHILOSOPHY">("DOSSIER");

  return (
    <section id="about" className="py-24 px-4 md:px-8 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <Shield className="w-4 h-4" />
              <span>SEC // 02 — DEVELOPER DOSSIER</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              WHO IS BEHIND THE GAMES?
            </h2>
            <p className="text-white/60 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Software Developer at Azersilah (AzSimX), Indie Studio Team Lead, and Computer Engineering candidate at ASOIU.
            </p>
          </div>

          {/* Action & Tab Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Direct CV Download Button */}
            <a
              href="/resume.pdf"
              download="Islam_Valizada_CV.pdf"
              onMouseEnter={playHover}
              onClick={playAffirmative}
              data-cursor="DOWNLOAD"
              className="px-4 py-2 border border-accent/60 bg-accent/10 hover:bg-accent hover:text-black text-accent font-mono text-xs tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.15)]"
              title="Download Islam Valizada's Official CV (PDF)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV (PDF)</span>
            </a>

            {/* Interactive Mode Switcher */}
            <div className="flex flex-wrap items-center border border-white/10 bg-surface-200/80 p-1 font-mono text-xs">
              {(["DOSSIER", "EXPERIENCE", "GAMES & AWARDS", "PHILOSOPHY"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    playSelect();
                    setActiveTab(tab);
                  }}
                  onMouseEnter={playHover}
                  data-cursor="SELECT"
                  className={`px-3 py-1.5 transition-all ${
                    activeTab === tab
                      ? "bg-accent text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Terminal Identity Matrix */}
          <div className="lg:col-span-7 border border-white/10 bg-surface-200/80 p-6 sm:p-10 hud-corner flex flex-col justify-between">
            {/* TAB 1: DOSSIER */}
            {activeTab === "DOSSIER" && (
              <div className="space-y-8">
                {/* Dossier Top Banner */}
                <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 text-white/40">
                  <span className="text-accent flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    OPERATOR_PROFILE // VERIFIED
                  </span>
                  <span>LOCATION: {candidateDetails.location}</span>
                </div>

                {/* Structured Identity Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 bg-surface-100/60 border border-white/5">
                    <div className="text-white/40 text-[10px] tracking-wider mb-1">WHO</div>
                    <div className="text-white text-base font-bold">{candidateDetails.name}</div>
                    <div className="text-accent text-[11px] mt-0.5">{candidateDetails.title}</div>
                  </div>

                  <div className="p-4 bg-surface-100/60 border border-white/5">
                    <div className="text-white/40 text-[10px] tracking-wider mb-1 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-accent" />
                      <span>ACADEMIC BACKGROUND</span>
                    </div>
                    <div className="text-white text-xs font-bold">{educationInfo.institution}</div>
                    <div className="text-white/60 text-[11px] mt-0.5">{educationInfo.degree} ({educationInfo.graduation})</div>
                  </div>

                  <div className="p-4 bg-surface-100/60 border border-white/5">
                    <div className="text-white/40 text-[10px] tracking-wider mb-1">CURRENT ACTIVE POST</div>
                    <div className="text-white text-sm font-bold">Azersilah (AzSimX)</div>
                    <div className="text-white/60 text-[11px] mt-0.5">Software Developer · Military Simulations</div>
                  </div>

                  <div className="p-4 bg-surface-100/60 border border-white/5">
                    <div className="text-white/40 text-[10px] tracking-wider mb-1 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-accent" />
                      <span>NATURAL LANGUAGES</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-white/80 text-[11px] mt-1">
                      {candidateDetails.languages.map((lang) => (
                        <span key={lang.name} className="border border-white/10 px-1.5 py-0.5">
                          {lang.name} ({lang.level})
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  I specialize in military simulations, tactile game mechanics, and computer vision systems. Currently developing advanced physics simulations and Hardware-in-the-Loop (HiL) architectures at <strong>Azersilah (AzSimX)</strong>, while previously directing indie game production as Team Lead at <strong>DarkNight Studio</strong>.
                </p>
              </div>
            )}

            {/* TAB 2: EXPERIENCE */}
            {activeTab === "EXPERIENCE" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 text-white/40">
                  <span className="text-accent flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    PROFESSIONAL BATTLE RECORD
                  </span>
                  <span>INDUSTRY EXPERIENCE</span>
                </div>

                <div className="space-y-6">
                  {careerTimeline.map((job, idx) => (
                    <div key={idx} className="p-4 border-l-2 border-accent bg-surface-100/40 space-y-2 font-mono">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="text-white font-bold text-sm">
                          {job.company} {job.subdivision && <span className="text-white/50">({job.subdivision})</span>}
                        </span>
                        <span className="px-2 py-0.5 bg-surface-200 border border-white/10 text-accent text-[10px]">
                          {job.period}
                        </span>
                      </div>
                      <div className="text-accent text-xs font-semibold">
                        {job.role} • <span className="text-white/40">{job.location}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-white/70 font-sans pt-1">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent font-bold mt-0.5">&gt;</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: GAMES & AWARDS */}
            {activeTab === "GAMES & AWARDS" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 text-white/40">
                  <span className="text-accent flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    RECOGNITIONS &amp; RELEASES
                  </span>
                  <span>COMPETITIONS &amp; ITCH.IO</span>
                </div>

                {/* Awards */}
                <div className="space-y-3">
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    COMPETITIONS &amp; HACKATHONS:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {awardsList.map((a) => (
                      <div key={a.title} className="p-3 bg-surface-100/60 border border-white/10 font-mono text-xs">
                        <div className="text-accent font-bold text-[11px]">{a.badge}</div>
                        <div className="text-white font-bold mt-1">{a.title}</div>
                        <div className="text-white/50 text-[10px] mt-0.5">{a.placement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Released Titles */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    PUBLISHED INDIE TITLES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {indieReleases.map((g) => (
                      <a
                        key={g.title}
                        href={g.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={playHover}
                        onClick={playSelect}
                        data-cursor="PLAY ▶"
                        className="p-3 border border-white/10 hover:border-accent bg-surface-100/40 hover:bg-surface-100/80 transition-all group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-1">
                            <span className="text-accent">{g.tag}</span>
                            <span>{g.platform}</span>
                          </div>
                          <div className="font-mono text-xs font-bold text-white group-hover:text-accent transition-colors flex items-center justify-between">
                            <span>{g.title}</span>
                            <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-accent" />
                          </div>
                          <p className="text-[11px] text-white/60 font-sans mt-1 line-clamp-2">
                            {g.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: PHILOSOPHY */}
            {activeTab === "PHILOSOPHY" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 text-white/40">
                  <span className="text-accent flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    GAME DEV PARADIGM // MANIFESTO
                  </span>
                  <span>INPUT: DIRECT</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border-l-2 border-accent bg-surface-100/40">
                    <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1">
                      1. MILITARY-GRADE PHYSICAL SIMULATION
                    </h4>
                    <p className="text-xs text-white/60 font-sans">
                      Simulation accuracy requires deterministic physics solvers, zero collision clipping, and meticulous validation against real-world ballistic models.
                    </p>
                  </div>

                  <div className="p-4 border-l-2 border-cyan-400 bg-surface-100/40">
                    <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1">
                      2. HARDWARE-IN-THE-LOOP INTEGRATION
                    </h4>
                    <p className="text-xs text-white/60 font-sans">
                      Physical controllers and optical sensors should communicate with zero latency. Sub-8ms telemetry ensures seamless harmony between physical input and virtual state.
                    </p>
                  </div>

                  <div className="p-4 border-l-2 border-amber-400 bg-surface-100/40">
                    <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1">
                      3. SOLID &amp; MODULAR ARCHITECTURE
                    </h4>
                    <p className="text-xs text-white/60 font-sans">
                      Clean architecture prevents technical debt. Event buses, object pooling, and strict memory profiling guarantee sustained 60+ FPS without garbage collection spikes.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Terminal Status */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40">
              <span>ACCREDITATION: ASOIU COMP ENGINEERING</span>
              <span className="text-accent">STATUS: ACTIVE IN INDUSTRY</span>
            </div>
          </div>

          {/* Right Column: Visual Skill Matrix & Core Competencies */}
          <div className="lg:col-span-5 border border-white/10 bg-surface-200/80 p-6 sm:p-10 hud-corner flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 mb-6 text-white/40">
                <span className="text-white font-bold">CORE COMPETENCIES</span>
                <span className="text-accent">4 DOMAINS</span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Military & Physics Simulation",
                    desc: "Unity 3D/2D physics modeling, scenario-based accuracy validation, and performance optimization in complex 3D scenes.",
                    tag: "AZERSILAH (AZSIMX)"
                  },
                  {
                    title: "Hardware-in-the-Loop & Sensors",
                    desc: "Tactical controller integration, serial I/O communication protocols, optical laser sensors, and low-latency data bridges.",
                    tag: "HiL & EMBEDDED"
                  },
                  {
                    title: "Production Leadership & Direction",
                    desc: "Leading cross-functional teams from game concept to published release on Google Play and itch.io.",
                    tag: "TEAM LEAD"
                  },
                  {
                    title: "Architecture & Clean Code",
                    desc: "OOP, SOLID principles, design patterns (State, Pool, Observer), memory profiling, and Git/GitLab version control.",
                    tag: "ENGINEERING"
                  },
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    onMouseEnter={playHover}
                    className="p-4 border border-white/5 hover:border-accent/40 bg-surface-100/40 transition-all group"
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                      <span className="font-bold text-white group-hover:text-accent transition-colors">
                        0{idx + 1} // {item.title}
                      </span>
                      <span className="text-[10px] text-white/40 border border-white/10 px-1.5 py-0.5">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 font-mono text-xs text-white/40 flex items-center justify-between">
              <span>SPECIALTY: GAME DEV &amp; SIMULATION</span>
              <a 
                href="/resume.pdf"
                download="Islam_Valizada_CV.pdf"
                className="text-accent hover:underline flex items-center gap-1"
              >
                <span>GET FULL CV</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
