---
title: CP-Lockin
role: Browser extension · In development
dek: Browser extension syncing Codeforces and LeetCode — streaks, goals, background sync.
stack:
  - JavaScript
  - Browser APIs
  - REST
  - GraphQL
  - Local storage
links:
  - label: Source
    href: https://github.com/J0na555/CP-Lockin
  - label: Portfolio demo
    href: https://jonas-dev-portfolio.vercel.app/
---

## About

CP-Lockin is a browser extension for competitive programmers who split time between Codeforces and LeetCode. It pulls submissions from both platforms, tracks streaks, and surfaces daily/weekly goals without opening each site separately.

## What I built

Modular extension architecture with a background worker for sync, REST integration for Codeforces, and GraphQL for LeetCode. Data lives in browser storage for v1 with a normalized submission model across platforms.
