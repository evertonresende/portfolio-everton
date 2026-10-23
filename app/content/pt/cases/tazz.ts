import type { CaseDetail } from "../../types";

export const tazz: CaseDetail = {
  kicker: "Case 01 · Mobilidade · jul 2026 – hoje",
  title: "Tazz.",
  lead: "App de corridas no Brasil. Entrei para tirar o backend de um limite de cota e fiquei para construir o agente de atendimento, o ledger do PIX e o novo app.",
  factsTitle: "Ficha técnica",
  facts: [
    { term: "Papel", value: "AI Engineer (freelance)" },
    { term: "Período", value: "jul 2026 – hoje" },
    { term: "Stack", value: "TypeScript · Cloudflare Workers · Durable Objects · Queues · Postgres · Expo", mono: true },
    { term: "IA", value: "Atendendo clientes reais", status: "production", statusLabel: "Em produção" },
  ],
  stats: [
    { term: "Migração", value: "~158 → 22", label: "de Cloud Functions para Cloudflare Workers" },
    { term: "Duração", value: "~47,5 h", label: "até o porte completo" },
    { term: "Pagamentos", value: "set/2026", label: "PIX em produção" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problema",
      title: "Bateu no teto da região.",
      stat: { value: "20", label: "vCPU · cota fixa · São Paulo" },
      paragraphs: [
        "O backend rodava em ~158 Cloud Functions no GCP e bateu na cota fixa de 20 vCPU da região de São Paulo, com o app em operação.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Contexto",
      title: "Trocar o motor com o carro andando.",
      paragraphs: [
        "App de corridas em Flutter, com Firestore e Realtime Database. O que precisava mudar era o compute. Os dados podiam ficar onde estavam.",
      ],
    },
    {
      id: "papel",
      label: "03 / Meu papel",
      title: "Engenharia ponta a ponta.",
      columns: [
        {
          index: "3.1",
          title: "Design.",
          items: [
            { text: "Design system do app novo, com tokens e 2 temas" },
            { text: "Telas do admin novo e do atendimento, com handoff para humano" },
          ],
        },
        {
          index: "3.2",
          title: "Engenharia.",
          items: [
            { text: "Migração strangler‑fig para Cloudflare Workers" },
            { text: "Ledger de partida dobrada e PIX com o Asaas" },
            { text: "Agente de atendimento com tools, guardrails e evals" },
            { text: "App em Expo para substituir o Flutter" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Arquitetura",
      title: "Strangler‑fig na borda.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Migração",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Flutter" },
            {
              title: "Gateway",
              note: "Worker",
              branch: [{ title: "Rotas não migradas", muted: true }, { title: "Functions legadas", note: "GCP", muted: true }],
            },
            { title: "Workers de domínio" },
            { title: "Firestore e Realtime Database", note: "GCP" },
          ],
        },
        {
          number: "Fig. 02",
          caption: "Atendimento",
          direction: "horizontal",
          nodes: [
            { title: "Canais", note: "WhatsApp, Instagram, app, site, e-mail" },
            { title: "Atendimento", note: "Queues + DO por conversa" },
            { title: "Agente", note: "LLM via AI Gateway" },
            { title: "Tools", note: "só leitura, allowlist, auditoria" },
            { title: "Operador humano", note: "handoff" },
          ],
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Onde a IA entra",
      title: "No atendimento.",
      specs: [
        { term: "Modelo", value: "OpenAI via AI Gateway, com fallback. Claude selecionável no painel." },
        { term: "Tools", value: "5 tools só de leitura, com allowlist e auditoria. No máximo 3 rodadas." },
        { term: "Guardrails", value: "Checagem em camadas, LLM-juiz e redação de dados pessoais." },
        { term: "Evals", value: "Evals offline com datasets, gate e comparação de 4 modelos. Rollout em shadow e canary." },
        { term: "Status", value: "Atendendo clientes reais, com handoff para humano.", status: "production", statusLabel: "Em produção" },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisões e trade-offs",
      title: "O que ficou de fora, de propósito.",
      items: [
        {
          index: "6.1",
          badge: "Não usado",
          title: "Sem RAG no MVP.",
          text: "A base tem 58 entradas curadas, cada uma com dono, e busca por palavra‑chave.",
        },
        { index: "6.2", title: "Tools só de leitura.", text: "As tools só leem, com allowlist e auditoria. O agente tem handoff para humano." },
        {
          index: "6.3",
          title: "Strangler‑fig, não big bang.",
          text: "Rotas migradas por service binding atrás do gateway. O que não migrou seguiu respondendo pelas functions.",
        },
        { index: "6.4", title: "Só o compute saiu.", text: "Firestore e RTDB ficaram no GCP. A cota que travou era de vCPU." },
        {
          index: "6.5",
          title: "Dinheiro isolado.",
          text: "Payments isolado, ledger de partida dobrada sem rota pública e webhooks com HMAC.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Resultado",
      title: "No ar.",
      stats: [
        { value: "~158 → 22", label: "de Cloud Functions para Cloudflare Workers" },
        { value: "~47,5 h", label: "até o porte completo" },
        { value: "set/2026", label: "PIX em produção" },
        { term: "IA", value: "IA", label: "Agente atendendo clientes reais.", status: "production", statusLabel: "Em produção" },
      ],
    },
  ],
  next: { slug: "dental-smart", index: "02", title: "Dental Smart." },
  seo: {
    title: "Tazz: migração para Cloudflare Workers e agente de atendimento · Everton Resende",
    description:
      "Como portei ~158 Cloud Functions para 22 Cloudflare Workers em ~47,5 h e construí um agente de atendimento com tool calling, guardrails e evals em produção.",
  },
};
