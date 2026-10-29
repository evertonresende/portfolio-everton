import type { CaseDetail } from "../../types";

export const tazz: CaseDetail = {
  kicker: "Case 01 · Mobility · 2026 – present",
  title: "Tazz.",
  lead: "A ride-hailing app in Brazil. I joined to get the backend past a quota limit and stayed to build the support agent, the PIX ledger and the new app.",
  factsTitle: "Fact sheet",
  facts: [
    { term: "Role", value: "Architecture, back end, AI and app" },
    { term: "Period", value: "2026 – present" },
    { term: "Stack", value: "TypeScript · Cloudflare Workers · Durable Objects · Queues · Postgres · Expo", mono: true },
    { term: "AI", value: "Serving real customers", status: "production", statusLabel: "In production" },
  ],
  stats: [
    { term: "Migration", value: "~158 → 22", label: "from Cloud Functions to Cloudflare Workers" },
    { term: "Duration", value: "~47.5 h", label: "for the full port" },
    { term: "Payments", value: "Sep 2026", label: "PIX in production" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problem",
      title: "It hit the region’s ceiling.",
      stat: { value: "20", label: "vCPU · fixed quota · São Paulo" },
      paragraphs: [
        "The backend ran on ~158 Cloud Functions on GCP and hit the fixed 20 vCPU quota in the São Paulo region, with the app live.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Context",
      title: "Swapping the engine mid-flight.",
      paragraphs: [
        "A ride-hailing app in Flutter, with Firestore and Realtime Database. What had to change was the compute. The data could stay where it was.",
      ],
    },
    {
      id: "papel",
      label: "03 / My role",
      title: "End-to-end engineering.",
      columns: [
        {
          index: "3.1",
          title: "AI and back end.",
          items: [
            { text: "Support agent with tools, guardrails, LLM‑as‑judge and evals" },
            { text: "Strangler‑fig migration to Cloudflare Workers" },
            { text: "Double-entry ledger and PIX with Asaas" },
          ],
        },
        {
          index: "3.2",
          title: "Apps and panels.",
          items: [
            { text: "Expo app to replace the Flutter one" },
            { text: "Component library for the new app, with tokens and 2 themes" },
            { text: "New admin app and support console, with human handoff" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Architecture",
      title: "Strangler‑fig at the edge.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Migration",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Flutter" },
            {
              title: "Gateway",
              note: "Worker",
              branch: [{ title: "Routes not yet migrated", muted: true }, { title: "Legacy functions", note: "GCP", muted: true }],
            },
            { title: "Domain Workers" },
            { title: "Firestore and Realtime Database", note: "GCP" },
          ],
        },
        {
          number: "Fig. 02",
          caption: "Support",
          direction: "horizontal",
          nodes: [
            { title: "Channels", note: "WhatsApp, Instagram, app, website, email" },
            { title: "Support", note: "Queues + DO per conversation" },
            { title: "Agent", note: "LLM via AI Gateway" },
            { title: "Tools", note: "read-only, allowlist, audit" },
            { title: "Human operator", note: "handoff" },
          ],
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Where AI comes in",
      title: "In customer support.",
      specs: [
        { term: "Model", value: "OpenAI via AI Gateway, with fallback. Claude selectable in the admin panel." },
        { term: "Tools", value: "5 read-only tools, with an allowlist and auditing. At most 3 rounds." },
        { term: "Guardrails", value: "Layered checks, LLM‑as‑judge and redaction of personal data." },
        { term: "Evals", value: "Offline evals with datasets, a gate and a comparison of 4 models. Shadow and canary rollout." },
        { term: "Status", value: "Serving real customers, with human handoff.", status: "production", statusLabel: "In production" },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisions and trade-offs",
      title: "What stayed out, on purpose.",
      items: [
        {
          index: "6.1",
          badge: "Not used",
          title: "No RAG in the MVP.",
          text: "The knowledge base has 58 curated entries, each with an owner, and keyword search. The decision defines when to revisit it: only if the corpus exceeds 200 KB of useful text, \"I don’t know\" answers due to missing context exceed 10% for two weeks in a row, and someone owns the curation.",
        },
        {
          index: "6.2",
          title: "Read-only tools.",
          text: "All 5 tools only read data, with an allowlist and auditing, and the agent can hand the conversation off to a human.",
        },
        {
          index: "6.3",
          title: "Strangler‑fig, not big bang.",
          text: "Migrated routes went through service bindings behind the gateway. Routes not yet migrated kept being served by the functions.",
        },
        { index: "6.4", title: "Only the compute moved.", text: "Firestore and RTDB stayed on GCP. The limit was the vCPU quota." },
        {
          index: "6.5",
          title: "Money, isolated.",
          text: "An isolated payments service, a double-entry ledger with no public route, and HMAC-signed webhooks.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Result",
      title: "PIX and the agent are live.",
      paragraphs: ["I ported ~158 Cloud Functions to 22 Workers in ~47.5 h. Then PIX went into production in Sep 2026."],
      stats: [
        { term: "AI", value: "AI", label: "Agent serving real customers, with human handoff.", status: "production", statusLabel: "In production" },
      ],
    },
  ],
  next: { slug: "dental-smart", index: "02", title: "Dental Smart." },
  seo: {
    title: "Tazz: migration to Cloudflare Workers and a support agent · Everton Resende",
    description:
      "How I ported ~158 Cloud Functions to 22 Cloudflare Workers in ~47.5 h and built a support agent with tool calling, guardrails and evals in production.",
  },
};
