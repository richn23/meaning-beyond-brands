# MBB V2 — Shared Architecture & Theme System

**Status: locked — 2026-08-07, v2 (revised per Richard's 8.5/10 review — supersedes v1 of this document and the "invitation gateway" section of `MBB-V2-Landing-Page-Design-Brief.md`)**

## 0. What changed in this revision

Richard reviewed the first version of this document (8.5/10) and called out four corrections, all incorporated below:

1. **Landing keeps the invitation-envelope gateway.** v1 wrongly retired it in favour of a plain brand-intro + two links. The envelope interaction is MBB's most distinctive piece of branding and stays as the front door — it just no longer spreads into the Corporate/Brands pages themselves.
2. **No triplicated CSS/JS.** v1's "three fully separate files, hand-maintained in sync" was unnecessarily strict. One shared `styles.css` + `script.js`, three HTML files, theme driven by a body class (`theme-corporate` / `theme-brands`) flipping CSS custom properties. Still no framework, no build step — just not needlessly duplicated.
3. **The cursor effect is redesigned, not cut.** v1 lumped the existing cursor sparkle trail in with the effects to remove entirely. Correction: replace it with a restrained branded light-glint (sparse champagne/ivory glints, occasional tiny 8-point MBB-star reflection, short lifespan, almost no travel) — kept as ambient material atmosphere, not a third "WOW" feature.
4. **WOW 2 gets a complexity guardrail.** If the sticky crossfade gallery can't stay smooth and predictable with plain CSS + IntersectionObserver, fall back to a standard editorial image/copy sequence rather than reaching for a heavier animation library.

Everything else from v1 — the seven-section Corporate/Brands structure, the theme inversion, About being one neutral section, Why MBB normalised to 5 cards, mobile/length efficiency as a priority — held up and is unchanged.

## 1. Core concept

One company, three fronts, one design language throughout. **Landing** is the distinctive invitation-envelope gateway already designed — it establishes the brand and lets the visitor choose a side. **Corporate** and **Brands** are a shared seven-section architecture: same components, same journey, inverted theme, audience-specific copy. Landing on the other theme page should read immediately as "same company, other side of the exchange."

## 2. Three fronts

**Landing** (`index.html`) — the invitation-envelope gateway, as already designed and locked in `MBB-V2-Landing-Page-Design-Brief.md` and refined in `VISUAL-CORRECTION-CHECKLIST.md`: star mark, wordmark, headline ("Loyalty isn't bought anymore. It's felt."), one intro line ("We connect the people companies value with the people brands want to reach."), then the two envelope objects (Corporate dark-olive, Brands light-sage) with the card-rise-on-hover interaction, single viewport, no scroll. This does not change — it stays the front door and the site's signature first impression. What changes is only what it leads to: instead of routing straight to old-style destination content, the envelopes now route into the new Corporate/Brands architecture below.

**Corporate** (`corporate.html`) and **Brands** (`brands.html`) — the shared seven-section pages, detailed in section 3.

All three share the same typography, materials, spacing rhythm and motion restraint (section 6) so the whole experience reads as one brand — the envelope gateway isn't a different visual world from the theme pages it opens into, it's the same materials at the front door.

## 3. Shared page structure (Corporate and Brands)

| # | Section | Corporate | Brands |
|---|---|---|---|
| — | Header (persistent) | Star + wordmark left · "For Brands →" right | Star + wordmark left · "For Companies →" right |
| 01 | Hero | Reward/recognition proposition | Luxury/relationship proposition |
| 02 | The Shift | Why conventional recognition isn't enough | Why transaction/convenience isn't enough |
| 03 | How It Works | 4-step reward partnership | 4-step brand partnership |
| 04 | Experiences | What employees/recipients experience | What a brand activation looks like |
| 05 | Why MBB | Corporate benefits — 5 cards | Brand benefits — 5 cards |
| 06 | About MBB | Shared, neutral — identical on both | Shared, neutral — identical on both |
| 07 | Closing | Reward-focused CTA | Brand-focused CTA |

Sections are designed once as components and reused across both pages via shared CSS/JS with theme variables — see section 9 for how the sharing actually works technically.

**Section-height rule:** Hero stays full-screen. Every other section sizes to its own content instead of being forced to 100vh — the current drafts make almost everything full-viewport, which makes a genuinely concise page feel long and repetitive. Let sections breathe naturally.

**Mobile & length efficiency:** a priority, not an afterthought. Every section gets reviewed for what it costs on a phone — large embedded images, multi-column card grids stacked into a long single column, and WOW 2 are the parts most likely to bloat mobile length and weight. Compress/responsive-size all imagery for mobile rather than shipping desktop-resolution assets; collapse multi-card rows (Why MBB, How It Works) into a tighter mobile layout rather than one card per full screen-width row; treat WOW 2's sticky crossfade as desktop-only (mobile fallback in section 6). Corporate and Brands should both feel noticeably shorter and faster on mobile than the drafts Richard sent.

## 4. Theme table

| | Corporate | Brands |
|---|---|---|
| Primary page background | Dark olive `#33413A` | Ivory `#F4F7F2` / pale sage |
| Main text | Ivory | Dark olive |
| Secondary surfaces | Deeper/mid olive | Sage `#D3DED0` |
| Cards | Ivory / pale sage | Olive / ivory |
| Gold | Accent only | Accent only |
| Overall feeling | Executive, assured, private | Editorial, selective, aspirational |

Much stronger inversion than the drafts Richard sent (both light-background variants of the same layout) — full background/text inversion, not just an accent-colour swap. Driven by CSS custom properties flipped via a body class — see section 9.

## 5. Content rules

- **About MBB is one neutral section, used identically on both pages.** Founders, company history, and philosophy don't change depending on which door the visitor entered. Currently the Corporate page's About section contains brand-specific language ("the next era of growth for luxury brands isn't a louder campaign — it's community") that belongs to the Brands proposition — that line and anything like it gets removed when About is rewritten as one neutral piece.
- **Why MBB is normalised to 5 cards on both sides** (Corporate currently has 5, Brands has 6 — drop to 5; 6 starts reading as a feature grid rather than a considered set of reasons).
- **Closing CTAs stay mirrored**, this pairing already works and should be preserved:
  - Corporate: "Let's design your next reward moment."
  - Brands: "Let's design your brand's next unforgettable moment."

## 6. Motion — three signature moments plus one ambient detail

Richard's framing, and the right one: three deliberate motion moments across the full experience, plus a single restrained ambient detail. Not a fourth "WOW" — atmosphere.

**Cut for good:** floating particles, continuous glitter/shimmer loops, cards bouncing/tilting on every hover, click-burst particles, animated gold shimmer on headlines, card shine effects. These are present throughout both drafts Richard sent and read as excessive for the brand.

1. **Invitation-card rise (Landing).** The existing envelope-gateway interaction — card rises ~20–25% of its own height on hover/focus, envelope stationary, slow expensive easing, ≤1° tilt if any. Unchanged from the original locked brief.

2. **Cinematic hero depth (Corporate/Brands).** Editorial composition: large typography + one exceptional image + restrained movement, laid out as a split panel (text block left, photograph right — see section 3 for the finished layout). Corporate: dark olive, an experience image partially emerging from the darkness/paper surface. Brands: the exact inverse composition on ivory/sage. On entry — image settles from `scale(1.025)` → `1`; headline reveals through a clean clipping mask; the MBB star gets one subtle gold-light pass, once, not looping; image responds to pointer movement by roughly 3–5px, barely perceptible. Nothing loops continuously.
   - **Hero-only closing line — final on both themes, confirmed 2026-08-07:** a short strapline under the photo, capping off the Hero section before the visitor scrolls into 02 The Shift. One per theme, not repeated as a motif elsewhere on the page. Corporate: "Building reward partnerships that make a lasting impact." Brands: "Building meaningful connections that create lasting impact."

3. **Experience gallery transition (Corporate/Brands).** Rework the existing three-image "Proof in Practice" section (Gifting Suite / Private Breakfast / Heritage Walkthrough) from a three-card grid into an editorial sticky gallery on desktop: one large image at roughly 55–60% of the screen, copy beside it, three states that crossfade/slide as the visitor scrolls through a short sticky section — no aggressive scroll-hijacking. On Corporate the copy describes what the recipient experiences; on Brands, the same imagery describes what the brand gains/creates. Same experience, different value depending which side you're reading from — the strongest conceptual moment on the site.
   - **Complexity guardrail:** build this with plain CSS + IntersectionObserver only. If the sticky transition can't be kept smooth and predictable that way, fall back to a standard editorial image/copy sequence (no pinning, no crossfade) rather than reaching for a heavier animation library. Protecting the simple build matters more than the polish of this one section.
   - **Mobile:** drop the sticky/pinned mechanic per section 3's mobile-efficiency note — use a simple swipeable or stacked version instead, same three images and captions, lighter mechanism.

**Ambient detail — premium cursor glint (Corporate/Brands, desktop).** Replace the existing glitter-style cursor trail with a restrained branded light-glint: very sparse champagne/ivory glints, an occasional tiny MBB 8-point-star reflection, short lifespan, almost no travel. This is material atmosphere, not a fourth signature moment — it should be easy to miss unless you're looking for it, not something that announces itself the way the current sparkle trail does.
- **Concrete rule for implementation:** never more than one visible glint near the pointer at a time; the MBB-star glint is occasional, not on every movement. This is what actually keeps "sparse" sparse — without it, a developer can technically comply with the description above while still shipping something busy.

Everything else stays quiet: no loops, no idle animation, motion only on entry/scroll/deliberate interaction.

## 7. Persistent header (Corporate/Brands)

- Left: MBB star + "Meaning Beyond Brands"
- Right: theme switch link — "For Brands →" on the Corporate page, "For Companies →" on the Brands page
- On hover, the switch link's colour previews the inverse palette
- **Backlog, not in the initial build:** a brief colour-inversion/wipe transition when the switch is clicked, animating into the other theme. Ship the plain link first; revisit once the base build is solid.
- **No hamburger/menu icon, on mobile either — confirmed 2026-08-07.** Header stays exactly wordmark + theme-switch link at every breakpoint, no section-jump menu, no additional nav. A mobile mockup included one; Richard confirmed it should come out, keeping the header as restrained on mobile as on desktop.

## 8. Carried over unchanged from the original brief

- **"V2 works blind"** — code must never read from or depend on the original `Meaning Beyond Brands` folder. Anything needed from the existing brand lives in `MBB V2\Assets\Brand\` only.
- **Fonts:** Cormorant Garamond (serif) + Jost (sans), Google Fonts CDN — note neither of the two drafts Richard sent actually loads these; both use a Cambria/Calibri fallback stack. Needs correcting when Corporate/Brands are rebuilt against this structure.
- **Accessibility:** section copy exists as real HTML text, not baked into images; keyboard-focusable interactive elements; visible focus states; `prefers-reduced-motion` respected. Applies to Landing's envelope/card copy exactly as originally specified, and to all Corporate/Brands section copy.
- **Base gold values as accent-only** (`#B8934A` / `#9C7A3C`) — still accent only under the theme table in section 4, never a dominant fill.
- **Footer — resolved 2026-08-07:** "Ras Al Khaimah, UAE" is correct (that's where the FZ-LLC is legally based) — the original brief's "Dubai" was wrong. Applies to Landing's minimal footer and to Corporate/Brands footers.
- **New standing content rule, added 2026-08-07: no em dashes in any site copy.** Use periods, commas, or colons instead. Applies to all headline/body/caption copy going forward — see `COPY-NEEDED.md` for the full, already-clean copy pack.

## 9. Technical build approach (revised)

**One shared `styles.css` and `script.js`, three HTML files.** `index.html` (Landing/envelope gateway), `corporate.html`, `brands.html` — all reference the same stylesheet and script. Theme is driven by a body class:

```html
<body class="theme-corporate">
```
```html
<body class="theme-brands">
```

The palette inverts through CSS custom properties scoped to that class (per the theme table in section 4). Shared components — section layout, card styles, animations, accessibility behaviour, responsive rules, typography — live once in `styles.css`/`script.js` and apply to whichever page loads them; only the copy and imagery differ per HTML file. Still plain HTML/CSS/JS, no framework, no build step — just not needlessly duplicated across three files. Page copy stays directly editable in each HTML file, which is what actually matters for how Richard works in Cursor.

**Starting material:** the two HTML documents Richard already shared (Corporate/general draft and the Brands/luxury draft) are the base to build Corporate and Brands from — treat them as guidance rather than final code, extracting shared structure into the common stylesheet/script rather than keeping each page's styles self-contained. Their copy can be reused with minor tweaks (aligned to section 5). The Brands draft's JS/CSS is the better-built of the two (cleaner tilt-transition handling, a dedicated sparkle layer instead of appending to `document.body`, better-tuned particle counts) — use it as the implementation reference for the parts of the interaction system that survive the motion cuts in section 6. Landing has its own existing spec (original brief + correction checklist) and doesn't draw from either draft.

## 10. Asset implications

**Landing keeps its full existing asset requirement** — nothing here changes from the original brief and correction checklist:
- Standalone open-envelope images, transparent background (Corporate dark-olive, Brands light-sage)
- Invitation card substrate — fixed approved artwork; variable title/reveal copy remains HTML
- Transparent-background pass on the MBB star logo
- Envelope/wax-seal construction and background-texture regeneration per `VISUAL-CORRECTION-CHECKLIST.md` — still open, still needed

**New for Corporate/Brands:**
- Hero image, Corporate — an experience image emerging from dark olive/paper surface (motion moment 2)
- Hero image, Brands — inverse composition on ivory/sage (motion moment 2)
- ~~Quality check on the three existing proof images~~ — **approved 2026-08-07**, Richard has confirmed the existing Gifting Suite / Private Breakfast / Heritage Walkthrough photography is good to use at the larger gallery scale, no reshoot needed
- The background paper texture (`bg-paper-texture-sage.png`) may still suit Landing (where it always lived) and/or as a subtle material layer on Corporate/Brands — worth a decision when the rebuild starts, not urgent now

## 11. Open items not yet decided (flagging, not blocking)

- **URLs/filenames:** section 9 assumes `index.html` (Landing), `corporate.html`, `brands.html` — not yet confirmed against how the three are meant to be linked/deployed in production.
- **Envelope routing copy:** the original brief's envelope hover-reveal lines ("Discover rewards designed to be remembered." / "Discover a more meaningful way to reach the right people.") still route to Corporate/Brands — confirm these stay as-is now that what they route *to* has changed substantially from the original destination-site assumption.

## Next step

Architecture is locked. Once ready: generate the two hero images and confirm the envelope/card/seal/background art still outstanding from the original brief (section 10), resolve the Dubai/RAK footer discrepancy and the missing Google Fonts load, then this document plus the two reference HTML drafts becomes the paste-ready brief for the rebuild in Cursor/Claude Code.
