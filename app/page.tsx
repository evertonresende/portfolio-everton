import { Navigation } from "./components/nav";
import { ScrollReveal } from "./components/scroll-reveal";

const companies = ["SAT Bank", "Softplan", "FAPAM", "Projeto Independente"];

const beliefs = [
  "IA é ferramenta, não mágica — o valor está no problema certo.",
  "Protótipos com código real validam mais rápido que wireframes.",
  "Produtos excelentes nascem de quem entende design e engenharia em profundidade.",
  "Simplicidade é a sofisticação definitiva."
];

const projects = [
  {
    id: 1,
    title: "Integrando IA em fluxos bancários para reduzir fricção operacional",
    company: "SAT Bank",
    context: "App bancário React Native. Integrei LLMs via OpenAI e Anthropic para automatizar processos internos com servidores MCP.",
    role: "AI Product Designer",
    result: "Feature flags permitiram releases progressivos e validação com usuários reais antes de escalar.",
    year: "2024",
  },
  {
    id: 2,
    title: "SaaS clínico end-to-end para gestão de consultórios",
    company: "Independente",
    context: "Sistema multi-tenant com agenda, financeiro, CRM, estoque e integração WhatsApp — entregue solo.",
    role: "Product Owner & Builder",
    result: "Arquitetura com RLS no PostgreSQL garantiu isolamento total entre clínicas desde o dia 1. (250k+ LOC)",
    year: "2022—24",
  },
  {
    id: 3,
    title: "Validando hipóteses de produto com protótipos funcionais",
    company: "Softplan",
    context: "Na maior legal tech da América Latina (8k+ cols), construí protótipos com código para validar fluxos complexos.",
    role: "Product Designer (Mobile)",
    result: "Feedback acelerado — código real em vez de wireframes permitiu decisões baseadas em evidência concreta.",
    year: "2021—24",
  },
];

const expertise = [
  "Integração de LLMs em Produtos",
  "Discovery e Validação com Usuários",
  "Prototipagem Funcional (Código Real)",
  "Design de Interfaces e Design Systems",
  "Testes A/B e Feature Flags",
  "Handoff Colaborativo e Engenharia"
];

const timeline = [
  { period: "2024 — Presente", role: "AI Product Designer", company: "SAT Bank" },
  { period: "2022 — Presente", role: "Product Owner & Builder", company: "Independente" },
  { period: "2021 — 2024", role: "Product Designer", company: "Softplan" },
  { period: "2018 — 2021", role: "Full-Stack Developer", company: "FAPAM" },
];

function padIndex(n: number): string {
  return String(n).padStart(2, "0");
}

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-28 sm:pt-56 sm:pb-36 px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
              {/* Left Column */}
              <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
                <div className="animate-fade-in-up">
                  <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-light tracking-[-0.04em] leading-[0.88] text-foreground">
                    AI Product
                    <br />
                    Designer.
                  </h1>
                </div>

                <div className="mt-12 sm:mt-16 max-w-xl animate-fade-in-up delay-1">
                  <p className="text-xl sm:text-[22px] font-medium tracking-[-0.01em] text-foreground leading-snug">
                    Desenho produtos que usam IA de forma inteligente.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mt-5">
                    Meu diferencial é o background técnico — prototipar com código
                    real, falar a língua da engenharia e validar hipóteses de produto antes de escalar.
                    Baseado em Pará de Minas, Brasil.
                  </p>
                </div>

                <div className="mt-14 flex items-center gap-10 animate-fade-in-up delay-2">
                  <a href="#work" className="swiss-label link-underline pb-0.5">
                    Explorar Projetos
                  </a>
                  <a href="#contact" className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Contato
                  </a>
                </div>
              </div>

              {/* Right Column: Photo + Labels */}
              <div className="lg:col-span-5 xl:col-span-4 w-full animate-fade-in-up delay-2 relative group/photo">
                <div className="aspect-[3/4] w-full max-w-[400px] mx-auto lg:ml-auto relative overflow-visible">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src="/evertonresende.png"
                      alt="Everton Resende"
                      className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Minimal Labels — No shadow, no rotation, grid-aligned */}
                  <div className="absolute top-6 -left-4 sm:-left-8 z-20 animate-fade-in-up delay-stagger-1">
                    <div className="bg-background border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground whitespace-nowrap">
                      01 — Ferramenta, não mágica
                    </div>
                  </div>

                  <div className="absolute top-1/4 -right-4 sm:-right-10 z-20 animate-fade-in-up delay-stagger-2">
                    <div className="bg-background border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground whitespace-nowrap">
                      02 — Código real {">"} Wireframes
                    </div>
                  </div>

                  <div className="absolute bottom-1/3 -left-4 sm:-left-12 z-20 animate-fade-in-up delay-stagger-3">
                    <div className="bg-background border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground whitespace-nowrap">
                      03 — Design + Engenharia
                    </div>
                  </div>

                  <div className="absolute bottom-10 -right-4 sm:-right-6 z-20 animate-fade-in-up delay-stagger-4">
                    <div className="bg-background border border-border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground whitespace-nowrap">
                      04 — Simplicidade é sofisticação
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Companies */}
            <div className="mt-32 pt-8 border-t border-border animate-fade-in-up delay-3">
              <p className="swiss-label text-muted-foreground mb-8">
                Experiência & Colaborações
              </p>
              <div className="flex flex-wrap items-center gap-x-14 gap-y-4">
                {companies.map((company) => (
                  <span key={company} className="text-base font-medium text-foreground/70 tracking-[-0.01em] hover:text-foreground transition-colors duration-200">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs / Manifesto */}
        <section className="py-32 sm:py-44 px-6 sm:px-8 bg-[#141414] text-[#fafafa]">
          <div className="max-w-[1000px] mx-auto">
            <ScrollReveal>
              <p className="swiss-label text-[#fafafa]/30 mb-20">
                Princípios
              </p>
            </ScrollReveal>

            <div className="flex flex-col">
              {beliefs.map((belief, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <div className={index > 0 ? "pt-12 sm:pt-16" : ""}>
                    {index > 0 && <div className="divider-light mb-12 sm:mb-16" />}
                    <div className="flex gap-6 sm:gap-10 items-baseline">
                      <span className="index-number text-[#fafafa]/25 shrink-0">
                        {padIndex(index + 1)}
                      </span>
                      <p className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light tracking-[-0.02em] text-[#fafafa]/80 leading-tight">
                        {belief}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work / Projects */}
        <section id="work" className="py-32 sm:py-40 px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="mb-20 sm:mb-28 flex items-baseline justify-between border-b border-border pb-6">
                <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.03em]">
                  Trabalho Selecionado
                </h2>
                <span className="swiss-label text-muted-foreground hidden sm:block">
                  2021 — {new Date().getFullYear()}
                </span>
              </div>
            </ScrollReveal>

            <div className="flex flex-col">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id}>
                  <article className="project-row group border-b border-border cursor-pointer">
                    <div className="py-10 sm:py-14 pl-4 grid grid-cols-1 lg:grid-cols-[auto,1fr,2fr,auto] gap-6 lg:gap-12 items-baseline">
                      {/* Index */}
                      <span className="index-number hidden lg:block pt-1">
                        {padIndex(index + 1)}
                      </span>

                      {/* Meta */}
                      <div className="flex flex-col gap-1.5">
                        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground">
                          {project.company}
                        </span>
                        <span className="text-sm text-muted-foreground tabular-nums">
                          {project.year}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-xl sm:text-[22px] font-medium tracking-[-0.01em] leading-snug mb-4 group-hover:translate-x-1 transition-transform duration-200">
                          {project.title}
                        </h3>
                        <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                          {project.context}
                        </p>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium text-foreground">
                            {project.role}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {project.result}
                          </p>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="hidden lg:flex items-start pt-1">
                        <span className="opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About / Expertise */}
        <section id="about" className="py-32 sm:py-40 px-6 sm:px-8 border-t border-border">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.03em] mb-20 sm:mb-28">
                Sobre & Expertise
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 sm:gap-16 md:divide-x md:divide-border">
              <ScrollReveal>
                <div className="md:pr-16">
                  <p className="swiss-label text-muted-foreground mb-10 pb-4 border-b border-border">
                    Áreas de Foco
                  </p>
                  <ul className="flex flex-col gap-4">
                    {expertise.map((item) => (
                      <li key={item} className="flex items-baseline gap-3 text-[15px] font-medium text-foreground tracking-[-0.01em] group/item">
                        <span className="text-muted-foreground text-xs shrink-0">—</span>
                        <span className="group-hover/item:translate-x-1 transition-transform duration-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="md:pl-16">
                  <p className="swiss-label text-muted-foreground mb-10 pb-4 border-b border-border">
                    Trajetória
                  </p>
                  <div className="flex flex-col gap-6">
                    {timeline.map((item, index) => (
                      <div key={item.company} className="flex items-baseline gap-4">
                        <span className="index-number shrink-0">{padIndex(index + 1)}</span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[15px] font-medium text-foreground">
                            {item.role}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{item.company}</span>
                            <span className="text-border">|</span>
                            <span className="tabular-nums text-xs tracking-wide">{item.period}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 sm:py-48 px-6 sm:px-8 bg-[#141414] text-[#fafafa]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] leading-[0.92] mb-8">
              Vamos construir
              <br />
              algo excelente.
            </h2>
            <p className="text-lg text-[#fafafa]/40 max-w-xl mb-20">
              Sempre aberto a discutir novos projetos, produtos IA, ou oportunidades de design.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-16 border-t border-[#fafafa]/10">
              <a
                href="mailto:everton.augustor@gmail.com"
                className="group flex flex-col gap-3"
              >
                <span className="swiss-label text-[#fafafa]/25 group-hover:text-[#fafafa]/60 transition-colors duration-200">Email</span>
                <span className="text-[15px] font-medium text-[#fafafa]/70 group-hover:text-[#fafafa] transition-colors duration-200">everton.augustor@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3"
              >
                <span className="swiss-label text-[#fafafa]/25 group-hover:text-[#fafafa]/60 transition-colors duration-200">LinkedIn</span>
                <span className="text-[15px] font-medium text-[#fafafa]/70 group-hover:text-[#fafafa] transition-colors duration-200">/in/evertonresende</span>
              </a>
              <a
                href="https://github.com/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3"
              >
                <span className="swiss-label text-[#fafafa]/25 group-hover:text-[#fafafa]/60 transition-colors duration-200">GitHub</span>
                <span className="text-[15px] font-medium text-[#fafafa]/70 group-hover:text-[#fafafa] transition-colors duration-200">evertonresende</span>
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-32 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#fafafa]/10">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#fafafa]/20">
              &copy; {new Date().getFullYear()} Everton Resende
            </p>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#fafafa]/20">
              Design & Code by Everton
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
