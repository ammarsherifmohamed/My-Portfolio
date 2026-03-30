import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data'

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 5vw',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all .3s',
      }}
    >
      <div
        onClick={() => scrollTo('home')}
        style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: '1.4rem',
          cursor: 'pointer',
          background: 'linear-gradient(135deg,var(--accent),var(--accent3))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        AS.
      </div>

      <div className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l.toLowerCase())}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--muted)',
              fontSize: '.95rem',
              transition: 'color .2s',
              fontFamily: 'DM Sans, sans-serif',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
          >
            {l}
          </button>
        ))}
        <button
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '6px 10px',
            color: 'var(--text)',
            fontSize: '1rem',
            transition: 'all .2s',
            cursor: 'pointer',
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="mobile-nav" style={{ display: 'none', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '6px 10px',
            color: 'var(--text)',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
        >
          {open ? (
            <span style={{ fontSize: '1.5rem' }}>✕</span>
          ) : (
            [0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: 'var(--text)',
                  borderRadius: '2px',
                }}
              />
            ))
          )}
        </button>
      </div>

      {open && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'var(--bg2)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            zIndex: 999,
            animation: 'fadeUp .3s ease',
          }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text)',
                fontSize: '1.1rem',
                textAlign: 'left',
                padding: '0',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } .mobile-nav { display: flex !important; } }
      `}</style>
    </nav>
  )
}
