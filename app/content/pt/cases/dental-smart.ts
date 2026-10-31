import type { CaseDetail } from "../../types";

export const dentalSmart: CaseDetail = {
  kicker: "Case 03 · SaaS para clínicas · 2025 – hoje",
  title: "Dental Smart.",
  lead: "SaaS para clínicas odontológicas. Sou o engenheiro do produto desde 2025. A IA trabalha dentro da consulta: o dentista grava o atendimento, e a nota clínica aparece pronta no prontuário do paciente, para ele revisar.",
  factsTitle: "Ficha técnica",
  facts: [
    { term: "Papel", value: "Arquitetura, backend e IA" },
    { term: "Período", value: "2025 – hoje" },
    { term: "Stack", value: "Next.js 16 · React 19 · Supabase · Postgres RLS · Edge Functions · Groq", mono: true },
    { term: "IA", value: "Nota clínica escrita a partir da consulta gravada", status: "production", statusLabel: "Em produção" },
  ],
  stats: [
    { term: "Clínicas", value: "~20", label: "clínicas ativas" },
    { term: "Churn", value: "0", label: "nenhuma clínica cancelou" },
    { term: "IA", value: "fev/2026", label: "nota clínica com IA em produção" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problema",
      title: "A clínica inteira num sistema só.",
      stat: { value: "RLS", label: "um tenant por clínica · isolado no banco" },
      paragraphs: [
        "Clínicas odontológicas precisavam de agenda, financeiro, NFS-e e WhatsApp num só sistema. E cada clínica só pode ver os próprios dados, porque são dados de saúde de pacientes.",
        "No consultório, o registro de cada consulta dependia de alguém digitar as anotações do paciente depois do atendimento.",
        "Conversei com dentistas, recepcionistas e auxiliares.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Contexto",
      title: "Do banco ao front.",
      paragraphs: [
        "O produto já existia quando assumi a engenharia. Tornei o produto multi-tenant, com um tenant por clínica, e sigo construindo hoje.",
      ],
    },
    {
      id: "papel",
      label: "03 / Meu papel",
      title: "Engenharia ponta a ponta.",
      columns: [
        {
          index: "3.1",
          title: "Engenharia.",
          items: [
            { text: "SaaS multi-tenant em Next.js e Supabase, com isolamento por RLS" },
            { text: "Nota clínica com IA: gravação da consulta, Whisper e Llama 3.3 70B" },
            { text: "Anamnese digital, com link agendado no WhatsApp e formulário protegido por token" },
            { text: "Fila de mensagens de WhatsApp com variações geradas por LLM" },
            { text: "NFS-e via Focus NFe e assinatura de contrato por WhatsApp" },
            { text: "Admin do SaaS para provisionar clínicas" },
            { text: "CI no GitHub Actions e backup do banco no R2" },
          ],
        },
        {
          index: "3.2",
          title: "Escopo.",
          items: [
            { text: "Agenda, pacientes e planos de tratamento" },
            { text: "Financeiro com DRE e CRM com funil no WhatsApp" },
            { text: "Estoque, próteses e relatórios" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Arquitetura",
      title: "Isolamento no banco.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Multi-tenant",
          direction: "horizontal",
          nodes: [
            { title: "Web app", note: "Next.js 16 · Vercel", branch: [{ title: "API routes", note: "operações privilegiadas" }] },
            { title: "Supabase", note: "JWT do usuário · RLS por tenant_id" },
            { title: "Edge Functions", note: "Deno" },
            { title: "Integrações", note: "WhatsApp · Focus NFe · Groq" },
          ],
          footnote: "Uma clínica, um tenant · backup pg_dump no R2",
        },
        {
          number: "Fig. 02",
          caption: "Da consulta ao prontuário",
          direction: "horizontal",
          nodes: [
            { title: "Gravação", note: "navegador · upload com 3 tentativas" },
            { title: "Pasta do paciente", note: "privada · por clínica" },
            { title: "Edge Function", note: "confere o JWT e a clínica" },
            { title: "Whisper", note: "Groq · transcrição em português" },
            { title: "Llama 3.3 70B", note: "Groq · nota em 4 blocos" },
            { title: "Prontuário", note: "tempo real · selo “Gerado por IA”" },
          ],
          footnote: "Em produção desde fev/2026 · o dentista revisa cada nota",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Onde a IA entra",
      title: "Da cadeira ao prontuário.",
      paragraphs: [
        "Antes da consulta, o paciente recebe pelo WhatsApp o link da anamnese e responde o histórico de saúde num formulário protegido por token. Na cadeira, o dentista grava o atendimento no navegador.",
        "Quando a gravação termina, o áudio sobe para a pasta privada do paciente, e uma Edge Function assume em segundo plano: o Whisper transcreve em português, e o Llama 3.3 70B escreve a nota clínica. A nota aparece sozinha nas anotações do paciente, com o selo “Gerado por IA”, e o dentista revisa antes de qualquer decisão clínica.",
      ],
      specs: [
        {
          term: "Nota clínica",
          value: "4 blocos: queixas do paciente, observações clínicas, procedimentos realizados ou discutidos e próximos passos. Até 300 palavras, em linguagem clínica. O bloco que não se aplica fica de fora.",
          status: "production",
          statusLabel: "Em produção",
        },
        { term: "Transcrição", value: "Whisper large-v3-turbo na Groq, em português e com temperatura 0." },
        { term: "Revisão", value: "Toda nota sai marcada como gerada por IA, com o aviso para revisar antes de decidir. O dentista mantém ou exclui." },
        { term: "Mensagens", value: "O LLM reescreve cada mensagem em até 20 variações, com as variáveis do paciente intactas e sem informação nova. Se falhar, sai a mensagem original. O envio sai de uma fila agendada." },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisões e trade-offs",
      title: "O que escolhi, e por quê.",
      items: [
        {
          index: "6.1",
          title: "A IA escreve, o dentista decide.",
          text: "A nota é um rascunho de documentação, não um diagnóstico. O prompt limita o modelo a documentar a consulta, e toda nota leva o selo e o aviso de revisão.",
        },
        {
          index: "6.2",
          title: "Resposta na hora, IA em segundo plano.",
          text: "A Edge Function responde assim que recebe o pedido e processa depois. O status da gravação passa por processando, concluído ou falhou, e o dentista segue o atendimento sem esperar.",
        },
        {
          index: "6.3",
          title: "Clínica conferida no token.",
          text: "Áudio de consulta é dado de saúde. A função recusa com 403 quando a clínica do pedido não bate com a do JWT, e a gravação fica na pasta privada da clínica.",
        },
        {
          index: "6.4",
          title: "Isolamento na RLS.",
          text: "Cada clínica é um tenant. O browser fala com o Supabase usando o JWT do usuário, e a RLS por tenant_id isola os dados no Postgres.",
        },
        {
          index: "6.5",
          title: "Privilégio só no servidor.",
          text: "Gestão de usuários, assinatura de contrato, NFS-e e PDF passam por API routes do Next, com o client admin no servidor.",
        },
        {
          index: "6.6",
          title: "Variação de texto, não agente.",
          text: "O LLM só reescreve a mensagem. Quem dispara o envio é uma fila com cron. Sem tool calling.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Resultado",
      title: "Nenhuma clínica cancelou.",
      paragraphs: ["~20 clínicas ativas, cada uma num tenant isolado por RLS."],
      stats: [
        { term: "IA", value: "IA", label: "Nota clínica escrita da consulta gravada, no prontuário do paciente, desde fev/2026.", status: "production", statusLabel: "Em produção" },
      ],
    },
  ],
  next: { slug: "tazz", index: "01", title: "Tazz." },
  seo: {
    title: "Dental Smart: SaaS multi-tenant com IA em produção · Everton Resende",
    description:
      "Como construí um SaaS multi-tenant para ~20 clínicas odontológicas em que a consulta gravada vira nota clínica estruturada no prontuário, com Whisper e Llama 3.3 70B, isolamento por RLS e revisão do dentista.",
  },
};
