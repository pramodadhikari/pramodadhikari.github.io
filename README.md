# Pramod Adhikari — academic website

Static HTML and CSS website for GitHub Pages. No build tools or dependencies required.

## Local preview

From this directory run `python3 -m http.server 8080`, then visit http://localhost:8080.

## Editing

- `index.html`: introduction, research highlights, selected publications.
- `research.html`, `publications.html`, `cv.html`, `academics.html`, `media.html`, `contact.html`: full academic content.
- `regional-modeling.html`, `climate-extremes.html`, `clouds-aerosols.html`: dedicated research directions linked from the home page and research hub.
- `assets/research/rm13-domain.png`: original domain map extracted from slide 3 of the supplied Mountain West AI & HPC Summit presentation.
- `assets/site.css`: shared colors, typography, layouts, and responsive breakpoints.
- `assets/site.js`: accessible mobile navigation. Content and navigation remain available without JavaScript.
- `cv/Adhikari_CV.pdf`: linked downloadable CV.

Navigation markup is included directly in each page. The shared `footer.html` is loaded by `assets/site.js` on all ten redesigned pages. Edit `footer.html` once to update every footer. Preview through an HTTP server; a basic contact footer remains visible if JavaScript or the footer request is unavailable.

The existing `header.html`, `timeline.html`, and `timeline_copy.html` are legacy pages, outside the main navigation, and have not been redesigned.

## Publishing

Review the local preview, then commit and push the approved changes to the repository branch configured for GitHub Pages. The local redesign does not change the live site until published.

Repository note: the original repository tracks both `images/bungee.JPG` and `images/bungee.jpg` with different contents. These collide on case-insensitive macOS filesystems. Do not include the resulting image checkout difference when committing the redesign; stage only the redesigned HTML files, README, and assets directory.
