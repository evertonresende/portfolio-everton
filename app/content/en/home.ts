import type { HomeContent } from "../types";
import { CV_URL_EN, CONTACT } from "../shared.ts";

export const home: HomeContent = {
  seo: {
    title: "Everton Resende · AI Engineer",
    description:
      "AI Engineer with 7+ years in software development. I build LLM, agent and RAG systems and ship them to production, from architecture to infrastructure, with TypeScript, Python, Cloudflare and AWS.",
  },
  hero: {
    status: "Available · remote · immediate start · B2B contractor or full-time in Brazil (CLT) · occasional travel",
    title: "AI Engineer",
    tagline: "AI agents in production.",
    lead: "From client scoping to deployment: I architect and ship AI agents, RAG and LLM systems, leading teams of 2 to 5 people.",
    sub: "I ship whole products, from the app to the backend, in SaaS for clinics, fintech, mobility, clinical support and public education. I work with coding agents and own what ships.",
    primary: { label: "Book a call", href: CONTACT.whatsapp, external: true },
    secondary: { label: "View cases", href: "#cases" },
    cv: { label: "Download CV (PDF)", href: CV_URL_EN },
    photoAlt: "Everton Resende",
    factsTitle: "Fact sheet",
    facts: [
      { term: "Focus", value: "LLMs, agents and RAG in production" },
      { term: "Career", value: "7+ years in software development" },
      { term: "Stack", value: "Python · TypeScript · LangChain/LangGraph · AWS · Cloudflare · Postgres" },
      { term: "Location", value: "Pará de Minas, Brazil · remote (UTC−3)" },
      { term: "Languages", value: "Portuguese (native) · English: good reading and listening, speaking still developing" },
      { term: "Status", value: "Available · immediate start", status: "production" },
    ],
  },
  delivery: {
    label: "01 / What I deliver",
    title: "From prompt to payout.",
    proofLabel: "Proof",
    items: [
      {
        index: "1.1",
        title: "Agents with evals and guardrails.",
        text: "In TypeScript: tools with minimal scope, a guardrail that checks sources and numbers, a calibrated LLM‑as‑judge, evals with a gate, and model fallback. In Python: agent teams with triage and handoff, built on Agno.",
        proof: "Tazz agent · Python agents (Agno) at Coppay",
      },
      {
        index: "1.2",
        title: "RAG, and when to skip it.",
        text: "At Maximus, I put OpenAI file_search into production, replacing the classifier-based RAG I built first. At Tazz, I decided against RAG for a small curated knowledge base, with written criteria for when to revisit it.",
        proof: "Maximus clinical chat · Tazz knowledge-base decision",
      },
      {
        index: "1.3",
        title: "Infra I run myself.",
        text: "I moved Tazz’s compute off GCP’s fixed 20 vCPU quota by porting 100+ Cloud Functions to Workers, and I isolate each Dental\u00a0Smart clinic’s data with Postgres RLS. Day to day: Cloudflare (Workers, Durable Objects, Queues), Docker and CI. On AWS: EC2, ELB, Lambda, SQS, S3, Aurora and Rekognition.",
        proof: "Tazz migration · Coppay · Dental\u00a0Smart · AWS in earlier projects",
      },
      {
        index: "1.4",
        title: "Payments, reversals and payouts.",
        text: "On Tazz’s double-entry ledger, I built ride payment, reversals that mirror the legs, Pix payouts and chargeback holds. Each external event becomes a unique idempotency key in the database, so a repeated webhook never posts twice.",
        proof: "Tazz ledger · Davions escrow · Coppay digital account",
      },
    ],
  },
  cases: {
    label: "02 / Cases",
    title: ["Shipped products."],
    items: [
      {
        slug: "tazz",
        index: "01",
        meta: "Mobility · 6 months in 2026 · Consulting and execution",
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
          "I architected and built the new Expo app and its Workers from scratch, with coding agents working in parallel. Before that, I ported 100+ Cloud Functions to 8 Cloudflare Workers in ~47.5\u00a0h. I also built the support agent and the ledger’s money flows, and shipped Pix (Brazil’s instant payments) via Asaas.",
        stack: "TypeScript · Expo · Cloudflare Workers · Durable Objects · Queues · Postgres",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Support agent for riders and drivers. It looks up accounts and rides through tools, a guardrail checks the sources and numbers in each reply, and a person reviews every draft. Same model, same 31 eval cases: a new prompt, orchestrator and guardrail took passing cases from 10 to 23 and handoffs from 80.6% to 38.7%.",
          },
          {
            status: "decision",
            label: "Decision",
            text: "With the new prompt, 9 of the 31 cases still failed, and in 5 of them the model searched the knowledge base again instead of answering, despite a prompt rule against it. I fixed it in the orchestrator: a repeated call doesn’t run, and the last of 3 tool rounds comes without tools, so the model has to answer. Tool-loop failures fell from 5 to 1.",
          },
        ],
        result: "Agent in production · Pix since Sep 2026 · new app on its way to the stores",
      },
      {
        slug: "rota-protegida",
        index: "02",
        meta: "Public education · 6 months in 2026 · Consulting and execution",
        title: "Rota Protegida.",
        hasPage: false,
        figure: {
          number: "Fig. 02",
          caption: "Recognition",
          direction: "vertical",
          nodes: [
            { title: "IP camera", note: "photo over SFTP" },
            { title: "AuraFace", note: "512-D embedding" },
            { title: "Vectorize", note: "similarity search" },
          ],
          footnote: "Gray zone: AWS Rekognition breaks the tie · then human review",
        },
        problem:
          "A city government needed to record when students enter and leave school and alert families right away, with children's biometrics handled under Brazil's data protection law (LGPD).",
        whatIDid:
          "I architected and built the whole system. IP cameras send photos over SFTP to a Python service on a VPS, which detects the face and extracts the embedding (AuraFace). The Hono API on Cloudflare Workers searches Vectorize, records attendance and alerts guardians over WhatsApp and email. The web dashboard serves the city, the schools and human review. For LGPD: mandatory consent, automatic retention per data type, a log of who views photos, and per-school isolation in the vector index.",
        stack: "TypeScript · Python · Hono · Cloudflare Workers · D1 · Vectorize · R2 · Queues · AWS Rekognition",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Face recognition as a cascade: AuraFace and vector search on Vectorize; in the gray zone, AWS Rekognition breaks the tie through a queue, and anything still uncertain goes to human review.",
          },
          {
            status: "decision",
            label: "Decision",
            text: "I tested a second model (AdaFace) alongside AuraFace and compared 862 events with the AWS verdict: it recovered no match that AuraFace had missed and reinforced 45 wrong rejections. I turned it off and kept AuraFace + AWS in the gray zone.",
          },
        ],
        result: "In production since Jul 2026 · handed over to the city in Sep 2026",
      },
      {
        slug: "dental-smart",
        index: "03",
        meta: "SaaS for clinics · 1 year, 2025–2026 · Consulting and execution",
        title: "Dental Smart.",
        hasPage: true,
        figure: {
          number: "Fig. 03",
          caption: "From appointment to record",
          direction: "vertical",
          nodes: [
            { title: "Recorded appointment", note: "browser" },
            { title: "Whisper", note: "Portuguese transcription" },
            { title: "Llama 3.3 70B", note: "clinical note in 4 sections" },
          ],
          footnote: "Lands in the patient record in real time · the dentist reviews it",
        },
        problem:
          "Dental clinics needed scheduling, finance, e-invoicing (Brazil’s NFS-e) and WhatsApp in one system, with each clinic’s health data isolated. And the record of each appointment was typed by hand.",
        whatIDid:
          "I’ve been building the multi-tenant SaaS. The patient fills in the medical history through a WhatsApp link before arriving. The dentist records the visit, and the AI writes the clinical note into the patient’s record. Also: RLS per clinic, finance, NFS-e invoices and scheduled messages.",
        stack: "Next.js · React · Supabase · Postgres RLS · Edge Functions · Groq",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "The dentist records the appointment in the browser. Whisper transcribes it, and Llama 3.3 70B writes a note in 4 sections (complaints, clinical findings, procedures and next steps) straight into the patient record, with an \u201cAI-generated\u201d badge for the dentist to review.",
          },
        ],
        result: "AI clinical notes in production since Feb 2026 · RLS per clinic",
      },
      {
        slug: "maximus",
        index: "04",
        meta: "Healthcare · 5 months in 2026 · Consulting and execution",
        title: "Maximus.",
        hasPage: false,
        figure: {
          number: "Fig. 04",
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
        result: "Used by anesthesiologists · RAG chat and board-exam (TSA) practice questions",
      },
      {
        slug: "coppay",
        index: "05",
        meta: "Fintech · 2025–2026 · Consulting and execution",
        title: "Coppay.",
        hasPage: false,
        figure: {
          number: "Fig. 05",
          caption: "Architecture",
          direction: "vertical",
          nodes: [
            { title: "App", note: "Expo" },
            { title: "BFF", note: "Hono · Workers" },
            { title: "BaaS", note: "Cronos → Asaas" },
          ],
          footnote: "Back office in Next.js · RBAC · audit log",
        },
        problem: "A fintech needed a digital account, credit and customer support running on a Banking-as-a-Service (BaaS) provider, from the app to the back office.",
        whatIDid:
          "I built the Expo app and the Hono BFF on Cloudflare Workers, integrated with Cronos, Asaas and HBI. I also built the Next.js back office, with RBAC and an audit log, and the AI features: email triage, LLM-assisted credit reviews and the WhatsApp agent. In Sep 2026, I built a new BFF on the Asaas BaaS, with one subaccount per customer, running side by side with the legacy one.",
        stack: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python · FastAPI",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Credit review: gpt-oss-120b cross-checks the credit bureau, the Central Bank credit registry (SCR) and the loan simulations, and returns a 4-level risk tier, amount, installment and conditions in a fixed schema. Estimated income alone never leads to a rejection: it becomes an approval conditional on proof of income, and the analyst makes the final call. It costs ~R$0.01 per review, with results reused for 30 days and a cap of 100 lookups per operator per day.",
          },
          {
            status: "production",
            label: "In production",
            text: "Team inbox: every email is triaged (category, priority and summary) in a Durable Object per mailbox, and a button suggests a reply from the thread. I kept spam detection out of the AI: in a fintech a false positive costs more, so SPF, DKIM and DMARC decide.",
          },
          {
            status: "offline",
            label: "Built",
            text: "WhatsApp agent in Python (Agno + FastAPI): a lead agent routes to 3 specialists (loans, account and support), with read-only tools and handoff. The tools ignore the model’s arguments and use the conversation’s trusted context, which blocks IDOR. It passed a live battery of 6 scenarios, including prompt injection.",
          },
        ],
        result: "App in the stores with real account holders · LLM credit assessments at ~R$0.01 each",
      },
      {
        slug: "davions",
        index: "06",
        meta: "SaaS for photographers · 6 months in 2026 · Consulting and execution",
        title: "Davions.",
        hasPage: false,
        figure: {
          number: "Fig. 06",
          caption: "Architecture",
          direction: "vertical",
          nodes: [{ title: "App", note: "React" }, { title: "10 Workers" }, { title: "Supabase (RLS) · R2" }],
          footnote: "Brazilian escrow on Asaas · SQL ledger",
        },
        problem:
          "A gallery SaaS for photographers, first built in Lovable, needed to be re-hosted and refactored onto its own architecture.",
        whatIDid:
          "I migrated and refactored the app onto 10 Cloudflare Workers with Supabase and RLS, and architected the escrow with Asaas: an SQL ledger and Pix payouts. I also moved the app’s 10 AI functions onto Workers, through Cloudflare AI Gateway.",
        stack: "TypeScript · React · Cloudflare Workers · R2 · Supabase RLS · Asaas · Stripe Connect",
        result: "Moved to 10 Workers, with escrow and Pix payouts · delivered in Oct 2026",
      },
    ],
  },
  howIWork: {
    label: "03 / How I work",
    title: ["Agents write the code.", "I own it."],
    intro:
      "I lead agents the way I’d lead a team: I set the context, the architecture and the acceptance criteria, and they write most of the code. I read it, debug it, require a green test suite before every commit and decide what goes to production.",
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
      { term: "MCP", value: "I connect agents to systems through MCP: local (stdio) and remote (HTTP) servers, with a token, OAuth or no auth, one per project, with production kept apart from staging. Day to day: Supabase, Stripe, Sentry, Neon and Playwright. I also write MCP servers." },
      { term: "Frameworks", value: "I also use LangChain, LangGraph and LangSmith." },
      { term: "Agent with a real model", value: "A booking agent for vacation rentals, with evals and code checks on the reply, evaluated with the real model (Claude Haiku 5.5).", link: { label: "See the repo", href: "https://github.com/evertonresende/agente-concierge", external: true } },
      { term: "Evals", value: "A public demo, with synthetic data only, of how I test an agent before a change ships. It has 40 cases, a judge checked against 26 hand labels, and a CI gate that fails on any unsafe reply.", link: { label: "See the repo", href: "https://github.com/evertonresende/agent-evals-demo", external: true } },
      { term: "This site", value: "It was rebuilt with this same process. The spec and the plan are in docs/ on GitHub.", link: { label: "See the spec", href: "https://github.com/evertonresende/portfolio-everton/blob/main/docs/superpowers/specs/2026-10-23-lp-v3-design.md", external: true } }
    ],
  },
  timeline: {
    label: "04 / Experience",
    title: "Experience.",
    rows: [
      { period: "Oct 2025 – Nov 2026", role: "AI consultant and engineer", company: "B2B contractor · Coppay, Tazz, Rota Protegida, Dental Smart, Maximus, Davions", mode: "remote" },
      { period: "Oct 2025 – Oct 2026", role: "AI Engineer", company: "Coppay", mode: "B2B contractor · remote" },
      { period: "Nov 2022 – Oct 2025", role: "Software Developer", company: "Softplan · TypeScript, Node, React, SQL, AWS, Docker", mode: "Full-time (CLT) · remote" },
      { period: "Nov 2021 – Oct 2022", role: "Freelance Developer", company: "", mode: "" },
      { period: "Nov 2018 – Oct 2021", role: "Software Developer", company: "FAPAM · TypeScript, Node, React, SQL, AWS, Docker", mode: "Full-time (CLT) · hybrid" },
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
    status: "Available · remote · immediate start · B2B contractor or full-time in Brazil (CLT) · occasional travel",
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
