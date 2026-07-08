---
title: Crystal Ball
role: Creator · Side project
dek: Deterministic pre-commit security scanner — AST-based Python rules, staged-file focus, and commit blocking on HIGH/CRITICAL findings.
filterTags:
  - fullstack
cardTags:
  - Dev Tool
figure: Terminal output blocking a commit on a HIGH severity finding
order: 7
stack:
  - Python
  - AST analysis
  - Git hooks
github: https://github.com/J0na555/commit-crystal-ball
---

## About

Crystal Ball moves security feedback to commit time. It scans only staged files
(optionally diff-aware changed lines), flags risky patterns with clear severity,
and blocks commits when findings are HIGH or CRITICAL — offline, deterministic,
and without external APIs.

## Why it exists

Secrets and unsafe patterns often slip in during fast iteration and only surface
in CI after the commit is shared. Crystal Ball catches hardcoded credentials,
unsafe paths, and similar issues before code leaves your machine.

## Features

- **Pre-commit hook** — `crystal install` wires Git automatically
- **Staged and direct scan** — `crystal scan-staged` or `crystal scan file.py`
- **Diff-aware mode** — Focus on changed lines to reduce legacy noise
- **Severity gating** — HIGH/CRITICAL fail the hook; bypass via `--no-verify`
  when intentional
- **Output tones** — `oracle`, `dramatic`, `professional`, `minimalist`
- **CI annotations** — `--github` for GitHub Actions PR UI

## Architecture

CLI entry points → Git staged-file discovery and hook wiring → diff engine → AST
detector engine → tone formatters and optional GitHub annotation reporter.

## Usage

```bash
pip install git+https://github.com/y0na55/commit-crystall-ball.git
crystal install
git commit -m "Add payment validation"   # hook runs on staged changes
```
