---
name: landing-page-conversion
description: Build high-conversion landing pages with professional agency-grade design using Next.js and Tailwind CSS. Use this skill whenever the user wants to create a landing page, sales page, product page, service page, or any page designed to convert visitors into leads or customers. Also trigger for requests about hero sections, CTAs, above-the-fold design, sales funnels, or any page where conversion optimization matters. Use even if they say "just a simple landing page" — high quality is always worth it. Incorporates proven conversion copywriting structure (AIDA/PAS), Framer-style animations with Framer Motion, dark/light minimalist aesthetics, and anti-AI-pattern design principles. Results in professional output comparable to top Framer templates.
---

# Landing Page Conversion Skill

Creates agency-grade, high-conversion landing pages in Next.js that look and feel like premium Framer templates — but fully custom, animated, and conversion-optimized.

**Before writing any code**, read:
- `references/design-system.md` → Tokens, typography, animation presets
- `references/copy-structure.md` → Conversion copywriting formulas and section order
- `references/component-patterns.md` → Reusable section blueprints (Hero, Social Proof, Pricing, etc.)

---

## Core Philosophy

### Anti-AI Pattern Mandate
Never produce generic AI output. Every page must feel **intentionally designed**, not assembled from a template. Signals of quality:
- Unexpected typographic choices (not Inter, not Space Grotesk)
- Custom cursor or subtle grain overlay
- At least one "signature moment" — a section or detail the user will screenshot and share
- Micro-interactions that feel choreographed, not random
- Negative space used as a design element, not an accident

### The Framer Standard
Reference aesthetic: `landeros.framer.website` and `green-devices-212747.framer.app`
- **Theme is audience-driven** — see Style × Audience table below
- Motion that feels editorial, not bouncy
- Typography that's large, confident, and well-kerned
- Cards and sections with glass-morphism or sharp borders — never generic shadows
- Grid layouts that sometimes break the grid intentionally
- Organic blob shapes or mesh gradients as background texture (2025 trend confirmed by Framer/Webflow)

---

## Padrões Modernos Convergentes 2025/2026

O que as fontes abaixo convergem como padrão profissional moderno — independente de dark ou light:

| Padrão | Descrição | Fonte |
|--------|-----------|-------|
| **Minimalismo com whitespace dominante** | Tipografia grande sem serifa, foco no produto e no copy. O silêncio visual é design, não vazio. | GetResponse |
| **Tipografia oversized como statement** | Headlines que ocupam toda a largura. Não é só legibilidade — é impacto visual. Animações sutis de scroll e hover completam o efeito. | Elephant in the Boardroom |
| **Bold serif + paleta com personalidade** | SaaS em 2025/2026 não tem medo de ter voz própria. Serifas expressivas em headlines, com paletas confiantes e intencionais. | SaasFrame |
| **Narrative sequencing + CTAs persistentes** | Cada scroll revela uma nova camada da história. CTAs aparecem no momento certo, não no topo. Assimetria intencional com whitespace é parte do layout. | Fermat Commerce |

### Implicações Práticas para Implementação

- **Tipografia**: Usar `clamp()` agressivo — headings que crescem do mobile ao widescreen. Considerar serifa para H1 e sans-serif para body (contraste intencional).
- **Whitespace**: Padding de secção mínimo de `8rem` — não comprimir para "caber mais".
- **CTAs persistentes**: O botão principal deve aparecer no Hero, no meio da página (após Features), e no Final CTA. **Mínimo 3×**.
- **Narrative scroll**: Cada secção resolve uma dúvida ou objeção da anterior. Não são blocos independentes — são capítulos.
- **Assimetria**: Pelo menos 1 secção com layout assimétrico (texto + visual em proporção 7/5 ou 8/4, não 6/6).

---

## Tech Stack

```
Next.js 14+ (App Router)
Tailwind CSS
Framer Motion (animations)
next/font (Google Fonts or local)
next/image (optimized images)
Vercel (deployment target)
```

**Key dependencies to install:**
```bash
npm install framer-motion
npm install @radix-ui/react-dialog  # for modals/overlays if needed
npm install lucide-react            # icons
```

---

## Conversion Architecture

### Section Order (AIDA + PAS hybrid)
Every high-converting landing page follows this flow. Do NOT skip or reorder without a reason:

1. **NAV** — Minimal. Logo + 3-4 links + 1 CTA button
2. **HERO** — Headline + subheadline + primary CTA + visual proof
3. **SOCIAL PROOF BAR** — Logos or "trusted by X companies"
4. **PROBLEM** — Agitate the pain. Make them feel it.
5. **SOLUTION** — Introduce the offer as the answer
6. **FEATURES/HOW IT WORKS** — 3-step process or feature grid
7. **PROOF** — Testimonials, case studies, results/metrics
8. **OFFER/PRICING** — Clear tiers, highlight recommended
9. **FAQ** — Handle objections
10. **FINAL CTA** — Repeat the primary offer with urgency/scarcity
11. **FOOTER** — Minimal. Links + legal + social

**See `references/copy-structure.md` for copywriting formulas per section.**

---

## Design System Summary

### Color Strategy — Style × Audience (Research-Backed)

> **Choose theme based on the target audience, not personal preference.**

| Público-alvo | Tema recomendado | Razão |
|---|---|---|
| Tech, SaaS, AI B2B, gaming, crypto | **Dark Professional** | Inovação, modernidade, premium tech |
| Healthcare, clínicas, bem-estar, consultoria, finanças | **Light Editorial** | Confiança, clareza, profissionalismo |
| Startups híbridas, agências de design | **Misto** (dark hero + light sections) | Melhor dos dois mundos |
| Produtos com grande base de utilizadores | **Adaptive** (toggle dark/light) | Personalização máxima |

**Fontes de pesquisa (Março 2025):**
- vezadigital.com: *"Some AI companies are leaning towards 'bright confidence' and 'saying bye to dark mode' to build trust"*
- b12.io: *"Light mode conveys professionalism, clarity, and trustworthiness — especially in healthcare"*
- framer.com, webflow.com, smashingmagazine.com: dark mode gaining strength for tech; light for trust-driven B2B
- Tendência confirmada: Bento Grids, organic blobs, glassmorphism 2.0, bold typography — independente do tema

---

**Dark Professional**
```css
--bg: #0A0A0A
--surface: #111111
--border: #1F1F1F
--text-primary: #F5F5F5
--text-secondary: #888888
--accent: #FFFFFF or brand color
--accent-soft: rgba(255,255,255,0.08)
```

**Light Editorial**
```css
--bg: #FAFAFA
--surface: #F0F0F0
--border: #E5E5E5
--text-primary: #0A0A0A
--text-secondary: #6B6B6B
--accent: brand color (violet, teal, etc.)
```

**Brand-driven** — derive from client's brand color, use it sparingly as accent only.

### Typography Rules
- **Display/Hero**: Large (clamp 48px → 96px), tight letter-spacing (-0.02em to -0.04em), font-weight 600-800
- **Body**: 16-18px, line-height 1.6-1.7, weight 400
- **Labels/Tags**: UPPERCASE, 11-12px, tracking 0.1em
- **Never use**: Inter, Roboto, Arial as primary display font

**Font pairings to choose from:**
- Clash Display + DM Sans
- Editorial New + Geist
- Syne + Manrope
- Playfair Display + IBM Plex Sans
- PP Neue Montreal + Inter (if Inter is body only)

**See `references/design-system.md` for full token set.**

---

## Animation Presets (Framer Motion)

### Entry animation (use on every section)
```tsx
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}
```

### Staggered children
```tsx
const container = {
  animate: { transition: { staggerChildren: 0.08 } }
}
```

### Scroll-triggered (use IntersectionObserver or Framer Motion viewport)
```tsx
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
```

### Hover interactions
```tsx
whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
```

### Magnetic button (signature moment)
```tsx
// Track mouse position relative to button center, apply subtle translate
// See references/component-patterns.md for full implementation
```

---

## Component Blueprints

### Hero Section Checklist
- [ ] Badge/label above headline (e.g. "New · AI-Powered Platform")
- [ ] H1: Benefit-first, bold, large. Max 8 words per line.
- [ ] Subheadline: 1-2 sentences expanding the promise
- [ ] Primary CTA button (high contrast, clear action word)
- [ ] Secondary CTA (ghost/outline style, lower friction)
- [ ] Social proof micro-element (avatars + "X customers" or star rating)
- [ ] Hero visual: **optional and conditional** — see decision framework below

### Hero Image — Quando Usar (e Quando Não)

> **O visual no Hero não é obrigatório. A decisão deve ser estratégica, não estética.**

**✅ Usar imagem quando:**
| Situação | Razão |
|---|---|
| Produto físico, app com UI, hardware | A imagem mostra concretamente o que se vende |
| Serviço com resultado visual (design, fotografia, arquitetura) | Prova de qualidade imediata |
| Marca pessoal ou B2B de serviço | Rosto humano olhando para a câmera constrói confiança — decisivo para conversão *(Eloqwnt)* |
| B2C emocional (lifestyle, moda, viagens) | A imagem vende o estilo de vida, não o produto |

**❌ Evitar imagem (ou usar com muito cuidado) quando:**
| Situação | Razão |
|---|---|
| SaaS, agência, AI, serviços abstratos | Imagem genérica atrapalha mais do que ajuda |
| Hero com texto + CTA claros e diretos | Páginas text-first convertem até 20% a mais — menos fadiga de decisão e leitura mais natural *(Fermat Commerce)* |
| Full-width image sem contexto claro | Distrai com visual ambíguo que não comunica o valor da oferta *(Fermat Commerce)* |

**Regra prática:** Se remover a imagem e o copy ainda comunicar o valor por si só — não usa imagem.

### CTA Button Rules
- Primary: high contrast, background fill, verb + object ("Start Free", "Book a Call", "See Pricing")
- NEVER: "Click here", "Submit", "Learn More" as primary CTA
- Size: min 48px height, 20px horizontal padding
- Mobile: full width below 640px

### Social Proof Patterns
- Logo strip: grayscale logos, 60-70% opacity, marquee scroll animation
- Testimonial: photo + name + role + company + quote. No fake testimonials.
- Metrics bar: large number + label (e.g., "10,000+ customers", "4.9★ rating")

**Full component code in `references/component-patterns.md`.**

---

## File Structure

```
/app
  /page.tsx              ← Main landing page
  /layout.tsx            ← Fonts, metadata, global providers
  /globals.css           ← CSS variables, base styles
/components
  /sections
    Hero.tsx
    SocialProof.tsx
    Features.tsx
    Testimonials.tsx
    Pricing.tsx
    FAQ.tsx
    CTA.tsx
  /ui
    Button.tsx
    Badge.tsx
    Card.tsx
    Marquee.tsx
    AnimatedSection.tsx  ← Reusable scroll-trigger wrapper
/lib
  /utils.ts
/public
  /fonts                 ← Local fonts if needed
```

---

## Quality Checklist (run before delivering)

### Visual
- [ ] Dark/light theme is consistent throughout — no mixed signals
- [ ] Font hierarchy is clear: display > heading > body > label
- [ ] Spacing is intentional — sections have generous padding (80-160px)
- [ ] One "signature detail" that elevates the page above generic
- [ ] Mobile layout tested (text doesn't overflow, CTAs are full-width)

### Conversion
- [ ] Hero headline communicates the #1 benefit in under 8 words
- [ ] Primary CTA appears at least 3× on the page
- [ ] Social proof is present above the fold or within first scroll
- [ ] Objections are handled (FAQ or inline in features)
- [ ] There is one clear "next step" — no decision paralysis

### Technical
- [ ] All images use next/image with proper alt text
- [ ] Fonts loaded via next/font (no FOUT)
- [ ] Animations use `viewport={{ once: true }}` to avoid re-triggering
- [ ] Page is accessible: contrast ratios pass, interactive elements have focus states
- [ ] No hardcoded colors — all use CSS variables

---

## Deployment (Vercel)

```bash
# Init project
npx create-next-app@latest my-landing --typescript --tailwind --app
cd my-landing
npm install framer-motion lucide-react

# Deploy
npx vercel
```

Add to `next.config.js` for production:
```js
const nextConfig = {
  images: { domains: ['your-image-cdn.com'] },
  experimental: { optimizeCss: true }
}
```

---

## Common Mistakes to Avoid

| ❌ DON'T | ✅ DO |
|----------|-------|
| Use Inter as display font | Pick a distinctive display font |
| Purple gradient hero | Dark/neutral with precise accents |
| Generic card shadows | Sharp borders or glass effect |
| Bouncy spring animations | Smooth ease curves (0.22, 1, 0.36, 1) |
| "Learn More" CTA | Action-specific CTA ("Start Free Trial") |
| Wall of text features | Icons + short label + 1-line description |
| Fake testimonials | Placeholders clearly marked as [CLIENT NAME] |
| Cluttered footer | Minimal footer: links + legal + social |
| Same font size for everything | Clear typographic scale with 5+ levels |
| Animations on every hover | Reserve animation for impactful moments |