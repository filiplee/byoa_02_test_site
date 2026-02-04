/**
 * Pages Router fallback error page.
 * Next.js looks for this when any request fails (isAppPath: false).
 * Without it, you get "missing required error components, refreshing..."
 */
function Error({ statusCode }) {
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
        {statusCode ? `Something went wrong (${statusCode})` : 'Something went wrong'}
      </h1>
      <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem' }}>
        We couldn&apos;t load this page. Please try again.
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : (err ? err.statusCode : 404)
  return { statusCode }
}

export default Error
