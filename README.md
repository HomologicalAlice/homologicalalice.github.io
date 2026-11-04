# homologicalalice.github.io

Personal academic website of Tianyou Ma, built with [Astro](https://astro.build) and deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Where things are

| Page | File |
| :--- | :--- |
| Home | `src/pages/index.astro` |
| Research (preprint, thesis) | `src/pages/research.md` |
| Talks | `src/pages/talks.md` |
| CV (links, education, awards) | `src/pages/cv.md`; the PDF is `public/files/Tianyou_Ma_CV.pdf` |
| Notes | posts in `src/content/blog/*.md` |
| Personal (wallpapers, music) | `src/pages/personal.astro` with `src/layouts/AliceLayout.astro` |

Academic pages share `src/layouts/Layout.astro`; the Markdown pages go through
`src/layouts/Page.astro`. Math in Markdown is rendered with KaTeX (macros in `astro.config.mjs`).

Do not commit private documents (transcripts, unpublished drafts): this repository is public.

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in ./dist
```
