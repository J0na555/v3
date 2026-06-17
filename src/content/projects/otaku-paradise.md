---
title: Otaku Paradise
role: Full stack · Side project
dek: Anime and manga discovery platform — browse, search, and filter series, characters, news, and quotes powered by the Jikan API.
filterTags:
  - fullstack
cardTags:
  - Full stack
figure: Card-based anime library with genre filters and character profiles
order: 8
stack:
  - Django 5.2
  - Bootstrap 5.3
  - Jikan API
  - Font Awesome 6
github: https://github.com/J0na555/otaku-paradise
---

## About

Otaku Paradise is a Django discovery app for anime fans: browse and search anime and manga, explore character profiles, read industry news, and collect memorable quotes — all backed by the unofficial MyAnimeList API (Jikan).

## Features

- **Anime** — Thousands of series with synopsis, scores, genres; filter by year, score, and genre; paginated card layout
- **Manga** — Search by title or author; filters for genres, year, and ratings
- **Characters** — Profiles with appearances; search by character or parent anime
- **News** — Latest articles with search and external links
- **Quotes** — Filter by anime, character, or keyword; links into character pages

## Stack and structure

Django apps split by domain (`animes/`, `manga/`, `characters/`, `news/`, `quotes/`) with shared base templates, custom CSS on a purple/blue gradient theme, and responsive pagination across list views.

## Local setup

```bash
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate && python manage.py runserver
```
