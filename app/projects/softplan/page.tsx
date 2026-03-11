import { Navigation } from "@/components/nav";
import { CaseStudy } from "@/components/case-study";
import { getProjectBySlug } from "@/data/projects";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export default function SoftplanPage() {
  const project = getProjectBySlug("softplan")!;
  return (
    <PageTransition>
      <Navigation backLink />
      <main>
        <CaseStudy project={project} />
      </main>
      <Footer />
    </PageTransition>
  );
}
