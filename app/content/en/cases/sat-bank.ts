import type { CaseDetail } from "../../types";

export const satBank: CaseDetail = {
  kicker: "Case 04 · Digital bank · Jun 2025 – Mar 2026",
  title: "SAT Bank.",
  lead: "A digital bank on the Cronos Bank BaaS. I designed and built the app, the BFF, the admin and the website. Users rejected the chatbot, and the help features shipped as rules, with no LLM.",
  factsTitle: "Fact sheet",
  facts: [
    { term: "Role", value: "AI Engineer (freelance PJ contractor, Jun – Sep 2025) · AI Product Designer (CLT, Oct 2025 – Mar 2026)" },
    { term: "Period", value: "Jun 2025 – Mar 2026" },
    { term: "Stack", value: "TypeScript · Expo · Hono · Cloudflare Workers · D1 → Neon · Next.js", mono: true },
    { term: "AI", value: "No LLM in the product, on purpose", status: "decision", statusLabel: "Decision" },
  ],
  stats: [
    { term: "Stores", value: "1.1.30", label: "app version on the App Store and Google Play" },
    { term: "Crypto", value: "Feb 2026", label: "USDT buying and selling live" },
    { term: "Database", value: "D1 → Neon", label: "BFF migration in Dec 2025" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problem",
      title: "A whole bank on a BaaS.",
      stat: { value: "8", label: "onboarding steps · personal (PF) and business (PJ)" },
      paragraphs: [
        "SAT Bank needed an app, a backend and an internal dashboard on top of the Cronos Bank API (the BaaS), plus a website. Opening a personal or business account takes 8 steps, with an ID document, a selfie and SMS verification.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Context",
      title: "Design in the job title, code in practice.",
      paragraphs: [
        "I joined as a contractor (PJ) in Jun 2025. In Oct 2025 I was hired as an AI Product Designer (CLT), until Mar 2026. In practice, I designed and built the product in code: app, BFF, admin and website.",
        "The app covers personal and business accounts, PIX, boleto, loans and USDT buying and selling.",
      ],
    },
    {
      id: "papel",
      label: "03 / My role",
      title: "I designed and built it.",
      columns: [
        {
          index: "3.1",
          title: "Design.",
          items: [
            { text: "Personal and business onboarding flows, PIX and crypto" },
            { text: "The chatbot, and the switch to invisible help" },
            {
              text: "Design system shared across app, admin and website",
              pending: "{{CONFIRMAR: o design system do SAT Bank é seu?}}",
            },
          ],
        },
        {
          index: "3.2",
          title: "Engineering.",
          items: [
            { text: "Expo app in the stores, with biometrics, SecureStore and OTA" },
            { text: "Hono BFF on the Cronos API, on Cloudflare Workers" },
            { text: "Next.js admin on Cloudflare Workers, with RBAC and an audit log" },
            { text: "USDT buying and selling with Ether Global Assets" },
            { text: "Website in vinext at satbank.com.br" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Architecture",
      title: "A BFF in front of the BaaS.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Architecture",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Expo · SecureStore · biometrics · OTA" },
            {
              title: "BFF",
              note: "Hono · Workers · KV · R2 · cron",
              branch: [{ title: "Ether Global Assets", note: "USDT buying and selling" }],
            },
            { title: "Cronos Bank", note: "BaaS · accounts, PIX, 2FA, onboarding" },
          ],
          footnote: "Postgres on Neon via Hyperdrive (D1 until Dec 2025) · Sentry",
        },
        {
          number: "Fig. 02",
          caption: "Back office",
          direction: "horizontal",
          nodes: [
            { title: "Legacy in Base44", note: "loans and treasury", muted: true },
            { title: "Admin", note: "Next 15 · Workers (OpenNext) · RBAC · audit log" },
            { title: "Neon Postgres", note: "Drizzle · Hyperdrive" },
          ],
          footnote: "Loans and treasury migrated from the legacy system to the admin",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Where AI comes in",
      title: "In the process, not in the product.",
      specs: [
        { term: "Chatbot", value: "We designed a chat assistant. Users rejected it." },
        {
          term: "Help",
          value: "Categorization and balance alerts, with rules and heuristics. No LLM.",
          status: "decision",
          statusLabel: "Decision",
        },
        { term: "Product", value: "No LLM in production." },
        { term: "Process", value: "CLAUDE.md and AGENTS.md in the repositories. Code review with Gemini and Qwen." },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisions and trade-offs",
      title: "Rules before models.",
      items: [
        {
          index: "6.1",
          badge: "Not used",
          title: "Rules instead of the chatbot.",
          text: "Users rejected the chatbot. Instead, categorization and balance alerts shipped with rules and heuristics, with no LLM.",
        },
        {
          index: "6.2",
          title: "A BFF between the app and the BaaS.",
          text: "The app does not talk to Cronos directly. Sessions, the token cache and rate limiting live in the BFF’s KV, and the onboarding documents in R2.",
        },
        {
          index: "6.3",
          title: "D1 first, Neon later.",
          text: "The BFF started on D1 and moved to Neon Postgres, via Hyperdrive, in Dec 2025.",
        },
        {
          index: "6.4",
          title: "Legacy into the admin.",
          text: "The loans and treasury module left a Base44 system and was migrated into the admin, on Postgres with Drizzle.",
        },
        { index: "6.5", title: "Website in vinext.", text: "The website moved from Next to vinext, with Vite 7, in Mar 2026." },
      ],
    },
    {
      id: "resultado",
      label: "07 / Result",
      title: "Live.",
      stats: [
        { value: "1.1.30", label: "app version on the App Store and Google Play, with real users" },
        { value: "Feb 2026", label: "USDT buying and selling live" },
        { value: "Website", label: "live at satbank.com.br" },
        {
          term: "AI",
          value: "Rules",
          label: "Help features with no LLM, instead of the rejected chatbot.",
          status: "decision",
          statusLabel: "Decision",
        },
      ],
    },
    {
      id: "errado",
      label: "08 / What went wrong",
      title: "What went wrong.",
      draft: "{{CONFIRMAR: revisar a seção O que deu errado}}",
      items: [
        { index: "8.1", text: "The chatbot. We designed an assistant that users rejected, and the lesson cost time." },
        {
          index: "8.2",
          text: "The auth service spent a while on GCP and came back to Workers. The Express proxy stayed on Cloud Run.",
        },
        { index: "8.3", text: "The app had no automated test suite. The BFF had a manual test script with curl." },
      ],
      specs: [{ term: "What I would do differently", value: "{{CONFIRMAR: o que eu faria diferente}}" }],
    },
  ],
  next: { slug: "tazz", index: "01", title: "Tazz." },
  seo: {
    title: "SAT Bank: a digital bank with rules instead of a chatbot · Everton Resende",
    description:
      "How I designed and built the app, the Cloudflare Workers BFF, the admin and the website of a digital bank, and why the help features shipped as rules, with no LLM.",
  },
};
