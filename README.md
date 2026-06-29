# Liberia Rebuilding Party (REBUILDERS) — Website

A modern, production-quality rebuild of the Liberia Rebuilding Party (REBUILDERS) political website.

> "Rain or Shine, Rebuild Liberia."

## Tech Stack

- **Frontend:** React 19 + React Router 7 + Tailwind CSS + Framer Motion + Lucide Icons
- **Backend:** FastAPI (Python) + Motor (async MongoDB driver) + Pydantic v2
- **Database:** MongoDB
- **Tooling:** Yarn, CRACO (Create React App config override)

## Project Structure

```
.
├── backend/
│   ├── server.py            # FastAPI app — /api routes, contact form
│   ├── requirements.txt     # Python deps
│   └── .env                 # MONGO_URL, DB_NAME, CORS_ORIGINS
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── images/          # Party photos (leaders, gallery)
│   ├── src/
│   │   ├── App.js           # Router + layout
│   │   ├── index.css        # Tailwind + theme tokens
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Logo.jsx
│   │   │   └── Section.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Leadership.jsx
│   │   │   └── Contact.jsx
│   │   └── data/party.js    # All content (mission, pillars, leaders…)
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## Pages

1. **Home** — Hero, Vision, 7 Cardinal Pillars overview, Core Values, Leadership preview, Key Issues, Gallery, CTA
2. **About the Party** — History, Mission & Vision, Party Colors, full 7 Pillars manifesto, Values & Issues
3. **Leadership** — Current Executive (4), Pioneers (2), Membership Oath
4. **Contact** — Live functional contact form (persists to MongoDB), HQ info, embedded map

## Local Setup

### 1. Prerequisites
- Node.js 18+
- Python 3.11+
- MongoDB (local or Atlas)
- Yarn (`npm i -g yarn`)

### 2. Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# create .env
cat > .env <<EOF
MONGO_URL=mongodb://localhost:27017
DB_NAME=rebuilders
CORS_ORIGINS=*
EOF

uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```
Backend runs on `http://localhost:8001` — API base is `http://localhost:8001/api`.

### 3. Frontend
```bash
cd frontend
yarn install

# create .env
cat > .env <<EOF
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

yarn start
```
Frontend runs on `http://localhost:3000`.

## API Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/` | API status |
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | List contact submissions |

### POST /api/contact
```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "phone": "+231 …",        // optional
  "subject": "Hello",       // optional
  "message": "Your message"
}
```

## Customising

- All textual content lives in **`frontend/src/data/party.js`** — edit pillars, leaders, mission, vision, colours, contact info from this single file.
- Theme tokens (colours, fonts, radii) live in **`frontend/src/index.css`** under `:root`.
- Replace leader/gallery photos in **`frontend/public/images/leaders/`** and **`frontend/public/images/gallery/`**.

## Production Build

```bash
cd frontend && yarn build      # outputs to frontend/build/
```
Serve `frontend/build/` behind any static host and proxy `/api/*` to the FastAPI backend.

---

© Liberia Rebuilding Party. All rights reserved.
