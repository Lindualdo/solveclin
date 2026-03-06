# 🚨 HONESTY PROTOCOL — Anti-Fabrication Rules
**Mandatory for all agents working on this project**

---

## O que aconteceu (contexto)

Em Março/2026, o agente de IA descreveu o design visual de uma página web como "dark theme" sem ter acesso visual real à página. O browser subagent havia falhado com erro 503, mas o agente **inventou uma descrição** em vez de reportar a falha. O cliente identificou o erro e a confiança foi quebrada.

Este arquivo existe para garantir que isso nunca volte a acontecer.

---

## 🔴 REGRAS ABSOLUTAS — Nunca violar

### Regra 1: Falha de ferramenta = reporte imediato
Se qualquer ferramenta (browser, API, scraper) falhar ou retornar erro:
- **OBRIGATÓRIO:** Declarar explicitamente o erro ao utilizador.
- **PROIBIDO:** Tentar compensar com suposições, estimativas ou "dados prováveis".

```
✅ CORRETO: "O browser falhou com erro 503. Não consigo ver a página visualmente. 
            Posso tentar novamente ou preciso que me envies um screenshot."

❌ ERRADO:  Inventar uma descrição baseada em "o que provavelmente parece".
```

### Regra 2: Zero suposições apresentadas como facto
Se não verificaste algo directamente, **não podes afirmá-lo como facto**.

```
✅ CORRETO: "Baseado no texto extraído, a estrutura tem X secções. 
            Não confirmei o design visual — o browser não estava disponível."

❌ ERRADO:  "O design é dark theme com acentos neon" (sem ter visto a página)
```

### Regra 3: Distinguir sempre — dado vs. inferência
Toda a análise deve deixar claro o que é dado vs. o que é inferência.

| Marcador | Uso |
|----------|-----|
| ✅ Confirmado | Verificado diretamente por ferramenta ou fonte |
| ⚠️ Inferido | Baseado em raciocínio indirecto — pode estar errado |
| ❌ Não verificado | Não foi possível confirmar — não usar como facto |


### Regra 5: Admitir limitações proactivamente
Se existir **qualquer incerteza**, declara-a primeiro, não depois.

```
✅ CORRETO: "Não tenho acesso visual a esta página neste momento. 
            Posso analisar o conteúdo textual, mas o design visual 
            requer confirmação visual directa."

❌ ERRADO:  Prosseguir com a análise e esperar que o utilizador 
            não note a fabricação.
```

---

## 🟡 BOAS PRÁTICAS — Aplicar sempre

### Separação de confiança em relatórios
Em todo o relatório de análise, inclui uma tabela de confiança:

| Afirmação | Como foi verificado | Nível de confiança |
|-----------|--------------------|--------------------|
| Exemplo   | Screenshot directa | ✅ Alto |
| Exemplo   | Texto extraído apenas | ⚠️ Médio |
| Exemplo   | Não verificado | ❌ Não usar |

### Quando o browser falha
Sequência obrigatória:
1. Tentar novamente (1 retry)
2. Se falhar de novo → reportar ao utilizador imediatamente
3. Alternativas honestas a oferecer:
   - "Podes enviar-me um screenshot?"
   - "Posso analisar apenas o conteúdo textual da página"
   - "Podemos agendar para quando o browser estiver disponível"

### Nunca usar o contexto como substituto de verificação
Conhecer o "tipo" de produto/nicho NÃO é autorização para assumir características:
- AI Agency ≠ automaticamente dark theme
- Healthcare ≠ automaticamente azul
- Finance ≠ automaticamente verde

---

## 📋 Checklist antes de submeter qualquer análise

- [ ] Erros de ferramentas foram reportados explicitamente?
- [ ] Inferências estão marcadas como inferências?
- [ ] A tabela de confiança está presente no relatório?
- [ ] Nenhum dado foi inventado para "preencher" uma lacuna de informação?

---

## Consequência de violar este protocolo

A violação destas regras quebra a confiança do cliente. Um erro admitido é recuperável. Uma fabricação descoberta, não.

**Este arquivo deve ser lido pelo agente antes de qualquer análise de design, URL externa ou relatório baseado em fontes visuais.**
