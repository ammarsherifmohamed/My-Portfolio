import { SOCIALS } from '../data'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 5vw',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1.5rem',
          marginBottom: '.5rem',
          background: 'linear-gradient(135deg,var(--accent),var(--accent3))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Ammar Sherif
      </div>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: '1.5rem' }}>
        Frontend Developer · Egypt
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--muted)', fontSize: '.9rem', transition: 'color .2s' }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent2)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
          >
            {s.name}
          </a>
        ))}
      </div>
      <p style={{ color: 'var(--border)', fontSize: '.82rem' }}>
        © {new Date().getFullYear()} Ammar Sherif. All rights reserved.
      </p>
    </footer>
  )
}
