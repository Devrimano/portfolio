"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Terminal, ArrowUpRight, CheckCircle2, Activity, Layers } from "lucide-react";
import { skillCategories, SkillCategory } from "@/data/skills";
import { playHover, playSelect } from "@/lib/sound";

export function Systems() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(skillCategories[0]);

  return (
    <section id="systems" className="py-24 px-4 md:px-8 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-widest uppercase mb-3">
              <Cpu className="w-4 h-4" />
              <span>SEC // 03 — ARCHITECTURAL SUBSYSTEMS</span>
            </div>
            <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
              SYSTEMS &amp; TECH STACK
            </h2>
            <p className="text-white/60 font-sans text-sm sm:text-base mt-2 max-w-xl">
              Engineered pipelines, low-level integration, physics solvers, and transactional data architectures.
            </p>
          </div>

          <div className="font-mono text-xs text-white/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL SUBSYSTEMS OPERATIONAL</span>
          </div>
        </div>

        {/* Interactive Systems Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Subsystem Category Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {skillCategories.map((category) => {
              const isSelected = activeCategory.id === category.id;
              return (
                <div
                  key={category.id}
                  onClick={() => {
                    playSelect();
                    setActiveCategory(category);
                  }}
                  onMouseEnter={playHover}
                  data-cursor="SELECT"
                  className={`p-5 border transition-all cursor-pointer hud-corner ${
                    isSelected
                      ? "border-accent bg-surface-100/90 shadow-[0_0_20px_rgba(204,255,0,0.15)]"
                      : "border-white/10 bg-surface-200/50 hover:border-white/30 hover:bg-surface-100/40"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className="text-white/40">{category.code}</span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold ${
                        isSelected ? "bg-accent text-black" : "text-white/50 border border-white/10"
                      }`}
                    >
                      {category.status}
                    </span>
                  </div>

                  <h3
                    className={`font-mono text-base font-bold tracking-tight mb-2 uppercase transition-colors ${
                      isSelected ? "text-accent" : "text-white"
                    }`}
                  >
                    {category.name}
                  </h3>

                  <p className="text-xs text-white/60 font-sans line-clamp-2 mb-4">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {category.primaryTech.map((tech) => (
                      <span
                        key={tech}
                        className={`font-mono text-[10px] px-2 py-0.5 border ${
                          isSelected
                            ? "border-accent/40 text-accent/90 bg-accent/5"
                            : "border-white/10 text-white/50"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Subsystem Live Inspector Panel */}
          <div className="lg:col-span-7 border border-white/15 bg-surface-200/80 p-6 sm:p-8 hud-corner flex flex-col justify-between min-h-[480px]">
            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2 text-accent">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span className="font-bold">INSPECTOR // {activeCategory.code}</span>
                </div>
                <span className="text-white/40 tracking-widest">{activeCategory.name}</span>
              </div>

              {/* Live Metric Tiles */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {activeCategory.systemMetrics.map((m) => (
                  <div key={m.label} className="p-3 bg-surface-100/70 border border-white/5 font-mono">
                    <div className="text-white/40 text-[9px] tracking-wider uppercase">{m.label}</div>
                    <div className="text-accent text-xs font-bold mt-1 truncate">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Detailed Skills in this subsystem */}
              <div className="space-y-4 mb-8">
                <div className="font-mono text-xs text-white/50 tracking-widest uppercase">
                  ACTIVE PIPELINE MODULES:
                </div>
                {activeCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 bg-surface-100/50 border border-white/5 hover:border-white/15 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-accent" />
                      <div>
                        <span className="font-mono text-xs font-bold text-white block">
                          {skill.name}
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {skill.tags.map((tag) => (
                            <span key={tag} className="font-mono text-[9px] text-white/40">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {skill.relatedProjectSlug && (
                      <Link
                        href={`/projects/${skill.relatedProjectSlug}`}
                        onMouseEnter={playHover}
                        onClick={playSelect}
                        data-cursor="VIEW"
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-accent/80 hover:text-accent border border-accent/20 hover:border-accent/60 px-2 py-1 transition-all self-start sm:self-center"
                      >
                        <span>DEPLOYED IN PROJECT</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Readout */}
            <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-white/40 flex items-center justify-between">
              <span>MODULE STATUS: VERIFIED 100% OPERATIONAL</span>
              <span className="text-accent">READY FOR NEW ARCHITECTURES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
