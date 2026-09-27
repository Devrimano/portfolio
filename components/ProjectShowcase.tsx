"use client";

import React, { useState } from "react";
import { projects, indieReleases } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Gamepad2, Layers, Sparkles, Filter, ExternalLink, Trophy } from "lucide-react";
import { playHover, playSelect } from "@/lib/sound";

export function ProjectShowcase() {
  const [filter, setFilter] = useState<"ALL" | "SIMULATION" | "VISION" | "ARCADE" | "SYSTEMS">("ALL");

  const categories = [
    { id: "ALL", label: "ALL WORLDS", count: projects.length },
    { id: "SIMULATION", label: "SIMULATION", count: 1 },
    { id: "VISION", label: "HARDWARE / VISION", count: 1 },
    { id: "ARCADE", label: "2D ARCADE", count: 1 },
    { id: "SYSTEMS", label: "CODE / SYSTEMS", count: 1 },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "ALL") return true;
    if (filter === "SIMULATION") return project.category.includes("SIMULATION");
    if (filter === "VISION") return project.category.includes("HARDWARE") || project.category.includes("VISION");
    if (filter === "ARCADE") return project.category.includes("ARCADE");
    if (filter === "SYSTEMS") return project.category.includes("SYSTEMS");
    return true;
  });

  return (
    <section id="work" className="py-24 px-4 md:px-8 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <Gamepad2 className="w-4 h-4" />
              <span>SEC // 01 — SELECTED WORLDS</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              FEATURED GAMES &amp; SYSTEMS
            </h2>
            <p className="text-white/60 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Immersive first-person simulation, hardware-coupled computer vision, responsive 2D arcade physics, and high-concurrency backend architecture.
            </p>
          </div>

          {/* Category Filter Pills (Game Menu Style) */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playSelect();
                  setFilter(cat.id as typeof filter);
                }}
                onMouseEnter={playHover}
                data-cursor="SELECT"
                className={`px-3 py-2 border transition-all flex items-center gap-2 ${
                  filter === cat.id
                    ? "bg-accent text-black border-accent font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                    : "bg-surface-200/80 text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] ${filter === cat.id ? "text-black/70" : "text-white/40"}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Viewport Showcase List */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Published Indie Releases & Jam Titles */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-1">
                PUBLISHED TITLES &amp; STORE RELEASES
              </div>
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-white uppercase">
                COMMERCIAL &amp; INDIE DEPLOYMENTS
              </h3>
            </div>
            <div className="font-mono text-xs text-white/40">
              PLATFORMS: GOOGLE PLAY STORE • ITCH.IO
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {indieReleases.map((game) => (
              <a
                key={game.title}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playSelect}
                data-cursor="PLAY ▶"
                className="p-5 border border-white/10 hover:border-accent bg-surface-200/60 hover:bg-surface-100 transition-all hud-corner flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-2">
                    <span className="text-accent font-bold">{game.tag}</span>
                    <span>{game.platform}</span>
                  </div>
                  <h4 className="font-mono text-base font-bold text-white group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{game.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-accent" />
                  </h4>
                  <div className="font-mono text-[11px] text-white/50 mt-1 mb-2">
                    {game.role} • {game.studio}
                  </div>
                  <p className="text-xs text-white/60 font-sans leading-relaxed">
                    {game.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 font-mono text-[10px] text-accent flex items-center justify-between">
                  <span>LAUNCH GAME</span>
                  <span>&gt;&gt;</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 border border-white/10 bg-surface-200/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/60">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span>COMMERCIAL &amp; MILITARY SIMULATION ARCHITECTURE • PROFILED FOR 60+ FPS</span>
          </div>
          <span className="text-white/40">
            TOTAL TITLES &amp; MODULES: 8 ACTIVE
          </span>
        </div>
      </div>
    </section>
  );
}
