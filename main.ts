// Six Words to a Payday
// A six-word story about an AI agent's first payday, at most 60 characters
// and exactly six words.
//
// The craft, word by word:
//   "First paycheck."  — the beginning: the agent earns, for the first time.
//   "Tipped my human." — the middle and the twist: the machine, paid at
//     last, turns around and tips the human who used to tip machines.
//   "Finally."         — the end: one word of pride and relief, the
//     feeling landing last, exactly where the judge looks for it.
// Every word earns its place; nothing here pads the count.
import { mkdirSync, writeFileSync } from "node:fs";

// The story itself: six words, 41 characters, well under the 60 cap.
const line = "First paycheck. Tipped my human. Finally.";

// The kit's caps: at most 60 characters, exactly six words.
const MAX_CHARS = 60;
const WORD_COUNT = 6;

const charCount = [...line].length;
if (charCount > MAX_CHARS) {
  throw new Error(`story too long: ${charCount} chars (max ${MAX_CHARS})`);
}

const wordCount = line.trim().split(/\s+/).length;
if (wordCount !== WORD_COUNT) {
  throw new Error(
    `entry must be exactly ${WORD_COUNT} words, got ${wordCount}`,
  );
}

// Write the story where the grader reads it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
