import { Navigation } from "@/components/nav"
import { CaseStudy } from "@/components/case-study"
import { getProjectBySlug } from "@/data/projects"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { PasswordGate } from "@/components/password-gate"

export default function SoftplanPage() {
  const project = getProjectBySlug("softplan")!

  return (
    <PageTransition>
      <Navigation backLink />
      <main>
        <PasswordGate
          teaser={
            <div>
              <p className="swiss-label text-xs tracking-widest text-[#767676] uppercase mb-6">
                {project.company} — {project.role}
              </p>
              <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#141414] mb-6">
                {project.title}
              </h1>
              <p className="text-base text-[#767676] leading-relaxed max-w-xl">
                {project.context[0]}
              </p>
            </div>
          }
        >
          <CaseStudy project={project} />
        </PasswordGate>
      </main>
      <Footer />
    </PageTransition>
  )
}
