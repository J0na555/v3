---
title: Aizen
role: Backend · Dev tool
dek: Universal task orchestrator — DAG-based workflow engine with multi-AI backends, plugin support, parallel execution, and checkpoint/resume.
filterTags:
  - experiment
cardTags:
  - Dev Tool
figure: DAG workflow engine with AI backends and parallel stages
order: 6
notes: projects-aizen
stack:
  - Python 3
  - YAML DAG engine
  - Claude / Codex / Gemini / OpenCode
  - MCP
github: https://github.com/J0na555/aizen
---

## About

Aizen is a universal task orchestrator: workflows are defined as YAML and executed as a DAG in dependency order, with stages that run shell commands, AI prompts (Claude, OpenCode, Codex, Gemini), MCP server calls, or Python functions. Stages can run in parallel, be paused and resumed, and the whole workflow can be dry-run before execution.

## Usage

```bash
aizen run workflows/pipeline.yaml --parallel
```

The CLI is the entry point; docs cover getting started, workflows, plugins/skills, AI backends, MCP integration, and advanced guides for variable interpolation, streaming, and resume.