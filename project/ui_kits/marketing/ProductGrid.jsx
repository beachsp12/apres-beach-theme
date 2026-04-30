/* global React */

function ProductCard({ image, eyebrow, name, price, onClick }) {
  return (
    <a onClick={onClick} style={{
      cursor: 'pointer', display: 'block',
      transition: 'opacity 140ms cubic-bezier(.22,.61,.36,1)',
    }}
    onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
    onMouseLeave={e => e.currentTarget.style.opacity = 1}
    >
      <div style={{
        aspectRatio: '4/5',
        background: `url(${image}) center/cover`,
        marginBottom: 16,
      }} />
      {eyebrow && <div style={{
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: 'rgba(27,44,79,0.6)', fontWeight: 500, marginBottom: 6,
      }}>{eyebrow}</div>}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ fontSize: 16, color: '#1B2C4F' }}>{name}</div>
        <div style={{
          fontFamily: 'JetBrains Mono, ui-monospace, monospace',
          fontSize: 14, color: '#1B2C4F',
        }}>{price}</div>
      </div>
    </a>
  );
}

function ProductGrid({ products, onProduct }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 32,
    }}>
      {products.map((p, i) => <ProductCard key={i} {...p} onClick={() => onProduct?.(p)} />)}
    </div>
  );
}

window.ProductCard = ProductCard;
window.ProductGrid = ProductGrid;
