"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Shield, Cpu, Github, Linkedin, Download } from "lucide-react";
import { playHover, playSelect } from "@/lib/sound";

export function Footer() {
  const scrollToTop = () => {
    playSelect();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-surface-300 py-12 px-4 md:px-8 text-white/50 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Game Credits */}
        <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider">
            <span className="w-2 h-2 bg-accent rotate-45" />
            <span>ISLAM VALIZADA</span>
            <span className="text-white/30">|</span>
            <span className="text-accent text-[10px]">GAME DEVELOPER &amp; COMPUTER ENGINEER</span>
          </div>
          <div className="text-[10px] text-white/40">
            &ldquo;BUILDING WORLDS. BUILDING SYSTEMS.&rdquo; • © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Center: System Telemetry & Direct Socials */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-white/50">
          <div className="flex items-center gap-2 border border-white/5 bg-surface-100/40 px-3 py-1.5">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEMS NOMINAL
            </span>
            <span className="text-white/20">|</span>
            <span>BUILD: v2026.09</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Devrimano"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playSelect}
              data-cursor="OPEN ↗"
              className="flex items-center gap-1.5 px-2.5 py-1 border border-white/10 hover:border-accent text-white/70 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-accent" />
              <span>@Devrimano</span>
            </a>

            <a
              href="https://www.linkedin.com/in/islam-valizada-010606351/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHover}
              onClick={playSelect}
              data-cursor="OPEN ↗"
              className="flex items-center gap-1.5 px-2.5 py-1 border border-white/10 hover:border-accent text-white/70 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-accent" />
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume.pdf"
              download="Islam_Valizada_CV.pdf"
              onMouseEnter={playHover}
              onClick={playSelect}
              data-cursor="DOWNLOAD"
              className="flex items-center gap-1.5 px-2.5 py-1 border border-accent/40 bg-accent/10 hover:bg-accent hover:text-black text-accent transition-colors font-bold"
              title="Download Islam Valizada's CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right: Back to Top & Quick Hotkey Hint */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:inline text-[10px] text-white/30">
            [PRESS ESC OR IDDQD FOR DEV CONSOLE]
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHover}
            data-cursor="TOP"
            className="p-2.5 border border-white/10 hover:border-accent text-white/70 hover:text-white transition-all flex items-center gap-1.5"
            title="Return to Top"
          >
            <ArrowUp className="w-4 h-4 text-accent" />
            <span className="text-[10px] font-bold">TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
