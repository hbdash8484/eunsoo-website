const tags = ["Watercolor", "Crayon", "Colored pencil", "Cats & nature"];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: "#edeae3", padding: "56px 28px 52px" }}
    >
      <p
        className="font-dm text-text-sage uppercase tracking-[0.12em] mb-6"
        style={{ fontSize: "11px" }}
      >
        Probably drawing or reading right now · Seoul
      </p>

      <div className="mb-5">
        <p
          className="font-dm font-normal text-text-forest"
          style={{ fontSize: "48px", lineHeight: 1.2 }}
        >
          Hello, I&apos;m
        </p>
        <p
          className="font-playfair italic text-accent"
          style={{ fontSize: "48px", lineHeight: 1.2 }}
        >
          Danielle.
        </p>
      </div>

      <div
        className="mb-5"
        style={{ width: "40px", height: "1px", backgroundColor: "#9aaa96" }}
      />

      <p
        className="font-dm font-light text-text-mid mb-6"
        style={{
          fontSize: "13px",
          lineHeight: 1.85,
          maxWidth: "480px",
        }}
      >
        I love creating art — from watercolors and crayon to digital
        illustration. My favorite things to draw are cats, flowers, and the
        universe.
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-dm text-text-mid px-3 py-1 rounded-full"
            style={{
              fontSize: "11px",
              border: "0.5px solid #9aaa96",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
