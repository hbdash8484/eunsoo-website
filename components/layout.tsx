// Shared layout system — every page and home section is built from these, so the
// site keeps one rhythm:
//
//   Container     one max width (1120px), centered, same side gutters everywhere
//   HomeSection   label + italic sub → up to 3 cards → "N things · See all →"
//   Card          matted visual → serif title → faint "Category · Date" meta
//   PageShell     Nav + main + Footer
//   PageHeader    ← Back · eyebrow · title · meta (top of every inner page)
//
// Two page types:
//   Gallery pages (lists, art folders) use the full Container width.
//   Article pages (a project, a book) put everything in a centered ArticleColumn.

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const LABEL_STYLE = { fontSize: "11px", letterSpacing: "0.2em" } as const;
export const LABEL = "font-sans font-semibold uppercase";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 md:px-10 ${className}`}>{children}</div>;
}

export function ArticleColumn({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[680px]">{children}</div>;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-wall">
      <Nav />
      <main className="flex-1 pt-10 pb-16 md:pt-14 md:pb-20">{children}</main>
      <Footer />
    </div>
  );
}

export function SectionHeader({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 mb-8 md:mb-10">
      <h2 className={`${LABEL} text-faint`} style={LABEL_STYLE}>
        {label}
      </h2>
      {sub && (
        <span className="font-serif italic text-rose-soft text-right" style={{ fontSize: "15px" }}>
          {sub}
        </span>
      )}
    </div>
  );
}

export function HomeSection({
  id,
  label,
  sub,
  count,
  href,
  children,
}: {
  id: string;
  label: string;
  sub?: string;
  count?: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 md:py-16 border-t border-line scroll-mt-16">
      <Container>
        <SectionHeader label={label} sub={sub} />
        {children}
        {(count || href) && (
          <div className="flex items-center justify-between mt-8">
            <span className="font-sans text-faint" style={{ fontSize: "12px", letterSpacing: "0.04em" }}>
              {count}
            </span>
            {href && (
              <Link
                href={href}
                className="group inline-flex items-center gap-2 font-sans font-semibold text-ink uppercase pb-1 border-b-2 border-rose min-h-[44px]"
                style={{ fontSize: "12px", letterSpacing: "0.06em" }}
              >
                See all
                <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

// 1 / 2 / 3 columns. `dense` packs smaller cards (6 across) for shelf-style list pages.
export function CardGrid({ children, dense = false }: { children: React.ReactNode; dense?: boolean }) {
  return (
    <div
      className={
        dense
          ? "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7"
      }
    >
      {children}
    </div>
  );
}

// The frame every card visual sits in — art, project images and book covers alike.
// `bleed` drops the mat padding so a photo fills the frame edge to edge.
export function Mat({
  children,
  aspect = "aspect-[4/5]",
  bleed = false,
  className = "",
}: {
  children: React.ReactNode;
  aspect?: string;
  bleed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} bg-mat border border-matline rounded-sm ${
        bleed ? "overflow-hidden" : "p-3 md:p-4"
      } flex items-center justify-center transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function Card({
  href,
  title,
  meta,
  visual,
  small = false,
  aspect,
  bleed = false,
}: {
  href: string;
  title: string;
  meta?: string;
  visual: React.ReactNode;
  small?: boolean;
  aspect?: string;
  bleed?: boolean;
}) {
  return (
    <Link href={href} className="group block">
      <Mat aspect={aspect} bleed={bleed} className="group-hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.35)]">
        {visual}
      </Mat>
      <div className="flex items-start justify-between gap-3 mt-3.5">
        <div className="min-w-0">
          <p
            className="font-serif text-ink group-hover:text-rose transition-colors leading-snug"
            style={{ fontSize: small ? "15px" : "17px" }}
          >
            {title}
          </p>
          {meta && (
            <p className="font-sans text-faint mt-0.5" style={{ fontSize: "12px", letterSpacing: "0.03em" }}>
              {meta}
            </p>
          )}
        </div>
        {!small && (
          <span
            className="text-faint group-hover:text-rose group-hover:translate-x-1 transition-all flex-none"
            aria-hidden
          >
            →
          </span>
        )}
      </div>
    </Link>
  );
}

export function PageHeader({
  back,
  eyebrow,
  title,
  meta,
}: {
  back: string;
  eyebrow?: string;
  title: string;
  meta?: React.ReactNode;
}) {
  return (
    <header className="mb-8 md:mb-10">
      <Link
        href={back}
        className="font-sans text-faint hover:text-ink transition-colors uppercase inline-flex items-center min-h-[44px]"
        style={{ fontSize: "11px", letterSpacing: "0.16em" }}
      >
        ← Back
      </Link>
      {eyebrow && (
        <p className={`${LABEL} text-rose-soft mt-5 mb-3`} style={LABEL_STYLE}>
          <span className="text-rose">✦</span> {eyebrow}
        </p>
      )}
      <h1
        className={`font-serif text-ink leading-[1.05] ${eyebrow ? "" : "mt-4"}`}
        style={{ fontSize: "clamp(30px, 5vw, 46px)", letterSpacing: "-0.02em" }}
      >
        {title}
      </h1>
      {meta && (
        <div
          className="font-sans text-faint mt-3 pb-5 border-b border-line"
          style={{ fontSize: "13px", letterSpacing: "0.03em" }}
        >
          {meta}
        </div>
      )}
    </header>
  );
}
