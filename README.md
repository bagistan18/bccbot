# QazTU University Portal

Modern university information system UI (HTML, CSS, JavaScript) — admin and student areas with EN/RU/KZ support.

## Quick start

Because the app loads i18n JSON via `fetch`, open it with a local HTTP server (not `file://`):

```bash
cd C:\Users\baga-\Projects\qaztu-portal
npx --yes serve .
```

Then open:

- **Login:** http://localhost:3000/login.html
- **Design system:** http://localhost:3000/styleguide.html
- **Admin dashboard:** http://localhost:3000/admin/dashboard.html
- **Student dashboard:** http://localhost:3000/student/dashboard.html

Or use the **Live Server** extension in VS Code/Cursor on `login.html`.

## Sign-in (mock)

| Username | Redirects to |
|----------|----------------|
| Any value (default) | Admin dashboard |
| Starts with `student` | Student dashboard |

## Project structure

```text
qaztu-portal/
├── login.html              # Split-screen login (Image 2)
├── styleguide.html         # Design tokens preview (Step 1)
├── admin/                  # Admin shell + stubs + full dashboard
├── student/                # Student shell + stubs + dashboard
└── assets/
    ├── css/                # tokens, components, layout, pages
    ├── js/                 # i18n, layout, charts, nav config
    └── i18n/               # en.json, ru.json, kz.json
```

## Hero image

Login hero uses an Unsplash campus photo via CSS (`assets/css/pages/login.css`). Replace with a local file at `assets/images/campus-hero.jpg` if you prefer offline hosting.

## Deploy on Railway

1. Push this repo to GitHub (see below).
2. Open [railway.com](https://railway.com) → **New Project** → **Deploy from GitHub repo** → select `qaztu-portal`.
3. Railway detects `package.json` and runs `npm start` (static server on `PORT`).
4. In the service → **Settings** → **Networking** → **Generate Domain** — open the public URL + `/login.html`.

CLI (optional):

```bash
npm i -g @railway/cli
railway login
cd qaztu-portal
railway init
railway up
```

## Next phase

- Spring Boot (or other Java) backend for real auth and data APIs
- Replace mock `dashboard-data.js` with API calls
