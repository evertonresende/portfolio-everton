import { Navigation } from "./components/nav";
import { ScrollReveal } from "./components/scroll-reveal";
import { Footer } from "./components/footer";
import { projects } from "./data/projects";

const expertise = [
  "Design AI-first e Integração de LLMs",
  "Discovery e Pesquisa com Usuários",
  "Prototipação com IA (Claude Code, Cursor)",
  "Design Systems e Tokens Escaláveis",
  "A/B Testing e Feature Flags",
  "Product Analytics e Monitoramento UX"
];

const timeline = [
  { period: "2025 até hoje", role: "AI Product Designer", company: "SAT Bank" },
  { period: "2024", role: "AI Product Designer", company: "Dental Smart" },
  { period: "2018 a 2021", role: "UI/UX Designer", company: "FAPAM" },
];

const companies = ["SAT Bank", "Dental Smart", "FAPAM"];

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
                    Meu diferencial é o background técnico. Gosto de prototipar com código
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

              {/* Right Column: Photo */}
              <div className="lg:col-span-5 xl:col-span-4 w-full animate-fade-in-up delay-2">
                <div className="aspect-[2/3] w-full max-w-[400px] mx-auto lg:ml-auto relative overflow-hidden">
                  <img
                    src="/evertonresende.png"
                    alt="Everton Resende"
                    className="absolute inset-0 w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Companies */}
            <div className="mt-32 pt-8 border-t border-border animate-fade-in-up delay-3">
              <p className="swiss-label text-muted-foreground mb-8">
                Experiência e Colaborações
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

        {/* Work / Projects */}
        <section id="work" className="py-32 sm:py-40 px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="mb-20 sm:mb-28 flex items-baseline justify-between border-b border-border pb-6">
                <h2 className="text-4xl sm:text-5xl font-light tracking-[-0.03em]">
                  Trabalho Selecionado
                </h2>
                <span className="swiss-label text-muted-foreground hidden sm:block">
                  2018 a {new Date().getFullYear()}
                </span>
              </div>
            </ScrollReveal>

            <div className="flex flex-col">
              {projects.map((project, index) => (
                <ScrollReveal key={project.slug}>
                  <a href={`/projects/${project.slug}`} className="block">
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
                            {project.context[0]}
                          </p>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-foreground">
                              {project.role}
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
                  </a>
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
                        <span className="text-muted-foreground text-xs shrink-0">•</span>
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

      <Footer />
    </>
  );
}
