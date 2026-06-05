import Link from "next/link";
import Image from "next/image";

const LIVE_PROJECTS = [
  {
    slug: "a-hearts-leap",
    title: "A Heart's Leap",
    description: "A short fantasy story about courage, friendship, and finding your brave.",
    image: "/projects/key-visual.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-10 md:px-8 md:py-14">
      <div className="flex items-center gap-4 mb-8">
        <h2
          className="font-dm font-medium text-text-forest uppercase tracking-[0.1em]"
          style={{ fontSize: "11px" }}
        >
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {LIVE_PROJECTS.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group rounded-lg overflow-hidden border border-divider transition-shadow hover:shadow-md"
            style={{ backgroundColor: "#f5f3ee" }}
          >
            <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="px-4 py-4">
              <div className="flex items-center justify-between">
                <p className="font-dm font-medium text-text-forest text-sm">
                  {project.title}
                </p>
                <span
                  className="font-dm text-text-sage transition-transform duration-200 group-hover:translate-x-1 inline-block"
                  style={{ fontSize: "14px" }}
                >
                  →
                </span>
              </div>
              <p
                className="font-dm font-light text-text-mid mt-1"
                style={{ fontSize: "12px" }}
              >
                {project.description}
              </p>
            </div>
          </Link>
        ))}

        <div
          className="rounded-lg overflow-hidden border border-divider"
          style={{ opacity: 0.5, backgroundColor: "#f5f3ee" }}
        >
          <div className="p-4">
            <div
              className="w-full flex items-center justify-center rounded"
              style={{ aspectRatio: "4/3", border: "1.5px dashed #9aaa96" }}
              aria-hidden
            >
              <span className="font-dm text-text-sage" style={{ fontSize: "12px" }}>
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
      </div>
    </section>
  );
}
