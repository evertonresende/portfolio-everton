import type { CaseDetail } from "../../types";

export const satBank: CaseDetail = {
  kicker: "Case 04 · Banco digital · jun 2025 – mar 2026",
  title: "SAT Bank.",
  lead: "Banco digital sobre o BaaS do Cronos Bank. Desenhei e construí o app, o BFF, o admin e o site. Os usuários rejeitaram o chatbot, e as ajudas saíram com regras, sem LLM.",
  factsTitle: "Ficha técnica",
  facts: [
    { term: "Papel", value: "AI Engineer (freelance PJ, jun – set 2025) · AI Product Designer (CLT, out 2025 – mar 2026)" },
    { term: "Período", value: "jun 2025 – mar 2026" },
    { term: "Stack", value: "TypeScript · Expo · Hono · Cloudflare Workers · D1 → Neon · Next.js", mono: true },
    { term: "IA", value: "Sem LLM no produto, de propósito", status: "decision", statusLabel: "Decisão" },
  ],
  stats: [
    { term: "Lojas", value: "1.1.30", label: "versão do app na App Store e no Google Play" },
    { term: "Cripto", value: "fev/2026", label: "compra e venda de USDT ao vivo" },
    { term: "Banco", value: "D1 → Neon", label: "migração do BFF em dez/2025" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problema",
      title: "Um banco inteiro sobre um BaaS.",
      stat: { value: "8", label: "etapas de onboarding · PF e PJ" },
      paragraphs: [
        "O SAT Bank precisava de app, backend e painel interno sobre a API do Cronos Bank, o BaaS, e de um site. Abrir conta PF ou PJ passa por 8 etapas, com documento, selfie e verificação por SMS.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Contexto",
      title: "Design no cargo, código na prática.",
      paragraphs: [
        "Entrei como PJ em jun 2025. Em out 2025 fui contratado como AI Product Designer (CLT), até mar 2026. Na prática, desenhei e construí o produto em código: app, BFF, admin e site.",
        "O app cobre conta PF e PJ, PIX, boleto, empréstimo e compra e venda de USDT.",
      ],
    },
    {
      id: "papel",
      label: "03 / Meu papel",
      title: "Desenhei e construí.",
      columns: [
        {
          index: "3.1",
          title: "Design.",
          items: [
            { text: "Fluxos de onboarding PF e PJ, PIX e cripto" },
            { text: "O chatbot e a troca por ajudas invisíveis" },
            {
              text: "Design system compartilhado entre app, admin e site",
              pending: "{{CONFIRMAR: o design system do SAT Bank é seu?}}",
            },
          ],
        },
        {
          index: "3.2",
          title: "Engenharia.",
          items: [
            { text: "App em Expo nas lojas, com biometria, SecureStore e OTA" },
            { text: "BFF em Hono sobre a API do Cronos, em Cloudflare Workers" },
            { text: "Admin em Next.js no Cloudflare Workers, com RBAC e audit log" },
            { text: "Compra e venda de USDT com a Ether Global Assets" },
            { text: "Site em vinext no satbank.com.br" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Arquitetura",
      title: "Um BFF na frente do BaaS.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Arquitetura",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Expo · SecureStore · biometria · OTA" },
            {
              title: "BFF",
              note: "Hono · Workers · KV · R2 · cron",
              branch: [{ title: "Ether Global Assets", note: "compra e venda de USDT" }],
            },
            { title: "Cronos Bank", note: "BaaS · conta, PIX, 2FA, onboarding" },
          ],
          footnote: "Postgres no Neon via Hyperdrive (D1 até dez/2025) · Sentry",
        },
        {
          number: "Fig. 02",
          caption: "Back-office",
          direction: "horizontal",
          nodes: [
            { title: "Legado em Base44", note: "empréstimo e tesouraria", muted: true },
            { title: "Admin", note: "Next 15 · Workers (OpenNext) · RBAC · audit log" },
            { title: "Neon Postgres", note: "Drizzle · Hyperdrive" },
          ],
          footnote: "Empréstimo e tesouraria migrados do legado para o admin",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Onde a IA entra",
      title: "No processo, não no produto.",
      specs: [
        { term: "Chatbot", value: "Desenhamos um assistente de chat. Os usuários rejeitaram." },
        {
          term: "Ajudas",
          value: "Categorização e alertas de saldo, com regras e heurísticas. Sem LLM.",
          status: "decision",
          statusLabel: "Decisão",
        },
        { term: "Produto", value: "Nenhum LLM em produção." },
        { term: "Processo", value: "CLAUDE.md e AGENTS.md nos repositórios. Revisão de código com Gemini e Qwen." },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisões e trade-offs",
      title: "Regra antes de modelo.",
      items: [
        {
          index: "6.1",
          badge: "Não usado",
          title: "Regras no lugar do chatbot.",
          text: "Os usuários rejeitaram o chatbot. No lugar dele, categorização e alertas de saldo saíram com regras e heurísticas, sem LLM.",
        },
        {
          index: "6.2",
          title: "BFF entre o app e o BaaS.",
          text: "O app não fala direto com o Cronos. Sessão, cache de token e rate limit ficam no KV do BFF, e os documentos do onboarding, no R2.",
        },
        {
          index: "6.3",
          title: "D1 primeiro, Neon depois.",
          text: "O BFF começou no D1 e migrou para Neon Postgres, via Hyperdrive, em dez/2025.",
        },
        {
          index: "6.4",
          title: "Legado para dentro do admin.",
          text: "O módulo de empréstimo e tesouraria saiu de um sistema em Base44 e foi migrado para o admin, em Postgres com Drizzle.",
        },
        { index: "6.5", title: "Site em vinext.", text: "O site saiu do Next e foi para vinext, com Vite 7, em mar/2026." },
      ],
    },
    {
      id: "resultado",
      label: "07 / Resultado",
      title: "No ar.",
      stats: [
        { value: "1.1.30", label: "versão do app na App Store e no Google Play, com usuários reais" },
        { value: "fev/2026", label: "compra e venda de USDT ao vivo" },
        { value: "Site", label: "no ar em satbank.com.br" },
        {
          term: "IA",
          value: "Regras",
          label: "Ajudas sem LLM, no lugar do chatbot rejeitado.",
          status: "decision",
          statusLabel: "Decisão",
        },
      ],
    },
    {
      id: "errado",
      label: "08 / O que deu errado",
      title: "O que deu errado.",
      draft: "{{CONFIRMAR: revisar a seção O que deu errado}}",
      items: [
        { index: "8.1", text: "O chatbot. Desenhamos um assistente que os usuários rejeitaram, e o aprendizado custou tempo." },
        {
          index: "8.2",
          text: "O serviço de auth passou um tempo no GCP e voltou para Workers. O proxy em Express ficou no Cloud Run.",
        },
        { index: "8.3", text: "O app ficou sem suíte de testes automatizados. O BFF tinha um roteiro de testes manuais com curl." },
      ],
      specs: [{ term: "O que eu faria diferente", value: "{{CONFIRMAR: o que eu faria diferente}}" }],
    },
  ],
  next: { slug: "tazz", index: "01", title: "Tazz." },
  seo: {
    title: "SAT Bank: banco digital com regras no lugar do chatbot · Everton Resende",
    description:
      "Como desenhei e construí o app, o BFF em Cloudflare Workers, o admin e o site de um banco digital, e por que as ajudas saíram com regras, sem LLM.",
  },
};
