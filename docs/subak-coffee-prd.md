# PRD — Subak Coffee Company Profile Demo

**Version:** 1.0
**Date:** 2026-06-06
**Author:** Liggar Prayoga
**Status:** Approved — Ready to Build

---

## 1. Overview

A fictional company profile demo website for **Subak Coffee**, a specialty coffee shop set in Canggu, Bali. This demo serves as a sales tool for Liggar's freelance company profile service — showcasing to real SME coffee shop owners exactly what their business website could look like.

---

## 2. Problem Statement

Coffee shop owners in Bali actively seek website services on platforms like Threads but lack a reference point to evaluate quality and scope. A polished, live demo eliminates hesitation and converts interest into paying clients.

---

## 3. Goals

| Goal | Metric |
|------|--------|
| Demonstrate premium quality | Lighthouse mobile score ≥ 90 |
| Convert demo visitors to leads | WhatsApp CTA visible on every scroll position |
| Showcase Bali-authentic design | Passes the "looks like a real Bali cafe" test |
| Reusable foundation | Other niche demos (villa, spa) built on same codebase |

---

## 4. Brand Identity

| Attribute | Value |
|-----------|-------|
| **Name** | Subak Coffee |
| **Tagline** | *"Grown from the land. Served with purpose."* |
| **Location** | Canggu, Bali |
| **Vibe** | Specialty coffee, earthy, cultural, UNESCO-inspired |
| **Palette** | Terracotta · Deep green · Warm cream · Dark espresso |
| **Typography** | Geist (body) + serif for display headings |
| **Imagery** | Unsplash/Pexels — rice terraces, ceramic cups, wood, morning light |

---

## 5. Target Audience of the Demo

**Primary:** Indonesian coffee shop owners, 22–40yo, active on Threads/Instagram, want to look premium to both local and international customers.

**Secondary:** Expat-run cafes in Bali seeking credibility with Western visitors.

---

## 6. Site Structure

| Attribute | Value |
|-----------|-------|
| **URL** | `demo.liggar.site/subak-coffee` |
| **Type** | Static export (Next.js `output: 'export'`) |
| **Language** | English primary, Bahasa Indonesia phrases for authenticity |
| **Layout** | Single-page, scroll-based |

---

## 7. Pages & Sections

| # | Section | Content | Priority |
|---|---------|---------|----------|
| 1 | **Navbar** | Logo, anchor nav links, WhatsApp CTA button | Must |
| 2 | **Hero** | Full-screen cafe photo, tagline, CTA: "See Our Menu" + "WhatsApp Us" | Must |
| 3 | **About** | Brand story, Subak cultural reference, founding mission, 2–3 highlight stats | Must |
| 4 | **Menu Highlights** | 4 signature items — photo, name, description, price (IDR) | Must |
| 5 | **Gallery** | 6 ambiance photos, 3-column grid layout | Must |
| 6 | **Testimonials** | 3 customer quotes with name + origin (e.g. "Sarah, Australia") | Must |
| 7 | **Location & Hours** | Google Maps embed, opening hours, address, parking note | Must |
| 8 | **Contact** | WhatsApp (primary), Instagram link, email | Must |
| 9 | **Footer** | Logo, tagline, nav links, socials, copyright | Must |
| 10 | **"Want this?" Banner** | Section: *"Like this website? Get one for your business."* → Liggar's WhatsApp | Must |

---

## 8. Technical Specifications

### Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| UI Components | shadcn/ui (Button, Badge, Card, Separator) |
| Icons | @tabler/icons-react |
| Images | next/image with `unoptimized: true` |

### Next.js Config

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  basePath: '/subak-coffee',
  images: { unoptimized: true },
};
```

### Repo & Deployment

```
Repo:    ~/Development/bali-demos/
Deploy:  Vercel → demo.liggar.site
Route:   demo.liggar.site/subak-coffee
```

### Folder Structure

```
bali-demos/
├── app/
│   ├── page.tsx                    ← Hub: showcase all demos
│   └── subak-coffee/
│       └── page.tsx                ← Subak Coffee demo
├── components/
│   └── demos/
│       └── subak-coffee/           ← All Subak Coffee components
│           ├── navbar.tsx
│           ├── hero.tsx
│           ├── about.tsx
│           ├── menu.tsx
│           ├── gallery.tsx
│           ├── testimonials.tsx
│           ├── location.tsx
│           ├── contact.tsx
│           ├── footer.tsx
│           └── whatsapp-cta.tsx    ← Floating + inline CTA
├── public/
│   └── demos/
│       └── subak-coffee/           ← All images for this demo
├── next.config.ts
└── tailwind.config.ts
```

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance (mobile) | ≥ 90 |
| LCP | < 2.5s |
| Image format | WebP via Unsplash, compressed |

### WhatsApp CTA URL

```
https://wa.me/62XXXXXXXXXX?text=Hi%2C%20I%20saw%20your%20Subak%20Coffee%20demo%20and%20I%27m%20interested%20in%20a%20website%20for%20my%20business
```

Replace `62XXXXXXXXXX` with Liggar's actual WhatsApp number.

---

## 9. Content Spec

### Hero
- **Photo:** Full-viewport Bali cafe interior — warm light, wooden surfaces, ceramic cups
- **Headline:** Subak Coffee
- **Subheading:** *"Grown from the land. Served with purpose."*
- **Location badge:** Canggu, Bali
- **CTAs:** "Explore Menu" (scroll) · "WhatsApp Us" (link)

### About
- **Story:** Inspired by the ancient Subak irrigation system — a philosophy of balance, community, and care applied to every cup.
- **Stats:** Est. 2022 · 50+ Beans Sourced · Canggu's Favorite Local Spot

### Menu Highlights (fictional)

| Item | Description | Price |
|------|-------------|-------|
| Subak Signature Latte | Local Kintamani beans, palm sugar, oat milk | IDR 48.000 |
| Cold Brew Terraces | 18-hour steep, served over rice stone ice | IDR 42.000 |
| Bali Sunrise Pour Over | Single origin Flores, light roast | IDR 55.000 |
| Coconut Matcha | Ceremonial grade matcha, fresh coconut milk | IDR 45.000 |

### Testimonials (fictional)

| Quote | Name | Origin |
|-------|------|--------|
| "Best coffee I had in Bali. The vibe, the people, the beans — everything." | Sarah M. | Melbourne, Australia |
| "Tempat favorit saya tiap pagi di Canggu. Kopinya bener-bener enak!" | Budi R. | Jakarta |
| "Subak has the soul of Bali in every cup. I came back every day for two weeks." | James K. | Amsterdam |

### Location & Hours

```
Jl. Batu Bolong No. 47, Canggu, Badung, Bali 80351

Monday – Friday   07:00 – 22:00
Saturday – Sunday 07:00 – 23:00

Free parking available. 5 min walk from Batu Bolong Beach.
```

---

## 10. Design Direction

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAF7F2` (warm cream) | Page background |
| Primary | `#2D5016` (deep green) | Buttons, accents |
| Accent | `#C4622D` (terracotta) | Highlights, hover states |
| Text | `#1C1209` (dark espresso) | Body copy |
| Muted | `#8C7355` (warm brown) | Secondary text |

### UI Rules
1. **Hero must stop the scroll** — full viewport, dark overlay on photo, large display heading
2. **WhatsApp button is always one tap away** — floating button on mobile, in navbar on desktop
3. **Gallery is the proof** — only high-quality, authentic Bali cafe aesthetics from Unsplash

### Image Sources (Unsplash search terms)
- `bali coffee shop interior`
- `specialty coffee ceramic cup`
- `canggu cafe morning`
- `kintamani coffee beans`
- `rice terraces bali`
- `wooden cafe table tropical`

---

## 11. "Want This?" Conversion Banner

Place as the second-to-last section before footer:

> **Want a website like this for your business?**
> I build professional company profile websites for Bali SMEs — delivered in 7 days.
>
> [WhatsApp Liggar →]

Style: warm background (terracotta or deep green), high contrast, single CTA button.

---

## 12. Non-Goals (Out of Scope)

- Online ordering or payment integration
- Real booking / reservation system
- CMS or editable content by client
- Authentication of any kind
- Real Subak Coffee business data

---

## 13. Future Demos (Same Repo)

| Demo | Route | Status |
|------|-------|--------|
| **Subak Coffee** | `demo.liggar.site/subak-coffee` | **This PRD** |
| Hub / Showcase | `demo.liggar.site` | Next |
| Villa (TBD) | `demo.liggar.site/villa-name` | Future |
| Spa / Wellness (TBD) | `demo.liggar.site/spa-name` | Future |
| Tour Operator (TBD) | `demo.liggar.site/tour-name` | Future |

---

## 14. Success Criteria

- [ ] Site live at `demo.liggar.site/subak-coffee`
- [ ] Mobile Lighthouse score ≥ 90
- [ ] WhatsApp CTA functional with Liggar's pre-filled message
- [ ] Looks convincingly like a real operating Bali cafe website
- [ ] Liggar can share the link in a Threads reply within seconds
- [ ] "Want this?" banner is visible and linked correctly
