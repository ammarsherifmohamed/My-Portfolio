import useTyping from "../hooks/useTyping";

function Cursor() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "2px",
        height: "1em",
        background: "var(--accent)",
        marginLeft: "2px",
        verticalAlign: "middle",
        animation: "blink 1s step-end infinite",
      }}
    />
  );
}

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

export default function Hero() {
  const words = [
    "Frontend Developer",
    "UI/UX Enthusiast",
    "React Developer",
    "Tailwind Expert",
    "Freelancer",
  ];
  const typed = useTyping(words);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 5vw",
      }}
    >
      <GlowOrb
        style={{
          width: "500px",
          height: "500px",
          background: "var(--accent)",
          top: "-100px",
          left: "-150px",
        }}
      />
      <GlowOrb
        style={{
          width: "400px",
          height: "400px",
          background: "var(--accent3)",
          bottom: "0",
          right: "-100px",
        }}
      />

      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(124,106,247,.12)",
            border: "1px solid rgba(124,106,247,.3)",
            borderRadius: "99px",
            padding: "6px 18px",
            marginBottom: "2rem",
            fontSize: ".9rem",
            color: "var(--accent2)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              animation: "pulse-dot 2s ease infinite",
            }}
          />
          Available for freelance work
        </div>

        <h1
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            fontFamily: "Syne, sans-serif",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg,var(--accent),var(--accent3))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ammar Sherif
          </span>
        </h1>

        <div
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            color: "var(--muted)",
            marginBottom: "2.5rem",
            minHeight: "2.5rem",
          }}
        >
          <span style={{ color: "var(--accent2)" }}>{typed}</span>
          <Cursor />
        </div>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--muted)",
            maxWidth: "540px",
            margin: "0 auto 3rem",
            lineHeight: 1.8,
          }}
        >
          I craft beautiful, fast, and accessible web experiences that leave a
          lasting impression. From concept to deployment, pixel-perfect every
          time.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: ".9rem 2.2rem",
              borderRadius: "12px",
              fontWeight: 500,
              fontSize: "1rem",
              border: "none",
              background:
                "linear-gradient(135deg,var(--accent),var(--accent3))",
              color: "#fff",
              transition: "transform .2s, box-shadow .2s",
              boxShadow: "0 0 30px rgba(124,106,247,.4)",
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 8px 40px rgba(124,106,247,.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "";
              e.target.style.boxShadow = "0 0 30px rgba(124,106,247,.4)";
            }}
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: ".9rem 2.2rem",
              borderRadius: "12px",
              fontWeight: 500,
              fontSize: "1rem",
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border)",
              transition: "all .2s",
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            Get In Touch
          </button>
        </div>

        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {[
            ["1+", "Years Exp"],
            ["15+", "Projects"],
            ["10+", "Happy Clients"],
          ].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  fontFamily: "Syne, sans-serif",
                  background:
                    "linear-gradient(135deg,var(--accent),var(--accent3))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {n}
              </div>
              <div style={{ fontSize: ".85rem", color: "var(--muted)" }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(to bottom,var(--accent),transparent)",
          }}
        />
        <div
          style={{
            fontSize: ".75rem",
            color: "var(--muted)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          scroll
        </div>
      </div>
    </section>
  );
}
