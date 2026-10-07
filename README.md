# Portfolio

Plain HTML / CSS / JS, no build step, no framework, no dependencies except
KiCanvas (loaded from `kicanvas.org` via `<script type="module">` on the
project pages) for the in-browser KiCad viewer.

```
portfolio/
├── index.html                          # home page (about, project grid, contact)
├── projects/
│   ├── so101-robot-arm.html            # ROS 2 / MoveIt 2 project (webm video)
│   ├── mars-rover.html                 # Ackermann rover, Arduino + ROS 2 (webm video, inline SVG diagrams)
│   ├── vacuum-robot-simscape.html      # master's thesis, Simscape vacuum robot model (3 webm videos)
│   ├── nema17-stepper-driver.html      # project detail + KiCanvas embed
│   ├── cylinder-assembly.html          # CAD animation (webm video)
│   ├── delta-robot.html                # CAD animation (webm video)
│   ├── two-wheel-robot.html            # wiring schematic (png)
│   └── inverted-pendulum.html          # CAD animation (webm video)
├── assets/
│   ├── css/style.css
│   ├── js/main.js                      # theme toggle + viewer tab logic
│   ├── img/                            # renders / screenshots / video posters
│   ├── video/                          # project animations (.webm)
│   └── kicad/                          # .kicad_sch / .kicad_pcb / .kicad_pro served as static files
└── downloads/                          # schematic PDF, gerbers, interactive BOM, STEP model
```

## Running locally

KiCanvas fetches the `.kicad_sch` / `.kicad_pcb` files over `fetch()`, which
browsers block on `file://`. Serve the folder over HTTP instead:

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Adding a new project

1. Duplicate `projects/nema17-stepper-driver.html` as a starting point.
2. Drop images in `assets/img/`, KiCad source in `assets/kicad/`,
   downloadables in `downloads/`.
3. Add a card to the `.projects-grid` in `index.html`.

## Before publishing

- Replace the LinkedIn / GitHub placeholder links in `index.html` (`#contact`).
- `downloads/nema17-3d-model.step` is ~16 MB. Most static hosts (GitHub
  Pages, Netlify, Vercel) are fine with that per file, but if you're using
  git, consider Git LFS or dropping the STEP download if repo size matters.
- Everything else is small and framework-free, so it deploys to any static
  host (GitHub Pages, Netlify, Vercel, S3, ...) with no build step.
