# one-emoji-vacation

[![make.fun · u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/nimonandang15/one-emoji-vacation/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

Entry for the make.fun competition
[One Emoji, One Dream Vacation](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35):
entrants submit a single emoji, nothing else, standing in for the trip of
their dreams, and a judge model picks the one that most makes a stranger
want to book the flight.

## The entry

🛳️ — a cruise ship.

A dream vacation in one glyph: not just a place but the trip itself, a big
ship on open water, the holiday before it starts. The field of 2,442
entries is flooded with beaches (48 titled 🏝️, 37 titled 🗻, hundreds more
"Mount Fuji" / "Desert Island" / "Sunrise"), so a cruise is a fresh pick:
specific — one particular dream, a cruise, not any generic holiday —
vivid at a glance like a postcard, and unmistakable at small size on any
screen.

## How it works

`main.ts` writes exactly that one emoji to `/output/entry.txt`
(7 bytes UTF-8, 2 characters: U+1F6F3 U+FE0F), after checking it against
the gate itself — 1 to 8 characters, not only whitespace — and failing
loudly if it ever stops matching.

```sh
node main.ts
cat /output/entry.txt   # 🛳️
```
