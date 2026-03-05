# Design System Reference

Full token set, typography scale, spacing system, and visual detail guide for high-conversion landing pages.

---

## CSS Variables (globals.css)

```css
:root {
  /* Backgrounds */
  --bg-primary: #0A0A0A;
  --bg-surface: #111111;
  --bg-elevated: #161616;
  --bg-overlay: rgba(255, 255, 255, 0.04);

  /* Borders */
  --border-subtle: #1A1A1A;
  --border-default: #222222;
  --border-strong: #333333;

  /* Text */
  --text-primary: #F5F5F5;
  --text-secondary: #888888;
  --text-tertiary: #555555;

  /* Accent (swap per brand) */
  --accent: #FFFFFF;
  --accent-muted: rgba(255, 255, 255, 0.6);
  --accent-soft: rgba(255, 255, 255, 0.06);

  /* Semantic */
  --success: #22C55E;
  --warning: #F59E0B;
  --error: #EF4444;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg: 0 8px 48px rgba(0,0,0,0.5);
  --shadow-glow: 0 0 40px rgba(255,255,255,0.08);

  /* Transitions */
  --ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 200ms;
  --duration-base: 400ms;
  --duration-slow: 700ms;
}
```

---

## Typography Scale

### Font Loading (next/font)
```tsx
// app/layout.tsx
import { localFont } from 'next/font/local'
import { DM_Sans } from 'next/font/google'

// Option A: Clash Display (premium feel)
const clashDisplay = localFont({
  src: '../public/fonts/ClashDisplay-Variable.woff2',
  variable: '--font-display',
})

// Option B: Syne (geometric, modern)
import { Syne } from 'next/font/google'
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

// Body font
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})
```

### CSS Type Scale
```css
/* Responsive display heading */
.text-display {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.0;
}

.text-headline {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 4vw, 3.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.text-subheading {
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 1.6;
}

.text-body {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

.text-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-tertiary);
}
```

---

## Spacing System

Based on 4px grid. Section padding scales with breakpoint:

```css
/* Section vertical padding */
.section-sm   { padding-block: 4rem; }   /* 64px  */
.section-md   { padding-block: 6rem; }   /* 96px  */
.section-lg   { padding-block: 8rem; }   /* 128px */
.section-xl   { padding-block: 10rem; }  /* 160px */

/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(1rem, 4vw, 2.5rem);
}

/* Narrow (for text sections) */
.container-narrow {
  max-width: 720px;
}
```

---

## Visual Effects

### Grain Overlay (noise texture)
Add to body or hero for premium tactility:
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.3;
}
```

### Glass Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-default);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
}
```

### Gradient Mesh Background
```css
.gradient-bg {
  background:
    radial-gradient(ellipse 80% 80% at 50% -20%, rgba(255,255,255,0.07) 0%, transparent 60%),
    var(--bg-primary);
}
```

### Glowing CTA Button
```css
.btn-primary {
  position: relative;
  background: var(--accent);
  color: var(--bg-primary);
  font-weight: 600;
  border-radius: var(--radius-full);
  padding: 0.75rem 1.75rem;
  transition: all var(--duration-fast) var(--ease-out-expo);
}

.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 rgba(255,255,255,0.3);
  transition: box-shadow var(--duration-base) var(--ease-out-expo);
}

.btn-primary:hover::after {
  box-shadow: 0 0 30px 8px rgba(255,255,255,0.1);
}
```

### Animated Border (signature detail)
```css
.animated-border {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.animated-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: conic-gradient(from 0deg, transparent 0%, var(--accent) 20%, transparent 40%);
  animation: border-spin 4s linear infinite;
  border-radius: inherit;
}

.animated-border::after {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-surface);
  border-radius: calc(var(--radius-lg) - 2px);
  z-index: 0;
}

@keyframes border-spin {
  to { transform: rotate(360deg); }
}
```

---

## Marquee Animation

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 20s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}
```

---

## Grid Layouts

### Bento Grid (for features section)
```tsx
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-8">  {/* Wide card */}
  <div className="col-span-12 md:col-span-4">  {/* Tall card */}
  <div className="col-span-12 md:col-span-4">  {/* Square card */}
  <div className="col-span-12 md:col-span-4">  {/* Square card */}
  <div className="col-span-12 md:col-span-4">  {/* Square card */}
</div>
```

### Asymmetric Hero
```tsx
<div className="grid grid-cols-12 gap-8 items-center">
  <div className="col-span-12 lg:col-span-7"> {/* Text */}
  <div className="col-span-12 lg:col-span-5"> {/* Visual */}
</div>
```

---

## Dark/Light Mode Toggle

```tsx
// Use class-based dark mode in tailwind.config.js
// darkMode: 'class'

// Toggle example
const [dark, setDark] = useState(true)
useEffect(() => {
  document.documentElement.classList.toggle('dark', dark)
}, [dark])
```

---

## Responsive Breakpoints (Tailwind)

| Breakpoint | Width  | Usage |
|------------|--------|-------|
| `sm`       | 640px  | Mobile landscape |
| `md`       | 768px  | Tablet |
| `lg`       | 1024px | Desktop |
| `xl`       | 1280px | Wide desktop |
| `2xl`      | 1536px | Ultra-wide |

**Mobile-first always.** Start with mobile layout, add `md:` / `lg:` overrides.