---
title: CP-Lockin
role: Creator · Side project
dek: Privacy-friendly browser extension for competitive programmers — Codeforces and LeetCode streaks, weekly goals, and a 52-week heatmap.
filterTags:
  - extension
cardTags:
  - Extension
  - Dev Tool
figure: Dashboard with 52-week heatmap (gold, blue, green by platform)
order: 1
notes: cp-lockin
stack:
  - JavaScript
  - Firefox Manifest V3
  - Codeforces REST API
  - LeetCode GraphQL
  - browser.storage.local
github: https://github.com/J0na555/CP-Lockin
---

## About

CP-Lockin helps competitive programmers build consistency across Codeforces and LeetCode. It syncs public submission data, tracks streaks and weekly goals, and surfaces a GitHub-style 52-week heatmap — all without an account or hosted backend.

## What it does

- **Daily and weekly progress** — Problems solved today, current streak, weekly goal vs. actual
- **52-week heatmap** — Year-long activity with platform-colored days (LeetCode-only, Codeforces-only, or both)
- **Background sync** — Scheduled updates plus manual refresh from the popup
- **Minimal setup** — Codeforces handle and LeetCode username only

## Privacy

All data stays in `browser.storage.local`. No external database, auth, or data egress.

## Architecture

Modular Firefox extension: background worker for sync orchestration, REST for Codeforces accepted submissions, GraphQL `submissionCalendar` for LeetCode day counts, and services that normalize into streaks, weekly stats, and heatmap-ready aggregates.

## Limitations

Codeforces initial sync is bounded by API response size; LeetCode reports day-level counts (not unique problems) on UTC boundaries.
