# Central de Inteligência: SolveClin Skills Routing

Este arquivo serve como o mapa mestre para o agente de IA/Chat. Sempre que um tópico abaixo for mencionado, o agente **DEVE** ler a Skill correspondente antes de responder para garantir que as respostas sigam os frameworks aprovados.

## 🧭 Mapa de Competências

| Se o assunto for... | Use esta Skill (Caminho) | Foco Principal |
| :--- | :--- | :--- |
| **Interface Visual & Framer** | `/.agents/skills/framer/SKILL.md` | Animações, Overrides e Performance visual. |
| **Vendas & ROI** | `/.agents/skills/sales/SKILL.md` | Fechamento, Pitch Decks e tratamento de objeções. |
| **SEO & Autoridade Local** | `/.agents/skills/seo/SKILL.md` | Auditoria técnica e ranking para clínicas locais. |
| **Escrita & Clareza** | `/.agents/skills/copywriting/SKILL.md` | Eliminar ruído, tom de voz e clareza de mensagem. |
| **Conversão de Landing Pages** | `/.agents/skills/landing-page/SKILL.md` | Estrutura de seções (AIDA, PAS) e CTAs de alta performance. |
| **Psicologia do Consumidor** | `/.agents/skills/marketing-psychology/SKILL.md` | Gatilhos mentais, viés cognitivo e heurísticas de decisão. |
| **Retenção de Clientes** | `/.agents/skills/churn-prevention/SKILL.md` | Fluxos de cancelamento, Dunning e recuperação de faturamento. |
| **Performance React/Next.js** | `/.agents/skills/vercel-react/SKILL.md` | Performance técnica, bundle size e eficiência de servidor. |
| **UX/UI & Acessibilidade** | `/.agents/skills/web-design/SKILL.md` | Padrões de interface, formulários e acessibilidade rigorosa. |
| **Automação n8n** | `/.agents/skills/n8n-workflow/SKILL.md` | Padrões de arquitetura de workflow e resiliência. |
| **Ferramentas MCP n8n** | `/.agents/skills/n8n-mcp/SKILL.md` | Protocolos técnicos de criação e edição de nós via IA. |

---

## 🛠️ Instruções para o Agente

1.  **Context Aware**: Antes de propor qualquer alteração de código ou estratégia de marketing, verifique se há uma skill relevante.
2.  **No Generic Advice**: Substitua conselhos genéricos pelos frameworks específicos nestas diretrizes.
3.  **Cross-Skill Synergy**: Combine skills para resultados melhores (ex: use `marketing-psychology` para fortalecer o `copywriting` de uma `landing-page`).
4.  **Verification**: Após implementar algo, valide contra os anti-padrões listados na skill correspondente.
