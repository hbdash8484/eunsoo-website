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
  keyVisual: string;
  middleVisual: string;
  story: StoryBlock[];
}

const PROJECTS: Record<string, Project> = {
  "a-hearts-leap": {
    title: "A Heart's Leap",
    author: "Danielle",
    description: "A short fantasy story about courage, friendship, and finding your brave.",
    keyVisual: "/projects/key-visual.png",
    middleVisual: "/projects/middle-visual.png",
    story: [
      { type: "heading", text: "Who is my roommate?" },
      {
        type: "paragraph",
        text: "The gate creaked open and wonders spilled in her head with the worries, of course. Quartz sighed as she thought, Will I ever be brave? She was peculiar at least, that's what they told her. Her heart thumped in her chest and her nervousness slowly crept up her body. What if I do something wrong? What if I mess up? What if… What if…",
      },
      {
        type: "paragraph",
        text: "And of course, this had to be the time Crystal scared her again!",
      },
      {
        type: "paragraph",
        text: '"BOO!" Crystal pounced on Quartz, completely falling on top of her.',
      },
      {
        type: "paragraph",
        text: '"AHH!" Quartz cried. Surprised, she stood up, brushed the dust off her scales and asked, "Why did you have to scare me right now!"',
      },
      {
        type: "paragraph",
        text: '"Because it\'s so funny — I mean, you should\'ve looked at your face," Crystal giggled.',
      },
      {
        type: "paragraph",
        text: '"Ugh, fine. We\'ll be late receiving our roommates anyway," Quartz answered, opening the door and slipping in.',
      },
      {
        type: "paragraph",
        text: 'She met her best friend Herb, who had signed up for passing information scrolls. Herb slid two scrolls across the table. "This is your scroll, and the other one is Crystal\'s. It has all the information," Herb said. She took the scrolls and passed one to Crystal, who started reading.',
      },
      {
        type: "paragraph",
        text: '"Our dorm is number 365," Crystal informed, walking toward the second tunnel on the left. Quartz started following, her heart beating — she wondered who her roommate was.',
      },
      {
        type: "paragraph",
        text: "As she walked toward her dorm, she heard two voices.",
      },
      {
        type: "paragraph",
        text: '"So my roommate is Crystal — is this possible?" a voice said, sharply.',
      },
      {
        type: "paragraph",
        text: '"Mine is Quartz, so it is possible," a sweet voice confirmed.',
      },
      {
        type: "paragraph",
        text: "Quartz recognized the second voice immediately.",
      },
      {
        type: "paragraph",
        text: '"Cinnamon!" she cried, jumping into his arms as they pulled into a hug.',
      },
      {
        type: "paragraph",
        text: '"How did you get accepted?" Cinnamon asked.',
      },
      {
        type: "paragraph",
        text: '"That sounds like what I would ask you!" Quartz answered, giggling.',
      },
      {
        type: "paragraph",
        text: '"Anyways, let\'s go on a tour of the school — reunions can wait," Thunder proclaimed. They walked through the bustling halls of Crystal Academy. Crystal spotted a music room, so of course, Quartz followed her in.',
      },
      {
        type: "paragraph",
        text: 'As they tested and looked at the instruments, she heard a slithering voice: "I know you\'re in there." Quartz shivered, shaken by the sudden unusual feeling.',
      },
      {
        type: "paragraph",
        text: '"Did you hear that?" she asked in a hushed voice.',
      },
      {
        type: "paragraph",
        text: '"Hear what?" Crystal answered, clueless.',
      },
      {
        type: "paragraph",
        text: 'Quartz trembled. Were her ears not working right? The door creaked. A shadowy figure approached. Quartz went into camouflage mode.',
      },
      {
        type: "paragraph",
        text: '"There you are," cried a sly voice. "I wanted to see you since—" the stranger said smugly as the dragon\'s black scales glimmered in the sunlight.',
      },
      {
        type: "paragraph",
        text: "Terror gripped her chest. What if Crystal gets hurt? she thought sadly.",
      },
      {
        type: "paragraph",
        text: "Quietly, she tiptoed to the corner as the black-scaled dragon crept closer and closer to Crystal. She wondered why Crystal wasn't doing anything. Crystal looked scared — petrified — but still. The dragon inserted some kind of drug into Crystal's tail, and Crystal slumped to the ground, completely powerless.",
      },
      {
        type: "paragraph",
        text: "Quartz wanted to help Crystal, but her talons were plastered to the ground. She was terrified.",
      },
      {
        type: "paragraph",
        text: "Quartz followed the stranger outside, walking right behind Crystal's blank body. After a few hours of flying, walking, and resting, the stranger looked suspicious.",
      },
      { type: "heading", text: "The stranger looked suspicious." },
      {
        type: "paragraph",
        text: "They arrived at a gloomy-looking castle. In front of it was a sign that read: Queen Comet's Palace. So she thought that maybe the black dragon might be Queen Comet herself.",
      },
      {
        type: "paragraph",
        text: "She shuddered as they landed inside the castle and saw the velvet wallpaper, complete with portraits of the Queen. Despite living in a castle herself, it felt strange walking through the queenly corridors of Queen Comet's castle. She noticed there was no one except Queen Comet and Crystal's shadowy silhouette.",
      },
      {
        type: "paragraph",
        text: "Well, Quartz was also there — but she was in camouflage mode, so nobody could see her. So did that count?",
      },
      {
        type: "paragraph",
        text: "They reached a room which was empty, except for a bed and a small bedside table. Queen Comet walked out the door looking merely pleased, but luckily, she forgot to lock it.",
      },
      {
        type: "paragraph",
        text: 'Quartz returned to her normal pink self and advanced to shake Crystal awake. "What is this place? Where are we?" Crystal asked.',
      },
      {
        type: "paragraph",
        text: '"It\'s Comet\'s palace. She captured you. I followed you here in my camouflage mode," Quartz answered.',
      },
      {
        type: "paragraph",
        text: '"Oh…" Crystal sighed — then ignited a small flame.',
      },
      {
        type: "paragraph",
        text: '"You got your electricity back!" Quartz cried happily.',
      },
      {
        type: "paragraph",
        text: '"They made a decent plan and tiptoed behind Comet to the throne room. "I sent a message to Cinnamon so he can wait for us outside," Quartz whispered.',
      },
      {
        type: "paragraph",
        text: '"Oh, all right," Crystal answered.',
      },
      {
        type: "paragraph",
        text: "Quartz walked closer, then — STAB! She drove her tail sap into Comet's leg. Comet was now paralyzed. Comet howled in pain and started slashing the air with her claws. Crystal darted to her side and used her electricity to burn her into ashes. Comet was probably thinking she had been foolish.",
      },
      {
        type: "paragraph",
        text: 'As they soared to a lush forest of deep greens and blues, they saw Cinnamon waiting for them. "You know, you didn\'t really have to come here," Quartz said while descending into a patch of clovers.',
      },
      {
        type: "paragraph",
        text: '"Yes, I did — you were in trouble!" Cinnamon huffed.',
      },
      {
        type: "paragraph",
        text: '"Trust me, it was fine," Crystal reassured him.',
      },
      {
        type: "paragraph",
        text: '"Yeah, we were fine," Quartz repeated.',
      },
      {
        type: "paragraph",
        text: "Quartz felt different. She felt more determined, more bold. They took flight, and could see the mountain glimmering in the sunlight — the mountain that had started the journey — welcoming them to a new adventure.",
      },
      {
        type: "paragraph",
        text: "And somehow, this time, she was ready.",
      },
      { type: "closing", text: "Quartz was ready, more ready than ever." },
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
    <div className="min-h-screen flex flex-col bg-wall">
      <Nav />
      <main className="flex-1">

        {/* back + key visual + title */}
        <div className="px-5 md:px-[54px] pt-12 pb-8 md:pt-16">
          <Link
            href="/#projects"
            className="font-sans text-faint hover:text-ink transition-colors uppercase inline-flex items-center min-h-[44px]"
            style={{ fontSize: "11px", letterSpacing: "0.16em" }}
          >
            ← Back
          </Link>

          <p
            className="font-sans font-semibold text-rose-soft uppercase mt-6 mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.2em" }}
          >
            <span className="text-rose">✦</span> {project.description}
          </p>

          <div className="max-w-md">
            <Image
              src={project.keyVisual}
              alt={project.title}
              width={600}
              height={600}
              className="w-full h-auto rounded-sm border border-matline shadow-[0_20px_44px_-22px_rgba(0,0,0,0.4)]"
              priority
            />
          </div>

          <h1
            className="font-serif italic text-rose mt-8"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h1>
          <p
            className="font-sans text-faint uppercase mt-3"
            style={{ fontSize: "12px", letterSpacing: "0.14em" }}
          >
            Written &amp; illustrated by {project.author}
          </p>
        </div>

        {/* story text */}
        <div className="px-5 md:px-[54px] pb-12">
          <div className="max-w-[38rem]">
            {project.story.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="font-sans font-semibold text-faint uppercase mt-12 mb-5"
                    style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "closing") {
                return (
                  <p
                    key={i}
                    className="font-serif italic text-rose mt-10"
                    style={{ fontSize: "clamp(18px, 2.4vw, 22px)", lineHeight: 1.5 }}
                  >
                    {block.text}
                  </p>
                );
              }
              return (
                <p
                  key={i}
                  className="font-serif text-muted mb-5"
                  style={{ fontSize: "17px", lineHeight: 1.75 }}
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* middle visual */}
        <div className="px-5 md:px-[54px] pb-16">
          <div className="max-w-md">
            <Image
              src={project.middleVisual}
              alt="illustration"
              width={600}
              height={600}
              className="w-full h-auto rounded-sm border border-matline shadow-[0_20px_44px_-22px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
