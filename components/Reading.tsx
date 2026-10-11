import { CardGrid, HomeSection } from "@/components/layout";
import { BookCard } from "@/components/cards";
import { BOOKS, getReadingStats } from "@/lib/reading";

export default function Reading() {
  return (
    <HomeSection
      id="reading"
      label="Reading & Reflections"
      sub="What I read, what I thought"
      count={getReadingStats()}
      href="/reading"
    >
      <CardGrid>
        {BOOKS.slice(0, 3).map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </CardGrid>
    </HomeSection>
  );
}
