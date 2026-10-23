import type { CaseDetail } from "../../types";

export const dentalSmart: CaseDetail = {
  kicker: "Case 02 · SaaS for clinics · 2023 – present",
  title: "Dental Smart.",
  lead: "SaaS for dental clinics. I have been designing the product since 2023 and, since Aug 2025, building it too: multi-tenant with RLS, NFS-e invoices, WhatsApp and AI appointment transcription in production.",
  factsTitle: "Fact sheet",
  facts: [
    { term: "Role", value: "Product Designer (2023 – Jul 2025) · AI Engineer (freelance) since Aug 2025" },
    { term: "Period", value: "2023 – present" },
    { term: "Stack", value: "Next.js 16 · React 19 · Supabase · Postgres RLS · Edge Functions · Groq", mono: true },
    { term: "AI", value: "Appointment transcription and summary", status: "production", statusLabel: "In production" },
  ],
  stats: [
    { term: "Clinics", value: "~20", label: "active clinics" },
    { term: "Churn", value: "0", label: "no clinic has left" },
    { term: "AI", value: "Feb 2026", label: "appointment transcription in production" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problem",
      title: "The whole clinic in one system.",
      stat: { value: "RLS", label: "one tenant per clinic · isolated in the database" },
      paragraphs: [
        "Dental clinics needed scheduling, finance, NFS-e invoices and WhatsApp in one system. And each clinic can only see its own data, because this is patient health data.",
        "I talked to dentists, receptionists and dental assistants.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Context",
      title: "Design first, code later.",
      paragraphs: [
        "I started as Dental Smart’s Product Designer in 2023, as a freelancer, alongside my job at Softplan. In Aug 2025 I started building the product in code, and I am still building it today.",
      ],
    },
    {
      id: "papel",
      label: "03 / My role",
      title: "Design and engineering on the same product.",
      columns: [
        {
          index: "3.1",
          title: "Design.",
          items: [
            { text: "End-to-end product: scheduling, finance and CRM" },
            { text: "Prototype of the X-ray analysis, which was never built" },
          ],
        },
        {
          index: "3.2",
          title: "Engineering.",
          items: [
            { text: "Multi-tenant SaaS in Next.js and Supabase, with RLS isolation" },
            { text: "Appointment transcription and summary with Whisper and Llama" },
            { text: "WhatsApp message queue with LLM-generated variations" },
            { text: "NFS-e via Focus NFe and contract signing over WhatsApp" },
            { text: "SaaS admin to provision clinics" },
            { text: "CI on GitHub Actions and database backups to R2" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Architecture",
      title: "Isolation in the database.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Multi-tenant",
          direction: "horizontal",
          nodes: [
            { title: "Web app", note: "Next.js 16 · Vercel", branch: [{ title: "API routes", note: "privileged operations" }] },
            { title: "Supabase", note: "user JWT · RLS by tenant_id" },
            { title: "Edge Functions", note: "Deno" },
            { title: "Integrations", note: "WhatsApp · Focus NFe · Groq" },
          ],
          footnote: "One clinic, one tenant · pg_dump backup to R2",
        },
        {
          number: "Fig. 02",
          caption: "Transcription and summary",
          direction: "horizontal",
          nodes: [
            { title: "Recording", note: "browser" },
            { title: "Storage", note: "per clinic" },
            { title: "Edge Function", note: "Deno" },
            { title: "Whisper", note: "Groq · transcription" },
            { title: "Llama 3.3 70B", note: "Groq · summary" },
            { title: "Result", note: "saved per clinic" },
          ],
          footnote: "In production since Feb 2026",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Where AI comes in",
      title: "In the appointment, not in the money.",
      specs: [
        {
          term: "Transcription",
          value: "Whisper large-v3-turbo transcribes the appointment recording. Llama 3.3 70B summarizes it. Both run on Groq.",
          status: "production",
          statusLabel: "In production",
        },
        { term: "Messages", value: "An LLM writes variations of the WhatsApp messages. Sending runs from a scheduled queue. It is not an agent." },
        {
          term: "X-ray",
          value: "It stayed in the design prototype and was never built.",
          status: "prototype",
          statusLabel: "Prototype",
        },
        { term: "Reconciliation", value: "Rule-based, no AI.", status: "decision", statusLabel: "Decision" },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisions and trade-offs",
      title: "Where AI stayed out.",
      items: [
        {
          index: "6.1",
          badge: "Not used",
          title: "Reconciliation without AI.",
          text: "I decided not to use AI in bank reconciliation. It stayed rule-based: CSV column auto-detection and dedupe. The OFX import was removed in Apr 2026, as a dead feature.",
        },
        {
          index: "6.2",
          title: "Isolation in RLS.",
          text: "Each clinic is a tenant. The browser talks to Supabase with the user’s JWT, and RLS by tenant_id isolates the data in Postgres.",
        },
        {
          index: "6.3",
          title: "Privileges only on the server.",
          text: "User management, contract signing, NFS-e and PDFs go through Next API routes, with the admin client on the server.",
        },
        {
          index: "6.4",
          title: "Text variation, not an agent.",
          text: "The LLM only rewrites the message. A cron-driven queue triggers the sending. No tool calling.",
        },
        {
          index: "6.5",
          badge: "Not built",
          title: "X-ray stayed a prototype.",
          text: "The X-ray analysis stayed in design. We prioritized finance, which had more urgent demand.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Result",
      title: "Live.",
      stats: [
        { value: "~20", label: "active clinics" },
        { value: "0", label: "churn: no clinic has left" },
        { value: "Feb 2026", label: "appointment transcription in production" },
        { term: "AI", value: "AI", label: "Appointment transcription and summary.", status: "production", statusLabel: "In production" },
      ],
    },
    {
      id: "errado",
      label: "08 / What went wrong",
      title: "What went wrong.",
      draft: "{{CONFIRMAR: revisar a seção O que deu errado}}",
      items: [
        { index: "8.1", text: "Reconciliation with OFX import became a dead feature and was removed from the product in Apr 2026." },
        {
          index: "8.2",
          text: "I tried to move the app from Vercel to Cloudflare Workers via OpenNext in Aug 2025, and started planning the migration again in Apr 2026. The app is still on Vercel.",
        },
        {
          index: "8.3",
          text: "Automated tests came late: the first Jest suite and the first SQL test are from Jul 2026.",
        },
      ],
      specs: [{ term: "What I would do differently", value: "{{CONFIRMAR: o que eu faria diferente}}" }],
    },
  ],
  next: { slug: "sat-bank", index: "04", title: "SAT Bank." },
  seo: {
    title: "Dental Smart: multi-tenant SaaS with AI in production · Everton Resende",
    description:
      "How I built a multi-tenant SaaS for ~20 dental clinics, with RLS isolation and appointment transcription with Whisper and Llama in production.",
  },
};
