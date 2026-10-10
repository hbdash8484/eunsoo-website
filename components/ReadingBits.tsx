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

export function CoverTile({ title, color, className = "" }: { title: string; color: string; className?: string }) {
  return (
    <div
      className={`relative rounded-sm flex items-end p-2.5 pl-3.5 overflow-hidden shadow-[0_14px_30px_-18px_rgba(0,0,0,0.5)] ${className}`}
      style={{ background: color }}
      aria-hidden
    >
      {/* spine shadow */}
      <span className="absolute inset-y-0 left-0 w-2 bg-black/15" />
      <span className="font-serif text-white leading-tight" style={{ fontSize: "12.5px" }}>
        {title}
      </span>
    </div>
  );
}
