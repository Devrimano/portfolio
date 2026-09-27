"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Eye, Cpu, Crosshair, Sparkles, Terminal, ExternalLink, Star } from "lucide-react";
import { Project } from "@/data/projects";
import { playHover, playSelect } from "@/lib/sound";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [interactiveHitCount, setInteractiveHitCount] = useState(0);

  // Interactive micro-simulation per project
  const renderInteractiveGraphic = () => {
    switch (project.slug) {
      case "milkman-simulator":
        return (
          <div className="relative w-full h-full bg-[#0a0c12] flex items-center justify-center overflow-hidden">
            {/* 3D Room / Street Perspective Lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 300">
                <line x1="0" y1="0" x2="200" y2="150" stroke="#ccff00" strokeWidth="0.8" />
                <line x1="400" y1="0" x2="200" y2="150" stroke="#ccff00" strokeWidth="0.8" />
                <line x1="0" y1="300" x2="200" y2="150" stroke="#ccff00" strokeWidth="0.8" />
                <line x1="400" y1="300" x2="200" y2="150" stroke="#ccff00" strokeWidth="0.8" />
                <rect x="140" y="110" width="120" height="80" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              </svg>
            </div>

            {/* Simulated First-Person Cargo Crate & Bottles */}
            <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-500">
              <div className="relative border border-accent/40 bg-surface-100/80 p-6 rounded-none shadow-[0_0_30px_rgba(204,255,0,0.15)] flex items-center gap-3">
                {[1, 2, 3].map((b) => (
                  <div key={b} className="relative w-8 h-20 border border-white/30 bg-white/5 flex flex-col justify-end p-1">
                    <div className="w-full h-1/2 bg-white/40 rounded-t-sm animate-pulse" />
                    <span className="text-[7px] font-mono text-white/50 text-center">B_{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 font-mono text-[10px] text-accent tracking-widest bg-black/60 px-3 py-1 border border-accent/30">
                PHYSICS_WEIGHT: 14.2 KG // MOMENTUM_LOCK
              </div>
            </div>

            {/* First-person crosshair */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none">
              <div className="w-full h-full border border-accent/60 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-accent rounded-full" />
              </div>
            </div>
          </div>
        );

      case "shooting-simulator":
        return (
          <div
            className="relative w-full h-full bg-[#070b10] flex items-center justify-center overflow-hidden cursor-crosshair"
            onClick={(e) => {
              e.stopPropagation();
              playSelect();
              setInteractiveHitCount((prev) => prev + 1);
            }}
          >
            {/* Tactical Grid & Radar Concentric Circles */}
            <div className="absolute inset-0 opacity-25 pointer-events-none flex items-center justify-center">
              <div className="w-72 h-72 rounded-full border border-cyan-400/30 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-cyan-400/40 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-cyan-400/60" />
                </div>
              </div>
            </div>

            {/* Laser Target Reticle */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-28 h-28 border border-cyan-400/80 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.3)] animate-pulse">
                <Crosshair className="w-12 h-12 text-cyan-400" />
                <div className="absolute -top-6 font-mono text-[9px] text-cyan-300 tracking-widest bg-black/80 px-2 py-0.5 border border-cyan-400/30">
                  OPENCV_CENTROID [0.1px]
                </div>
              </div>

              <div className="mt-4 font-mono text-[10px] text-cyan-400 tracking-widest bg-black/70 px-3 py-1 border border-cyan-500/30">
                REGISTERED HITS: {interactiveHitCount} [CLICK TO TEST HIT]
              </div>
            </div>
          </div>
        );

      case "potato-bird":
        return (
          <div className="relative w-full h-full bg-[#120f09] flex items-center justify-center overflow-hidden">
            {/* Arcade Background Pipes / Hills */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-between items-end px-8 pb-4">
              <div className="w-12 h-36 bg-amber-500/40 border-t-2 border-amber-300" />
              <div className="w-12 h-48 bg-amber-500/40 border-t-2 border-amber-300" />
              <div className="w-12 h-28 bg-amber-500/40 border-t-2 border-amber-300" />
            </div>

            {/* Potato Bird Mascot Animation */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-black/85 border border-amber-400/40 font-mono text-[10px] text-amber-300 mb-3 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                <span className="font-bold">5.0 ★ RATED</span>
                <span className="text-white/30">•</span>
                <span className="text-white/80">GOOGLE PLAY STORE</span>
              </div>

              <div className="relative w-20 h-20 bg-amber-400 border-2 border-white rounded-[45%_55%_48%_52%] flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300 animate-float">
                {/* Eyes */}
                <div className="absolute top-5 right-4 w-3.5 h-3.5 bg-black rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full translate-x-0.5 -translate-y-0.5" />
                </div>
                {/* Beak */}
                <div className="absolute top-8 right-1 w-3 h-3 bg-red-500 rotate-45 rounded-sm" />
                {/* Tiny wing */}
                <div className="absolute left-3 top-8 w-4 h-3 bg-amber-600 rounded-full" />
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="font-mono text-[10px] text-amber-300 tracking-widest bg-black/80 px-2.5 py-0.5 border border-amber-500/30">
                  COINS &amp; SKINS
                </span>
                <span className="font-mono text-[10px] text-white/70 bg-black/80 px-2.5 py-0.5 border border-white/20">
                  ANDROID 120 FPS
                </span>
              </div>
            </div>
          </div>
        );

      case "java-backend":
        return (
          <div className="relative w-full h-full bg-[#0a0709] flex items-center justify-center overflow-hidden p-6 font-mono">
            {/* Matrix Code Stream & SQL Schema */}
            <div className="w-full max-w-sm border border-red-500/30 bg-black/80 p-4 text-[11px] leading-relaxed shadow-[0_0_30px_rgba(255,56,92,0.15)]">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[9px] text-red-400">
                <span>POSTGRESQL // POOL_ACTIVE</span>
                <span>ACID: 100%</span>
              </div>
              <div className="text-white/60">
                <span className="text-red-400 font-bold">&gt; SELECT</span> * <span className="text-red-400">FROM</span> transactions
              </div>
              <div className="text-white/40 mt-1 pl-2">
                WHERE status = &apos;COMMITTED&apos;
              </div>
              <div className="text-accent/90 mt-2 text-[10px]">
                [OK] 14,280 OPS/SEC • LATENCY: 1.2ms
              </div>
              <div className="mt-3 h-1 bg-white/10 overflow-hidden">
                <div className="h-full bg-red-500 w-3/4 animate-pulse" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => {
        setIsHovered(true);
        playHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border border-white/10 hover:border-accent/60 bg-surface-200/80 transition-all duration-300 hud-corner flex flex-col xl:flex-row overflow-hidden"
    >
      {/* Visual Simulation Canvas / Viewport Area */}
      <div className="relative w-full xl:w-7/12 h-[320px] sm:h-[400px] xl:h-[460px] overflow-hidden border-b xl:border-b-0 xl:border-r border-white/10">
        {renderInteractiveGraphic()}

        {/* Cinematic Viewport HUD Header */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white/60 pointer-events-none z-20">
          <div className="bg-black/80 backdrop-blur-sm px-2.5 py-1 border border-white/10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span className="text-white font-bold">{project.category}</span>
          </div>

          <div className="bg-black/80 backdrop-blur-sm px-2.5 py-1 border border-white/10 font-mono text-white/50">
            {project.year} • {project.engine.split("·")[0]}
          </div>
        </div>

        {/* Hover Action Overlay */}
        <Link
          href={`/projects/${project.slug}`}
          onClick={playSelect}
          data-cursor="EXPLORE"
          className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px] transition-all duration-300"
        >
          <div className="px-6 py-3 bg-accent text-black font-mono font-bold text-xs tracking-widest flex items-center gap-2 shadow-[0_0_30px_#ccff00]">
            <Play className="w-4 h-4 fill-black" />
            <span>ENTER WORLD</span>
          </div>
        </Link>
      </div>

      {/* Project Metadata & Systems Column */}
      <div className="w-full xl:w-5/12 p-6 sm:p-8 flex flex-col justify-between z-10 bg-gradient-to-b from-surface-200 to-surface-300">
        <div>
          {/* Top Index & Tag */}
          <div className="flex items-center justify-between font-mono text-xs text-white/40 mb-4 border-b border-white/10 pb-3">
            <span className="text-accent font-bold text-base">{project.number}</span>
            <span className="tracking-widest uppercase">{project.role}</span>
          </div>

          {/* Project Title */}
          <h3 className="font-mono text-2xl sm:text-4xl font-black text-white group-hover:text-accent transition-colors uppercase tracking-tight mb-3">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-white/70 font-sans leading-relaxed mb-6">
            {project.tagline}
          </p>

          {/* Key System Highlights */}
          <div className="space-y-2.5 mb-8">
            <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
              ARCHITECTED SYSTEMS:
            </div>
            {project.systems.slice(0, 2).map((sys) => (
              <div
                key={sys.title}
                className="p-2.5 border border-white/5 bg-surface-100/50 hover:border-white/15 transition-colors font-mono text-xs flex items-start gap-2.5"
              >
                <Cpu className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-[11px]">{sys.title}</div>
                  <div className="text-white/50 text-[10px] line-clamp-1 mt-0.5">{sys.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-surface-100 border border-white/10 font-mono text-[10px] text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href={`/projects/${project.slug}`}
                onMouseEnter={playHover}
                onClick={playSelect}
                data-cursor="EXPLORE"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-widest text-accent hover:text-white transition-colors group-hover:translate-x-0.5 duration-200"
              >
                <span>EXPLORE CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {project.demoUrl && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playSelect}
                  data-cursor="PLAY ▶"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400 hover:text-black text-amber-300 font-mono text-[10px] font-bold tracking-wider transition-all"
                >
                  <span>PLAY STORE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <span className="font-mono text-[10px] text-white/30">
              SYS_ID: 0{index + 1}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
