import React from "react";
import { Navigation } from "@/components/Navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Contact & Transmission — Islam Valizada",
  description: "Establish contact with Islam Valizada for game development projects, simulation engineering, and collaborative roles.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-12">
      <Navigation />
      <Contact />
      <Footer />
    </main>
  );
}
