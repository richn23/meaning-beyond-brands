# Fix prompt, round 5: Corporate + Brands

Round 4 (gallery wiring, Brands copy, founder bios, hero photography swap) is done and verified, per your report. Good catch on the gallery mismatch, that one's now fixed at the source, not in code.

## 1. Gallery images were mislabeled in the source draft, now corrected

You were right, `gifting-suite.jpg` and `private-breakfast.jpg` had their contents swapped relative to their filenames and captions. This was an error in the original reference draft (the alt attributes didn't match the photos), not something your build did wrong.

Fixed at the asset level: the file contents at `Assets\Experiences\gifting-suite.jpg` and `Assets\Experiences\private-breakfast.jpg` have been swapped in place, on disk, so each filename now matches its actual photo:
- `gifting-suite.jpg` is now the open branded gift box photo (matches the "placing product and story directly into the hands of a carefully selected audience" caption).
- `private-breakfast.jpg` is now the table-setting/cappuccino photo (matches the "intimate hosted experience" / "private setting for genuine conversation" captions).

**No code, filename, or caption changes needed.** Your existing `<img>` references, alt text, and captions are all still correct, they were only ever pointing at the wrong file contents. Just confirm on a hard refresh that both images now show the right photo under the right caption on both `corporate.html` and `brands.html`.

## 2. Asset weight: keep your optimized JPEGs, don't revert to the PNGs

Your call to export optimized JPEGs (93-95% smaller) and reference those instead of the 1.5-1.9MB PNG masters is the right one. Keep that as-is, no change needed. The PNG masters staying documented at the swap point as the untouched source is exactly right too.

## 3. Still outstanding, no change

Same three items as before: File A (the Corporate reference draft, needed for the 9 remaining body lines), the transparent-background star logo, and Landing's envelope/seal/texture art from `VISUAL-CORRECTION-CHECKLIST.md`. None of these are part of this prompt.

## Style reminder

No em dashes anywhere in copy. This round touches no copy, only two image files, so this should be a no-op, just confirming.
