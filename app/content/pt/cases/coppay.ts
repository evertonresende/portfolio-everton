import type { CaseDetail } from "../../types";

export const coppay: CaseDetail = {
  kicker: "Case 01 · Fintech · 2025–2026 · Consultoria e execução",
  title: "Coppay.",
  lead: "Fintech de crédito e conta digital. Construí a esteira de análise de crédito: uma consulta por CPF cruza a margem do consignado, o bureau, o SCR do Banco Central e as simulações, e um LLM escreve o parecer para o analista decidir, a ~R$ 0,01 por parecer. Também construí o app em Expo, o BFF em Cloudflare Workers e o back-office.",
  factsTitle: "Ficha técnica",
  facts: [
    { term: "Papel", value: "Arquitetura, app, backend e IA" },
    { term: "Período", value: "2025–2026" },
    { term: "Stack", value: "TypeScript · Expo · Hono · Cloudflare Workers · Durable Objects · Postgres · Python · FastAPI", mono: true },
    { term: "IA", value: "Parecer de crédito para o analista", status: "production", statusLabel: "Em produção" },
    { term: "Agente", value: "Agente de WhatsApp em Python (Agno + FastAPI)", status: "offline", statusLabel: "Construído" },
  ],
  stats: [
    { term: "Parecer", value: "~R$ 0,01", label: "custo estimado por parecer de crédito" },
    { term: "Consulta", value: "4 fontes", label: "consignado, bureau, SCR e simulações numa consulta por CPF" },
    { term: "App", value: "2 lojas", label: "publicado na App Store e no Google Play" },
  ],
  sections: [
    {
      id: "problema",
      label: "01 / Problema",
      title: "O score do bureau não mostra a dívida.",
      paragraphs: [
        "A Coppay precisava analisar pedidos de crédito consignado e de crédito pessoal. O score de um bureau privado é uma inferência de risco: ele não diz quanto a pessoa já deve em empréstimos e financiamentos. Essa dívida está no SCR, o registro do Banco Central.",
        "Para decidir, o analista precisava de tudo na mesma tela: a margem do consignado, o relatório do bureau, o SCR e as opções de crédito pessoal já simuladas.",
        "Cada consulta custa dinheiro, porque o bureau é pago, e tem efeito fora do sistema: a proposta de consignado dispara um termo de consentimento para o trabalhador. Rodar duas vezes para o mesmo CPF custa em dobro e incomoda o cliente.",
      ],
    },
    {
      id: "contexto",
      label: "02 / Contexto",
      title: "Uma conta digital sobre um BaaS.",
      paragraphs: [
        "O crédito roda dentro de uma plataforma maior. A conta digital tem um app em Expo, publicado na App Store e no Google Play, um BFF em Hono sobre Cloudflare Workers e um back-office em Next.js, com permissões por papel (RBAC) e audit log.",
        "No legado, o BFF fala com os provedores por uma camada própria: Cronos para a conta, Asaas para boleto e HBI para a originação de crédito. Em set/2026, construí um BFF novo sobre o BaaS do Asaas, com uma subconta por cliente. Ele está publicado ao lado do legado, ainda sem tráfego real: a liberação depende da homologação do Asaas.",
      ],
    },
    {
      id: "papel",
      label: "03 / Meu papel",
      title: "Engenharia ponta a ponta.",
      columns: [
        {
          index: "3.1",
          title: "Crédito e IA.",
          items: [
            { text: "Esteira de consulta de crédito por CPF, em 2 fases, com trava por CPF" },
            { text: "Integração com bureau, SCR do Banco Central e simulações de consignado e de crédito pessoal" },
            { text: "Parecer de crédito por LLM, com schema fixo e falha explícita" },
            { text: "Triagem de e-mail num Durable Object por caixa e agente de WhatsApp em Python" },
          ],
        },
        {
          index: "3.2",
          title: "Plataforma.",
          items: [
            { text: "App em Expo, publicado nas duas lojas" },
            { text: "BFF em Hono sobre Cloudflare Workers, com camada de provedores" },
            { text: "Back-office em Next.js, com RBAC e audit log" },
            { text: "BFF novo sobre o BaaS do Asaas, com uma subconta por cliente" },
          ],
        },
      ],
    },
    {
      id: "arquitetura",
      label: "04 / Arquitetura",
      title: "Da consulta ao parecer.",
      figures: [
        {
          number: "Fig. 01",
          caption: "Consulta de crédito",
          direction: "horizontal",
          nodes: [
            { title: "Operador", note: "CPF no back-office" },
            {
              title: "BFF",
              note: "trava por CPF · teto diário",
              branch: [{ title: "Consignado", note: "termo de consentimento · margem" }],
            },
            { title: "Bureau", note: "consulta paga · score e restrições" },
            { title: "SCR", note: "Banco Central · dívida registrada" },
            { title: "Parecer", note: "gpt-oss-120b · schema fixo" },
            { title: "Analista", note: "lê o parecer na tela da proposta" },
          ],
          footnote: "Bureau, SCR e parecer ficam gravados e são reusados por 30 dias",
        },
        {
          number: "Fig. 02",
          caption: "Plataforma",
          direction: "horizontal",
          nodes: [
            { title: "App", note: "Expo · App Store e Google Play" },
            {
              title: "BFF",
              note: "Hono · Cloudflare Workers",
              branch: [{ title: "Back-office", note: "Next.js · RBAC · audit log" }],
            },
            { title: "Provedores", note: "Cronos · Asaas · HBI" },
            { title: "Postgres", note: "Supabase · Hyperdrive" },
          ],
          footnote: "Jobs de provedor em fila, com DLQ",
        },
      ],
    },
    {
      id: "ia",
      label: "05 / Onde a IA entra",
      title: "Um parecer para o analista, não uma decisão.",
      paragraphs: [
        "O operador consulta um CPF no back-office. O BFF busca o relatório do bureau e o SCR, simula as opções de crédito pessoal e confere se o cliente tem margem de consignado. A margem depende do consentimento do trabalhador: enquanto ele não aceita o termo, o resto da consulta já roda.",
        "Com esses dados no prompt, o modelo devolve um JSON de formato fixo: aprovável ou não, risco em 4 faixas, valor recomendado, faixa de parcela, prazo, condições e um texto curto. O parecer aparece na tela da proposta, junto do relatório do bureau e do SCR. O cartão avisa que ele é sujeito a revisão humana, e a decisão fica com o analista.",
      ],
      specs: [
        { term: "Modelo", value: "gpt-oss-120b no Cloudflare Workers AI, com temperatura 0,2. É um modelo de raciocínio: o rascunho consome o mesmo orçamento de tokens da resposta. Subi o teto de 800 para 2.000 tokens depois que respostas reais vieram cortadas." },
        { term: "Regras do prompt", value: "Usar só os dados fornecidos e nunca inventar número. Score, renda presumida e SCR ausentes entram como indisponíveis e contam como risco. O valor recomendado não passa do valor pedido nem das opções já simuladas. Se a margem de consignado já está liberada na hora da consulta, o parecer diz que ele é a melhor opção e avalia o crédito pessoal como alternativa." },
        { term: "Saída", value: "Campo ausente cai para o lado conservador: sem faixa de risco reconhecida, o risco vira \"alto\", e sem aprovação explícita, o parecer sai como não aprovável. Resposta cortada, sem JSON ou sem nenhum dos campos principais não vira parecer: a função falha com erro, e a consulta segue sem o cartão de IA." },
        { term: "Custo e freios", value: "~R$ 0,01 por parecer, por estimativa. Bureau, SCR e parecer são gravados e reusados por 30 dias, e o operador pode forçar uma consulta nova. Cada operador tem um teto de 100 consultas por dia." },
        { term: "Auditoria", value: "Cada parecer fica gravado com o modelo usado e a data. O código só insere no histórico de bureau e de SCR, nunca edita." },
        { term: "Status", value: "Validado com consultas reais em produção em jun e jul/2026.", status: "production", statusLabel: "Em produção" },
        { term: "E-mail", value: "Cada e-mail que chega passa por triagem (categoria, prioridade e resumo) num Durable Object por caixa. O resultado fica gravado, mas a tela da caixa não chegou a mostrá-lo. Um botão sugere a resposta pela thread." },
        { term: "Agente de WhatsApp", value: "Em Python (Agno + FastAPI): um líder roteia para 3 especialistas (empréstimo, conta e suporte), com tools de leitura e handoff. Passou numa bateria ao vivo de 6 cenários, com o modelo real e tools simuladas, incluindo injeção. Não chegou a atender clientes.", status: "offline", statusLabel: "Construído" },
      ],
    },
    {
      id: "decisoes",
      label: "06 / Decisões e trade-offs",
      title: "O que escolhi, e por quê.",
      items: [
        {
          index: "6.1",
          title: "A dívida registrada entra com peso alto.",
          text: "O bureau privado infere risco. O SCR registra o que a pessoa de fato deve. O parecer recebe os dois, e o prompt manda dar peso alto à dívida registrada, seja qual for o score. Se a consulta ao SCR falha, o campo vai como indisponível, e dado ausente conta como risco.",
        },
        {
          index: "6.2",
          title: "Limite não é dívida.",
          text: "Na primeira consulta com SCR preenchido, o total somava limite de cartão e de cheque especial como se fosse dívida, e o parecer citava uma dívida bem maior que a real. Separei as duas coisas no parser e no prompt. Os registros antigos se corrigiram sozinhos, porque o resumo é recalculado a partir do relatório bruto gravado.",
        },
        {
          index: "6.3",
          title: "Renda presumida não reprova.",
          text: "A renda presumida do bureau é uma estimativa estatística por perfil, não renda comprovada. O modelo estava negando crédito só por ela. Agora, quando a dúvida é a capacidade de pagamento contra a renda presumida, o parecer aprova com condição: comprovar renda que cubra as parcelas atuais mais a nova. Recusa fica para sinal duro, como restrição, protesto ou dívida muito alta.",
        },
        {
          index: "6.4",
          title: "Falhar com erro, não devolver parecer falso.",
          text: "Um erro de leitura da resposta fazia todo parecer sair com os valores padrão, e ninguém via erro. Numa revisão de crédito, isso é pior que não ter parecer. Agora, resposta cortada, sem JSON ou sem nenhum dos campos principais falha com erro, e a tela mostra a consulta sem o cartão de IA.",
        },
        {
          index: "6.5",
          title: "O modelo recomenda, a pessoa decide.",
          text: "O parecer é apoio para o analista. Nenhum código concede crédito a partir dele: o campo de aprovável só aparece na tela. A única outra leitura é uma tool do agente de WhatsApp, que informava se havia pré-aprovação e não chegou a rodar com clientes.",
        },
        {
          index: "6.6",
          title: "Uma trava por CPF.",
          text: "A consulta tem custo (o bureau pago) e efeito fora do sistema: o termo de consentimento do consignado e um cadastro no provedor, que não deduplica CPF. Esses três passos rodam dentro de uma trava por CPF, e um segundo pedido para o mesmo CPF recebe 409 em vez de duplicar. A trava dura 5 minutos, porque a seção encadeia até ~8 chamadas ao provedor. Ela fica em KV e é de melhor esforço, não uma trava distribuída forte. O SCR e o parecer rodam depois dela e contam com o reuso de 30 dias.",
        },
        {
          index: "6.7",
          title: "Spam fora da IA.",
          text: "Na triagem de e-mail, tirei do modelo a decisão de spam depois que ele marcou e-mails legítimos. Numa fintech, um falso positivo custa mais caro. O filtro ficou com o Cloudflare Email Routing (SPF, DKIM, DMARC e as heurísticas dele), e a pessoa pode marcar spam à mão.",
        },
        {
          index: "6.8",
          title: "Tools que ignoram os argumentos do modelo.",
          text: "No agente de WhatsApp, as tools são de leitura e pegam a identidade do cliente do contexto confiável da conversa, não do que o modelo pede. Isso bloqueia IDOR: o modelo não consegue consultar a conta de outra pessoa.",
        },
        {
          index: "6.9",
          title: "BFF novo ao lado do legado, não troca de uma vez.",
          text: "Em produção, o BFF sobre o Asaas tem worker, domínio, KV e filas próprios. Divide com o legado, de propósito, o Postgres e os dois buckets de documentos e de biometria do onboarding. Ele ainda não recebeu tráfego real, e o legado seguiu atendendo o app e o crédito. Tem 61 arquivos de teste, limiar de 80% de cobertura de linhas configurado e um CI que bloqueia em vulnerabilidade alta de dependência de runtime.",
        },
      ],
    },
    {
      id: "resultado",
      label: "07 / Resultado",
      title: "Parecer na tela do analista. Sem número de carteira.",
      paragraphs: [
        "A esteira de crédito foi validada com consultas reais em produção em jun e jul/2026, e o parecer aparece na tela da proposta para o analista. O app está publicado na App Store e no Google Play.",
        "O que este case não tem: taxa de aprovação, inadimplência ou volume de pareceres. A decisão era do analista, e o repositório não mede o resultado da carteira. O ~R$ 0,01 por parecer é estimativa de custo, não medição.",
        "O agente de WhatsApp ficou construído e testado, mas não chegou a atender clientes.",
      ],
      stats: [
        { term: "Parecer", value: "~R$ 0,01", label: "Custo estimado por parecer. A decisão final é do analista.", status: "production", statusLabel: "Em produção" },
        { term: "Reuso", value: "30 dias", label: "Bureau, SCR e parecer gravados e reusados, com teto de 100 consultas por operador ao dia." },
        { term: "Agente", value: "6 cenários", label: "Bateria ao vivo do agente de WhatsApp, com tools simuladas, incluindo injeção. Não atendeu clientes.", status: "offline", statusLabel: "Construído" },
      ],
    },
  ],
  next: { slug: "tazz", index: "02", title: "Tazz." },
  seo: {
    title: "Coppay: análise de crédito com parecer por LLM e decisão humana · Everton Resende",
    description:
      "Como construí a esteira de análise de crédito de uma fintech: consulta por CPF com bureau, SCR do Banco Central e simulações, parecer por LLM em schema fixo a ~R$ 0,01 e decisão do analista. E o app, o BFF em Cloudflare Workers e o back-office.",
  },
};
