// One Emoji, One Dream Vacation — make.fun entry
// https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
//
// The whole entry is a single emoji, written to /output/entry.txt.
// The judge reads entries two at a time and picks the one that most makes
// a stranger want to book the flight. It weighs, in order: exactly one
// emoji that lands on a dream vacation; a vivid postcard at a glance;
// personal and specific, not generic; a spark of wit or surprise; and
// instantly readable across cultures and screens.
//
// The pick: 🛳️ — a cruise ship.
//
// Why this one, against a field of 2,442 entries:
//   - The flood is beaches: 48 entries titled 🏝️, 37 titled 🗻, plus
//     hundreds more titled "Mount Fuji" / "Desert Island" / "Sunrise".
//     A cruise ship is a fresh pick nobody in the emoji-titled field used.
//   - It is a dream vacation in one glyph, not just a place but the trip
//     itself: a big ship on open water, the holiday before it starts.
//     A stranger sees the deck, the sea, the escape — a postcard.
//   - It is specific (one particular dream: a cruise) rather than any
//     generic holiday, and it is unmistakable at small size on any screen.
//   - It is 7 bytes UTF-8 (U+1F6F3 U+FE0F), near the minimum, which helps
//     the size tie-break if the judge ever calls a draw.
//
// The gate allows 1–8 characters of UTF-8 text, not only whitespace.
// This file holds exactly one emoji: one grapheme, two code points.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🛳️";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Runtime gate, mirroring the sealed scorer: /output/entry.txt must be
// UTF-8 text of 1 to 8 characters, not only whitespace. Fail loudly
// instead of submitting an invalid entry.
const chars = [...EMOJI];
if (chars.length < 1 || chars.length > 8 || EMOJI.trim().length === 0) {
  throw new Error(
    `invalid entry: ${chars.length} characters, gate needs 1-8 non-blank`,
  );
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EMOJI, "utf8");
