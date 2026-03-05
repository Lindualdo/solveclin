# Central de Inteligência: SolveClin Skills Routing

Este arquivo serve como mapa mestre para o agente de IA. Sempre que um tópico abaixo for mencionado, o agente **DEVE** ler a Skill correspondente antes de responder — as respostas devem seguir os frameworks aprovados, nunca conselho genérico.

## 🧭 Mapa de Competências

| Se o assunto for... | Skill (Caminho absoluto) | O que a skill entrega |
| :--- | :--- | :--- |
| **Landing page, página de vendas, hero, CTA, conversão, acima do fold, funil** | `.agents/skills/landing-page-conversion/SKILL.md` | Arquitectura AIDA+PAS, design system, dark/light por público, hero image decision, Framer Standard, componentes TSX prontos. Lê também os `references/` para copy, design tokens e blueprints. |
| **Copy, texto, headline, persuasão, escrita, mensagem, tom de voz** | `.agents/skills/landing-page-conversion/references/copy-structure.md` | Frameworks (AIDA, PAS, StoryBrand), copy section-by-section, princípios de escrita, CTAs em 1ª pessoa, microcopy, triggers psicológicos. |
| **Psicologia do consumidor, gatilhos mentais, ancoragem, preço, comportamento, decisão** | `.agents/skills/marketing-psychology/SKILL.md` | JTBD, Loss Aversion, Hick's Law, BJ Fogg, IKEA Effect, Anchoring/Decoy, Rule of 100, Mental Accounting. |
| **Animações, Framer Motion, performance visual, micro-interações, variantes, scroll** | `.agents/skills/framer/SKILL.md` | LazyMotion, re-render prevention, variants, gestures, Framer Code Components vs Overrides, canvas quirks. |
| **UI/UX, acessibilidade, formulários, foco, hover, estados interactivos** | `.agents/skills/web-design-guidelines/SKILL.md` | Focus states, form best practices, text-wrap, animation performance, anti-patterns de interface. |
| **SEO, ranking local, clínicas, Google My Business, palavras-chave, meta tags** | `.agents/skills/seo/SKILL.md` | Auditoria técnica, on-page SEO, local SEO para clínicas de saúde. |
| **Vendas, pitch, objeções, ROI, proposta comercial, fecho** | `.agents/skills/sales/SKILL.md` | Frameworks de fecho, pitch decks, tratamento de objeções, comunicação de valor baseada em ROI. |
| **Retenção, churn, cancelamento, recuperação de clientes, dunning** | `.agents/skills/churn-prevention/SKILL.md` | Fluxos de cancelamento, estratégias de retenção, recuperação de faturamento involuntário. |
| **React, Next.js, performance, bundle, SSR, waterfall, Vercel** | `.agents/skills/vercel-react/SKILL.md` | Optimização de performance, eliminação de waterfalls, eficiência server-side para Next.js. |
| **n8n, workflow, automação, nós, integração** | `.agents/skills/n8n-workflow/SKILL.md` | Padrões de arquitectura de workflow, resiliência, boas práticas de automação. |
| **n8n MCP, edição de nós por IA, validação de workflow** | `.agents/skills/n8n-mcp/SKILL.md` | Protocolos técnicos de criação e edição de nós n8n via ferramentas MCP. |

---

## 🛠️ Instruções para o Agente

1. **Lê antes de responder** — Nunca responda sobre um tópico listado sem antes ler a skill correspondente.
2. **Sem conselhos genéricos** — Se existe uma skill, os frameworks dela substituem qualquer resposta padrão.
3. **Combine skills** — Para landing pages: usa `landing-page-conversion` + `marketing-psychology` + `web-design-guidelines` em conjunto.
4. **Valida contra anti-padrões** — Após implementar, verifica se a solução viola algum anti-padrão listado na skill.
5. **Honestidade sobre limitações** — Ver `HONESTY_PROTOCOL.md` antes de qualquer análise visual ou relatório com dados externos.
