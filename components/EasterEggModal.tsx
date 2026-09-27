"use client";

import React, { useState, useEffect } from "react";
import { Terminal, X, Sparkles, Check, Eye, Zap, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { playEasterEgg, playHover, playSelect } from "@/lib/sound";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EasterEggModal({ isOpen, onClose }: EasterEggModalProps) {
  const [wireframeActive, setWireframeActive] = useState(false);
  const [matrixActive, setMatrixActive] = useState(false);
  const [inputBuffer, setInputBuffer] = useState("");

  // Listen for "iddqd" keystrokes anywhere on the page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in form inputs
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      const char = e.key.toLowerCase();
      setInputBuffer((prev) => {
        const next = (prev + char).slice(-5);
        if (next === "iddqd") {
          window.dispatchEvent(new CustomEvent("open-easter-egg"));
          playEasterEgg();
          return "";
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleWireframe = () => {
    playSelect();
    const next = !wireframeActive;
    setWireframeActive(next);
    document.body.classList.toggle("wireframe-mode", next);
  };

  const toggleMatrix = () => {
    playSelect();
    const next = !matrixActive;
    setMatrixActive(next);
    document.body.classList.toggle("matrix-mode", next);
  };

  const triggerConfetti = () => {
    playEasterEgg();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ccff00", "#00f0ff", "#ffffff", "#ffaa00"],
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative max-w-lg w-full border border-accent bg-surface-300 p-6 sm:p-8 hud-corner shadow-[0_0_50px_rgba(204,255,0,0.25)] font-mono text-xs">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-accent/40 pb-3 mb-6">
          <div className="flex items-center gap-2 text-accent font-bold">
            <Terminal className="w-4 h-4 animate-pulse" />
            <span>DEV_CHEAT_CONSOLE // IDDQD UNLOCKED</span>
          </div>

          <button
            onClick={() => {
              playSelect();
              onClose();
            }}
            onMouseEnter={playHover}
            className="text-white/50 hover:text-white border border-white/10 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Developer Secret Message */}
        <div className="p-4 border border-white/10 bg-black/60 mb-6 space-y-2">
          <div className="text-accent text-[11px] font-bold">
            &gt; WELCOME TO THE HIDDEN ENGINE CONSOLE
          </div>
          <p className="text-white/70 font-sans text-xs leading-relaxed">
            &ldquo;You found the developer cheat sequence! As game developers, we love hiding secrets behind the curtains. Feel free to manipulate runtime shaders, toggle debug wireframes, or test rendering pipelines below.&rdquo;
          </p>
          <div className="text-[10px] text-white/40 pt-1">
            — Islam Valizada (Lead Developer)
          </div>
        </div>

        {/* Interactive Dev Cheats */}
        <div className="space-y-3 mb-6">
          <div className="text-[10px] text-white/40 uppercase tracking-widest">
            RUNTIME MODIFIERS:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={toggleWireframe}
              onMouseEnter={playHover}
              className={`p-3 border text-left flex items-center justify-between transition-all ${
                wireframeActive
                  ? "border-accent bg-accent/20 text-accent font-bold"
                  : "border-white/15 bg-surface-100/60 text-white/80 hover:border-white/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>WIREFRAME RENDER</span>
              </div>
              <span className="text-[10px]">{wireframeActive ? "[ON]" : "[OFF]"}</span>
            </button>

            <button
              onClick={toggleMatrix}
              onMouseEnter={playHover}
              className={`p-3 border text-left flex items-center justify-between transition-all ${
                matrixActive
                  ? "border-emerald-400 bg-emerald-400/20 text-emerald-400 font-bold"
                  : "border-white/15 bg-surface-100/60 text-white/80 hover:border-white/40"
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>CYBER MATRIX TINT</span>
              </div>
              <span className="text-[10px]">{matrixActive ? "[ON]" : "[OFF]"}</span>
            </button>
          </div>

          <button
            onClick={triggerConfetti}
            onMouseEnter={playHover}
            className="w-full p-3 border border-accent/40 bg-accent/10 hover:bg-accent/20 text-accent font-bold text-center flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>TRIGGER PARTICLE SURGE (CONFETTI)</span>
          </button>
        </div>

        {/* Bottom Exit */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[10px] text-white/40">
          <span>HOTKEY: IDDQD • LOGO CLICKS: 5x</span>
          <button
            onClick={onClose}
            className="text-accent hover:underline uppercase"
          >
            CLOSE CONSOLE [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
