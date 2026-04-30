/* global React */

function Hero({ image, eyebrow, title, copy, cta, onCta }) {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: 720,
      width: '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#F1E9D7',
      overflow: 'hidden',
    }}>
      {/* protection gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(27,44,79,0.6) 0%, rgba(27,44,79,0) 60%)',
      }} />
      <div style={{
        position: 'absolute', left: 48, right: 48, bottom: 64,
        display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 48,
      }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{
            fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
            opacity: 0.85, marginBottom: 20,
          }}>{eyebrow}</div>
          <h1 style={{
            fontFamily: 'Gatsby Prelude Sans, system-ui',
            fontSize: 'clamp(56px, 7.5vw, 120px)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            margin: 0,
            fontWeight: 400,
          }}>{title}</h1>
          {copy && (
            <p style={{
              fontSize: 18, lineHeight: 1.55, marginTop: 20,
              maxWidth: 520, opacity: 0.92,
            }}>{copy}</p>
          )}
        </div>
        {cta && (
          <button onClick={onCta} style={{
            fontFamily: 'inherit',
            fontSize: 12,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            background: '#F1E9D7',
            color: '#1B2C4F',
            border: 'none',
            padding: '18px 32px',
            borderRadius: 2,
            cursor: 'pointer',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            transition: 'background 140ms cubic-bezier(.22,.61,.36,1)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#E7DDC6'}
          onMouseLeave={e => e.currentTarget.style.background = '#F1E9D7'}
          >{cta}</button>
        )}
      </div>
    </section>
  );
}

window.Hero = Hero;
