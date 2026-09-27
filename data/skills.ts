export interface SkillCategory {
  id: string;
  name: string;
  code: string;
  status: "ONLINE" | "OPTIMIZED" | "ACTIVE";
  description: string;
  primaryTech: string[];
  skills: {
    name: string;
    level: string; // e.g. "95%", "90%"
    tags: string[];
    relatedProjectSlug?: string;
  }[];
  systemMetrics: { label: string; value: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "game-engine",
    name: "GAME ENGINE & SIMULATION",
    code: "SYS_MOD_01",
    status: "ACTIVE",
    description: "Core architecture for 3D/2D games, realistic physics simulation, kinematic player systems, and GPU shader authoring.",
    primaryTech: ["Unity", "C#", "PhysX", "Shader Graph", "Cinemachine"],
    skills: [
      { name: "Unity Engine (URP/HDRP)", level: "95%", tags: ["Core Engine", "Scene Management", "Optimization"], relatedProjectSlug: "milkman-simulator" },
      { name: "C# Scripting & Architecture", level: "95%", tags: ["OOP", "Event Bus", "ScriptableObjects"], relatedProjectSlug: "milkman-simulator" },
      { name: "Kinematic & Rigid Physics", level: "90%", tags: ["PhysX", "Momentum Constraints", "Joints"], relatedProjectSlug: "milkman-simulator" },
      { name: "Shader Graph & Visual FX", level: "85%", tags: ["HLSL", "Custom Post-Processing", "Materials"] },
      { name: "2D Arcade Physics & Game Feel", level: "90%", tags: ["Juice", "Input Buffering", "Particle FX"], relatedProjectSlug: "potato-bird" },
      { name: "Cinemachine & Virtual Cameras", level: "88%", tags: ["Procedural Shake", "Target Framing", "Transitions"] }
    ],
    systemMetrics: [
      { label: "TARGET ENGINE", value: "Unity 3D / 2D" },
      { label: "PHYSICS RATE", value: "Fixed 50-100Hz" },
      { label: "LOD STREAMING", value: "Hierarchical Culling" }
    ]
  },
  {
    id: "systems-vision",
    name: "SYSTEMS & COMPUTER VISION",
    code: "SYS_MOD_02",
    status: "ONLINE",
    description: "Native low-level integration, computer vision pipelines, hardware sensor telemetry, and high-frequency communication protocols.",
    primaryTech: ["C++", "OpenCV", "Hardware Sensors", "Serial COM", "P/Invoke"],
    skills: [
      { name: "C++ Native Development", level: "90%", tags: ["Memory Management", "DLLs", "Interop"], relatedProjectSlug: "shooting-simulator" },
      { name: "OpenCV Image Processing", level: "88%", tags: ["Laser Tracking", "Homography", "Centroids"], relatedProjectSlug: "shooting-simulator" },
      { name: "Hardware & Sensor Telemetry", level: "85%", tags: ["Serial/UART", "Laser Diodes", "Microcontrollers"], relatedProjectSlug: "shooting-simulator" },
      { name: "Ballistic Trajectory Solvers", level: "85%", tags: ["RK4 Integration", "Drag Physics", "Raycasting"], relatedProjectSlug: "shooting-simulator" },
      { name: "Real-time Telemetry Diagnostics", level: "90%", tags: ["Sub-8ms Latency", "Ring Buffers"] }
    ],
    systemMetrics: [
      { label: "DETECTION LATENCY", value: "< 8.0ms" },
      { label: "HOMOGRAPHY WARP", value: "4-Point Matrix" },
      { label: "SUB-PIXEL ACCURACY", value: "0.1px" }
    ]
  },
  {
    id: "backend-db",
    name: "BACKEND & DATA ARCHITECTURE",
    code: "SYS_MOD_03",
    status: "OPTIMIZED",
    description: "High-throughput server infrastructure, concurrent thread pools, transactional database persistence, and binary socket protocols.",
    primaryTech: ["Java", "JDBC", "PostgreSQL", "Multi-Threading", "TCP Sockets"],
    skills: [
      { name: "Java Core & Concurrency", level: "92%", tags: ["Virtual Threads", "ThreadPools", "Atomics"], relatedProjectSlug: "java-backend" },
      { name: "Raw JDBC & Connection Pooling", level: "90%", tags: ["HikariCP", "Prepared Statements", "Low Latency"], relatedProjectSlug: "java-backend" },
      { name: "PostgreSQL Database Design", level: "88%", tags: ["B-Tree Indexes", "ACID Transactions", "Partitioning"], relatedProjectSlug: "java-backend" },
      { name: "Low-Overhead TCP Protocols", level: "85%", tags: ["Binary Framing", "NIO Selectors", "Packet Buffers"], relatedProjectSlug: "java-backend" },
      { name: "Query Plan Optimization", level: "86%", tags: ["EXPLAIN ANALYZE", "Index Tuning"] }
    ],
    systemMetrics: [
      { label: "QUERY LATENCY", value: "Sub-2ms" },
      { label: "ISOLATION LEVEL", value: "Repeatable Read" },
      { label: "CONCURRENCY MODEL", value: "Virtual / Worker Pools" }
    ]
  },
  {
    id: "tools-pipeline",
    name: "PIPELINE & PROFILING",
    code: "SYS_MOD_04",
    status: "ACTIVE",
    description: "Production workflow tools, version control, profiling diagnostics, and performance optimization.",
    primaryTech: ["Git", "GitHub", "GitLab", "Jira", "Trello", "Unity Profiler"],
    skills: [
      { name: "Git, GitHub & GitLab", level: "95%", tags: ["Branching", "CI/CD", "Submodules", "Version Control"] },
      { name: "Unity Profiler & Memory Debugger", level: "92%", tags: ["Memory Leaks", "Frame Timing", "FPS Optimization"] },
      { name: "Jira & Trello Production Tracking", level: "90%", tags: ["Agile", "Scrum", "Sprint Planning", "Milestones"] },
      { name: "Blender 3D Asset Pipeline", level: "78%", tags: ["Hard Surface", "Rigging", "UV Mapping"] },
      { name: "Cross-Platform Build Optimization", level: "88%", tags: ["Android", "PC Standalone", "IL2CPP"] }
    ],
    systemMetrics: [
      { label: "TARGET PLATFORM", value: "PC & Android" },
      { label: "FRAME CONSISTENCY", value: "60+ FPS Complex 3D" },
      { label: "MEMORY LEAK RATE", value: "0.00% Zero-Leak" }
    ]
  },
  {
    id: "arch-leadership",
    name: "ENGINEERING & TEAM LEADERSHIP",
    code: "SYS_MOD_05",
    status: "ACTIVE",
    description: "Computer engineering principles, object-oriented design, hardware-in-the-loop protocols, and agile studio team leadership.",
    primaryTech: ["OOP", "SOLID", "Design Patterns", "HiL", "Team Lead"],
    skills: [
      { name: "SOLID Principles & OOP", level: "95%", tags: ["Architecture", "Modularity", "Extensibility", "Clean Code"] },
      { name: "Design Patterns in Games", level: "92%", tags: ["State Machine", "Object Pooling", "Observer", "Command"] },
      { name: "Hardware-in-the-Loop (HiL)", level: "90%", tags: ["Sensor Telemetry", "I/O Protocols", "Real-Time Bridge"] },
      { name: "Studio Team Leadership", level: "90%", tags: ["Team Lead", "Creative Direction", "Production Management"] },
      { name: "Cross-Functional Collaboration", level: "94%", tags: ["Hardware Engineers", "Artists", "Scenario Testing"] }
    ],
    systemMetrics: [
      { label: "DEGREE PROGRAM", value: "B.S. Comp Engineering" },
      { label: "CODE STANDARD", value: "100% SOLID & Clean" },
      { label: "STUDIO TRACK", value: "DarkNight Lead" }
    ]
  }
];
