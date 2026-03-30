import useInView from '../hooks/useInView'

export default function SectionTitle({ children }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        marginBottom: '3.5rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'all .6s ease',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          marginBottom: '.5rem',
          fontFamily: 'Syne, sans-serif',
        }}
      >
        {children}
      </h2>
      <div
        style={{
          width: '60px',
          height: '4px',
          background: 'linear-gradient(90deg,var(--accent),var(--accent3))',
          borderRadius: '99px',
          margin: '0 auto',
          boxShadow: '0 0 15px var(--accent)',
        }}
      />
    </div>
  )
}
