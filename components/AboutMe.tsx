const interests = [
  "Cats",
  "Squirrels",
  "Pink & purple",
  "Cycling",
  "Camping",
  "Watercolor",
  "Digital art",
];

export default function AboutMe() {
  return (
    <section id="about" className="px-4 py-10 md:px-8 md:py-14">
      <h2
        className="font-dm font-medium text-text-forest uppercase tracking-[0.1em] mb-8"
        style={{ fontSize: "11px" }}
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div>
          <p
            className="font-dm font-light text-text-mid mb-3"
            style={{ fontSize: "14px", lineHeight: 1.8 }}
          >
            Seoul Foreign School student who loves art, books, animals, and the
            outdoors.
          </p>
          <p
            className="font-dm font-light text-text-sage"
            style={{ fontSize: "13px" }}
          >
            Aspiring animal behaviourist
          </p>
        </div>

        <div>
          <p
            className="font-dm text-text-sage uppercase tracking-[0.1em] mb-4"
            style={{ fontSize: "10px" }}
          >
            Interests
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="font-dm text-text-mid px-3 py-1 rounded-full min-h-[36px] flex items-center"
                style={{ fontSize: "12px", border: "0.5px solid #9aaa96" }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
