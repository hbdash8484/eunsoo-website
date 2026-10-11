import { CardGrid, HomeSection } from "@/components/layout";
import { ProjectCard } from "@/components/cards";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <HomeSection
      id="projects"
      label="Projects"
      sub="Stories & experiments"
      count={`${PROJECTS.length} projects`}
      href="/projects"
    >
      <CardGrid>
        {PROJECTS.slice(0, 3).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </CardGrid>
    </HomeSection>
  );
}
