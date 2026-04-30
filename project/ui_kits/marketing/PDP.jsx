/* global React */

function PDP({ product, onBack, onAddToBag }) {
  const [size, setSize] = React.useState('M');
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div style={{ background: '#F1E9D7', paddingTop: 72 }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '32px 48px 96px',
      }}>
        <a onClick={onBack} style={{
          display: 'inline-block', marginBottom: 32,
          fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#1B2C4F', cursor: 'pointer', fontWeight: 500, opacity: 0.7,
        }}>← Back to shop</a>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ aspectRatio: '4/5', background: `url(${product.image}) center/cover` }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ aspectRatio: '4/5', background: `url(${product.image2 || product.image}) center/cover` }} />
              <div style={{ aspectRatio: '4/5', background: `url(${product.image3 || product.image}) center/cover` }} />
            </div>
          </div>

          <div style={{ position: 'sticky', top: 96, alignSelf: 'start' }}>
            <div style={{
              fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(27,44,79,0.6)', fontWeight: 500, marginBottom: 12,
            }}>{product.eyebrow || 'The After-Swim Edit'}</div>
            <h1 style={{
              fontFamily: 'Gatsby Prelude Sans, system-ui',
              fontSize: 48, lineHeight: 1, letterSpacing: '-0.01em',
              textTransform: 'uppercase', margin: 0, fontWeight: 400, color: '#1B2C4F',
            }}>{product.name}</h1>
            <div style={{
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              fontSize: 16, color: '#1B2C4F', marginTop: 16,
            }}>{product.price}</div>
            <p style={{
              fontSize: 17, lineHeight: 1.6, marginTop: 32, color: 'rgba(27,44,79,0.85)',
            }}>{product.description || 'Linen, washed three times before it gets to you. Cut for the 5pm light — collar that holds, sleeve that breathes.'}</p>

            <div style={{ marginTop: 40 }}>
              <div style={{
                fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(27,44,79,0.6)', fontWeight: 500, marginBottom: 12,
              }}>Size</div>
              <div style={{ display: 'flex', gap: 8 }}>
                {sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)} style={{
                    fontFamily: 'inherit', fontSize: 14, fontWeight: 500,
                    width: 56, height: 48, borderRadius: 2, cursor: 'pointer',
                    background: size === s ? '#1B2C4F' : 'transparent',
                    color: size === s ? '#F1E9D7' : '#1B2C4F',
                    border: '1px solid #1B2C4F',
                    transition: 'all 140ms cubic-bezier(.22,.61,.36,1)',
                  }}>{s}</button>
                ))}
              </div>
              <a style={{
                display: 'inline-block', marginTop: 12,
                fontSize: 13, color: 'rgba(27,44,79,0.6)',
                borderBottom: '1px solid currentColor', cursor: 'pointer',
              }}>Size guide</a>
            </div>

            <button onClick={() => onAddToBag?.({ ...product, size })} style={{
              fontFamily: 'inherit', fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
              background: '#1B2C4F', color: '#F1E9D7', border: 'none',
              padding: '20px 32px', borderRadius: 2, cursor: 'pointer',
              fontWeight: 500, marginTop: 32, width: '100%',
              transition: 'background 140ms cubic-bezier(.22,.61,.36,1)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#131F39'}
            onMouseLeave={e => e.currentTarget.style.background = '#1B2C4F'}
            >Add to bag · {size}</button>

            <div style={{ marginTop: 32, fontSize: 14, color: 'rgba(27,44,79,0.7)', lineHeight: 1.6 }}>
              Linen · Unisex sizing<br/>
              Free shipping over €200 · 30-day returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.PDP = PDP;
