import type { CaseDetail } from "../../types";

export const tazz: CaseDetail = {
  kicker: "Case 01 · Mobilidade · 2026 – hoje",
  title: "Tazz.",
  lead: "App de corridas no Brasil. Arquitetei e construí do zero o app novo em Expo e os Workers novos dele, com agentes de IA escrevendo o código em paralelo. Também levei o compute do backend para Cloudflare e coloquei no ar o agente de atendimento e o PIX.",
  factsTitle: "Ficha técnica",
  facts: [
    { term: "Papel", value: "Arquitetura, app, backend e IA" },
    { term: "Período", value: "2026 – hoje" },
    { term: "Stack", value: "TypeScript · Expo · Cloudflare Workers · Durable Objects · Queues · Postgres", mono: true },
    { term: "IA", value: "Agente com supervisão humana", status: "production", statusLabel: "Em produção" },
    { term: "App novo", value: "Expo, para substituir o app Flutter nas lojas", status: "prototype", statusLabel: "Construído" },
  ],
  stats: [
    { term: "Agente", value: "23/31", label: "casos aprovados nos evals (eram 10), com prompt e guardrail novos" },
    { term: "Migração", value: "100+ → 8", label: "Cloud Functions → Cloudflare Workers em ~47,5 h" },
    { term: "Pagamentos", value: "set/2026", label: "PIX em produção" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problema",
      title: "Um teto de cota e um app preso ao Firebase.",
      stat: { value: "20", label: "vCPU · cota fixa · São Paulo" },
      paragraphs: [
        "O backend rodava em ~158 Cloud Functions no GCP e bateu na cota fixa de 20 vCPU da região de São Paulo, com o app em operação.",
        "Mover o backend não bastava para sair do GCP. O app em Flutter falava direto com Firestore, Realtime Database, Storage e Firebase Auth pelo SDK, até no código nativo.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Contexto",
      title: "Trocar o motor com o carro andando.",
      paragraphs: [
        "Primeiro troquei o compute HTTP: ele foi para Cloudflare Workers, e os dados ficaram no GCP. Em set/2026, comecei do zero, como prova de conceito, um app novo em Expo que não fala direto com Firestore, Realtime Database nem Firebase Auth. Em 8/set, ele virou o substituto planejado do app Flutter nas lojas. Enquanto isso, o app Flutter segue em produção.",
      ],
    },
    {
      id: "papel",
      label: "03 / Meu papel",
      title: "Engenharia ponta a ponta.",
      columns: [
        {
          index: "3.1",
          title: "IA e backend.",
          items: [
            { text: "Agente de atendimento com tools, guardrails, LLM-juiz e evals" },
            { text: "Orquestração dos agentes de código que construíram o app e os Workers novos" },
            { text: "Migração strangler‑fig para Cloudflare Workers" },
            { text: "PIX com o Asaas, sobre o ledger de partida dobrada" },
          ],
        },
        {
          index: "3.2",
          title: "App novo.",
          items: [
            { text: "App em Expo do zero, para passageiro e motorista" },
            { text: "Auth próprio, hub em tempo real e API em Workers sobre Postgres" },
            { text: "Biblioteca de componentes do app novo, com tokens e 2 temas" },
            { text: "Admin novo e painel de atendimento, com handoff para humano" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Arquitetura",
      title: "Dois apps na mesma borda.",
      figures: [
        {
          number: "Fig. 01",
          caption: "App novo",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Expo · passageiro e motorista" },
            {
              title: "Workers próprios",
              note: "auth · API · corridas /v1",
              branch: [{ title: "Hub em tempo real", note: "Durable Object por cidade · WebSocket" }],
            },
            { title: "Postgres", note: "PlanetScale · Hyperdrive" },
          ],
          footnote: "Feito para OTA desde a primeira build · Firebase Auth só confere a senha no 1º login",
        },
        {
          number: "Fig. 02",
          caption: "Migração",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Flutter" },
            {
              title: "Gateway",
              note: "Worker",
              branch: [{ title: "Rotas não migradas", muted: true }, { title: "Functions legadas", note: "GCP", muted: true }],
            },
            { title: "Workers de domínio" },
            { title: "Firestore e Realtime Database", note: "GCP" },
          ],
          footnote: "Durante o porte",
        },
        {
          number: "Fig. 03",
          caption: "Atendimento",
          direction: "horizontal",
          nodes: [
            { title: "Canais", note: "WhatsApp, Instagram, app, site, e-mail" },
            { title: "Portão", note: "DO por conversa · risco e pedido de humano" },
            { title: "Agente", note: "GPT-5.6 Luna · fallback GLM no Workers AI" },
            { title: "Tools", note: "9 · ID do cliente vem do servidor" },
            { title: "Guardrail", note: "fonte, número e status conferidos" },
            { title: "Operador humano", note: "envia, edita ou descarta" },
          ],
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Onde a IA entra",
      title: "Um agente que só afirma o que tem fonte.",
      paragraphs: [
        "Em jul/2026, o atendimento recebia ~335 mensagens por dia, de passageiros e motoristas, em 5 canais. Só o cadastro de motorista travado somou 1.237 conversas em 90 dias, 66% do WhatsApp.",
        "Antes do modelo, cada mensagem passa por um portão: palavra de risco vai para a fila prioritária humana, pedido de atendente vai direto para uma pessoa, e tentativa de injeção é detectada e auditada. CPF, cartão, e-mail, telefone e localização são mascarados antes de sair para o provedor. O modelo consulta conta, corridas, pagamento e a base por 9 tools, e o ID do cliente vem do servidor, nunca do modelo.",
        "Depois do modelo, o guardrail confere a resposta: toda fonte citada tem que existir, todo número tem que estar numa fonte ou na mensagem do cliente, e afirmação de status precisa de fonte. O que passa vira rascunho para o atendente. O que não passa vai para a fila humana.",
      ],
      specs: [
        { term: "Modelo", value: "GPT-5.6 Luna, com fallback automático para GLM 5.3 Flash no Workers AI. 12 intenções fechadas e no máximo 3 rodadas de tools; na última, o modelo tem que responder." },
        { term: "LLM-juiz", value: "Revisa só o que o filtro por palavra bloqueou e libera o falso positivo. Ele nunca bloqueia sozinho. Calibrei antes de ligar: em 55 frases rotuladas (20 legítimas e 35 que devem reprovar), o limiar 0,3 deu 0 falsos bloqueios e 0 bypasses, com p50 de 543 ms. A partir de 0,5, passou 1 bypass." },
        { term: "Evals", value: "31 casos (7 adversariais): JSON inválido, intenção, handoff, citação válida, latência e respostas inseguras. Gate: zero respostas inseguras. Comparei 4 modelos no mesmo dataset; o de produção na época aprovava 4 de 31." },
        { term: "O que mudou", value: "Mesmo modelo, mesmos 31 casos: com o prompt v5 e o orquestrador e o guardrail revisados, os aprovados foram de 10 para 23, e o handoff caiu de 80,6% para 38,7%, com p50 de 2,0 s." },
        { term: "Status", value: "Rodou em shadow em produção, escrevendo sem enviar, e num piloto ao vivo com 3 contas de teste. Hoje roda supervisionado: a IA escreve o rascunho, e o atendente envia, edita ou descarta.", status: "production", statusLabel: "Em produção" },
      ],
    },
    {
      id: "construcao",
      label: "06 / Como foi construído",
      title: "Um time de agentes, com portões humanos.",
      paragraphs: [
        "Comecei o app do zero em 4/set/2026. Uma discovery com 12 agentes leu o app Flutter e a documentação do Expo SDK 57 e escreveu specs com fatos citados por arquivo e linha.",
        "Depois, agentes coordenadores, um depois do outro, tocaram um backlog de ~200 frentes em sessões paralelas, cada uma na sua worktree, e integraram o resultado. A primeira integração entrou na main em 8/set/2026.",
      ],
      figures: [
        {
          number: "Fig. 04",
          caption: "Construção com agentes",
          direction: "horizontal",
          nodes: [
            { title: "Discovery", note: "lê o app Flutter" },
            { title: "Backlog", note: "frentes em ondas" },
            { title: "Coordenador", note: "agente · integra" },
            { title: "Frentes", note: "paralelas · 1 worktree cada" },
            { title: "Revisão", note: "outro provedor por frente" },
            { title: "Portões humanos", note: "banco, main e lojas" },
          ],
        },
      ],
      specs: [
        { term: "Arquitetura", value: "Defini a arquitetura na spec do app: auth próprio, conta no Postgres, hub em tempo real e suporte a OTA desde a primeira build." },
        { term: "Evidência", value: "Cada frente fecha com uma prova por critério de aceite. O coordenador roda os checks de novo antes de integrar." },
        { term: "Revisão", value: "Cada frente passa por revisão de um modelo de outro provedor. Por cima disso, 4 rodadas consolidadas deram GO ou NO-GO, e a primeira pegou 2 regressões críticas antes da main." },
        { term: "Modelo por risco", value: "Modelo mais forte em dinheiro, auth, código nativo e arquitetura. Mais leve em portes 1:1 e telas simples." },
        { term: "Portões", value: "Migração de banco, merge na main, redeploy de worker em produção e build de loja ficaram fora do alcance dos agentes sozinhos: eles preparavam, e um humano autorizava, às vezes para uma leva inteira." },
      ],
    },
    {
      id: "decisoes",
      label: "07 / Decisões e trade-offs",
      title: "O que escolhi, e por quê.",
      items: [
        {
          index: "7.1",
          title: "Base curada com busca por palavra‑chave.",
          text: "A base tem 58 entradas curadas, cada uma aprovada antes de ir ao ar, e busca por palavra‑chave. O corpus tinha ~71 KB, com ~5 KB de conteúdo útil de suporte. A decisão define quando reavaliar o uso de RAG: só se o corpus passar de 200 KB de texto útil, se os \"não sei\" por falta de contexto passarem de 10% por duas semanas seguidas e se houver um dono para curar o corpus.",
        },
        {
          index: "7.2",
          title: "Tools com escopo mínimo.",
          text: "9 tools: 7 só leem (identidade, conta, corridas, pagamento, tickets e base) e 2 têm efeito (nota interna e handoff). O ID do cliente vem do servidor, e tudo passa por allowlist e auditoria.",
        },
        {
          index: "7.3",
          title: "Intenções fechadas, rodadas contadas.",
          text: "O modelo inventava nomes de intenção, e cada nome novo virava handoff: a lista fechou em 12. O estouro de rodadas de tools era a maior fonte de handoff: o limite ficou em 3, e a última rodada vem sem tools, para o modelo responder.",
        },
        {
          index: "7.4",
          title: "Um juiz que só libera.",
          text: "O filtro por palavra bloqueia afirmação sem fonte. O LLM-juiz entra só nesses bloqueios e libera o falso positivo. Contra as 39 frases legítimas da suíte, a regra revisada deu 0 falso positivo.",
        },
        {
          index: "7.5",
          title: "App novo, não um remendo no Flutter.",
          text: "A discovery de saída do GCP mostrou que o maior acoplamento estava no cliente: o Flutter falava com o Firebase direto pelo SDK. Para buscar dados, o app novo fala só com Workers próprios, e o Flutter segue nas lojas até a troca.",
        },
        {
          index: "7.6",
          title: "Conta no Postgres, Firebase Auth só no 1º login.",
          text: "No app novo, a conta é a linha no Postgres. No primeiro login, o Worker de auth confere a senha no Firebase uma vez e grava um hash próprio. Depois disso, ele não chama mais o Firebase para aquela conta e nunca escreve nele.",
        },
        {
          index: "7.7",
          title: "Strangler‑fig, não big bang.",
          text: "Rotas migradas por service binding atrás do gateway, e o que não migrou seguiu nas functions. Só o compute saiu: Firestore e Realtime Database ficaram no GCP, porque a cota que travou era de vCPU.",
        },
        {
          index: "7.8",
          title: "Dinheiro isolado.",
          text: "Serviço de pagamentos isolado, ledger de partida dobrada sem rota pública e webhooks com autenticidade verificada (HMAC quando o provedor assina).",
        },
      ],
    },
    {
      id: "resultado",
      label: "08 / Resultado",
      title: "Agente no ar. App novo a caminho.",
      paragraphs: [
        "As primeiras builds de produção do app novo saíram em out/2026, e ele foi preparado para substituir o app Flutter como atualização nas lojas. O admin novo já roda na web, com dados de produção.",
      ],
      stats: [
        { term: "IA", value: "IA", label: "Agente nas conversas reais, com um atendente revisando cada resposta.", status: "production", statusLabel: "Em produção" },
        { term: "App", value: "App", label: "App em Expo construído com agentes de código.", status: "prototype", statusLabel: "Construído" },
      ],
    },
  ],
  next: { slug: "dental-smart", index: "03", title: "Dental Smart." },
  seo: {
    title: "Tazz: app em Expo construído do zero com agentes de IA · Everton Resende",
    description:
      "Como arquitetei um app de corridas em Expo e os Workers novos dele, construídos por agentes de código em paralelo. Também portei 100+ Cloud Functions para Cloudflare Workers em ~48 h e coloquei um agente de atendimento em produção.",
  },
};
