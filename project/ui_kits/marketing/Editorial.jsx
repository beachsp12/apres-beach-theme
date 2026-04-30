/* global React */

// 2up editorial: image left, type right (or alternated)
function Editorial({ image, eyebrow, title, copy, link, reverse }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 80,
      alignItems: 'center',
      direction: reverse ? 'rtl' : 'ltr',
    }}>
      <div style={{ direction: 'ltr' }}>
        <div style={{
          aspectRatio: '4/5',
          background: `url(${image}) center/cover`,
        }} />
      </div>
      <div style={{ direction: 'ltr', maxWidth: 480 }}>
        <div style={{
          fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'rgba(27,44,79,0.6)', fontWeight: 500, marginBottom: 16,
        }}>{eyebrow}</div>
        <h2 style={{
          fontFamily: 'Gatsby Prelude Sans, system-ui',
          fontSize: 'clamp(32px, 3.6vw, 52px)',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
          margin: 0,
          fontWeight: 400,
          color: '#1B2C4F',
        }}>{title}</h2>
        <p style={{
          fontSize: 17, lineHeight: 1.6, marginTop: 24,
          color: 'rgba(27,44,79,0.85)',
        }}>{copy}</p>
        {link && (
          <a style={{
            display: 'inline-block', marginTop: 28,
            fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#1B2C4F', borderBottom: '1px solid #1B2C4F',
            paddingBottom: 4, cursor: 'pointer', fontWeight: 500,
          }}>{link} →</a>
        )}
      </div>
    </div>
  );
}

window.Editorial = Editorial;
