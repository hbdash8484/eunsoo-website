const tags = ["Drawing", "Writing", "Animals", "Kindness"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-4 pt-10 pb-10 md:px-8 md:pt-14 md:pb-14"
      style={{ backgroundColor: "#edeae3" }}
    >
      <p
        className="font-dm text-text-sage uppercase tracking-[0.12em] mb-6"
        style={{ fontSize: "11px" }}
      >
        Probably drawing or reading right now · Seoul
      </p>

      <h1 className="mb-5">
        <span className="block font-dm font-normal text-text-forest text-3xl md:text-5xl leading-tight">
          Hello, I&apos;m
        </span>
        <span className="block font-playfair italic text-accent text-3xl md:text-5xl leading-tight">
          Danielle.
        </span>
      </h1>

      <div
        className="mb-5"
        style={{ width: "40px", height: "1px", backgroundColor: "#9aaa96" }}
      />

      <p
        className="font-dm font-light text-text-mid mb-6"
        style={{ fontSize: "13px", lineHeight: 1.85, maxWidth: "480px" }}
      >
        I have a lot of hobbies, but my favorite things to do are drawing and
        writing. And I believe that everybody deserves kindness.
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-dm text-text-mid px-3 py-1 rounded-full min-h-[36px] flex items-center"
            style={{ fontSize: "11px", border: "0.5px solid #9aaa96" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
