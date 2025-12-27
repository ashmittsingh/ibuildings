# Deploying the iBuildings Calculator Backend to Render

This document describes recommended steps to deploy the FastAPI calculator backend to Render (https://render.com) for a client demo.

Prerequisites
- A GitHub repo for the backend (recommended: `ibuildings-backend`).
- `requirements.txt` at repo root (this project already contains one).
- `backend/main.py` exposes a FastAPI `app` object.

Recommended Render settings
- Environment: Python 3.11 (or 3.10)
- Build Command: `pip install -r requirements.txt`
- Start Command (FastAPI + gunicorn):

```
gunicorn -k uvicorn.workers.UvicornWorker backend.main:app --bind 0.0.0.0:$PORT --workers 2
```

Notes
- Use `backend.main:app` (package-qualified) to ensure imports resolve on Render.
- Render will supply the `PORT` env var; the start command uses it.

Environment variables to configure
- `ADMIN_JWT_SECRET` — required for admin token signing (set a strong secret)
- `IBUILDINGS_STORAGE_BACKEND` — `local` or `s3` (optional)
- `IBUILDINGS_BACKEND_STORAGE` — local storage path (if using `local`)
- `IBUILDINGS_S3_BUCKET`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `IBUILDINGS_S3_PREFIX` — when using S3
- `CORS_ORIGINS` — comma-separated origins to allow (for demo set `https://<your-vercel-app>.vercel.app`)

Healthcheck
- Render will periodically call the root path; `GET /` should return service info. Keep that lightweight.

Security & Production Notes
- Do NOT check secrets into the repo.
- Set `ADMIN_JWT_SECRET` as a Render environment variable (not in code).
- For production, set cookies `Secure; SameSite=None` and enable HTTPS-only settings on frontend/backends.

Post-deploy sanity-check
1. Visit the service URL: `https://<your-service>.onrender.com/` (should return JSON status).
2. From the frontend preview (Vercel), call `NEXT_PUBLIC_API_URL` pointing to Render and test the calculator flow.
3. Verify admin login works (use a staging account) and that saved PDFs show up in storage.

If you want, I can create a sample `render.yaml` and a minimal GitHub Actions workflow to validate tests before deploy.
