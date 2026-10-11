// Reading & Reflections — Danielle's reading cards.
//
// To add a book: add one entry to BOOKS (newest first). Each answer points at a
// question number from QUESTIONS (the printed question sheet), in the order
// Danielle wrote them on her card. Answers are typed from the handwritten card,
// with only spelling and capitalization fixed.
//
// Full how-to (transcription rules, cover colors, checks): .claude/skills/reading-card/SKILL.md
// Master copy of the question sheet: .claude/skills/reading-card/questions.md

export type QuestionGroup = "Look closely" | "Think it through" | "Make it yours";

export interface Question {
  n: number;
  title: string;
  prompt: string;
  group: QuestionGroup;
  stretch: boolean; // ◐ "a good stretch" vs ● "start here"
}

export const QUESTIONS: Question[] = [
  { n: 1, group: "Look closely", stretch: false, title: "The whoa moment", prompt: "Which part made you stop and go “whoa” — a scene, a line, or an idea? What was it about that part that grabbed you?" },
  { n: 2, group: "Look closely", stretch: true, title: "Word detective", prompt: "Pick ONE sentence you loved. Why do you think the author wrote it that way — the words, the sound, the picture it makes in your head?" },
  { n: 3, group: "Look closely", stretch: true, title: "Start & finish", prompt: "Why do you think the book starts where it starts and ends where it ends? What would change if it began or stopped somewhere else?" },
  { n: 4, group: "Look closely", stretch: true, title: "The missing voice", prompt: "Whose side of the story do we not get to hear? How might the book feel different if that person got to tell it?" },
  { n: 5, group: "Think it through", stretch: false, title: "In their shoes", prompt: "Why did the character do what they did? What were they thinking or feeling that made it make sense to them — even if you’d have done it differently?" },
  { n: 6, group: "Think it through", stretch: false, title: "The other side", prompt: "Which character did you disagree with the most? Can you explain why they thought they were right?" },
  { n: 7, group: "Think it through", stretch: true, title: "Real life", prompt: "What problem in the book reminds you of something real in the world today? Is it exactly the same, or does the book make you see it in a new way?" },
  { n: 8, group: "Think it through", stretch: true, title: "The hidden rule", prompt: "Every world has rules nobody says out loud. What’s one hidden rule in this book’s world, and who does it help or hurt?" },
  { n: 9, group: "Think it through", stretch: true, title: "The big idea", prompt: "If the whole book had one secret message, what would it be in a few words? Then — what does that message leave out?" },
  { n: 10, group: "Make it yours", stretch: false, title: "Changed my mind", prompt: "Did the book make you think differently about something? What did you believe before, and what do you think now?" },
  { n: 11, group: "Make it yours", stretch: false, title: "Still wondering", prompt: "What’s one big question the book never answered for you? Do you think the author left it open on purpose?" },
  { n: 12, group: "Make it yours", stretch: false, title: "Project spark", prompt: "Could an idea from this book show up in one of your own drawings, games, or projects? What would you borrow — and how would you make it yours?" },
  { n: 13, group: "Make it yours", stretch: false, title: "Book buddies", prompt: "What other book, movie, or show does this remind you of? Do they agree with each other, or would they argue?" },
];

export function getQuestion(n: number): Question {
  const q = QUESTIONS.find((q) => q.n === n);
  if (!q) throw new Error(`Unknown reading question ${n}`);
  return q;
}

export interface Book {
  slug: string;
  title: string;
  author: string;
  genre: string;
  finished: string; // YYYY-MM-DD, or just YYYY when the card only has a year
  rating: number; // out of 5, halves allowed
  oneLine: string; // "The whole book in one line…"
  cover: string; // accent color for the typographic cover tile (fallback when there's no image)
  coverImage?: string; // real cover, saved in public/books/<slug>.jpg
  buddyNote?: string; // short line shown on the home page when this book's Q13 names another book
  answers: { q: number; text: string }[];
}

export const BOOKS: Book[] = [
  {
    slug: "the-power-of-harmony",
    title: "The Power of Harmony",
    author: "Jan L. Coates",
    genre: "Novel",
    finished: "2026-09-28",
    rating: 4,
    oneLine:
      "Melody is new at Jenn’s school, and is the new bully victim. Then an unexpected friendship happens.",
    cover: "#5f7a6a",
    coverImage: "/books/the-power-of-harmony.jpg",
    buddyNote: "both set in the 1960s, both with go-go boots",
    answers: [
      {
        q: 5,
        text: "Jimmy stole stuff from people and gave them presents to make up. It was because he ran away from his bad school and was hiding from the police. If he didn’t steal, he would have died, but I still think he should have found another way to survive.",
      },
      {
        q: 13,
        text: "Like Lucky Broken Girl, this book is set in the 1960s. Both books got the song “These Boots Are Made for Walkin’” by Nancy Sinatra. Both Sarah, Danielle and Ruthie is seen wearing go-go boots.",
      },
      {
        q: 7,
        text: "In the book, Sarah and her friends bully Melody because she is Indian. This connects to racism. In the real world, people are still mean to Black people and it is unfair. The book also shows us what a lot of people think about the Syliboy family. For example, Sarah, Nanny, and Jenn.",
      },
    ],
  },
  {
    slug: "lucky-broken-girl",
    title: "Lucky Broken Girl",
    author: "Ruth Behar",
    genre: "Novel",
    finished: "2026-09-22",
    rating: 4.5,
    oneLine:
      "Ruthie is still new to New York and was adjusting, then she got in a car accident. Will she be brave enough to move on?",
    cover: "#c65f45",
    coverImage: "/books/lucky-broken-girl.jpg",
    answers: [
      {
        q: 4,
        text: "We never hear from Danielle. If they told it, we’d find out how her parents got divorced and what she did while waiting for Ruthie to get better, and how school changed while Ruthie was gone.",
      },
      {
        q: 7,
        text: "I think the book shows problems about immigrants. In the book, Ruthie comes to New York from Cuba to have a free life. In the real world, some people also run away from their country so they can feel safe.",
      },
      {
        q: 12,
        text: "Maybe one day I will look at Frida Kahlo’s drawings and draw something Frida Kahlo–style, because when Ruthie was stuck in bed and started drawing with the motivation of Chicho, she figured out about Frida Kahlo.",
      },
    ],
  },
  {
    slug: "little-women",
    title: "Little Women",
    author: "Louisa May Alcott",
    genre: "Classics",
    finished: "2026",
    rating: 5,
    oneLine: "Meg, Jo, Beth, and Amy are sisters. Follow them through the life of highs and lows!",
    cover: "#7a5c7e",
    coverImage: "/books/little-women.jpg",
    answers: [
      {
        q: 1,
        text: "It’s a sad moment. It’s when the baby has scarlet fever in Beth’s arms. She must have been so sad and sorry and traumatized. It was so surprising because I’ve never seen or heard that a baby died.",
      },
      {
        q: 6,
        text: "Honestly, even if almost always my favorite character is the youngest, I just hate Amy. I can’t believe she was ungrateful to Jo (Josephine) and burned Jo’s tale book! Jo spent so much time writing and just because Amy wasn’t allowed to play she burns her sister’s hard work!!!?",
      },
      {
        q: 7,
        text: "Poverty & War. Jo’s family’s dad went to war and even if Meg (Margaret) wants to be rich (shown when she goes to Sallie’s party & the ball) they are poor so she wears hand-me-downs from her Mother. I’m still happy that she is grateful though.",
      },
    ],
  },
  {
    slug: "the-wild-robot",
    title: "The Wild Robot (Books 1–3)",
    author: "Peter Brown",
    genre: "Fiction",
    finished: "2025",
    rating: 4,
    oneLine: "Follow Roz (Rozzum 7134) as she experiences the wild and the real world.",
    cover: "#3f5f5c",
    coverImage: "/books/the-wild-robot.jpg",
    answers: [
      {
        q: 5,
        text: "Rozzum decides to take care of Brightbill. The reason is too obvious: when Rozzum 7134 was escaping from a bear and storm, she accidentally crashes into a goose nest and kills Brightbill’s family.",
      },
      {
        q: 10,
        text: "At first I thought that some animals couldn’t get along. Now I realised that it is not true (even if it is fiction). A goose might became friends with a fox. Unexpected friendships could happen.",
      },
      {
        q: 9,
        text: "This book is mostly about climate change and the future. Even if it doesn’t clearly say that it is, I’m just guessing. But it is missing the point (even if humans are not the main focus) that humans are still going to dominate the world.",
      },
    ],
  },
];

export function getBook(slug: string) {
  return BOOKS.find((b) => b.slug === slug);
}

export function formatFinished(date: string) {
  if (/^\d{4}$/.test(date)) return date;
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Books this book's "Book buddies" answer mentions by title.
export function getBuddies(book: Book): Book[] {
  const buddyAnswers = book.answers.filter((a) => a.q === 13).map((a) => a.text.toLowerCase());
  return BOOKS.filter(
    (other) =>
      other.slug !== book.slug && buddyAnswers.some((t) => t.includes(other.title.toLowerCase()))
  );
}

// The question Danielle picks most often (earliest number wins a tie).
export function getFavoriteQuestion(): Question | undefined {
  const counts = new Map<number, number>();
  for (const b of BOOKS) for (const a of b.answers) counts.set(a.q, (counts.get(a.q) ?? 0) + 1);
  let best: number | undefined;
  for (const [n, c] of Array.from(counts)) {
    if (c < 2) continue;
    if (best === undefined || c > counts.get(best)! || (c === counts.get(best) && n < best)) best = n;
  }
  return best === undefined ? undefined : getQuestion(best);
}

// "4 books · 12 reflections · favorite question: Real life"
export function getReadingStats() {
  const reflections = BOOKS.reduce((sum, b) => sum + b.answers.length, 0);
  const favorite = getFavoriteQuestion();
  return [
    `${BOOKS.length} books`,
    `${reflections} reflections`,
    favorite && `favorite question: ${favorite.title}`,
  ]
    .filter(Boolean)
    .join(" · ");
}

// Books grouped by the year they were finished, newest year first.
export function getBooksByYear(): [string, Book[]][] {
  const years = new Map<string, Book[]>();
  for (const b of BOOKS) {
    const y = b.finished.slice(0, 4);
    years.set(y, [...(years.get(y) ?? []), b]);
  }
  return Array.from(years).sort(([a], [b]) => b.localeCompare(a));
}
