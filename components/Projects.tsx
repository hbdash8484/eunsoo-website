export default function Projects() {
  const placeholders = [1, 2];

  return (
    <section id="projects" className="px-4 py-10 md:px-8 md:py-14">
      <div className="flex items-center gap-4 mb-8">
        <p
          className="font-dm font-medium text-text-forest uppercase tracking-[0.1em]"
          style={{ fontSize: "11px" }}
        >
          Projects
        </p>
        <span className="font-dm text-text-sage" style={{ fontSize: "11px" }}>
          · Coming soon
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {placeholders.map((i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden border border-divider"
            style={{ opacity: 0.5, backgroundColor: "#f5f3ee" }}
          >
            <div className="p-4">
              <div
                className="w-full flex items-center justify-center rounded"
                style={{
                  aspectRatio: "4/3",
                  border: "1.5px dashed #9aaa96",
                }}
              >
                <span
                  className="font-dm text-text-sage"
                  style={{ fontSize: "12px" }}
                >
                  Hero image
                </span>
              </div>
            </div>
            <div className="px-4 pb-4">
              <p className="font-dm font-medium text-text-forest text-sm mb-1">
                Project Title
              </p>
              <p
                className="font-dm font-light text-text-mid mb-3"
                style={{ fontSize: "12px" }}
              >
                Short description will go here.
              </p>
              <span
                className="font-dm text-text-sage px-2 py-1 rounded-full inline-block"
                style={{ fontSize: "10px", border: "0.5px solid #9aaa96" }}
              >
                Coming soon
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
