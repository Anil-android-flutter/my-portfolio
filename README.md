# Anil Kumar Reddy — Portfolio

Premium static portfolio for GitHub Pages.

Live (after deploy): https://anil-android-flutter.github.io/my-portfolio/

## Run locally

No build step. From this folder:

```bash
# Python
python -m http.server 8080

# or Node
npx --yes serve .
```

Open `http://localhost:8080`.

Do not open `index.html` as a raw file if fonts or case-study routes misbehave — use a local server.

## Build

There is no compile step. The site is HTML, CSS and JavaScript.

## Deploy to GitHub Pages

1. Commit and push `main` to `https://github.com/anil-android-flutter/my-portfolio`.
2. Repo **Settings → Pages**: source **Deploy from a branch**, branch **main**, folder **/ (root)**.
3. Wait for the Pages build, then visit the live URL.

Project Pages use relative asset paths (`./css/styles.css`), so the site works at `/my-portfolio/`.

## Replace later if you want

| File | Purpose |
|------|---------|
| `assets/Anil_Lead_Software_Engineer.pdf` | Resume download |
| `assets/anil.jpg` | About portrait |
| `assets/tgk-feature.png` | Temple Girl Kids hero art |
| `assets/resoclass.png` | ResoClass visual |
| `assets/patasala.png` | Patasala visual |

Device frames on some projects are CSS mockups. Real screenshots of My Kitchen / iGuru would strengthen those sections.

## Dependencies

None. Fonts load from Google Fonts. Previous site was a single `index.html` with inline CSS (Plus Jakarta Sans / mint accent). That file is replaced.
