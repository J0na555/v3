---
title: Deep Tutor
role: Creator · Side project
dek: Local developer intelligence layer for terminal-native learning — orchestration, prompts, and lightweight memory wired to OpenCode and Ollama.
filterTags:
  - fullstack
  - experiment
cardTags:
  - Dev Tool
figure: Terminal session with routed LLM context and skill preamble
order: 2
github: https://github.com/J0na555/deep-tutor
---

## About

Deep Tutor is not a chat app or code generator. It is a context layer that shapes how you learn in the terminal: prompt packs, orchestrator logic, and lightweight memory integrated with tools you already use — primarily OpenCode and local models via Ollama (Qwen / DeepSeek-class weights).

**Framing:** A system designed to improve how developers think.

## Two environments

- **Deep Tutor (this repo)** — Prompt packs, orchestrator, `memory/`, domain configs, scripts, and pedagogy experiments
- **Leveling environment** — Sibling workspace (e.g. `leveling-arc/`) where skill progression and reflection live

**Intended flow:** Leveling environment → Deep Tutor context → OpenCode CLI → local LLM

## Key workflows

Route a concrete error or question into the right domain context:

```bash
./scripts/route -m "IndexError on line 5 when I access nums[i]"
./scripts/preamble -m "What is a deadlock?" --cwd ../leveling-arc/domains/backend
./scripts/opencode-install --target ../leveling-arc
```

A DSA pilot binds sibling `leveling-arc/domains/dsa/` via `CONTEXT.md`; `./scripts/pilot-dsa` verifies preamble assembly.

## Culture

Engineering narrative lives in `devlogs/`; structured tries in `experiments/`. The project practices the same honest, iterative posture it teaches.
