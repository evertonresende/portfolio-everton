import { Navigation } from "./components/nav";
import { ScrollReveal, LetterReveal } from "./components/scroll-reveal";

const companies = ["SAT Bank", "Softplan", "FAPAM"];

const beliefs = [
  "IA é ferramenta, não mágica — o valor está no problema certo",
  "Protótipos com código real validam mais que wireframes",
  "Produtos bons nascem de quem entende design e engenharia",
];

const projects = [
  {
    id: 1,
    title: "Integrando IA em fluxos bancários para reduzir fricção operacional",
    company: "SAT Bank",
    context: "App bancário React Native publicado na App Store e Google Play. Integrei LLMs via OpenAI e Anthropic para automatizar processos internos com servidores MCP.",
    role: "AI Product Designer",
    result: "Feature flags com Statsig permitiram releases progressivos e validação com usuários reais antes de escalar.",
    year: "2024",
    gradient: "linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)",
  },
  {
    id: 2,
    title: "SaaS clínico end-to-end para gestão de consultórios",
    company: "Projeto independente",
    context: "Sistema multi-tenant com agenda, financeiro, CRM, estoque e integração WhatsApp — entregue solo com 250k+ linhas de código e 91 PRs.",
    role: "Product Owner & Builder",
    result: "Arquitetura com Row Level Security no PostgreSQL garantiu isolamento total entre clínicas desde o dia 1.",
    year: "2022–presente",
    gradient: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
  },
  {
    id: 3,
    title: "Validando hipóteses de produto com protótipos funcionais no setor jurídico",
    company: "Softplan",
    context: "Na maior legal tech da América Latina (8k+ colaboradores), construí protótipos com código real para validar fluxos com stakeholders e usuários finais.",
    role: "Product Designer (Mobile)",
    result: "Ciclo de feedback acelerado — código real em vez de wireframes permitiu decisões mais rápidas com evidência concreta.",
    year: "2021–2024",
    gradient: "linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 100%)",
  },
];

const pillars = [
  {
    title: "Estratégia de IA",
    description: "Identifico onde IA cria valor real no produto",
    skills: ["LLMs", "OpenAI", "Anthropic", "Gemini", "MCP", "Agentes autônomos"],
  },
  {
    title: "Product Design",
    description: "Do discovery ao produto shipado",
    skills: ["Product Thinking", "A/B Testing", "Feature Flags", "Prototipagem funcional", "Figma"],
  },
  {
    title: "Fluência Técnica",
    description: "Falo a língua da engenharia — e implemento se preciso",
    skills: ["React Native", "TypeScript", "Next.js", "Edge Computing"],
  },
];

const timeline = [
  { period: "2024–presente", role: "AI Product Designer", company: "SAT Bank" },
  { period: "2022–presente", role: "Product Owner & Builder", company: "Independente" },
  { period: "2021–2024", role: "Product Designer (Mobile)", company: "Softplan" },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 px-6 sm:px-8 overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 animate-fade-in-up">
              Oi, eu sou o Everton
              <span className="inline-block ml-2 animate-[wave_1.5s_ease-in-out_infinite]">
                👋
              </span>
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[-0.04em] leading-[1] text-foreground animate-fade-in-up delay-1">
              AI Product Designer
            </h1>
            <div className="mt-6 sm:mt-8 max-w-xl animate-fade-in-up delay-2">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Desenho produtos que usam IA de forma inteligente.
                Meu diferencial é o background técnico — prototipar com código
                real, falar a língua da engenharia e validar antes de escalar.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 animate-fade-in-up delay-3">
              <a
                href="#work"
                className="text-sm font-medium text-foreground link-underline"
              >
                Ver projetos
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Entrar em contato
              </a>
            </div>

            {/* Company logos */}
            <div className="mt-14 sm:mt-16 pt-8 border-t border-border/40 animate-fade-in-up delay-4">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">
                Empresas onde atuei
              </p>
              <div className="flex items-center gap-8 sm:gap-12">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="text-sm sm:text-base font-medium text-muted-foreground/40 tracking-tight"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 border-y border-border/40">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {beliefs.map((belief, index) => (
                <ScrollReveal key={index} delay={index * 0.12}>
                  <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-center text-foreground/70 max-w-2xl leading-snug">
                    &ldquo;{belief}&rdquo;
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-20 sm:py-28 px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="mb-12 sm:mb-16">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                  Projetos
                </h2>
              </div>
            </ScrollReveal>
            <div className="space-y-8 sm:space-y-12">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.08}>
                  <article className="project-card group rounded-xl overflow-hidden border border-border/40 bg-card cursor-pointer">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-0">
                      {/* Imagem placeholder */}
                      <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                        <div
                          className="absolute inset-0 project-image-wrapper"
                          style={{ background: project.gradient }}
                        />
                        <span className="card-number absolute bottom-4 right-5 text-8xl sm:text-9xl font-medium text-black leading-none select-none z-10">
                          {String(project.id).padStart(2, "0")}
                        </span>
                      </div>
                      {/* Conteúdo */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground/50">
                              {project.company}
                            </span>
                            <span className="text-muted-foreground/30">·</span>
                            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground/50">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="font-display font-medium text-lg sm:text-xl text-card-foreground leading-snug mb-4">
                            {project.title}
                          </h3>
                          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
                            {project.context}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-border/30 space-y-2">
                          <p className="text-[12px] font-medium tracking-[0.05em] uppercase text-muted-foreground/50">
                            Meu papel: {project.role}
                          </p>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">
                            {project.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-28 px-6 sm:px-8 bg-card border-y border-border/40">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-12 sm:mb-16">
                Sobre
              </h2>
            </ScrollReveal>

            {/* Pillars */}
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
              {pillars.map((pillar, index) => (
                <ScrollReveal key={pillar.title} delay={index * 0.1}>
                  <div>
                    <h3 className="font-display font-medium text-base text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground/60 mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary rounded-full text-[12px] font-medium text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Timeline */}
            <ScrollReveal>
              <div>
                <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground mb-6">
                  Trajetória
                </h3>
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div
                      key={item.company}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0"
                    >
                      <span className="text-[13px] text-muted-foreground/60 sm:w-36 shrink-0">
                        {item.period}
                      </span>
                      <span className="text-[14px] text-foreground font-medium">
                        {item.role}
                        <span className="text-muted-foreground font-normal">
                          {" "}— {item.company}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-serif italic text-2xl sm:text-3xl text-foreground/70 max-w-lg leading-snug mb-3">
              Vamos conversar sobre design, IA, ou qualquer ideia maluca que
              você queira tirar do papel?
            </p>
            <p className="text-muted-foreground/50 text-sm mb-10">
              Sempre aberto a novos projetos e parcerias.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <a
                href="mailto:everton.augustor@gmail.com"
                className="text-sm font-medium text-accent link-underline"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent link-underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent link-underline"
              >
                GitHub
              </a>
            </div>
          </ScrollReveal>

          <div className="pt-8 border-t border-border/40">
            <p className="text-[13px] text-muted-foreground">
              © {new Date().getFullYear()} Everton Resende
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
