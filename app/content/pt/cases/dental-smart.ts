import type { CaseDetail } from "../../types";

export const dentalSmart: CaseDetail = {
  kicker: "Case 02 · SaaS para clínicas · 2025 – hoje",
  title: "Dental Smart.",
  lead: "SaaS para clínicas odontológicas. Sou o engenheiro do produto desde 2025: multi-tenant com RLS, NFS-e, WhatsApp e transcrição de consultas com IA em produção.",
  factsTitle: "Ficha técnica",
  facts: [
    { term: "Papel", value: "Arquitetura, backend e IA" },
    { term: "Período", value: "2025 – hoje" },
    { term: "Stack", value: "Next.js 16 · React 19 · Supabase · Postgres RLS · Edge Functions · Groq", mono: true },
    { term: "IA", value: "Transcrição e resumo de consultas", status: "production", statusLabel: "Em produção" },
  ],
  stats: [
    { term: "Clínicas", value: "~20", label: "clínicas ativas" },
    { term: "Churn", value: "0", label: "nenhuma clínica cancelou" },
    { term: "IA", value: "fev/2026", label: "transcrição de consultas em produção" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problema",
      title: "A clínica inteira num sistema só.",
      stat: { value: "RLS", label: "um tenant por clínica · isolado no banco" },
      paragraphs: [
        "Clínicas odontológicas precisavam de agenda, financeiro, NFS-e e WhatsApp num só sistema. E cada clínica só pode ver os próprios dados, porque são dados de saúde de pacientes.",
        "Conversei com dentistas, recepcionistas e auxiliares.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Contexto",
      title: "Do banco ao front.",
      paragraphs: [
        "O produto já existia quando assumi a engenharia. Tornei o produto multi-tenant, com um tenant por clínica, e sigo construindo hoje.",
      ],
    },
    {
      id: "papel",
      label: "03 / Meu papel",
      title: "Engenharia ponta a ponta.",
      columns: [
        {
          index: "3.1",
          title: "Engenharia.",
          items: [
            { text: "SaaS multi-tenant em Next.js e Supabase, com isolamento por RLS" },
            { text: "Transcrição e resumo de consultas com Whisper e Llama" },
            { text: "Fila de mensagens de WhatsApp com variações geradas por LLM" },
            { text: "NFS-e via Focus NFe e assinatura de contrato por WhatsApp" },
            { text: "Admin do SaaS para provisionar clínicas" },
            { text: "CI no GitHub Actions e backup do banco no R2" },
          ],
        },
        {
          index: "3.2",
          title: "Escopo.",
          items: [
            { text: "Agenda, pacientes e planos de tratamento" },
            { text: "Financeiro com DRE e CRM com funil no WhatsApp" },
            { text: "Estoque, próteses e relatórios" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Arquitetura",
      title: "Isolamento no banco.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Multi-tenant",
          direction: "horizontal",
          nodes: [
            { title: "Web app", note: "Next.js 16 · Vercel", branch: [{ title: "API routes", note: "operações privilegiadas" }] },
            { title: "Supabase", note: "JWT do usuário · RLS por tenant_id" },
            { title: "Edge Functions", note: "Deno" },
            { title: "Integrações", note: "WhatsApp · Focus NFe · Groq" },
          ],
          footnote: "Uma clínica, um tenant · backup pg_dump no R2",
        },
        {
          number: "Fig. 02",
          caption: "Transcrição e resumo",
          direction: "horizontal",
          nodes: [
            { title: "Gravação", note: "browser" },
            { title: "Storage", note: "por clínica" },
            { title: "Edge Function", note: "Deno" },
            { title: "Whisper", note: "Groq · transcrição" },
            { title: "Llama 3.3 70B", note: "Groq · resumo" },
            { title: "Resultado", note: "salvo por clínica" },
          ],
          footnote: "Em produção desde fev/2026",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Onde a IA entra",
      title: "Na consulta e nas mensagens.",
      specs: [
        {
          term: "Transcrição",
          value: "Whisper large-v3-turbo transcreve a gravação da consulta. Llama 3.3 70B resume. Os dois rodam na Groq.",
          status: "production",
          statusLabel: "Em produção",
        },
        { term: "Mensagens", value: "Um LLM gera variações das mensagens de WhatsApp. O envio sai de uma fila agendada." },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisões e trade-offs",
      title: "O que escolhi, e por quê.",
      items: [
        {
          index: "6.1",
          title: "Conciliação por regras.",
          text: "A conciliação bancária roda por regras: autodetecção de colunas do CSV e dedupe.",
        },
        {
          index: "6.2",
          title: "Isolamento na RLS.",
          text: "Cada clínica é um tenant. O browser fala com o Supabase usando o JWT do usuário, e a RLS por tenant_id isola os dados no Postgres.",
        },
        {
          index: "6.3",
          title: "Privilégio só no servidor.",
          text: "Gestão de usuários, assinatura de contrato, NFS-e e PDF passam por API routes do Next, com o client admin no servidor.",
        },
        {
          index: "6.4",
          title: "Variação de texto, não agente.",
          text: "O LLM só reescreve a mensagem. Quem dispara o envio é uma fila com cron. Sem tool calling.",
        },
        {
          index: "6.5",
          badge: "Não construído",
          title: "Radiografia fora do escopo.",
          text: "A análise de radiografia não foi construída. Priorizamos o financeiro, que tinha demanda mais urgente.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Resultado",
      title: "Nenhuma clínica cancelou.",
      paragraphs: ["~20 clínicas ativas, cada uma num tenant isolado por RLS."],
      stats: [
        { term: "IA", value: "IA", label: "Transcrição e resumo de consultas na Groq, desde fev/2026.", status: "production", statusLabel: "Em produção" },
      ],
    },
  ],
  next: { slug: "tazz", index: "01", title: "Tazz." },
  seo: {
    title: "Dental Smart: SaaS multi-tenant com IA em produção · Everton Resende",
    description:
      "Como construí um SaaS multi-tenant para ~20 clínicas odontológicas, com isolamento por RLS e transcrição de consultas com Whisper e Llama em produção.",
  },
};
