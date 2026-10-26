# Chinatown concept sites

Seven websites for seven Manhattan Chinatown food businesses that have a
phone number and no website of their own. Each one is a **concept site**:
built as a demonstration, not commissioned, and marked as such on every page.

The prospect research these came from is deliberately **not** in this
repository — it lives in `Sofia Sites/chinatown-prospects.md`.

| Site | Business | Address | Google |
|---|---|---|---|
| `tao-hong` | Tao Hong | 79 Chrystie St | 4.8 · 220 |
| `46-mott-deli` | 46 Mott Deli | 46 Mott St | 4.8 · 196 |
| `fu-zhou-wei-zhong-wei` | Fu Zhou Wei Zhong Wei | 88 E Broadway, stall B45 | 4.7 · 596 |
| `shui-mei-cafe` | Shui Mei Cafe | 67 E Broadway | 4.5 · 126 |
| `mw-bakery` | M&W Bakery | 25 E Broadway | 4.3 · 24 |
| `yue-lai-bakery` | Yue Lai Bakery | 137 E Broadway | 3.9 · 29 |
| `happy-star` | Happy Star | 160 E Broadway | 3.7 · 114 |

---

## The rule these sites are built around

**Nothing on any of these pages is guessed.**

Every fact was read off the business's own Google listing on 25 October 2026,
or taken from a named published source and attributed in the copy. Anything
that could not be confirmed is listed, in plain language, in a section on each
site called *What this site does not claim to know*.

**No site shows a single price.** None of these seven businesses publishes a
price list. Prices exist in old blog posts, in individual reviews and on
delivery apps, and all three are unreliable — stale, anecdotal or marked up.
Rather than print a number that might be wrong, every item reads
"Ask at the counter".

That restraint is the product. It is what makes the site safe to show the
owner: there is nothing on it for them to correct.

---

## Running it

Needs **Node 18 or newer**. No dependencies, no install step.

```bash
node build.js
```

That writes `dist/`, one folder per site plus an index listing all seven.

```bash
node build.js tao-hong          # one site only
node build.js --watch           # rebuild on save
npm run serve                   # build, then serve dist/ on :5173
```

---

## How it is put together

```
build.js                  generates dist/ — Node built-ins only
shared/
  templates.js            document shell, header, footer, both page templates
  styles/base.css         all structure, zero colour and zero typefaces
  scripts/site.js         scroll reveal (progressive enhancement)
sites/<slug>/
  site.js                 every word and every fact for that business
  theme.css               that business's colour, type and ornament
dist/<slug>/              build output — overwritten, do not edit
```

`base.css` sets **no colours and no typefaces of its own**. It only consumes
custom properties that each `theme.css` defines. That is what lets seven sites
share one stylesheet and still look nothing like each other — swap the theme
file and the whole identity changes.

### Giving a site its own look

Each `theme.css` must define the full token set: `--bg`, `--fg`, `--dim`,
`--line`, `--accent`, `--accent-ink`, `--focus`, the `--hero-*`, `--sig-*`,
`--alt-*`, `--note-*` and `--foot-*` groups, and `--font-display`,
`--font-body`, `--font-wordmark`. Fonts are listed in `site.js` under `fonts`
as Google Fonts family strings and loaded automatically.

The hero ornament is an inline SVG in `site.js`, drawn from what the business
actually looks like or sells — the egg tart, the yellow 46, the stack of
steamer baskets.

### Photography

Each site has a hero photograph and three dish photographs in
`sites/<slug>/images/`, served as WebP (1.7 MB across all seven sites).
Four heroes are generated images art-directed to the site's palette; the rest
are Pexels-licensed stock. **None were taken at these businesses**, and every
page that shows one says so — see [VERIFICATION.md](VERIFICATION.md) § 4.

The hero photo sits *beside* the headline rather than behind it. Text over a
photograph makes contrast depend on whatever is in the picture; side by side,
it cannot go wrong, and the food is never half-buried under a scrim.

To swap in real photographs, replace the files in `sites/<slug>/images/`
keeping the names (`hero.webp`, `dish-1.webp`…`dish-3.webp`), update the
`alt` text in that site's `site.js`, and delete the `PHOTO_NOTE` caption from
`shared/templates.js`. Heroes are 1600×1067, dishes 760×760.

### Where each identity came from

Nothing here is a stock template choice. Each palette was taken from the
business's own storefront photographs on Google, and each one is noted in the
comment at the top of its `theme.css`:

- **Tao Hong** — the custard in the egg tart, against roasted brown.
- **46 Mott Deli** — the giant yellow 46 on the red awning, jade window frame.
- **Fu Zhou Wei Zhong Wei** — the green signboard with red characters, under
  basement fluorescents.
- **Shui Mei Cafe** — the gold awning with magenta script lettering.
- **M&W Bakery** — red on a white vinyl sign over a green frame. No gloss.
- **Yue Lai Bakery** — six in the morning: night blue into first light.
- **Happy Star** — the mint-and-cream awning with the pink bubble tea on it.

---

## Checked

Measured in-browser against computed styles across all 14 pages, not estimated:

- **Contrast:** every text/background pair meets WCAG AA. Zero failures.
- **Overflow:** no horizontal scroll at 320, 375, 390, 430, 768, 1024, 1440 px.
- **Structure:** one `<h1>` per page, no skipped heading levels.
- **Links:** every internal link, anchor and asset resolves. No console errors.
- **Without JavaScript:** both pages are fully rendered HTML. JS only adds the
  scroll reveal, and `prefers-reduced-motion` turns it off.

---

## Deploying

Every site is a separate Render static site built from this one repository.
They differ only in the build command and publish path:

| | |
|---|---|
| Build command | `node build.js <slug>` |
| Publish directory | `dist/<slug>` |
| Auto-deploy | on, from `main` |

Push to `main` and all seven rebuild. Live URLs are in
[VERIFICATION.md](VERIFICATION.md) § 5 — note that two of them are not the
slug you would expect, because Render rewrites subdomains that start with a
digit or collide with an existing customer.

---

## If one of these businesses says yes

Four things change, in this order:

1. **Delete the ribbon.** `ribbon()` in `shared/templates.js`, and the
   "About this site" column in `footer()`.
2. **Drop the noindex.** The `<meta name="robots">` line in `layout()`, and
   `robots.txt` in `build.js`.
3. **Turn on structured data.** There is deliberately no schema.org JSON-LD on
   these pages — publishing it for a business that has not asked would feed
   search engines a claim this site has no standing to make. Add
   `LocalBusiness` markup once there is a client.
4. **Replace the facts with their facts.** Everything in `site.js` is sourced
   second-hand. The first conversation should replace all of it, especially
   the hours, the payment policy and the prices.
