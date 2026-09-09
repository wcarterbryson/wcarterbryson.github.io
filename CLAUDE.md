# CLAUDE.md

Guidance for working in this repo.

## What this is

Carter Bryson's personal academic website. Plain static HTML/CSS/JS served
directly by GitHub Pages from `main`. **There is no build step, framework, or
package manager** — do not add one without being asked.

## Layout

- `index.html` — the whole site, one continuous page: About (CV and contact
  details) → Publications → Working Papers → Work in Progress → disclaimer.
  There is no navigation menu.
- `assets/css/style.css` — all styles. Theme is driven by CSS custom properties
  under `:root` (light) and `[data-theme="dark"]`. The accent (link hover /
  focus) is teal; the primary color (headings, links) is navy. Font is IBM Plex
  Sans, loaded from Google Fonts in `index.html`.
- `assets/js/light-dark.js` — theme toggle, persisted in `localStorage`.
- `assets/js/script.js` — expand/collapse for `.abstract-text` blocks; also sets
  the document title.
- `assets/js/set-title.js` — only referenced by the archived pages.
- `files/` — PDFs (papers, slides, CV, syllabi). Linked with absolute
  `https://wcarterbryson.github.io/...` URLs.
- `research.html`, `teaching.html` — **archived.** Kept on disk, linked from
  nowhere, and excluded from `sitemap.xml`. Their content now lives in
  `index.html`. Don't delete them, don't link to them.

## Conventions

- A paper is a `.paper-entry`: a title `<p>` (`.paper-title`, optional
  `.paper-venue`, optional coauthor links), a `.paper-links` row (an
  `.abstract-toggle` button plus `<a>` links separated by
  `<span class="divider">|</span>`), and a hidden
  `<div class="abstract-text hidden">`. `script.js` keys off these class names.
- Keep markup indentation at 2 spaces, matching the existing files.
- 2-space CSS indentation; keep the existing comment style on the theme tokens.
- Preserve `target="_blank" rel="noopener noreferrer"` on outbound links.
- If you change page width or type, keep prose (`.prose`) and `.abstract-text`
  at a readable measure (~46rem).

## Checking changes

Preview locally with `python3 -m http.server` and open the printed URL. For a
quick visual check, headless Chrome works:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --hide-scrollbars --window-size=1200,2600 \
  --screenshot=out.png http://localhost:8000/index.html
```

## Deploy

Commit and push to `main`; GitHub Pages does the rest. Only commit or push when
asked.
