import Image from "next/image";

// Small pieces shared by the home Reading section and the /reading pages.

export function RatingDots({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-1.5" role="img" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = rating >= i ? 1 : rating >= i - 0.5 ? 0.5 : 0;
        return (
          <span
            key={i}
            className="rounded-full border border-rose"
            style={{
              width: size,
              height: size,
              background:
                fill === 1
                  ? "#c65f45"
                  : fill === 0.5
                    ? "linear-gradient(90deg, #c65f45 50%, transparent 50%)"
                    : "transparent",
            }}
          />
        );
      })}
    </span>
  );
}

// ● start here  /  ◐ a good stretch — same marks as the printed question sheet
export function LevelMark({ stretch }: { stretch: boolean }) {
  return (
    <span
      className="inline-block rounded-full border border-ink/70 flex-none"
      title={stretch ? "A good stretch" : "Start here"}
      style={{
        width: 9,
        height: 9,
        background: stretch
          ? "linear-gradient(90deg, transparent 50%, #211d1a 50%)"
          : "#5f7a6a",
        borderColor: stretch ? undefined : "#5f7a6a",
      }}
    />
  );
}

// Typographic book cover. `small` is for the dense shelf on /reading.
export function CoverTile({
  title,
  color,
  small = false,
  className = "",
}: {
  title: string;
  color: string;
  small?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-sm flex items-end overflow-hidden shadow-[0_14px_30px_-18px_rgba(0,0,0,0.5)] ${
        small ? "p-2 pl-3" : "p-4 pl-5"
      } ${className}`}
      style={{ background: color }}
      aria-hidden
    >
      {/* spine shadow */}
      <span className={`absolute inset-y-0 left-0 bg-black/15 ${small ? "w-1.5" : "w-2.5"}`} />
      <span className="font-serif text-white leading-tight" style={{ fontSize: small ? "11px" : "clamp(15px, 1.6vw, 18px)" }}>
        {title}
      </span>
    </div>
  );
}

// The real cover when we have one, otherwise the typographic tile.
// `className` sizes the box; the image keeps its own proportions inside it.
export function BookCover({
  book,
  small = false,
  className = "",
  sizes = "300px",
  priority = false,
}: {
  book: { title: string; cover: string; coverImage?: string };
  small?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!book.coverImage) {
    return <CoverTile title={book.title} color={book.cover} small={small} className={className} />;
  }
  return (
    <div className={`relative ${className}`}>
      <Image
        src={book.coverImage}
        alt={`Cover of ${book.title}`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
      />
    </div>
  );
}
