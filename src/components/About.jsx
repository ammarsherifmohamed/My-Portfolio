import { useState, useRef, useEffect } from "react";
import { CERTS } from "../data";
import SectionTitle from "./SectionTitle";
import useInView from "../hooks/useInView";

function GlowOrb({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none",
        opacity: 0.25,
        ...style,
      }}
    />
  );
}

function SkillBar({ name, level, icon, delay }) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `all .6s ease ${delay}ms`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: ".95rem",
          }}
        >
          <span>{icon}</span>
          {name}
        </span>
        <span
          style={{
            color: "var(--accent2)",
            fontWeight: 500,
            fontSize: ".9rem",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "6px",
          background: "var(--surface)",
          borderRadius: "99px",
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: visible ? `${level}%` : "0%",
            background: "linear-gradient(90deg,var(--accent),var(--accent3))",
            borderRadius: "99px",
            transition: `width 1.2s ease ${delay + 200}ms`,
            boxShadow: "0 0 12px var(--accent)",
          }}
        />
      </div>
    </div>
  );
}

const SKILLS = [
  {
    label: "npm",
    icon: "N",
    color: "#f97316",
    xPct: 75,
    yPct: 10,
    size: "lg",
    speed: 1.2,
    phase: 1.1,
  },
  {
    label: "Vite",
    icon: "V",
    color: "#4ade80",
    xPct: 10,
    yPct: 60,
    size: "lg",
    speed: 1.2,
    phase: 1.1,
  },
  {
    label: "Figma",
    icon: "F",
    color: "#f472b6",
    xPct: 50,
    yPct: 15,
    size: "xl",
    speed: 0.6,
    phase: 0.8,
  },
  {
    label: "CSS",
    icon: "3",
    color: "#60a5fa",
    xPct: 76,
    yPct: 17,
    size: "xl",
    speed: 1.0,
    phase: 1.5,
  },
  {
    label: "Next.js",
    icon: "N",
    color: "#e2e8f0",
    xPct: 52,
    yPct: 23,
    size: "lg",
    speed: 0.9,
    phase: 0.3,
  },
  {
    label: "Node.js",
    icon: "N",
    color: "#4ade80",
    xPct: 50,
    yPct: 9,
    size: "lg",
    speed: 1.1,
    phase: 3.5,
  },
  {
    label: "Git / GitHub",
    icon: "G",
    color: "#e2e8f0",
    xPct: 22,
    yPct: 10,
    size: "lg",
    speed: 0.8,
    phase: 0.9,
  },
  {
    label: "Scripting",
    icon: "S",
    color: "#4ade80",
    xPct: 30,
    yPct: 30,
    size: "md",
    speed: 1.3,
    phase: 2.2,
  },
  {
    label: "TypeScript",
    icon: "TS",
    color: "#3b82f6",
    xPct: 80,
    yPct: 30,
    size: "xl",
    speed: 0.6,
    phase: 1.8,
  },
  {
    label: "React",
    icon: "Re",
    color: "#38bdf8",
    xPct: 50,
    yPct: 30,
    size: "lg",
    speed: 1.0,
    phase: 0.6,
  },
  {
    label: "Relational",
    icon: "R",
    color: "#f97316",
    xPct: 31,
    yPct: 20,
    size: "sm",
    speed: 0.9,
    phase: 2.7,
  },
  {
    label: "Tailwind",
    icon: "TW",
    color: "#38bdf8",
    xPct: 10,
    yPct: 20,
    size: "sm",
    speed: 1.2,
    phase: 4.2,
  },
  {
    label: "Python",
    icon: "Py",
    color: "#facc15",
    xPct: 68,
    yPct: 20,
    size: "md",
    speed: 0.8,
    phase: 1.4,
  },
  {
    label: "HTML",
    icon: "H5",
    color: "#f97316",
    xPct: 10,
    yPct: 30,
    size: "md",
    speed: 1.2,
    phase: 0.7,
  },
  {
    label: "JavaScript",
    icon: "JS",
    color: "#facc15",
    xPct: 45,
    yPct: 40,
    size: "xl",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Excel",
    icon: "EX",
    color: "#41C271",
    xPct: 70,
    yPct: 40,
    size: "xl",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Bootstarp",
    icon: "B",
    color: "#B585F6",
    xPct: 15,
    yPct: 40,
    size: "md",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Version Control System",
    icon: "VCS",
    color: "#d0d0d0",
    xPct: 30,
    yPct: 50,
    size: "md",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Claude Code",
    icon: "C",
    color: "#D97757",
    xPct: 50,
    yPct: 60,
    size: "md",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Object Oriented Programming",
    icon: "OOP",
    color: "#e0e0e0",
    xPct: 75,
    yPct: 50,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Database",
    icon: "D",
    color: "#b0b0b0",
    xPct: 25,
    yPct: 60,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Xammp",
    icon: "X",
    color: "#d0d0d0",
    xPct: 90,
    yPct: 40,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "SQL Server",
    icon: "S",
    color: "#c5c5c5",
    xPct: 80,
    yPct: 60,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "MYSQL",
    icon: "S",
    color: "#beb3b8",
    xPct: 55,
    yPct: 70,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Algorithms",
    icon: "A",
    color: "#beb3b8",
    xPct: 30,
    yPct: 70,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Data Structure",
    icon: "DA",
    color: "#beb3b8",
    xPct: 85,
    yPct: 70,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Web Design",
    icon: "W",
    color: "#38bdf8",
    xPct: 85,
    yPct: 80,
    size: "lg",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "UI / UX",
    icon: "W",
    color: "#eebef3",
    xPct: 55,
    yPct: 80,
    size: "xl",
    speed: 0.6,
    phase: 1.6,
  },
  {
    label: "Wordpress",
    icon: "W",
    color: "#38bdf8",
    xPct: 30,
    yPct: 80,
    size: "xl",
    speed: 0.6,
    phase: 1.6,
  },
];

const SIZE_TOKENS = {
  sm: { pill: "px-2 py-1 text-[10px]", icon: "w-4 h-4 text-[8px]" },
  md: { pill: "px-3 py-1 text-xs", icon: "w-5 h-5 text-[10px]" },
  lg: { pill: "px-3 py-1.5 text-sm", icon: "w-6 h-6 text-[11px]" },
  xl: { pill: "px-4 py-2 text-base", icon: "w-7 h-7 text-[12px]" },
};

function Pill({ skill, nodeRef }) {
  const s = SIZE_TOKENS[skill.size] ?? SIZE_TOKENS.md;

  return (
    <div
      ref={nodeRef}
      className={`absolute flex items-center gap-1 ${s.pill} rounded-full font-bold whitespace-nowrap`}
      style={{
        left: `${skill.xPct}%`,
        top: `${skill.yPct}%`,
        transform: "translate(-50%,-50%)",
        color: skill.color,
        // background: "rgba(7,14,30,0.85)",
        border: `1px solid ${skill.color}44`,
      }}
    >
      <span className={`flex items-center justify-center ${s.icon}`}>
        {skill.icon}
      </span>
      {skill.label}
    </div>
  );
}

export default function About() {
  const [ref, visible] = useInView();
  const [certIdx, setCertIdx] = useState(0);
  const rootRef = useRef(null);
  const pillRefs = useRef([]);
  const rafRef = useRef(null);
  const t0 = useRef(null);
  const [ready, setReady] = useState(false);

  // Animation fo icon
  useEffect(() => {
    function tick(ts) {
      if (!t0.current) t0.current = ts;
      const t = (ts - t0.current) / 1000;

      const container = rootRef.current;
      if (!container) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const W = container.offsetWidth;
      const H = container.offsetHeight;

      SKILLS.forEach((sk, i) => {
        const el = pillRefs.current[i];
        if (!el) return;

        const dy = Math.sin(t * sk.speed + sk.phase) * 5;
        const dx = Math.cos(t * sk.speed) * 3;

        el.style.left = `calc(${sk.xPct}% + ${dx}px)`;
        el.style.top = `calc(${sk.yPct}% + ${dy}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {/* Main Content */}
      <section
        id="about"
        style={{
          padding: "100px 5vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GlowOrb
          style={{
            width: "400px",
            height: "400px",
            background: "var(--accent3)",
            top: "50%",
            right: "-150px",
            transform: "translateY(-50%)",
          }}
        />

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <SectionTitle>About Me</SectionTitle>

          <section className="flex lg:flex-row flex-col items-center ">
            {/* Left Section */}
            <div
              className="about-grid"
              style={{
                display: "flex",
                gap: "5rem",
                alignItems: "center",
              }}
            >
              <div
                ref={ref}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateX(-30px)",
                  transition: "all .8s ease",
                }}
              >
                <div style={{ position: "relative", marginBottom: "2.5rem" }}>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "30px",
                      background:
                        "linear-gradient(135deg,var(--accent),var(--accent3))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "5rem",
                      margin: "0 auto 2rem",
                      animation: "float 5s ease-in-out infinite",
                      boxShadow: "0 20px 60px rgba(124,106,247,.3)",
                    }}
                  >
                    <img src="src\components\about.png" alt="about img" />
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.9,
                    marginBottom: "1.5rem",
                    fontSize: "1.05rem",
                  }}
                >
                  I'm{" "}
                  <strong style={{ color: "var(--text)" }}>Ammar Sherif</strong>
                  , a passionate Frontend Developer from Egypt 🇪🇬 with 1+ years
                  of experience building modern, responsive web applications.
                </p>
                <p
                  style={{
                    color: "var(--muted)",
                    lineHeight: 1.9,
                    marginBottom: "2rem",
                    fontSize: "1.05rem",
                  }}
                >
                  I specialize in turning complex ideas into clean, performant
                  user interfaces using React, Tailwind CSS, and modern
                  JavaScript. Available on{" "}
                  <a
                    href="https://www.freelancer.com/u/ammars591"
                    style={{ color: "var(--accent2)" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Freelancer
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://mostaql.com/u/Ammar_Sherif_AS"
                    style={{ color: "var(--accent2)" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mostaql
                  </a>{" "}
                  for projects.
                </p>

                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {[
                    "Problem Solver",
                    "Clean Code Advocate",
                    "Detail Oriented",
                    "Fast Learner",
                  ].map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "99px",
                        fontSize: ".85rem",
                        background: "rgba(124,106,247,.12)",
                        border: "1px solid rgba(124,106,247,.25)",
                        color: "var(--accent2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right-side skills */}
            <div className="w-full flex justify-center lg:justify-start">
              <div
                ref={rootRef}
                className="
            relative
            w-full
            h-[320px] sm:h-[420px] md:h-[500px] lg:h-[580px]
            max-w-[640px]
            overflow-hidden
            rounded-xl
          "
                style={{ opacity: ready ? 1 : 0, transition: "opacity 0.4s" }}
              >
                {SKILLS.map((sk, i) => (
                  <Pill
                    key={sk.label}
                    skill={sk}
                    nodeRef={(el) => (pillRefs.current[i] = el)}
                  />
                ))}
              </div>
            </div>
          </section>

          <div style={{ marginTop: "5rem" }}>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.4rem",
                marginBottom: "2rem",
                textAlign: "center",
                color: "var(--accent2)",
              }}
            >
              Certifications
            </h3>

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  transition: "transform .5s cubic-bezier(.77,0,.175,1)",
                  transform: `translateX(-${certIdx * 100}%)`,
                }}
              >
                {CERTS.map((c, i) => (
                  <div key={i} style={{ minWidth: "100%", padding: "0 1rem" }}>
                    <div
                      className="cert-flex"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        overflow: "hidden",
                        maxWidth: "600px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "2rem",
                        padding: "2rem",
                      }}
                    >
                      <img
                        src={c.img}
                        alt={c.title}
                        style={{
                          width: "120px",
                          height: "90px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          flexShrink: 0,
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      <div>
                        <div
                          style={{
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            marginBottom: ".4rem",
                          }}
                        >
                          {c.title}
                        </div>
                        <div
                          style={{ color: "var(--muted)", fontSize: ".9rem" }}
                        >
                          {c.issuer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "1.5rem",
                }}
              >
                {CERTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCertIdx(i)}
                    style={{
                      width: i === certIdx ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "99px",
                      border: "none",
                      background:
                        i === certIdx ? "var(--accent)" : "var(--border)",
                      transition: "all .3s",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            .cert-flex { flex-direction: column !important; text-align: center !important; }
          }
        `}</style>
      </section>
    </>
  );
}
