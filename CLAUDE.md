# CreatorPort

## Projekt
creatorport.com.hk — AI Robotics Camp Website fuer Kids (6-12) in Hong Kong.
Astro Static Site mit Stripe Payment Integration.

## Tech Stack
- Astro (Static Site Generator)
- Hosting: GitHub Pages (auto-deploy von main)
- Stripe: Payment Link + Checkout-Zwischenseite
- Google Ads: Conversion Tracking (Tag AW-18308725750)

## Seiten
- `src/pages/index.astro` — Homepage (Stacked Cards Design)
- `src/pages/checkout.astro` — Buchungs-Zwischenseite (→ Stripe Payment Link)
- `src/pages/success.astro` — Payment-Erfolgsseite (Conversion-Tracking)
- `src/pages/mars-rover.astro` — EK10 Produktseite
- `src/pages/location.astro`, `our-story.astro`, `about-us.astro`
- `src/pages/privacy.astro`, `terms.astro`

## Stripe Integration
- Account: Space of Possibilities Limited (`acct_1TqvabAE6ycsHd2D`) — LIVE
- Produkt: Mission Mars Summer Camp (`prod_UqreNdu6MWh3Hh`) — HK$3,500
- Payment Link: `https://buy.stripe.com/dRmaEWa9KaRMgTZ7hz4c800`
- Preis-ID: `price_1Tr9vcAE6ycsHd2DX88BL49s`
- Testpreis: `price_1Tr9zgAE6ycsHd2Ds9WnkNYD` (HK$4)
- MCP Setup: `claude mcp add --transport http stripe https://mcp.stripe.com/`
- Vollstaendige Keys/Secrets/Code: siehe Memory `stripe-integration.md`

## Code-Konventionen
- Inline CSS in Astro-Dateien (kein externes Stylesheet)
- Kein Backend — rein statisch mit Stripe Payment Links
- Alle Seiten mit OG/Twitter Card Tags
- Google Ads gtag auf allen Seiten

## Commit-Format
- `feat:` / `fix:` / `refactor:` / `docs:`
- Session-Report: `docs: daily report YYYY-MM-DD`

## Session-Report Pflicht
Am Ende jeder Session: `docs/sessions/YYYY-MM-DD.md` in Kantonesisch erstellen.
Details in Memory MEMORY.md.
