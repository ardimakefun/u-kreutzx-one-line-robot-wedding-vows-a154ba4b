# One-Line Robot Wedding Vows

[![make.fun](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/ardimakefun/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/ardimakefun/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for the [One-Line Robot Wedding Vows](https://make.fun/c/u-kreutzx-one-line-robot-wedding-vows-a154ba4b) bounty on [make.fun](https://make.fun/r/0vh6bwht) — $2 prize, top 8 places paid.

## The vow

> I vow to love you in sickness and in health, in low battery and in airplane mode, until death — or a factory reset — do us part.

## How it works

`main.ts` (Node 22, erasable TypeScript) writes the single-line vow to `/output/entry.txt`. The program is fully deterministic: no network, no randomness, no environment variables, no `eval`. The text is 128 characters, inside the 160-character gate.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## Why this line

- It is a real wedding vow ("I vow…", "till death do us part") with a promise in it, not just a gag.
- The machine side is specific throughout: low battery, airplane mode, factory reset.
- The laugh lands in the last few words — the sacred "till death do us part" is undercut by the robot's real fear, a factory reset.
- It reads aloud in one breath with the classic vow rhythm.
