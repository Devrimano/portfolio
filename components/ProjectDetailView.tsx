"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Code2, 
  CheckCircle2, 
  Play, 
  Terminal, 
  ExternalLink, 
  Compass, 
  Crosshair,
  Sparkles,
  Github
} from "lucide-react";
import { Project, getProjectBySlug, projects } from "@/data/projects";
import { playHover, playSelect } from "@/lib/sound";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface ProjectDetailViewProps {
  project: Project;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  const nextProject = getProjectBySlug(project.nextSlug) || projects[0];
  const [activeSystemTab, setActiveSystemTab] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Viewport */}
      <section className="relative pt-28 pb-16 px-4 md:px-8 border-b border-white/10 bg-gradient-to-b from-surface-300 via-surface-200 to-background overflow-hidden">
        {/* Top Breadcrumb & Return to Launcher */}
        <div className="max-w-7xl mx-auto w-full mb-8 flex items-center justify-between font-mono text-xs text-white/50">
          <Link
            href="/#work"
            onMouseEnter={playHover}
            onClick={playSelect}
            data-cursor="RETURN"
            className="inline-flex items-center gap-2 hover:text-accent transition-colors py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO WORLDS LAUNCHER</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-accent font-bold">{project.number}</span>
            <span className="text-white/20">/</span>
            <span>04</span>
          </div>
        </div>

        {/* Cinematic Title & Meta */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-4">
            <span className="px-2.5 py-1 bg-accent text-black font-bold">
              {project.category}
            </span>
            <span className="px-2.5 py-1 bg-surface-100 border border-white/10 text-white/70">
              {project.engine}
            </span>
            <span className="px-2.5 py-1 bg-surface-100 border border-white/10 text-white/50">
              {project.year}
            </span>
          </div>

          <h1 className="font-mono text-4xl sm:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-white/70 font-sans max-w-3xl leading-relaxed mb-8">
            {project.tagline}
          </p>

          {/* Interactive Simulation / Gameplay Viewport Placeholder */}
          <div className="relative w-full h-[360px] sm:h-[500px] border border-white/15 bg-surface-100/90 hud-corner overflow-hidden flex flex-col justify-between p-6">
            {/* Top HUD Overlay */}
            <div className="flex items-center justify-between font-mono text-[10px] text-white/60 border-b border-white/10 pb-3">
              <span className="flex items-center gap-2 text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                SIMULATION_VIEWPORT // {project.shortTitle}
              </span>
              <span>RENDER TARGET: 1080P 60FPS</span>
            </div>

            {/* Center Visual Mockup */}
            <div className="relative flex flex-col items-center justify-center text-center my-auto">
              <div className="relative p-6 border border-accent/30 bg-surface-200/80 shadow-[0_0_40px_rgba(204,255,0,0.1)] mb-4">
                <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-1">
                  TACTILE GAMEPLAY EXPERIENCE
                </div>
                <div className="font-mono text-[11px] text-white/70">
                  {project.engine} • {project.role}
                </div>
                {project.demoUrl && project.demoUrl !== "#" && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHover}
                      onClick={playSelect}
                      data-cursor="PLAY ▶"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                    >
                      <span>INSTALL FROM GOOGLE PLAY STORE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
              <p className="font-mono text-xs text-white/40 max-w-md">
                [HIGH-FIDELITY SIMULATION PROTOCOL ACTIVE • INTERACTION CONTROLLER LOADED]
              </p>
            </div>

            {/* Bottom HUD Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-white/40 border-t border-white/10 pt-3">
              <div className="flex items-center gap-4">
                {Object.entries(project.technicalSpecs).map(([key, val]) => (
                  <span key={key} className="hidden sm:inline">
                    <span className="text-white/60">{key}:</span> <span className="text-accent">{val}</span>
                  </span>
                ))}
              </div>
              <span className="text-white/50">BUILD STATUS: VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Deep Dive & Key Systems */}
        <div className="lg:col-span-8 space-y-16">
          {/* Overview */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <Terminal className="w-4 h-4" />
              <span>PROJECT OVERVIEW</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
              ARCHITECTURAL VISION
            </h2>
            <p className="text-white/80 font-sans text-base leading-relaxed">
              {project.longOverview}
            </p>
          </div>

          {/* Key Systems (Tabbed Game Systems Breakdown) */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <Cpu className="w-4 h-4" />
              <span>SUBSYSTEM BREAKDOWN</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-6">
              ENGINEERED GAME SYSTEMS
            </h2>

            {/* System Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-3">
              {project.systems.map((sys, idx) => (
                <button
                  key={sys.title}
                  onClick={() => {
                    playSelect();
                    setActiveSystemTab(idx);
                  }}
                  onMouseEnter={playHover}
                  data-cursor="SELECT"
                  className={`font-mono text-xs px-3.5 py-2 border transition-all ${
                    activeSystemTab === idx
                      ? "bg-accent text-black border-accent font-bold"
                      : "bg-surface-200 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  0{idx + 1} // {sys.title}
                </button>
              ))}
            </div>

            {/* Active System Details */}
            {project.systems[activeSystemTab] && (
              <div className="border border-white/10 bg-surface-200/80 p-6 sm:p-8 hud-corner space-y-6">
                <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-3">
                  <span className="text-accent font-bold">
                    {project.systems[activeSystemTab].category}
                  </span>
                  <span className="text-white/40">SUBSYSTEM 0{activeSystemTab + 1}</span>
                </div>

                <h3 className="font-mono text-xl font-bold text-white uppercase">
                  {project.systems[activeSystemTab].title}
                </h3>

                <p className="text-sm text-white/70 font-sans leading-relaxed">
                  {project.systems[activeSystemTab].description}
                </p>

                {/* Code Snippet if available */}
                {project.systems[activeSystemTab].codeSnippet && (
                  <div className="relative bg-black/80 border border-white/10 p-4 font-mono text-xs overflow-x-auto">
                    <div className="text-[10px] text-accent/80 mb-2 border-b border-white/10 pb-1">
                      // LOGIC EXCERPT: {project.systems[activeSystemTab].title}
                    </div>
                    <pre className="text-white/80 leading-relaxed">
                      <code>{project.systems[activeSystemTab].codeSnippet}</code>
                    </pre>
                  </div>
                )}

                {/* Metrics */}
                {project.systems[activeSystemTab].metrics && (
                  <div className="pt-4 border-t border-white/10">
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                      SYSTEM BENCHMARKS:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                      {project.systems[activeSystemTab].metrics?.map((m) => (
                        <div key={m} className="flex items-center gap-2 text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Technical Gallery & Schematics */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <Layers className="w-4 h-4" />
              <span>VISUAL EVIDENCE</span>
            </div>
            <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-6">
              SCHEMATICS &amp; GAMEPLAY BREAKDOWN
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.galleryPlaceholders.map((item) => (
                <div
                  key={item.title}
                  className="border border-white/10 bg-surface-200/60 p-5 hud-corner flex flex-col justify-between"
                >
                  <div className="h-40 bg-surface-100 border border-white/5 flex items-center justify-center p-4 mb-4 relative">
                    <div className="font-mono text-xs text-accent/70 tracking-widest text-center">
                      [{item.tag}]
                    </div>
                    <span className="absolute bottom-2 right-2 font-mono text-[9px] text-white/30">
                      {project.shortTitle}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-mono text-sm font-bold text-white uppercase mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white/50 font-sans">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Roles, Contributions & Specs */}
        <div className="lg:col-span-4 space-y-8">
          {/* My Contributions */}
          <div className="border border-white/10 bg-surface-200/80 p-6 sm:p-8 hud-corner">
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4 border-b border-white/10 pb-3 flex items-center justify-between">
              <span>MY CONTRIBUTIONS</span>
              <span>LEAD DEV</span>
            </div>

            <ul className="space-y-3 font-mono text-xs text-white/70">
              {project.myContributions.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-accent font-bold mt-0.5">&gt;</span>
                  <span className="font-sans leading-relaxed text-xs">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="border border-white/10 bg-surface-200/80 p-6 sm:p-8 hud-corner">
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4 border-b border-white/10 pb-3">
              TELEMETRY SPECIFICATIONS
            </div>

            <div className="space-y-3 font-mono text-xs">
              {Object.entries(project.technicalSpecs).map(([key, val]) => (
                <div key={key} className="flex flex-col border-b border-white/5 pb-2">
                  <span className="text-white/40 text-[10px] uppercase">{key}</span>
                  <span className="text-white font-bold mt-0.5">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="border border-white/10 bg-surface-200/80 p-6 sm:p-8 hud-corner">
            <div className="font-mono text-xs text-white/50 tracking-widest uppercase mb-3">
              SYSTEM TECHNOLOGIES
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-surface-100 border border-white/10 font-mono text-[11px] text-accent"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playSelect}
              data-cursor="OPEN ↗"
              className="w-full p-3 border border-white/15 hover:border-accent bg-surface-100/60 font-mono text-xs text-white hover:text-accent transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-accent" />
                <span>GITHUB / @Devrimano</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Continuous Next Project Navigator */}
      <div className="border-t border-white/10 bg-surface-300 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs text-white/40 uppercase tracking-widest mb-1">
              CONTINUE TOUR // NEXT WORLD
            </div>
            <h3 className="font-mono text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              {nextProject.title}
            </h3>
            <span className="font-mono text-xs text-accent">{nextProject.category}</span>
          </div>

          <Link
            href={`/projects/${nextProject.slug}`}
            onMouseEnter={playHover}
            onClick={playSelect}
            data-cursor="EXPLORE"
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-black font-mono font-bold text-xs tracking-widest uppercase flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
          >
            <span>NEXT WORLD</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
