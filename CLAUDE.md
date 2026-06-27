# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

A personal romantic anniversary website — a static single-page app served by Nginx via Docker. There is no build step, no package manager, and no JavaScript framework. All personalisation lives in `config.js`; `index.html` contains all HTML, CSS, and JS as a self-contained file.

## Running the site

```bash
# Recommended
docker compose up --build -d
# then open http://localhost:8080

# Stop
docker compose down

# Alternative (plain Docker)
docker build -t anniversary .
docker run -d -p 8080:80 --name anniversary-timeline anniversary
```

There are no lint or test commands — this is a static site with no tooling.

## Architecture

| File | Role |
|---|---|
| `config.js` | All personalisation: names, hero text, timeline events, easter egg messages |
| `index.html` | Entire app — HTML structure, CSS (CSS custom properties in `:root`), and vanilla JS all in one file |
| `media/images/` | Photo assets referenced by filename in `config.js` events |
| `nginx.conf` | Nginx config for the container |

### How the page loads data

`index.html` loads `config.js` as a `<script>` tag, which sets the global `CONFIG` object. The inline JS in `index.html` then reads `CONFIG` to render the hero section and timeline cards dynamically.

### Timeline event schema

```js
{
  date:     "Month DD, YYYY",        // displayed string
  title:    "Card headline",
  caption:  "Description text",
  media:    ["images/file.jpg"],     // array of paths inside /media  (optional)
  type:     "image" | "video" | "text",
  romantic: true,                    // adds glowing border + floating petals + 💕 badge
}
```

- `images` key (array) and `media` key (string or array) are both accepted — check existing events for the pattern in use.
- Media paths are relative to the `/media/` directory served by Nginx.

### Easter egg

Clicking the hero heart cycles through `CONFIG.easterEgg.messages[]`. Each message has `icon`, `title`, and `message` fields. Set `CONFIG.easterEgg.enabled = false` to hide the feature.

### CSS design tokens

All colours and fonts are defined as CSS custom properties on `:root` in `index.html`. Key tokens: `--rose`, `--gold`, `--cream`, `--ink`, `--font-display`, `--font-body`.
