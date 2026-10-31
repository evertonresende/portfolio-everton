import type { CaseDetail } from "../../types";

export const tazz: CaseDetail = {
  kicker: "Case 01 · Mobility · 2026 – present",
  title: "Tazz.",
  lead: "A ride-hailing app in Brazil. I architected and built the new Expo app and its new Workers from scratch, with AI agents writing the code in parallel. I also moved the backend’s compute to Cloudflare and shipped the support agent and PIX.",
  factsTitle: "Fact sheet",
  facts: [
    { term: "Role", value: "Architecture, app, backend and AI" },
    { term: "Period", value: "2026 – present" },
    { term: "Stack", value: "TypeScript · Expo · Cloudflare Workers · Durable Objects · Queues · Postgres", mono: true },
    { term: "AI", value: "Agent under human review", status: "production", statusLabel: "In production" },
    { term: "New app", value: "Expo, to replace the Flutter app in the stores", status: "prototype", statusLabel: "Built" },
  ],
  stats: [
    { term: "Agent", value: "23/31", label: "cases passed in evals (up from 10), with a new prompt and guardrail" },
    { term: "Migration", value: "100+ → 8", label: "Cloud Functions → Cloudflare Workers in ~47.5 h" },
    { term: "Payments", value: "Sep 2026", label: "PIX in production" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problem",
      title: "A quota ceiling and an app tied to Firebase.",
      stat: { value: "20", label: "vCPU · fixed quota · São Paulo" },
      paragraphs: [
        "The backend ran on ~158 Cloud Functions on GCP and hit the fixed 20 vCPU quota in the São Paulo region, with the app live.",
        "Moving the backend was not enough to leave GCP. The Flutter app talked straight to Firestore, Realtime Database, Storage and Firebase Auth through the SDK, even in native code.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Context",
      title: "Swapping the engine mid-flight.",
      paragraphs: [
        "First I swapped the HTTP compute: it moved to Cloudflare Workers, and the data stayed on GCP. In Sep 2026, I started a new Expo app from scratch, as a proof of concept, that never talks to Firestore, Realtime Database or Firebase Auth directly. On Sep 8, it became the planned replacement for the Flutter app in the stores. In the meantime, the Flutter app stays in production.",
      ],
    },
    {
      id: "papel",
      label: "03 / My role",
      title: "End-to-end engineering.",
      columns: [
        {
          index: "3.1",
          title: "AI and backend.",
          items: [
            { text: "Support agent with tools, guardrails, LLM‑as‑judge and evals" },
            { text: "Orchestrating the coding agents that built the new app and Workers" },
            { text: "Strangler‑fig migration to Cloudflare Workers" },
            { text: "PIX with Asaas, on the double-entry ledger" },
          ],
        },
        {
          index: "3.2",
          title: "New app.",
          items: [
            { text: "Expo app from scratch, for riders and drivers" },
            { text: "In-house auth, a realtime hub and an API on Workers over Postgres" },
            { text: "Component library for the new app, with tokens and 2 themes" },
            { text: "New admin app and support console, with human handoff" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Architecture",
      title: "Two apps on the same edge.",
      figures: [
        {
          number: "Fig. 01",
          caption: "New app",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Expo · riders and drivers" },
            {
              title: "In-house Workers",
              note: "auth · API · rides /v1",
              branch: [{ title: "Realtime hub", note: "Durable Object per city · WebSocket" }],
            },
            { title: "Postgres", note: "PlanetScale · Hyperdrive" },
          ],
          footnote: "Built for OTA from the first build · Firebase Auth only checks the password on the first login",
        },
        {
          number: "Fig. 02",
          caption: "Migration",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Flutter" },
            {
              title: "Gateway",
              note: "Worker",
              branch: [{ title: "Routes not migrated", muted: true }, { title: "Legacy functions", note: "GCP", muted: true }],
            },
            { title: "Domain Workers" },
            { title: "Firestore and Realtime Database", note: "GCP" },
          ],
          footnote: "During the port",
        },
        {
          number: "Fig. 03",
          caption: "Support",
          direction: "horizontal",
          nodes: [
            { title: "Channels", note: "WhatsApp, Instagram, app, website, email" },
            { title: "Gate", note: "DO per conversation · risk and human requests" },
            { title: "Agent", note: "GPT-5.6 Luna · GLM fallback on Workers AI" },
            { title: "Tools", note: "9 · customer ID set by the server" },
            { title: "Guardrail", note: "sources, numbers and status checked" },
            { title: "Human operator", note: "sends, edits or discards" },
          ],
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Where AI comes in",
      title: "An agent that only states what has a source.",
      paragraphs: [
        "In Jul 2026, support got ~335 messages a day from riders and drivers, across 5 channels. Drivers stuck in sign-up alone added up to 1,237 conversations in 90 days, 66% of WhatsApp.",
        "Before the model, every message goes through a gate: risk words go to a priority human queue, a request for a person goes straight to one, and prompt injection is detected and audited. Tax IDs, cards, emails, phone numbers and locations are masked before anything goes to the provider. The model looks up the account, rides, payments and the knowledge base through 9 tools, and the customer ID comes from the server, never from the model.",
        "After the model, the guardrail checks the reply: every cited source must exist, every number must appear in a source or in the customer’s own message, and any status claim needs a source. What passes becomes a draft for the operator. What fails goes to the human queue.",
      ],
      specs: [
        { term: "Model", value: "GPT-5.6 Luna, with automatic fallback to GLM 5.3 Flash on Workers AI. 12 fixed intents and at most 3 tool-call rounds; in the last one, the model has to answer." },
        { term: "LLM‑as‑judge", value: "It reviews only what the word filter blocked and releases false positives. It never blocks on its own. I calibrated it before switching it on: on 55 labeled sentences (20 legitimate, 35 that must fail), a 0.3 threshold gave 0 false blocks and 0 bypasses, at a 543 ms p50. From 0.5 up, 1 bypass got through." },
        { term: "Evals", value: "31 cases (7 adversarial): invalid JSON, intent, handoff, valid citation, latency and unsafe replies. Gate: zero unsafe replies. I compared 4 models on the same dataset; the production model at the time passed 4 out of 31." },
        { term: "What moved", value: "Same model, same 31 cases: with prompt v5 and a revised orchestrator and guardrail, passing cases went from 10 to 23, and handoffs fell from 80.6% to 38.7%, at a 2.0 s p50." },
        { term: "Status", value: "It ran in shadow mode in production, writing without sending, and in a live pilot with 3 test accounts. Today it runs under supervision: the AI writes a draft, and a person on the team sends, edits or discards it.", status: "production", statusLabel: "In production" },
      ],
    },
    {
      id: "construcao",
      label: "06 / How it was built",
      title: "A team of agents, with human gates.",
      paragraphs: [
        "I started the app from scratch on Sep 4, 2026. A discovery run with 12 agents read the Flutter app and the Expo SDK 57 docs, and wrote specs with facts cited by file and line.",
        "Then coordinator agents, one after another, ran a backlog of ~200 workstreams in parallel sessions, each in its own worktree, and merged the results. The first integration reached main on Sep 8, 2026.",
      ],
      figures: [
        {
          number: "Fig. 04",
          caption: "Building with agents",
          direction: "horizontal",
          nodes: [
            { title: "Discovery", note: "reads the Flutter app" },
            { title: "Backlog", note: "workstreams in waves" },
            { title: "Coordinator", note: "agent · merges" },
            { title: "Workstreams", note: "parallel · 1 worktree each" },
            { title: "Review", note: "another provider per workstream" },
            { title: "Human gates", note: "database, main and stores" },
          ],
        },
      ],
      specs: [
        { term: "Architecture", value: "I set the architecture in the app spec: in-house auth, accounts in Postgres, a realtime hub and OTA support from the first build." },
        { term: "Evidence", value: "Each workstream ends with one proof per acceptance criterion. The coordinator runs the checks again before merging." },
        { term: "Review", value: "Each workstream is reviewed by a model from another provider. On top of that, 4 consolidated rounds gave GO or NO-GO, and the first one caught 2 critical regressions before main." },
        { term: "Model by risk", value: "A stronger model for money, auth, native code and architecture. A lighter one for 1:1 ports and simple screens." },
        { term: "Gates", value: "Database migrations, merges to main, redeploys of production workers and store builds were out of reach for agents alone: they prepared them, and a human approved, sometimes for a whole wave." },
      ],
    },
    {
      id: "decisoes",
      label: "07 / Decisions and trade-offs",
      title: "What I chose, and why.",
      items: [
        {
          index: "7.1",
          title: "A curated knowledge base with keyword search.",
          text: "The knowledge base has 58 curated entries, each approved before it goes live, and keyword search. The corpus was ~71 KB, with ~5 KB of useful support content. The decision defines when to revisit RAG: only if the corpus exceeds 200 KB of useful text, \"I don’t know\" answers due to missing context exceed 10% for two weeks in a row, and someone owns the curation.",
        },
        {
          index: "7.2",
          title: "Tools with minimal scope.",
          text: "9 tools: 7 only read (identity, account, rides, payments, tickets and the knowledge base) and 2 have side effects (internal note and handoff). The customer ID comes from the server, and everything goes through an allowlist and auditing.",
        },
        {
          index: "7.3",
          title: "Fixed intents, counted rounds.",
          text: "The model kept inventing intent names, and each new name became a handoff, so the list was fixed at 12. Tool-loop overflow was the biggest source of handoffs, so the limit is 3 rounds, and the last one comes without tools so the model has to answer.",
        },
        {
          index: "7.4",
          title: "A judge that only releases.",
          text: "The word filter blocks claims without a source. The LLM judge steps in only on those blocks and releases false positives. Against the suite’s 39 legitimate sentences, the revised rule gave 0 false positives.",
        },
        {
          index: "7.5",
          title: "A new app, not a patch on Flutter.",
          text: "The GCP exit discovery showed that the biggest coupling was in the client: the Flutter app talked to Firebase straight through the SDK. For its data, the new app talks only to in-house Workers, and the Flutter app stays in the stores until the swap.",
        },
        {
          index: "7.6",
          title: "Accounts in Postgres, Firebase Auth only on the first login.",
          text: "In the new app, an account is the row in Postgres. On the first login, the auth Worker checks the password with Firebase once and saves its own hash. After that, it never asks Firebase again for that account, and it never writes to Firebase.",
        },
        {
          index: "7.7",
          title: "Strangler‑fig, not big bang.",
          text: "Migrated routes went through service bindings behind the gateway, and routes not migrated kept running on the functions. Only the compute moved: Firestore and Realtime Database stayed on GCP, because the limit was the vCPU quota.",
        },
        {
          index: "7.8",
          title: "Money, isolated.",
          text: "An isolated payments service, a double-entry ledger with no public route, and webhooks whose authenticity is checked (HMAC when the provider signs).",
        },
      ],
    },
    {
      id: "resultado",
      label: "08 / Result",
      title: "Agent live. New app on the way.",
      paragraphs: [
        "The new app’s first production builds came out in Oct 2026, and it is set up to replace the Flutter app as an update in the stores. The new admin app already runs on the web, on production data.",
      ],
      stats: [
        { term: "AI", value: "AI", label: "Agent in real conversations, with a person reviewing every reply.", status: "production", statusLabel: "In production" },
        { term: "App", value: "App", label: "Expo app built with coding agents.", status: "prototype", statusLabel: "Built" },
      ],
    },
  ],
  next: { slug: "dental-smart", index: "03", title: "Dental Smart." },
  seo: {
    title: "Tazz: an Expo app built from scratch with AI agents · Everton Resende",
    description:
      "How I architected a ride-hailing app in Expo and its new Workers, built by coding agents in parallel. I also ported 100+ Cloud Functions to Cloudflare Workers in ~48 h and put a support agent in production.",
  },
};
