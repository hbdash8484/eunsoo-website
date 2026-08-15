import Link from "next/link";
import Image from "next/image";

const FEATURED = {
  slug: "a-hearts-leap",
  title: "A Heart’s Leap",
  label: "Story · May 2026",
  quote:
    "A short fantasy story about courage, friendship, and finding your brave.",
  blurb: "A fantasy adventure — written and illustrated by Danielle.",
  image: "/projects/key-visual.png",
};

// Other projects (besides the featured one above).
// Add new projects here — each also needs a matching entry in
// app/projects/[slug]/page.tsx so the "Read the story" page exists.
const MORE: { slug: string; title: string; meta: string; image: string }[] = [
  // {
  //   slug: "your-project-slug",
  //   title: "Project Title",
  //   meta: "Story · 2026",
  //   image: "/projects/your-image.png",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 md:px-[54px] py-14 md:py-16 bg-wall">
      {/* section header */}
      <div className="flex items-baseline justify-between mb-8 md:mb-10">
        <span
          className="font-sans font-semibold text-faint uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          Projects
        </span>
        <span className="font-serif italic text-rose-soft" style={{ fontSize: "15px" }}>
          Stories &amp; experiments
        </span>
      </div>

      {/* featured story — magazine-style feature spread */}
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-7 md:gap-12 items-center">
        <Link
          href={`/projects/${FEATURED.slug}`}
          className="group block rounded-sm overflow-hidden border border-matline shadow-[0_20px_44px_-22px_rgba(0,0,0,0.4)]"
        >
          <Image
            src={FEATURED.image}
            alt={FEATURED.title}
            width={800}
            height={560}
            priority
            className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <div>
          <p
            className="font-sans font-semibold text-faint uppercase flex items-center gap-2.5 mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.2em" }}
          >
            <span className="text-rose">✦</span>
            {FEATURED.label}
          </p>
          <h3
            className="font-serif text-ink leading-[1.02] mb-4"
            style={{ fontSize: "clamp(30px, 4.5vw, 48px)", letterSpacing: "-0.02em" }}
          >
            {FEATURED.title}
          </h3>
          <p
            className="font-serif italic text-ink/90 mb-4"
            style={{ fontSize: "clamp(17px, 2.2vw, 20px)", lineHeight: 1.5, maxWidth: "32ch" }}
          >
            &ldquo;{FEATURED.quote}&rdquo;
          </p>
          <p
            className="font-sans text-muted mb-6"
            style={{ fontSize: "15px", lineHeight: 1.75, maxWidth: "38ch" }}
          >
            {FEATURED.blurb}
          </p>
          <Link
            href={`/projects/${FEATURED.slug}`}
            className="group inline-flex items-center gap-2 font-sans font-semibold text-ink uppercase pb-1 border-b-2 border-rose"
            style={{ fontSize: "13px", letterSpacing: "0.04em" }}
          >
            Read the story
            <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* more projects */}
      <div className="mt-12 md:mt-14">
        <p
          className="font-sans font-semibold text-faint uppercase pb-5 border-b border-line mb-6"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          More projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {MORE.map((m) => (
            <Link key={m.title} href={`/projects/${m.slug}`} className="group flex items-center gap-4">
              <Image
                src={m.image}
                alt=""
                width={120}
                height={90}
                className="w-24 h-[72px] object-cover rounded-sm flex-none border border-matline"
              />
              <div>
                <p className="font-serif text-ink group-hover:text-rose transition-colors" style={{ fontSize: "18px" }}>
                  {m.title}
                </p>
                <p className="font-sans text-faint" style={{ fontSize: "12px", letterSpacing: "0.03em" }}>
                  {m.meta}
                </p>
              </div>
            </Link>
          ))}

          {/* in-progress — quiet placeholder, not a dashed box */}
          <div className="flex items-center gap-4 opacity-70">
            <div
              className="w-24 h-[72px] rounded-sm flex-none flex items-center justify-center text-faint"
              style={{
                background:
                  "repeating-linear-gradient(135deg, #f0eae0 0 9px, #e8e1d6 9px 18px)",
              }}
              aria-hidden
            >
              ✎
            </div>
            <div>
              <p className="font-serif text-faint" style={{ fontSize: "18px" }}>
                Next story
              </p>
              <p className="font-sans text-faint" style={{ fontSize: "12px", letterSpacing: "0.03em" }}>
                In progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
