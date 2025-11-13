# jjfdez — personal website

Single-page, bilingual, responsive site for Jose Javier Fernández González. It highlights research, professional experience, projects, and outreach work, and is designed to be lightweight enough to serve as a static asset while still feeling polished on both desktop and mobile.

## What’s inside

- Hero, About, Experience, Projects, Research, Education, Skillset, Achievements, News, Workshops, Languages, Certificates, and Contact sections with matching Spanish content at `jjfdez/es/`.
- Custom CSS (`assets/css/styles.css`) for the gradient hero, timeline layout, pill lists, cards grid, and responsive navigation.
- Small vanilla JS helper (`assets/js/script.js`) that keeps the mobile menu, dropdown, and smooth scrolling accessible.
- Docker + Nginx setup so the site can be previewed locally with live edits or shipped as an immutable production image.

## Project layout

```
jjfdez/
├── index.html              # English landing page
├── es/index.html           # Spanish translation
├── assets/
│   ├── css/styles.css      # Global styles + responsive rules
│   ├── js/script.js        # Mobile nav & dropdown behaviour
│   ├── imgs/               # Portraits, icons, backgrounds
│   └── docs/JavierFernandez.pdf
├── Dockerfile              # Multi-stage dev/prod nginx image
└── ...
```

Top-level files that refer to the site:

- `docker-compose.dev.yml` – mounts `./jjfdez` for live editing with hot reload via Nginx.
- `docker-compose.prod.yml` – copies the site into the image for an immutable production release.

## Tech stack

- Static HTML + CSS + a small amount of vanilla JS (no build step).
- Nginx (Alpine) as the static file server inside Docker.
- Docker Compose for orchestrating local dev and multi-site deployments.
- Google Fonts (Poppins) for typography.

## Running locally

### Quick preview without Docker

```
cd jjfdez
python3 -m http.server 8081
```

Visit `http://localhost:8081` (English) or `http://localhost:8081/es/` (Spanish). Stop the server with `Ctrl+C`.

### Live-edit preview with Docker Compose

```
docker compose -f docker-compose.dev.yml up --build jjfdez
```

- Serves the site on `http://localhost:8081`.
- Mounts the working directory, so editing HTML/CSS/JS files reloads instantly.

## Production build & deployment

1. Build the prod image locally:
   ```
   docker build -t jjfdez-site -f jjfdez/Dockerfile jjfdez
   ```
2. Orchestration with Compose (serves neurona-one + jjfdez):
   ```
   docker compose -f docker-compose.prod.yml up -d --build jjfdez
   ```
3. Behind a reverse proxy or CDN, point traffic to port `8081` (or remap as needed).

## Customizing the site

- **Content:** Edit `index.html` (English) and `es/index.html` (Spanish). Each section is clearly labeled—duplicate an `<article>` or `.timeline-item` block when adding entries.
- **Hero CTA + CV:** Update the hero copy and the `href` for the CV button (`/assets/docs/JavierFernandez.pdf`).
- **Images & icons:** Drop assets in `assets/imgs/` and reference them with root-relative paths (`/assets/imgs/...`). Social icons live under `assets/imgs/icons/`.
- **Styling:** `assets/css/styles.css` controls theme colors via CSS variables and media queries. Adjust the palette in the `:root` block, or extend components (cards, pill lists, timelines) further down.
- **Behaviour:** `assets/js/script.js` wires up smooth scrolling, the hamburger menu, dropdown navigation, and auto-closing on link click. Keep it framework-free to avoid extra tooling.
- **Spanish translation:** Keep the English and Spanish sections in sync when updating content. A quick way is to edit English first, then mirror the changes in `es/index.html`.

## Next ideas

1. Add a dark-mode.
2. Wire basic analytics (e.g., Plausible) to understand traffic without cookies.
3. Automate deployments with a GitHub Actions workflow that rebuilds and pushes the Docker image on every main-branch update.

---

