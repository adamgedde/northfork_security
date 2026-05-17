# North Fork Security — Tech Stack

## Project Root

```
/Users/adamgedde/Documents/Claude/Projects/Northfork_Security_Website/
├── assets/              # Original design bundle assets (source of truth for photos)
├── north-fork-security/ # The production Vite app (deploy this)
│   └── ai_context/      # This methodology
├── site/                # Prototype JSX components (design reference only, not production)
├── tokens.css           # Original design tokens (source of truth for CSS vars)
├── North Fork Security.html  # Running prototype (open in browser to see design)
├── Brand One Pager.html      # Brand reference
└── README.md            # Original handoff spec
```

The deployable app lives entirely in `north-fork-security/`. The files outside it are design references.

---

## Application Stack

| Layer | Choice | Version |
|---|---|---|
| Build tool | Vite | 8.x |
| Framework | React | 19.x |
| Language | TypeScript | 6.x |
| Styling | Tailwind CSS | 3.x (see note) |
| Component primitives | shadcn/ui | latest |
| Icons | lucide-react | 0.462.0 (pinned) |
| Form handling | react-hook-form + zod | latest |
| Static server | serve | 14.x |
| Deployment | Railway | — |
| Form capture | Formspree | — |
| Fonts | Inter via Google Fonts | 300–900 |

---

## Key Decisions & Rationale

**Tailwind CSS v3, not v4**
Tailwind v4 was auto-installed by npm; downgraded to v3. Reason: shadcn/ui requires a `tailwind.config.ts` file for its CSS variable bridge, which is a v3 pattern. v4 uses a different config approach and breaks shadcn's component generator.

**lucide-react pinned to 0.462.0**
The design system was built against this version. Icon names and APIs may differ in newer releases. Do not upgrade without auditing icon usage.

**`serve` for Railway, not a custom Express server**
Railway runs Node.js containers, not native static hosts. `serve -s dist -l $PORT` is the simplest production-correct static file server. `vite preview` was rejected because it is not intended for production use.

**No backend**
This is a lead-gen marketing site. The contact form posts to Formspree. There is no database, no auth, no API. If a backend is ever added, revisit the Railway service configuration.

**Railway over Vercel/Cloudflare Pages**
User preference. Railway was explicitly chosen. Vercel and Cloudflare Pages would both work fine technically.

**shadcn/ui over hand-rolled components**
Gives accessible, well-typed form primitives (Input, Select, Textarea, Label) and a Button base that can be extended with variants. The `cta` variant (orange gradient, scale-on-hover) was added manually to `src/components/ui/button.tsx`.

**react-hook-form + zod over uncontrolled HTML forms**
Provides schema validation, typed form data, and a clean `isSubmitting` state for the submit button — all needed for the contact form's UX requirements.

---

## Path Alias

`@/` resolves to `src/`. Configured in both:
- `tsconfig.app.json` → `compilerOptions.paths`
- `vite.config.ts` → `resolve.alias`

---

## CSS Token System

Design tokens live in `src/index.css` as CSS custom properties (HSL triplets, shadcn convention). Tailwind reads them via `tailwind.config.ts` — every `bg-primary`, `text-accent`, `shadow-card`, etc. resolves through this bridge.

Source of truth for tokens: `tokens.css` in the project root (the original design bundle). If tokens ever need updating, update both `tokens.css` and `src/index.css`.

---

## Node Version

**Minimum: Node 20.** Vite 8 requires Node 20.19+ or 22.12+. Railway's default is Node 18, which fails the build. The version is pinned via:
- `.nvmrc` → `20`
- `package.json` → `"engines": { "node": ">=20" }`

---

## What Was Rejected

| Option | Rejected because |
|---|---|
| Next.js | Overkill — no SSR, no routing, no API routes needed |
| Astro | Good fit technically, but team familiarity favors React/Vite |
| Tailwind v4 | Breaks shadcn/ui config pattern |
| Vercel | User prefers Railway |
| Cloudflare Pages | User prefers Railway |
| Hand-rolled form inputs | shadcn gives accessible, typed primitives for free |
| SVG icon sprite / icon font | Lucide direct imports are typed and tree-shakeable |
| Dark mode | Brand has not defined a dark expression; deferred indefinitely |
