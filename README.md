# Carter Bryson – Personal Academic Website

Source for my personal academic website, built with plain HTML, CSS, and
JavaScript and hosted on [GitHub Pages](https://pages.github.com/). No build
step — the files in this repo are served as-is.

🔗 **Live site:** [wcarterbryson.github.io](https://wcarterbryson.github.io/)

## Structure

The site is a single continuous page.

| Path | Purpose |
| --- | --- |
| `index.html` | The entire site: About (with contact details), Publications, Working Papers, Work in Progress |
| `assets/css/style.css` | All styling, including the light/dark theme tokens |
| `assets/js/light-dark.js` | Light/dark toggle, persists choice in `localStorage` |
| `assets/js/script.js` | Expand/collapse paper abstracts |
| `assets/js/set-title.js` | Per-page `<title>` helper (only used by the archived pages below) |
| `assets/images/` | Headshots |
| `files/` | Papers, slides, syllabi, CV (linked by absolute URL) |
| `sitemap.xml`, `robots.txt` | SEO |
| `research.html`, `teaching.html` | **Archived.** Kept on disk but not linked from anywhere and excluded from the sitemap. |

## Editing

- **Add a paper:** copy a `.paper-entry` block in `index.html` into the right
  section. Each block is a title `<p>`, a `.paper-links` row (abstract button +
  links), and a hidden `.abstract-text` block.
- **Change colors or fonts:** edit the `:root` / `[data-theme="dark"]` custom
  properties at the top of `assets/css/style.css`, and the Google Fonts `<link>`
  in `index.html`.
- **Preview locally:** `python3 -m http.server` then open
  `http://localhost:8000`.

## Deploy

Push to `main`. GitHub Pages publishes automatically.

## Built with

- HTML5, CSS3 (custom properties, flexbox, media queries)
- Vanilla JavaScript
- GitHub Pages
