"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "action">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for cursor follower
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      const clickableTarget = target.closest("a, button, input, textarea, [role='button']") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("action");
      } else if (clickableTarget) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Reticle / Action Ring */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorVariant === "action" ? (cursorText ? 84 : 48) : cursorVariant === "hover" ? 44 : 26,
          height: cursorVariant === "action" ? (cursorText ? 84 : 48) : cursorVariant === "hover" ? 44 : 26,
          borderColor: cursorVariant === "action" ? "#ccff00" : cursorVariant === "hover" ? "#ffffff" : "rgba(255, 255, 255, 0.35)",
          backgroundColor: cursorVariant === "action" ? "rgba(204, 255, 0, 0.15)" : cursorVariant === "hover" ? "rgba(255, 255, 255, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="fixed rounded-full border border-dashed flex items-center justify-center backdrop-blur-[1px]"
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-accent uppercase select-none drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "action" ? 0 : cursorVariant === "hover" ? 1.5 : 1,
          backgroundColor: cursorVariant === "hover" ? "#ccff00" : "#ffffff",
        }}
        transition={{ duration: 0.1 }}
        className="fixed h-1.5 w-1.5 rounded-full pointer-events-none drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
      />
    </div>
  );
}
