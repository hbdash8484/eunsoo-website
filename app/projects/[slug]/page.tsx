import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleColumn, Container, PageHeader, PageShell } from "@/components/layout";
import { PROJECTS, getProject } from "@/lib/projects";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Danielle Eunsoo Kim`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <PageShell>
      <Container>
        <ArticleColumn>
          <PageHeader
            back="/projects"
            eyebrow={project.label}
            title={project.title}
            meta={
              <>
                {project.role
                  ? `${project.author} · ${project.role}`
                  : `Written & illustrated by ${project.author}`}
                {project.meta && <span className="block mt-1">{project.meta}</span>}
              </>
            }
          />

          <p
            className="font-serif italic text-ink/90 mb-8"
            style={{ fontSize: "clamp(18px, 2.4vw, 21px)", lineHeight: 1.5 }}
          >
            {project.description}
          </p>

          <Image
            src={project.keyVisual}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-auto rounded-sm border border-matline shadow-[0_20px_44px_-22px_rgba(0,0,0,0.4)] mb-12"
            priority
          />

          {/* story / article body */}
          <div>
            {project.story.map((block, i) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={i}
                      className="font-sans font-semibold text-faint uppercase mt-12 mb-5"
                      style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                    >
                      {block.text}
                    </h2>
                  );
                case "quote":
                  return (
                    <blockquote key={i} className="my-8 pl-5 border-l-2 border-rose">
                      <p
                        className="font-serif italic text-ink"
                        style={{ fontSize: "clamp(18px, 2.4vw, 22px)", lineHeight: 1.5 }}
                      >
                        {block.text}
                      </p>
                      {block.by && (
                        <p
                          className="font-sans text-faint uppercase mt-3"
                          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
                        >
                          {block.by}
                        </p>
                      )}
                    </blockquote>
                  );
                case "list":
                  return (
                    <ol key={i} className="my-6 flex flex-col gap-4 list-none">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="font-serif text-muted flex gap-3"
                          style={{ fontSize: "17px", lineHeight: 1.7 }}
                        >
                          <span
                            className="font-sans font-semibold text-rose flex-none"
                            style={{ fontSize: "14px", lineHeight: "1.85" }}
                          >
                            {j + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  );
                case "image":
                  return (
                    <figure key={i} className={`my-8 ${block.portrait ? "max-w-xs mx-auto" : ""}`}>
                      <Image
                        src={block.src}
                        alt={block.caption ?? ""}
                        width={block.portrait ? 1066 : 1600}
                        height={block.portrait ? 1600 : 1067}
                        className="w-full h-auto rounded-sm border border-matline shadow-[0_16px_40px_-20px_rgba(0,0,0,0.4)]"
                      />
                      {block.caption && (
                        <figcaption
                          className="font-serif italic text-faint mt-3"
                          style={{ fontSize: "13.5px" }}
                        >
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                case "closing":
                  return (
                    <p
                      key={i}
                      className="font-serif italic text-rose mt-10"
                      style={{ fontSize: "clamp(18px, 2.4vw, 22px)", lineHeight: 1.5 }}
                    >
                      {block.text}
                    </p>
                  );
                default:
                  return (
                    <p
                      key={i}
                      className="font-serif text-muted mb-5"
                      style={{ fontSize: "17px", lineHeight: 1.75 }}
                    >
                      {block.text}
                    </p>
                  );
              }
            })}
          </div>

          {/* middle visual — only for projects that have one */}
          {project.middleVisual && (
            <div className="max-w-md mx-auto mt-12">
              <Image
                src={project.middleVisual}
                alt="illustration"
                width={600}
                height={600}
                className="w-full h-auto rounded-sm border border-matline shadow-[0_20px_44px_-22px_rgba(0,0,0,0.4)]"
              />
            </div>
          )}
        </ArticleColumn>
      </Container>
    </PageShell>
  );
}
