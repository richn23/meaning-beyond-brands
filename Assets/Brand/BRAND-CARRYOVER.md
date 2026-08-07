# Brand carryover — from the original MBB project into V2

V2 works blind: it must not read from, link to, or depend on `Meaning Beyond Brands` (the original folder) at all. Everything V2 needs from the existing brand has been copied in here instead.

## Files copied into `MBB V2\Assets\Brand\`
- `mbb-star-logo.png` — the standalone gold compass-star mark (from original `Assets/compass-star.png`). This is the hero star mark referenced in the design brief. Has a white background — needs a transparent-background pass before use, per the brief's production requirements.
- `mbb-full-lockup-reference.png` — the full circular badge (star + "Meaning Beyond Brands" wordmark + "Strategy | Storytelling | Significance" tagline, gold ring border) from original `Assets/emblem.png`. This is reference only, showing the wordmark's typeface/spacing — V2's hero uses the star and wordmark as separate elements, not this circular badge as-is.

## Typography (carried over, fonts are loaded from Google's CDN — no local font files exist in the original project)
- Serif: **Cormorant Garamond** (weights used originally: 300, 400, 600, plus 300 italic)
- Sans-serif: **Jost**

Google Fonts import line used by the original site (safe to reuse verbatim in V2 — this is an external CDN link, not a dependency on the original folder):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

(Jost weights above are a reasonable default set — original site's exact Jost weight list wasn't fully confirmed; adjust if specific weights are missing once type is in use.)

## Colour — explicitly NOT carried over
The original site's gold values (`--gold: #7C4A2B`, `--gold-lt: #9B6040`) are a different, darker/browner gold than V2's approved palette. Per the locked brief, V2 uses its own palette (`#33413A`, `#63705F`, `#B8934A`, `#9C7A3C`, `#E2EAE2`, `#D3DED0`, `#F4F7F2`) — do not pull colour values from the original CSS.
