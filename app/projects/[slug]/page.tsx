import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type StoryBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "closing"; text: string };

interface Project {
  title: string;
  author: string;
  description: string;
  image: string;
  story: StoryBlock[];
}

const PROJECTS: Record<string, Project> = {
  "a-hearts-leap": {
    title: "A Heart's Leap",
    author: "Danielle",
    description: "A short fantasy story about courage, friendship, and finding your brave.",
    image: "/projects/a-hearts-leap.png",
    story: [
      { type: "heading", text: "Who is my roommate?" },
      {
        type: "paragraph",
        text: "The gate creaked open. Wonders spilled into her head alongside the worries. Of course, Quartz sighed as she thought, Will I ever be brave? What if something goes wrong? What if I mess up? What if it fails?",
      },
      {
        type: "paragraph",
        text: '"BOOT!" Crystal pounced on Quartz, completely falling on top of her.',
      },
      {
        type: "paragraph",
        text: 'Quartz cried "Ooh!" Surprised, she stood up and asked, "Why did you have to wake me right now?"',
      },
      {
        type: "paragraph",
        text: '"Because it is funny," Crystal reasoned, giggling.',
      },
      {
        type: "paragraph",
        text: 'Quartz giggled too. "Ugh, fine. We\'ll go meet our new roommate anyway." She answered, opening the door and slipping out.',
      },
      {
        type: "paragraph",
        text: "She met her best friend Herb, who had signed up for passing information scrolls. Herb laid two scrolls across the table. \"This is your scroll, and the other is for Crystal. It has all the information,\" Herb said. She took the scrolls and passed one to Crystal, who started reading.",
      },
      { type: "heading", text: "The Stranger" },
      {
        type: "paragraph",
        text: '"Hear what?" Crystal answered, curiously. Quartz trembled — something wasn\'t right. The door creaked. A shadowy figure appeared. Quartz switched into camouflage mode.',
      },
      {
        type: "paragraph",
        text: '"There you are," said a sly voice. "I wanted to see you." The stranger stepped smoothly forward as dark scales glimmered in the sunlight.',
      },
      {
        type: "paragraph",
        text: '"What? Get away from me!" Crystal cried. Quartz said nothing, staying perfectly still as the black-scaled dragon crept silently toward Crystal.',
      },
      { type: "heading", text: "The Stranger Looked Suspicious" },
      {
        type: "paragraph",
        text: "They arrived at a glowing castle. A sign read: Queen Comer's Castle. Quartz thought that maybe she didn't have to do this herself. Still, she had come. They landed inside and saw velvet wallpaper covered with portraits of the Dragon Queen. Despite being deep inside Comer's guarded castle, Quartz knew there was nobody who had invited her.",
      },
      {
        type: "paragraph",
        text: "Well, Quartz was there — but she was in camouflage mode, so nobody could see her. Did that count?",
      },
      {
        type: "paragraph",
        text: "They reached a room that was mostly dark, lit only by a small fire and the faint glow of a lamp. Queen Comer looked merely pleased, and luckily hadn't noticed the door. Quartz stepped out of camouflage. She crept to Crystal and shook her awake. \"What is this place? Where are we?\" Quartz asked.",
      },
      {
        type: "paragraph",
        text: '"It\'s Comer\'s palace. She captured me. I followed the stranger here," Crystal said.',
      },
      {
        type: "paragraph",
        text: '"Camouflage mode!" Quartz whispered. "Oh..." Crystal\'s eyes lit up. A small flame ignited from her tail.',
      },
      {
        type: "paragraph",
        text: '"You got your electricity back!" Quartz cried happily. They made a plan: Crystal would burn through the locks; Quartz would keep them covered. "Is there someone who can wait outside for us?" Quartz asked.',
      },
      {
        type: "paragraph",
        text: '"Oh, alright." Crystal nodded. She released an electricity bolt. Quartz channeled it, and Crystal grabbed the current with her tail, burning through the door. Cinnamon watched quietly from the corner.',
      },
      {
        type: "paragraph",
        text: "As they burst out into open air — through sweeps of deep greens and blues — they saw Cinnamon waiting at the edge of the trees.",
      },
      {
        type: "paragraph",
        text: '"You kiddo — you didn\'t really have to come here," Cinnamon muttered, gesturing toward a path through the clovers.',
      },
      {
        type: "paragraph",
        text: '"Actually, you were in trouble!" Cinnamon huffed, then grinned. "Trust me, it was worth it!" Quartz laughed.',
      },
      { type: "paragraph", text: '"That was fun," Crystal smiled.' },
      {
        type: "paragraph",
        text: '"It was," Quartz agreed. Crystal looked more determined now, more bold. They turned to the horizon and saw the mountain glimmering in the sunlight. Quartz smiled, thinking of the journey that lay ahead — welcoming them toward a new adventure.',
      },
      {
        type: "paragraph",
        text: "And somehow, this time, she was ready.",
      },
      { type: "closing", text: "Quartz was more ready than ever." },
    ],
  },
};

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS[params.slug];
  if (!project) return {};
  return {
    title: `${project.title} | Danielle Eunsoo Kim`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS[params.slug];
  if (!project) notFound();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#edeae3" }}>
      <Nav />
      <main className="flex-1">
        {/* header */}
        <div className="px-4 pt-10 pb-6 md:px-8 md:pt-14">
          <Link
            href="/#projects"
            className="font-dm text-text-sage hover:text-text-forest transition-colors"
            style={{ fontSize: "12px" }}
          >
            ← Back
          </Link>
          <h1
            className="font-playfair italic text-text-forest mt-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.2 }}
          >
            {project.title}
          </h1>
          <p
            className="font-dm font-light mt-2"
            style={{ fontSize: "13px", color: "#7a8f76" }}
          >
            by {project.author}.
          </p>
        </div>

        {/* spread image */}
        <div className="px-4 pb-10 md:px-8">
          <div
            className="rounded-xl overflow-hidden border border-divider w-full"
            style={{ backgroundColor: "#f5f3ee" }}
          >
            <Image
              src={project.image}
              alt={`${project.title} story spread`}
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* story text */}
        <div className="px-4 pb-16 md:px-8">
          <div className="max-w-2xl">
            {project.story.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="font-dm font-medium text-text-forest uppercase tracking-[0.1em] mt-10 mb-4"
                    style={{ fontSize: "11px" }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "closing") {
                return (
                  <p
                    key={i}
                    className="font-playfair italic text-text-mid mt-8"
                    style={{ fontSize: "15px" }}
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="font-dm font-light text-text-mid mb-4"
                  style={{ fontSize: "14px", lineHeight: 1.85 }}
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
