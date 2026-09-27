"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { IntroScreen } from "@/components/IntroScreen";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { About } from "@/components/About";
import { Systems } from "@/components/Systems";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EasterEggModal } from "@/components/EasterEggModal";

export default function Home() {
  const [introDismissed, setIntroDismissed] = useState(false);
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  useEffect(() => {
    // Check if intro was already seen in this session
    const seen = sessionStorage.getItem("islam_intro_seen");
    if (seen === "true") {
      setIntroDismissed(true);
    }

    const handleOpenEasterEgg = () => setEasterEggOpen(true);
    window.addEventListener("open-easter-egg", handleOpenEasterEgg);

    return () => window.removeEventListener("open-easter-egg", handleOpenEasterEgg);
  }, []);

  const handleIntroComplete = () => {
    setIntroDismissed(true);
    sessionStorage.setItem("islam_intro_seen", "true");
  };

  return (
    <main className="relative min-h-screen">
      {/* Skippable Cinematic Title Screen */}
      {!introDismissed && <IntroScreen onComplete={handleIntroComplete} />}

      {/* Main Game Dev Experience */}
      <Navigation onTriggerEasterEgg={() => setEasterEggOpen(true)} />
      <Hero />
      <ProjectShowcase />
      <About />
      <Systems />
      <Contact />
      <Footer />

      {/* Secret Dev Cheat Console */}
      <EasterEggModal isOpen={easterEggOpen} onClose={() => setEasterEggOpen(false)} />
    </main>
  );
}
