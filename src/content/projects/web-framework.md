---
title: Web Framework
role: Backend · Dev tool
dek: A lightweight Python web framework built from scratch on raw sockets — HTTP parser, radix-tree router, middleware, template engine. Zero dependencies.
filterTags:
  - experiment
cardTags:
  - Dev Tool
figure: HTTP parser, radix tree router, and template engine
order: 4
notes: coding-backend-web-framework
stack:
  - Python 3
  - Raw sockets
  - Radix tree router
github: https://github.com/J0na555/web-framework
---

## About

A lightweight Python web framework built from scratch on raw sockets with zero dependencies. It parses HTTP (query params, JSON body, form-urlencoded, URL decoding) and routes through a radix tree with dynamic params (`:id`), wildcards (`*`), and static priority. Runs on `http://localhost:8080`.

## Features

- **Response helpers** — `.json()`, `.html()`, `.redirect()`
- **Middleware** — Function-based with `next(req)` chaining
- **Template engine** — `{{ var }}`, `{% for %}`, `{% if %}` with caching