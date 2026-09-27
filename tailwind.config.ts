import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090c",
        foreground: "#f4f4f6",
        surface: {
          50: "#181a24",
          100: "#13141c",
          200: "#0e0f16",
          300: "#0a0b0f",
          400: "#06070a",
        },
        accent: {
          DEFAULT: "#ccff00", // High-voltage cyber lime
          hover: "#e2ff3d",
          muted: "rgba(204, 255, 0, 0.2)",
          glow: "rgba(204, 255, 0, 0.45)",
        },
        hud: {
          cyan: "#00f0ff",
          amber: "#ffaa00",
          red: "#ff385c",
          gray: "rgba(255, 255, 255, 0.4)",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      animation: {
        "scanline": "scanline 8s linear infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "hud-blink": "hudBlink 1.2s steps(2, start) infinite",
        "radar-sweep": "radarSweep 4s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", filter: "drop-shadow(0 0 10px rgba(204, 255, 0, 0.2))" },
          "50%": { opacity: "0.8", filter: "drop-shadow(0 0 25px rgba(204, 255, 0, 0.6))" },
        },
        hudBlink: {
          "to": { visibility: "hidden" },
        },
        radarSweep: {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
