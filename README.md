# Gianluca Pagliaro — personal website

Static academic website for Gianluca Pagliaro. The research-focused homepage is `index.html`; personal interests are presented on `out-of-office.html`.

## GitHub Pages deployment

This branch is configured for the project URL:

`https://glucaapp.github.io/personal_website/`

To publish it:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. Click **Save**.

GitHub will build and publish the site automatically. Later pushes to `main` will trigger a new deployment.

## Future custom domain

The `custom-domain-ready` branch preserves the version configured for `gianlucapagliaro.com`. When the domain is purchased, its URL metadata can be reapplied to `main` and the domain connected through GitHub Pages or Cloudflare Pages.

## Content updates

- Media files are stored under `assets/`.
- Carousel content is defined in `out-of-office.html` and controlled by `script.js`.
- Update the selected-publications list and replace `assets/Gianluca-Pagliaro-CV.pdf` whenever the CV changes.
