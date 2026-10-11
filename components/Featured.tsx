import Link from "next/link";
import Image from "next/image";
import { Container, SectionHeader, LABEL, LABEL_STYLE } from "@/components/layout";
import { FEATURED, getProject } from "@/lib/projects";

// The one place on the home page where something is shown big.
// Pick what goes here with FEATURED in lib/projects.ts.
export default function Featured() {
  const project = getProject(FEATURED.slug);
  if (!project) return null;
  const href = `/projects/${project.slug}`;

  return (
    <section id="featured" className="py-14 md:py-16 border-t border-line scroll-mt-16">
      <Container>
        <SectionHeader label="Featured" sub="One thing, up close" />
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-7 md:gap-12 items-center">
          <Link
            href={href}
            className="group block rounded-sm overflow-hidden border border-matline shadow-[0_20px_44px_-22px_rgba(0,0,0,0.4)]"
          >
            <Image
              src={project.cover}
              alt={project.title}
              width={800}
              height={560}
              priority
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </Link>

          <div>
            <p className={`${LABEL} text-faint flex items-center gap-2.5 mb-4`} style={LABEL_STYLE}>
              <span className="text-rose">✦</span>
              {project.label}
            </p>
            <h3
              className="font-serif text-ink leading-[1.02] mb-4"
              style={{ fontSize: "clamp(30px, 4.5vw, 48px)", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h3>
            <p
              className="font-serif italic text-ink/90 mb-4"
              style={{ fontSize: "clamp(17px, 2.2vw, 20px)", lineHeight: 1.5, maxWidth: "32ch" }}
            >
              &ldquo;{FEATURED.quote}&rdquo;
            </p>
            <p className="font-sans text-muted mb-6" style={{ fontSize: "15px", lineHeight: 1.75, maxWidth: "38ch" }}>
              {FEATURED.blurb}
            </p>
            <Link
              href={href}
              className="group inline-flex items-center gap-2 font-sans font-semibold text-ink uppercase pb-1 border-b-2 border-rose"
              style={{ fontSize: "13px", letterSpacing: "0.04em" }}
            >
              Read the story
              <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
