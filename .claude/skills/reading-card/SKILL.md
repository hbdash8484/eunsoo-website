---
name: reading-card
description: Add a book to the website's Reading & Reflections section from photos of Danielle's handwritten reading card. Use whenever the user shares a reading card photo (often .HEIC), says "북카드/리딩카드 올려줘", or asks to add/update a book in Reading & Reflections.
---

# Adding a reading card to Reading & Reflections

Danielle fills in a printed reading card after each book. The user sends a photo; you turn it into one
entry in `BOOKS` in `lib/reading.ts`. Everything on the site (home cards, `/reading/[slug]` page, sitemap,
"N books · N reflections · favorite question" line, book-buddy links) is generated from that entry —
**do not edit components or pages to add a book.**

The question sheet is in [questions.md](questions.md). Read it to know what each Q number means.

## 1. Read the photo

- `.HEIC` can't be read directly. Convert into the scratchpad first:
  `sips -s format jpeg -Z 1600 <file.HEIC> --out <scratchpad>/card.jpg`, then Read the jpg.
- Pull out: Book, Author, Genre, Finished date, Rating, each Q number + answer (in the order written,
  including the "extra" box if filled), and "The whole book in one line…".
- Rating: count filled circles; a half-filled circle = .5 (e.g. 4 full + 1 half = 4.5). Ignore pen color.
- If a word is genuinely unreadable, make your best guess **and tell the user** which word to confirm
  with Danielle. Leave a `// "<word>" is read from the handwriting — double-check with Danielle.`
  comment above that answer. Remove the comment once the user confirms.

## 2. Transcription rules (decided with the user — keep them identical every time)

- **Fix spelling and capitalization only.** e.g. "bullie victem" → "bully victim", "Is get in 1960's" →
  "is set in the 1960s", "new york" → "New York", "frida kahlo" → "Frida Kahlo".
- **Do not fix grammar, word choice, or sentence structure.** Keep "Both books got the song…",
  "Both Sarah, Danielle and Ruthie is seen…" as written. Keep her own word choices even if you'd phrase
  them differently.
- Add missing sentence-ending periods and fix obvious spacing; don't add or remove words.
- Fix clear name slips to the character's name (she wrote "Ruth" for the character Ruthie).
- Use typographic punctuation in the data: ’ for apostrophes, “ ” for quotes, – in "Frida Kahlo–style".
- Use the book's real title capitalization and the author's real name spelling (check online if unsure).
- The original photo is **not** shown on the site. Don't copy it into `public/`.

## 3. Write the entry

Add a new object at the **top** of `BOOKS` (newest first, by finished date):

```ts
{
  slug: "kebab-case-title",          // from the book title
  title: "Book Title",
  author: "Author Name",
  genre: "Novel",                    // as written on the card, capitalized
  finished: "2026-09-28",            // card says 9.28.2026 → YYYY-MM-DD
  rating: 4.5,
  oneLine: "The whole book in one line, transcribed by the rules above.",
  cover: "#5f7a6a",                  // see palette below
  // buddyNote: "both set in the 1960s",  // only if Q13 names another book on the site
  answers: [
    { q: 4, text: "..." },          // same order as on the card
  ],
},
```

- **cover**: pick from this palette, and don't reuse the color of the book directly next to it:
  `#c65f45` (rose), `#5f7a6a` (sage), `#4f6382` (slate blue), `#b0854a` (ochre), `#7a5c7e` (plum),
  `#3f5f5c` (deep teal).
- **buddyNote**: book-buddy links are detected automatically when a Q13 ("Book buddies") answer contains
  another site book's exact title. If so, add a short `buddyNote` (lowercase, no period) summarizing the
  connection she described, e.g. `"both set in the 1960s, both with go-go boots"`.
- Q numbers must exist in `QUESTIONS`. If the card uses a question not on the sheet, stop and ask.

## 4. Verify

1. `npx tsc --noEmit`
2. `preview_start` `eunsoo-dev`, check `/#reading` (new card first, cover title fits, rating dots right)
   and `/reading/<slug>` (answers in order, no console errors). Check mobile width too.

## 5. Report and ship

- Show the user the transcribed answers and list every spelling fix you made, plus any word to confirm.
- Commit only `lib/reading.ts` (and this skill, if changed) with a message like
  `Add <Book Title> to Reading & Reflections`, then push to `main` — only when the user asks.

## If the question sheet changes

Update [questions.md](questions.md) **and** `QUESTIONS` in `lib/reading.ts` together. Never renumber
existing questions — old cards refer to them by number. Add new questions at the end.
