# Meaning Beyond Brands

Three-page static site. No framework, no build step, no bundler.

| Page | Purpose |
|---|---|
| `index.html` | Landing. The invitation-envelope gateway: choose Corporate or Brands |
| `corporate.html` | Corporate. Seven sections, dark olive theme |
| `brands.html` | Brands. The same seven sections, ivory/sage theme |

All three share one `style.css` and one `script.js`. The palette inverts through
CSS custom properties scoped to a body class (`theme-landing`, `theme-corporate`,
`theme-brands`), so a component is written once and works under either theme.

## Running locally

Any static server will do. There is nothing to install or compile.

```bash
python -m http.server 5173
```

Then open <http://localhost:5173>. Opening `index.html` straight off disk also
works, though relative asset paths are better behaved over a server.

`.claude/launch.json` starts the same server from the editor.

## Deploying

Vercel needs no configuration: it serves the repo root as static files and
`index.html` becomes `/`. Framework preset "Other", no build command, output
directory the repo root.

## Assets

`Assets/` holds both the served images and their masters.

- **Served**: the `.jpg` exports plus `Assets/Brand/mbb-star-logo-web.png`.
  These are optimised, typically 80 to 96 percent smaller than the masters.
- **Masters**: the large `.png` originals, kept untouched as the source for
  future re-exports. They are not referenced by any page.

Image paths live in exactly one place each. The hero photography is set by
`--hero-photo` and `--hero-photo-portrait` in the theme blocks of `style.css`,
so swapping it is a one-line change per theme rather than an edit to the markup.

## Conventions worth knowing before editing

- **No em dashes in copy.** Periods, commas or colons instead.
- **All copy is real HTML text**, never baked into an image. This is why the
  hero photography is cropped or composed with blank space rather than used as
  supplied artwork with type on it.
- **Section 06 About is byte-for-byte identical** on `corporate.html` and
  `brands.html`. If you edit one, edit both.
- **Blanket element resets are wrapped in `:where()`** so they carry zero
  specificity. Written plainly, `.theme-corporate h3` is class+type and
  outranks a single component class, which has silently broken colours and
  margins here before.
- **Motion**: three signature moments only, plus one ambient detail. Nothing
  loops. Every effect has a `prefers-reduced-motion` fallback that leaves the
  content static and legible.

## Outstanding

Tracked in `NEXT-STEPS.md`. All copy is final on every page; what remains is
artwork:

- Transparent-background pass on the MBB star. It currently carries a white
  studio background and is composited with a blend mode.
- Landing's envelope, wax seal and paper texture, per
  `VISUAL-CORRECTION-CHECKLIST.md`. The seal is presently a circular crop of
  the pair mockup, drawn as its own layer because the envelope silhouette
  otherwise slices through it.
- Privacy and Terms pages. The footer deliberately omits the links until those
  exist rather than pointing at `#`.

The `BUILD-PROMPT*.md`, `COPY-NEEDED.md` and `MBB-V2-*.md` files are the working
briefs and decision record. They are internal, which is why this repo is private.
