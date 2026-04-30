/* Après Beach — Shopify Theme JS */

// ============================================================
// HEADER SCROLL BEHAVIOR
// ============================================================
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('is-scrolled', window.scrollY > 80);
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ============================================================
// MOBILE MENU
// ============================================================
(function () {
  const toggle = document.querySelector('.site-header__menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const close = document.querySelector('.mobile-menu__close');
  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);

  // close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
})();

// ============================================================
// PRODUCT GALLERY — thumbnail switching
// ============================================================
(function () {
  const mainImg = document.querySelector('.product-gallery__main img');
  const thumbs = document.querySelectorAll('.product-gallery__thumb');
  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const src = thumb.dataset.src;
      const alt = thumb.dataset.alt || '';
      if (src) {
        mainImg.src = src;
        mainImg.alt = alt;
      }
      thumbs.forEach(t => t.classList.remove('is-active'));
      thumb.classList.add('is-active');
    });
  });
})();

// ============================================================
// SIZE SELECTOR
// ============================================================
(function () {
  const sizeBtns = document.querySelectorAll('.size-btn');
  const variantInput = document.querySelector('[name="id"]');
  if (!sizeBtns.length) return;

  sizeBtns.forEach(btn => {
    if (btn.dataset.available === 'false') {
      btn.classList.add('is-unavailable');
      btn.disabled = true;
      return;
    }

    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');

      // Update the hidden variant id for the add-to-cart form
      if (variantInput && btn.dataset.variantId) {
        variantInput.value = btn.dataset.variantId;
      }
    });
  });
})();

// ============================================================
// CART — AJAX add to bag (no page reload)
// ============================================================
(function () {
  const addForm = document.querySelector('.product-buybox__form');
  if (!addForm) return;

  addForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = addForm.querySelector('[type="submit"]');
    const original = btn.textContent;

    btn.disabled = true;
    btn.textContent = 'Adding…';

    try {
      const formData = new FormData(addForm);
      const body = JSON.stringify({
        id: formData.get('id'),
        quantity: 1,
      });

      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body,
      });

      if (!res.ok) throw new Error('Add to cart failed');

      btn.textContent = 'Added';
      updateCartCount();

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = original;
      }, 2000);
    } catch (err) {
      btn.disabled = false;
      btn.textContent = 'Error — try again';
      setTimeout(() => { btn.textContent = original; }, 2000);
    }
  });
})();

// ============================================================
// CART COUNT
// ============================================================
async function updateCartCount() {
  try {
    const res = await fetch('/cart.js');
    const cart = await res.json();
    const counts = document.querySelectorAll('.js-cart-count');
    counts.forEach(el => {
      el.textContent = cart.item_count > 0 ? `(${cart.item_count})` : '';
    });
  } catch (_) {}
}

document.addEventListener('DOMContentLoaded', updateCartCount);

// ============================================================
// CART QUANTITY UPDATE
// ============================================================
(function () {
  const cartForm = document.querySelector('.cart-form');
  if (!cartForm) return;

  cartForm.querySelectorAll('.cart-item__qty-input').forEach(input => {
    input.addEventListener('change', async function () {
      const key = this.dataset.key;
      const qty = parseInt(this.value, 10);
      if (!key || isNaN(qty)) return;

      try {
        await fetch('/cart/change.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: key, quantity: qty }),
        });
        window.location.reload();
      } catch (_) {}
    });
  });

  cartForm.querySelectorAll('.cart-item__remove').forEach(btn => {
    btn.addEventListener('click', async function (e) {
      e.preventDefault();
      const key = this.dataset.key;
      if (!key) return;

      try {
        await fetch('/cart/change.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: key, quantity: 0 }),
        });
        window.location.reload();
      } catch (_) {}
    });
  });
})();

// ============================================================
// NEWSLETTER FORM
// ============================================================
(function () {
  // Shopify handles newsletter forms via the contact form action.
  // This just adds a loading state.
  const forms = document.querySelectorAll('.js-newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', function () {
      const btn = form.querySelector('button[type="submit"]');
      if (btn) btn.textContent = 'Subscribing…';
    });
  });
})();

// ============================================================
// SMOOTH SECTION REVEAL (simple fade-up on scroll)
// ============================================================
(function () {
  if (!('IntersectionObserver' in window)) return;

  const els = document.querySelectorAll('.section, .product-card, .article-card, .editorial');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = `opacity 480ms cubic-bezier(0.22,0.61,0.36,1), transform 480ms cubic-bezier(0.22,0.61,0.36,1)`;
    observer.observe(el);
  });
})();
