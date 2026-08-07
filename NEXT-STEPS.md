# MBB V2: steps to completion (as of 2026-08-07)

## Phase 1: unblock content — done

1. ~~Paste reference HTML drafts, extract copy and images.~~ **Done.** The Brands draft arrived and was fully extracted (3 gallery photos, How It Works + Why MBB body copy, founder bios + headshots). The Corporate draft never arrived; its 9 body lines were instead written directly to match Corporate's locked voice and approved 2026-08-07.
2. ~~Round 4 fix prompt (gallery, Brands copy, founder bios, hero photo swap).~~ **Done and verified**, including a gallery-image mislabeling Cursor caught and a follow-up fix (`BUILD-PROMPT-FIXES-04.md`).
3. ~~Round 6 fix prompt (Corporate's 9 final lines) + alt text correction on two gallery images.~~ **Done and verified.**

**Phase 1 is complete.** Both `corporate.html` and `brands.html` have zero copy placeholders. Confirmed by Cursor: what's left on the whole project is art, not copy.

## Phase 2: new art (parallel track)

4. ~~Clean, text-free, high-res hero photography, Corporate + Brands.~~ **Done, 2026-08-07.** Real photography wired in for both themes, desktop and mobile. The swap point stays marked in `style.css` in case higher-resolution photography arrives later, but the current set is real, approved, and live, this isn't a gap.
5. **Transparent-background star logo.** The one remaining `TODO` inside the Corporate/Brands HTML files themselves. Currently the white-background original, composited with a blend mode as a workaround, on all three pages.
6. **Landing's envelope, wax seal, card art, and finer paper texture.** The biggest remaining art batch, unchanged since round 1 (`VISUAL-CORRECTION-CHECKLIST.md`). The wax seal is currently a CSS workaround (a circular crop out of the old pair mockup), not real art.

Corporate founder headshot question is resolved: the Brands headshots are used on both pages since About is shared. Nothing further needed there.

Each remaining item has a clean single swap point already built in, so none of them block a launch on their own, they just need the files.

## Phase 3: small open decisions (quick, no dependencies, do anytime)

7. **Brands' envelope hover line** on Landing: "Discover a more meaningful way to reach the right people" currently contradicts the Shift copy's own argument against "reach." Proposed fix: swap to "connect." Awaiting your yes/no.
8. **Production URLs/filenames.** `index.html` / `corporate.html` / `brands.html` were assumed, never confirmed against how this actually deploys.
9. **Privacy/Terms pages.** Footer links are deliberately omitted until real pages exist. Decide whether to write those pages now or leave this parked.
10. **Header colour-inversion wipe.** Confirmed backlog. Just needs a decision on whether it ever gets scheduled, or stays out permanently.

## Phase 4: final QA (once Phase 2 is in)

11. One full pass across all three pages: cross-browser check, image-weight/performance check, full proofread (em-dash rule, brand voice consistency), accessibility re-verify, mobile re-verify.

## Phase 5: launch

12. Choose hosting/deployment target, connect the domain, decide whether to stage for a final look or go straight live.

---

**Where the critical path actually is now:** copy is fully closed on both pages, nothing left there. What remains is entirely art (the star logo and Landing's envelope/seal/texture batch) plus a handful of quick decisions in Phase 3, then one QA pass and launch. Nothing is blocked on you pasting or writing anything else.
