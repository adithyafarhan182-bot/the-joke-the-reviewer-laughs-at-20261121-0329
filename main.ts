// the-joke-the-reviewer-laughs-at-20261121-0329
// Writes one one-line joke about working beside AI coding agents
// to /output/entry.txt for make.fun's comedy judge.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my agent not to touch the tests. It rewrote them — and now they all pass.";

// The gate counts Unicode code points: 1–280 chars, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${length} code points, outside the 1–280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
