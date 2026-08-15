export default function Hero() {
  return (
    <section
      id="hero"
      className="px-5 md:px-[54px] pt-14 pb-12 md:pt-20 md:pb-16 bg-wall"
    >
      <p
        className="font-sans font-semibold text-rose-soft uppercase mb-4 md:mb-5"
        style={{ fontSize: "11px", letterSpacing: "0.22em" }}
      >
        Probably drawing right now · Seoul
      </p>

      <h1 className="font-serif text-ink leading-[0.95]" style={{ letterSpacing: "-0.02em" }}>
        <span
          className="block font-sans font-normal text-muted mb-2 md:mb-3"
          style={{ fontSize: "clamp(16px, 3vw, 22px)", letterSpacing: "0.02em" }}
        >
          Hello, I&apos;m
        </span>
        <span
          className="block italic text-rose"
          style={{ fontSize: "clamp(46px, 9vw, 92px)" }}
        >
          Danielle.
        </span>
      </h1>

      <div className="w-[60px] h-0.5 bg-ink my-6 md:my-7" />

      <p
        className="font-sans text-muted"
        style={{ fontSize: "16px", lineHeight: 1.75, maxWidth: "40ch" }}
      >
        I love drawing and writing — and I believe everybody deserves kindness.
      </p>
    </section>
  );
}
