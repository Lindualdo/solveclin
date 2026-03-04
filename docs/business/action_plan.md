# 1 - ORGANIZANDO A CASA (ESTRUTURA)

## 1.1 Gestão de Operações e Processos
* **Central de Documentação (SOPs):** **Notion** (Gratuito). Criar uma página para cada processo: "Como a Fábrica deve entregar", "Como configurar o n8n".
* **Gestão de Tarefas:** **Trello** ou **Notion Boards**. Foco em mover o card do lead desde a prospecção até ao pós-venda.
* **Gestão de Fornecedores:** Pasta no Drive para cada parceiro com o histórico de entregas e margem de lucro.

## 1.2 CRM e Administrativo
* **Pipeline de Vendas:** **HubSpot Free** ou **Pipedrive**. O foco é saber exatamente em que fase do funil cada clínica está.
* **Faturação (Portugal):** **InvoiceXpress** ou **Moloni** (Essencial para estar em conformidade com a AT).
* **Assinatura de Contratos:** **DocuSign** ou **SignRequest** (Plano inicial baixo custo).

## 1.3 Framework de Gestão
* **OKR Quinzenal:** Definir métricas claras para os próximos 15 dias (ex: nº de diagnósticos vendidos).
* **Lean Startup:** Testar a oferta de diagnóstico antes de construir a automação final do cliente.
* **Lean Startup:** Framework Foco no ciclo Construir-Medir-Aprender. 

# 2 - VENDA E ENTREGA (ESTRUTURA COMERCIAL SOLVECLIN)

## 2.1 Modelo de Precificação (Portugal)
* **Diagnóstico Estratégico:** 397€ (Fixo - Crédito para o setup se fechado em 48h).
* **Taxa de Implantação:** 500€ a 1.200€ por unidade (Dependendo da complexidade do fluxo).
* **Mensalidade (Manutenção e Sucesso):** 297€/mês (Garante suporte, atualizações da IA e monitorização de fluxos).

## 2.2 Estratégia de Aquisição (Mystery Shopping)
* **Prospecção Ativa:** Focar em clínicas que já investem em anúncios (Meta/Google) mas falham na conversão imediata no WhatsApp.
* **O "Gancho":** Enviar prova visual da falha de atendimento (print) e o cálculo do "Custo da Inação" (Quanto dinheiro a clínica perdeu naquela interação).
* **Venda Consultiva (Challenger Sale):** Vender a "Recuperação de Receita" e não apenas um chatbot.

## 2.3 Fluxo de Entrega e Retenção
* **Setup (TTV):** Colocar o agente básico de triagem no ar em até 7 dias após o kick-off para gerar valor imediato.
* **Entrega por Unidade:** Cada unidade da clínica recebe a sua instância personalizada, garantindo que o atendimento local seja respeitado.
* **Relatório Mensal de ROI:** Mostrar ao cliente quantas marcações foram feitas pela IA para justificar a mensalidade de 297€.
* **Upsell:** Oferta de "Repaginação Completa" (5k€+) para clínicas que atingem o limite de eficiência do bot básico.

# 3 - AUTOMAÇÕES INTERNAS (A TUA EFICIÊNCIA - SOLVECLIN)

## 3.1 Central de Inteligência Conversacional (Chatvolt Pro)
* **Agente de Qualificação (Vendas):** Configurar o bot para o WhatsApp/Site da Solveclin. Ele deve filtrar leads, explicar o ROI da automação e agendar o "Diagnóstico Estratégico".
* **Agente Showroom (Demo):** Criar uma instância de "Clínica Modelo" (Saúde/Estética/Odonto) para demonstração ao vivo ou gravação de vídeos de impacto.
* **Base de Conhecimento:** Inserir os PDFs de serviços, preçário (Setup 500€-1200€ | Mensalidade 297€) e casos de uso para alimentar o bot de vendas.

## 3.2 Orquestração de Fluxos e Dados (n8n)
* **Webhook de Entrada:** Configurar o n8n para receber os dados do Chatvolt assim que um lead for qualificado ou um diagnóstico for solicitado.
* **Sincronização de CRM:** Criar/Atualizar automaticamente o contacto no CRM (HubSpot Free/Pipedrive) com o histórico da conversa.
* **Agendamento Inteligente:** Integrar o fluxo de marcação do Chatvolt com o teu Google Calendar para garantir que as reuniões de diagnóstico apareçam na tua agenda sem intervenção manual.
* **Alertas de Fecho:** Enviar notificação imediata (via Telegram ou WhatsApp) para o teu telemóvel sempre que um lead quente for identificado.

## 3.3 Gestão de Ativos e Documentação (Baixo Custo)
* **Google Workspace:** Armazenamento automático no Drive (via n8n) dos dados recolhidos pelo agente para cada nova clínica interessada.
* **Loom:** Gravar o ecrã do Agente Showroom em funcionamento para usar como "prova técnica" no envio de propostas.
* **Notion:** Centralizar apenas os links dos fluxos do n8n, as chaves de API e os scripts de treino dos agentes para consulta rápida.

## 3.4 Framework de Execução (O que medir)
* **Lead-to-Meeting:** Tempo entre a conversa no bot e o agendamento do diagnóstico.
* **Conversão de Qualificação:** % de leads que iniciam conversa com o bot vs. % que agendam o diagnóstico.

# 4 - AUTOMAÇÕES PARA O CLIENTE (O PRODUTO/SERVIÇO)

## 4.1 Interface de Atendimento (Chatvolt Pro)
* **Agente IA de Recepção 24/7:** Configurar o cérebro da clínica no WhatsApp. Ele deve saudar, identificar se é paciente novo ou antigo e filtrar a necessidade.
* **Triagem Inteligente (Lógica de Especialidade):** O bot deve direcionar o paciente com base nos serviços da clínica (ex: Dentária -> Implante vs. Limpeza; Estética -> Botox vs. Massagem).
* **Base de Conhecimento Local:** Carregar o PDF/Texto com as FAQ específicas: Acordos/Seguros aceites, horários de funcionamento, morada (com link Google Maps) e preçário base.

## 4.2 Conversão e Agendamento (Engine n8n)
* **Integração de Agenda:** n8n liga o Chatvolt ao Google Calendar da clínica ou ao software de gestão (via API/Webhook).
* **Marcação Direta:** O paciente escolhe o dia e hora no WhatsApp e a vaga é bloqueada automaticamente.
* **Validação de Dados:** n8n verifica se o Nome, Telemóvel e Motivo da Consulta foram preenchidos antes de confirmar a marcação.

## 4.3 Operação e Suporte (Handover e Alertas)
* **Transmissão Humana (Handover):** Gatilho automático para alertar a secretária (via WhatsApp ou CRM da clínica) quando o paciente pede para "falar com alguém" ou apresenta uma dúvida técnica complexa.
* **Gestão de Leads no CRM do Cliente:** n8n cria o card do paciente no CRM da clínica (ex: Bitrix24, HubSpot ou folha de cálculo inteligente) para que a recepção faça o follow-up.

## 4.4 Pós-Venda e Retenção (Ações Automáticas)
* **Confirmação e Lembretes:** Fluxo automático de lembretes (24h e 2h antes) para reduzir o "No-show" (faltas).
* **Recuperação de Orçamentos:** Automação que envia uma mensagem 24h após uma dúvida de preço caso o paciente não tenha agendado.
* **Recolha de Reviews:** Envio automático de link do Google My Business após a consulta para aumentar a autoridade da clínica.

## 4.5 Monitorização e ROI (O que medir para o Cliente)
* **Taxa de Conversão do Bot:** Leads que entraram vs. Consultas agendadas.
* **Volume de Atendimento Extra:** Quantas marcações foram feitas fora do horário comercial (Proposta de valor central).

# 5 - NICHOS E DECISÕES (ESTRATÉGIA DE MERCADO SOLVECLIN)

## 5.1 Identidade de Marca
* **Nome Oficial:** **Solveclin**
* **Domínio:** solveclin.com (Registado)
* **Posicionamento:** Consultoria de Eficiência e Escala. Não vendemos "bots", vendemos a solução para a "cadeira vazia" e a recuperação de faturação perdida.

## 5.2 Nichos de Atuação (Foco Portugal)
* **Público:** Clínicas de Saúde, Estética, Odontologia e Beleza.
* **Segmentação por "Dor":**
    * **Medicina Dentária:** Foco em marcações de implantes/ortodontia e redução de faltas (No-show).
    * **Estética Avançada:** Foco em conversão rápida de leads de alto ticket (Ex: Botox, Preenchimentos).
    * **Clínicas Médicas:** Foco em triagem inteligente e libertação da recepção de tarefas repetitivas.
    * **Beleza e Bem-Estar:** Foco em agendamento 24/7 e gestão de recorrência.

## 5.3 Critérios de Decisão para Prospecção (Mystery Shopping)
* **Critério 1 (Investimento):** A clínica deve estar a anunciar no Facebook/Instagram (ver no Ad Library da Meta). Se gastam em Ads, a dor de perder o lead é maior.
* **Critério 2 (Ineficiência):** Demora superior a 30 minutos na resposta inicial ou falta de opção de agendamento automático fora de horas.
* **Critério 3 (Ticket Médio):** Priorizar clínicas com procedimentos acima de 150€, onde uma única marcação recuperada pela IA já paga metade da mensalidade da Solveclin.

## 5.4 Expansão e Escala
* **Fase 1 (Atual):** Portugal Continental. Foco em validação e cashflow rápido via Mystery Shopping.
* **Fase 2:** Expansão para o mercado do Brasil (utilizando a mesma infraestrutura tecnológica, ajustando apenas o sotaque dos Agentes de IA).
* **Fase 3:** Diversificação para outros nichos de serviços produtizados (ex: clínicas veterinárias ou escritórios de advogados) sob a mesma lógica operacional.

## 5.5 Definições de Negócio (Owner Only)
* **Margem de Lucro Esperada:** >50% após custos de parceiros e ferramentas.
* **Modelo de Entrega:** Modelo de Entrega: Consultoria de Escopo Fechado. A solução é 100% customizada à realidade da clínica, mas a entrega é limitada ao pacote contratado para garantir eficiência e escala.