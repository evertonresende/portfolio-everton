import type { HomeContent } from "../types";
import { CV_URL, CONTACT } from "../shared";

export const home: HomeContent = {
  seo: {
    title: "Everton Resende · AI Engineer",
    description:
      "AI Engineer com 7+ anos de design de produto. Construo e coloco em produção produtos com LLMs e agentes, em TypeScript e Cloudflare Workers.",
  },
  hero: {
    status: "Disponível · remoto · PJ, CLT ou contrato internacional",
    title: "AI Engineer.",
    lead: "Construo e coloco em produção produtos com LLMs e agentes, com 7+ anos de design de produto por trás.",
    sub: "Hoje entrego sistemas completos (SaaS para clínicas, fintech, mobilidade), do app ao backend, com um workflow agent-first.",
    primary: { label: "Agendar conversa", href: CONTACT.whatsapp, external: true },
    secondary: { label: "Ver cases", href: "#cases" },
    cv: { label: "Baixar CV (PDF)", href: CV_URL },
    photoAlt: "Everton Resende",
    factsTitle: "Ficha técnica",
    facts: [
      { term: "Foco", value: "LLMs e agentes em produção" },
      { term: "Base", value: "7+ anos de design de produto" },
      { term: "Stack", value: "TypeScript · Workers · Postgres" },
      { term: "Local", value: "Pará de Minas, MG · remoto (UTC−3)" },
      { term: "Status", value: "Disponível · PJ, CLT ou internacional", status: "production" },
    ],
    proofs: [
      { term: "Produtos", value: "5", label: "produtos em produção" },
      {
        term: "Atendimento",
        value: "IA",
        label: "Agente de IA atendendo clientes reais na Tazz",
        status: "production",
        statusLabel: "Em produção",
      },
      { term: "Cal.com", value: "2", label: "PRs merged no Cal.com" },
    ],
  },
  delivery: {
    label: "01 / O que eu entrego",
    title: "Do desenho à produção.",
    proofLabel: "Prova",
    items: [
      {
        index: "1.1",
        title: "Desenho.",
        text: "Produto, UX e design system. 7+ anos decidindo o que vale construir antes de construir.",
        proof: "Softplan · FAPAM · SAT Bank · design system da Tazz",
      },
      {
        index: "1.2",
        title: "Construo.",
        text: "Front, back e infra em TypeScript: React, React Native/Expo, Cloudflare Workers e Postgres.",
        proof: "Tazz · Coppay · Dental Smart",
      },
      {
        index: "1.3",
        title: "Coloco IA em produção.",
        text: "Agentes com tool calling, guardrails e evals. E sei onde não usar IA.",
        proof: "Agente da Tazz · transcrição no Dental Smart",
      },
    ],
  },
  cases: {
    label: "02 / Cases",
    title: ["Produtos no ar.", "Não demos."],
    items: [
      {
        slug: "tazz",
        index: "01",
        meta: "Mobilidade · 2026",
        title: "Tazz.",
        hasPage: true,
        figure: {
          number: "Fig. 01",
          caption: "Arquitetura",
          direction: "vertical",
          nodes: [{ title: "App" }, { title: "22 Workers" }, { title: "Postgres" }],
          footnote: "~158 Cloud Functions → 22 Workers · ~47,5 h",
        },
        problem: "O backend do app de corridas bateu a cota fixa de 20 vCPU do GCP em São Paulo, com o app em operação.",
        whatIDid:
          "Portei ~158 Cloud Functions para 22 Cloudflare Workers em ~47,5 h, orquestrando agentes. Depois construí o agente de atendimento e o ledger do PIX, e estou construindo o novo app em Expo (pré-lançamento).",
        stack: "TypeScript · Cloudflare Workers · Durable Objects · Queues · Postgres · Expo",
        ai: [
          {
            status: "production",
            label: "Em produção",
            text: "Agente de atendimento com tool calling, guardrails, LLM-juiz e evals, atendendo clientes reais.",
          },
        ],
        result: "PIX em produção desde set/2026 · agente atendendo clientes reais",
      },
      {
        slug: "dental-smart",
        index: "02",
        meta: "SaaS para clínicas · 2023–hoje",
        title: "Dental Smart.",
        hasPage: true,
        figure: {
          number: "Fig. 02",
          caption: "Transcrição e resumo",
          direction: "vertical",
          nodes: [{ title: "Consulta" }, { title: "Whisper", note: "transcrição" }, { title: "Llama", note: "resumo" }],
          footnote: "Multi-tenant · isolamento por RLS",
        },
        problem:
          "Clínicas odontológicas precisavam de financeiro, NFS-e e mensagens de WhatsApp num só sistema, com os dados de cada clínica isolados.",
        whatIDid:
          "Desenho o produto desde 2023 e construo desde 2025: SaaS multi-tenant com isolamento por RLS, mensagens de WhatsApp agendadas, financeiro e NFS-e.",
        stack: "Next.js · React · Supabase · Postgres RLS · Edge Functions · Groq",
        ai: [
          { status: "production", label: "Em produção", text: "Transcrição e resumo de consultas (Whisper + Llama)." },
          { status: "prototype", label: "Protótipo", text: "Análise de radiografia, só no design." },
          { status: "decision", label: "Decisão", text: "Conciliação bancária por regras, sem\u00a0IA." },
        ],
        result: "~20 clínicas · 0 churn",
      },
      {
        slug: "coppay",
        index: "03",
        meta: "Fintech · 2026–hoje",
        title: "Coppay.",
        hasPage: false,
        figure: {
          number: "Fig. 03",
          caption: "Arquitetura",
          direction: "vertical",
          nodes: [
            { title: "App", note: "Expo" },
            { title: "BFF", note: "Hono · Workers" },
            { title: "BaaS", note: "Cronos → Asaas" },
          ],
          footnote: "Back-office em Next.js · RBAC · audit log",
        },
        problem: "Uma fintech precisava de conta digital, crédito e atendimento rodando sobre um BaaS, do app ao back-office.",
        whatIDid:
          "Construí o app em Expo, o BFF em Hono sobre Cloudflare Workers (Cronos, Asaas e HBI) e o back-office em Next.js com RBAC e audit log. Em set/2026, construí um BFF novo sobre o BaaS do Asaas, com uma subconta por cliente, rodando lado a lado com o legado.",
        stack: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python",
        ai: [
          {
            status: "production",
            label: "Em produção",
            text: "Triagem de e-mail (Workers AI), usada pelo time, e parecer de crédito assistido por LLM (gpt-oss-120b), usado pelos analistas.",
          },
          {
            status: "offline",
            label: "Fora do ar hoje",
            text: "Agente de WhatsApp em Python (Agno) com handoff para humano. Atendeu clientes; está fora do ar desde que o servidor caiu em set/2026.",
          },
        ],
        result: "App nas lojas com correntistas reais",
      },
      {
        slug: "davions",
        index: "04",
        meta: "SaaS para fotógrafos · 2026–hoje",
        title: "Davions.",
        hasPage: false,
        figure: {
          number: "Fig. 04",
          caption: "Arquitetura",
          direction: "vertical",
          nodes: [{ title: "App", note: "React" }, { title: "10 Workers" }, { title: "Supabase (RLS) · R2" }],
          footnote: "Escrow BR no Asaas · livro-razão em SQL",
        },
        problem:
          "Um SaaS de galerias para fotógrafos, nascido no Lovable, precisava ser re-hospedado e refatorado numa arquitetura própria.",
        whatIDid:
          "Re-hospedei e refatorei o app em 10 Cloudflare Workers com Supabase e RLS, e desenhei o escrow com o Asaas: livro-razão em SQL e saque por PIX.",
        stack: "TypeScript · React · Cloudflare Workers · R2 · Supabase RLS · Asaas · Stripe Connect",
        ai: [
          {
            status: "production",
            label: "Em produção",
            text: "Geração de posts de blog, legendas e temas com Claude, via Cloudflare AI Gateway.",
          },
        ],
        result: "Contrato entregue em out/2026 · escrow em dark launch · sigo no time como freelancer",
      },
    ],
  },
  howIWork: {
    label: "03 / Como trabalho",
    title: ["Agentes escrevem o código.", "Eu respondo por ele."],
    intro:
      "Trabalho como quem conduz um time. Defino o contexto, a arquitetura e os critérios de aceite. Os agentes escrevem a maior parte do código. Eu leio, depuro e decido o que vai para produção.",
    pipelineLabel: "Pipeline",
    steps: [
      { index: "01", title: "Spec", text: "O que é pronto, em critérios verificáveis." },
      { index: "02", title: "Plano", text: "Tarefas pequenas, arquivos e ordem." },
      { index: "03", title: "Subagentes em paralelo", text: "Uma frente por worktree." },
      { index: "04", title: "Revisão", text: "Code review e segunda opinião de outro modelo." },
      { index: "05", title: "Testes", text: "Suite verde antes de todo commit." },
      { index: "06", title: "Preview", text: "Versão de preview antes do deploy." },
      { index: "07", title: "Produção", text: "Deploy com rollback documentado." },
    ],
    decide: {
      index: "3.1",
      title: "Eu decido",
      items: [
        { text: "Arquitetura e trade-offs" },
        { text: "O que entra e o que fica de fora" },
        { text: "Critérios de aceite" },
        { text: "Onde não usar IA" },
        { text: "O que vai para produção" },
      ],
    },
    delegate: {
      index: "3.2",
      title: "Eu delego",
      items: [
        { text: "A escrita do código" },
        { text: "Varreduras e migrações em massa" },
        { text: "Primeiro rascunho dos testes" },
        { text: "Pesquisa em docs e repositórios" },
      ],
    },
    specs: [
      { term: "Qualidade", value: "CLAUDE.md por repositório · critérios de aceite · revisão · testes como gate de commit" },
      {
        term: "Na prática",
        value: "Na Tazz, portei ~158 Cloud Functions para 22 Workers em ~47,5 h, com um agente coordenador, executores e uma fila de tasks.",
      },
      { term: "Este site", value: "Foi refeito assim. A spec e o plano estão em docs/ no GitHub.", link: { label: "Ver a spec", href: "https://github.com/evertonresende/portfolio-everton/blob/main/docs/superpowers/specs/2026-10-23-lp-v3-design.md", external: true } }
    ],
  },
  foundations: {
    label: "04 / Fundamentos de design",
    title: ["Onde aprendi a decidir", "o que construir."],
    rows: [
      {
        company: "Softplan",
        role: "Product Designer",
        text: "Produtos para Ministério Público e Procuradorias. Reconhecido 10x no Softplayer A+.",
        period: "nov 2022 – out 2025",
        slug: "softplan",
      },
      {
        company: "FAPAM",
        role: "UI/UX Designer",
        text: "Portal acadêmico com 4.000+ alunos.",
        period: "nov 2018 – out 2021",
      },
    ],
  },
  timeline: {
    label: "05 / Trajetória",
    title: "Trajetória.",
    rows: [
      { period: "jun 2025 – hoje", role: "AI Engineer", company: "Freelance · SAT Bank, Dental Smart, Coppay, Tazz, Davions", mode: "Remoto" },
      { period: "out 2025 – mar 2026", role: "AI Product Designer", company: "SAT Bank", mode: "CLT · remoto" },
      { period: "nov 2022 – out 2025", role: "Product Designer", company: "Softplan", mode: "CLT · remoto" },
      { period: "2023 – jul 2025", role: "Product Designer", company: "Dental Smart (freelance)", mode: "Remoto" },
      { period: "nov 2021 – out 2022", role: "Product Designer", company: "Freelancer", mode: "Remoto" },
      { period: "nov 2018 – out 2021", role: "UI/UX Designer", company: "FAPAM", mode: "CLT · híbrido" },
    ],
    education: {
      index: "5.1",
      title: "Formação",
      items: [
        { title: "UX Design", detail: "Design Circuit · out 2021 – out 2022" },
        { title: "Sistemas de Informação (incompleto)", detail: "FAPAM · nov 2018 – dez 2020" },
      ],
    },
    openSource: {
      index: "5.2",
      title: "Open source",
      text: "2 PRs merged no Cal.com",
      date: "fev 2026",
      links: [
        { label: "#27636", href: "https://github.com/calcom/cal.com/pull/27636", external: true },
        { label: "#27637", href: "https://github.com/calcom/cal.com/pull/27637", external: true },
      ],
    },
  },
  contact: {
    label: "06 / Contato",
    title: "Vamos conversar.",
    status: "Disponível · remoto · PJ, CLT ou contrato internacional",
    primary: { label: "Agendar conversa", href: CONTACT.whatsapp, external: true },
    secondary: { label: "Baixar CV (PDF)", href: CV_URL },
    listTitle: "Contatos",
    items: [
      { term: "E-mail", label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { term: "LinkedIn", label: "linkedin.com/in/evertonresende", href: CONTACT.linkedin },
      { term: "GitHub", label: "github.com/evertonresende", href: CONTACT.github },
      { term: "WhatsApp", label: "+55 37 99913-3556", href: CONTACT.whatsapp },
    ],
  },
};
