/**
 * Pages Router 404 fallback.
 * Next.js looks for this for 404s when App Router not-found isn't used.
 */
export default function Custom404() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      fontFamily: 'system-ui, sans-serif',
      background: '#fafaf9',
      color: '#0f172a',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
        Page not found
      </h1>
      <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a
        href="/"
        style={{
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          background: '#0d9488',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          textDecoration: 'none',
        }}
      >
        Go home
      </a>
    </div>
  )
}
