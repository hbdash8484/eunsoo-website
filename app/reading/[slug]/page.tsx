import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CoverTile, LevelMark, RatingDots } from "@/components/ReadingBits";
import { BOOKS, formatFinished, getBook, getBuddies, getQuestion } from "@/lib/reading";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = getBook(params.slug);
  if (!book) return {};
  return {
    title: `${book.title} — Reading & Reflections | Danielle Eunsoo Kim`,
    description: book.oneLine,
  };
}

const label = "font-sans font-semibold uppercase";
const labelStyle = { fontSize: "11px", letterSpacing: "0.2em" } as const;

export default function ReadingPage({ params }: Props) {
  const book = getBook(params.slug);
  if (!book) notFound();

  const index = BOOKS.findIndex((b) => b.slug === book.slug);
  const newer = BOOKS[index - 1];
  const older = BOOKS[index + 1];
  const buddies = getBuddies(book);

  return (
    <div className="min-h-screen flex flex-col bg-wall">
      <Nav />
      <main className="flex-1 px-5 md:px-[54px] pt-12 pb-16 md:pt-16">
        <Link
          href="/#reading"
          className="font-sans text-faint hover:text-ink transition-colors uppercase inline-flex items-center min-h-[44px]"
          style={{ fontSize: "11px", letterSpacing: "0.16em" }}
        >
          ← Back
        </Link>

        <div className="max-w-2xl">
          {/* card header */}
          <p className={`${label} text-rose-soft mt-6 mb-5`} style={labelStyle}>
            <span className="text-rose">✦</span> Reading card
          </p>
          <div className="flex gap-6 items-start">
            <CoverTile title={book.title} color={book.cover} className="w-[92px] h-[132px] flex-none" />
            <div>
              <h1
                className="font-serif text-ink leading-[1.05]"
                style={{ fontSize: "clamp(30px, 5vw, 46px)", letterSpacing: "-0.02em" }}
              >
                {book.title}
              </h1>
              <p className="font-sans text-muted mt-2" style={{ fontSize: "15px" }}>
                by {book.author}
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-y border-line py-4 mt-8">
            {[
              ["Genre", book.genre],
              ["Finished", formatFinished(book.finished)],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className={`${label} text-faint mb-1`} style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
                  {k}
                </dt>
                <dd className="font-sans text-ink" style={{ fontSize: "14px" }}>
                  {v}
                </dd>
              </div>
            ))}
            <div>
              <dt className={`${label} text-faint mb-1.5`} style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
                Rating
              </dt>
              <dd>
                <RatingDots rating={book.rating} size={11} />
              </dd>
            </div>
          </dl>

          {/* the whole book in one line */}
          <figure className="my-10 md:my-12 pl-5 border-l-2 border-rose">
            <figcaption className="font-serif italic text-faint mb-2" style={{ fontSize: "14px" }}>
              The whole book in one line…
            </figcaption>
            <blockquote
              className="font-serif italic text-ink"
              style={{ fontSize: "clamp(20px, 2.8vw, 25px)", lineHeight: 1.45 }}
            >
              {book.oneLine}
            </blockquote>
          </figure>

          {/* reflections */}
          <div className="space-y-10">
            {book.answers.map((a) => {
              const q = getQuestion(a.q);
              return (
                <section key={a.q}>
                  <p className={`${label} text-faint mb-2.5`} style={{ fontSize: "10.5px", letterSpacing: "0.18em" }}>
                    {q.group}
                  </p>
                  <h2 className="flex items-center gap-2.5 font-serif text-ink mb-2" style={{ fontSize: "22px" }}>
                    <span className="font-sans text-faint" style={{ fontSize: "13px" }}>
                      Q{q.n}
                    </span>
                    {q.title}
                    <LevelMark stretch={q.stretch} />
                  </h2>
                  <p className="font-sans italic text-faint mb-4" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                    {q.prompt}
                  </p>
                  <p className="font-serif text-ink/90" style={{ fontSize: "18px", lineHeight: 1.75 }}>
                    {a.text}
                  </p>
                </section>
              );
            })}
          </div>

          {buddies.length > 0 && (
            <p className="font-serif italic text-muted mt-12" style={{ fontSize: "16px" }}>
              <span className="text-rose not-italic">↔</span> Book buddy:{" "}
              {buddies.map((b, i) => (
                <span key={b.slug}>
                  {i > 0 && ", "}
                  <Link href={`/reading/${b.slug}`} className="text-ink border-b border-rose hover:text-rose">
                    {b.title}
                  </Link>
                </span>
              ))}
            </p>
          )}

          {/* newer / older */}
          <nav className="flex justify-between gap-6 border-t border-line pt-6 mt-14">
            {older ? (
              <Link href={`/reading/${older.slug}`} className="group">
                <span className={`${label} text-faint block mb-1`} style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
                  ← Earlier
                </span>
                <span className="font-serif text-ink group-hover:text-rose" style={{ fontSize: "17px" }}>
                  {older.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {newer && (
              <Link href={`/reading/${newer.slug}`} className="group text-right">
                <span className={`${label} text-faint block mb-1`} style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
                  Later →
                </span>
                <span className="font-serif text-ink group-hover:text-rose" style={{ fontSize: "17px" }}>
                  {newer.title}
                </span>
              </Link>
            )}
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
