# 💕 Anniversary Timeline

A romantic static website to celebrate your anniversary — complete with a scrolling timeline of your shared memories.

---

## 📁 Project Structure

```
anniversary/
├── index.html          ← the website (do not edit)
├── config.js           ← ✏️  YOUR personalisation file
├── media/
│   ├── images/         ← drop your photos here  (.jpg .png .webp)
│   └── videos/         ← drop your video clips here  (.mp4 .webm)
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

---

## ✏️ How to Personalise

Open **`config.js`** and edit:

| Field | What it does |
|---|---|
| `names.yours` / `names.hers` | Your names (shown at the bottom) |
| `heroTitle` | Big heading on the landing screen |
| `heroSubtitle` | Romantic subtitle below the title |
| `anniversaryDate` | Shown under the subtitle |
| `closingMessage` | The final message at the bottom |
| `events[]` | Your timeline cards (see below) |

### Adding a timeline event

```js
{
  date:    "November 2024",           // displayed date
  title:   "Our First Trip 🗺️",       // card headline
  caption: "We got a little lost…",   // 1-2 sentence description
  media:   "images/trip.jpg",         // path inside /media  (optional)
  type:    "image",                   // "image" | "video" | "text"
},
```

If you leave out `media`, the card shows a pretty emoji placeholder instead.

### Adding your photos & videos

Just drop files into `media/images/` or `media/videos/` and reference them in `config.js`:

```js
media: "images/my-photo.jpg"   // ← filename only, no leading slash
media: "videos/our-trip.mp4"
```

---

## 🐳 Running with Docker

### Option A — Docker Compose (recommended)

```bash
docker compose up --build -d
```

Then open **http://localhost:8080** in your browser.

To stop:
```bash
docker compose down
```

### Option B — Plain Docker

```bash
# Build the image
docker build -t anniversary .

# Run (port 8080 on your machine → port 80 in the container)
docker run -d -p 8080:80 --name anniversary-timeline anniversary
```

Open **http://localhost:8080**.

---

## 💡 Tips

- **Best photo ratio**: 4:3 or landscape — they fill the card nicely.
- **Video format**: `.mp4` (H.264) works in every browser.
- **Order**: Events are shown in the order you list them in `config.js`.
- **Want to deploy online?** Push the image to Docker Hub or any cloud container service (Railway, Render, Fly.io all support Docker).

---

Made with 💕
