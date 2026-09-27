"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDownRight, Compass, Cpu, Layers, Play, Terminal, Download } from "lucide-react";
import { playHover, playSelect, playAffirmative } from "@/lib/sound";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [fps, setFps] = useState(60);

  // FPS calculation and mouse telemetry tracking
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const updateStats = (now: number) => {
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(updateStats);
    };

    animId = requestAnimationFrame(updateStats);

    const handleMouseMove = (e: MouseEvent) => {
      const normX = ((e.clientX / window.innerWidth) * 2 - 1) * 180;
      const normY = (-(e.clientY / window.innerHeight) * 2 + 1) * 90;
      setCoords({
        x: Math.round(normX * 10) / 10,
        y: Math.round(normY * 10) / 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Interactive 3D Wireframe Terrain & Particle Grid Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let h = (canvas.height = canvas.parentElement?.clientHeight || 500);

    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    let t = 0;
    const cols = 22;
    const rows = 16;
    const spacing = 28;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, w, h);

      // Camera center
      const cx = w * 0.5;
      const cy = h * 0.5 + 40;

      // Draw perspective wireframe wave grid (feels like a terrain mesh being computed in real-time)
      ctx.strokeStyle = "rgba(204, 255, 0, 0.15)";
      ctx.lineWidth = 1;

      const points: { x: number; y: number; z: number; px: number; py: number }[][] = [];

      for (let r = 0; r < rows; r++) {
        points[r] = [];
        for (let c = 0; c < cols; c++) {
          const x = (c - cols / 2) * spacing;
          const z = (r + 1) * spacing * 1.2;
          // Dynamic wave + mouse interaction
          const distToCenter = Math.hypot(x, r * spacing - 100);
          const wave = Math.sin(distToCenter * 0.04 - t * 1.5) * 24;
          const mouseDisplace = Math.sin(c * 0.5 + mouseX * 2) * Math.cos(r * 0.5 + mouseY * 2) * 15;
          const y = wave + mouseDisplace;

          // 3D perspective projection
          const fov = 320;
          const scale = fov / (fov + z);
          const px = cx + (x + mouseX * 40) * scale;
          const py = cy + (y + mouseY * 30 + (r * 18)) * scale;

          points[r][c] = { x, y, z, px, py };
        }
      }

      // Draw horizontal connecting lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const pt = points[r][c];
          if (c === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = `rgba(204, 255, 0, ${0.04 + (r / rows) * 0.18})`;
        ctx.stroke();
      }

      // Draw vertical connecting lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const pt = points[r][c];
          if (r === 0) ctx.moveTo(pt.px, pt.py);
          else ctx.lineTo(pt.px, pt.py);
        }
        ctx.strokeStyle = `rgba(255, 255, 255, 0.06)`;
        ctx.stroke();
      }

      // Highlight focal vertices
      for (let r = 0; r < rows; r += 3) {
        for (let c = 0; c < cols; c += 3) {
          const pt = points[r][c];
          ctx.fillStyle = "rgba(204, 255, 0, 0.7)";
          ctx.fillRect(pt.px - 1.5, pt.py - 1.5, 3, 3);
        }
      }

      // Draw central HUD reticle
      ctx.strokeStyle = "rgba(204, 255, 0, 0.4)";
      ctx.beginPath();
      ctx.arc(cx, cy - 20, 24, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cx - 32, cy - 20);
      ctx.lineTo(cx + 32, cy - 20);
      ctx.moveTo(cx, cy - 52);
      ctx.lineTo(cx, cy + 12);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      w = canvas.width = canvas.parentElement?.clientWidth || 600;
      h = canvas.height = canvas.parentElement?.clientHeight || 500;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 px-4 md:px-8 border-b border-white/10 overflow-hidden">
      {/* HUD Telemetry Top Strip */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-white/40 pb-6 mb-8 border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-accent font-bold">SEC // 00_HERO</span>
          <span className="text-white/20">|</span>
          <span className="hidden sm:inline">COORDS: X={coords.x.toFixed(1)} Y={coords.y.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
            <span className="text-white/70">FPS: {fps}</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="text-white/60">ENGINE: UNITY 3D · C++</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Cinematic Typography */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-100 border border-white/10 font-mono text-xs text-white/80 mb-6 hud-corner">
            <span className="w-2 h-2 bg-accent rotate-45" />
            <span className="tracking-widest">GAME DEVELOPER · COMPUTER ENGINEER</span>
          </div>

          {/* Main Giant Name */}
          <h1 className="font-mono text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6">
            ISLAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
              VALIZADA
            </span>
          </h1>

          {/* Core Philosophy Tagline */}
          <div className="border-l-2 border-accent pl-4 mb-8">
            <p className="font-mono text-base sm:text-xl font-bold tracking-tight text-white uppercase">
              BUILDING WORLDS. BUILDING SYSTEMS.
            </p>
            <p className="text-sm sm:text-base text-white/50 mt-1 max-w-lg font-sans">
              Specialized in realistic physics simulation, native C++ computer vision systems, gameplay mechanics, and resilient backend architecture.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <Link
              href="#work"
              onMouseEnter={playHover}
              onClick={playSelect}
              data-cursor="PLAY"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-black font-mono font-bold text-xs tracking-widest uppercase flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.55)]"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>

            <Link
              href="#systems"
              onMouseEnter={playHover}
              onClick={playSelect}
              data-cursor="INSPECT"
              className="px-6 py-4 border border-white/15 hover:border-accent/50 bg-surface-200/50 hover:bg-surface-100 font-mono text-xs text-white tracking-widest uppercase transition-all flex items-center gap-2"
            >
              <Cpu className="w-4 h-4 text-accent" />
              <span>VIEW SYSTEMS</span>
            </Link>

            <a
              href="/resume.pdf"
              download="Islam_Valizada_CV.pdf"
              onMouseEnter={playHover}
              onClick={playAffirmative}
              data-cursor="DOWNLOAD"
              className="px-5 py-4 border border-white/10 hover:border-accent bg-surface-100/60 hover:bg-accent/10 font-mono text-xs text-white/80 hover:text-accent tracking-widest uppercase transition-all flex items-center gap-2"
              title="Download Official Curriculum Vitae"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>CV (PDF)</span>
            </a>
          </div>

          {/* Live Mini Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/10 w-full max-w-md font-mono text-xs">
            <div>
              <div className="text-accent text-lg font-bold">04+</div>
              <div className="text-white/40 text-[10px] tracking-wider mt-0.5">WORLDS ARCHITECTED</div>
            </div>
            <div>
              <div className="text-white text-lg font-bold">&lt;8ms</div>
              <div className="text-white/40 text-[10px] tracking-wider mt-0.5">VISION LATENCY</div>
            </div>
            <div>
              <div className="text-accent text-lg font-bold">100%</div>
              <div className="text-white/40 text-[10px] tracking-wider mt-0.5">TACTILE GAMEPLAY</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Wireframe Scene */}
        <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] border border-white/10 bg-surface-200/60 p-4 hud-corner overflow-hidden flex flex-col justify-between">
          {/* Top HUD Frame Details */}
          <div className="flex items-center justify-between font-mono text-[10px] text-white/50 border-b border-white/10 pb-2 z-10">
            <span className="flex items-center gap-1.5 text-accent">
              <Compass className="w-3.5 h-3.5 animate-spin" />
              TERRAIN_MESH_RENDERER
            </span>
            <span>SH_MODE: WIREFRAME</span>
          </div>

          {/* Interactive Canvas */}
          <div className="relative w-full h-full flex items-center justify-center">
            <canvas ref={canvasRef} className="w-full h-full block" />
            
            {/* Interactive hint overlay */}
            <div className="absolute bottom-2 right-2 font-mono text-[9px] text-white/30 tracking-widest pointer-events-none">
              [MOVE CURSOR TO MANIPULATE GEOMETRY]
            </div>
          </div>

          {/* Bottom HUD Telemetry Strip */}
          <div className="flex items-center justify-between font-mono text-[10px] text-white/40 border-t border-white/10 pt-2 z-10">
            <span>BUFFERS: DOUBLE_VBO</span>
            <span className="text-accent">STATE: REACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
