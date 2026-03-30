import { useState } from 'react'
import { PROJECTS } from '../data'
import SectionTitle from './SectionTitle'
import useInView from '../hooks/useInView'

function ProjectCard({ title, desc, link, tags, delay }) {
  const [ref, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? `translateY(${hovered ? -8 : 0}px)` : 'translateY(40px)',
        transition: `opacity .7s ease ${delay}ms, transform .3s ease`,
        background: 'var(--card)',
        border: `1px solid ${hovered ? 'rgba(124,106,247,.5)' : 'var(--border)'}`,
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered ? '0 20px 60px rgba(124,106,247,.2)' : 'none',
      }}
    >
      <div style={{ height: '220px', position: 'relative', overflow: 'hidden', background: 'var(--surface)' }}>
        <iframe
          src={link}
          title={title}
          sandbox="allow-scripts allow-same-origin"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '170%',
            height: '170%',
            transform: 'scale(0.588)',
            transformOrigin: '0 0',
            border: 'none',
            pointerEvents: 'none',
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--card) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(10,10,15,.7)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity .3s',
            backdropFilter: 'blur(4px)',
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '.7rem 1.8rem',
              background: 'var(--accent)',
              color: '#fff',
              borderRadius: '10px',
              fontWeight: 500,
              fontSize: '.95rem',
            }}
          >
            View Live ↗
          </a>
        </div>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h3
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            fontSize: '1.15rem',
            marginBottom: '.6rem',
          }}
        >
          {title}
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                padding: '4px 12px',
                borderRadius: '99px',
                fontSize: '.78rem',
                background: 'rgba(124,106,247,.1)',
                border: '1px solid rgba(124,106,247,.2)',
                color: 'var(--accent2)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 5vw', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle>My Projects</SectionTitle>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--muted)',
            maxWidth: '500px',
            margin: '-1rem auto 3.5rem',
            fontSize: '1.05rem',
          }}
        >
          Real projects with live previews — hover to explore
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
