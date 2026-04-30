/* global React */

function EyebrowHeader({ eyebrow, title, copy, align = 'left' }) {
  return (
    <header style={{
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      margin: align === 'center' ? '0 auto' : 0,
    }}>
      <div style={{
        fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(27,44,79,0.6)', fontWeight: 500, marginBottom: 16,
      }}>{eyebrow}</div>
      <h2 style={{
        fontFamily: 'Gatsby Prelude Sans, system-ui',
        fontSize: 'clamp(36px, 4.5vw, 64px)',
        lineHeight: 1.05,
        letterSpacing: '-0.01em',
        textTransform: 'uppercase',
        margin: 0,
        fontWeight: 400,
        color: '#1B2C4F',
      }}>{title}</h2>
      {copy && (
        <p style={{
          fontSize: 18, lineHeight: 1.55, marginTop: 16,
          color: 'rgba(27,44,79,0.75)', maxWidth: 560,
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0,
        }}>{copy}</p>
      )}
    </header>
  );
}

window.EyebrowHeader = EyebrowHeader;
