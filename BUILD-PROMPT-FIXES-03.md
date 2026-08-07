# Fix prompt, round 4: Corporate + Brands

Round 3 (hero photo swap point, housekeeping read-through) is done and verified, per your report. Nothing to redo there.

The Brands reference draft has now been received, saved as a real file, and fully extracted. Re-read `COPY-NEEDED.md` and `BUILD-PROMPT-CORPORATE-BRANDS.md` fresh from disk before starting, both were just updated.

## 1. Swap in the three real gallery images (Brands and Corporate)

The three proof/gallery photos are no longer base64 placeholders. They're saved as real files:
- `Assets\Experiences\gifting-suite.jpg`
- `Assets\Experiences\private-breakfast.jpg`
- `Assets\Experiences\heritage-walkthrough.jpg`

Reference these three files directly in the section 04 gallery on both `corporate.html` and `brands.html`, in that order (tangible, hosted, immersive), with the captions already locked in `BUILD-PROMPT-CORPORATE-BRANDS.md` (different caption per theme, same three images).

## 2. Fill in Brands' How It Works body copy (titles were already right)

Insert verbatim under the existing four titles on `brands.html`:

1. **We map the moment.** Together, we identify the key moments or timings throughout the year.
2. **We design the experience.** A curated activation built around your brand's world: private, hosted, and true to your identity and brand guidelines.
3. **We deliver, end to end.** Full coordination of guest experience and logistics. You approve, we execute.
4. **The moment becomes the memory.** An experience your audience associates with your brand long after it ends.

## 3. Fill in Brands' Why MBB body copy (titles and card count stay at 5)

Insert verbatim under the existing five titles on `brands.html`:

- **New Customer Segments:** We open your brand to audiences it hasn't reached yet, introduced through experience, increasing revenue for the brand.
- **Loyalty Through Experience:** Retention isn't won with repetition. It's won with moments people don't want to miss.
- **Deep Market Access:** Direct relationships across UAE corporate and financial entities and high-net-worth networks.
- **Full Activation Management:** Venue, guest experience, and logistics, managed end to end.
- **Local Expertise:** 30+ years of combined experience across the UAE corporate and luxury landscape.

## 4. Add the founder bios and headshots to About (both pages, shared section)

Insert verbatim, same on both `corporate.html` and `brands.html`:

- **Swarnaleka Shetty Vyas, Co-Founder & CCO:** 25+ years of executive leadership across sales, distribution and commercial strategy in India and the Middle East, including senior roles at Zurich International Life, HSBC and Aviva. Recognized among the Middle East's Most Inspirational Women in Leadership, 2022 to 2025.
- **Ana Manjavacas Abad, Co-Founder & CEO:** 5+ years in the UAE as the main point of contact in Dubai for high-net-worth individuals relocating from Europe. A professional interpreter fluent in three languages, LVMH certified, and a branding and marketing expert.

Headshots, use this same pair on both pages:
- `Assets\About\founder-swarnaleka-shetty-vyas.jpg`
- `Assets\About\founder-ana-manjavacas-abad.jpg`

## 5. Still blocked, leave as marked

Corporate's How It Works and Why MBB **body lines** stay TODO. Titles are correct and don't change. Leave a `TODO: body line pending Corporate reference draft` comment under each Corporate step/card. Don't invent this copy.

## 6. Swap in the new hero photography (replaces the cropped stopgap)

New clean, text-free hero photography has arrived for both themes and Richard has approved wiring it in now. This replaces `hero-corporate-photo.jpg` / `hero-brands-photo.jpg` (the temporary crops from round 3) at the swap point already built into `style.css` (the `TODO: swap for clean, text-free, high-res hero photography once available` comment, previously around lines 594 and 623).

**New files, all in `Assets\Hero\`:**
- `hero-corporate-candidate-split.png` (1672x941, landscape): dark olive scene, hands exchanging the wax-sealed MBB envelope, with a built-in blank dark panel on the left ~45-50% and the photograph on the right. Use this for desktop.
- `hero-brands-candidate-split.png` (1672x941, landscape): ivory/marble scene, ribboned MBB gift box + leather MBB journal, with a built-in blank ivory panel on the left ~45-50% and the photograph on the right. Use this for desktop.
- `hero-corporate-candidate-portrait.png` (941x1672, portrait): same Corporate scene, tall crop. Use this for mobile.
- `hero-brands-candidate-v2.png` (941x1672, portrait): same Brands scene, tall crop. Use this for mobile.

**Important, this changes the hero background technique, don't just crop these like the round-3 stopgap did:**

Cropping just the right half of the new landscape images would only yield roughly the same ~840px-wide resolution as the old stopgap crop, since the photograph is only the right portion of a 1672px-wide file, that would waste the extra resolution and reintroduce the exact softening problem round 3 flagged.

Instead: use the **full landscape image** as the background of the entire hero section (both the text-panel area and the photo-panel area combined), with `background-size: cover` and `background-position: center`. This scales the whole 1672px-wide image up to fill the full hero width, so the effective resolution across the visible photo area is meaningfully higher than a half-crop would give, especially on large desktop displays. Then layer the text panel as before: a `~40-45%`-width div on the left, solid in the theme's panel color (dark olive for Corporate, ivory/pale sage for Brands), holding the real HTML text (wordmark, headline, gold rule, support line) exactly as already built. Since the image already has matching blank space built into its left portion, the solid-color div sits cleanly over it with no visible seam. Copy stays real HTML text throughout, nothing is baked into the image.

On mobile, use the portrait images the same way the current mobile hero treatment already works (full-width hero background), swapping in `hero-corporate-candidate-portrait.png` / `hero-brands-candidate-v2.png` in place of whatever mobile crop is currently referenced.

Keep the same `TODO`-comment convention at this new swap point in case Richard wants to swap in a different or higher-resolution set later, but there's no reason to expect that soon, this is real, approved photography.

## 7. Re-verify after applying sections 1 to 6

- Gallery: all three images load and display correctly on both pages, captions match the theme-specific text, order is correct.
- Brands How It Works and Why MBB: body copy renders under the right titles, card/step count unchanged.
- About: founder bios and headshots display correctly and identically on both pages, image aspect ratio and crop look right in the existing `.profile-photo`-style treatment.
- Hero: new photography displays correctly on both themes at desktop (no visible seam between the solid text panel and the photo background) and mobile (portrait crop fills the hero cleanly). Headline still reveals through the clipping mask, photo settle/parallax motion still works, `prefers-reduced-motion` fallback still shows everything static and legible.
- Contrast unaffected by any of this.
- Full read-through of both `corporate.html` and `brands.html` to confirm no stale content slipped in.

## Style reminder

No em dashes anywhere in copy, including anything inserted from this prompt (already checked, the source text had em dashes removed before being added here). Use periods, commas, or colons instead.
