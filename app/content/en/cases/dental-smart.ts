import type { CaseDetail } from "../../types";

export const dentalSmart: CaseDetail = {
  kicker: "Case 04 · SaaS for clinics · 1 year, 2025 – 2026 · Consulting and execution",
  title: "Dental Smart.",
  lead: "Multi-tenant SaaS for dental clinics, built from scratch. The dentist records the visit in the browser, and Whisper and Llama 3.3 70B write the clinical note into the patient’s record as a draft for the dentist to review.",
  factsTitle: "Fact sheet",
  facts: [
    { term: "Role", value: "Architecture, back end and AI" },
    { term: "Period", value: "1 year, 2025 – 2026" },
    { term: "Stack", value: "Next.js 16 · React 19 · Supabase · Postgres RLS · Edge Functions · Groq", mono: true },
    { term: "AI", value: "Clinical note written from the recorded appointment", status: "production", statusLabel: "In production" },
  ],
  stats: [
    { term: "Clinical notes", value: "Thousands", label: "of notes written by the AI in patient records" },
    { term: "AI", value: "Feb 2026", label: "AI clinical notes in production" },
    { term: "Build", value: "1 year", label: "from scratch, 2025 to 2026" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problem",
      title: "The whole clinic in one system.",
      stat: { value: "RLS", label: "one tenant per clinic · isolated in the database" },
      paragraphs: [
        "I talked to dentists, receptionists and dental assistants to understand the clinic’s routine.",
        "Dental clinics needed scheduling, finance, e-invoicing (Brazil’s NFS-e) and WhatsApp in one system. And each clinic can only see its own data, because this is patient health data.",
        "At the practice, someone had to type up the patient’s notes after each visit.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Context",
      title: "From one clinic to a SaaS.",
      paragraphs: [
        "The system started in 2025 for a single clinic, already with scheduling and WhatsApp. In Dec 2025, I began the move to multi-tenant: the clinic’s record became the tenant, and RLS started isolating each clinic’s data.",
        "E-invoicing (NFS-e) arrived in Jan 2026, and AI clinical notes in Feb 2026.",
      ],
    },
    {
      id: "papel",
      label: "03 / My role",
      title: "Engineering end to end.",
      columns: [
        {
          index: "3.1",
          title: "Engineering.",
          items: [
            { text: "Multi-tenant SaaS in Next.js and Supabase, with RLS isolation" },
            { text: "AI clinical notes: appointment recording, Whisper and Llama 3.3 70B" },
            { text: "Digital medical history form, with a scheduled WhatsApp link and a token-protected form" },
            { text: "WhatsApp message queue with LLM-generated variations" },
            { text: "NFS-e e-invoices via Focus NFe and contract signing over WhatsApp" },
            { text: "SaaS admin to provision clinics" },
            { text: "CI on GitHub Actions and database backups to R2" },
          ],
        },
        {
          index: "3.2",
          title: "Scope.",
          items: [
            { text: "Scheduling, patients and treatment plans" },
            { text: "Finance with P&L, and a CRM funnel tied to WhatsApp" },
            { text: "Inventory, prosthetics and reports" },
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
          caption: "From appointment to record",
          direction: "horizontal",
          nodes: [
            { title: "Recording", note: "browser · upload with 3 attempts" },
            { title: "Patient folder", note: "private · per clinic" },
            { title: "Edge Function", note: "checks the JWT and the clinic" },
            { title: "Whisper", note: "Groq · Portuguese transcription" },
            { title: "Llama 3.3 70B", note: "Groq · note in 4 sections" },
            { title: "Patient record", note: "real time · “AI-generated” badge" },
          ],
          footnote: "In production since Feb 2026 · each note is a draft for the dentist to review",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Where AI comes in",
      title: "From the chair to the patient record.",
      paragraphs: [
        "Before the appointment, the patient gets a WhatsApp link to a token-protected medical history form and fills it in. During the visit, the dentist records it in the browser.",
        "When the recording ends, the audio goes to the patient’s private folder, and an Edge Function takes over in the background: Whisper transcribes it in Portuguese, and Llama 3.3 70B writes the clinical note. The note appears on its own in the patient’s notes, as a draft.",
      ],
      specs: [
        {
          term: "Clinical note",
          value: "4 sections: patient complaints, clinical findings, procedures done or discussed, and next steps. Up to 300 words, in clinical language. A section that doesn’t apply is left out.",
          status: "production",
          statusLabel: "In production",
        },
        { term: "Transcription", value: "Whisper large-v3-turbo on Groq, in Portuguese, at temperature 0." },
        { term: "Review", value: "Every note carries an “AI-generated” badge and a warning to review it. The dentist keeps it or deletes it." },
        { term: "Messages", value: "For WhatsApp messages sent from the scheduled queue, the LLM is asked to rewrite each one into up to 20 variations, keeping the patient variables intact and adding no new information. If generation fails, the original message goes out." },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisions and trade-offs",
      title: "What I chose, and why.",
      items: [
        {
          index: "6.1",
          title: "The AI writes, the dentist decides.",
          text: "The note is a documentation draft, not a diagnosis. The prompt limits the model to documenting the appointment, and every note carries the badge and the review warning.",
        },
        {
          index: "6.2",
          title: "Instant response, AI in the background.",
          text: "The Edge Function answers as soon as it gets the request and does the work afterwards. The recording’s status goes from processing to completed or failed, and the dentist carries on without waiting.",
        },
        {
          index: "6.3",
          title: "Clinic checked against the token.",
          text: "Appointment audio is health data. The function rejects the request with a 403 when its clinic doesn’t match the one in the JWT, and the recording stays in the clinic’s private folder.",
        },
        {
          index: "6.4",
          title: "Tenant isolation via RLS.",
          text: "Each clinic is a tenant. The browser talks to Supabase with the user’s JWT, and RLS by tenant_id isolates the data in Postgres.",
        },
        {
          index: "6.5",
          title: "Server-only privileges.",
          text: "User management, contract signing, NFS-e and PDFs go through Next API routes, with the admin client on the server.",
        },
        {
          index: "6.6",
          title: "Text variation, not an agent.",
          text: "The LLM only rewrites the message. A cron-driven queue triggers the sending. No tool calling.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Result",
      title: "Live, with AI in the patient record.",
      paragraphs: ["Since Feb 2026, the AI has written thousands of clinical notes into patient records. Each clinic runs in its own tenant isolated by RLS, and every note arrives as a draft for the dentist to review."],
      stats: [
        { term: "AI", value: "Thousands", label: "Clinical notes written by the AI from the recorded appointment, in the patient’s record, since Feb 2026.", status: "production", statusLabel: "In production" },
      ],
    },
  ],
  next: { slug: "coppay", index: "01", title: "Coppay." },
  seo: {
    title: "Dental Smart: multi-tenant SaaS with AI in production · Everton Resende",
    description:
      "How I built a multi-tenant SaaS for dental clinics where the recorded appointment becomes a structured clinical note in the patient record, with Whisper and Llama 3.3 70B, RLS isolation and dentist review.",
  },
};
