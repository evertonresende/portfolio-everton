import { Navigation } from "@/components/nav";
import { CaseStudy } from "@/components/case-study";
import { getProjectBySlug } from "@/data/projects";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export default function FapamPage() {
  const project = getProjectBySlug("fapam")!;
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
