"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playHover, playSelect, playAffirmative } from "@/lib/sound";
import { Shield, Sparkles, Terminal, ChevronRight } from "lucide-react";

interface IntroScreenProps {
  onComplete: () => void;
}

export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "ready" | "dismissed">("loading");

  useEffect(() => {
    // Quick, punchy initialization simulation (under 1.5 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("ready");
          return 100;
        }
        const delta = Math.floor(Math.random() * 25) + 12;
        return Math.min(prev + delta, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    playAffirmative();
    setPhase("dismissed");
    setTimeout(() => {
      onComplete();
    }, 450);
  };

  const handleSkip = () => {
    playSelect();
    setPhase("dismissed");
    onComplete();
  };

  if (phase === "dismissed") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080b] px-6 text-white overflow-hidden select-none"
      >
        {/* Subtle background grid & scanline texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="absolute inset-0 scanline-overlay opacity-30 pointer-events-none" />

        {/* Ambient glow flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Quick Skip button in top corner */}
        <div className="absolute top-6 right-6">
          <button
            onClick={handleSkip}
            onMouseEnter={playHover}
            data-cursor="SKIP"
            className="font-mono text-xs text-white/40 hover:text-white border border-white/10 hover:border-white/30 px-3 py-1.5 transition-all flex items-center gap-1.5"
          >
            <span>SKIP INTRO</span>
            <span className="text-[10px] text-white/30">[ESC]</span>
          </button>
        </div>

        {/* Main Title Screen Container */}
        <div className="relative max-w-xl w-full text-center flex flex-col items-center z-10">
          {/* Engine Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-surface-100/50 text-[10px] font-mono tracking-widest text-accent mb-8 rounded-none">
            <span className="w-1.5 h-1.5 bg-accent animate-ping" />
            <span>INITIALIZING RUNTIME ENGINE // 60 FPS</span>
          </div>

          {/* Large Title Typography */}
          <h1 className="font-mono text-4xl sm:text-6xl font-black tracking-tight text-white mb-2 uppercase">
            Islam Valizada
          </h1>

          <div className="font-mono text-sm sm:text-base text-white/60 tracking-widest mb-6 uppercase flex items-center justify-center gap-3">
            <span>GAME DEVELOPER</span>
            <span className="text-accent">•</span>
            <span>COMPUTER ENGINEER</span>
          </div>

          <p className="text-sm text-white/50 max-w-md mx-auto mb-10 leading-relaxed font-sans">
            &ldquo;I build games, interactive systems, and software.&rdquo;
          </p>

          {/* Progress / State display */}
          {phase === "loading" ? (
            <div className="w-full max-w-xs flex flex-col items-center gap-2.5">
              <div className="flex justify-between w-full font-mono text-[10px] text-white/40">
                <span>LOADING ASSETS &amp; SHADERS</span>
                <span className="text-accent font-bold">{progress}%</span>
              </div>
              <div className="w-full h-1 bg-surface-100 border border-white/10 overflow-hidden relative">
                <div
                  className="h-full bg-accent transition-all duration-150 ease-out shadow-[0_0_12px_#ccff00]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            >
              <button
                onClick={handleEnter}
                onMouseEnter={playHover}
                data-cursor="ENTER"
                className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent-hover text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.35)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)]"
              >
                <span>ENTER PORTFOLIO</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleSkip}
                onMouseEnter={playHover}
                className="w-full sm:w-auto px-6 py-3.5 border border-white/15 hover:border-white/40 text-white/80 hover:text-white font-mono text-xs tracking-wider transition-colors"
              >
                DIRECT ACCESS
              </button>
            </motion.div>
          )}

          {/* Bottom Telemetry Info */}
          <div className="mt-14 font-mono text-[10px] text-white/30 tracking-widest flex items-center gap-4">
            <span>BUILD: v2026.09</span>
            <span>•</span>
            <span>SYSTEM: NOMINAL</span>
            <span>•</span>
            <span>STANDALONE READY</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
