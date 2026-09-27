import React from "react";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Systems } from "@/components/Systems";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About — Islam Valizada",
  description: "Who is behind the games? Developer dossier, systems philosophy, and technical profile of Islam Valizada.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-12">
      <Navigation />
      <About />
      <Systems />
      <Footer />
    </main>
  );
}
