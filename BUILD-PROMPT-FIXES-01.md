# Fix prompt, round 2: Corporate + Brands

Paste this into Cursor in the `MBB V2` project. The skeleton build (`corporate.html`, `brands.html`, extended `style.css`/`script.js`) is built and largely verified. Two things need fixing now. A third batch stays blocked until the reference HTML drafts are supplied separately, don't touch those yet.

## 1. Re-sync with the current docs first

Before changing anything, re-read `COPY-NEEDED.md` and `BUILD-PROMPT-CORPORATE-BRANDS.md` fresh from disk in this folder, not from earlier chat context. Both were updated after the first build pass and are now the complete, final copy pack except for the items listed in section 3 below, which are explicitly still pending.

## 2. Fix: Why MBB on Brands (revert to the locked decision)

`brands.html` currently keeps "Backed by the Data" and merges "Deep Market Access" into "Local Expertise." That's backwards from what's locked. Correct final 5, exactly as in `COPY-NEEDED.md`:

- New Customer Segments
- Loyalty Through Experience
- Deep Market Access (restore as its own card, don't merge it into Local Expertise)
- Full Activation Management
- Local Expertise

Drop "Backed by the Data" entirely. It isn't a customer benefit, the Bain citation already lives in 02 The Shift, and a citation-dependent card would date quickly anyway.

## 3. Fill in: copy that's already final but missing from the current build

None of this needs the reference drafts. Insert verbatim.

**Brands, 02 The Shift, full paragraphs** (the headline is already correct in the build):

> Convenience has won the transaction. It has not won desire.
>
> Bain's recent luxury research supports the broader argument: personal luxury goods weakened in 2024 while consumers increasingly prioritised experiences over products. Bain separately estimated the personal luxury goods market would erode by around 2% that year.
>
> The opportunity isn't simply to reach more people. It's to give the right people a reason to enter your world: to feel welcomed, understood and connected to the brand beyond the purchase.

**06 About MBB, one neutral version, byte-identical on both `corporate.html` and `brands.html`:**

> Meaning Beyond Brands operates between the corporate and luxury worlds, built around a simple belief: the strongest relationships are created through moments that feel personal, considered and difficult to replicate.
>
> We bring companies, premium brands and carefully selected audiences together through experiences designed to create recognition, connection and long-term value, managing the relationship from introduction through to delivery.

**Confirm both Hero support lines are actually live.** They're specified in section 01 of `BUILD-PROMPT-CORPORATE-BRANDS.md` and don't depend on the reference drafts, so they should already be buildable:
- Corporate: "We create meaningful reward experiences that recognise, inspire and strengthen your people."
- Brands: "We create meaningful connections between premium brands and the clients they most want to reach."

If they're missing, add them now. If they're already there, no action needed, just confirm.

## 4. Still blocked, leave as marked

These remain TODO/placeholder until the two reference HTML drafts are supplied separately:
- The three proof/gallery photos (`Assets/Experiences/` currently holds only `README-TODO.md`)
- The one-line body copy under each How It Works step and each Why MBB card (the titles are already final and correct, only the supporting body lines are missing)
- Both founder bios (names/titles are already correct: Swarnaleka Shetty Vyas, Co-Founder & CCO; Ana Manjavacas Abad, Co-Founder & CEO)

Do not invent copy for any of these. Leave them exactly as currently marked.

## 5. Re-verify after applying sections 2 and 3

Re-run the relevant checks from the last verification pass: Brands' Why MBB section (card count stays at 5, content has changed), contrast (shouldn't be affected by this change, confirm it isn't), and a full read-through of both `corporate.html` and `brands.html` to check no other stale content slipped through the same way these did.

## Style reminder

No em dashes anywhere in copy, including anything inserted from this prompt. Use periods, commas, or colons instead.
