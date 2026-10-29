import type { HomeContent } from "../types";
import { CV_URL, CONTACT } from "../shared";

export const home: HomeContent = {
  seo: {
    title: "Everton Resende · AI Engineer",
    description:
      "AI Engineer com 7+ anos desenvolvendo software. Construo e coloco em produção sistemas com LLMs, agentes e RAG, da arquitetura à infra, em TypeScript, Python, Cloudflare e AWS.",
  },
  hero: {
    status: "Disponível · remoto · PJ, CLT ou contrato internacional",
    title: "AI Engineer.",
    lead: "Construo e coloco em produção sistemas com LLMs, agentes e RAG, da arquitetura à infra.",
    sub: "Entrego sistemas completos com IA integrada (SaaS para clínicas, fintech, mobilidade, apoio clínico), do app ao backend, com um workflow agent-first.",
    primary: { label: "Agendar conversa", href: CONTACT.whatsapp, external: true },
    secondary: { label: "Ver cases", href: "#cases" },
    cv: { label: "Baixar CV (PDF)", href: CV_URL },
    photoAlt: "Everton Resende",
    factsTitle: "Ficha técnica",
    facts: [
      { term: "Foco", value: "LLMs, agentes e RAG em produção" },
      { term: "Carreira", value: "7+ anos desenvolvendo software" },
      { term: "Stack", value: "TypeScript · Python · Cloudflare · AWS · Postgres" },
      { term: "Local", value: "Pará de Minas, MG · remoto (UTC−3)" },
      { term: "Status", value: "Disponível · PJ, CLT ou internacional", status: "production" },
    ],
    proofs: [
      { term: "Produtos", value: "5", label: "produtos em produção" },
      {
        term: "Tazz",
        value: "IA",
        label: "Agente de IA no atendimento, com supervisão humana",
        status: "production",
        statusLabel: "Em produção",
      },
      {
        term: "Maximus",
        value: "RAG",
        label: "Chat clínico com RAG atendendo anestesistas",
        status: "production",
        statusLabel: "Em produção",
      },
    ],
  },
  delivery: {
    label: "01 / O que eu entrego",
    title: "Da arquitetura à produção.",
    proofLabel: "Prova",
    items: [
      {
        index: "1.1",
        title: "Arquiteto agentes.",
        text: "Tool calling, guardrails em camadas, LLM-juiz, evals e fallback entre modelos, em TypeScript. Em Python, times de agentes com triagem e handoff (Agno).",
        proof: "Agente da Tazz · agentes em Python (Agno) na Coppay",
      },
      {
        index: "1.2",
        title: "Coloco RAG em produção.",
        text: "Busca vetorial nativa em produção, que substituiu o RAG manual com classificador de intenção que construí antes. E sei quando RAG não vale a pena.",
        proof: "Maximus · decisão de não usar RAG na\u00a0Tazz",
      },
      {
        index: "1.3",
        title: "Construo e opero a infra.",
        text: "Cloudflare (Workers, Durable Objects, Queues), Postgres com RLS, Docker e CI. Na AWS: EC2, ELB, Lambda, SQS, S3, Aurora e Rekognition.",
        proof: "Migração da Tazz · Coppay · Dental\u00a0Smart · AWS em projetos anteriores",
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
        meta: "Mobilidade · 2026–hoje",
        title: "Tazz.",
        hasPage: true,
        figure: {
          number: "Fig. 01",
          caption: "Arquitetura",
          direction: "vertical",
          nodes: [{ title: "App Expo" }, { title: "Workers" }, { title: "Postgres" }],
          footnote: "App novo do zero · agentes de código em paralelo",
        },
        problem: "O backend do app de corridas bateu na cota fixa de 20 vCPU do GCP em São Paulo, e o app em Flutter falava direto com o Firebase.",
        whatIDid:
          "Arquitetei e construí do zero o app novo em Expo e os Workers novos dele, com agentes de código em paralelo (pré-lançamento). Antes, portei 100+ Cloud Functions para 8 Cloudflare Workers em ~47,5\u00a0h. Também construí o agente de atendimento e levei o PIX do Asaas à produção.",
        stack: "TypeScript · Expo · Cloudflare Workers · Durable Objects · Queues · Postgres",
        ai: [
          {
            status: "production",
            label: "Em produção",
            text: "Agente de atendimento com tool calling, guardrails, LLM-juiz e evals, com um atendente revisando cada resposta.",
          },
        ],
        result: "PIX em produção desde set/2026",
      },
      {
        slug: "dental-smart",
        index: "02",
        meta: "SaaS para clínicas · 2025–hoje",
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
          "Construo o SaaS multi-tenant: transcrição de consultas com IA, isolamento por RLS, mensagens de WhatsApp agendadas, financeiro e NFS-e.",
        stack: "Next.js · React · Supabase · Postgres RLS · Edge Functions · Groq",
        ai: [
          { status: "production", label: "Em produção", text: "Transcrição e resumo de consultas (Whisper + Llama)." },
          { status: "decision", label: "Decisão", text: "Conciliação bancária por regras, sem\u00a0IA." },
        ],
        result: "~20 clínicas · 0 churn",
      },
      {
        slug: "maximus",
        index: "03",
        meta: "Saúde · 2026",
        title: "Maximus.",
        hasPage: false,
        figure: {
          number: "Fig. 03",
          caption: "RAG",
          direction: "vertical",
          nodes: [
            { title: "Pergunta", note: "texto, imagem ou voz" },
            { title: "Responses API", note: "gpt-5.4 · streaming" },
            { title: "file_search", note: "vector store da OpenAI" },
          ],
          footnote: "Antes: classificador + busca manual. Hoje: file_search nativo",
        },
        problem:
          "Anestesistas precisavam de respostas clínicas rápidas (doses, fármacos, protocolos) apoiadas numa base de referência, e de questões de estudo para a prova do TSA.",
        whatIDid:
          "Construí o app em Expo e a API em Hono sobre Cloudflare Workers, com Supabase e RLS. O chat usa a Responses API com file_search sobre a base de referência e code interpreter para gráficos, com resposta em streaming.",
        stack: "TypeScript · Expo · Hono · Workers · Supabase · OpenAI Responses API",
        ai: [
          {
            status: "production",
            label: "Em produção",
            text: "Chat clínico com RAG sobre a base de referência, com pergunta por texto, imagem ou voz (gpt-4o-transcribe).",
          },
          {
            status: "production",
            label: "Em produção",
            text: "Questões no formato do TSA geradas com structured output e validação, a partir da base vetorial.",
          },
          {
            status: "decision",
            label: "Decisão",
            text: "Construí RAG manual (classificador gpt-5-nano + busca vetorial) e troquei pelo file_search nativo: o classificador barrava buscas legítimas.",
          },
        ],
        result: "No ar, em uso por anestesistas",
      },
      {
        slug: "coppay",
        index: "04",
        meta: "Fintech · 2025–2026",
        title: "Coppay.",
        hasPage: false,
        figure: {
          number: "Fig. 04",
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
          "Construí o app em Expo, o BFF em Hono sobre Cloudflare Workers (Cronos, Asaas e HBI), o back-office em Next.js com RBAC e audit log, e os recursos de IA: triagem de e-mail, parecer de crédito assistido por LLM e o agente de WhatsApp. Em set/2026, construí um BFF novo sobre o BaaS do Asaas, com uma subconta por cliente, rodando lado a lado com o legado.",
        stack: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python · FastAPI",
        ai: [
          {
            status: "production",
            label: "Em produção",
            text: "Triagem de e-mail (Workers AI), usada pelo time, e parecer de crédito assistido por LLM (gpt-oss-120b), usado pelos analistas.",
          },
          {
            status: "offline",
            label: "Fora do ar hoje",
            text: "Agente de WhatsApp em Python (Agno + FastAPI) com triagem para especialistas, tools de leitura e handoff para humano. Atendeu clientes reais até set/2026.",
          },
        ],
        result: "App nas lojas com correntistas reais",
      },
      {
        slug: "davions",
        index: "05",
        meta: "SaaS para fotógrafos · 2026–hoje",
        title: "Davions.",
        hasPage: false,
        figure: {
          number: "Fig. 05",
          caption: "Arquitetura",
          direction: "vertical",
          nodes: [{ title: "App", note: "React" }, { title: "10 Workers" }, { title: "Supabase (RLS) · R2" }],
          footnote: "Escrow BR no Asaas · livro-razão em SQL",
        },
        problem:
          "Um SaaS de galerias para fotógrafos, nascido no Lovable, precisava ser re-hospedado e refatorado numa arquitetura própria.",
        whatIDid:
          "Migrei e refatorei o app para 10 Cloudflare Workers com Supabase e RLS, e arquitetei o escrow com o Asaas: livro-razão em SQL e saque por PIX.",
        stack: "TypeScript · React · Cloudflare Workers · R2 · Supabase RLS · Asaas · Stripe Connect",
        ai: [
          {
            status: "production",
            label: "Em produção",
            text: "Geração de posts de blog, legendas e temas com Claude, via Cloudflare AI Gateway.",
          },
        ],
        result: "Entregue em out/2026 · escrow em dark launch",
      },
    ],
  },
  howIWork: {
    label: "03 / Como trabalho",
    title: ["Agentes escrevem o código.", "Eu respondo por ele."],
    intro:
      "Trabalho com agentes como quem conduz um time. Defino o contexto, a arquitetura e os critérios de aceite. Os agentes escrevem a maior parte do código. Eu leio, depuro, exijo a suite verde antes de todo commit e decido o que vai para produção.",
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
      title: "Eu delego aos agentes",
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
        value: "Na Tazz, agentes coordenadores tocaram um backlog de ~200 frentes do app novo em sessões paralelas, uma worktree cada, com revisão de outro modelo.",
      },
      { term: "Este site", value: "Foi refeito assim. A spec e o plano estão em docs/ no GitHub.", link: { label: "Ver a spec", href: "https://github.com/evertonresende/portfolio-everton/blob/main/docs/superpowers/specs/2026-10-23-lp-v3-design.md", external: true } }
    ],
  },
  timeline: {
    label: "04 / Trajetória",
    title: "Trajetória.",
    rows: [
      { period: "out 2025 – out 2026", role: "AI Engineer", company: "Coppay", mode: "CLT · remoto" },
      { period: "nov 2022 – out 2025", role: "Desenvolvedor de Software", company: "Softplan", mode: "CLT · remoto" },
      { period: "nov 2018 – out 2021", role: "Desenvolvedor de Software", company: "FAPAM", mode: "CLT · híbrido" },
    ],
    education: {
      index: "4.1",
      title: "Formação",
      items: [{ title: "Sistemas de Informação", detail: "FAPAM · nov 2018 – dez 2020 · incompleto" }],
    },
    openSource: {
      index: "4.2",
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
    label: "05 / Contato",
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
