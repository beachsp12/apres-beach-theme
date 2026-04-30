# Après Beach — Design System

> A premium beach lifestyle brand. Elevated essentials for seaside days and sunset social moments. Polished, modern, fashion-forward — laid-back coastal energy without the kitsch.

---

## What is Après Beach?

Après Beach is a fashion-forward coastal lifestyle brand. The product world spans:

- **Apparel & accessories** — swimwear, linen sets, cover-ups, hats, scarves, sunglasses.
- **Home & terrace objects** — towels, ceramics, glassware, candles.
- **Editorial / brand world** — a Slim Aarons-coded universe of pool houses, sailboats, terrace dinners, and golden-hour social moments. Photography is the central brand asset — heritage poolside imagery in the vein of Helen Dzo Dzo Kaptur, Kaufmann Desert House, Palm Beach Society, St. Tropez harbor scenes.

The name is the rule: **Après Beach** — what happens *after* the beach. Showered, changed, sun-warmed, a drink in hand, somewhere with a view.

The brand reads closer to **Lou Lou Groupe, OAS, Perte d'ego** than to a generic resort-town gift shop. If a treatment ever drifts toward the gift shop, pull it back.

---

## Sources provided

| Asset | Project path |
|---|---|
| Wordmark (navy on sand) | `assets/wordmark-navy-on-sand.png` |
| Display typeface | `fonts/GatsbyPreludeSans.otf` (Gatsby Prelude Sans) |
| Editorial photography (13 images) | `assets/imagery/` |

No Figma file or codebase was provided. UI kits in this system are built from the brand notes, the wordmark, the typeface, and the photography library. **Flagged below in CAVEATS.**

---

## Index

```
/
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest
├── colors_and_type.css        ← All design tokens (palette, type, spacing, motion)
├── fonts/
│   └── GatsbyPreludeSans.otf  ← Display face. Brand wordmark family.
├── assets/
│   ├── wordmark-navy-on-sand.png
│   ├── logos/                 ← SVG wordmarks + monogram in both directions
│   └── imagery/               ← Heritage editorial photography library
├── preview/                   ← Design System tab cards (one per token cluster)
├── ui_kits/
│   ├── marketing/             ← Marketing site (homepage, PDP, lookbook, journal)
│   └── mobile_commerce/       ← Mobile commerce app (shop, PDP, bag, account)
└── uploads/                   ← Original brand inputs (do not edit)
```

---

## CONTENT FUNDAMENTALS

The voice is **considered, low-volume, slightly knowing**. It assumes the reader already gets it.

**Tone**
- Quiet confidence. No exclamation points. No urgency theatre ("HURRY! 24 HOURS LEFT!"). No emoji.
- Specific over generic — *"linen-blend, seven-button placket, terrace-cut"* over *"comfortable shirt for the beach."*
- Heritage adjacent without LARPing — references golden-hour, terrace shade, harbor light, but never says "vintage-inspired."
- Slightly French. Borrowed words land naturally: *après, demi, maison, en route.* Don't overdo.

**Person**
- Mostly second-person *(you)* on the marketing site, in product copy, in editorial.
- First-person plural *(we, our)* only when the house speaks — "We make linen for after the swim."
- Never first-person singular.

**Casing**
- **Display headlines: ALL CAPS** in the wordmark family. Always with proper accents (Après, not Apres).
- **Section eyebrows: ALL CAPS, tracked** — `0.18em`, 12px.
- **Body: sentence case.** Always.
- **Buttons: Sentence case** — *Add to bag*, not *ADD TO BAG*.
- **Product names: Title Case** — *Linen Camp Shirt, Coastline Towel.*

**Punctuation**
- Em-dash with no surrounding spaces — like this — for asides.
- Oxford comma always.
- Curly quotes ("smart quotes") in customer-facing copy. Never straight.
- No exclamation points anywhere.

**Specific examples — DO**
- *"After the swim. Before the sunset."*
- *"Linen, washed three times before it gets to you."*
- *"Cut for the 5pm light."*
- *"Sized for the way you actually wear it."*

**Specific examples — DON'T**
- ~~*"Get beach-ready with our amazing new collection!!"*~~
- ~~*"🌊☀️ Summer vibes only ☀️🌊"*~~
- ~~*"Click here to shop the look"*~~ (just say *Shop the look*)
- ~~*"Vintage-inspired" / "old-money aesthetic"*~~ (we don't name our influences out loud)

---

## VISUAL FOUNDATIONS

### Palette — the two-color rule

Navy (PMS 289 C / `#1B2C4F`) and sand (`#F1E9D7`) do every job. **Adding a third color requires a written reason, a scope, and an expiration date.**

- **Navy is never black.** Pure black reads as luxury cosplay. Push back if a vendor substitutes `#000`.
- **Sand is never white.** Pure white reads as paper, lab, or tech startup. The off-white must hold the warmth of unbleached linen.
- **Contrast** — navy on sand and sand on navy both clear WCAG AA at 11.4:1. No accessibility carve-outs needed in either direction.

**Seasonal accents — coral, turquoise, sage** — are *guests.* They appear in styling, fabric, editorial photography. They never touch the wordmark, the icon lockup, the primary CTA, or any system-level surface.

**Print & embroidery cross-checks**
- Navy thread: **Madeira 1043**
- Navy ink: **PMS 289 C**, water-based preferred
- A "close enough" navy gets a swatch request. Never approve from a digital proof.

### Type

- **Display:** Gatsby Prelude Sans — wide, slightly condensed, art deco-adjacent geometric sans. Used in all-caps for the wordmark and headlines. Runs with a confident -0.01em tracking; eyebrows track open at 0.18em.
- **Body:** Söhne (preferred) → Inter (fallback) → Helvetica Neue. **Flagged**: brand has not confirmed a body partner. We pair with a neutral grotesk by default.
- **Mono:** JetBrains Mono → IBM Plex Mono. Used sparingly for SKUs, sizes, and order numbers.

### Spacing

8pt grid with 4pt half-steps. Tokens: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. The brand breathes — pages prefer 96–128px between major sections, not 32–48.

### Backgrounds

- **Solid sand or solid navy.** Default to sand for marketing, navy for moments of drama (homepage hero alternates, full-bleed editorial intros, cart/checkout milestones).
- **Full-bleed editorial photography** is the workhorse texture. Imagery is *the* visual identity; we do not invent illustration or pattern to fill space.
- **No gradients** as background fills. (One exception: the protection gradient on full-bleed images, see below.)
- **No noise textures, no paper grain, no pattern fills.** The off-white is the texture.

### Imagery treatment

- **Warm light only.** Golden hour, terrace shade, interior afternoon light. Never noon, never flash, never cool studio.
- Color rendering biases warm by **100–200K** vs neutral. Skin tones land peachy-gold, not pink-and-clinical.
- Heritage editorial vocabulary: pool reflections, palm fronds, parasols, harbor light, ikat, scalloped umbrellas, white iron furniture, terrazzo, travertine.
- **No black & white** by default — the warmth is the point.
- **No heavy grain, no Instagram filters.** The original frame is the frame.

### Motion & easing

- **Linen falls; it does not snap.** Custom ease: `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- Durations: 140ms (micro), **240ms default**, 480ms (page-level).
- **No bounce, no overshoot, no spring.** Anything that feels playful or "tactile" is wrong.
- Page transitions: cross-fade with a 4–8px upward translation. That's the whole vocabulary.
- Image reveals: opacity fade only. No Ken Burns zoom. No parallax that exceeds 20% of the viewport.

### Hover & press states

- **Tonal shifts within the same color.** No new hues.
- **Hover on navy CTA:** background shifts to `--ab-navy-deep` (`#131F39`). No lift, no scale.
- **Hover on sand surface:** card background shifts to `--ab-sand-soft`.
- **Hover on link / nav:** opacity → 0.7. That's it.
- **Press / active:** further tonal shift one step deeper (`#0C1528` for navy CTA). No transform: scale.
- **Focus:** 2px outline in `--ab-navy` with a 2px sand offset. Visible, never gaudy.
- **Disabled:** navy at 24% alpha, sand at 60% alpha. No grayscale shift.

### Borders

- **1px hairline** in `--ab-navy-12` for default dividers, `--ab-navy-24` for emphasized.
- On navy surfaces, flip to `--ab-sand-24`.
- **No double borders, no inset borders, no dashed borders.**

### Shadows

- **Default: none.** The brand sits flat.
- When elevation is essential (modal, popover, dropdown), use **warm navy at low alpha** — never gray, never black.
  - `shadow-1`: `0 1px 2px rgba(27, 44, 79, 0.06)` — barely there, for inputs.
  - `shadow-2`: `0 8px 24px rgba(27, 44, 79, 0.10)` — dropdowns, popovers.
  - `shadow-3`: `0 24px 60px rgba(27, 44, 79, 0.18)` — modals only.
- **No inner shadows.** No neumorphism.

### Corner radii

- **2px on inputs and cards.** 4px on modals and large image crops.
- **Pills (`999px`) reserved for tags and status badges only.** Buttons are not pills.
- **Square corners are valid** and used liberally on full-bleed image crops, hero blocks, and the wordmark mark itself.

### Cards

- Background: `--bg-raised` (sand-soft) on a sand page, `--bg-raised-inverse` on a navy page.
- 1px hairline border in `--ab-navy-12`. **No shadow by default.**
- Radius: 2px.
- Padding: 24–32px.
- Image-led product cards: image fills card top edge-to-edge, square corners; metadata block sits below with 16px padding.

### Protection gradients vs capsules

- For text on full-bleed imagery, prefer a **bottom-to-top navy protection gradient** at 0% → 60% opacity over the bottom 40% of the frame. Capsules feel sticker-y and read web-default.
- Full-image overlays (when copy needs to sit center-frame) use a flat `--ab-navy-24` wash.

### Transparency & blur

- **Used rarely.** The two-color rule means most surfaces are already opaque solids.
- The one place blur is acceptable: a **sticky nav** that overlays editorial imagery — `backdrop-filter: blur(16px) saturate(120%);` with a `--ab-sand-60` fill. Once the user scrolls past the hero, nav becomes solid sand.
- Never use frosted-glass cards, never use blur for ambient mood.

### Layout rules

- **Container max:** 1280px. Generous outer gutters at 32px.
- **Marketing pages** lean asymmetric — image-heavy left, type-led right; alternating per row. The grid is implied, not enforced.
- **Product / commerce pages** are stricter — 12-column with 24px gaps.
- **Sticky elements:** primary nav, the buy box on PDP. Nothing else stays fixed.
- **Generous vertical rhythm.** 96–128px between major sections on marketing. 64px between content blocks on commerce. The brand earns its quiet by giving things room.

---

## ICONOGRAPHY

Après Beach uses iconography **sparingly**. The brand identity is photography + type; icons are utility, not decoration.

**System**
- **Lucide Icons** at 1.5px stroke weight, square line caps. Stroked, never filled. Color: `--fg1` (navy on sand) or `--fg-inverse-1` (sand on navy). Loaded from CDN: `https://unpkg.com/lucide-static@latest`.
- Standard sizes: 16px (inline), 20px (UI default), 24px (nav), 32px+ (illustrative use only).
- **FLAGGED:** the brand has no proprietary icon set yet. Lucide is a substitution — same restrained line aesthetic, will read on-brand. If the brand commissions a custom set later, this should swap to it.

**Emoji**
- **Never.** Not in product copy, not in marketing, not in transactional emails.

**Unicode characters as marks**
- **Sometimes** — restrained typographic marks are fine when they read as typography, not icons.
  - `★` for review stars (filled), `☆` for unfilled.
  - `→` for "shop the lookbook" CTAs (the rightward arrow is the brand's only motion-ish glyph).
  - `·` (middot) as a separator in metadata: *Linen · Unisex · Hand-finished.*
- These are styled with the body font and inherit color.

**Brand monogram**
- An "AB" monogram appears as the sole non-typographic mark — a stacked, tight ligature derived from Gatsby Prelude Sans. Treated like a wordmark, not an icon. **Flagged**: only the wordmark was provided; the monogram in `assets/logos/` is a derived placeholder until the brand confirms an official mark.

**SVG vs raster**
- All system icons (Lucide) ship as SVG, currentColor-driven.
- The wordmark ships as both PNG (provided) and an SVG re-typeset from Gatsby Prelude Sans for clean scaling.
- Photography is JPEG, sized for retina at 2x the display dimension.

---

## CAVEATS

- **No Figma or codebase was provided.** UI kits are built from the brand notes + photography library. They should be reviewed against the brand's actual product before being used as truth.
- **Body type is unconfirmed.** Gatsby Prelude Sans is a display face only — pairing it with Söhne/Inter is an educated guess. Please confirm or supply a body partner.
- **No proprietary icon set.** Substituted Lucide at matching stroke weight. Flag if you'd like a custom set commissioned.
- **Monogram is derived.** Only the full wordmark was provided.

See `SKILL.md` for how to invoke this system from Claude Code or another agent context.
