const interests = [
  "Cats",
  "Squirrels",
  "Dragons",
  "Pink & Purple",
  "Rollerblades",
  "Camping",
  "Watercolor",
  "Books",
  "Family",
  "Friends",
];

export default function AboutMe() {
  return (
    <section id="about" className="px-5 md:px-[54px] py-14 md:py-16 bg-wall">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* bio — set as an editorial pull-statement */}
        <div>
          <p
            className="font-serif text-ink"
            style={{ fontSize: "clamp(20px, 2.6vw, 26px)", lineHeight: 1.5 }}
          >
            A Seoul Foreign School student who loves art, books, animals, and the
            outdoors.
          </p>
          <p
            className="font-sans font-semibold text-rose-soft uppercase mt-4"
            style={{ fontSize: "12px", letterSpacing: "0.16em" }}
          >
            Aspiring animal behaviourist
          </p>
        </div>

        {/* interests — quiet inline list, gallery style */}
        <div>
          <p
            className="font-sans font-semibold text-faint uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.2em" }}
          >
            Interests
          </p>
          <p
            className="font-sans text-muted"
            style={{ fontSize: "15px", lineHeight: 2, maxWidth: "40ch" }}
          >
            {interests.map((interest, i) => (
              <span key={interest}>
                <span className="whitespace-nowrap">{interest}</span>
                {i < interests.length - 1 && (
                  <span style={{ color: "#d3ccc0" }}> · </span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
