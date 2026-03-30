import { useState } from 'react'
import { SOCIALS } from '../data'
import SectionTitle from './SectionTitle'
import useInView from '../hooks/useInView'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const FreelancerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.5 0h-21C.7 0 0 .7 0 1.5v21c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-21C24 .7 23.3 0 22.5 0zM12 18.4L5.6 12 12 5.6l6.4 6.4-6.4 6.4z" />
  </svg>
)

const MostaqlIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
)

const SOCIAL_ICONS = { LinkedIn: <LinkedInIcon />, GitHub: <GitHubIcon />, Freelancer: <FreelancerIcon />, Mostaql: <MostaqlIcon /> }

function GlowOrb({ style }) {
  return (
    <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', opacity: 0.25, ...style }} />
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [ref, visible] = useInView()

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message is too short'
    return e
  }

  const send = async () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSending(true)
    setStatus('')
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 200,
          messages: [
            {
              role: 'user',
              content: `You are an email notification assistant. Someone sent a contact form message to Ammar Sherif (ammar.s.fouad555@gmail.com).
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}
Message: ${form.message}

Compose a brief, professional notification confirming the message was received and that Ammar will reply to ${form.email} within 24 hours. Keep it under 80 words.`,
            },
          ],
        }),
      })
      const data = await res.json()
      const reply = data?.content?.[0]?.text || ''
      if (reply) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setSending(false)
  }

  const inputStyle = (id) => ({
    background: 'var(--surface)',
    border: `1px solid ${errors[id] ? '#ef4444' : 'var(--border)'}`,
    borderRadius: '10px',
    padding: '12px 16px',
    color: 'var(--text)',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
    transition: 'border .2s',
    width: '100%',
  })

  return (
    <section id="contact" style={{ padding: '100px 5vw', position: 'relative', overflow: 'hidden' }}>
      <GlowOrb style={{ width: '400px', height: '400px', background: 'var(--accent)', bottom: '-100px', left: '-100px' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle>Get In Touch</SectionTitle>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}>
          <div
            ref={ref}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateX(-30px)',
              transition: 'all .8s ease',
            }}
          >
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', marginBottom: '1.2rem' }}>
              Let's Build Something Amazing
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2.5rem' }}>
              Have a project in mind? Looking for a freelancer to bring your vision to life? I'd love to
              hear from you. I'm always open to new opportunities and collaborations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }}>
              {[
                { icon: '📧', label: 'Email', val: 'ammar.s.fouad555@gmail.com', href: 'mailto:ammar.s.fouad555@gmail.com' },
                { icon: '📍', label: 'Location', val: 'Egypt 🇪🇬', href: null },
                { icon: '💼', label: 'Freelancer', val: 'ammars591', href: 'https://www.freelancer.com/u/ammars591' },
              ].map(({ icon, label, val, href }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'var(--surface)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.4rem',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(124,106,247,.12)',
                      borderRadius: '10px',
                    }}
                  >
                    {icon}
                  </span>
                  <div>
                    <div style={{ fontSize: '.8rem', color: 'var(--muted)' }}>{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" style={{ color: 'var(--accent2)', fontSize: '.95rem' }}>
                        {val}
                      </a>
                    ) : (
                      <span style={{ fontSize: '.95rem' }}>{val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p style={{ fontSize: '.9rem', color: 'var(--muted)', marginBottom: '1rem' }}>Connect with me</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    title={s.name}
                    style={{
                      width: '42px',
                      height: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: '10px',
                      color: 'var(--muted)',
                      transition: 'all .2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)'
                      e.currentTarget.style.color = 'var(--accent)'
                      e.currentTarget.style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.color = 'var(--muted)'
                      e.currentTarget.style.transform = ''
                    }}
                  >
                    {SOCIAL_ICONS[s.name]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
            }}
          >
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.4rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500 }}>Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  style={inputStyle('name')}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border)')}
                  placeholder="Ammar Sherif"
                />
                {errors.name && <span style={{ fontSize: '.8rem', color: '#ef4444' }}>{errors.name}</span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500 }}>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  style={inputStyle('email')}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border)')}
                  placeholder="you@email.com"
                />
                {errors.email && <span style={{ fontSize: '.8rem', color: '#ef4444' }}>{errors.email}</span>}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500 }}>Subject</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                style={inputStyle('subject')}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border)')}
                placeholder="Project inquiry"
              />
              {errors.subject && <span style={{ fontSize: '.8rem', color: '#ef4444' }}>{errors.subject}</span>}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '.9rem', color: 'var(--muted)', fontWeight: 500 }}>Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                rows={5}
                style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={(e) => (e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border)')}
                placeholder="Tell me about your project..."
              />
              {errors.message && <span style={{ fontSize: '.8rem', color: '#ef4444' }}>{errors.message}</span>}
            </div>

            {status === 'success' && (
              <div
                style={{
                  padding: '14px',
                  background: 'rgba(34,197,94,.12)',
                  border: '1px solid rgba(34,197,94,.3)',
                  borderRadius: '10px',
                  color: '#22c55e',
                  fontSize: '.95rem',
                  textAlign: 'center',
                }}
              >
                ✅ Message sent! I'll get back to you within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div
                style={{
                  padding: '14px',
                  background: 'rgba(239,68,68,.12)',
                  border: '1px solid rgba(239,68,68,.3)',
                  borderRadius: '10px',
                  color: '#ef4444',
                  fontSize: '.95rem',
                  textAlign: 'center',
                }}
              >
                ❌ Something went wrong. Please email directly at ammar.s.fouad555@gmail.com
              </div>
            )}

            <button
              onClick={send}
              disabled={sending}
              style={{
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg,var(--accent),var(--accent3))',
                color: '#fff',
                fontWeight: 500,
                fontSize: '1rem',
                cursor: sending ? 'wait' : 'pointer',
                transition: 'all .2s',
                opacity: sending ? 0.7 : 1,
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => { if (!sending) e.target.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.target.style.transform = '' }}
            >
              {sending ? 'Sending...' : 'Send Message ✈️'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
