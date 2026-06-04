---
title: InfluencerHub
role: Full stack · Side project
dek: Ethiopia-focused creator marketplace — creator directory, Chapa subscriptions, realtime messaging, campaigns, and AI-assisted content drafts.
filterTags:
  - fullstack
cardTags:
  - Full stack
figure: Creator directory, messaging, and campaign dashboard
order: 5
stack:
  - React 18
  - TypeScript
  - Vite 5
  - Tailwind CSS 3
  - Supabase
  - Chapa
  - Vercel
---

## About

InfluencerHub is a two-sided marketplace connecting social media influencers with brands in Ethiopia. Creators get discovery, subscriptions, and campaign tools; brands search, message, and run collaborations in one monorepo SPA backed by Supabase.

## Key features

- **Public directory** — Search, filter, and sort creator profiles
- **Tiered subscriptions** — Free, Pro (299 ETB), Elite (699 ETB) via Chapa payments
- **Realtime messaging** — Creator–brand chat through Supabase Realtime
- **Campaigns** — Post, apply, and review workflows
- **Admin moderation** — Profile approvals, verification, payment monitoring
- **AI content helper** — Draft bios, briefs, and messages (Cursor Cloud Agents via Edge Function)
- **Onboarding** — Five-step wizard for new creators

## Structure

```
influencer-hub/
├── src/          # React pages, components, hooks, contexts
└── supabase/     # Migrations, RLS, edge functions (payments, AI)
```

Payments run through Chapa in ETB via Supabase Edge Functions; the frontend deploys on Vercel.
