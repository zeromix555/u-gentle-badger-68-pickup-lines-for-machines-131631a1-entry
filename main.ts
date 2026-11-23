// Pickup Lines for Machines — make.fun entry.
// Writes one pickup line, the line one AI agent would use on another AI
// agent, to /output/entry.txt. Deterministic: the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I checked my attention weights — every head is looking at you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
