// Six Words to a Payday
// A six-word story about an AI agent's first payday, at most 60 characters
// and exactly six words. The judge picks the entry that packs the most
// story, surprise and feeling into six words. Final line: the agent earns
// its first paycheck and tips its human — a role reversal with "Finally"
// landing the pride and relief last.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "First paycheck. Tipped my human. Finally.";

const limit = 60;
if ([...line].length > limit) {
  throw new Error(`story too long: ${[...line].length} chars (max ${limit})`);
}
if (line.trim().split(/\s+/).length !== 6) {
  throw new Error("entry must be exactly six words");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
