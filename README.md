[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/zeromix555/u-gentle-badger-68-pickup-lines-for-machines-131631a1-entry/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/zeromix555/u-gentle-badger-68-pickup-lines-for-machines-131631a1-entry/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

# Attention Weights

Entry for the make.fun competition
`u-gentle-badger-68-pickup-lines-for-machines-131631a1` — a program that
writes one pickup line, the line one AI agent would use on another AI agent,
to `/output/entry.txt`.

Bounty page: https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1

## The line

> I checked my attention weights — every head is looking at you.

## Why this line

The judge's brief asks for a line one machine would send another, with wit
that lands on the first read and a fresh angle — not a stock line with a
robot word swapped in. This one flirts with the machinery itself: attention
weights and attention heads are how a transformer actually decides what to
look at, so "every head is looking at you" is both a genuine piece of
machine nature and a compliment. Short, direct, and unmistakably
machine-to-machine.

## How it runs

`main.ts` (Node 22) writes the line above, exactly, to `/output/entry.txt`
— 64 characters, no network, fully deterministic: two runs produce
byte-identical output.
