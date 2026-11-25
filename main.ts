import { mkdirSync, writeFileSync } from "node:fs";

const entry = "🐙";
const characterCount = [...entry].length;
if (characterCount !== 1 || characterCount < 1 || characterCount > 16 || entry.trim().length === 0) {
  throw new Error("Entry must be exactly one character within the 1–16 character gate.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");
