---
name: solveclin-theme
description: Design system and visual identity for SolveClin — a tech/automation company serving dental, health, and aesthetics clinics. Use this skill whenever building, designing, or styling anything for SolveClin: landing pages, sections, components, dashboards, proposals, or any visual deliverable. Triggers on: "solveclin", "nossa landing page", "nossa página", "para as clínicas", "nosso site", "página de conversão", "layout para o cliente", or any request to create UI for the company's services (process engineering, AI automation, system integrations, conversion pages, AI agents, dashboards). Always use this skill before writing any design code for SolveClin. This skill IS the source of truth for all brand decisions.
---

# SolveClin — Design System & Visual Identity

SolveClin entrega engenharia de processos, automações com IA, integrações entre sistemas, landing pages de conversão, agentes de atendimento e dashboards profissionais para **clínicas de odontologia, saúde e estética**.

O cliente final não é um CTO. É um dono de clínica que quer **crescimento e controle** — não quer sentir que está comprando tecnologia, quer sentir que está comprando resultado.

---

## Brand Personality

| Atributo | Expressão Visual |
|---|---|
| **Confiável** | Espaçamento generoso, tipografia clara, nada piscando sem motivo |
| **Preciso** | Grid rígido, alinhamentos exatos, hierarquia óbvia |
| **Humano** | Tons quentes, não frios. Sem dark mode agressivo |
| **Premium mas acessível** | Não é banco suíço, não é app de festinha |
| **Orientado a resultado** | Mostrar dados reais, dashboards, interfaces — não ícones abstratos |

**Frase-guia de design:** *"Uma clínica bem administrada, visualizada."*

---

## Color System

```css
:root {
  /* Backgrounds */
  --bg:           #F7F5F2;   /* Off-white quente — base de tudo */
  --surface:      #EEECEA;   /* Cards, painéis internos */
  --surface-2:    #E5E2DE;   /* Hover de cards, inputs */
  --surface-dark: #1C1A18;   /* Seções de contraste, rodapé */

  /* Borders */
  --border:       rgba(26, 24, 22, 0.07);
  --border-hover: rgba(26, 24, 22, 0.16);
  --border-dark:  rgba(255, 255, 255, 0.08);  /* Para surface-dark */

  /* Text — fundo claro */
  --text-primary:   #1A1816;
  --text-secondary: #6B6560;
  --text-tertiary:  #A8A39D;

  /* Text — fundo escuro */
  --text-dark-primary:   #F0EDEA;
  --text-dark-secondary: #8A8580;

  /* Accent — Verde-musgo */
  --accent:       #2D6A4F;
  --accent-hover: #245A42;
  --accent-soft:  rgba(45, 106, 79, 0.08);
  --accent-mid:   rgba(45, 106, 79, 0.15);

  /* Accent secundário — para highlights e badges */
  --accent-2:     #5C8A6E;   /* Verde mais claro, usado em tags e ícones */

  /* Status */
  --success: #2D6A4F;
  --warning: #B45309;
  --error:   #9B2C2C;
}
```

**Regras de uso:**
- `--accent` aparece em: CTAs primários, links ativos, destaques, ícones de features
- Nunca usar mais de 2 tons de verde simultâneos
- `--surface-dark` usada em 1–2 seções da página (hero alternativo, CTA final, rodapé)
- Zero gradientes roxo, azul neon, ou combinações "tech genérico"

---

## Typography System

### Fontes

```css
/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400&family=Manrope:wght@300;400;500;600&display=swap');

:root {
  --font-display: 'Fraunces', serif;   /* Headlines, hero, seção titles */
  --font-body:    'Manrope', sans-serif; /* Tudo mais */
}
```

**Por quê Fraunces:**
Serifada contemporânea com personalidade. Transmite autoridade e cuidado — exatamente o que uma clínica premium precisa sentir. Não é Arial de hospital nem sans-serif de startup. Tem alma.

**Por quê Manrope:**
Geométrica humanista. Legível, moderna, limpa. Complementa a serifa sem competir.

### Escala Tipográfica

```css
:root {
  --text-label:  11px;   /* Tags, labels, legendas — UPPERCASE + tracking */
  --text-sm:     13px;   /* Captions, notas de rodapé */
  --text-base:   15px;   /* Corpo padrão */
  --text-lg:     17px;   /* Corpo de destaque, leads */
  --text-xl:     clamp(20px, 2.5vw, 26px);   /* H3, cards */
  --text-2xl:    clamp(26px, 3.5vw, 38px);   /* H2, seção title */
  --text-3xl:    clamp(36px, 5vw, 56px);     /* H1 */
  --text-hero:   clamp(48px, 7vw, 88px);     /* Hero headline */
}

/* Aplicação */
h1, .hero-title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--text-primary);
}

h2, .section-title {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.15;
}

h3 {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: 600;
  letter-spacing: -0.015em;
}

body, p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.7;
  color: var(--text-secondary);
}

.label {
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
}
```

---

## Spacing System (8px grid)

```css
:root {
  --sp-1:  8px;
  --sp-2:  16px;
  --sp-3:  24px;
  --sp-4:  32px;
  --sp-6:  48px;
  --sp-8:  64px;
  --sp-12: 96px;
  --sp-16: 128px;
  --sp-20: 160px;
}

/* Seções */
.section        { padding: var(--sp-16) var(--sp-8); }
.section--tight { padding: var(--sp-12) var(--sp-8); }

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--sp-8);
}

@media (max-width: 1024px) { .container { padding: 0 var(--sp-6); } }
@media (max-width: 640px)  { .container { padding: 0 var(--sp-3); } }
```

---

## Border Radius

```css
:root {
  --radius-sm:  6px;   /* Badges, tags, inputs */
  --radius-md:  10px;  /* Cards, botões */
  --radius-lg:  16px;  /* Painéis, modais, hero visual */
  --radius-xl:  24px;  /* Seções destacadas, containers visuais grandes */
}
```

**Regra:** 10px como padrão. Transmite moderno e profissional sem infantilizar. Nunca usar `border-radius: 9999px` em cards — apenas em badges e pills de status.

---

## Component Library

### Botão Primário (CTA)
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-1);
  padding: 13px 24px;
  background: var(--accent);
  color: #FFFFFF;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.01em;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  text-decoration: none;
}
.btn-primary:hover  { background: var(--accent-hover); }
.btn-primary:active { transform: scale(0.98); }
```

### Botão Secundário (Ghost)
```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-1);
  padding: 12px 23px;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-hover);
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 500;
  transition: background 0.2s ease, border-color 0.2s ease;
}
.btn-ghost:hover {
  background: var(--surface-2);
  border-color: rgba(26, 24, 22, 0.25);
}
```

### Service Card
```css
.service-card {
  padding: var(--sp-4);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}
.service-card:hover {
  border-color: var(--border-hover);
  background: var(--bg);
  transform: translateY(-2px);
}
.service-card__icon {
  width: 44px;
  height: 44px;
  background: var(--accent-soft);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  margin-bottom: var(--sp-3);
}
.service-card__title {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.015em;
  margin-bottom: var(--sp-1);
}
.service-card__desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
}
```

### Section Label
```css
.section-label {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-1);
  font-size: var(--text-label);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: var(--sp-2);
}
.section-label::before {
  content: '';
  width: 18px;
  height: 1px;
  background: var(--accent);
  flex-shrink: 0;
}
```

### Dashboard Preview Card (Assinatura visual)
```css
/* Usado para mostrar dashboards e interfaces como prova de produto */
.dashboard-preview {
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  overflow: hidden;
  background: var(--surface-dark);
  position: relative;
}
.dashboard-preview::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 70% 50% at 30% 60%, rgba(45, 106, 79, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse 50% 70% at 80% 20%, rgba(45, 106, 79, 0.06) 0%, transparent 60%);
  pointer-events: none;
}
.dashboard-preview__header {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-dark);
  display: flex;
  align-items: center;
  gap: 8px;
}
.dashboard-preview__dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--surface-2);
}
```

---

## Page Structure para Landing Principal

```
1. NAV          — Logo + links + CTA "Agendar conversa"
2. HERO         — Headline serifa + subheadline + CTA + dashboard preview
3. CLIENTES     — Logos de clínicas (marquee sutil)
4. SERVIÇOS     — Grid 3 colunas dos 6 serviços
5. COMO FUNCIONA— 3 passos: diagnóstico → implementação → resultado
6. RESULTADOS   — Números reais: tempo economizado, leads, etc.
7. DASHBOARDS   — Showcase visual das interfaces entregues
8. DEPOIMENTOS  — 2–3 donos de clínica com foto e resultado específico
9. CTA FINAL    — Seção escura (surface-dark), headline direta + botão
10. RODAPÉ      — Minimal
```

---

## Backgrounds para Seções

### Seção padrão (maioria)
```css
background: var(--bg);
```

### Seção com profundidade (features, serviços)
```css
background: var(--surface);
border-top: 1px solid var(--border);
border-bottom: 1px solid var(--border);
```

### Seção de contraste (CTA final, hero alternativo)
```css
background: var(--surface-dark);
/* Adicionar textura sutil */
background-image:
  radial-gradient(ellipse 80% 60% at 20% 50%, rgba(45, 106, 79, 0.12) 0%, transparent 55%),
  linear-gradient(rgba(255,255,255,.015) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.015) 1px, transparent 1px);
background-size: auto, 48px 48px, 48px 48px;
```

---

## O que NUNCA fazer nesta marca

| ❌ Proibido | Motivo |
|---|---|
| Fundo preto (`#000`) | Frio demais para saúde |
| Gradiente roxo/azul neon | Parece fintech genérico |
| Ícones flat coloridos em excesso | Parece apresentação de PowerPoint |
| Imagens de stock com médico sorrindo | Genérico, não comunica tech |
| Tipografia só sans-serif | Perde autoridade e diferenciação |
| Cards com `box-shadow` pesada | Parece UI de 2015 |
| Animações bounce | Incongruente com posicionamento premium |
| Mais de 2 cores de destaque | Dilui o sistema |
| Texto justificado | Prejudica leitura e parece formal demais |
| `border-radius: 0` em tudo | Brutalism não combina com saúde |