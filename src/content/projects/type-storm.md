---
title: TypeStorm
role: Creator · Side project
dek: Terminal typing game for code snippets — WPM, accuracy, and per-level bests across Python, JavaScript, and Java.
filterTags:
  - fullstack
cardTags:
  - CLI Tool
figure: Terminal with syntax-highlighted snippet and typing metrics
order: 6
stack:
  - Python
  - Rich
links:
  - label: Source
    href: https://github.com/J0na555/typestorm
---

## About

TypeStorm is a terminal-based typing game where you practice real code snippets at five difficulty levels while tracking WPM, accuracy, and completion time.

## Features

- **Five levels** — Beginner through Master
- **Multi-language snippets** — Python, JavaScript, and Java
- **Round summary** — WPM, accuracy, and time per round; bests stored per level
- **Immediate feedback** — Highlights the first mismatch in the snippet
- **Syntax highlighting** — Language-aware rendering via Rich
- **CLI flags** — Fixed level, round count, and score reset

## Usage

```bash
pip install -r requirements.txt
python typestorm.py
python typestorm.py --rounds 3 --level advanced
```
