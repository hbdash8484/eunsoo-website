import type { Metadata } from "next";
import { CardGrid, Container, LABEL, LABEL_STYLE, PageHeader, PageShell } from "@/components/layout";
import { BookCard } from "@/components/cards";
import { BOOKS, getBooksByYear, getBuddies, getReadingStats } from "@/lib/reading";

export const metadata: Metadata = {
  title: "Reading & Reflections | Danielle Eunsoo Kim",
  description: "Every book Danielle has read, with her reading-card reflections.",
};

export default function ReadingIndex() {
  const buddyPairs = BOOKS.flatMap((b) => getBuddies(b).map((other) => [b, other] as const));

  return (
    <PageShell>
      <Container>
        <PageHeader
          back="/#reading"
          eyebrow="What I read, what I thought"
          title="Reading & Reflections"
          meta={getReadingStats()}
        />
        {buddyPairs.map(([a, b]) => (
          <p key={`${a.slug}-${b.slug}`} className="font-serif italic text-muted -mt-2 mb-8" style={{ fontSize: "15px" }}>
            <span className="text-rose not-italic">↔</span> <span className="text-ink">{a.title}</span> and{" "}
            <span className="text-ink">{b.title}</span> are book buddies{a.buddyNote ? ` — ${a.buddyNote}` : ""}.
          </p>
        ))}
        <div className="space-y-10">
          {getBooksByYear().map(([year, books]) => (
            <section key={year}>
              <h2 className={`${LABEL} text-faint mb-4`} style={LABEL_STYLE}>
                {year}
              </h2>
              <CardGrid dense>
                {books.map((book) => (
                  <BookCard key={book.slug} book={book} small />
                ))}
              </CardGrid>
            </section>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
