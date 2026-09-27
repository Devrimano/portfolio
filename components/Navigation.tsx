"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX, Menu, X, Terminal, Crosshair, Github, Linkedin } from "lucide-react";
import { playHover, playSelect, isAudioEnabled, setAudioEnabled } from "@/lib/sound";

interface NavigationProps {
  onTriggerEasterEgg?: () => void;
}

export function Navigation({ onTriggerEasterEgg }: NavigationProps) {
  const pathname = usePathname();
  const [soundOn, setSoundOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  useEffect(() => {
    setSoundOn(isAudioEnabled());

    const handleSoundToggle = (e: Event) => {
      const customEvent = e as CustomEvent<{ enabled: boolean }>;
      if (customEvent.detail) {
        setSoundOn(customEvent.detail.enabled);
      }
    };

    window.addEventListener("sound-toggle", handleSoundToggle);
    return () => window.removeEventListener("sound-toggle", handleSoundToggle);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setAudioEnabled(next);
  };

  const handleLogoClick = () => {
    playSelect();
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      setLogoClicks(0);
      if (onTriggerEasterEgg) {
        onTriggerEasterEgg();
      } else {
        window.dispatchEvent(new CustomEvent("open-easter-egg"));
      }
    }
  };

  const navLinks = [
    { label: "WORK", href: pathname === "/" ? "#work" : "/#work", number: "01" },
    { label: "ABOUT", href: pathname === "/" ? "#about" : "/#about", number: "02" },
    { label: "SYSTEMS", href: pathname === "/" ? "#systems" : "/#systems", number: "03" },
    { label: "CONTACT", href: pathname === "/" ? "#contact" : "/#contact", number: "04" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between border border-white/10 bg-surface-200/80 backdrop-blur-md px-4 md:px-6 py-2.5 rounded-sm shadow-2xl">
        {/* Brand & System Status */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogoClick}
            onMouseEnter={playHover}
            className="group flex items-center gap-2 text-left focus:outline-none"
            data-cursor="INSPECT"
            title="Click 5 times for Developer Console"
          >
            <div className="w-2.5 h-2.5 rounded-none bg-accent rotate-45 group-hover:rotate-90 transition-transform duration-300 shadow-[0_0_10px_#ccff00]" />
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold tracking-wider text-white group-hover:text-accent transition-colors">
                ISLAM VALIZADA
              </span>
              <span className="font-mono text-[9px] text-white/40 tracking-widest hidden sm:inline">
                DEV_BUILD // GAME_DEV
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/10 font-mono text-[10px] text-white/50">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70">SYS_ONLINE</span>
            <span className="text-white/30">|</span>
            <span className="text-accent/80">LATENCY 4ms</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onMouseEnter={playHover}
              onClick={playSelect}
              data-cursor="ENTER"
              className="relative px-3.5 py-1.5 text-white/70 hover:text-white transition-colors group flex items-center gap-1.5 rounded-none hover:bg-white/5"
            >
              <span className="text-[10px] text-white/30 group-hover:text-accent transition-colors">
                {item.number}
              </span>
              <span className="tracking-wider">{item.label}</span>
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Utility Controls: Sound Toggle, Social Links & Quick Actions */}
        <div className="flex items-center gap-2">
          {/* GitHub Profile */}
          <a
            href="https://github.com/Devrimano"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playSelect}
            data-cursor="OPEN ↗"
            className="p-1.5 border border-white/10 hover:border-accent text-white/70 hover:text-white transition-colors hidden sm:flex items-center"
            title="GitHub: Devrimano"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/islam-valizada-010606351/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playSelect}
            data-cursor="OPEN ↗"
            className="p-1.5 border border-white/10 hover:border-accent text-white/70 hover:text-white transition-colors hidden sm:flex items-center"
            title="LinkedIn: Islam Valizada"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={playHover}
            data-cursor="TOGGLE"
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono border border-white/10 hover:border-accent/40 bg-surface-100/60 text-white/80 hover:text-white transition-all rounded-none"
            title={soundOn ? "Mute Game Audio" : "Unmute Game Audio"}
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-accent animate-pulse" />
                <span className="text-accent hidden sm:inline">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/40" />
                <span className="text-white/40 hidden sm:inline">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Secret / Dev Console Trigger */}
          <button
            onClick={() => {
              playSelect();
              if (onTriggerEasterEgg) onTriggerEasterEgg();
              else window.dispatchEvent(new CustomEvent("open-easter-egg"));
            }}
            onMouseEnter={playHover}
            data-cursor="TERMINAL"
            className="p-1.5 border border-white/10 hover:border-white/30 text-white/60 hover:text-accent transition-colors"
            title="Open Developer Console (Hotkey: IDDQD)"
          >
            <Terminal className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playSelect();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-1.5 text-white/80 hover:text-white border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Game Menu Style) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 border border-white/15 bg-surface-300/95 backdrop-blur-xl p-5 shadow-2xl hud-corner">
          <div className="text-[10px] font-mono text-accent mb-4 tracking-widest border-b border-white/10 pb-2 flex justify-between">
            <span>MAIN_MENU.SYS</span>
            <span>SELECT DESTINATION</span>
          </div>
          <div className="flex flex-col gap-2 font-mono">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => {
                  playSelect();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-between p-3 border border-white/5 hover:border-accent/40 bg-surface-100/40 text-sm tracking-wider text-white hover:text-accent transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="text-accent text-xs">&gt;</span>
                  {item.label}
                </span>
                <span className="text-xs text-white/30">{item.number}</span>
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-2 pt-3 mt-1 border-t border-white/10">
              <a
                href="https://github.com/Devrimano"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playSelect}
                className="flex items-center justify-center gap-2 p-2.5 border border-white/10 hover:border-accent bg-surface-100/60 text-xs text-white/80 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
              <a
                href="https://www.linkedin.com/in/islam-valizada-010606351/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playSelect}
                className="flex items-center justify-center gap-2 p-2.5 border border-white/10 hover:border-accent bg-surface-100/60 text-xs text-white/80 hover:text-white"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
