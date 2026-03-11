# Guia de Apresentacao dos Cases

Como explicar, defender e responder perguntas sobre cada case do portfolio.

---

## 1. SAT Bank — IA no centro do design de um app bancario

### Como apresentar (2-3 minutos)

"No SAT Bank, fui contratado como AI Product Designer com uma missao dupla: usar IA pra acelerar o proprio processo de design, e projetar features de IA dentro do app bancario.

Na parte de processo, substituí o fluxo tradicional de Figma por prototipacao com codigo real usando Claude Code e Cursor. Em vez de entregar mockups estaticos e esperar semanas pelo handoff, eu entregava prototipos funcionais que a engenharia usava como ponto de partida. Isso cortou 74% do tempo de ciclo.

Na parte de produto, projetei features como categorizacao inteligente de gastos, alertas preditivos de saldo e um assistente que responde duvidas sobre extrato em linguagem natural. Cada feature foi validada com A/B testing no Statsig antes do rollout — nenhuma decisao de design era baseada em achismo.

O resultado: 38% de adocao das features de IA no primeiro mes e 17% de aumento na retencao de usuarios."

### Pontos fortes pra enfatizar

- Voce nao so usa IA como ferramenta — voce projeta features de IA no produto
- Prototipar com codigo real elimina o gap entre design e engenharia
- Decisoes baseadas em dados (A/B testing), nao em opiniao
- Resultado mensuravel: retencao, adocao, velocidade

### Possiveis perguntas e respostas

**"Como convenceu o time a abandonar o Figma e prototipar com codigo?"**
> Nao abandonei o Figma — ele continua sendo usado pra exploracoes visuais rapidas e documentacao. O que mudei foi o artefato principal de entrega. Em vez de entregar um arquivo Figma com 40 telas, eu entregava um prototipo funcional que o usuario podia testar e a engenharia podia iterar. O argumento que funcionou com os stakeholders foi simples: mostrei que em uma sprint, validamos 3 variantes de onboarding com usuarios reais — algo que no fluxo antigo levaria um mes.

**"O assistente de IA nao gera risco regulatorio em contexto bancario?"**
> Sim, e por isso projetei um modelo de confianca progressiva. O assistente comeca respondendo perguntas informativas (saldo, extrato) e so sugere acoes transacionais apos o usuario demonstrar conforto. Cada resposta mostra a fonte da informacao. O time juridico participou desde o discovery pra garantir conformidade.

**"Quais foram os experimentos de A/B testing mais impactantes?"**
> O mais revelador foi no onboarding: testamos uma versao com explicacao detalhada das features de IA vs uma versao que simplesmente ativava tudo por padrao. A versao com explicacao teve 23% mais retencao na primeira semana. Usuarios queriam entender o que a IA fazia antes de confiar.

**"74% de reducao no ciclo parece muito. Como mediu isso?"**
> Comparamos o tempo medio da primeira iteracao de design ate o primeiro deploy em producao. No fluxo antigo (mockup > handoff > implementacao > revisao), a media era 18 dias. Com prototipacao em codigo, caiu pra 5 dias. A medicao comecou a ser feita quando implementei o novo processo, com tracking no Jira.

**"Como garantiu que os prototipos em codigo tinham qualidade de design?"**
> Defini um design system com tokens semanticos desde o inicio. Isso significa que o prototipo ja usava as cores, espacamentos e tipografia corretos. Claude Code e Cursor seguem as regras do design system quando voce configura o contexto certo. O prototipo nao era codigo jogado — era codigo que respeitava o sistema visual.

**"Voce programa ou so usa as ferramentas de IA pra gerar codigo?"**
> Tenho background tecnico — entendo React, TypeScript, CSS. Nao sou engenheiro, mas consigo ler, ajustar e debugar codigo. Isso e fundamental: Claude Code e Cursor sao poderosos, mas se voce nao entende o que esta sendo gerado, nao consegue direcionar. Meu diferencial e exatamente esse — falo a lingua da engenharia e uso isso pra prototipar mais rapido.

---

## 2. Dental Smart — Software odontologico com IA

### Como apresentar (2-3 minutos)

"O Dental Smart e um SaaS odontologico onde projetei todas as features de IA do produto. Dentistas gastavam ate 40% do tempo em tarefas administrativas, e a IA foi pensada pra devolver esse tempo pro atendimento.

Comecei com pesquisa de campo — passei 3 semanas em 8 clinicas diferentes, cronometrando tarefas e entrevistando dentistas, recepcionistas e auxiliares. O insight principal foi que dentistas nao precisavam de IA no diagnostico tanto quanto precisavam de IA no administrativo.

A partir disso, projetei 3 features principais: prontuario por voz que entende terminologia odontologica, um assistente de analise de radiografias que sugere pontos de atencao com explicabilidade, e agendamento inteligente com lembretes personalizados.

O prontuario por voz cortou o tempo de preenchimento de 12 pra 3 minutos por paciente. O assistente de radiografia teve um momento decisivo: quando adicionamos explicabilidade — o 'por que' de cada sugestao — o uso saltou de 41% pra 89%. Dentistas nao confiam em caixa preta."

### Pontos fortes pra enfatizar

- Pesquisa de campo real (nao survey online) com 8 clinicas
- Construiu features de IA de ponta: visao computacional, NLP, voz
- Explicabilidade como diferencial — dentistas confiam quando entendem
- Numeros de adocao que comprovam que o design funcionou

### Possiveis perguntas e respostas

**"Como funcionava o assistente de radiografia tecnicamente?"**
> Eu nao treinei o modelo — isso foi trabalho de engenharia de ML. Meu papel foi projetar a experiencia: como a informacao e apresentada, como o dentista interage, o que acontece quando a IA erra. Projetei niveis de confianca (alta, media, baixa), explicacoes visuais apontando a area na imagem, e um fluxo de feedback pra o dentista corrigir a IA. O design da interface de explicabilidade foi o que fez a adocao subir.

**"Prontuario por voz nao e impreciso com barulho de clinica?"**
> Esse foi exatamente o desafio. Testamos em ambiente real — com sugador, compressor e conversa com paciente. A interface que projetei mostrava a transcricao em tempo real e estruturava automaticamente nos campos do prontuario. O dentista precisava de um toque pra confirmar, nao pra corrigir tudo. A acuracia ficou acima de 93% em ambiente clinico real, e os 7% de erro eram corrigidos com um toque.

**"Como lidou com LGPD em dados de saude?"**
> Trabalhei junto com o time juridico desde o inicio. Dados de radiografia nunca saiam do servidor da clinica pra treinamento sem consentimento explicito. No design, adicionei telas de consentimento claras e um painel onde o paciente pode ver e revogar permissoes. A transparencia virou feature, nao obstaculo.

**"Voce teve dificuldade em fazer dentistas adotarem uma ferramenta nova?"**
> Muito. Dentistas tem pouca paciencia pra software — se nao funciona em 5 segundos, abandonam. Por isso o principio de design era 'IA invisivel'. O prontuario por voz e ativado com um botao ao lado do campo — nao precisa abrir outra tela. O assistente de radiografia aparece automaticamente quando o dentista abre uma imagem. Nada exige um fluxo novo — tudo se encaixa no que ja faziam.

**"De 41% pra 89% de uso com explicabilidade — como descobriu isso?"**
> Na primeira versao, o assistente so apontava areas na radiografia. Nos testes, dentistas diziam 'ta, mas por que?' Entao redesenhei pra mostrar a logica: 'Area com densidade atipica compativel com possivel lesao periapical, confianca 78%'. Rodamos um teste A/B com 34 dentistas — metade com explicabilidade, metade sem. A diferenca foi absurda. Dentistas sao cientistas, querem evidencia.

**"Quanto tempo levou do discovery ate o primeiro lancamento?"**
> 3 semanas de pesquisa, 4 semanas de design e prototipacao, 6 semanas de desenvolvimento da primeira feature (prontuario por voz). Total: cerca de 3 meses ate o primeiro lancamento em beta com 12 clinicas.

---

## 3. FAPAM — Portal do Aluno

### Como apresentar (2-3 minutos)

"A FAPAM foi onde comecei minha carreira de design. Era uma faculdade com mais de 4.000 alunos, e o Portal do Aluno era a ferramenta digital mais importante — notas, matricula, frequencia, material de aula. So que o portal tinha 8 anos sem redesign e as reclamacoes eram constantes.

Fiz card sorting com 120 alunos e descobri que 73% nao conseguiam encontrar informacoes basicas em menos de 3 cliques. O problema nao era visual — era estrutural. A arquitetura de informacao refletia a estrutura administrativa da faculdade, nao o modelo mental dos alunos.

Redesenhei toda a arquitetura e lancei em 4 fases ao longo de 2 semestres, testando cada fase com 15-20 alunos antes do deploy. Nao queria arriscar quebrar o acesso durante periodo de provas.

O resultado: tempo de busca caiu 68%, acessos via mobile subiram de 12% pra 52%, e a nota de satisfacao dobrou de 2.1 pra 4.2."

### Pontos fortes pra enfatizar

- Pesquisa quantitativa real (120 alunos, card sorting)
- Lancamento em fases — maturidade de processo pra inicio de carreira
- Numeros claros de antes/depois
- Mostra evolucao: comecou com UX tradicional, hoje faz IA

### Possiveis perguntas e respostas

**"Esse projeto e de 2018, nao esta desatualizado?"**
> Ele mostra a base solida de UX que sustenta tudo que faco hoje. Pesquisa com usuarios, arquitetura de informacao, testes de usabilidade, lancamento incremental — esses fundamentos nao mudam. A diferenca e que hoje aplico esses mesmos principios em contextos de IA. Sem essa base, nao conseguiria projetar features de IA que fazem sentido pro usuario.

**"Card sorting com 120 alunos parece muito. Como organizou?"**
> Fiz sessoes em grupos de 10-15 alunos, no laboratorio de informatica da faculdade. Usamos cards fisicos com nomes de funcionalidades. Cada sessao durava 40 minutos. Rodamos 9 sessoes ao longo de 2 semanas. O custo foi praticamente zero — so precisei de cartolina, canetinha e um horario vago no laboratorio.

**"Por que lancou em fases e nao tudo de uma vez?"**
> Porque eram 4.000 alunos usando o portal todo dia. Se lancasse tudo e tivesse um problema critico, afetaria matriculas, acesso a notas, frequencia. Na fase 1, identificamos 23 problemas de usabilidade nos testes que teriam afetado milhares de alunos. A abordagem incremental custou mais tempo, mas zero interrupcao.

**"Como convenceu a gestao da faculdade a investir em pesquisa?"**
> Mostrei numeros. Fiz um levantamento rapido dos chamados de suporte no primeiro mes — 67% eram sobre 'nao consigo encontrar X no portal'. Apresentei isso pra gestao com uma estimativa do custo de atendimento desses chamados vs o custo de fazer pesquisa com alunos. O argumento financeiro abriu a porta.

**"Satisfacao de 2.1 pra 4.2 — como mediu?"**
> A faculdade ja fazia pesquisa semestral de satisfacao com os alunos, incluindo uma pergunta sobre o portal. Usamos a mesma escala (1 a 5) pra manter comparabilidade. A nota 2.1 era a media dos 2 semestres antes do redesign. A 4.2 foi medida 2 semestres apos o lancamento completo.

**"Qual a relacao desse projeto com o que voce faz hoje com IA?"**
> Tudo. A base de pesquisa com usuarios, testes iterativos e design baseado em evidencia que aprendi na FAPAM e exatamente o que aplico hoje em features de IA. A diferenca e a ferramenta — antes era wireframe no papel, hoje e prototipo com Claude Code. Mas o processo de entender o usuario, testar, iterar e medir resultado e o mesmo.

---

## Dicas gerais pra entrevista

### Narrativa que conecta os 3 cases

"Minha trajetoria mostra uma evolucao clara: comecei com UX tradicional na FAPAM, onde aprendi os fundamentos de pesquisa e design centrado no usuario. Depois apliquei design de produto com IA no Dental Smart, projetando features inteligentes pra um contexto onde confianca e tudo. E no SAT Bank, juntei os dois mundos — uso IA pra acelerar meu processo E projeto features de IA no produto. Essa combinacao e o que me diferencia."

### Quando perguntarem sobre IA

- Sempre diferencie IA no processo (ferramentas que voce usa) vs IA no produto (features que voce projeta)
- De exemplos concretos de features, nao so "uso IA no design"
- Mostre que entende as limitacoes: explicabilidade, confianca, privacidade
- Mencione metricas de adocao — provar que a IA que voce projetou as pessoas realmente usam

### Quando perguntarem sobre codigo

- Voce nao e engenheiro e nao pretende ser
- Seu background tecnico e uma vantagem competitiva, nao sua funcao
- Prototipar com codigo elimina o gap com engenharia, nao substitui o Figma
- Claude Code e Cursor sao ferramentas, nao muletas

### Quando perguntarem sobre metricas

- Sempre explique como mediu (qual ferramenta, qual periodo, qual baseline)
- Numeros sem contexto nao impressionam — o "antes vs depois" e o que importa
- Se nao lembrar o numero exato, diga a ordem de grandeza ("foi acima de 30%")
- Nunca invente numeros na hora — e melhor dizer "nao lembro o exato" do que ser pego

### Perguntas pra voce fazer ao recrutador

- "Como o time de design lida com features de IA hoje?"
- "Voces usam A/B testing pra validar decisoes de design?"
- "Qual o nivel de integracao entre design e engenharia?"
- "Qual o maior desafio de UX que voces enfrentam com IA atualmente?"
