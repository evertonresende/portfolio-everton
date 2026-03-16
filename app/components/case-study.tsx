import type { Project } from "@/data/projects";
import { getNextProject } from "@/data/projects";
import { ScrollReveal } from "./scroll-reveal";
import { ImagePlaceholder } from "./image-placeholder";
import { CountUp } from "./count-up";

function padIndex(n: number): string {
  return String(n).padStart(2, "0");
}

interface CaseStudyProps {
  project: Project;
}

export function CaseStudy({ project }: CaseStudyProps) {
  const nextProject = getNextProject(project.slug);

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 sm:pt-44 sm:pb-28 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="animate-fade-in-up">
            <a
              href="/"
              className="swiss-label text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2 mb-16"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Voltar
            </a>
          </div>

          <div className="animate-fade-in-up delay-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="swiss-label text-foreground">{project.company}</span>
              <span className="text-border">|</span>
              <span className="swiss-label text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] leading-[0.92] max-w-[900px]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Meta Grid */}
      <section className="px-6 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-border">
              <div className="py-8 sm:py-10 sm:border-r border-border sm:pr-10">
                <p className="swiss-label text-muted-foreground mb-3">Função</p>
                <p className="text-[15px] font-medium text-foreground">{project.role}</p>
              </div>
              <div className="py-8 sm:py-10 sm:border-r border-border sm:px-10 border-t sm:border-t-0">
                <p className="swiss-label text-muted-foreground mb-3">Período</p>
                <p className="text-[15px] font-medium text-foreground">{project.timeline}</p>
              </div>
              <div className="py-8 sm:py-10 sm:pl-10 border-t sm:border-t-0">
                <p className="swiss-label text-muted-foreground mb-3">Responsabilidades</p>
                <ul className="flex flex-col gap-1.5">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="text-[15px] text-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Context + Challenges */}
      <section className="px-6 sm:px-8 pb-28 sm:pb-36">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <ScrollReveal>
              <div>
                <p className="swiss-label text-muted-foreground mb-10 pb-4 border-b border-border">
                  Contexto
                </p>
                <div className="flex flex-col gap-6">
                  {project.context.map((paragraph, i) => (
                    <p key={i} className="text-[15px] text-foreground/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="swiss-label text-muted-foreground mb-10 pb-4 border-b border-border">
                  Desafios
                </p>
                <ul className="flex flex-col gap-4">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="index-number shrink-0">{padIndex(i + 1)}</span>
                      <span className="text-[15px] text-foreground/80">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Goals */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-[#141414] text-[#fafafa]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-[#fafafa]/30 mb-20">
              Objetivos
            </p>
          </ScrollReveal>

          <div className="flex flex-col">
            {project.goals.map((goal, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={i > 0 ? "pt-12 sm:pt-16" : ""}>
                  {i > 0 && <div className="divider-light mb-12 sm:mb-16" />}
                  <div className="flex gap-6 sm:gap-10 items-baseline">
                    <span className="index-number text-[#fafafa]/25 shrink-0">
                      {padIndex(i + 1)}
                    </span>
                    <p className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light tracking-[-0.02em] text-[#fafafa]/80 leading-tight">
                      {goal}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact Metrics */}
      <section className="py-28 sm:py-36 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-muted-foreground mb-16 pb-4 border-b border-border">
              Impacto
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
            {project.metrics.map((metric, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-8 sm:p-12 border-b border-r border-border">
                  <CountUp
                    value={metric.value}
                    className="block text-[clamp(3rem,6vw,5rem)] font-light tracking-[-0.03em] text-foreground leading-none mb-4"
                  />
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {metric.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Sections */}
      <section className="pb-28 sm:pb-36 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-muted-foreground mb-20 pb-4 border-b border-border">
              Processo
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-24 sm:gap-32">
            {project.process.map((section, i) => (
              <ScrollReveal key={i}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                  <div className="flex flex-col justify-center">
                    <span className="index-number mb-4">{padIndex(i + 1)}</span>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-[-0.02em] leading-snug mb-6">
                      {section.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <ImagePlaceholder
                    aspect={section.imageAspect}
                    label={`Imagem ${padIndex(i + 1)}`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Retrospective */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 border-t border-border">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-muted-foreground mb-12">
              Retrospectiva
            </p>
            <p className="text-xl sm:text-2xl font-light tracking-[-0.01em] text-foreground/80 leading-relaxed">
              {project.retrospective}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Next Project */}
      <a
        href={`/projects/${nextProject.slug}`}
        className="group block py-20 sm:py-28 px-6 sm:px-8 bg-[#141414] text-[#fafafa] hover:bg-[#fafafa] hover:text-[#141414] transition-colors duration-300 border-t border-[#fafafa]/10"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="swiss-label opacity-30 mb-4">Próximo Projeto</p>
            <h3 className="text-3xl sm:text-4xl font-light tracking-[-0.03em] leading-snug">
              {nextProject.title}
            </h3>
            <p className="swiss-label opacity-50 mt-4">{nextProject.company}</p>
          </div>
          <span className="opacity-50 group-hover:translate-x-2 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </a>
    </>
  );
}
