# Railway-ға орналастыру (QazTU)

## 1-әдіс: GitHub арқылы (ұсынылады)

1. Кодты GitHub-қа жіберіңіз (`gh auth login`, содан кейін `gh repo create ... --push`).
2. [railway.com](https://railway.com) → кіріңіз → **New Project**.
3. **Deploy from GitHub repo** → `qaztu-portal` таңдаңыз.
4. Deploy аяқталғанша күтіңіз.
5. Сервис → **Settings** → **Networking** → **Generate Domain**.
6. Сайт: `https://СІЗДІҢ-ДОМЕН.railway.app/login.html`

## 2-әдіс: Railway CLI

```powershell
npm install -g @railway/cli
railway login
cd C:\Users\baga-\Projects\qaztu-portal
railway init
railway up
railway domain
```

## Ескертулер

- Бос `index.html` `/` адресінде `login.html`-ға бағыттайды.
- Негізгі кіру: `/login.html`
- Әкімші: `/admin/dashboard.html`
