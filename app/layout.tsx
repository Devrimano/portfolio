import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { Background } from "@/components/Background";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090c",
};

export const metadata: Metadata = {
  title: "Islam Valizada — Game Developer & Computer Engineer",
  description: "Interactive portfolio of Islam Valizada. High-precision physics simulation, native C++ computer vision, 2D game juice, and high-concurrency systems.",
  keywords: ["Game Developer", "Unity", "C#", "C++", "OpenCV", "Simulation", "Computer Vision", "Islam Valizada"],
  authors: [{ name: "Islam Valizada" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground min-h-screen relative antialiased selection:bg-accent selection:text-black">
        {/* Interactive Custom Cursor */}
        <CustomCursor />

        {/* Ambient Procedural Background */}
        <Background />

        {/* Main Content Root */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
