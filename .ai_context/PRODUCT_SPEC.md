# North Fork Security — Product Spec

## What Is Being Built

A single-page marketing website. Its only job is lead generation: explain who North Fork Security is, what they build, who they serve, and route visitors to a site-assessment request form.

No e-commerce, no login, no dashboard, no CMS.

---

## The Business

**Name:** North Fork Security (previously North Fork Technologies — name changed)
**Location:** Minnesota
**In business:** 15+ years
**What they do:** WiFi networks, video security systems, and property monitoring for rural and small-commercial properties across Minnesota
**How they work:** Site assessment → custom design → clean install → ongoing support

---

## Ideal Customer Profile

| Segment | Properties | Key concern |
|---|---|---|
| Farms & Agriculture | Livestock areas, fuel storage, equipment sheds, multi-building spreads | Remote surveillance, weather-resistant hardware, long-range coverage |
| Retail & Small Business | Storefronts, inventory areas, staff/customer zones | Uptime, theft deterrence, insurance documentation |
| Churches & Community Centers | Sanctuaries, parking lots, event spaces | Discreet systems, vandalism prevention, simple operation |
| Financial & Professional Offices | Offices, lobbies, restricted areas | Compliance, incident documentation, controlled access |

Primary traffic source: word of mouth and local referral. Meaningful share of visitors is mobile (phone-first).

---

## Positioning

**One line:** Reliable video security and monitoring for Minnesota properties — designed correctly, supported locally.

**Against:** National security chains (ADT, Vivint) who sell packages, not designs. North Fork does a site assessment first, builds for the actual property, and stays local for support.

**Not:** A tech startup. Not SaaS. Not a monitoring subscription service. A Minnesota crew that has worked on real properties for fifteen years.

---

## Brand & Voice Rules

These are non-negotiable. Read before writing any copy.

- **Every headline is sentence case and ends with a period.** "Video security that actually works." not "Video Security That Actually Works"
- **No emoji. Anywhere.** Use a `w-2 h-2 bg-accent rounded-full` dot instead.
- **No exclamation points.**
- **No marketing-tech vocabulary.** No "revolutionary," "unlock," "seamless," "game-changing."
- **Voice:** confident, plain, declarative. "We" and "your property."
- **CTAs:** "Request a Site Assessment," "Get a Custom Plan," "See How It Works" — never urgency-bait.
- **Approved vocabulary:** NDAA-approved, enterprise-grade, property awareness, full-property coverage, multi-building, site assessment, spectrum analysis, channel planning, clean installs, ongoing oversight.

---

## Sections (in order)

1. **Header** — sticky, backdrop-blur, Shield logo, desktop nav + mobile hamburger
2. **Hero** — gradient + hero photo at 20% opacity, eyebrow, H1, dual CTAs, 4-up stats strip
3. **Video Security** (`#video-security`) — 4 feature cards
4. **Services** (`#services`) — 4 service cards
5. **Industries** (`#industries`) — 4 photo-background cards
6. **Contact** (`#contact`) — contact form + contact info sidebar
7. **Footer** — brand block, Facebook, NDAA/Minnesota trust pills

---

## Stats (approved, final)

| Figure | Label |
|---|---|
| 500+ | properties protected |
| 99.9% | system uptime |
| 24/7 | local support |
| 15+ | years in Minnesota |

---

## Contact Form Fields

- First Name (required)
- Last Name (required)
- Email Address (required)
- Phone Number (optional)
- Property Type (select: Farm / Retail / Church / Office / Other)
- Property Address (optional)
- Message (optional)

On success: swap form for a confirmation state inside the same card. No page reload.

**Form endpoint:** Formspree. Placeholder currently in `src/components/ContactForm.tsx`. Replace with real endpoint before go-live.

---

## Contact Info

- **Phone:** (320) 228-3541
- **Email:** info@northforksecurity.io
- **Service area:** Statewide Minnesota

---

## Assets

All in `north-fork-security/public/`:

| File | Used in |
|---|---|
| `main-street-hero.jpg` | Hero background (20% opacity) |
| `farm-security-hero.jpg` | Industries card — Farms |
| `retail-security.jpg` | Industries card — Retail |
| `church-security.jpg` | Industries card — Churches |
| `financial-security.jpg` | Industries card — Offices |
| `logo-mark.svg` | Favicon |
| `logo-lockup.svg` | Available but not used (brand block uses Lucide Shield instead) |

Five photos is the full set. Do not substitute stock photography. Request new photos from the client for any new sections.

---

## Out of Scope (for this build)

- Blog or news section
- Case studies
- Pricing page
- Customer portal or login
- Dark mode
- Animations on scroll
- Any backend beyond the Formspree form endpoint
