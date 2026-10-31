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
    sub: "I deliver complete systems with AI built in (SaaS for clinics, fintech, mobility, clinical support, public education), from the app to the backend, with an agent-first workflow.",
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
        value: "23/31",
        label: "Cases passed in the support agent’s evals (up from 10); the agent runs under human review",
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
        text: "Tools with minimal scope, a guardrail that checks sources and numbers, a calibrated LLM‑as‑judge, evals with a gate and model fallback, in TypeScript. In Python, agent teams with triage and handoff (Agno).",
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
            text: "Support agent for riders and drivers. It looks up accounts and rides through tools, only states what has a source, and a person reviews every draft. In evals, a new prompt and guardrail took passing cases from 10 to 23 out of 31.",
          },
        ],
        result: "PIX in production since Sep 2026",
      },
      {
        slug: "rota-protegida",
        index: "02",
        meta: "Public education · 2026",
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
          "I architected and built the whole system. IP cameras send photos over SFTP to a Python service on a VPS, which detects the face and extracts the embedding (AuraFace). The Hono API on Cloudflare Workers searches Vectorize, records attendance and alerts guardians over WhatsApp and email. The web dashboard serves the city, the schools and human review.",
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
            text: "I tested a second model (AdaFace) as an ensemble and measured 862 events against the AWS verdict: no matches saved and 45 wrong rejections reinforced. I turned it off and kept AuraFace + AWS in the gray zone.",
          },
        ],
        result: "In production since Jul 2026 · handed over to the city in Sep 2026",
      },
      {
        slug: "dental-smart",
        index: "03",
        meta: "SaaS for clinics · 2025–present",
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
          "Dental clinics needed scheduling, finance, NFS-e invoices and WhatsApp in one system, with each clinic’s health data isolated. And the record of each appointment was typed by hand.",
        whatIDid:
          "I’ve been building the multi-tenant SaaS with AI inside the appointment. The patient fills in the medical history through a WhatsApp link before arriving. The dentist records the visit, and the clinical note shows up in the patient’s record. Also: RLS per clinic, finance, NFS-e invoices and scheduled messages.",
        stack: "Next.js · React · Supabase · Postgres RLS · Edge Functions · Groq",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "The dentist records the appointment in the browser. Whisper transcribes it, and Llama 3.3 70B writes a note in 4 sections (complaints, clinical findings, procedures and next steps) straight into the patient record, with an \u201cAI-generated\u201d badge for the dentist to review.",
          },
        ],
        result: "~20 clinics · 0 churn",
      },
      {
        slug: "maximus",
        index: "04",
        meta: "Healthcare · 2026",
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
        result: "Live, used by anesthesiologists",
      },
      {
        slug: "coppay",
        index: "05",
        meta: "Fintech · 2025–2026",
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
        problem: "A fintech needed a digital account, credit and customer support running on a BaaS, from the app to the back office.",
        whatIDid:
          "I built the Expo app, the Hono BFF on Cloudflare Workers (Cronos, Asaas and HBI), the Next.js back office with RBAC and an audit log, and the AI features: email triage, LLM-assisted credit reviews and the WhatsApp agent. In Sep 2026, I built a new BFF on the Asaas BaaS, with one subaccount per customer, running side by side with the legacy one.",
        stack: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python · FastAPI",
        ai: [
          {
            status: "production",
            label: "In production",
            text: "Credit review: gpt-oss-120b cross-checks the credit bureau, the Central Bank credit registry (SCR) and the loan simulations, and returns a 4-level risk tier, amount, installment and conditions in a fixed schema. Presumed income alone never rejects: it becomes an approval conditional on proof of income. The analyst decides. It costs ~R$0.01 per review, with results reused for 30 days and a cap of 100 lookups per operator per day.",
          },
          {
            status: "production",
            label: "In production",
            text: "Team inbox: every email is triaged (category, priority and summary) in a Durable Object per mailbox, and a button suggests a reply from the thread. I took spam away from the AI: in a fintech a false positive costs more, so SPF, DKIM and DMARC decide.",
          },
          {
            status: "offline",
            label: "Built",
            text: "WhatsApp agent in Python (Agno + FastAPI): a lead agent routes to 3 specialists (loans, account and support), with read-only tools and handoff. The tools ignore the model’s arguments and use the conversation’s trusted context, which blocks IDOR. It passed a live battery of 6 scenarios, including prompt injection.",
          },
        ],
        result: "App in the stores with real account holders",
      },
      {
        slug: "davions",
        index: "06",
        meta: "SaaS for photographers · 2026–present",
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
          "I migrated and refactored the app onto 10 Cloudflare Workers with Supabase and RLS, and architected the escrow with Asaas: an SQL ledger and PIX payouts. I also moved the app’s 10 AI functions onto Workers, through Cloudflare AI Gateway.",
        stack: "TypeScript · React · Cloudflare Workers · R2 · Supabase RLS · Asaas · Stripe Connect",
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
