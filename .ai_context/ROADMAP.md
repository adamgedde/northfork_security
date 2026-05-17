# North Fork Security — Roadmap

## Phase 1 — Build (COMPLETE)

Scaffold and implement the full single-page site from the design bundle.

**In scope:**
- Vite + React + TypeScript project scaffold
- Tailwind CSS v3 + shadcn/ui + lucide-react setup
- Design token bridge (CSS vars → Tailwind config)
- All seven sections: Header, Hero, Video Security, Services, Industries, Contact, Footer
- Contact form with react-hook-form + zod validation and success state
- Mobile-responsive layout (375px first)
- All brand rules enforced (sentence case, no emoji, no exclamation points)
- Assets copied to `public/`

**Out of scope for Phase 1:**
- Real form endpoint (stub only)
- Deployment
- Domain setup
- Analytics

**Exit criteria:** Clean `npm run build`, site renders correctly at 375px and 1280px, all seven sections present, all copy matches approved content.

**Status:** Complete.

---

## Phase 2 — Deploy (IN PROGRESS)

Get the site live on Railway with a working contact form.

**In scope:**
- Railway deployment configuration (`railway.json`, `.nvmrc`, `engines` field)
- Node 20 version pin (required by Vite 8)
- Formspree endpoint wired into `ContactForm.tsx`
- Domain configuration (`northforksecurity.com` — confirm with client)
- Smoke test on production URL

**Open items:**
- [ ] Replace Formspree placeholder URL in `src/components/ContactForm.tsx` with real endpoint
- [ ] Confirm domain name with client (was renamed from North Fork Technologies)
- [ ] Point domain DNS to Railway

**Exit criteria:** Site is live at the production domain, contact form submissions arrive in the client's inbox, no console errors on mobile or desktop.

**Status:** Railway config complete. Formspree endpoint and domain pending.

---

## Phase 3 — Future (NOT STARTED, not scoped)

Enhancements to consider after the site is live and generating leads. Nothing here gets built until explicitly scoped.

| Item | Notes |
|---|---|
| Analytics | Simple page-view tracking — Plausible or Fathom preferred (privacy-friendly, no cookie banner needed) |
| Additional photography | Only 5 photos exist. New sections would need client-supplied photos. |
| Testimonials section | Would require client to collect and approve quotes |
| Case studies | Longer-form content; likely needs a CMS or MDX |
| Blog / news | Only if client commits to producing content |
| Privacy Policy page | Linked in footer; currently a dead `#` link |
| Services detail pages | Expand each service card into a full page |
| Dark mode | Brand has not defined a dark expression — do not build until brand guide is updated |

**Rule:** Nothing from Phase 3 gets built during a Phase 2 session without explicit instruction.
