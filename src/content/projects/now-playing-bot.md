---
title: Now-Playing Bot
role: Full stack · Product
dek: Real-time Spotify "Now Playing" status card for Telegram channels — one pinned message that updates in place as the track changes.
filterTags:
  - fullstack
cardTags:
  - Full stack
figure: Telegram channel with pinned, live-updating Spotify track card
order: 7
stack:
  - TypeScript
  - Vercel Functions
  - Telegram Bot API
github: https://github.com/J0na555/Now-Playing-Bot
---

## About

Now-Playing Bot pins a single message in a Telegram channel showing the current or last played Spotify track — album art, song, and artist — and updates it in place every couple of minutes. No message spam.

## How it works

It builds on spotify-github-profile.kittinanx.com, so no Spotify Developer app is needed — it reuses the auth already granted for the GitHub README widget (Premium required under Spotify's 2026 Developer Mode rules). The bot must be a channel admin with Post and Pin permissions.

## Layout

- `api/health.ts`, `api/poll.ts` — Vercel functions
- `lib/svg-parser.ts`, `lib/telegram.ts` — Shared logic
- `vercel.json` — Config