# MBB V2 — Visual Correction: what's code vs. what's art

Splits Richard's visual correction brief (2026-08-07) into what a coding tool can actually fix vs. what needs new/regenerated image assets. Card design itself stays locked — not touched by either category.

---

## PASTE THIS TO CURSOR — the code-fixable part

Update the MBB V2 landing page (`index.html` / `style.css`) with these refinements. Do not touch the invitation card's design, shape, or front treatment — it's locked. Do not add sections, decoration, gradients, or glassmorphism. This is a polish pass on typography, contrast, shadows, and background presentation only.

**Typography — make the hero text block much more present:**
- Wordmark "MEANING BEYOND BRANDS": bump the font-weight up (if currently Cormorant Garamond 300, move to 400/500) and darken its color toward `--dark-olive` (#33413A) rather than a light tint. Keep the elegant letter-spacing, just stop it from looking faint.
- Headline "Loyalty isn't bought anymore. It's felt.": this should be the single strongest text moment on the page. Increase its font-size, use Cormorant Garamond at 400 or 600 weight (not 300 — that's what's reading thin/digital right now), and check its color contrast against the actual rendered background, not an assumed value. "It's felt." can stay italic for a touch of expressiveness. A very soft, low-opacity, small-blur text-shadow is fine if it helps it feel printed rather than flat vector — keep it subtle, not a glow.
- Intro line ("We connect the people companies value..."): move it off a pale/faint tint and up to real presence — `--dark-olive` or `--body-green`, not a light gray-sage wash. It should read as intentional copy, not secondary filler.
- Audit all three against the actual rendered background color once background changes (below) are in — contrast that looks fine over a plain color can vanish over a busy texture.

**Background — calm it down (a real fix needs new art, but this helps now):**
- The current `bg-paper-texture-sage.png` is too loud/competing with content. As a code-only stop-gap: layer it under a solid `--bg-sage` or `--ivory` fill and drop its opacity (try ~15–25%), or apply it with `background-blend-mode: multiply` / `soft-light` at reduced opacity, so the grain recedes into a quiet field instead of competing with the text and envelopes.

**Shadows / lighting — light touch, consistent direction throughout:**
- Keep one light source: soft light from upper-left, shadows falling subtly toward lower-right — apply consistently across card, envelope, and seal.
- Add a soft, low-opacity, large-blur drop-shadow under each full envelope object, to help it sit on the page.
- Add a small soft contact shadow where the card meets the envelope opening, and a subtle shadow under the wax seal to suggest it's physically attached.
- Avoid: hard-edged shadows, dramatic spotlighting, dark halos, CSS bevel/glossy effects.

**Do not:**
- Redesign the card.
- Try to fix envelope folds, the back/opening structure, or the wax seal shape via CSS/box-shadow trickery on the current image — it will look like a hack. Those need new source art (see below); code's job here is just the soft shadow support described above, not simulating construction that isn't in the image.
- Add content, ornaments, gradients, or glass effects.
- Animate the envelope — only the card layer moves, unchanged from the existing spec.

---

## NOT CODE — needs new / regenerated image assets

These parts of the correction brief describe problems baked into the current placeholder artwork itself. No amount of CSS fixes a photograph of an unconvincing envelope fold — this needs a new generation pass (same process as the original asset batches), then the new files get dropped into `Assets/` and swapped in (the build was already structured so that's a one-line path change per the earlier build prompt).

- **Envelope construction, especially the back/opening area behind the card** — needs to read as a fully resolved open pocket with believable folds, clean symmetrical top/back edges, not cropped or incidental.
- **Wax seal** — needs the full seal shown cleanly, centered, legible compass-star, no awkward cropping/overlap, soft pressed-wax material (not coin/metal), better integration with the envelope pocket.
- **Envelope depth/tactile realism** — thicker-feeling stock, layered fold planes — this is a rendering quality issue in the source art, not something CSS shadows can fully substitute for (code can add the supporting contact shadows above, but the paper itself needs to look right first).
- **Background paper texture's actual material quality** — finer cotton-paper grain, softer fibers, subtler tonal variation. Code can quiet the current texture down (above), but "archival presentation stock" vs. "rough craft paper" is a texture-generation question, not a CSS one.

When you're ready to regenerate these, the same asset-naming workflow applies as before — send the images over and I'll name, save, and fold them into the manifest and build prompt.
