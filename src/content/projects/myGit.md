---
title: myGit
role: Backend · Dev tool
dek: Git internals from scratch — object store, index, and refs implemented directly on the .git format.
filterTags:
  - experiment
cardTags:
  - Dev Tool
figure: Git object store, index, and refs implementation
order: 5
stack:
  - Python 3
  - Git object model
  - SHA-1 hashing
github: https://github.com/J0na555/myGit
---

## About

myGit implements Git internals from scratch in a single `main.py`, working directly against the `.git` format: the object store with SHA-1-addressed blobs, the index, and refs under `refs/heads` plus `HEAD`.

## Scope

- **Object store** — Blobs written and read by hash
- **Index** — Staged file state
- **Refs** — Branch pointers under `refs/heads` and `HEAD`