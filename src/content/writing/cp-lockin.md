---
title: Notes — CP-Lockin
date: 2024-06-01
meta: Lessons · Browser extension · 2024
dek: What I learned building a cross-platform competitive programming tracker.
---

## API design

Codeforces REST and LeetCode GraphQL behave very differently. Normalizing both into one submission model early saved a lot of UI rework.

## Extension architecture

Background sync needs clear failure states — users should see when a platform is rate-limited, not a silent empty streak.

## Local-first data

- Browser storage is enough for v1, but schema versioning matters on day one.
- Streak logic belongs in one module, not spread across popup and background scripts.
