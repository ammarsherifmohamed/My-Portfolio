import { useState } from "react";
import { SKILLS, CERTS } from "../data";
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

export default function About() {
  const [ref, visible] = useInView();
  const [certIdx, setCertIdx] = useState(0);

  return (
    <section
      id="about"
      style={{ padding: "100px 5vw", position: "relative", overflow: "hidden" }}
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

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
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
              I'm <strong style={{ color: "var(--text)" }}>Ammar Sherif</strong>
              , a passionate Frontend Developer from Egypt 🇪🇬 with 1+ years of
              experience building modern, responsive web applications.
            </p>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: "2rem",
                fontSize: "1.05rem",
              }}
            >
              I specialize in turning complex ideas into clean, performant user
              interfaces using React, Tailwind CSS, and modern JavaScript.
              Available on{" "}
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

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "1.3rem",
                marginBottom: "0.5rem",
                color: "var(--accent2)",
              }}
            >
              Technical Skills
            </h3>
            {SKILLS.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 60} />
            ))}
          </div>
        </div>

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
                      <div style={{ color: "var(--muted)", fontSize: ".9rem" }}>
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
  );
}
