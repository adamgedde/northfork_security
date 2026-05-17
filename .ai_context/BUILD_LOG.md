# North Fork Security — Build Log

## How to Use This File
Update at the end of every AI coding session. Read at the start of every session.

---

## Session 1 — Scaffold & Full Implementation
**Date:** 2026-05-16
**Phase:** Phase 1
**Mode:** Claude Code

### What Was Built
- Vite 8 + React 19 + TypeScript project scaffolded at `north-fork-security/`
- Tailwind CSS v3 installed and configured with full HSL token bridge in `tailwind.config.ts`
- shadcn/ui initialized; components added: button, input, textarea, select, label, card
- `cta` variant added to `src/components/ui/button.tsx` (orange gradient, scale-on-hover, ArrowRight icon translates on group-hover)
- `src/index.css` — Tailwind directives + full design token system from `tokens.css`
- `src/lib/content.ts` — all site content arrays: `videoFeatures`, `services`, `industries`, `stats`
- All seven components implemented:
  - `Header.tsx` — sticky, backdrop-blur, Shield logo, desktop nav, mobile hamburger with open/close state
  - `Hero.tsx` — gradient bg + hero photo at 20% opacity, eyebrow dot, H1, dual CTAs, 4-up stats strip
  - `Section.tsx` + `SectionHeader` — section wrapper with tone prop (`background` / `section` / `muted`)
  - `FeatureGrid.tsx` — 4-up card grid with dynamic Lucide icon lookup via `import * as LucideIcons`
  - `IndustriesGrid.tsx` — 4 photo-background cards with gradient overlay, responsive grid
  - `ContactForm.tsx` — react-hook-form + zod, shadcn inputs, Formspree stub, success state
  - `Footer.tsx` — deep slate bg, brand block, Facebook SVG, NDAA/Minnesota trust pills
- `App.tsx` — composes all sections with smooth-scroll `scrollTo` handlers
- Assets copied from `assets/` to `north-fork-security/public/`
- `@/` path alias configured in `tsconfig.app.json` and `vite.config.ts`
- Build: `✓ built in 256ms`, zero TypeScript errors

### Decisions Made
- Tailwind v3 (not v4) — v4 breaks shadcn/ui config pattern
- lucide-react pinned to 0.462.0 — matches design system
- `serve` package chosen as static server — `vite preview` not suitable for production
- Brand block in Header/Footer uses Lucide `Shield` inside a styled div, not the SVG lockup files
- `import * as LucideIcons` used in FeatureGrid/IndustriesGrid for dynamic icon lookup from content arrays — accepted the bundle size trade-off for a marketing site

### What Was Deferred
- Real Formspree endpoint (placeholder URL in ContactForm.tsx)
- Deployment
- Domain configuration

### Open Questions
- [ ] What is the real Formspree endpoint URL?
- [ ] Confirm final domain name (`northforksecurity.com`?)

### Next Session Should
1. Replace Formspree placeholder in `src/components/ContactForm.tsx` with real endpoint
2. Deploy to Railway
3. Configure domain DNS

---

## Session 2 — Railway Deployment Config
**Date:** 2026-05-16
**Phase:** Phase 2
**Mode:** Claude Code

### What Was Built
- `railway.json` — build command (`npm run build`) and start command (`npm run start`) configured
- `package.json` — added `"start": "serve -s dist -l $PORT"` script
- `.nvmrc` — pinned to Node 20
- `package.json` — added `"engines": { "node": ">=20" }` field

### Decisions Made
- Node 20 pin required because Vite 8 requires Node 20.19+ and Railway defaults to Node 18
- Both `.nvmrc` and `engines` field set for belt-and-suspenders Railway Nixpacks detection

### What Was Deferred
- Formspree endpoint (still placeholder)
- Domain setup

### Open Questions
- [ ] What is the real Formspree endpoint URL?
- [ ] Confirm domain name with client

### Next Session Should
1. Wire real Formspree endpoint into `src/components/ContactForm.tsx`
2. Confirm domain and configure DNS to Railway

---

## Session 3 — AI Context Implementation
**Date:** 2026-05-17
**Phase:** Phase 2
**Mode:** Claude Code

### What Was Built
- `ai_context/` folder created at project root
- `PRODUCT_SPEC.md` — business overview, ICP, positioning, brand rules, sections, form fields, assets, out-of-scope items
- `TECH_STACK.md` — full stack inventory, key decisions with rationale, rejected options, path alias and token system docs
- `ROADMAP.md` — Phase 1 (complete), Phase 2 (in progress with open items), Phase 3 (future, not scoped)
- `BUILD_LOG.md` — this file, backfilled with Sessions 1 and 2

### Decisions Made
- Skipped `DATA_MODEL.md` (no database) and `EXTRACTION_SPEC.md` (no AI pipeline) — not warranted for this project's complexity
- Skipped `DISCOVERY_SESSION.md` — brand decisions are fully captured in `PRODUCT_SPEC.md` and the existing `README.md` / `Brand One Pager.html`

### What Was Deferred
- Nothing new deferred this session

### Open Questions
- [ ] Real Formspree endpoint URL
- [ ] Confirm domain name (`northforksecurity.com`?)

### Next Session Should
1. Read this file and `ROADMAP.md` before touching anything
2. Wire real Formspree endpoint into `src/components/ContactForm.tsx`
3. Confirm domain and configure DNS to Railway

---

## Decisions Log (Running)

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-16 | Tailwind v3 over v4 | v4 breaks shadcn/ui config pattern |
| 2026-05-16 | lucide-react pinned to 0.462.0 | Matches design system; newer versions may differ |
| 2026-05-16 | `serve` for production static serving | `vite preview` not production-safe; Express would be overkill |
| 2026-05-16 | `import * as LucideIcons` for dynamic icons | Allows content arrays to drive icon selection without a switch statement; bundle size acceptable for a marketing site |
| 2026-05-16 | Lucide Shield in brand block, not SVG lockup | README spec; keeps brand block consistent across Header and Footer |
| 2026-05-16 | Railway over Vercel/Cloudflare Pages | User preference |
| 2026-05-16 | Node 20 pin via .nvmrc + engines field | Vite 8 requires Node 20+; Railway defaults to 18 |

---

## Deferred Features Log

| Feature | Deferred To | Reason |
|---|---|---|
| Real Formspree endpoint | Phase 2 | Needs account setup and form creation by client |
| Domain DNS configuration | Phase 2 | Needs domain name confirmation from client |
| Analytics | Phase 3 | Not in scope until site is live |
| Privacy Policy page | Phase 3 | Footer link is a dead `#` placeholder |
| Additional photography | Phase 3 | Only 5 photos exist; new sections need client-supplied photos |
| Testimonials section | Phase 3 | Needs client to collect and approve quotes |
| Dark mode | Indefinite | Brand has not defined a dark expression |
