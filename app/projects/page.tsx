import React from "react";
import { Navigation } from "@/components/Navigation";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Selected Worlds — Islam Valizada",
  description: "Explore games, simulation engines, computer vision pipelines, and backend architectures built by Islam Valizada.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-12">
      <Navigation />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}
