# BuilderScore AI

> A builder reputation system that tracks sprint performance, code activity, and ecosystem contributions — to identify developers who consistently ship.

![BuilderScore AI](https://img.shields.io/badge/status-live-brightgreen) ![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JS](https://img.shields.io/badge/JS-Vanilla-yellow)

---

## What it is

Most hackathons reward a single weekend. BuilderScore tracks what actually matters: who keeps shipping, sprint after sprint.

It gives every builder a reputation score based on:

- **Consistency** — how often they deliver
- **Code quality** — how judges rate their work
- **Judge ratings** — across multiple events
- **Community** — how much they contribute around them
- **Ecosystem** — their broader impact

For organizations running build programs: stop guessing who your best builders are.  
For builders: your work compounds. Every project adds to a score that opens doors.

---

## Tech stack

Pure HTML, CSS, JavaScript. No frameworks, no build step.

- `index.html` — structure and layout
- `style.css` — design system and responsive styles
- `script.js` — heatmap generation, animations, interactions

External:
- [Inter](https://fonts.google.com/specimen/Inter) — Google Fonts
- [Tabler Icons](https://tabler.io/icons) — icon set

---

## Getting started

### Run locally

```bash
git clone https://github.com/yourusername/builderscore-ai.git
cd builderscore-ai
# Open index.html in your browser
open index.html
```

No npm install. No build step. Just open it.

### Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Done — live at `https://yourusername.github.io/builderscore-ai`

### Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deploy on every push.

---

## Project structure

```
builderscore-ai/
├── index.html      # Main page
├── style.css       # All styles
├── script.js       # Interactions & animations
└── README.md
```

---

## Customization

To change the builder profile, edit the relevant sections in `index.html` directly. Data is currently static — connect a backend or GitHub API to make it dynamic.

Score breakdown weights are in `script.js` as comments. Heatmap data is randomly seeded on each load (realistic simulation) — replace with real GitHub contribution data via the GitHub API.

---

## Built by

[Mitansh Kumar](https://github.com/yourusername) · Scaler School of Technology × IIT Madras BS '29
