# Build prompt: MBB V2 Corporate + Brands skeletons

Paste this whole thing into your coding tool (e.g. Cursor) with the `MBB V2` folder open as the project root.

---

You are building two new pages, `corporate.html` and `brands.html`, for the Meaning Beyond Brands site. Read `MBB-V2-SHARED-ARCHITECTURE.md` in this folder first: it is the full source of truth for structure, theme, content rules and motion. Read `COPY-NEEDED.md` next: it has the complete, final copy pack. Everything below restates the key points so you can start immediately, but those two files are the tie-breaker if anything conflicts.

**Status as of 2026-08-07: this is no longer a skeleton build, the copy and image pack is complete.** Every section on both pages has final copy and real images (gallery, hero, founder headshots), nothing is placeholder. If any future round introduces a genuinely new gap, flag it clearly rather than inventing content, but as of this update there are none.

**Copy pack is complete as of 2026-08-07.** Hero, The Shift, How It Works, Experiences, Why MBB, About, Closing, and Footer all have final copy below and in `COPY-NEEDED.md`, on both themes. Founder bios are final and tightened, not draft text.

**Style rule for all copy: no em dashes.** Use periods, commas, or colons instead. This applies to anything you write or edit, not just what's quoted below.

## Hard constraints

1. **This build is self-contained and blind.** Do not read from, reference, or link to anything outside `MBB V2`. Everything you need is in `MBB V2\Assets\`.
2. **`index.html` (Landing) already exists and works. Do not break it.** It's the invitation-envelope gateway, built earlier, and stays as-is. `style.css` and `script.js` currently serve Landing only. **Extend them, don't rewrite them:** add new theme-scoped rules and new component/motion code for Corporate/Brands alongside what's already there for Landing, so all three pages keep sharing one stylesheet and one script file per the architecture doc's technical approach (section 9).
3. **Plain, static site.** No framework, no build step, no bundler, same as the rest of this project.

## Two reference files to build from

Richard's two previously-shared HTML drafts (a "Corporate/general" page and a "For Luxury Brands" page) were the original starting material. **As of 2026-08-07, only the Brands draft was ever received and processed:** its How It Works and Why MBB body copy, founder bios, and three gallery photos were extracted from it and are final, inserted directly below and into `COPY-NEEDED.md`, with the gallery/headshot images saved as real files in `Assets\Experiences\` and `Assets\About\`. **The Corporate draft never arrived.** Instead, Corporate's How It Works and Why MBB body lines were written directly to match Corporate's already-locked voice (Hero, The Shift) and approved by Richard on 2026-08-07. They're marked final below, use them as-is, the build no longer depends on that missing file.

## Fonts

Neither draft actually loads the brand fonts. Fix this now. Add to `<head>` of both new pages:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

Serif (headings): Cormorant Garamond. Sans-serif (body/labels): Jost.

## Theme system

`<body class="theme-corporate">` on `corporate.html`, `<body class="theme-brands">` on `brands.html`. Scope CSS custom properties to each class so the palette inverts:

| | Corporate | Brands |
|---|---|---|
| Primary background | Dark olive `#33413A` | Ivory `#F4F7F2` / pale sage |
| Main text | Ivory | Dark olive |
| Secondary surfaces | Deeper/mid olive | Sage `#D3DED0` |
| Cards | Ivory / pale sage | Olive / ivory |
| Gold (`#B8934A` / `#9C7A3C`) | Accent only | Accent only |

Every shared component (section layout, cards, header, footer) should work correctly under either class without duplicated CSS. Only the variable values differ.

## Page structure (identical on both pages, content differs)

Persistent header, then seven sections, then footer. Only Hero is full-height (`100vh`/`100svh`); every other section sizes to its content. Do not force 100vh on every section, that's the biggest single problem with the reference drafts.

**Header (persistent, not just at top):** MBB star + "Meaning Beyond Brands" left. Right: "For Brands →" (on `corporate.html`, links to `brands.html`) or "For Companies →" (on `brands.html`, links to `corporate.html`). On hover, the link's colour previews the inverse theme's palette. No click-triggered colour-inversion wipe yet, that's backlog. **No hamburger/menu icon at any breakpoint, including mobile.** The header is exactly these two elements everywhere, confirmed 2026-08-07.

**01 Hero:** **layout is a split panel, not a full-bleed image with overlaid text.** Left ~40-45% reads as a solid theme-coloured panel holding the wordmark/header area, large headline, a thin gold rule, and the support line; right ~55-60% is the hero photograph, edge-to-edge to the viewport edge.

**Hero photography, final as of 2026-08-07.** Clean, text-free photography, no crop-from-mockup workaround needed anymore. Technique: use the full landscape image as the background of the *entire* hero section (both the text-panel and photo-panel areas together), `background-size: cover`, `background-position: center`. This scales the whole file up to fill the hero width, giving better effective resolution than cropping just the right half would, especially on large desktop screens. Then layer the text panel on top as a solid `~40-45%`-width div in the theme's panel color, holding the real HTML text. The image already has matching blank space built into its left portion, so there's no visible seam. On mobile, use the portrait version of each image as the mobile hero background, same technique.

- **Corporate:** desktop `Assets\Hero\hero-corporate-candidate-split.png` (1672x941), mobile `Assets\Hero\hero-corporate-candidate-portrait.png` (941x1672). Dark olive scene, hands exchanging a wax-sealed MBB envelope, small gold star top-left.
- **Brands:** desktop `Assets\Hero\hero-brands-candidate-split.png` (1672x941), mobile `Assets\Hero\hero-brands-candidate-v2.png` (941x1672). Ivory/marble scene, ribboned MBB gift box + leather MBB journal, small olive branch.

**Corporate, fully final, build with this now:**
- Headline: "The best people deserve more than another reward."
- Support line: "We create meaningful reward experiences that recognise, inspire and strengthen your people."

**Brands, fully final, build with this now:**
- Headline: "The right introduction can change everything."
- Support line: "We create meaningful connections between premium brands and the clients they most want to reach."

**Hero closing line:** short strapline under the photo, capping off Hero before the visitor scrolls into 02 The Shift. One per theme, not repeated elsewhere on the page:
- Corporate: "Building reward partnerships that make a lasting impact."
- Brands: "Building meaningful connections that create lasting impact."

**Section 01 Hero has no remaining TODOs on either theme.**

Motion, both themes: on load, the photo panel settles from `scale(1.025)` to `1`; the headline reveals through a clean clipping mask; the MBB star gets one subtle one-time gold-light pass (not looping); the photo responds to pointer movement by ~3-5px. Respect `prefers-reduced-motion`, skip the settle/parallax, keep everything visible and legible without it.

**02 The Shift, final copy, both themes, locked 2026-08-07:**

Corporate:
> THE SHIFT
>
> Recognition has become routine. Feeling valued shouldn't.
>
> Bonuses, vouchers and gifts all have their place. But the people who contribute most remember how recognition made them feel.
>
> Meaning Beyond Brands turns reward into a considered experience: personal, memorable and designed to strengthen the connection between your people and the company they help build.

Brands:
> The boutique doesn't compete with other boutiques anymore. It competes with the couch.
>
> Convenience has won the transaction. It has not won desire.
>
> Bain's recent luxury research supports the broader argument: personal luxury goods weakened in 2024 while consumers increasingly prioritised experiences over products. Bain separately estimated the personal luxury goods market would erode by around 2% that year.
>
> The opportunity isn't simply to reach more people. It's to give the right people a reason to enter your world: to feel welcomed, understood and connected to the brand beyond the purchase.

Note: drop the reference draft's "first contraction in 15 years" claim entirely. It isn't tied to a located Bain source. Only the two data points quoted above are used.

**03 How It Works:** 4 steps, title + one line each, per theme.

**Brands, fully final, extracted from the reference draft 2026-08-07 (em dashes removed, use verbatim):**
1. **We map the moment.** Together, we identify the key moments or timings throughout the year.
2. **We design the experience.** A curated activation built around your brand's world: private, hosted, and true to your identity and brand guidelines.
3. **We deliver, end to end.** Full coordination of guest experience and logistics. You approve, we execute.
4. **The moment becomes the memory.** An experience your audience associates with your brand long after it ends.

**Corporate, fully final, drafted 2026-08-07 to match Corporate's locked voice, approved by Richard, use verbatim:**
1. **We map the calendar.** Together, we identify the moments across the year that deserve real recognition, from milestones to standout performance.
2. **You select the experience.** A curated shortlist matched to the moment and your people, considered and true to your company's culture.
3. **We deliver, end to end.** Full coordination of the experience and logistics. You approve, we execute.
4. **The moment stays with them.** A recognition experience your people remember long after the reward itself.

**04 Experiences (the gallery):** this is WOW 2. The three proof photos are now real image files, already extracted and saved at `Assets\Experiences\gifting-suite.jpg`, `Assets\Experiences\private-breakfast.jpg`, `Assets\Experiences\heritage-walkthrough.jpg`. Reference these paths directly on both pages, don't re-embed base64 and don't re-extract, they're already done (Richard has approved this photography at the larger gallery scale, no reshoot needed).

**Final names, order, and per-theme captions, locked 2026-08-07** (order goes tangible, then hosted, then immersive):

| # | Experience | Corporate caption (recipient's side) | Brands caption (brand's side) |
|---|---|---|---|
| 01 | Curated Gifting Suite | A considered reward, chosen and presented with care. It feels personal, not routine. | A tactile introduction to your brand, placing product and story directly into the hands of a carefully selected audience. |
| 02 | Private Breakfast | An intimate hosted experience that gives your people access, attention and a story worth remembering. | A private setting for genuine conversation with potential clients, away from the noise of a conventional campaign. |
| 03 | Heritage Walkthrough | A rare opportunity to step inside a brand's world: its craft, history and the details usually hidden from view. | Bring guests inside the world behind the brand, turning heritage and craftsmanship into a personal connection. |

Desktop: one large image at ~55-60% of the viewport width, copy beside it, three states that crossfade/slide as the visitor scrolls through a short sticky section. Build this with plain CSS + IntersectionObserver only. **Guardrail: if you can't keep the sticky transition smooth and predictable that way, fall back to a plain stacked editorial image/copy sequence. Do not reach for an animation library to force it to work.** Mobile always gets the simple swipe/stack version, never the sticky/pinned one.

**05 Why MBB:** 5 cards, title + one line each, per theme.

**Brands, fully final, extracted from the reference draft 2026-08-07 (em dashes removed, use verbatim). "Backed by the Data" is dropped from the source draft's 6:** it's not a customer benefit, the Bain point already lives in The Shift, and it would date quickly as a citation-dependent card.
- **New Customer Segments:** We open your brand to audiences it hasn't reached yet, introduced through experience, increasing revenue for the brand.
- **Loyalty Through Experience:** Retention isn't won with repetition. It's won with moments people don't want to miss.
- **Deep Market Access:** Direct relationships across UAE corporate and financial entities and high-net-worth networks.
- **Full Activation Management:** Venue, guest experience, and logistics, managed end to end.
- **Local Expertise:** 30+ years of combined experience across the UAE corporate and luxury landscape.

**Corporate, fully final, drafted 2026-08-07 to match Corporate's locked voice, approved by Richard, use verbatim:**
- **Long-Term Vision:** We build reward partnerships that grow with your calendar, not one-off gestures forgotten by next quarter.
- **Zero Logistics Burden:** Venue, guest experience, and logistics, managed end to end, so your team can focus on the people, not the planning.
- **Genuinely Exclusive Access:** Direct relationships that open doors a standard rewards catalogue can't. Real access, not a voucher.
- **Built for Retention:** Retention isn't won with another bonus. It's won with moments your people remember and want to earn again.
- **Local Expertise:** 30+ years of combined experience across the UAE corporate and luxury landscape.

**06 About MBB:** must be **one neutral section, byte-for-byte identical on both pages**, same founders, same company story, no audience-specific language. Final copy, locked 2026-08-07:

> Meaning Beyond Brands operates between the corporate and luxury worlds, built around a simple belief: the strongest relationships are created through moments that feel personal, considered and difficult to replicate.
>
> We bring companies, premium brands and carefully selected audiences together through experiences designed to create recognition, connection and long-term value, managing the relationship from introduction through to delivery.

Founder credits and bios, final as of 2026-08-07, use verbatim on both pages:

- **Swarnaleka Shetty Vyas, Co-Founder & CCO:** 25+ years of executive leadership across sales, distribution and commercial strategy in India and the Middle East, including senior roles at Zurich International Life, HSBC and Aviva. Recognized among the Middle East's Most Inspirational Women in Leadership, 2022 to 2025.
- **Ana Manjavacas Abad, Co-Founder & CEO:** 5+ years in the UAE as the main point of contact in Dubai for high-net-worth individuals relocating from Europe. A professional interpreter fluent in three languages, LVMH certified, and a branding and marketing expert.

Headshots are real files, already saved at `Assets\About\founder-swarnaleka-shetty-vyas.jpg` and `Assets\About\founder-ana-manjavacas-abad.jpg` (from the Brands draft, which is the only one with headshots). Use this same pair on both `corporate.html` and `brands.html`, since the About section is shared and neutral.

**07 Closing:** CTA headline (Corporate: "Let's design your next reward moment." / Brands: "Let's design your brand's next unforgettable moment.") + contact email `hello@meaningbeyondbrands.com`. Both already final, reuse as-is.

**Footer:** "Meaning Beyond Brands FZ-LLC · Ras Al Khaimah, UAE" (middle dot, not em dash; confirmed correct location, not Dubai). **No legal links for now.** If Privacy/Terms pages don't exist yet, leave them out of the footer entirely rather than linking to `#`. A missing link reads as unfinished-but-honest; a dead link reads as broken. Add them once those pages are real.

## Motion (exactly three signature moments + one ambient detail, nothing else)

- **Invitation-card rise** lives on Landing only (`index.html`), already built, don't touch it here.
- **Cinematic hero depth** (section 01 above), Corporate/Brands only.
- **Experience gallery transition** (section 04 above), Corporate/Brands only.
- **Ambient cursor glint (Corporate/Brands, desktop only):** replace nothing that exists yet, this is new. Very sparse champagne/ivory glints near the pointer, an occasional tiny MBB 8-point-star reflection, short lifespan, almost no travel. **Hard rule: never more than one visible glint near the pointer at a time; the star glint is occasional, not on every movement.** This should read as barely-there material atmosphere, not a sparkle trail.

**Do not build:** floating particles, continuous shimmer/glitter loops, card bounce/tilt-on-every-hover, click-burst particles, animated headline shimmer, card shine effects, or the header colour-inversion wipe (backlog). All of these appeared in the reference drafts and are being deliberately cut.

Respect `prefers-reduced-motion` throughout. Every motion effect above needs a static, fully legible fallback.

## Mobile

Priority, not an afterthought. Compress/responsive-size all imagery. Collapse Why MBB and How It Works into a tighter single-column layout rather than one full-width card per row. Experience gallery drops to swipe/stack (section 04). Both pages should be noticeably shorter and lighter on a phone than the reference drafts were.

## Accessibility

All section/card copy is real HTML text, never baked into images. Keyboard-focusable interactive elements (header links, gallery controls if any) with visible focus states distinct from hover.

## Deliverable

`corporate.html` and `brands.html` in `MBB V2` root, both referencing the extended `style.css`/`script.js` (Landing's existing behaviour untouched), with the extracted experience, hero, and headshot images already in place under `Assets\`. As of 2026-08-07, both pages are content-complete, the only remaining `TODO` is the transparent-background star logo. If any future round introduces a genuinely new gap, mark it with a clearly labeled `TODO` comment rather than inventing content, same convention as before.
