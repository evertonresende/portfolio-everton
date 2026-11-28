# SEO do evertonresende.com

O que está no ar, onde mora no código, o que foi feito fora do repo e o que falta.
Estado de 2026-11-28 (deploys `deploy-20261128-101554` e `deploy-20261128-172915`).

## Regra que vale para tudo: o mesmo cargo em todo lugar

O Google junta site, LinkedIn, GitHub e CV numa pessoa só quando o nome e o cargo batem.
Cargo atual: **Forward Deployed AI Engineer** (o "AI Engineer" sozinho segue no resumo do CV, por causa do ATS).
Mudou o cargo? Mude em todos estes lugares no mesmo dia:

1. `app/content/shared.ts`: `PERSON.jobTitle` (alimenta o JSON-LD e o alt da imagem OG).
2. `app/content/{pt,en}/home.ts`: `seo.title`, `seo.description`, `hero.qualifier` e `hero.title`.
3. Imagens OG: `scripts/og/og.html`, gerar com nome novo (`og-v3.png`...) e atualizar `OG_IMAGE` em `shared.ts`.
4. `curriculo.html` e `curriculo-en.html` (linha `.role` e `<title>`), e depois gerar os PDFs de novo.
5. Fora do repo: headline e cargo do LinkedIn (PT e EN), o currículo enviado nas candidaturas do LinkedIn e a bio do GitHub.

O `llms.txt` e as versões em Markdown saem de `app/content` sozinhas.

## No código

| O quê | Onde | Detalhe |
|---|---|---|
| Título e descrição por página | `app/content/{pt,en}/home.ts` (`seo`), `detail.seo` de cada case | Nome + cargo no título. |
| Canonical, hreflang (pt-BR, en, x-default), Open Graph | `app/seo.ts` (`pageMetadata`) | O canonical fica sem barra final. |
| JSON-LD | `lib/json-ld.ts`, `app/components/json-ld.tsx` | Homes: `@graph` com WebSite, ProfilePage e Person (`@id` `https://evertonresende.com/#person`). Cases: Article com essa mesma Person como autora. Testes em `lib/json-ld.test.ts`. |
| Serviços no JSON-LD | `makesOffer` vem de `home.delivery.items` | É o mesmo texto da seção "O que eu entrego". Mudou a seção, o schema muda junto. |
| `sameAs` (perfis) | `CONTACT` em `shared.ts` + `person()` em `lib/json-ld.ts` | Hoje só LinkedIn e GitHub. Quando ele criar Instagram ou X, adicione nos dois lugares. |
| Sitemap | `public/sitemap.xml` | Arquivo estático: 8 URLs (a home e 3 cases, em PT e EN), com hreflang. Página nova = entrada nova à mão. |
| robots.txt | `public/robots.txt` | Libera tudo e aponta o sitemap. Não bloqueie robôs de busca: a busca do Claude usa o índice do Brave. |
| Domínio único (301) | `lib/redirects.ts` (`canonicalRedirect`), `worker/index.ts` | www e http vão para `https://evertonresende.com` com o mesmo caminho e query, num salto só. |
| noindex nas cópias | `worker/index.ts` e `public/_headers` | `*.workers.dev` (e toda URL de preview) responde `X-Robots-Tag: noindex`. |
| Imagens de prévia (OG) | `public/og-v2.png`, `public/og-en-v2.png`; fonte em `scripts/og/` | 1200x630. Comando no topo de `scripts/og/render.cjs`. |
| Markdown para agentes de IA | `lib/markdown.ts` | `/llms.txt`, `/llms-full.txt`, `.md` de cada página (ver `CLAUDE.md`). |

Por que o 301 e o noindex estão em dois lugares (o worker não vê arquivo estático): `.trail/learnings/2026-11-28-canonical-host-and-noindex-worker-for-everton.md`.

## Fora do repo

- **Cloudflare:** a regra de Single Redirect na zona (fase `http_request_dynamic_redirect`) faz o 301 de www e http também para PDFs e imagens.
  Adicione regras com create-rule e nunca troque o ruleset inteiro por PUT: a regra desativada `molt-token-redirect` tem de continuar lá.
- **Google Search Console:** verificado por DNS (registro TXT `google-site-verification`) em 2026-11-28.
- **Bing Webmaster Tools:** importado do Search Console em 2026-11-28. O índice do Bing também alimenta o DuckDuckGo e parte da busca do ChatGPT.
- **Brave Search:** não tem painel. O pedido de visita é feito em https://search.brave.com/submit-url (homes PT e EN). Para conferir se entrou: `site:evertonresende.com` em search.brave.com.
- **GitHub:** o campo "website" de portfolio-everton, agente-concierge e agent-evals-demo aponta para o site.
- **LinkedIn:** headline e cargo dizem Forward Deployed AI Engineer (PT e EN) desde 2026-11-26.

## Medido em 2026-11-28

- 301 de www e de http num salto só, mantendo o caminho e a query, para páginas e para arquivos estáticos. A versão https sem www responde 200 sem noindex.
- O JSON-LD é válido nas 8 URLs.
- Lighthouse local: LCP de 2,6 s, logo acima da meta de 2,5 s do Google.
- Ainda não verificado: o Rich Results Test do Google.

## Próximo passo: ranquear por cargo, não só pelo nome

Os alvos são **"Forward Deployed Engineer"** (o principal) e **"AI Engineer"**.

- **A frase exata não está no site.** O site diz "Forward Deployed AI Engineer", e "Forward Deployed Engineer" não aparece em nenhum texto.
- **Os termos sozinhos são disputados no mundo todo.** Em 2026-11-28, "forward deployed engineer" trazia McKinsey, Salesforce, DataCamp, Pragmatic Engineer, Fortune e vagas. Um site pessoal não entra ali sem muitos links de fora.
- **Em português o espaço está aberto.** "forward deployed engineer brasil" e "o que é forward deployed engineer" trazem só traduções de blogs gringos. Um texto original, com os casos reais dele, tem chance.

Ordem de ataque:

1. Pôr a frase exata "Forward Deployed Engineer (FDE)" na home (descrição ou lead), sem inventar fato.
2. Criar uma página em PT e EN sobre o trabalho de FDE com os casos reais, com a frase no título, no H1 e na URL. Depois: entrada no sitemap e pedido de indexação no Search Console.
3. Conseguir links de fora para essa página: post no LinkedIn, cópia no dev.to ou Medium com canonical apontando para o site, e o README do perfil no GitHub.
4. De 2 a 4 semanas depois, conferir em Search Console › Desempenho › Consultas quais buscas já mostram o site.
