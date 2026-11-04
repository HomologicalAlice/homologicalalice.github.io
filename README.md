# homologicalalice.github.io

Personal website of Tianyou Ma, built with [Astro](https://astro.build) and deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

The site has two sides, like the two sides of mirror symmetry (or of a record):

- **A-side**, at `/`: the academic pages of Tianyou Ma.
- **B-side**, at `/alice/`: Homological Alice, with wallpapers, music and thoughts.

The A ⇄ B switch in the header (`src/components/MirrorSwitch.astro`) goes to the matching page on
the other side, and the page flips like a mirror (`src/components/MirrorTransition.astro`, a
cross-document view transition; browsers without it just load the page).

## Where things are

| Side | Page | File |
| :--- | :--- | :--- |
| A | Home | `src/pages/index.astro` |
| A | Research (preprint, thesis) | `src/pages/research.md` |
| A | Talks | `src/pages/talks.md` |
| A | CV (links, education, awards) | `src/pages/cv.md`; the PDF is `public/files/Tianyou_Ma_CV.pdf` |
| A | Notes | posts in `src/content/blog/*.md` |
| B | Alice (home) | `src/pages/alice/index.astro` |
| B | Thoughts | posts in `src/content/thoughts/*.md` |

The A-side pages share `src/layouts/Layout.astro` (the Markdown pages go through
`src/layouts/Page.astro`); the B-side pages share `src/layouts/AliceLayout.astro`. Each layout
takes a `mirror` prop: the page the switch goes to. Math in Markdown is rendered with KaTeX
(macros in `astro.config.mjs`).

## Posting a thought

Copy `src/content/thoughts/_template.md` to a new file in the same folder whose name does not start
with `_`, for example `2026-11-05-first-snow.md`, then fill it in. The file name becomes the
address, `/alice/thoughts/2026-11-05-first-snow/`. Add `lang: zh-CN` for a post in Chinese, and
`draft: true` to keep a post off the site.

Do not commit private documents (transcripts, unpublished drafts): this repository is public.

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in ./dist
```
