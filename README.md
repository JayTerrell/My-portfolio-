# My brain is my brand.

Personal portfolio for Jay Terrell, systems thinker. Built with [Astro](https://astro.build) and [Lenis](https://github.com/darkroomengineering/lenis).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Deploys as a static site on Vercel, Netlify, Cloudflare Pages, or GitHub Pages with no extra config. Set `site` in `astro.config.mjs` to your domain first.

## Edit the content

All content lives in `src/data`. Pages read from these files, so you rarely need to touch markup.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, email, socials, waitlist form endpoint, legal entity |
| `disciplines.ts` | The seven disciplines and all 21 Bridge Engine pairings |
| `experience.ts` | Corporate roles, outcomes, toolkit (placeholders now) |
| `platforms.ts` | Products and platforms you built, plus demo video or embed |
| `research.ts` | Data studies and chart data (**sample data now**) |
| `papers.ts` | Papers and essays, PDF links (sample entries now) |
| `books.ts` | Library (starter list, replace with your own reads) |
| `products.ts` | Knowledge products, prices, checkout links (placeholders) |

Before launch: replace every placeholder, set a real email, connect a waitlist endpoint, and have `src/pages/terms.astro` and `src/pages/privacy.astro` reviewed by a lawyer.

## Design system

- Midnight ink background, warm ivory text, one family of blues. No pure white.
- Fraunces (display), IBM Plex Sans (body), IBM Plex Mono (labels, data).
- Sharp corners, hairline borders, no drop shadows.
- Gradients are linear and low contrast. Glass is a light frost on the nav, Bridge Engine panel, and chart tooltips.
- Motion: Lenis inertia scrolling, subtle page transitions (Astro view transitions), fill wipe and press settle on buttons, scroll reveals. All of it switches off under `prefers-reduced-motion`.
- Skeleton loaders on charts, demo frames, and book covers.

Tokens live at the top of `src/styles/global.css`.
