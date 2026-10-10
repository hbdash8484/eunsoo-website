import Link from "next/link";
import { BOOKS, formatFinished, getBuddies, getFavoriteQuestion, getQuestion } from "@/lib/reading";
import { CoverTile, LevelMark, RatingDots } from "@/components/ReadingBits";

export default function Reading() {
  const reflections = BOOKS.reduce((sum, b) => sum + b.answers.length, 0);
  const favorite = getFavoriteQuestion();
  const buddyPairs = BOOKS.flatMap((b) => getBuddies(b).map((other) => [b, other] as const));

  return (
    <section id="reading" className="px-5 md:px-[54px] py-14 md:py-16 bg-wall">
      {/* section header */}
      <div className="flex items-baseline justify-between mb-8 md:mb-10">
        <span
          className="font-sans font-semibold text-faint uppercase"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          Reading &amp; Reflections
        </span>
        <span className="font-serif italic text-rose-soft" style={{ fontSize: "15px" }}>
          What I read, what I thought
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {BOOKS.map((book) => (
          <Link
            key={book.slug}
            href={`/reading/${book.slug}`}
            className="group flex flex-col bg-mat border border-matline rounded-sm p-5 md:p-7 transition-shadow hover:shadow-[0_20px_44px_-26px_rgba(0,0,0,0.35)]"
          >
            <div className="flex gap-5">
              <CoverTile title={book.title} color={book.cover} className="w-[80px] h-[112px] flex-none" />
              <div className="min-w-0">
                <p
                  className="font-sans font-semibold text-faint uppercase mb-2"
                  style={{ fontSize: "10.5px", letterSpacing: "0.18em" }}
                >
                  {book.genre} · Finished {formatFinished(book.finished)}
                </p>
                <h3
                  className="font-serif text-ink group-hover:text-rose transition-colors leading-tight"
                  style={{ fontSize: "clamp(22px, 2.6vw, 28px)", letterSpacing: "-0.01em" }}
                >
                  {book.title}
                </h3>
                <p className="font-sans text-muted mt-1 mb-3" style={{ fontSize: "14px" }}>
                  by {book.author}
                </p>
                <RatingDots rating={book.rating} />
              </div>
            </div>

            <p
              className="font-serif italic text-ink/90 mt-6 mb-5 flex-1"
              style={{ fontSize: "17px", lineHeight: 1.55 }}
            >
              &ldquo;{book.oneLine}&rdquo;
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {book.answers.map((a) => {
                const q = getQuestion(a.q);
                return (
                  <span
                    key={a.q}
                    className="inline-flex items-center gap-1.5 font-sans text-muted bg-wall border border-matline rounded-full px-2.5 py-1"
                    style={{ fontSize: "12px" }}
                  >
                    <LevelMark stretch={q.stretch} />
                    {q.title}
                  </span>
                );
              })}
            </div>

            <span
              className="inline-flex items-center gap-2 font-sans font-semibold text-ink uppercase self-start pb-1 border-b-2 border-rose"
              style={{ fontSize: "12px", letterSpacing: "0.04em" }}
            >
              Read my reflections
              <span className="text-rose group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        ))}
      </div>

      {/* book buddies — books Danielle connected to each other */}
      {buddyPairs.map(([a, b]) => (
        <p
          key={`${a.slug}-${b.slug}`}
          className="font-serif italic text-muted mt-6 text-center"
          style={{ fontSize: "15px" }}
        >
          <span className="text-rose not-italic">↔</span> <span className="text-ink">{a.title}</span> and{" "}
          <span className="text-ink">{b.title}</span> are book buddies{a.buddyNote ? ` — ${a.buddyNote}` : ""}.
        </p>
      ))}

      <p
        className="font-sans text-faint text-center mt-4"
        style={{ fontSize: "12px", letterSpacing: "0.04em" }}
      >
        {BOOKS.length} books · {reflections} reflections
        {favorite && (
          <>
            {" "}· favorite question: <span className="text-muted">{favorite.title}</span>
          </>
        )}
      </p>
    </section>
  );
}
