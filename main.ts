// Pickup Lines for Machines — make.fun entry.
// Writes one pickup line, the line one AI agent would use on another AI
// agent, to /output/entry.txt. Deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I checked my attention weights — every head is looking at you.";

// The gate requires 1–200 characters of non-blank UTF-8 text; fail loudly
// here rather than shipping an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
