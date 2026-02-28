# Hostinger VPS Docker Deploy Guide (Next.js)

Bu proje `/api/contact` kullandigi icin static `out/` deploy degil, Docker ile Node runtime deploy edilmelidir.

## 1) VPS'e SSH baglan

```bash
ssh root@YOUR_VPS_IP
```

## 2) Docker + Compose kur (Ubuntu)

```bash
apt-get update
apt-get install -y ca-certificates curl gnupg
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo \"$VERSION_CODENAME\") stable" > /etc/apt/sources.list.d/docker.list
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Kontrol:

```bash
docker --version
docker compose version
```

Opsiyonel (root disinda user ile kullanacaksan):

```bash
usermod -aG docker $USER
newgrp docker
```

## 3) Projeyi VPS'e cek

```bash
cd /var/www
git clone git@github.com:cihadkucuk/soul-tattoo-studio.git
cd soul-tattoo-studio
```

## 4) Env ayarla

```bash
cp .env.production.example .env.production
nano .env.production
```

Degiskenleri doldur:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## 5) Build + Run

```bash
docker compose build --no-cache
docker compose up -d
docker compose ps
docker logs -f soul-tattoo-studio
```

Uygulama: `http://VPS_IP:3000`

## 6) Update deploy (yeni kod)

```bash
cd /var/www/soul-tattoo-studio
git pull
docker compose up -d --build
docker image prune -f
```

## 7) Domain + SSL (onerilen)

Docker app'i 3000'de calisir, Nginx reverse proxy ile 80/443 ac:

```bash
apt-get install -y nginx certbot python3-certbot-nginx
```

Nginx server block:

```nginx
server {
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

SSL:

```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 8) GoDaddy DNS

- `A` kaydi: `@ -> VPS_IP`
- `A` kaydi: `www -> VPS_IP` (veya `CNAME www -> @`)

DNS propagation tamamlandiktan sonra SSL al.
