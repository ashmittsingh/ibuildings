# iBuildings - Backend (FastAPI)

This folder contains a minimal FastAPI backend scaffold for the engineering calculators.

Quick start (local):

1. Create a virtual environment and activate it (Windows example):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

2. Test the public calculator endpoint:

POST http://localhost:8000/public/calc/composite-beam

Body (JSON):

```json
{
  "span_m": 6.0,
  "section": "ISMB200",
  "loads": { "udl_kN_per_m": 5 }
}
```

Notes:
- The backend uses JWT-based admin validation by default. For development you can set `ADMIN_USER`/`ADMIN_PASS` and `ADMIN_JWT_SECRET` environment variables.
- Replace `calculator/composite_beam.py` with your vetted engineering code; keep `schemas.py` for input/output contracts.

Storage options
---------------
By default the backend saves project inputs/outputs and generated PDFs to a local folder (`backend_storage`).
You can configure a cloud storage adapter (S3) instead by setting these environment variables:

- `IBUILDINGS_STORAGE_BACKEND=s3`
- `IBUILDINGS_S3_BUCKET`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (optional)
- `IBUILDINGS_S3_PREFIX` (optional prefix within the bucket)

The backend includes a `backend/storage/s3_adapter.py` which uses `boto3`. If S3 is not configured, the system falls back to local storage.
