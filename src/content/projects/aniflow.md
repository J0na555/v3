---
title: AniFlow
role: Full stack · Side project
dek: Django anime tracker with AniList OAuth sync, library progress, pluggable streaming adapters, and a JSON API for a separate SPA.
filterTags:
  - fullstack
cardTags:
  - Full stack
figure: Dashboard with anime library, progress, and watch links
order: 4
stack:
  - Python 3.12
  - Django 5.2
  - PostgreSQL
  - AniList OAuth
  - gunicorn
  - WhiteNoise
github: https://github.com/J0na555/AniFlow
---

## About

AniFlow is a Django backend for tracking anime: sign in with AniList, sync remote lists into local catalog rows, manage watching/completed status and episode progress, and resolve watch URLs through pluggable streaming source adapters. The server-rendered UI covers the full product; a JSON API under `/api/` supports a separate SPA with session cookies and CORS.

## Key features

- **AniList OAuth** — Token storage and list sync into `Anime` / `UserAnime` models
- **Library and progress** — Status updates, episode counts, optional watching limits
- **Streaming resolution** — Maps titles to provider IDs, builds episode URLs, falls back to search
- **Dashboard API** — `/api/me/`, `/api/dashboard/`, search, watchlist, resume, recommendations, seasonal releases
- **Production path** — WhiteNoise static assets, gunicorn WSGI, `render.yaml` deploy docs

## Architecture

| Area | Responsibility |
| --- | --- |
| `config/` | Settings, URLs, WSGI/ASGI, CORS |
| `apps/anime/` | Models, web views, templates, `/api/*` handlers |
| `apps/users/` | Custom user, AniList OAuth (`/auth/...`) |
| `apps/tracker/` | Tracker abstraction and AniList list sync |
| `apps/streaming/` | Source models, matchers, per-site adapters |
| `apps/recommendations/`, `apps/releases/`, `apps/productivity/` | Supporting services |

## API and auth

JSON endpoints return structured 401 responses (not HTML redirects) when unauthenticated. Web UI uses Django sessions. Sync can be triggered via `POST /api/sync/anilist/`.

## Local development

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # DATABASE_URL, SECRET_KEY, AniList OAuth
python manage.py migrate && python manage.py runserver
```
