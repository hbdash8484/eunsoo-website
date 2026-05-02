import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Add project entries here when ready
const PROJECTS: Record<string, { title: string; description: string }> = {};

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS[params.slug];
  if (!project) notFound();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#edeae3" }}>
      <Nav />
      <main className="flex-1 px-7 py-12">
        <Link
          href="/#projects"
          className="font-dm text-text-sage hover:text-text-forest transition-colors text-sm"
        >
          ← Back
        </Link>
        <h1 className="font-dm font-medium text-text-forest text-2xl mt-6 mb-3">
          {project.title}
        </h1>
        <p className="font-dm font-light text-text-mid" style={{ fontSize: "14px", lineHeight: 1.8 }}>
          {project.description}
        </p>
      </main>
      <Footer />
    </div>
  );
}
