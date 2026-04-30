/* global React, IOSDevice, IOSStatusBar */
const { useState } = React;

// ── Bottom tab bar ──────────────────────────────────────────
function MobileTabBar({ tab, onTab }) {
  const tabs = [
    { id: 'shop', label: 'Shop' },
    { id: 'lookbook', label: 'Lookbook' },
    { id: 'bag', label: 'Bag' },
    { id: 'account', label: 'Account' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      background: '#F1E9D7',
      borderTop: '1px solid rgba(27,44,79,0.12)',
      paddingTop: 12, paddingBottom: 30,
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      zIndex: 5,
    }}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onTab(t.id)} style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#1B2C4F', fontWeight: 500,
          opacity: tab === t.id ? 1 : 0.5,
          paddingTop: 8, paddingBottom: 4,
          borderTop: tab === t.id ? '1px solid #1B2C4F' : '1px solid transparent',
          marginTop: -12,
        }}>{t.label}</button>
      ))}
    </div>
  );
}

// ── Header ──────────────────────────────────────────────────
function MobileHeader({ title, showBack, onBack, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '8px 20px 16px',
      gap: 12, background: '#F1E9D7',
    }}>
      {showBack ? (
        <button onClick={onBack} style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: 12, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#1B2C4F', padding: 0, fontWeight: 500,
        }}>← Back</button>
      ) : (
        <div style={{
          fontFamily: 'Gatsby Prelude Sans, system-ui',
          fontSize: 22, letterSpacing: '0.06em',
          textTransform: 'uppercase', color: '#1B2C4F',
        }}>Après Beach</div>
      )}
      <div style={{ flex: 1, textAlign: 'center', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1B2C4F', fontWeight: 500 }}>{title}</div>
      <div style={{ minWidth: 40, textAlign: 'right' }}>{right}</div>
    </div>
  );
}

// ── Shop ────────────────────────────────────────────────────
function MobileShop({ products, onProduct }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Linen', 'Swim', 'Knitwear', 'Accessories'];
  return (
    <div>
      <MobileHeader title="Spring · MMXXVI" right={<span style={{ fontSize: 18, color: '#1B2C4F' }}>⌕</span>} />
      <div style={{ padding: '0 20px 16px', display: 'flex', gap: 8, overflowX: 'auto' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '8px 14px', borderRadius: 999, fontWeight: 500, cursor: 'pointer',
            border: '1px solid #1B2C4F', whiteSpace: 'nowrap',
            background: filter === f ? '#1B2C4F' : 'transparent',
            color: filter === f ? '#F1E9D7' : '#1B2C4F',
          }}>{f}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: '0 4px 100px' }}>
        {products.map((p, i) => (
          <a key={i} onClick={() => onProduct(p)} style={{ cursor: 'pointer', display: 'block' }}>
            <div style={{ aspectRatio: '4/5', background: `url(${p.image}) center/cover` }} />
            <div style={{ padding: '12px 12px 20px' }}>
              <div style={{ fontSize: 14, color: '#1B2C4F' }}>{p.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 12, color: '#1B2C4F', marginTop: 2 }}>{p.price}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── PDP ─────────────────────────────────────────────────────
function MobilePDP({ product, onBack, onAddToBag }) {
  const [size, setSize] = useState('M');
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  return (
    <div style={{ paddingBottom: 100 }}>
      <div style={{
        position: 'sticky', top: 0, zIndex: 4, background: '#F1E9D7',
      }}>
        <MobileHeader title="" showBack onBack={onBack} right={<span style={{ fontSize: 16, color: '#1B2C4F' }}>♡</span>} />
      </div>
      <div style={{ aspectRatio: '4/5', background: `url(${product.image}) center/cover` }} />
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(27,44,79,0.6)', fontWeight: 500 }}>{product.eyebrow || 'The After-Swim Edit'}</div>
        <h1 style={{
          fontFamily: 'Gatsby Prelude Sans, system-ui',
          fontSize: 34, lineHeight: 1, letterSpacing: '-0.01em',
          textTransform: 'uppercase', margin: '12px 0 8px', fontWeight: 400, color: '#1B2C4F',
        }}>{product.name}</h1>
        <div style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 14, color: '#1B2C4F' }}>{product.price}</div>
        <p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 24, color: 'rgba(27,44,79,0.85)' }}>
          {product.description || 'Linen, washed three times before it gets to you. Cut for the 5pm light.'}
        </p>
        <div style={{ marginTop: 28, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(27,44,79,0.6)', fontWeight: 500, marginBottom: 12 }}>Size</div>
        <div style={{ display: 'flex', gap: 6 }}>
          {sizes.map(s => (
            <button key={s} onClick={() => setSize(s)} style={{
              fontFamily: 'inherit', fontSize: 13, fontWeight: 500,
              flex: 1, height: 44, borderRadius: 2, cursor: 'pointer',
              background: size === s ? '#1B2C4F' : 'transparent',
              color: size === s ? '#F1E9D7' : '#1B2C4F',
              border: '1px solid #1B2C4F',
            }}>{s}</button>
          ))}
        </div>
      </div>
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 80,
        padding: '12px 20px',
        background: 'rgba(241,233,215,0.85)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(27,44,79,0.12)',
      }}>
        <button onClick={() => onAddToBag({ ...product, size })} style={{
          fontFamily: 'inherit', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
          background: '#1B2C4F', color: '#F1E9D7', border: 'none',
          padding: '16px', borderRadius: 2, cursor: 'pointer',
          fontWeight: 500, width: '100%',
        }}>Add to bag · {size}</button>
      </div>
    </div>
  );
}

// ── Lookbook ────────────────────────────────────────────────
function MobileLookbook() {
  const slides = [
    { img: '../../assets/imagery/sttropez.jpg', eyebrow: 'No. 01', title: 'The Harbor', dek: 'At five, when the boats come in.' },
    { img: '../../assets/imagery/kaufmann-desert-house.jpg', eyebrow: 'No. 02', title: 'The Desert House', dek: 'Parasol scallops, long shadows.' },
    { img: '../../assets/imagery/poolside-secrets.jpg', eyebrow: 'No. 03', title: 'Poolside', dek: 'After the swim, before the table.' },
    { img: '../../assets/imagery/colourful-crew.jpg', eyebrow: 'No. 04', title: 'The Crew', dek: 'Bermuda, in ikat.' },
  ];
  const [i, setI] = useState(0);
  const s = slides[i];
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${s.img})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,44,79,0.7) 0%, rgba(27,44,79,0) 60%)' }} />
      <div style={{
        position: 'absolute', top: 60, left: 20, right: 20,
        display: 'flex', justifyContent: 'space-between', color: '#F1E9D7',
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 500,
      }}>
        <span>The Lookbook</span>
        <span>{i + 1} / {slides.length}</span>
      </div>
      <div style={{
        position: 'absolute', left: 20, right: 20, bottom: 120,
        color: '#F1E9D7',
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 12 }}>{s.eyebrow}</div>
        <div style={{
          fontFamily: 'Gatsby Prelude Sans, system-ui',
          fontSize: 56, lineHeight: 0.95, letterSpacing: '-0.01em',
          textTransform: 'uppercase', fontWeight: 400,
        }}>{s.title}</div>
        <div style={{ fontSize: 16, lineHeight: 1.55, marginTop: 12, opacity: 0.9 }}>{s.dek}</div>
      </div>
      <div style={{
        position: 'absolute', left: 20, right: 20, bottom: 92,
        display: 'flex', gap: 6,
      }}>
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} style={{
            flex: 1, height: 2, background: idx === i ? '#F1E9D7' : 'rgba(241,233,215,0.4)',
            border: 'none', cursor: 'pointer', padding: 0,
          }}/>
        ))}
      </div>
    </div>
  );
}

// ── Bag ─────────────────────────────────────────────────────
function MobileBag({ items, onCheckout, onRemove }) {
  const subtotal = items.reduce((s, i) => s + parseFloat((i.price || '0').replace(/[€,]/g, '')), 0);
  return (
    <div>
      <MobileHeader title={`Bag · ${items.length}`} />
      {items.length === 0 ? (
        <div style={{ padding: '80px 32px', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Gatsby Prelude Sans, system-ui',
            fontSize: 28, lineHeight: 1, letterSpacing: '-0.01em',
            textTransform: 'uppercase', color: '#1B2C4F', marginBottom: 12,
          }}>Your bag<br/>is empty</div>
          <div style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(27,44,79,0.7)' }}>
            Twelve pieces in the spring edit. Linen, swim, easy knits.
          </div>
        </div>
      ) : (
        <>
          <div style={{ padding: '0 20px 200px' }}>
            {items.map((it, idx) => (
              <div key={idx} style={{
                display: 'grid', gridTemplateColumns: '88px 1fr auto', gap: 16,
                padding: '20px 0',
                borderBottom: '1px solid rgba(27,44,79,0.12)',
              }}>
                <div style={{ aspectRatio: '4/5', background: `url(${it.image}) center/cover` }} />
                <div>
                  <div style={{ fontSize: 15, color: '#1B2C4F' }}>{it.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(27,44,79,0.6)', marginTop: 4 }}>Size {it.size}</div>
                  <button onClick={() => onRemove(idx)} style={{
                    background: 'transparent', border: 'none', padding: 0, marginTop: 12,
                    fontFamily: 'inherit', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'rgba(27,44,79,0.6)', cursor: 'pointer',
                    borderBottom: '1px solid currentColor',
                  }}>Remove</button>
                </div>
                <div style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 13, color: '#1B2C4F' }}>{it.price}</div>
              </div>
            ))}
          </div>
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 80,
            padding: '20px',
            background: 'rgba(241,233,215,0.92)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(27,44,79,0.12)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <span style={{ fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(27,44,79,0.6)' }}>Subtotal</span>
              <span style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: 14, color: '#1B2C4F' }}>€{subtotal.toFixed(2)}</span>
            </div>
            <button onClick={onCheckout} style={{
              fontFamily: 'inherit', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase',
              background: '#1B2C4F', color: '#F1E9D7', border: 'none',
              padding: '16px', borderRadius: 2, cursor: 'pointer',
              fontWeight: 500, width: '100%',
            }}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

// ── Account ─────────────────────────────────────────────────
function MobileAccount() {
  const items = [
    'Orders', 'Saved', 'Addresses', 'Payment', 'The Dispatch', 'Help', 'Sign out',
  ];
  return (
    <div>
      <MobileHeader title="Account" />
      <div style={{ padding: '8px 20px' }}>
        <div style={{
          fontFamily: 'Gatsby Prelude Sans, system-ui',
          fontSize: 32, lineHeight: 1, letterSpacing: '-0.01em',
          textTransform: 'uppercase', color: '#1B2C4F', marginBottom: 8,
        }}>Bonsoir,<br/>Anaïs</div>
        <div style={{ fontSize: 13, color: 'rgba(27,44,79,0.6)' }}>Member since spring MMXXIV</div>
      </div>
      <div style={{ marginTop: 32 }}>
        {items.map((it, i) => (
          <a key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '20px 20px',
            borderTop: '1px solid rgba(27,44,79,0.12)',
            borderBottom: i === items.length - 1 ? '1px solid rgba(27,44,79,0.12)' : 'none',
            color: '#1B2C4F', fontSize: 16, cursor: 'pointer',
          }}>
            <span>{it}</span>
            <span style={{ opacity: 0.5 }}>→</span>
          </a>
        ))}
      </div>
    </div>
  );
}

window.MobileTabBar = MobileTabBar;
window.MobileHeader = MobileHeader;
window.MobileShop = MobileShop;
window.MobilePDP = MobilePDP;
window.MobileLookbook = MobileLookbook;
window.MobileBag = MobileBag;
window.MobileAccount = MobileAccount;
