import type { HomeContent } from "../types";
import { AGENDA_URL, CV_URL, CONTACT } from "../shared";

export const home: HomeContent = {
  seo: {
    title: "Everton Resende · AI Engineer",
    description:
      "AI Engineer with 7+ years of product design. I build products with LLMs and agents and take them to production, with TypeScript and Cloudflare Workers.",
  },
  hero: {
    status: "Available · remote · contractor (PJ), CLT or international contract",
    title: "AI Engineer.",
    lead: "I build products with LLMs and agents and take them to production, backed by 7+ years of product design.",
    sub: "Today I deliver complete systems (SaaS for clinics, fintech, mobility), from the app to the backend, with an agent-first workflow.",
    primary: { label: "Book a call", href: AGENDA_URL, external: true },
    secondary: { label: "View cases", href: "#cases" },
    cv: { label: "Download CV (PDF)", href: CV_URL },
    photoAlt: "Everton Resende",
    factsTitle: "Fact sheet",
    facts: [
      { term: "Focus", value: "LLMs and agents in production" },
      { term: "Background", value: "7+ years of product design" },
      { term: "Stack", value: "TypeScript · Workers · Postgres" },
      { term: "Location", value: "Pará de Minas, MG · remote (UTC−3)" },
      { term: "Status", value: "Available · contractor (PJ), CLT or international", status: "production" },
    ],
    proofs: [
      { term: "Products", value: "{{CONFIRMAR: 5, se a Davions contar}}", label: "products in production" },
      {
        term: "Support",
        value: "AI",
        label: "AI agent serving real customers at Tazz",
        status: "production",
        statusLabel: "In production",
      },
      { term: "Cal.com", value: "2", label: "PRs merged into Cal.com" },
    ],
  },
  delivery: {
    label: "01 / What I deliver",
    title: "From design to production.",
    proofLabel: "Proof",
    items: [
      {
        index: "1.1",
        title: "I design.",
        text: "Product, UX and design systems. 7+ years deciding what is worth building before building it.",
        proof: "Softplan · FAPAM · SAT Bank{{CONFIRMAR: · Tazz design system, if the design is yours}}",
      },
      {
        index: "1.2",
        title: "I build.",
        text: "Front end, back end and infra in TypeScript: React, React Native/Expo, Cloudflare Workers and Postgres.",
        proof: "Tazz · Coppay · Dental Smart",
      },
      {
        index: "1.3",
        title: "I put AI into production.",
        text: "Agents with tool calling, guardrails and evals. And I know where not to use AI.",
        proof: "Tazz agent · Dental Smart transcription",
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
        meta: "Mobility · 2026",
        title: "Tazz.",
        hasPage: true,
        figure: {
          number: "Fig. 01",
          caption: "Architecture",
          direction: "vertical",
          nodes: [{ title: "App" }, { title: "22 Workers" }, { title: "Postgres" }],
          footnote: "~158 Cloud Functions → 22 Workers · ~47.5 h",
        },
        problem: "The ride-hailing app’s backend hit GCP’s fixed 20 vCPU quota in São Paulo, with the app live.",
        whatIDid:
          "I ported ~158 Cloud Functions to 22 Cloudflare Workers in ~47.5 h, orchestrating agents. Then I built the support agent and the PIX ledger, and now I’m building the new Expo app (pre-launch).",
        stack: "TypeScript · Cloudflare Workers · Durable Objects · Queues · Postgres · Expo",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Support agent with tool calling, guardrails, an LLM judge and evals, serving real customers.",
          },
        ],
        result: "PIX in production since Sep 2026 · agent serving real customers",
      },
      {
        slug: "dental-smart",
        index: "02",
        meta: "SaaS for clinics · 2023–present",
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
          "I have been designing the product since 2023 and building it since 2025: a multi-tenant SaaS with RLS isolation, scheduled WhatsApp messages, finance and NFS-e.",
        stack: "Next.js · React · Supabase · Postgres RLS · Edge Functions · Groq",
        ai: [
          { status: "production", label: "In production", text: "Appointment transcription and summary (Whisper + Llama)." },
          { status: "prototype", label: "Prototype", text: "X-ray analysis, in design only." },
        ],
        result: "~20 clinics · 0 churn",
      },
      {
        slug: "coppay",
        index: "03",
        meta: "Fintech · 2026–present",
        title: "Coppay.",
        hasPage: false,
        figure: {
          number: "Fig. 03",
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
          "I built the Expo app, the Hono BFF on Cloudflare Workers (Cronos, Asaas and HBI) and the Next.js back office with RBAC and an audit log. In Sep 2026, I built a new BFF on the Asaas BaaS, with one subaccount per customer, running side by side with the legacy one.",
        stack: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Email triage (Workers AI), used by the team, and LLM-assisted credit reviews (gpt-oss-120b), used by the analysts.",
          },
          {
            status: "offline",
            label: "Offline today",
            text: "WhatsApp agent in Python (Agno) with human handoff. It served customers; it has been offline since the server went down in Sep 2026.",
          },
        ],
        result: "App in the stores with real account holders",
      },
      {
        slug: "sat-bank",
        index: "04",
        meta: "Digital bank · 2025–2026",
        title: "SAT Bank.",
        hasPage: true,
        figure: {
          number: "Fig. 04",
          caption: "Decision",
          direction: "vertical",
          nodes: [
            { title: "Chatbot", note: "rejected by users", muted: true, rejected: true },
            { title: "Invisible rules", note: "categorization · balance alerts" },
          ],
          footnote: "No LLM, on purpose",
        },
        problem: "Opening personal and business accounts in a digital bank without losing users across 8 onboarding steps.",
        whatIDid:
          "I designed and built the Expo app, the BFF on the Cronos API in Cloudflare Workers, the admin and the website. Also USDT buying and selling.",
        stack: "TypeScript · Expo · Hono · Cloudflare Workers · D1 → Neon · Next.js",
        ai: [
          {
            status: "decision",
            label: "Decision",
            text: "Users rejected the chatbot. The help features became invisible rules, with no LLM: categorization and balance alerts.",
          },
        ],
        result: "App in the stores · USDT live since Feb 2026",
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
          "I re-hosted and refactored the app on 10 Cloudflare Workers with Supabase and RLS, and designed the escrow with Asaas: an SQL ledger and PIX payouts.",
        stack: "TypeScript · React · Cloudflare Workers · R2 · Supabase RLS · Asaas · Stripe Connect",
        ai: [
          {
            status: "production",
            label: "{{CONFIRMAR: in production?}}",
            text: "{{CONFIRMAR: are the generation features (blog, captions, themes) live? Which AI provider?}}",
          },
        ],
        result: "Contract delivered in Oct 2026 · escrow in dark launch · I’m still on the team as a freelancer",
      },
    ],
  },
  howIWork: {
    label: "03 / How I work",
    title: ["Agents write the code.", "I own it."],
    intro:
      "I work like someone leading a team. I set the context, the architecture and the acceptance criteria. The agents write most of the code. I read it, debug it and decide what goes to production.",
    pipelineLabel: "Pipeline",
    steps: [
      { index: "01", title: "Spec", text: "What done means, in verifiable criteria." },
      { index: "02", title: "Plan", text: "Small tasks, files and order." },
      { index: "03", title: "Parallel subagents", text: "One workstream per worktree." },
      { index: "04", title: "Review", text: "Code review and a second opinion from another model." },
      { index: "05", title: "Tests", text: "Green suite before every commit." },
      { index: "06", title: "Preview", text: "A preview version before the deploy." },
      { index: "07", title: "Production", text: "Deploy with a documented rollback." },
    ],
    decide: {
      index: "3.1",
      title: "I decide",
      items: [
        { text: "Architecture and trade-offs" },
        { text: "What goes in and what stays out" },
        { text: "Acceptance criteria" },
        { text: "Where not to use AI" },
        { text: "What goes to production" },
      ],
    },
    delegate: {
      index: "3.2",
      title: "I delegate",
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
        value: "At Tazz, I ported ~158 Cloud Functions to 22 Workers in ~47.5 h, with a coordinator agent, executors and a task queue.",
      },
      { term: "This site", value: "It was rebuilt this way. The spec and the plan are in docs/ on GitHub.", link: { label: "See the spec", href: "https://github.com/evertonresende/portfolio-everton/blob/main/docs/superpowers/specs/2026-10-23-lp-v3-design.md", external: true } }
    ],
  },
  foundations: {
    label: "04 / Design foundations",
    title: ["Where I learned to decide", "what to build."],
    rows: [
      {
        company: "Softplan",
        role: "Product Designer",
        text: "Products for the Public Prosecutor’s Office and public attorney offices. Recognized 10x in Softplayer A+.",
        period: "Nov 2022 – Oct 2025",
        slug: "softplan",
      },
      {
        company: "FAPAM",
        role: "UI/UX Designer",
        text: "Academic portal with 4,000+ students.",
        period: "Nov 2018 – Oct 2021",
        slug: "fapam",
      },
    ],
  },
  timeline: {
    label: "05 / Experience",
    title: "Experience.",
    rows: [
      { period: "Jun 2025 – present", role: "AI Engineer", company: "Freelance · SAT Bank, Dental Smart, Coppay, Tazz, Davions", mode: "Remote" },
      { period: "Oct 2025 – Mar 2026", role: "AI Product Designer", company: "SAT Bank", mode: "CLT · remote" },
      { period: "Nov 2022 – Oct 2025", role: "Product Designer", company: "Softplan", mode: "CLT · remote" },
      { period: "2023 – Jul 2025", role: "Product Designer", company: "Dental Smart (freelance)", mode: "Remote" },
      { period: "Nov 2021 – Oct 2022", role: "Product Designer", company: "Freelancer", mode: "Remote" },
      { period: "Nov 2018 – Oct 2021", role: "UI/UX Designer", company: "FAPAM", mode: "CLT · hybrid" },
    ],
    education: {
      index: "5.1",
      title: "Education",
      items: [
        { title: "UX Design", detail: "Design Circuit · Oct 2021 – Oct 2022" },
        { title: "Information Systems (not completed)", detail: "FAPAM · Nov 2018 – Dec 2020" },
      ],
    },
    openSource: {
      index: "5.2",
      title: "Open source",
      text: "2 PRs merged into Cal.com",
      date: "Feb 2026",
      links: [
        { label: "#27636", href: "https://github.com/calcom/cal.com/pull/27636", external: true },
        { label: "#27637", href: "https://github.com/calcom/cal.com/pull/27637", external: true },
      ],
    },
  },
  contact: {
    label: "06 / Contact",
    title: "Let’s talk.",
    status: "Available · remote · contractor (PJ), CLT or international contract",
    primary: { label: "Book a call", href: AGENDA_URL, external: true },
    secondary: { label: "Download CV (PDF)", href: CV_URL },
    listTitle: "Contact details",
    items: [
      { term: "Email", label: CONTACT.email, href: `mailto:${CONTACT.email}` },
      { term: "LinkedIn", label: "linkedin.com/in/evertonresende", href: CONTACT.linkedin },
      { term: "GitHub", label: "github.com/evertonresende", href: CONTACT.github },
      { term: "WhatsApp", label: "+55 37 99913-3556", href: CONTACT.whatsapp },
    ],
  },
};
