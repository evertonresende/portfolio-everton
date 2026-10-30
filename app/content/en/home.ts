import type { HomeContent } from "../types";
import { CV_URL_EN, CONTACT } from "../shared";

export const home: HomeContent = {
  seo: {
    title: "Everton Resende · AI Engineer",
    description:
      "AI Engineer with 7+ years in software development. I build LLM, agent and RAG systems and ship them to production, from architecture to infrastructure, with TypeScript, Python, Cloudflare and AWS.",
  },
  hero: {
    status: "Available · remote · B2B contractor, international contract or full-time (CLT, Brazil)",
    title: "AI Engineer.",
    lead: "I build LLM, agent and RAG systems and ship them to production, from architecture to infrastructure.",
    sub: "I deliver complete systems with AI built in (SaaS for clinics, fintech, mobility, clinical support), from the app to the backend, with an agent-first workflow.",
    primary: { label: "Book a call", href: CONTACT.whatsapp, external: true },
    secondary: { label: "View cases", href: "#cases" },
    cv: { label: "Download CV (PDF)", href: CV_URL_EN },
    photoAlt: "Everton Resende",
    factsTitle: "Fact sheet",
    facts: [
      { term: "Focus", value: "LLMs, agents and RAG in production" },
      { term: "Career", value: "7+ years in software development" },
      { term: "Stack", value: "TypeScript · Python · Cloudflare · AWS · Postgres" },
      { term: "Location", value: "Pará de Minas, MG · remote (UTC−3)" },
      { term: "Status", value: "Available · B2B contractor, international contract or full-time (CLT, Brazil)", status: "production" },
    ],
    proofs: [
      {
        term: "Tazz",
        value: "AI",
        label: "AI agent in customer support, with evals, guardrails and human review",
        status: "production",
        statusLabel: "In production",
      },
      {
        term: "Tazz",
        value: "App",
        label: "Expo app architected and built from scratch with coding agents",
        status: "prototype",
        statusLabel: "Built",
      },
      {
        term: "Maximus",
        value: "RAG",
        label: "Clinical RAG chat used by anesthesiologists",
        status: "production",
        statusLabel: "In production",
      },
    ],
  },
  delivery: {
    label: "01 / What I deliver",
    title: "From architecture to production.",
    proofLabel: "Proof",
    items: [
      {
        index: "1.1",
        title: "I architect agents.",
        text: "Tool calling, layered guardrails, LLM‑as‑judge, evals and model fallback, in TypeScript. In Python, agent teams with triage and handoff (Agno).",
        proof: "Tazz agent · Python agents (Agno) at Coppay",
      },
      {
        index: "1.2",
        title: "I put RAG into production.",
        text: "Native vector search in production, replacing the classifier-based manual RAG I built first.",
        proof: "Maximus · clinical chat in production",
      },
      {
        index: "1.3",
        title: "I build and run the infra.",
        text: "Cloudflare (Workers, Durable Objects, Queues), Postgres with RLS, Docker and CI. On AWS: EC2, ELB, Lambda, SQS, S3, Aurora and Rekognition.",
        proof: "Tazz migration · Coppay · Dental\u00a0Smart · AWS in earlier projects",
      },
    ],
  },
  cases: {
    label: "02 / Cases",
    title: ["Shipped products.", "Not demos."],
    items: [
      {
        slug: "tazz",
        index: "01",
        meta: "Mobility · 2026–present",
        title: "Tazz.",
        hasPage: true,
        figure: {
          number: "Fig. 01",
          caption: "Architecture",
          direction: "vertical",
          nodes: [{ title: "Expo app" }, { title: "Workers" }, { title: "Postgres" }],
          footnote: "New app from scratch · coding agents in parallel",
        },
        problem: "The ride-hailing app’s backend hit GCP’s fixed 20 vCPU quota in São Paulo, and the Flutter app talked straight to Firebase.",
        whatIDid:
          "I architected and built the new Expo app and its new Workers from scratch, with coding agents working in parallel. Before that, I ported 100+ Cloud Functions to 8 Cloudflare Workers in ~47.5\u00a0h. I also built the support agent and took PIX with Asaas to production.",
        stack: "TypeScript · Expo · Cloudflare Workers · Durable Objects · Queues · Postgres",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Support agent with tool calling, guardrails, LLM‑as‑judge and evals, with a person reviewing every reply.",
          },
        ],
        result: "PIX in production since Sep 2026",
      },
      {
        slug: "dental-smart",
        index: "02",
        meta: "SaaS for clinics · 2025–present",
        title: "Dental Smart.",
        hasPage: true,
        figure: {
          number: "Fig. 02",
          caption: "Transcription and summary",
          direction: "vertical",
          nodes: [{ title: "Appointment" }, { title: "Whisper", note: "transcription" }, { title: "Llama", note: "summary" }],
          footnote: "Multi-tenant · RLS isolation",
        },
        problem:
          "Dental clinics needed finance, NFS-e invoices and WhatsApp messages in one system, with each clinic’s data isolated.",
        whatIDid:
          "I’ve been building the multi-tenant SaaS: AI appointment transcription, RLS isolation, scheduled WhatsApp messages, finance and NFS-e invoices.",
        stack: "Next.js · React · Supabase · Postgres RLS · Edge Functions · Groq",
        ai: [
          { status: "production", label: "In production", text: "Appointment transcription and summary (Whisper + Llama)." },
        ],
        result: "~20 clinics · 0 churn",
      },
      {
        slug: "maximus",
        index: "03",
        meta: "Healthcare · 2026",
        title: "Maximus.",
        hasPage: false,
        figure: {
          number: "Fig. 03",
          caption: "RAG",
          direction: "vertical",
          nodes: [
            { title: "Question", note: "text, image or voice" },
            { title: "Responses API", note: "gpt-5.4 · streaming" },
            { title: "file_search", note: "OpenAI vector store" },
          ],
          footnote: "Before: classifier + manual search. Now: native file_search",
        },
        problem:
          "Anesthesiologists needed fast clinical answers (doses, drugs, protocols) backed by a reference knowledge base, plus practice questions for Brazil’s anesthesiology board exam (TSA).",
        whatIDid:
          "I built the app in Expo and the API in Hono on Cloudflare Workers, with Supabase and RLS. The chat uses the Responses API with file_search over the reference knowledge base and code interpreter for charts, with streamed answers.",
        stack: "TypeScript · Expo · Hono · Workers · Supabase · OpenAI Responses API",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Clinical chat with RAG over the reference knowledge base, with questions by text, image or voice (gpt-4o-transcribe).",
          },
          {
            status: "production",
            label: "In production",
            text: "Board-exam-style (TSA) questions generated with structured output and validation, from the vector knowledge base.",
          },
          {
            status: "decision",
            label: "Decision",
            text: "I built manual RAG (a gpt-5-nano classifier + vector search), then switched to native file_search: the classifier was blocking legitimate searches.",
          },
        ],
        result: "Live, used by anesthesiologists",
      },
      {
        slug: "coppay",
        index: "04",
        meta: "Fintech · 2025–2026",
        title: "Coppay.",
        hasPage: false,
        figure: {
          number: "Fig. 04",
          caption: "Architecture",
          direction: "vertical",
          nodes: [
            { title: "App", note: "Expo" },
            { title: "BFF", note: "Hono · Workers" },
            { title: "BaaS", note: "Cronos → Asaas" },
          ],
          footnote: "Back office in Next.js · RBAC · audit log",
        },
        problem: "A fintech needed a digital account, credit and customer support running on a BaaS, from the app to the back office.",
        whatIDid:
          "I built the Expo app, the Hono BFF on Cloudflare Workers (Cronos, Asaas and HBI), the Next.js back office with RBAC and an audit log, and the AI features: email triage, LLM-assisted credit reviews and the WhatsApp agent. In Sep 2026, I built a new BFF on the Asaas BaaS, with one subaccount per customer, running side by side with the legacy one.",
        stack: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python · FastAPI",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Email triage (Workers AI), used by the team, and LLM-assisted credit reviews (gpt-oss-120b), used by the analysts.",
          },
          {
            status: "offline",
            label: "Built",
            text: "WhatsApp agent in Python (Agno + FastAPI) with triage to specialists, read-only tools and human handoff. It served real customers.",
          },
        ],
        result: "App in the stores with real account holders",
      },
      {
        slug: "davions",
        index: "05",
        meta: "SaaS for photographers · 2026–present",
        title: "Davions.",
        hasPage: false,
        figure: {
          number: "Fig. 05",
          caption: "Architecture",
          direction: "vertical",
          nodes: [{ title: "App", note: "React" }, { title: "10 Workers" }, { title: "Supabase (RLS) · R2" }],
          footnote: "Brazilian escrow on Asaas · SQL ledger",
        },
        problem:
          "A gallery SaaS for photographers, first built in Lovable, needed to be re-hosted and refactored onto its own architecture.",
        whatIDid:
          "I migrated and refactored the app onto 10 Cloudflare Workers with Supabase and RLS, and architected the escrow with Asaas: an SQL ledger and PIX payouts.",
        stack: "TypeScript · React · Cloudflare Workers · R2 · Supabase RLS · Asaas · Stripe Connect",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Blog post, caption and theme generation with Claude, through Cloudflare AI Gateway.",
          },
        ],
        result: "Delivered in Oct 2026",
      },
    ],
  },
  howIWork: {
    label: "03 / How I work",
    title: ["Agents write the code.", "I own it."],
    intro:
      "I work with agents the way I’d lead a team. I set the context, the architecture and the acceptance criteria. The agents write most of the code. I read it, debug it, require a green test suite before every commit and decide what goes to production.",
    pipelineLabel: "Pipeline",
    steps: [
      { index: "01", title: "Spec", text: "Definition of done, as verifiable criteria." },
      { index: "02", title: "Plan", text: "Small tasks, files and order." },
      { index: "03", title: "Parallel subagents", text: "One workstream per worktree." },
      { index: "04", title: "Review", text: "Code review and a second opinion from another model." },
      { index: "05", title: "Tests", text: "Green suite before every commit." },
      { index: "06", title: "Preview", text: "A preview version before deploying." },
      { index: "07", title: "Production", text: "Deploy with a documented rollback." },
    ],
    decide: {
      index: "3.1",
      title: "I decide",
      items: [
        { text: "Architecture and trade-offs" },
        { text: "What goes in and what stays out" },
        { text: "Acceptance criteria" },
        { text: "Where to use AI" },
        { text: "What goes to production" },
      ],
    },
    delegate: {
      index: "3.2",
      title: "I delegate to agents",
      items: [
        { text: "Writing the code" },
        { text: "Bulk sweeps and migrations" },
        { text: "First draft of the tests" },
        { text: "Researching docs and repositories" },
      ],
    },
    specs: [
      { term: "Quality", value: "CLAUDE.md per repository · acceptance criteria · review · tests as a commit gate" },
      {
        term: "In practice",
        value: "At Tazz, coordinator agents ran a backlog of ~200 workstreams for the new app in parallel sessions, one worktree each, reviewed by another model.",
      },
      { term: "This site", value: "It was rebuilt this way. The spec and the plan are in docs/ on GitHub.", link: { label: "See the spec", href: "https://github.com/evertonresende/portfolio-everton/blob/main/docs/superpowers/specs/2026-10-23-lp-v3-design.md", external: true } }
    ],
  },
  timeline: {
    label: "04 / Experience",
    title: "Experience.",
    rows: [
      { period: "Oct 2025 – Oct 2026", role: "AI Engineer", company: "Coppay", mode: "Full-time (CLT) · remote" },
      { period: "Nov 2022 – Oct 2025", role: "Software Developer", company: "Softplan", mode: "Full-time (CLT) · remote" },
      { period: "Nov 2018 – Oct 2021", role: "Software Developer", company: "FAPAM", mode: "Full-time (CLT) · hybrid" },
    ],
    education: {
      index: "4.1",
      title: "Education",
      items: [{ title: "Information Systems", detail: "FAPAM · Nov 2018 – Dec 2020 · not completed" }],
    },
  },
  contact: {
    label: "05 / Contact",
    title: "Let’s talk.",
    status: "Available · remote · B2B contractor, international contract or full-time (CLT, Brazil)",
    primary: { label: "Book a call", href: CONTACT.whatsapp, external: true },
    secondary: { label: "Download CV (PDF)", href: CV_URL_EN },
    listTitle: "Contact details",
    items: [
      { term: "Email", label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { term: "LinkedIn", label: "linkedin.com/in/evertonresende", href: CONTACT.linkedin },
      { term: "GitHub", label: "github.com/evertonresende", href: CONTACT.github },
      { term: "WhatsApp", label: "+55 37 99913-3556", href: CONTACT.whatsapp },
    ],
  },
};
