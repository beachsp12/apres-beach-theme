/* global React */
const { useState, useEffect } = React;

function Nav({ onNavigate, current }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'shop', label: 'Shop' },
    { id: 'lookbook', label: 'Lookbook' },
    { id: 'journal', label: 'Journal' },
    { id: 'about', label: 'Maison' },
  ];

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    padding: '20px 32px',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    transition: 'background 240ms cubic-bezier(.22,.61,.36,1), backdrop-filter 240ms',
    background: scrolled ? '#F1E9D7' : 'rgba(241,233,215,0.6)',
    backdropFilter: scrolled ? 'none' : 'blur(16px) saturate(120%)',
    borderBottom: scrolled ? '1px solid rgba(27,44,79,0.12)' : '1px solid transparent',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ display: 'flex', gap: 28, listStyle: 'none', padding: 0, margin: 0 }}>
        {links.slice(0, 2).map(l => (
          <li key={l.id}>
            <a onClick={() => onNavigate(l.id)} style={navLink(current === l.id)}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer', textAlign: 'center' }}>
        <div style={{
          fontFamily: 'Gatsby Prelude Sans, system-ui',
          fontSize: 22, letterSpacing: '0.06em', textTransform: 'uppercase',
          color: '#1B2C4F', lineHeight: 1
        }}>Après Beach</div>
      </a>
      <ul style={{ display: 'flex', gap: 28, listStyle: 'none', padding: 0, margin: 0, justifyContent: 'flex-end' }}>
        {links.slice(2).map(l => (
          <li key={l.id}>
            <a onClick={() => onNavigate(l.id)} style={navLink(current === l.id)}>{l.label}</a>
          </li>
        ))}
        <li><a style={navLink(false)}>Bag (0)</a></li>
      </ul>
    </nav>
  );
}

function navLink(active) {
  return {
    cursor: 'pointer',
    fontSize: 12,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#1B2C4F',
    fontWeight: 500,
    opacity: active ? 1 : 0.85,
    borderBottom: active ? '1px solid #1B2C4F' : '1px solid transparent',
    paddingBottom: 2,
    transition: 'opacity 140ms cubic-bezier(.22,.61,.36,1)',
  };
}

window.Nav = Nav;
