# Fix prompt, round 3: Corporate + Brands

Round 2 (Why MBB revert, the missing-but-final copy, the stale-content sweep) is done and verified, per your report. Nothing to redo there.

## 1. Hero photography is a temporary crop, not final art

`Assets/Hero/hero-corporate.png` and `hero-brands.png` were full-page mockups with the headline, support line and header baked in as pixels, not clean photography. Cropping just the photo into `hero-corporate-photo.jpg` / `hero-brands-photo.jpg` so the copy stays real HTML was the right call, but at ~840px wide that crop will soften on large desktop displays, as flagged. This is a source-asset gap, not a code bug, so:

- Leave the current crops live. They're the correct stopgap.
- Reference each through a single, clearly-named path or CSS custom property in `style.css`, so swapping in real photography later is a one-line change, not a rebuild. Mark the spot with `/* TODO: swap for clean, text-free, high-res hero photography once available */`.
- Optional, only if it's a small change: cap the photo panel's rendered width on very large viewports (max-width or a background-size ceiling) so it doesn't upscale past native resolution and look softer than it has to. Don't restructure the grid to do this.

## 2. Still on hold

No action on the three gallery photos, the How It Works / Why MBB body lines, or the founder bios. All three stay exactly as marked until the reference drafts arrive.

## 3. Housekeeping

This is the second round where live content didn't match the current docs on disk. Now that both files are stable, do one side-by-side read-through of `corporate.html` and `brands.html` against `COPY-NEEDED.md` and `BUILD-PROMPT-CORPORATE-BRANDS.md` to confirm nothing else is stale. No changes expected, just a confirmation pass.

## Style reminder

No em dashes anywhere in copy, including anything touched by section 1 or 3 above.
