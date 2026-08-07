# MBB V2 — Landing Page Design Brief

**Status: locked — concept finished, moving to production**
Last updated: 2026-08-07

## Purpose

Create a very simple, high-end gateway into the two sides of Meaning Beyond Brands.

The landing page should establish the brand and its core idea, then allow the visitor to choose whether they are visiting as a company or as a brand.

The experience should feel more like receiving a private invitation than navigating a conventional corporate website.

Brand name is fixed: **Meaning Beyond Brands**.

## 1. Above-the-fold composition

On desktop, the hero and the invitation gateway sit **in the same first viewport**. The invitation mechanic is the main event — visitors should never have to scroll to discover it.

Visual sequence, top to bottom (this is order, not a size hierarchy — the invitations remain the dominant visual objects on the page):
1. Star mark
2. "Meaning Beyond Brands" wordmark
3. Headline
4. One-line explanation
5. The two invitations

Composition should feel balanced, spacious and editorial — not a stack of equally-loud elements.

## 2. Hero

**Brand**
Meaning Beyond Brands

Use:
- existing MBB star mark
- established serif-led typography
- sage / olive / ivory / muted-gold visual language
- restrained luxury styling

**Headline**
Loyalty isn't bought anymore. It's felt.

**Introductory copy** (one short statement only — this is the "who we are," no separate About section) — locked:
> We connect the people companies value with the people brands want to reach.

Twelve words, covers both sides, leaves the deeper proposition for the destination sites. No alternate under consideration.

## 3. Invitation Gateway

Two large invitation-envelope objects, identical geometry, scale, and equal visual weight — aligned baselines, symmetrical spacing either side of centre. At the same pixel size the light (sage) envelope can read as visually larger/lighter than the dark (olive) one; weight, not just dimensions, needs checking once built.

### Corporate
- Dark olive envelope
- Routes to companies building meaningful rewards/recognition for employees or other valued people

**At rest:**
- envelope open, completely stationary
- ivory Corporate card sits partially inside it
- "Corporate" visible above the envelope edge
- gold wax seal carries the MBB compass-star impression

**On hover / focus:**
- card gently rises further out; envelope does not move
- reveal copy becomes visible

Hover copy:
> Corporate
> Discover rewards designed to be remembered.

Click → Corporate website.

### Brands
- Light sage envelope
- Routes to premium/luxury brands wanting access to and relationships with desirable audiences

**At rest:** same geometry as Corporate — ivory Brands card partially visible, "Brands" visible above the envelope, matching gold wax seal.

**On hover / focus:** card gently rises, reveal copy becomes visible.

Hover copy:
> Brands
> Discover a more meaningful way to reach the right people.

Click → Brands website.

## 4. Animation behaviour

Card and envelope are separate layers.
- Envelope: static, never moves
- Card: animated vertically only

Reveal amount is relative to the card, not a fixed pixel range: roughly **20–25% additional card height** revealed on hover/focus.

Motion should be subtle and expensive-looking, not playful:
- slow easing
- ≤1° of tilt, if any
- very small accompanying shadow change
- card returns smoothly when pointer leaves / focus moves away

## 5. Mobile interaction

No two-stage interaction. On touch devices, pressing the invitation briefly raises the card using the `:active` state; releasing the tap navigates normally. Same tactile motion as desktop hover, without requiring the visitor to learn a custom gesture.

## 6. Accessibility

- Envelopes are keyboard-focusable. Tab focus triggers the same raised-card state as hover; `Enter` (or `Space`) navigates.
- Card copy ("Corporate" / "Brands," the reveal lines) exists as real HTML text, not baked into the images — required for screen readers, SEO, and so it can be styled/updated without regenerating art. **This is why the production card asset must be blank artwork only — see Asset Manifest and Production Requirements below.**
- Visible focus state needed (distinct from hover, but can share the raised-card treatment).

## 7. Reduced motion

Respect `prefers-reduced-motion`. When set, remove the slide/rise transition — reveal copy can appear via a simple opacity fade or be shown at rest — but the page must remain fully usable and legible without the animation.

## 8. Nothing else substantial

Deliberately excluded from the landing page:
- How it works
- About us
- Case studies
- Services
- Testimonials
- Long navigation
- Multiple CTAs

These belong on the two destination sites.

At most, a very minimal footer:
Meaning Beyond Brands · Dubai · contact · legal links

## 9. Composition principles

Desktop should feel balanced, spacious and editorial. The two invitation objects are the visual focal point, not decorative illustrations. Generous negative space, restrained shadows, no card-style UI containers around the invitations. Avoid gradients, glass effects, rounded app-style panels, or excessive animation. The page should feel tactile, physical and calm.

## 10. Production requirements

All moving/overlapping image assets must be prepared with clean, transparent backgrounds before implementation. Source artwork may contain studio backgrounds, but those must not appear in the production layers — the real stacking is **card behind an open-envelope foreground**, not a photograph of an envelope sitting on a background.

Card artwork must be blank/generic: paper texture, edge, and (optionally) a fine gold rule only. No baked-in "Corporate" / "Brands" text or reveal copy — that content is HTML/SVG on top of the card, per the Accessibility section above. This also means the same blank card asset can serve both invitations.

**The build works from the `MBB V2` folder only, and must be blind to the original project.** Nothing in the code should read from, link to, or depend on `Meaning Beyond Brands` (the original folder/site). Anything needed from the existing brand has been copied into `MBB V2\Assets\Brand\` instead — see `BRAND-CARRYOVER.md` there for exactly what was carried over and why (star logo, typography/Google Fonts link). Any further brand asset discovered to be missing during the build must be copied into `MBB V2` before use, not referenced from the original folder.

## Asset manifest

| Asset | Status | Purpose |
|---|---|---|
| MBB compass-star logo | Carried over — `Assets/Brand/mbb-star-logo.png` (needs transparent-background pass) | Hero mark + wax impression reference |
| Dark olive open envelope | Complete (per Richard — standalone asset, not the pair image) | Corporate foreground layer |
| Light sage open envelope | Complete (per Richard — standalone asset, not the pair image) | Brands foreground layer |
| Shared blank invitation card | Production version required | Moving card substrate for both invitations |
| Corporate card typography/content | HTML/CSS | Corporate title + reveal copy |
| Brands card typography/content | HTML/CSS | Brands title + reveal copy |
| Page background texture | Complete — `Assets/bg-paper-texture-sage.png` | Full-page paper/canvas texture behind hero + gateway |

**Note on current state (2026-08-07):** the standalone open-envelope files and the blank card haven't landed in the `MBB V2\Assets` folder or this conversation yet — only the earlier batch (closed/sealed envelopes, the pair reference shot, and the text-baked Corporate/Brands cards) has been collected and named so far. Those earlier files are now reference-only per this brief and are not production assets. Richard to supply the two standalone open-envelope images and the blank card (or have them generated) so they can be named, transparent-background-checked, and dropped into the Assets folder before build starts.

## Approved palette

From the existing MBB brand direction. Gold is an accent only — appears in the star, wax seal, fine rules, and small details. It should never become a third dominant colour; the page reads primarily as olive / sage / ivory. Too much gold pushes the feel toward hotel/wedding stationery rather than contemporary luxury.

| Name | Hex |
|---|---|
| Dark olive | `#33413A` |
| Body green | `#63705F` |
| Muted gold | `#B8934A` |
| Dark gold | `#9C7A3C` |
| Background sage | `#E2EAE2` |
| Card sage | `#D3DED0` |
| Light ivory/sage | `#F4F7F2` |

## Next step

Concept is locked. Remaining work is production, not further concept development:
1. Source/receive the standalone open-envelope assets (Corporate + Brands) and the blank invitation card.
2. Prepare all of the above, plus the carried-over star logo, with clean transparent backgrounds.
3. Build the first desktop composition (hero + gateway, HTML/CSS card+text layers, animation) — working entirely from `MBB V2`, no dependency on the original project folder.
