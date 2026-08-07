# Build prompt — MBB V2 Landing Page

Paste this whole thing into your coding tool (e.g. Cursor) with the `MBB V2` folder open as the project root.

---

You are building a single landing page for a brand called **Meaning Beyond Brands**. Read `MBB-V2-Landing-Page-Design-Brief.md` in this folder first — it is the source of truth for content, layout, behaviour and rules. Everything below restates the key points so you can start immediately, but the brief file is the tie-breaker if anything conflicts.

## Hard constraints

1. **This build is self-contained.** Do not read from, reference, or link to any folder outside `MBB V2`. Every asset you need is already inside `MBB V2\Assets\` (including `MBB V2\Assets\Brand\` for the logo and typography reference). If something seems to be missing, say so — don't reach outside this folder.
2. **Plain, static site.** Build `index.html`, `style.css`, and `script.js` in the project root — no framework, no build step, no bundler. It should open directly via a local file or a simple static server, and deploy the same way.
3. **One page, deliberately small.** No routing, no extra sections beyond what's specified below.

## Tech / fonts

Load Google Fonts via this link in `<head>` (this is an external CDN URL, not a dependency on the old project):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

- Serif (headline, wordmark, card titles): **Cormorant Garamond**
- Sans-serif (body copy, small labels): **Jost**

## Palette (CSS custom properties)

```css
:root {
  --dark-olive: #33413A;
  --body-green: #63705F;
  --muted-gold: #B8934A;
  --dark-gold: #9C7A3C;
  --bg-sage: #E2EAE2;
  --card-sage: #D3DED0;
  --ivory: #F4F7F2;
}
```

Gold (`--muted-gold` / `--dark-gold`) is an **accent only** — the star mark, the wax seal, thin rule lines, tiny details. The page should read primarily as olive/sage/ivory. Do not use gold for large fills, buttons, or backgrounds.

## Page structure (in this exact top-to-bottom sequence, all within the first viewport on desktop)

1. **Star mark** — use `Assets/Brand/mbb-star-logo.png` (currently has a white background; treat as needing `mix-blend-mode: multiply` or a manual cutout — flag this to Richard rather than silently faking a fix if it looks wrong against the page background).
2. **Wordmark** — "Meaning Beyond Brands" as real text, serif, small tracked caps or similar restrained treatment (see `Assets/Brand/mbb-full-lockup-reference.png` for the type spirit, not for exact reuse — that's a circular badge, not the layout we want here).
3. **Headline** — "Loyalty isn't bought anymore. It's felt."
4. **One-line explanation** — "We connect the people companies value with the people brands want to reach."
5. **Invitation gateway** — the two envelopes, side by side, described below.

This whole stack must fit in one viewport on desktop without scrolling. Keep it spacious — generous negative space, not cramped. Background: `Assets/bg-paper-texture-sage.png`, tiled or cover-fit full page.

Minimal footer below the fold: "Meaning Beyond Brands · Dubai · contact · legal links" (plain text links, small, quiet — not a nav bar).

## Invitation gateway — the core interaction

Two objects, identical scale, aligned baselines, symmetrical spacing on either side of centre. Check visually that the light (sage) one doesn't look bigger/heavier than the dark (olive) one at the same pixel size — adjust shadow/contrast on the light card if it does.

Each object is **two stacked layers**:
- **Envelope layer** (bottom, foreground of the stack visually, static, never animates)
- **Card layer** (behind/inside the envelope opening, animates vertically)

### Corporate (dark olive)
- Envelope: `Assets/envelope-sealed-green.png` **as a temporary placeholder only** — see Asset placeholders note below.
- Card: `Assets/card-corporate-closed.png` **as a temporary placeholder only**.
- At rest: card partially visible, "Corporate" readable above the envelope edge.
- On hover/focus: card rises ~20–25% of its own height further out of the envelope. Envelope does not move. Reveal copy fades/slides in: **"Discover rewards designed to be remembered."**
- Click anywhere on the object → routes to `/corporate` (placeholder link/anchor is fine for now).

### Brands (light sage)
- Envelope: `Assets/envelope-sealed-cream.png` **as a temporary placeholder only**.
- Card: `Assets/card-brands-closed.png` **as a temporary placeholder only**.
- Same behaviour as Corporate. Reveal copy: **"Discover a more meaningful way to reach the right people."**
- Click → routes to `/brands` (placeholder link/anchor for now).

### Asset placeholders — important

The final production assets are **not ready yet**:
- The envelopes should ultimately be open at rest (card already partially visible, no wax seal to "break"), on a transparent background, so they can sit cleanly over the page's own background.
- The card should ultimately be blank artwork (paper texture/edge/optional fine gold rule only) with "Corporate"/"Brands" and the reveal copy rendered as real HTML text on top, not baked into the image (this matters for accessibility and for editing copy later).

Until those arrive, build the full interaction and animation system now using the current placeholder images, but:
- Put the card title and reveal copy in real HTML elements positioned over the card image immediately — don't wait for the blank card to do this part correctly, since it's the accessibility-critical piece.
- Structure the CSS so swapping `envelope-sealed-green.png` → the future open-envelope PNG, and `card-corporate-closed.png` → the future blank card PNG, is a one-line asset-path change, not a rebuild.
- Leave a clear `/* TODO: swap placeholder art once final transparent-background assets land */` comment at each swap point.

## Animation details

- Card translateY only, no envelope movement.
- Slow, "expensive" easing (e.g. `cubic-bezier(0.22, 1, 0.36, 1)` or similar — avoid bouncy/springy curves).
- ≤1° rotation, if any at all — err toward none.
- Small shadow intensification as the card rises.
- Smooth return to rest when pointer leaves / focus moves away.
- Respect `prefers-reduced-motion: reduce` — when set, skip the translate/tilt entirely and just fade the reveal copy in, or show it at rest. Page must stay fully usable either way.

## Interaction states

- **Desktop:** hover triggers the rise + reveal.
- **Keyboard:** envelopes are focusable (`tabindex="0"` or a real `<a>`/`<button>`), focus triggers the same raised state as hover, a visible focus outline distinct from hover, `Enter`/`Space` navigates.
- **Touch/mobile:** no two-step tap. Use the `:active` state to raise the card on press; releasing the tap in place navigates normally, same as a standard link tap.

## What NOT to build

No "How it works," About, case studies, services, testimonials, long navigation, or multiple CTAs. No card-style UI containers (drop shadows on rectangles, rounded app panels), no gradients, no glassmorphism. The page should feel tactile, physical, and calm — like receiving an invitation, not browsing a SaaS homepage.

## Deliverable

`index.html`, `style.css`, `script.js` in `MBB V2`, referencing only files inside `MBB V2\Assets\`. Should look correct and be fully interactive when opened locally, with the placeholder-asset TODOs clearly marked for the follow-up pass once final art arrives.
