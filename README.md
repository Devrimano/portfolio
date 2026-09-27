# Islam Valizada — Interactive Game Developer Portfolio

A creative, interactive digital experience and portfolio designed and engineered for **Islam Valizada**, Game Developer & Computer Engineer.

> **"Building Worlds. Building Systems."**

---

## 🎮 Experience Overview

This is an interactive digital experience built around game development thinking, tactile mechanics, low-latency sensory feedback, and technical depth.

- **Title Screen / Game Launcher**: Immersive boot sequence with skippable loading bar, runtime shader initialization, and direct entry controls.
- **Cinematic Hero**: Large typography, real-time 3D wireframe terrain mesh canvas that dynamically deforms with mouse movements, coordinates, and live 60 FPS counter.
- **Custom Hardware Reticle Cursor**: Context-aware custom cursor with spring physics displaying actions (`EXPLORE`, `PLAY ▶`, `OPEN ↗`, `INSPECT`). Automatically disabled on touch/mobile devices.
- **Synthesized UI Audio Engine**: Zero-asset procedural Web Audio API sound synthesizer producing tactile UI clicks, affirmative chimes, and section whooshes (muted by default with `[AUDIO: ON/OFF]` toggle in the navigation bar).
- **Cinematic Worlds Showcase**: Viewport game launcher featuring interactive micro-simulations for:
  1. **Milkman Simulator**: Realistic first-person simulation, physics carry mechanics, bottle fracture limits.
  2. **Shooting Simulator**: Hardware marksmanship simulation, OpenCV sub-pixel laser tracking, C++ native plugin, RK4 ballistic trajectory solver.
  3. **Potato Bird**: Juice-packed 2D arcade physics, procedural spring squash-and-stretch, input buffering, coyote time.
  4. **Java Backend & Systems**: High-concurrency engine, thread pools, raw JDBC connection pooling, PostgreSQL ACID persistence, binary TCP socket framing.
- **Interactive Systems Deck**: Modular subsystem inspect panel with real-time telemetry metrics and pipeline status readouts.
- **Developer Dossier ("Who is behind the games?")**: Interactive dossier with tabs for identity matrix, game development philosophy manifesto, and engineering benchmarks.
- **Encrypted Transmission Channel**: Direct email copy action with instant clipboard confirmation and simulated transmission console.
- **Easter Eggs & Dev Console**:
  - Type **`iddqd`** anywhere or click the top-left HUD logo **5 times** to open the **Dev Cheat Console**.
  - Toggle live wireframe rendering (`document.body.classList.toggle('wireframe-mode')`), cyber matrix mode, and fire confetti particle surges!

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Audio**: Web Audio API (Zero external audio asset latency)
- **Effects**: Canvas 2D Perspective Projection & Particle Telemetry, Canvas Confetti

---

## 🚀 Running the Project Locally

### 1. Open Terminal in the project directory:
```bash
cd "C:\Users\Asus\.gemini\antigravity\scratch\portfolio"
```

### 2. Install dependencies (if needed):
```bash
npm install
```

### 3. Launch the development server:
```bash
npm run dev
```

### 4. Open in browser:
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── projects/
│   │   ├── page.tsx
│   │   ├── milkman-simulator/page.tsx
│   │   ├── shooting-simulator/page.tsx
│   │   ├── potato-bird/page.tsx
│   │   └── java-backend/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── CustomCursor.tsx
│   ├── IntroScreen.tsx
│   ├── Hero.tsx
│   ├── ProjectShowcase.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectDetailView.tsx
│   ├── About.tsx
│   ├── Systems.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Background.tsx
│   └── EasterEggModal.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
└── lib/
    ├── utils.ts
    └── sound.ts
```
