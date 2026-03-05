# Visual Systems Reference

## Color Systems by Industry

### SaaS / Tech Product
```css
:root {
  --bg:           #0C0C0E;
  --surface:      #141417;
  --surface-2:    #1C1C22;
  --border:       rgba(255, 255, 255, 0.07);
  --border-hover: rgba(255, 255, 255, 0.15);
  --text-primary:   #F0EFF4;
  --text-secondary: #8A8A9A;
  --text-tertiary:  #52525F;
  --accent:       #6366F1;  /* Indigo — swap to brand color */
  --accent-soft:  rgba(99, 102, 241, 0.12);
  --accent-glow:  rgba(99, 102, 241, 0.25);
}
```

### Premium Agency / Studio
```css
:root {
  --bg:           #F4F2EE;
  --surface:      #EDEBE5;
  --surface-2:    #E4E1D8;
  --border:       rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.18);
  --text-primary:   #1A1916;
  --text-secondary: #6B6860;
  --text-tertiary:  #A8A59E;
  --accent:       #C4A35A;  /* Warm gold */
  --accent-soft:  rgba(196, 163, 90, 0.1);
}
```

### Consumer App / Lifestyle
```css
:root {
  --bg:           #FAFAF9;
  --surface:      #F2F0EC;
  --surface-2:    #E8E5DE;
  --border:       rgba(0, 0, 0, 0.06);
  --text-primary:   #1C1917;
  --text-secondary: #78716C;
  --accent:       #E85D3A;  /* Terracotta */
  --accent-soft:  rgba(232, 93, 58, 0.08);
}
```

### AI / Future-forward
```css
:root {
  --bg:           #050508;
  --surface:      #0D0D14;
  --surface-2:    #14141F;
  --border:       rgba(120, 119, 198, 0.12);
  --border-hover: rgba(120, 119, 198, 0.25);
  --text-primary:   #E8E8F0;
  --text-secondary: #7878A0;
  --accent:       #7877C6;
  --accent-2:     #4FACFE;
  --accent-soft:  rgba(120, 119, 198, 0.1);
  /* Gradient mesh for background */
  --mesh-1: rgba(120, 119, 198, 0.15);
  --mesh-2: rgba(79, 172, 254, 0.1);
}
```

---

## Typography Systems

### System 1: Modern SaaS
```css
/* Import */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
/* Neue Montreal — self-hosted or CDN */

:root {
  --font-display: 'Neue Montreal', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}

h1, h2 { font-family: var(--font-display); font-weight: 600; letter-spacing: -0.03em; }
body   { font-family: var(--font-body);    font-weight: 400; line-height: 1.65; }
```

### System 2: Editorial Luxury
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Sans:wght@300;400;500&display=swap');

:root {
  --font-display: 'Cormorant Garamond', serif;
  --font-body:    'IBM Plex Sans', sans-serif;
}

h1 { font-family: var(--font-display); font-weight: 600; font-style: italic; letter-spacing: -0.01em; }
h2 { font-family: var(--font-display); font-weight: 400; }
body { font-family: var(--font-body); font-weight: 300; }
```

### System 3: Creative Agency
```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Manrope:wght@300;400;500&display=swap');

:root {
  --font-display: 'Syne', sans-serif;
  --font-body:    'Manrope', sans-serif;
}

h1 { font-family: var(--font-display); font-weight: 800; letter-spacing: -0.04em; }
h2 { font-family: var(--font-display); font-weight: 700; letter-spacing: -0.03em; }
body { font-family: var(--font-body); font-weight: 400; }
```

### System 4: Bold Tech
```css
@import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');

:root {
  --font-display: 'Clash Display', sans-serif;
  --font-body:    'Inter', sans-serif;
}

h1, h2 { font-family: var(--font-display); font-weight: 700; letter-spacing: -0.02em; }
body   { font-family: var(--font-body); font-size: 15px; }
/* Note: Inter acceptable here as body-only */
```

---

## Background Treatments

### Noise Texture (CSS only)
```css
/* Subtle film grain overlay */
.noise::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
  opacity: 0.4;
}
```

### Gradient Mesh
```css
.mesh-bg {
  background:
    radial-gradient(ellipse 80% 60% at 20% 40%, var(--mesh-1) 0%, transparent 60%),
    radial-gradient(ellipse 60% 80% at 80% 70%, var(--mesh-2) 0%, transparent 60%),
    var(--bg);
}
```

### Dot Grid
```css
.dot-grid {
  background-image: radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

### Line Grid
```css
.line-grid {
  background-image:
    linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 64px 64px;
}
```

---

## Button Design System

### Primary CTA
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--accent);
  color: white;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.01em;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0);
  transition: background 0.2s;
}

.btn-primary:hover::after { background: rgba(255,255,255,0.08); }
.btn-primary:active { transform: scale(0.98); }
```

### Ghost CTA
```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 27px;  /* 1px less to account for border */
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-hover);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background: var(--surface);
  border-color: rgba(255,255,255,0.25);
}
```

### Animated Border CTA (Signature Moment)
```css
.btn-glow {
  position: relative;
  padding: 14px 28px;
  background: var(--accent);
  border-radius: 8px;
  overflow: hidden;
}

.btn-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    var(--accent) 20%,
    transparent 40%
  );
  border-radius: 10px;
  animation: spin-border 3s linear infinite;
  z-index: -1;
}

@keyframes spin-border {
  to { transform: rotate(360deg); }
}
```