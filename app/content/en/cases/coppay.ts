import type { CaseDetail } from "../../types";

export const coppay: CaseDetail = {
  kicker: "Case 01 · Fintech · 2025–2026 · Consulting and execution",
  title: "Coppay.",
  lead: "A Brazilian fintech for credit and digital accounts. I built the credit analysis pipeline: one lookup by CPF (the Brazilian taxpayer ID) cross-checks the payroll-loan margin, the credit bureau, the Central Bank credit registry (SCR) and the loan simulations, and an LLM writes the credit review for the analyst to decide, at ~R$0.01 per review. I also built the Expo app, the BFF on Cloudflare Workers and the back office.",
  factsTitle: "Fact sheet",
  facts: [
    { term: "Role", value: "Architecture, app, backend and AI" },
    { term: "Period", value: "2025–2026" },
    { term: "Stack", value: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python · FastAPI", mono: true },
    { term: "AI", value: "Credit review for the analyst", status: "production", statusLabel: "In production" },
    { term: "Agent", value: "WhatsApp agent in Python (Agno + FastAPI)", status: "offline", statusLabel: "Built" },
  ],
  stats: [
    { term: "Review", value: "~R$0.01", label: "estimated cost per credit review" },
    { term: "Lookup", value: "4 sources", label: "payroll loan, bureau, SCR and simulations in one lookup by CPF" },
    { term: "App", value: "2 stores", label: "published on the App Store and Google Play" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problem",
      title: "The bureau score does not show the debt.",
      paragraphs: [
        "Coppay needed to assess requests for payroll-deducted loans and for personal loans. A private bureau score is an inference of risk: it does not say how much the person already owes in loans and financing. That debt is in the SCR, the Central Bank credit registry.",
        "To decide, the analyst needed everything on one screen: the payroll-loan margin, the bureau report, the SCR and the personal loan options already simulated.",
        "Each lookup costs money, because the bureau is paid, and has an effect outside the system: the payroll-loan proposal sends a consent form to the worker. Running it twice for the same CPF costs double and bothers the customer.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Context",
      title: "A digital account on a BaaS.",
      paragraphs: [
        "Credit runs inside a larger platform. The digital account has an Expo app, published on the App Store and Google Play, a Hono BFF on Cloudflare Workers and a Next.js back office, with role-based permissions (RBAC) and an audit log.",
        "In the legacy stack, the BFF talks to the providers through its own layer: Cronos for the account, Asaas for boleto payment slips and HBI for credit origination. In Sep 2026, I built a new BFF on the Asaas Banking-as-a-Service (BaaS), with one subaccount per customer. It is deployed next to the legacy one, still without real traffic: the release depends on Asaas’s approval process.",
      ],
    },
    {
      id: "papel",
      label: "03 / My role",
      title: "End-to-end engineering.",
      columns: [
        {
          index: "3.1",
          title: "Credit and AI.",
          items: [
            { text: "Credit lookup pipeline by CPF, in 2 phases, with a lock per CPF" },
            { text: "Integration with the bureau, the Central Bank SCR and the payroll and personal loan simulations" },
            { text: "LLM credit review, with a fixed schema and explicit failure" },
            { text: "Email triage in a Durable Object per mailbox, and a WhatsApp agent in Python" },
          ],
        },
        {
          index: "3.2",
          title: "Platform.",
          items: [
            { text: "Expo app, published in both stores" },
            { text: "Hono BFF on Cloudflare Workers, with a provider layer" },
            { text: "Next.js back office, with RBAC and an audit log" },
            { text: "New BFF on the Asaas BaaS, with one subaccount per customer" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Architecture",
      title: "From the lookup to the review.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Credit lookup",
          direction: "horizontal",
          nodes: [
            { title: "Operator", note: "CPF in the back office" },
            {
              title: "BFF",
              note: "lock per CPF · daily cap",
              branch: [{ title: "Payroll loan", note: "consent form · margin" }],
            },
            { title: "Bureau", note: "paid lookup · score and restrictions" },
            { title: "SCR", note: "Central Bank · registered debt" },
            { title: "Review", note: "gpt-oss-120b · fixed schema" },
            { title: "Analyst", note: "reads the review on the proposal screen" },
          ],
          footnote: "Bureau, SCR and review are stored and reused for 30 days",
        },
        {
          number: "Fig. 02",
          caption: "Platform",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Expo · App Store and Google Play" },
            {
              title: "BFF",
              note: "Hono · Cloudflare Workers",
              branch: [{ title: "Back office", note: "Next.js · RBAC · audit log" }],
            },
            { title: "Providers", note: "Cronos · Asaas · HBI" },
            { title: "Postgres", note: "Supabase · Hyperdrive" },
          ],
          footnote: "Provider jobs on a queue, with a DLQ",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Where AI comes in",
      title: "A review for the analyst, not a decision.",
      paragraphs: [
        "An operator looks up a CPF in the back office. The BFF fetches the bureau report and the SCR, simulates the personal loan options and checks whether the customer has a payroll-loan margin. The margin depends on the worker’s consent: while they have not accepted the form, the rest of the lookup already runs.",
        "With that data in the prompt, the model returns JSON in a fixed format: approvable or not, a 4-level risk tier, recommended amount, installment range, term, conditions and a short text. The review appears on the proposal screen, next to the bureau report and the SCR. The card says it is subject to human review, and the decision stays with the analyst.",
      ],
      specs: [
        { term: "Model", value: "gpt-oss-120b on Cloudflare Workers AI, at temperature 0.2. It is a reasoning model: the draft uses the same token budget as the answer. I raised the cap from 800 to 2,000 tokens after real answers came back cut off." },
        { term: "Prompt rules", value: "Use only the data provided and never invent a number. A missing score, estimated income or SCR goes in as unavailable and counts as risk. The recommended amount never exceeds the requested amount or the options already simulated. If the payroll-loan margin is already available at lookup time, the review says it is the better option and assesses the personal loan as an alternative." },
        { term: "Output", value: "A missing field falls to the conservative side: without a recognized risk tier, the risk becomes \"high\", and without an explicit approval, the review comes out as not approvable. An answer that is cut off, has no JSON or has none of the main fields does not become a review: the function fails with an error, and the lookup continues without the AI card." },
        { term: "Cost and limits", value: "~R$0.01 per review, by estimate. Bureau, SCR and review are stored and reused for 30 days, and the operator can force a new lookup. Each operator has a cap of 100 lookups per day." },
        { term: "Audit", value: "Each review is stored with the model used and the date. The code only inserts into the bureau and SCR history, and never edits it." },
        { term: "Status", value: "Validated with real lookups in production in Jun and Jul 2026.", status: "production", statusLabel: "In production" },
        { term: "Email", value: "Every incoming email is triaged (category, priority and summary) in a Durable Object per mailbox. The result is stored, but the inbox screen never got to show it. A button suggests a reply from the thread." },
        { term: "WhatsApp agent", value: "In Python (Agno + FastAPI): a lead agent routes to 3 specialists (loans, account and support), with read-only tools and handoff. It passed a live battery of 6 scenarios, with the real model and simulated tools, including prompt injection. It never served customers.", status: "offline", statusLabel: "Built" },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisions and trade-offs",
      title: "What I chose, and why.",
      items: [
        {
          index: "6.1",
          title: "Registered debt gets heavy weight.",
          text: "The private bureau infers risk. The SCR records what the person actually owes. The review receives both, and the prompt tells the model to weigh registered debt heavily, whatever the score. If the SCR lookup fails, the field goes in as unavailable, and missing data counts as risk.",
        },
        {
          index: "6.2",
          title: "A limit is not a debt.",
          text: "In the first lookup with a populated SCR, the total counted credit card and overdraft limits as if they were debt, and the review quoted a debt much larger than the real one. I split the two in the parser and in the prompt. Old records fixed themselves, because the summary is recomputed from the stored raw report.",
        },
        {
          index: "6.3",
          title: "Estimated income does not reject.",
          text: "The bureau’s estimated income is a statistical estimate by profile, not proven income. The model was denying credit on it alone. Now, when the doubt is ability to pay against estimated income, the review approves with a condition: proof of income that covers the current installments plus the new one. Rejection is kept for hard signals, such as restrictions, protests or very high debt.",
        },
        {
          index: "6.4",
          title: "Fail with an error, do not return a false review.",
          text: "A read error on the answer made every review come out with the default values, and nobody saw an error. In a credit review, that is worse than having no review. Now an answer that is cut off, has no JSON or has none of the main fields fails with an error, and the screen shows the lookup without the AI card.",
        },
        {
          index: "6.5",
          title: "The model recommends, a person decides.",
          text: "The review is support for the analyst. No code grants credit from it: the approvable field is only shown on the screen. The only other reader is a tool of the WhatsApp agent, which reported whether there was a pre-approval and never ran with customers.",
        },
        {
          index: "6.6",
          title: "A lock per CPF.",
          text: "The lookup has a cost (the paid bureau) and effects outside the system: the payroll-loan consent form and a registration at the provider, which does not deduplicate by CPF. Those three steps run inside a lock per CPF, and a second request for the same CPF gets a 409 instead of duplicating. The lock lasts 5 minutes, because the section chains up to ~8 calls to the provider. It lives in KV and is best effort, not a strong distributed lock. The SCR and the review run after it and rely on the 30-day reuse.",
        },
        {
          index: "6.7",
          title: "Spam kept out of the AI.",
          text: "In email triage, I took the spam decision away from the model after it flagged legitimate emails. In a fintech a false positive costs more. The filter stayed with Cloudflare Email Routing (SPF, DKIM, DMARC and its own heuristics), and a person can mark spam by hand.",
        },
        {
          index: "6.8",
          title: "Tools that ignore the model’s arguments.",
          text: "In the WhatsApp agent, the tools are read-only and take the customer’s identity from the conversation’s trusted context, not from what the model asks for. This blocks IDOR: the model cannot look up another person’s account.",
        },
        {
          index: "6.9",
          title: "New BFF next to the legacy one, not a one-step switch.",
          text: "In production, the BFF on Asaas has its own worker, domain, KV and queues. On purpose, it shares with the legacy one the Postgres database and the two buckets for onboarding documents and biometrics. It has not received real traffic yet, and the legacy BFF kept serving the app and credit. It has 61 test files, a configured line coverage threshold of 80% and a CI that blocks on high-severity vulnerabilities in runtime dependencies.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Result",
      title: "Review on the analyst’s screen. No portfolio numbers.",
      paragraphs: [
        "The credit pipeline was validated with real lookups in production in Jun and Jul 2026, and the review appears on the proposal screen for the analyst. The app is published on the App Store and Google Play.",
        "What this case does not have: approval rate, default rate or number of reviews. The decision was the analyst’s, and the repository does not measure the portfolio’s results. The ~R$0.01 per review is a cost estimate, not a measurement.",
        "The WhatsApp agent was built and tested, but never served customers.",
      ],
      stats: [
        { term: "Review", value: "~R$0.01", label: "Estimated cost per review. The analyst makes the final call.", status: "production", statusLabel: "In production" },
        { term: "Reuse", value: "30 days", label: "Bureau, SCR and review stored and reused, with a cap of 100 lookups per operator per day." },
        { term: "Agent", value: "6 scenarios", label: "Live battery for the WhatsApp agent, with simulated tools, including prompt injection. It never served customers.", status: "offline", statusLabel: "Built" },
      ],
    },
  ],
  next: { slug: "tazz", index: "02", title: "Tazz." },
  seo: {
    title: "Coppay: credit analysis with an LLM review and a human decision · Everton Resende",
    description:
      "How I built a fintech’s credit analysis pipeline: a lookup by CPF with the bureau, the Central Bank credit registry and loan simulations, an LLM review in a fixed schema at ~R$0.01 and the analyst’s decision. Plus the app, the BFF on Cloudflare Workers and the back office.",
  },
};
