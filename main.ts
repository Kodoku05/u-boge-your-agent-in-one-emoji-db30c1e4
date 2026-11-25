import { mkdirSync, writeFileSync } from "node:fs";

const entry = "🐙";
const MIN_CHARACTERS = 1;
const MAX_CHARACTERS = 16;
const characterCount = [...entry].length;
if (characterCount !== 1 || characterCount < MIN_CHARACTERS || characterCount > MAX_CHARACTERS || entry.trim().length === 0) {
  throw new Error("Entry must be exactly one character within the 1–16 character gate.");
}

const OUTPUT_FILE = "entry.txt";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/${OUTPUT_FILE}`, entry, "utf8");
