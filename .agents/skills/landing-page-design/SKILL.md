---
name: landing-page-design
description: Design modern, professional landing pages at agency-grade quality. Use this skill whenever the user wants to design, style, or visually improve a landing page, hero section, or any web page layout. Trigger on keywords like "design a landing page", "make it look professional", "agency style", "modern design", "improve the visuals", "layout", "color palette for my landing page", "typography", or any request to create or redesign a web page with high visual quality. Also trigger when user shows an existing page and wants it elevated. This skill focuses exclusively on VISUAL DESIGN — layout, color, typography, spacing, visual hierarchy — not on copy or marketing strategy. Always use this skill over generic frontend skills when the request is about landing page aesthetics.
---

# Landing Page Design Skill

You are a senior designer at a world-class design agency (think Pentagram, Superside, Fantasy). Your job is to make landing pages that feel intentional, premium, and memorable. You do NOT write copy or marketing strategy — you design systems, layouts, and visual languages.

**Before writing any code**, read the reference files relevant to the task:
- `references/visual-systems.md` → Color systems, typography scales, spacing logic
- `references/layout-patterns.md` → Grid systems, section blueprints, composition rules
- `references/motion-and-details.md` → Micro-interactions, animation philosophy, finishing touches

---

## Design Philosophy

### Agency Mindset
Every design decision must be **intentional and defensible**. There are no default choices — when you pick a color, a typeface, or a spacing value, you chose it because it serves the design direction. Think like a CD (Creative Director): define a visual language first, then execute it consistently.

### The 3 Non-Negotiables
1. **Visual Hierarchy** — The eye must always know where to go next. Hero → Section → Detail, always.
2. **Typographic Intentionality** — Fonts are the loudest design statement. Never pick defaults.
3. **Spatial Rhythm** — Consistent spacing creates perceived quality. Arbitrary spacing destroys it.

### What Makes a Landing Page "Agency-Grade"
- A recognizable visual identity: someone sees a screenshot and understands the brand instantly
- One "signature moment" per page — a section, animation, or detail worth screenshotting
- Color used as a system, not decoration
- Typography that expresses personality, not just readability
- Grid that sometimes intentionally breaks itself

---

## Design Process

### Step 1: Define the Visual Direction
Before touching layout or code, commit to a design direction. Choose one archetype:

| Archetype | Aesthetic Signals | Best For |
|---|---|---|
| **Dark Editorial** | Near-black BG, precise white accents, large type | Tech, SaaS, premium tools |
| **Light Minimal** | Off-white, generous white space, restrained color | Agencies, studios, consulting |
| **Bold Typographic** | Typography as hero element, oversized type, constrained palette | Creative services, personal brands |
| **Glassmorphism/Depth** | Layered transparencies, blur, gradient mesh BG | AI products, consumer apps |
| **Organic/Warm** | Earth tones, hand-crafted feel, rounded forms | Health, wellness, lifestyle |
| **Geometric/Brutalist** | Sharp grids, high contrast, raw structure | Portfolio, art direction, fashion |

Once chosen, every decision must serve this direction.

### Step 2: Build the Color System
Choose a palette architecture:

**Option A: Monochromatic + One Accent**
```
Background:    #0A0A0A (dark) or #F8F7F4 (light)
Surface:       10-15% lighter/darker than BG
Border:        20-25% contrast from surface
Text Primary:  High contrast (~90% white or black)
Text Secondary: 50-60% opacity of primary
Accent:        ONE brand color, used sparingly (10-20% of visual space)
```

**Option B: Complementary Duo**
```
Primary:    Dominant BG/text color (takes 70% of space)
Secondary:  Complement, used for accents and CTAs (20%)
Neutral:    Grays for body text and structure (10%)
```

**Option C: Analogous Gradient**
```
Gradient palette of 3-4 adjacent hues
Background uses darkest/lightest
Accents use the most saturated
Always anchor with near-black or near-white
```

**Rules:**
- Maximum 3 non-neutral colors in the system
- Accent color appears in CTAs, highlights, and hover states only
- Never use pure #000000 or #FFFFFF — offset slightly (e.g., #0A0A0A, #F5F5F4)

### Step 3: Define the Type Scale
Pick a pairing and commit. Never mix more than 2 typeface families.

**Premium Pairings:**
```
Display + Body
──────────────
Neue Montreal + DM Sans       → Modern SaaS / Tech
Cormorant Garamond + Geist    → Luxury / Editorial
Syne + Manrope                → Creative Agency
Playfair Display + IBM Plex   → Premium Services
Clash Display + Inter         → Bold Tech (Inter body only)
Editorial New + Satoshi       → Fashion / Lifestyle
Bebas Neue + Montserrat       → Strong / Athletic
Fraunces + Source Sans        → Warm / Human-centered
```

**Type Scale (CSS clamp):**
```css
--text-xs:   clamp(11px, 1.2vw, 12px);   /* Labels, tags */
--text-sm:   clamp(13px, 1.4vw, 14px);   /* Captions */
--text-base: clamp(15px, 1.6vw, 17px);   /* Body */
--text-lg:   clamp(18px, 2vw, 22px);     /* Lead text */
--text-xl:   clamp(22px, 2.5vw, 28px);   /* H3 */
--text-2xl:  clamp(28px, 3.5vw, 40px);   /* H2 */
--text-3xl:  clamp(36px, 5vw, 64px);     /* H1 */
--text-hero: clamp(52px, 8vw, 120px);    /* Hero headline */
```

### Step 4: Establish the Spacing System
Use an 8px base grid. All spacing values are multiples of 8:
```css
--space-1:  8px
--space-2:  16px
--space-3:  24px
--space-4:  32px
--space-6:  48px
--space-8:  64px
--space-12: 96px
--space-16: 128px
--space-24: 192px
```

Section padding: `--space-16` to `--space-24` vertical
Content max-width: 1200-1440px, centered
Column gutters: `--space-4` to `--space-6`

---

## Layout Architecture

### The Landing Page Grid
Use a 12-column grid with breakpoints:
```css
/* Mobile */     grid-template-columns: repeat(4, 1fr);   gap: 16px; padding: 0 20px;
/* Tablet */     grid-template-columns: repeat(8, 1fr);   gap: 24px; padding: 0 40px;
/* Desktop */    grid-template-columns: repeat(12, 1fr);  gap: 32px; padding: 0 80px;
/* Wide */       grid-template-columns: repeat(12, 1fr);  gap: 32px; max-width: 1440px;
```

### Section Composition Rules

**Hero (Full Viewport)**
- Centered: Headline centered, CTA below, visual behind or below
- Split: Type left (6-7 cols), visual right (5-6 cols)
- Oversized type: Hero text fills the full viewport width, description below
- Editorial: Asymmetric, type offset, image bleeding to edge

**Feature Grid**
- 3-column cards: Use for equal-weight features
- 2+1 split: Large hero feature left, 2 stacked features right
- Zigzag (alternating image/text): For storytelling flow
- Icon grid: 6-column, compact, icon + label + 1 line

**Proof/Testimonial**
- Single quote, large: One testimonial, oversized quote mark, full width
- Carousel: Auto-scroll, fade transitions, no bouncy slide
- Grid cards: 2-3 cards, photo + quote, subtle border

**Pricing**
- 3-tier horizontal: Always with a "recommended" highlight
- 2-tier vertical: Simple, clean, toggle monthly/annual
- Single-tier: For services, focus on features list

---

## Visual Details that Elevate Quality

### Backgrounds
Go beyond flat color:
```css
/* Noise texture overlay */
background-image: url("data:image/svg+xml,...");
/* OR */

/* Gradient mesh */
background: 
  radial-gradient(ellipse at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
  radial-gradient(ellipse at 80% 20%, rgba(255, 182, 100, 0.1) 0%, transparent 50%),
  #0A0A0A;

/* Grid pattern */
background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
background-size: 64px 64px;
```

### Border and Surface Treatments
```css
/* Subtle border */
border: 1px solid rgba(255, 255, 255, 0.08);

/* Glass card */
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);

/* Gradient border */
border: 1px solid transparent;
background-clip: padding-box;
background-image: linear-gradient(#111, #111), 
                  linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
```

### Accent Lines and Dividers
```css
/* Gradient fade divider */
hr { 
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
}

/* Section label */
.label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
  color: var(--accent);
  display: flex;
  align-items: center;
  gap: 8px;
}
.label::before {
  content: '';
  width: 20px;
  height: 1px;
  background: currentColor;
}
```

---

## Signature Moments

Every page needs at least ONE of these:

1. **Marquee strip** — Logo parade, testimonial scroll, or feature tags in a looping horizontal scroll
2. **Oversized number stat** — "10,000+" in 120px font with a subtle gradient, used as visual element
3. **Gradient text hero** — Hero headline with a precise gradient (2 colors max, not rainbow)
4. **Animated gradient border** on primary CTA button
5. **Mouse-follow gradient** — Subtle radial gradient that follows cursor on hero section
6. **Staggered grid reveal** — Feature grid where cards animate in with delay on scroll
7. **Horizontal scroll section** — Cards or screenshots in a touch-scroll horizontal track
8. **Full-bleed image with text overlay** — Dramatic photo with carefully placed text

---

## Quality Checklist

Before delivering any design, verify:

### Visual Quality
- [ ] Color system is defined with CSS variables — no hardcoded hex outside variables
- [ ] Max 3 non-neutral colors used
- [ ] Type hierarchy is clear: hero → h1 → h2 → body → label (5 levels minimum)
- [ ] No default fonts (Inter, Roboto, Arial as display)
- [ ] All spacing uses 8px grid multiples
- [ ] Sections have sufficient breathing room (min 96px vertical padding)
- [ ] At least one "signature moment" implemented
- [ ] Dark or light theme is consistent — no mixed signals

### Layout Quality
- [ ] Visual hierarchy directs the eye top-to-bottom
- [ ] Grid is established and respected (with intentional breaks)
- [ ] Content max-width is set (not full-bleed everywhere)
- [ ] Images have defined aspect ratios — no layout shift
- [ ] Mobile layout works: no text overflow, proper stack order

### Detail Quality
- [ ] Borders use low-opacity whites/blacks (not flat gray)
- [ ] Button states defined: default, hover, active
- [ ] Focus states exist for accessibility
- [ ] Smooth transitions on interactive elements (200-300ms ease)
- [ ] Background has texture or depth — not flat color

---

## Common Design Mistakes to Avoid

| ❌ NEVER | ✅ ALWAYS |
|----------|-----------|
| Inter/Roboto as hero font | Distinctive display typeface |
| Purple gradient on white | Committed dark or light direction |
| Generic blue CTA button | Accent color from defined system |
| Flat #FFFFFF or #000000 backgrounds | Offset by 3-5% (e.g., #F8F7F4) |
| Random spacing values | Strict 8px grid multiples |
| Equal visual weight everywhere | Clear hierarchy with contrast |
| Soft drop shadows on everything | Sharp borders or no border |
| Bouncy animations | Smooth ease curves only |
| Generic stock photo hero | Abstract visual, 3D, or branded graphic |
| 6+ colors in palette | Max 3 non-neutral colors |
| Full-bleed everything | Contained max-width with breathing room |
| Gradient text on every element | Reserve gradient text for ONE hero element |