// Dados iguais nos dois idiomas.

export const SITE_URL = "https://evertonresende.com";

// Gerado de curriculo.html (instruções no topo daquele arquivo). Mudou fato no site, regenerar o PDF.
export const CV_URL = "/cv-everton-resende.pdf";
// Versão em inglês: curriculo-en.html.
export const CV_URL_EN = "/cv-everton-resende-en.pdf";

export const CONTACT = {
  email: "contato@evertonresende.com",
  linkedin: "https://linkedin.com/in/evertonresende",
  github: "https://github.com/evertonresende",
  whatsapp: "https://wa.me/5537999133556",
} as const;

// Prévia de link (Open Graph) e imagem dos cases no JSON-LD.
export const OG_IMAGE = { pt: "/og-v2.png", en: "/og-en-v2.png" } as const; // v2: "Forward Deployed AI Engineer" (2026-11-28); nome novo fura o cache das prévias

export const PERSON = {
  name: "Everton Resende",
  // Grafia com acento, como ele assina: quem busca "Éverton Resende" chega à mesma pessoa.
  alternateName: "Éverton Resende",
  jobTitle: "Forward Deployed AI Engineer",
  locality: "Pará de Minas",
  region: "MG",
  country: "BR",
  image: "/images/everton-v2-480.webp",
  // Skills com prova na ficha de fatos (§5) ou confirmadas pelo Éverton (AWS, 2026-10-27). MCP e ledger conferidos nos repos em 2026-11-11. Nomes técnicos, iguais nos dois idiomas.
  knowsAbout: ["LLM", "AI agents", "Tool calling", "RAG", "Embeddings", "Evals", "Model Context Protocol (MCP)", "Double-entry ledger", "Payments", "Pix", "Idempotency", "TypeScript", "Python", "React", "React Native", "Cloudflare Workers", "Durable Objects", "AWS", "Postgres", "Supabase"],
} as const;
