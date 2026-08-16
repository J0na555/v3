---
title: myredis
role: Backend · Dev tool
dek: A Redis clone built from scratch — RESP protocol parser, command layer, key-value store, and TCP server with tests.
filterTags:
  - experiment
cardTags:
  - Dev Tool
figure: RESP protocol parser and TCP server implementation
order: 3
stack:
  - Python 3
  - RESP protocol
  - TCP sockets
github: https://github.com/J0na555/myredis
---

## About

myredis is a Redis clone built from scratch: a TCP server speaking the RESP protocol, a command layer, and a key-value store.

## Layout

- `server.py` — TCP server
- `resp.py` — RESP protocol parser
- `commands.py` — Command layer
- `store.py` — Key-value store
- `tests/` — `resp_test.py` and `store_test.py`