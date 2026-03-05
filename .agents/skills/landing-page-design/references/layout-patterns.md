# Layout Patterns Reference

## Hero Section Variants

### Type A: Centered with Visual Below
```html
<!-- Best for: SaaS, product launches -->
<section class="hero hero--centered">
  <div class="hero__badge">New · Version 2.0</div>
  <h1 class="hero__headline">The headline<br>spans two lines</h1>
  <p class="hero__sub">Supporting copy goes here. One to two sentences max. Benefit-focused.</p>
  <div class="hero__cta-group">
    <button class="btn-primary">Primary Action →</button>
    <button class="btn-ghost">Secondary Action</button>
  </div>
  <div class="hero__social-proof">
    <!-- Avatars + "Trusted by X+" -->
  </div>
  <div class="hero__visual">
    <!-- Product screenshot, mockup, or abstract 3D -->
  </div>
</section>

<style>
.hero--centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 120px 80px 0;
  gap: 24px;
}
.hero__headline {
  font-size: clamp(48px, 7vw, 96px);
  line-height: 1.05;
  letter-spacing: -0.04em;
  max-width: 900px;
}
.hero__cta-group {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}
.hero__visual {
  margin-top: 64px;
  width: 100%;
  max-width: 1000px;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  border: 1px solid var(--border);
}
</style>
```

### Type B: Split Layout (Text + Visual)
```css
/* Best for: Products with strong visual, dashboards */
.hero--split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding: 120px 80px;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .hero--split {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 80px 24px;
  }
}

.hero--split .hero__text {
  max-width: 540px;
}

.hero--split .hero__visual {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4/3;
}
```

### Type C: Oversized Typography Hero
```css
/* Best for: Agencies, bold brands, creative portfolios */
.hero--type-only {
  padding: 120px 40px 80px;
  overflow: hidden;
}

.hero--type-only .hero__headline {
  font-size: clamp(72px, 12vw, 180px);
  line-height: 0.9;
  letter-spacing: -0.05em;
  /* Let text breathe and overflow intentionally */
}

.hero--type-only .hero__desc {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 80px;
  margin-top: 48px;
  align-items: end;
}
```

---

## Feature Section Variants

### 3-Column Card Grid
```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 0 80px;
}

@media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .features-grid { grid-template-columns: 1fr; } }

.feature-card {
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.feature-card:hover {
  border-color: var(--border-hover);
  background: var(--surface-2);
}

.feature-card__icon {
  width: 40px;
  height: 40px;
  background: var(--accent-soft);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--accent);
}

.feature-card__title {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.feature-card__desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

### Alternating Image/Text (Zigzag)
```css
.features-zigzag { display: flex; flex-direction: column; gap: 120px; padding: 0 80px; }

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-row:nth-child(even) .feature-row__text { order: 2; }
.feature-row:nth-child(even) .feature-row__visual { order: 1; }

.feature-row__visual {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  aspect-ratio: 4/3;
  background: var(--surface);
}
```

### Bento Grid (Asymmetric Cards)
```css
.bento {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  gap: 16px;
  padding: 0 80px;
}

/* Card sizes */
.bento-card--lg    { grid-column: span 4; grid-row: span 2; }
.bento-card--md    { grid-column: span 2; }
.bento-card--wide  { grid-column: span 6; grid-row: span 1; }
.bento-card--half  { grid-column: span 3; }

.bento-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  overflow: hidden;
  position: relative;
  min-height: 240px;
}
```

---

## Social Proof Sections

### Logo Marquee
```html
<div class="marquee-wrapper">
  <div class="marquee">
    <div class="marquee__track">
      <!-- Logos repeated twice for seamless loop -->
      <span>Logo 1</span>
      <span>Logo 2</span>
      <!-- ...repeat... -->
    </div>
  </div>
</div>

<style>
.marquee-wrapper {
  overflow: hidden;
  padding: 32px 0;
  mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
}
.marquee__track {
  display: flex;
  gap: 64px;
  width: max-content;
  animation: marquee 30s linear infinite;
  align-items: center;
}
@keyframes marquee {
  to { transform: translateX(-50%); }
}
.marquee__track span {
  opacity: 0.45;
  filter: grayscale(1);
  transition: opacity 0.2s, filter 0.2s;
  white-space: nowrap;
  font-weight: 600;
  font-size: 18px;
  color: var(--text-primary);
}
.marquee__track span:hover { opacity: 0.8; filter: grayscale(0); }
</style>
```

### Stats Bar
```css
.stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  margin: 0 80px;
}

.stat-item {
  padding: 40px 32px;
  border-right: 1px solid var(--border);
  text-align: center;
}
.stat-item:last-child { border-right: none; }

.stat-number {
  font-family: var(--font-display);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  line-height: 1;
}

.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 8px;
  letter-spacing: 0.02em;
}
```

---

## Navigation

### Minimal Floating Nav
```css
.nav {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: calc(100% - 80px);
  max-width: 1200px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 14px 24px;
  background: rgba(12, 12, 14, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.nav__logo {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.02em;
}

.nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav__links a {
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}
.nav__links a:hover { color: var(--text-primary); }
```

---

## Section Wrapper (Reusable)
```css
.section {
  padding: 120px 0;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 80px;
  padding-right: 80px;
}

@media (max-width: 1024px) { .section { padding-left: 40px; padding-right: 40px; } }
@media (max-width: 640px)  { .section { padding: 80px 24px; } }

.section__header {
  margin-bottom: 64px;
  max-width: 640px;
}

.section__label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.section__label::before {
  content: '';
  width: 20px;
  height: 1px;
  background: currentColor;
}

.section__title {
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.section__desc {
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.65;
  max-width: 520px;
}
```