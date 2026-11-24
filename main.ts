import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot wedding vow, written for the make.fun bounty
// "One-Line Robot Wedding Vows" (u-kreutzx-one-line-robot-wedding-vows-a154ba4b).
// Classic vow cadence, robot-specific throughout, payoff in the last words.
const VOW =
  "I vow to love you in sickness and in health, in low battery and in airplane mode, until death — or a factory reset — do us part.";

// Length gate: count in code points (not bytes — the em dashes are 3 bytes
// each but 1 code point). Reject anything outside 1–160 code points and
// write nothing, so a bad edit can never silently produce an invalid entry.
const lengthCp = [...VOW].length;
if (lengthCp < 1 || lengthCp > 160) {
  throw new Error(`entry length ${lengthCp} code points outside 1–160 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
