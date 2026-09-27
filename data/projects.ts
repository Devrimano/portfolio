export interface KeySystem {
  title: string;
  category: string;
  description: string;
  codeSnippet?: string;
  metrics?: string[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  description: string;
  longOverview: string;
  role: string;
  year: string;
  engine: string;
  technologies: string[];
  featured: boolean;
  accentColor: string;
  videoPreview?: string;
  demoUrl?: string;
  githubUrl?: string;
  systems: KeySystem[];
  technicalSpecs: { [key: string]: string };
  myContributions: string[];
  galleryPlaceholders: {
    title: string;
    caption: string;
    type: "render" | "schematic" | "gameplay" | "code";
    tag: string;
  }[];
  nextSlug: string;
}

export const projects: Project[] = [
  {
    slug: "milkman-simulator",
    number: "01",
    title: "Milkman Simulator",
    shortTitle: "MILKMAN",
    category: "FIRST-PERSON SIMULATION",
    tagline: "A realistic first-person physical simulation game where routine deliveries become high-stakes physics puzzles.",
    description: "Built in Unity with custom kinematic character controller, dynamic crate balance physics, interactive neighborhood environment, and reactive NPC routines.",
    longOverview: "Milkman Simulator reimagines mundane neighborhood logistics into an immersive, tactile first-person experience. Designed from the ground up to avoid floaty character physics, every crate carried alters the player's center of mass and momentum. Breakable glass bottles react dynamically to impact thresholds, forcing tactical pathfinding across living suburban districts.",
    role: "Lead Game Developer & Systems Designer",
    year: "2024",
    engine: "Unity 3D · Universal Render Pipeline (URP)",
    technologies: ["Unity", "C#", "Custom Physics", "Cinemachine", "Shader Graph", "LOD Group"],
    featured: true,
    accentColor: "#ccff00",
    demoUrl: "#",
    githubUrl: "https://github.com/Devrimano",
    technicalSpecs: {
      "Target Framerate": "60+ FPS on mid-tier hardware",
      "Physics Engine": "Unity PhysX with custom impulse solver",
      "Lighting": "Real-time URP with volumetric height fog",
      "Input System": "Unity New Input System (Gamepad & KBM)",
    },
    myContributions: [
      "Architected custom first-person kinematic controller with velocity-dependent inertia and head kinematics.",
      "Engineered a dynamic dual-hand physics carry system with breakable joint strain limits for glass cargo.",
      "Programmed living neighborhood state machine featuring day-routine NPC schedules and delivery milestones.",
      "Authored custom surface shaders for liquid sloshing inside transparent glass containers.",
      "Optimized scene streaming via hierarchical occlusion culling and custom distance culling manager."
    ],
    systems: [
      {
        title: "Kinematic Momentum Controller",
        category: "PLAYER MECHANICS",
        description: "Standard character controllers feel disconnected from cargo weight. Implemented a momentum accumulation loop that shifts the center-of-mass vector based on carried cargo mass, applying counter-torques when turning quickly with heavy loads.",
        codeSnippet: `// Momentum inertia compensation
Vector3 cargoOffset = activeCrate.MassCenter - playerRoot.position;
Vector3 targetMomentum = inputDir * baseSpeed - (cargoOffset * inertiaDamping);
currentVelocity = Vector3.Lerp(currentVelocity, targetMomentum, Time.fixedDeltaTime * agility);`,
        metrics: ["Zero collision clipping", "Adaptive ground slope raycasts", "Sub-millisecond frame overhead"]
      },
      {
        title: "Glass Fracture & Impact Thresholds",
        category: "PHYSICS ENGINE",
        description: "Each bottle in the delivery crate possesses independent kinetic stress metrics. Collisions calculate angular velocity delta and contact impulse forces; exceeding elastic thresholds triggers dynamic procedural fracturing.",
        metrics: ["Deterministic impulse calculation", "Object-pooled fracture shards", "Dynamic liquid spill particle bursts"]
      },
      {
        title: "Neighborhood Routine State Machine",
        category: "AI & MISSION ARCHITECTURE",
        description: "Decoupled delivery quests into scriptable event triggers and timeline schedules. Residents operate on autonomous diurnal routines, reacting dynamically to punctual versus tardy or broken deliveries.",
        metrics: ["ScriptableObject event architecture", "Zero garbage generation during patrol ticks"]
      }
    ],
    galleryPlaceholders: [
      {
        title: "Morning Route Dawn Lighting",
        caption: "Volumetric atmospheric fog and dynamic shadow cascades across the suburban delivery street.",
        type: "gameplay",
        tag: "IN-GAME CAPTURE"
      },
      {
        title: "Dual-Hand Cargo Physics Rig",
        caption: "Spring-joint constraint system maintaining stability while permitting physical wobble under inertia.",
        type: "schematic",
        tag: "PHYSICS SCHEMATIC"
      },
      {
        title: "Breakage Particle Simulation",
        caption: "Optimized GPU-instanced shard mesh breakdown with localized decal projection.",
        type: "render",
        tag: "VFX BREAKDOWN"
      },
      {
        title: "Quest Graph Architecture",
        caption: "Node-based mission scheduler tracking timeline windows, customer satisfaction, and delivery grades.",
        type: "code",
        tag: "SYSTEM DIAGRAM"
      }
    ],
    nextSlug: "shooting-simulator"
  },
  {
    slug: "shooting-simulator",
    number: "02",
    title: "Shooting Simulator",
    shortTitle: "SHOOTING SIM",
    category: "HARDWARE & COMPUTER VISION",
    tagline: "A mission-critical marksmanship simulator fusing high-frequency OpenCV laser telemetry with Unity ballistic physics.",
    description: "Engineered a low-latency interactive simulation pipeline integrating camera-based optical tracking, hardware sensor arrays, perspective homography rectification, and real-time ballistic projectile calculations.",
    longOverview: "Shooting Simulator bridges the gap between physical marksmanship hardware and real-time virtual simulation. By coupling infrared camera sensors, sub-pixel laser detection algorithms, and custom serial COM communication, the system detects laser impulses under 8 milliseconds, re-projecting precise hits onto a 3D simulated target environment with variable environmental conditions.",
    role: "Systems & Engine Engineer",
    year: "2024",
    engine: "Unity 3D · C++ Native Plugin · OpenCV",
    technologies: ["Unity", "C++", "OpenCV", "Physical Laser Sensors", "Serial COM", "Computer Vision", "Ballistics"],
    featured: true,
    accentColor: "#00f0ff",
    demoUrl: "#",
    githubUrl: "https://github.com/Devrimano",
    technicalSpecs: {
      "Tracking Latency": "< 8ms optical registration",
      "Computer Vision": "OpenCV C++ native library hooked via P/Invoke",
      "Calibration Method": "4-point perspective homography transform",
      "Sensor Interface": "High-baud serial telemetry over USB/UART",
    },
    myContributions: [
      "Developed high-throughput C++ OpenCV dynamic link library (DLL) for zero-copy camera frame processing.",
      "Implemented adaptive luminance thresholding and sub-pixel ellipse centroid localization for IR laser pulses.",
      "Built a 4-point homography calibration wizard mapping optical camera coordinates to Unity viewport space.",
      "Programmed external ballistic physics module incorporating windage, gravity drop, and air resistance.",
      "Designed real-time diagnostic telemetry HUD displaying frame-by-frame sensor health and millisecond latency."
    ],
    systems: [
      {
        title: "Sub-Pixel Laser Detection Pipeline",
        category: "COMPUTER VISION",
        description: "Standard blob detection is susceptible to ambient light glare. Engineered a multi-stage OpenCV pipeline: optical IR bandpass filtering, temporal frame differencing, and moment-based centroid calculation achieving 0.1-pixel coordinate precision.",
        codeSnippet: `// OpenCV Laser Centroid Detection (C++)
cv::Mat diff;
cv::absdiff(currentFrame, backgroundFrame, diff);
cv::threshold(diff, thresh, 220, 255, cv::THRESH_BINARY);
cv::Moments m = cv::moments(thresh, true);
if (m.m00 > minArea) {
    cv::Point2f centroid(m.m10 / m.m00, m.m01 / m.m00);
    return TransformToScreen(centroid, homographyMatrix);
}`,
        metrics: ["< 4ms OpenCV processing time", "Sub-pixel centroid accuracy", "Resilient to ambient lighting shifts"]
      },
      {
        title: "Hardware Serial Telemetry Bridge",
        category: "HARDWARE INTERACTION",
        description: "Custom asynchronous worker thread listening on high-frequency UART serial ports, unpacking hardware trigger pull states, recoil solenoid triggers, and safety switch telemetry with zero main-thread hitching.",
        metrics: ["Zero frame drops on render thread", "Thread-safe ring buffer queue", "Hardware CRC verification"]
      },
      {
        title: "Real-Time Ballistic Trajectory Solver",
        category: "PHYSICS ENGINE",
        description: "Numerical integration using 4th-order Runge-Kutta (RK4) to compute trajectory curves accounting for bullet drag coefficient, crosswind vectors, humidity, and barrel twist.",
        metrics: ["RK4 differential equation integration", "Instantaneous ray-marching hit detection"]
      }
    ],
    galleryPlaceholders: [
      {
        title: "Optical Calibration Interface",
        caption: "Interactive 4-point projection screen mapping aligning camera warp with the Unity canvas.",
        type: "schematic",
        tag: "CALIBRATION HUD"
      },
      {
        title: "Target Range Environment",
        caption: "Simulated tactical firing range with reactive steel targets and atmospheric distance haze.",
        type: "gameplay",
        tag: "VIRTUAL RANGE"
      },
      {
        title: "OpenCV Mask Telemetry Visualizer",
        caption: "Raw camera feed alongside binary threshold mask and detected centroid vector markers.",
        type: "code",
        tag: "VISION PIPELINE"
      },
      {
        title: "Hardware Integration Enclosure",
        caption: "High-speed camera sensor assembly and microcontroller interface layout diagram.",
        type: "render",
        tag: "SYSTEM ARCHITECTURE"
      }
    ],
    nextSlug: "potato-bird"
  },
  {
    slug: "potato-bird",
    number: "03",
    title: "Potato Bird",
    shortTitle: "POTATO BIRD",
    category: "COMMERCIAL ANDROID GAME",
    tagline: "Fly the Potato Bird through tricky pipes, gather coins, and buy awesome skins! Published on the Google Play Store with a 5.0 ★ rating.",
    description: "Commercial Android arcade title developed in Unity featuring snappy 2D flight physics, procedural obstacles, coin economies, and unlockable custom skins.",
    longOverview: "Potato Bird is a published commercial Android arcade runner available on the Google Play Store. Players take control of the responsive Potato Bird, navigating perilous obstacle pipes, harvesting gold coins, and unlocking vibrant character cosmetics. Engineered in Unity with focus on snappy frame-buffered controls, squash-and-stretch procedural deformation, and instant tactile feedback.",
    role: "Solo Game Designer & Developer",
    year: "2024",
    engine: "Unity 2D · C#",
    technologies: ["Unity", "C#", "Android SDK", "Google Play Console", "2D Physics", "Particle Systems", "Game Feel"],
    featured: true,
    accentColor: "#ffaa00",
    demoUrl: "https://play.google.com/store/apps/details?id=com.manogames.potatobird",
    githubUrl: "https://github.com/Devrimano",
    technicalSpecs: {
      "Store Rating": "5.0 ★ out of 5 stars",
      "Platform": "Android (Google Play Store)",
      "Package ID": "com.manogames.potatobird",
      "Features": "Coin Collection, Skin Shop, Procedural Obstacles",
    },
    myContributions: [
      "Solely architected, developed, and published the complete game onto the Google Play Store.",
      "Engineered responsive impulse flight physics with custom gravity curves and 2-frame input buffering.",
      "Built in-game coin economy and persistent skin customization wardrobe store.",
      "Implemented procedural endless pipe obstacle streamer with logarithmic difficulty ramping.",
      "Programmed tactile juice effects: procedural squash-and-stretch springs, dust particle bursts, and camera shake."
    ],
    systems: [
      {
        title: "Game Feel & Procedural Squash/Stretch",
        category: "GAME FEEL & JUICE",
        description: "Instead of rigid sprite flapping, the character body geometry deforms via mathematical spring dampening. Tapping triggers instantaneous vertical elongation, while falling naturally compresses the silhouette to convey acceleration.",
        codeSnippet: `// Spring-damper deformation
float velocityFactor = Mathf.Clamp(rigidbody2d.velocity.y * 0.05f, -0.3f, 0.4f);
Vector3 targetScale = new Vector3(1f - velocityFactor, 1f + velocityFactor, 1f);
transform.localScale = Vector3.Lerp(transform.localScale, targetScale, Time.deltaTime * springSpeed);`,
        metrics: ["Zero sprite asset bloat", "Adaptive visual weight feedback", "Satisfying tactile response"]
      },
      {
        title: "Input Buffering & Coyote Timing",
        category: "CONTROLLER RESPONSIVENESS",
        description: "Eliminates frustrating missed taps by caching inputs within a 120ms sliding window before valid execution conditions, paired with an emergency apex float grace window.",
        metrics: ["Player satisfaction rating improvement", "Deterministic input queueing"]
      },
      {
        title: "Procedural Obstacle Streamer",
        category: "PROCEDURAL GENERATION",
        description: "Spawns and recycles obstacle columns using an object pool pattern. Gap heights and vertical variation modulate based on current run distance, ensuring an engaging difficulty curve without sudden unfair spikes.",
        metrics: ["Zero heap memory allocation during gameplay", "Seamless continuous pooling"]
      }
    ],
    galleryPlaceholders: [
      {
        title: "High-Score Arcade Run",
        caption: "Colorful, vibrant visual presentation featuring responsive particle trails and dynamic backgrounds.",
        type: "gameplay",
        tag: "ARCADE ACTION"
      },
      {
        title: "Juice & Deformation Breakdown",
        caption: "Visual curve showing how velocity affects body squash, tilt angle, and eye focus.",
        type: "schematic",
        tag: "GAME FEEL"
      },
      {
        title: "Object Pool Lifecycle",
        caption: "Memory diagram depicting column recycling queue preventing garbage collector stutter.",
        type: "code",
        tag: "OPTIMIZATION"
      }
    ],
    nextSlug: "java-backend"
  },
  {
    slug: "java-backend",
    number: "04",
    title: "Java Backend & Systems",
    shortTitle: "JAVA ENGINE",
    category: "SYSTEMS & BACKEND ARCHITECTURE",
    tagline: "High-concurrency data persistence engine and socket networking architecture built with Java, JDBC, and PostgreSQL.",
    description: "Designed a resilient backend architecture handling transactional game telemetry, multi-threaded request processing, thread-safe memory caches, and optimized relational schemas.",
    longOverview: "While gameplay happens on the client, competitive games live and die by their backend consistency. This project focuses on high-throughput backend infrastructure: a multi-threaded Java server interfacing directly with PostgreSQL through optimized JDBC connection pooling, custom binary socket serialization, and ACID-compliant transactional consistency for player progress and item economies.",
    role: "Backend Architect & Database Engineer",
    year: "2023",
    engine: "Java Virtual Machine (JVM)",
    technologies: ["Java", "JDBC", "PostgreSQL", "Multi-Threading", "TCP Sockets", "HikariCP", "SQL Optimization"],
    featured: false,
    accentColor: "#ff385c",
    demoUrl: "#",
    githubUrl: "https://github.com/Devrimano",
    technicalSpecs: {
      "Concurrency Model": "Virtual thread / ThreadPoolExecutor architecture",
      "Database Driver": "Direct raw JDBC with prepared statement caching",
      "Throughput": "Thousands of concurrent database operations/sec",
      "Persistence": "PostgreSQL with indexed composite B-trees",
    },
    myContributions: [
      "Designed normalized relational database schema with foreign key constraints, B-tree indexes, and triggers.",
      "Implemented thread-safe connection pooling manager minimizing connection acquisition latency.",
      "Built custom binary serialization protocol for packet exchange over raw TCP sockets.",
      "Architected deadlock-free transactional payment and inventory transfer routines with repeatable read isolation.",
      "Benchmarked query execution plans using EXPLAIN ANALYZE, eliminating expensive sequential table scans."
    ],
    systems: [
      {
        title: "Thread-Safe Connection Pool & JDBC Layer",
        category: "CONCURRENCY & DATA ACCESS",
        description: "Bypassed heavy ORMs in favor of direct JDBC with custom pooling to squeeze maximum performance. Prepared statements are cached per connection thread, preventing SQL injection and maximizing query plan reuse.",
        codeSnippet: `// Atomic transactional inventory transfer
connection.setAutoCommit(false);
try (var deductStmt = connection.prepareStatement("UPDATE wallets SET balance = balance - ? WHERE user_id = ? AND balance >= ?");
     var creditStmt = connection.prepareStatement("UPDATE wallets SET balance = balance + ? WHERE user_id = ?")) {
    deductStmt.setBigDecimal(1, amount);
    deductStmt.setLong(2, senderId);
    deductStmt.setBigDecimal(3, amount);
    int affected = deductStmt.executeUpdate();
    if (affected == 0) throw new InsufficientFundsException();
    
    creditStmt.setBigDecimal(1, amount);
    creditStmt.setLong(2, receiverId);
    creditStmt.executeUpdate();
    connection.commit();
}`,
        metrics: ["Zero deadlock rate", "Sub-2ms execution time per atomic transfer", "100% ACID compliance"]
      },
      {
        title: "Raw TCP Socket Frame Protocol",
        category: "NETWORK INFRASTRUCTURE",
        description: "Implemented a custom lightweight binary frame header protocol (Magic bytes, Payload Length, Opcode, CRC32) with a non-blocking NIO selector loop, dramatically reducing packet overhead compared to HTTP/JSON.",
        metrics: ["70% reduction in packet payload size", "Non-blocking event loop"]
      },
      {
        title: "Database Indexing & Query Optimization",
        category: "DATABASE ARCHITECTURE",
        description: "Analyzed query hot spots with EXPLAIN ANALYZE. Replaced sequential table scans with composite B-Tree indexes on frequent query paths (user_id + created_at) and partitioned high-volume game telemetry tables.",
        metrics: ["94% reduction in query latency on large datasets", "Zero lock contention on writes"]
      }
    ],
    galleryPlaceholders: [
      {
        title: "Database Entity-Relationship Schema",
        caption: "Normalized relational schema diagram detailing player wallets, inventories, and match history tables.",
        type: "schematic",
        tag: "ER DIAGRAM"
      },
      {
        title: "Throughput & Latency Profiling",
        caption: "Load test benchmark graph showing stable sub-5ms response under concurrent worker thread surges.",
        type: "render",
        tag: "PERFORMANCE METRIC"
      },
      {
        title: "Binary Protocol Packet Framing",
        caption: "Bit-level layout specification for low-overhead game server synchronization.",
        type: "code",
        tag: "PACKET PROTOCOL"
      }
    ],
    nextSlug: "milkman-simulator"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface IndieRelease {
  title: string;
  role: string;
  studio: string;
  platform: string;
  url: string;
  tag: string;
  description: string;
}

export const indieReleases: IndieRelease[] = [
  {
    title: "Potato Bird",
    role: "Solo Developer",
    studio: "Mano Games",
    platform: "Google Play Store",
    url: "https://play.google.com/store/apps/details?id=com.manogames.potatobird",
    tag: "MOBILE ARCADE",
    description: "Published Android arcade runner built in Unity with responsive 2D physics, spring deformation, and input buffering."
  },
  {
    title: "Haunted Step",
    role: "Team Lead",
    studio: "DarkNight Studio",
    platform: "Itch.io",
    url: "https://darknightstudio.itch.io/haunted-step",
    tag: "ATMOSPHERIC HORROR",
    description: "Led development and creative direction for indie horror experience featuring immersive audio-visual tension."
  },
  {
    title: "Aurora of Helios",
    role: "Technical Direction",
    studio: "DarkNight Studio",
    platform: "Itch.io",
    url: "https://darknightstudio.itch.io/aurora-of-helios",
    tag: "SCI-FI ADVENTURE",
    description: "Atmospheric narrative title featuring stylized lighting, custom shaders, and interactive puzzle mechanics."
  },
  {
    title: "The Blood of Legend",
    role: "Lead Developer",
    studio: "DarkNight Studio",
    platform: "Itch.io",
    url: "https://darknightstudio.itch.io/the-blood-of-legend",
    tag: "ACTION / INDIE",
    description: "Dynamic action title exploring combat timing, enemy AI state machines, and stylized particle feedback."
  }
];

export interface ExperienceEntry {
  company: string;
  subdivision?: string;
  role: string;
  location: string;
  period: string;
  status: "ACTIVE" | "COMPLETED";
  highlights: string[];
}

export const careerTimeline: ExperienceEntry[] = [
  {
    company: "Azersilah",
    subdivision: "AzSimX",
    role: "Software Developer",
    location: "Baku, Azerbaijan",
    period: "Feb 2026 – Present",
    status: "ACTIVE",
    highlights: [
      "Develop military simulations in Unity with advanced physics modeling.",
      "Collaborate with hardware teams to integrate controllers, physical sensors, and Hardware-in-the-Loop (HiL).",
      "Contributed to successful prototype rollout used by agency for internal training.",
      "Engineered sensor & controller integration, HiL architecture, and custom I/O communication protocols.",
      "Monitored and optimized simulation performance, identifying memory leaks and ensuring stable 60+ FPS in complex 3D environments.",
      "Conducted rigorous scenario-based testing to validate real-world fidelity and mathematical accuracy of physics models."
    ]
  },
  {
    company: "Azersilah",
    subdivision: "AzSimX",
    role: "Software Developer Intern",
    location: "Baku, Azerbaijan",
    period: "Aug 2026 – Nov 2026",
    status: "COMPLETED",
    highlights: [
      "Developed military simulation components in Unity with advanced physics modeling.",
      "Collaborated with hardware engineering teams to integrate custom tactical controllers and optical sensors."
    ]
  },
  {
    company: "DarkNight Studio",
    subdivision: "Indie Studio",
    role: "Team Lead",
    location: "Baku, Azerbaijan",
    period: "Dec 2024 – July 2025",
    status: "COMPLETED",
    highlights: [
      "Led cross-functional team across leadership, project management, and production pipelines.",
      "Delivered published indie titles including Haunted Step, Aurora of Helios, and The Blood of Legend.",
      "Spearheaded technical & creative direction, architecture decisions, and business impact strategy."
    ]
  }
];

export interface AwardEntry {
  title: string;
  event: string;
  year: string;
  placement: string;
  badge: string;
}

export const awardsList: AwardEntry[] = [
  {
    title: "Gamesummit 2025",
    event: "GameSummit Competition",
    year: "2025",
    placement: "4th Place among 18 Teams",
    badge: "🏆 4TH PLACE"
  },
  {
    title: "Turkic Gamejam 2025",
    event: "Regional Game Development Hackathon",
    year: "2025",
    placement: "Active Participant",
    badge: "🎮 FINALIST"
  },
  {
    title: "Gamepons Gamejam 2025",
    event: "Indie Game Development Jam",
    year: "2025",
    placement: "Active Participant",
    badge: "⚡ PARTICIPANT"
  }
];

export const educationInfo = {
  institution: "Azerbaijan State Oil and Industry University (ASOIU)",
  degree: "Bachelor in Computer Engineering",
  location: "Baku, Azerbaijan",
  graduation: "Expected May 2027",
  status: "ENROLLED"
};

export const candidateDetails = {
  name: "Islam Valizada",
  title: "Game Developer · Computer Engineer",
  email: "islam.velizade1995@gmail.com",
  whatsapp: "@IslamValizada",
  location: "Baku, Azerbaijan AZ 1005",
  languages: [
    { name: "Azerbaijani", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Turkish", level: "Native" }
  ],
  cvPath: "/resume.pdf"
};

