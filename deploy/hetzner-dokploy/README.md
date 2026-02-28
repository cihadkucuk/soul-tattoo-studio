# Hetzner + Dokploy Deployment Guide

This project is prepared for Dokploy with Docker Compose and Next.js standalone output.

## Project structure

- `Dockerfile`: production image build for Next.js
- `docker-compose.yml`: Dokploy deployment definition (Traefik labels included)
- `docker-compose.local.yml`: direct VPS/local testing without Dokploy
- `.env.example`: required environment variables
- `deploy/hetzner-dokploy/README.md`: this guide

## 1) Provision Hetzner VPS

Use Ubuntu 22.04 or 24.04 and open ports:

- `22` (SSH)
- `80` (HTTP)
- `443` (HTTPS)

## 2) Install Dokploy on the VPS

```bash
curl -sSL https://dokploy.com/install.sh | sh
```

After installation, open:

- `http://YOUR_SERVER_IP:3000`

Complete Dokploy admin setup in the browser.

## 3) Add this repo in Dokploy

In Dokploy:

1. Create a project
2. Create an application with `Docker Compose`
3. Connect GitHub repo: `cihadkucuk/soul-tattoo-studio`
4. Branch: `main`
5. Compose path: `docker-compose.yml`

## 4) Configure environment variables (Dokploy UI)

Add these variables:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `DOKPLOY_DOMAIN` (example: `soultattooatelier.com`)

Optional defaults:

- `NODE_ENV=production`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## 5) Domain and DNS

In your DNS provider (GoDaddy/Cloudflare/etc):

- Add `A` record to Hetzner server IP
  - `@ -> YOUR_SERVER_IP`
  - `www -> YOUR_SERVER_IP` (optional)

Because compose includes Traefik labels, Dokploy can route traffic to port `3000` and issue SSL.

## 6) Deploy

In Dokploy, click Deploy.

Validate:

- Application status is healthy
- Site opens via your domain over HTTPS
- Contact form sends to Telegram

## 7) Updates

For new releases:

1. Push to `main`
2. Trigger redeploy from Dokploy (or enable auto deploy)

## Notes

- If your canonical domain is non-www, set `DOKPLOY_DOMAIN` to non-www only.
- If you want both `www` and non-www, add a redirect rule in Dokploy/Traefik.
