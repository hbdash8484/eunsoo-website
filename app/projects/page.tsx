import type { Metadata } from "next";
import { CardGrid, Container, PageHeader, PageShell } from "@/components/layout";
import { ProjectCard } from "@/components/cards";
import { PROJECTS } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Danielle Eunsoo Kim",
  description: "Stories, performances and programs Danielle has made or been part of.",
};

export default function ProjectsIndex() {
  return (
    <PageShell>
      <Container>
        <PageHeader back="/#projects" eyebrow="Stories & experiments" title="Projects" meta={`${PROJECTS.length} projects`} />
        <CardGrid>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </CardGrid>
      </Container>
    </PageShell>
  );
}
