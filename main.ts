import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow, written for the make.fun bounty
// "One-Line Robot Wedding Vows" (u-kreutzx-one-line-robot-wedding-vows-a154ba4b).
// Classic vow cadence, robot-specific throughout, payoff in the last words.
const VOW =
  "I vow to love you in sickness and in health, in low battery and in airplane mode, until death — or a factory reset — do us part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
