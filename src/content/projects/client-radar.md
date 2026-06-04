---
title: ClientRadar
role: Full stack · Side project
dek: Lead prioritization for outreach — OSM/CSV discovery, website audits, and transparent rule-based scoring in one dashboard.
filterTags:
  - fullstack
cardTags:
  - Full stack
figure: Dashboard with scored leads, audit status, and outreach filters
order: 3
stack:
  - FastAPI
  - SQLAlchemy
  - Playwright
  - Next.js
  - OpenStreetMap Overpass
---

## About

ClientRadar answers one question: **which businesses should we contact first?** It combines lead discovery (OpenStreetMap Overpass or CSV import), automated website audits, and rule-based scoring so outreach teams can prioritize from a single Next.js dashboard backed by a FastAPI API.

## MVP workflow

1. **Discover** — Pull leads from Overpass by niche tags or import a CSV template
2. **Audit** — Fast HTTP checks plus Playwright screenshots of each site
3. **Score** — Transparent rule-based breakdown (no black-box ML)
4. **Prioritize** — Filter, sort, and track outreach status on the dashboard

## Architecture

| Layer | Tech |
| --- | --- |
| `backend/` | FastAPI, SQLAlchemy, Playwright audits, pytest suite |
| `frontend/` | Next.js dashboard (API at `127.0.0.1:8000`) |
| `shared/niches.json` | Single source of truth for niches, Overpass tags, and UI selector |
| `docs/` | CSV import templates |

Niche catalog drives everything: backend registry at startup, Overpass discovery filters, and frontend import/filter UI — add a vertical in JSON (category, `overpassTags`, Lucide icon, color) and both apps pick it up after restart.

## Local development

**Backend:**

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements-dev.txt
playwright install chromium
uvicorn app.main:app --reload
```

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` — dashboard talks to the API on port 8000. Run `pytest` in `backend/` for automated checks; see `backend/README.md` for smoke steps (CSV import, audit, outreach).
