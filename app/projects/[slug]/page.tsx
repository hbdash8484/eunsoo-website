import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type StoryBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; by?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; caption?: string; portrait?: boolean }
  | { type: "closing"; text: string };

interface Project {
  title: string;
  author: string;
  role?: string;
  meta?: string;
  description: string;
  keyVisual: string;
  middleVisual?: string;
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

  "ali-baba-bongo-bandits": {
    title: "Ali Baba & the Bongo Bandits",
    author: "Danielle",
    role: "Jib & Bongo Bandit Crew",
    meta: "Seoul Foreign School · ~2 months",
    description:
      "A school musical — 80 performers, two months of rehearsal, two sold-out nights.",
    keyVisual: "/projects/alibaba-key.jpg",
    story: [
      { type: "heading", text: "The role" },
      {
        type: "paragraph",
        text: "I played Jib and was part of the Bongo Bandit Crew.",
      },
      {
        type: "paragraph",
        text: "Jib is one of the citizens that live in old Baghdad. They don't like the Vizier, the Sultana's advisor and the main villain in the story, because even though they protest a lot about the bandits stealing their stuff, he does not do anything to help with that problem. And the citizens like making fun of the Vizier.",
      },
      {
        type: "paragraph",
        text: "The Bongo Bandits are the bandits that steal from the citizens who live in Baghdad. They stash their treasure in the secret Cave of Wonders, and their leader is Balthazar Bongo.",
      },
      {
        type: "image",
        src: "/projects/alibaba-backstage.jpg",
        caption: "Backstage, before the show.",
      },

      { type: "heading", text: "The audition" },
      {
        type: "paragraph",
        text: "My goal was to be Princess Satsuma, so I practiced a lot at home. But on the day of auditions, I got really nervous and I gave up on applying for Princess Satsuma because my voice trembled, and I thought, “If I can't do this in front of three teachers, how can I do this in front of a whole crowd?”",
      },
      {
        type: "paragraph",
        text: "So when I saw the cast list and my name on the character of Jib, I was kind of happy because I got a speaking role that only half of the cast could have, but also kind of sad that I did not get the other character I wanted.",
      },

      { type: "heading", text: "Two months of rehearsal" },
      {
        type: "paragraph",
        text: "For our first meeting in the Lyso center, we just sat in our seats and read each person's part in the script for scene 1. And we blocked on the stage — which means figuring out where to stand on the stage, and what routes we will take according to our lines. At first, I was worried that none of the people could memorize their lines or positions on the stage, because we made so many mistakes and sometimes just forgot what we were supposed to do.",
      },
      {
        type: "paragraph",
        text: "We did the scenes one by one, so there were some scenes I couldn't see during the practice, but when I saw the whole show come together, it was so magical! Because I didn't know how the scene I was in would connect to another to complete the story.",
      },
      {
        type: "paragraph",
        text: "After two months of practice, I realized that I didn't need to worry. On our last rehearsal before the show, everybody already memorized their lines, and we did a run through of the whole show without needing any reminders from the director.",
      },
      {
        type: "paragraph",
        text: "I also learned that every role is important. If there were only main characters without ensembles and dancing crews, it would be boring, because there would be no one to sing or dance along with, and no reactions for the bad guy's lines! That would make the show feel very empty and bland.",
      },
      {
        type: "paragraph",
        text: "I agree with Mr. Jason, our choreographer, on the importance of the process, not just the outcome. He once told us:",
      },
      {
        type: "quote",
        text: "When you finish the show, you'll realize what really matters is the process of preparing for the show, not the actual performance days. Because the performance is just 2 days, but you spent 2 months preparing and trying your best to make this happen.",
      },
      {
        type: "image",
        src: "/projects/alibaba-cast.jpg",
        caption: "Eighty performers, one number.",
      },

      { type: "heading", text: "Showtime" },
      {
        type: "paragraph",
        text: "When we had our first show, I was really nervous because there was a very big crowd of people looking at us. I thought that all the practices we had were not very useful. But when we stood on stage, I could remember everything we used to do in rehearsals, and it was much more fun because we had people clapping and laughing for us. It felt like they were cheering us on! So on our next show, instead of feeling nervous, I felt so excited to show the audience what we worked on for so long.",
      },
      {
        type: "image",
        src: "/projects/alibaba-carpet.jpg",
        caption: "“Carpets are so old fashioned!”",
      },
      {
        type: "paragraph",
        text: "My favorite part of the show was when I said “Carpets are so old fashioned!” because that was the one moment I actually stood so close to the audience. I felt like a super star when they laughed at my line.",
      },

      { type: "heading", text: "Speak loud and proud" },
      {
        type: "paragraph",
        text: "Performing on stage is very different from how you would usually speak and move in your daily life. So I think in order to be good on stage you need to:",
      },
      {
        type: "list",
        items: [
          "Acknowledge the audience — instead of just talking to the character beside you, you need to open up to the audience. That way, they can see your expressions and hear you more clearly.",
          "Use bigger gestures and project your voice — if you make small gestures, the audience might not see you doing them, so you need to make bigger gestures. It might be a little uncomfortable at first, but you will get used to it. Also, project your voice: even if you have a mic on, if you speak louder and clearer, the audience can understand your line better even from far away!",
          "Try to be in the shoes of the character. How would the character feel or think right now? If you don't, you might sound emotionless and not focused! So try to think about it (it also helps to practice in the mirror — that way, you can also see your expression).",
          "Stay focused and confident all the time — if you are not focused, you might miss your line (that is embarrassing)! So be focused. Also be confident, because you can do better if you are confident.",
        ],
      },
      { type: "quote", text: "Speak loud and proud!" },
      {
        type: "image",
        src: "/projects/alibaba-solo.jpg",
        caption: "Danielle as Jib.",
        portrait: true,
      },

      { type: "heading", text: "Spontaneous leadership" },
      {
        type: "paragraph",
        text: "I asked our team to practice during recess, and we practiced the scenes we did that day. That way, we would be more prepared and less nervous when showtime arrived.",
      },
      {
        type: "paragraph",
        text: "And on the day of the teaser, everyone was nervous because it was the first time we had a big audience. Even I was. So I told them we would do fine, and we cheered, and that led to us being confident and doing our best that day. Turns out the teaser was so successful that the second day's musical tickets were sold out!",
      },

      { type: "heading", text: "The Great Citizen" },
      {
        type: "paragraph",
        text: "I helped my friend do a costume change, because we were both Bongo Bandit Crew and Citizens, so we had to put our cloak and belt on and off during blackouts. I covered her up so the audience couldn't see her.",
      },
      {
        type: "paragraph",
        text: "I also was a time checker during the show. When we missed our cue, I reminded the crew to come downstage. Thankfully we still nailed it — the audience didn't notice that we were late, because we managed to get it just in time.",
      },

      { type: "heading", text: "The biggest lesson" },
      {
        type: "paragraph",
        text: "I learned that teamwork really mattered, and to not give up on my dreams just because I doubt myself.",
      },
      {
        type: "paragraph",
        text: "Before the musical, I didn't bond too much or even try to talk to boys, but now I realize that we are the same — that we just need a little support from each other. Next time, I won't judge anyone, and I'll be the person that anybody could talk to when things are hard (btw, I want to be a therapist when I grow up).",
      },
      {
        type: "paragraph",
        text: "I also want to be really good at band (flute), and just overall be a good leader, classmate, and friend to everyone.",
      },
      {
        type: "paragraph",
        text: "And I also really regret not applying for Princess Satsuma. At that time, I thought I could not memorize all my lines and I couldn't do everything on stage. And I should have just done it! It's a lesson to me now, and I will never, ever think I am not enough for anything.",
      },
      {
        type: "paragraph",
        text: "So next year in 5th grade, I want to apply to be Historian or President of elementary school.",
      },
      {
        type: "closing",
        text: "Next time, I want to be brave, know what I want, and persevere to get what I want. I will not give up.",
      },
    ],
  },

  soulsparku: {
    title: "SoulSparkU",
    author: "Danielle",
    role: "One-Year Personal Growth Programme",
    meta: "SoulSparkU · monthly for a year · completed May 2026",
    description:
      "A one-year programme empowering young girls — building confidence and leadership through public speaking.",
    keyVisual: "/projects/soulsparku/dreamboard.jpg",
    story: [
      {
        type: "paragraph",
        text: "SoulSparkU is a one-year personal-growth programme focused on empowering young girls. Once a month for a year, Danielle explored her own strengths, what she wanted to improve, and how to grow — sharing her thoughts and presenting in front of others each session to build confidence and leadership.",
      },

      { type: "heading", text: "My strengths" },
      {
        type: "image",
        src: "/projects/soulsparku/star.jpg",
        caption: "The five character strengths I explored.",
      },
      {
        type: "paragraph",
        text: "The 3 strengths I realized I had were confidence, love of learning, and being positive. For being confident, it was when we had our 1st presentation to our Parents. Turns out, I could just talk to the audience with ease if I thought of it as talking to friends! For love of learning, I figured that if I like something, I do it better. So I try to like learning. And lastly, Positivity. When I used to not go to SoulSparkU, I was always worrying about everything, but when I try to be positive, I know everything's gonna be alright!",
      },

      { type: "heading", text: "Learning bravery" },
      {
        type: "paragraph",
        text: "When I started SoulSparkU, I was really lacking Bravery. But through homework, I did some research, and learned one of the most important Quotes of my life:",
      },
      {
        type: "quote",
        text: "Bravery doesn't mean being fearless, but to overcome the fear.",
      },
      {
        type: "paragraph",
        text: "So on my first Show & Tell presentation, I tried. I stayed calm, and went through my presentation smoothly. Even if I was nervous, and it didn't go the way I planned, it was still good. And I knew I would do better next time.",
      },
      {
        type: "image",
        src: "/projects/soulsparku/mindmap.jpg",
        caption: "My notes on bravery, humor, fairness, integrity, and self-control.",
      },

      { type: "heading", text: "Speaking in front of people" },
      {
        type: "image",
        src: "/projects/soulsparku/presenting.jpg",
        caption: "Presenting at Show & Tell.",
        portrait: true,
      },
      {
        type: "paragraph",
        text: "The scariest/hardest thing about speaking in front of people was… Making mistakes. I would always be trying to make everything perfect, so for me, it was a scary thing to make mistakes or mess up. This always happened, and got in the way of succeeding. I had to find a solution! So I know now, the audience is here to hear you, mistakes or not. Now, I do good. It's easier to know that they will always be there to support you.",
      },

      { type: "heading", text: "A problem I had" },
      {
        type: "paragraph",
        text: "The problem I had during the program was time management. I had limited time and couldn't finish my project in it. So I ended up working on my project at home. I learned that if I focus and try my best, I will succeed. So next time I will not keep delaying what I have to do, but instead finishing my work first, then doing something else.",
      },

      { type: "heading", text: "What I believe now" },
      {
        type: "image",
        src: "/projects/soulsparku/strengths.jpg",
        caption: "My strengths board — creativity, challenge, and gratitude.",
      },
      {
        type: "paragraph",
        text: "The one thing I believe about myself now that I didn't before the program was confidence. During the musical process (as a 4th grader), I learned A LOT of things, but I think the most important thing is CONFIDENCE. My thinking about the musical before was just, “what if we can't memorize all our lines!” and, “we might make mistakes” but now, it's, “that was amazing, it went perfect!” and, “such a great experience”. So I know now to be confident — unless you know that something is going to go wrong.",
      },

      { type: "heading", text: "My Dream Board" },
      {
        type: "image",
        src: "/projects/soulsparku/display.jpg",
        caption: "Our projects on display.",
      },
      {
        type: "paragraph",
        text: "My favorite part of the WHOLE program was making the Dream/Vision board. It was fun, and I got to know more about myself. It contained my ultimate goals (graduating, having a good job), Places I want to go (Russia, China, Patagonia) and things I want to practice (crocheting, rollerblading, speaking out). I asked myself real questions and, as a capital N and J (MBTI), I set some goals for my future.",
      },

      {
        type: "image",
        src: "/projects/soulsparku/certificate.jpg",
        caption: "One year, completed — May 2026.",
        portrait: true,
      },
      {
        type: "closing",
        text: "Now I can share my ideas freely, without worrying that my ideas will be wrong.",
      },
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

          <div className="max-w-2xl">
            <Image
              src={project.keyVisual}
              alt={project.title}
              width={800}
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
            {project.role
              ? `${project.author} · ${project.role}`
              : `Written & illustrated by ${project.author}`}
          </p>
          {project.meta && (
            <p
              className="font-sans text-faint mt-1"
              style={{ fontSize: "12px", letterSpacing: "0.04em" }}
            >
              {project.meta}
            </p>
          )}
        </div>

        {/* story / article body */}
        <div className="px-5 md:px-[54px] pb-16">
          <div className="max-w-[38rem]">
            {project.story.map((block, i) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={i}
                      className="font-sans font-semibold text-faint uppercase mt-12 mb-5"
                      style={{ fontSize: "11px", letterSpacing: "0.2em" }}
                    >
                      {block.text}
                    </h2>
                  );
                case "quote":
                  return (
                    <blockquote key={i} className="my-8 pl-5 border-l-2 border-rose">
                      <p
                        className="font-serif italic text-ink"
                        style={{ fontSize: "clamp(18px, 2.4vw, 22px)", lineHeight: 1.5 }}
                      >
                        {block.text}
                      </p>
                      {block.by && (
                        <p
                          className="font-sans text-faint uppercase mt-3"
                          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
                        >
                          {block.by}
                        </p>
                      )}
                    </blockquote>
                  );
                case "list":
                  return (
                    <ol key={i} className="my-6 flex flex-col gap-4 list-none">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="font-serif text-muted flex gap-3"
                          style={{ fontSize: "17px", lineHeight: 1.7 }}
                        >
                          <span
                            className="font-sans font-semibold text-rose flex-none"
                            style={{ fontSize: "14px", lineHeight: "1.85" }}
                          >
                            {j + 1}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  );
                case "image":
                  return (
                    <figure key={i} className={`my-8 ${block.portrait ? "max-w-xs" : ""}`}>
                      <Image
                        src={block.src}
                        alt={block.caption ?? ""}
                        width={block.portrait ? 1066 : 1600}
                        height={block.portrait ? 1600 : 1067}
                        className="w-full h-auto rounded-sm border border-matline shadow-[0_16px_40px_-20px_rgba(0,0,0,0.4)]"
                      />
                      {block.caption && (
                        <figcaption
                          className="font-serif italic text-faint mt-3"
                          style={{ fontSize: "13.5px" }}
                        >
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                case "closing":
                  return (
                    <p
                      key={i}
                      className="font-serif italic text-rose mt-10"
                      style={{ fontSize: "clamp(18px, 2.4vw, 22px)", lineHeight: 1.5 }}
                    >
                      {block.text}
                    </p>
                  );
                default:
                  return (
                    <p
                      key={i}
                      className="font-serif text-muted mb-5"
                      style={{ fontSize: "17px", lineHeight: 1.75 }}
                    >
                      {block.text}
                    </p>
                  );
              }
            })}
          </div>
        </div>

        {/* middle visual — only for projects that have one */}
        {project.middleVisual && (
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
        )}

      </main>
      <Footer />
    </div>
  );
}
