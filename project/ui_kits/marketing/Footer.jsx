/* global React */

function Footer() {
  const cols = [
    { title: 'Shop', items: ['Linen', 'Swim', 'Knitwear', 'Accessories', 'The Edit'] },
    { title: 'Maison', items: ['Our story', 'Ateliers', 'Sustainability', 'Stockists'] },
    { title: 'Service', items: ['Shipping', 'Returns', 'Size guide', 'Care', 'Contact'] },
  ];
  return (
    <footer style={{
      background: '#1B2C4F',
      color: '#F1E9D7',
      padding: '96px 48px 48px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'Gatsby Prelude Sans, system-ui',
          fontSize: 'clamp(48px, 7vw, 96px)',
          lineHeight: 0.95, letterSpacing: '-0.01em',
          textTransform: 'uppercase', marginBottom: 64,
        }}>Après Beach</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1.4fr',
          gap: 48,
          paddingBottom: 64,
          borderBottom: '1px solid rgba(241,233,215,0.24)',
        }}>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{
                fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(241,233,215,0.6)', fontWeight: 500, marginBottom: 18,
              }}>{c.title}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(i => (
                  <li key={i}><a style={{ color: '#F1E9D7', cursor: 'pointer', fontSize: 15 }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <div style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(241,233,215,0.6)', fontWeight: 500, marginBottom: 18,
            }}>The dispatch</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.85, marginTop: 0 }}>
              A note from the maison every few weeks. New arrivals, the editorial, where to find us next.
            </p>
            <div style={{ display: 'flex', marginTop: 16, borderBottom: '1px solid #F1E9D7' }}>
              <input placeholder="Email"
                style={{
                  flex: 1, background: 'transparent', border: 'none', outline: 'none',
                  color: '#F1E9D7', padding: '10px 0', fontSize: 15, fontFamily: 'inherit',
                }} />
              <button style={{
                background: 'transparent', border: 'none', color: '#F1E9D7',
                fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
                fontWeight: 500, cursor: 'pointer', padding: '10px 0',
              }}>Subscribe →</button>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 32,
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          fontSize: 12, letterSpacing: '0.06em',
          color: 'rgba(241,233,215,0.6)',
        }}>
          <div>© Après Beach Maison · MMXXVI</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a style={{ color: 'inherit' }}>Privacy</a>
            <a style={{ color: 'inherit' }}>Terms</a>
            <a style={{ color: 'inherit' }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
