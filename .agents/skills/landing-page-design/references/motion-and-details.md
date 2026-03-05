# Motion & Details Reference

## Animation Philosophy

**Less is more. Precision over abundance.**

- Every animation must have a purpose (guide attention, confirm action, express brand)
- Max 2-3 animated elements visible at any time
- Entry animations should feel editorial, not bouncy
- Hover effects should be subtle and immediate
- Page load: staggered reveals over 800ms total, not longer

---

## Core Animation Curves

```css
:root {
  /* Primary: Smooth deceleration */
  --ease-out:     cubic-bezier(0.22, 1, 0.36, 1);
  /* In-out: For elements entering and settling */
  --ease-in-out:  cubic-bezier(0.65, 0, 0.35, 1);
  /* Elastic: ONLY for playful brands, use sparingly */
  --ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);
  /* Sharp: For quick micro-interactions */
  --ease-sharp:   cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Entry Animations (CSS)

### Fade Up (Default — use on almost everything)
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeup {
  animation: fadeUp 0.7s var(--ease-out) both;
}

/* Staggered children */
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 80ms; }
.stagger > *:nth-child(3) { animation-delay: 160ms; }
.stagger > *:nth-child(4) { animation-delay: 240ms; }
.stagger > *:nth-child(5) { animation-delay: 320ms; }
.stagger > *:nth-child(6) { animation-delay: 400ms; }
```

### Scale In (for cards, modals, highlights)
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-scalein { animation: scaleIn 0.5s var(--ease-out) both; }
```

### Blur In (for hero subheadings, secondary elements)
```css
@keyframes blurIn {
  from {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
.animate-blurin { animation: blurIn 0.8s var(--ease-out) both; }
```

---

## Scroll-Triggered Animations (Intersection Observer)

```javascript
// Minimal implementation — add to page
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.15, rootMargin: '-40px 0px' }
);

document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
```

```css
/* Default hidden state */
[data-animate] {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}

[data-animate].in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger via CSS delay */
[data-animate-delay="1"] { transition-delay: 80ms; }
[data-animate-delay="2"] { transition-delay: 160ms; }
[data-animate-delay="3"] { transition-delay: 240ms; }
[data-animate-delay="4"] { transition-delay: 320ms; }
```

---

## Hover States

### Card Hover (Subtle Lift)
```css
.card {
  transition: transform 0.2s var(--ease-out), 
              border-color 0.2s ease,
              background 0.2s ease;
}
.card:hover {
  transform: translateY(-3px);
  border-color: var(--border-hover);
}
/* NEVER: box-shadow on hover — use border-color instead */
```

### Link Underline (Animated)
```css
.link-animated {
  position: relative;
  text-decoration: none;
  color: var(--text-secondary);
}
.link-animated::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--text-primary);
  transition: width 0.25s var(--ease-out);
}
.link-animated:hover { color: var(--text-primary); }
.link-animated:hover::after { width: 100%; }
```

### Image Zoom (for thumbnails)
```css
.img-container {
  overflow: hidden;
  border-radius: inherit;
}
.img-container img {
  transition: transform 0.5s var(--ease-out);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.img-container:hover img {
  transform: scale(1.04);
}
```

---

## Signature Moments — Implementation

### 1. Gradient Text Hero
```css
.gradient-text {
  background: linear-gradient(135deg, #F5F5F5 0%, #888888 100%);
  /* For colored version: */
  /* background: linear-gradient(135deg, var(--accent) 0%, #4FACFE 100%); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 2. Mouse-Follow Glow (Hero Section)
```javascript
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  hero.style.setProperty('--mouse-x', `${x}%`);
  hero.style.setProperty('--mouse-y', `${y}%`);
});
```
```css
.hero {
  --mouse-x: 50%;
  --mouse-y: 50%;
  position: relative;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    800px circle at var(--mouse-x) var(--mouse-y),
    rgba(99, 102, 241, 0.07),
    transparent 60%
  );
  pointer-events: none;
}
```

### 3. Horizontal Scroll Track
```css
.scroll-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 0 80px 24px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.scroll-track::-webkit-scrollbar { display: none; }

.scroll-track > * {
  flex: 0 0 340px;
  scroll-snap-align: start;
}
```

### 4. Number Counter Animation
```javascript
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const start = performance.now();
  
  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Trigger on scroll into view
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
});
document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));
```

---

## Accessibility Minimums (Non-Negotiable)

```css
/* Focus states */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
  border-radius: 4px;
}

/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Minimum contrast */
/* Text on dark BG: ratio ≥ 4.5:1 */
/* Large text (18px+): ratio ≥ 3:1 */
/* Interactive elements: ratio ≥ 3:1 */
```

---

## What NOT to Do

| ❌ Avoid | Reason |
|----------|--------|
| `box-shadow` on hover | Cheap, heavy, common — use border-color |
| `bounce` easing | Playful = unprofessional for most contexts |
| Animating every element | Visual noise, no focus point |
| `transition: all` | Causes unintended effects on layout properties |
| CSS `transform: scale > 1.05` | Feels aggressive on most elements |
| Looping spinner on loading | Use skeleton screens instead |
| Parallax scroll | Performance issues, often nauseating |
| Auto-playing video without mute | Accessibility and annoyance |
