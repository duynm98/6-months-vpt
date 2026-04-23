# ── Anniversary Timeline ──────────────────────────────────
# Lightweight Nginx container serving the static site.
#
# Build:   docker build -t anniversary .
# Run:     docker run -p 8080:80 anniversary
# Open:    http://localhost:8080
# ─────────────────────────────────────────────────────────

FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy site files
COPY index.html  /usr/share/nginx/html/index.html
COPY config.js   /usr/share/nginx/html/config.js
COPY media/      /usr/share/nginx/html/media/
COPY nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
