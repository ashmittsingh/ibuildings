from fastapi import FastAPI, Depends, HTTPException, Query
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
import traceback
from fastapi.middleware.cors import CORSMiddleware
import os
from backend.calculator.schemas import CompositeBeamInput, CompositeBeamOutput
from backend.calculator.service import run_composite_beam
from backend.auth.admin_auth import admin_required
from backend.storage.adapter import get_storage_adapter
from pathlib import Path
import json
from fastapi.responses import StreamingResponse
import io
from reportlab.pdfgen import canvas

app = FastAPI(title="iBuildings Calculator API")


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request, exc):
    return JSONResponse(status_code=422, content={
        "error": "validation_error",
        "detail": exc.errors() if hasattr(exc, 'errors') else str(exc)
    })


@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    # Log traceback for debugging (server-side only)
    tb = traceback.format_exc()
    print(tb)
    return JSONResponse(status_code=500, content={
        "error": "internal_error",
        "detail": str(exc)
    })

# Allow local frontend to call backend during development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

store = get_storage_adapter()


@app.get("/", tags=["info"])
def root():
    return {"service": "iBuildings Calculator Backend", "version": "0.1.0"}


@app.post("/public/calc/composite-beam", response_model=CompositeBeamOutput, tags=["calculation"])
def public_composite_beam(payload: CompositeBeamInput):
    """Public calculation endpoint for quick testing (no auth)."""
    out = run_composite_beam(payload)
    try:
        store.save_calculation("public", "composite-beam", 1, payload.dict(), out.dict())
    except Exception:
        pass
    return out


@app.post("/admin/calc/composite-beam", response_model=CompositeBeamOutput, tags=["calculation"])
def admin_composite_beam(payload: CompositeBeamInput, admin=Depends(admin_required)):
    """Admin-only calculation endpoint. Protect with a token in production."""
    out = run_composite_beam(payload)
    # allow client to specify project_code via payload.metadata.project_code
    try:
        pdata = payload.model_dump() if hasattr(payload, 'model_dump') else payload.dict()
        project_code = (pdata.get('metadata') or {}).get('project_code') or admin.get('project_code', 'admin')
    except Exception:
        project_code = admin.get('project_code', 'admin')
    store.save_calculation(project_code, "composite-beam", 1, pdata if 'pdata' in locals() else payload.dict(), out.model_dump() if hasattr(out, 'model_dump') else out.dict())
    return out


@app.get('/admin/projects', tags=['admin'])
def list_projects(admin=Depends(admin_required)):
    # return index of projects
    try:
        idx = json.loads(store.index_file.read_text(encoding='utf-8'))
    except Exception:
        idx = {}
    return {"projects": list(idx.keys()), "index": idx}


@app.get('/admin/projects/{project_code}', tags=['admin'])
def project_files(project_code: str, admin=Depends(admin_required)):
    try:
        idx = json.loads(store.index_file.read_text(encoding='utf-8'))
    except Exception:
        idx = {}
    return {"project_code": project_code, "records": idx.get(project_code, [])}


@app.get('/admin/projects/{project_code}/download', tags=['admin'])
def project_file_download(project_code: str, key: str = Query(...), admin=Depends(admin_required)):
    """Download a specific file for a project. For S3 backend returns a presigned URL, for local storage streams the file."""
    # If adapter supports presigned URLs, use it
    if hasattr(store, 'generate_presigned_url'):
        try:
            # Expect key to be the S3 key relative to bucket/prefix (e.g. 'project_code/composite-beam/...')
            url = store.generate_presigned_url(key)
            return {"url": url}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    # Otherwise treat key as a path under the local backend_storage
    base = Path(os.environ.get('IBUILDINGS_BACKEND_STORAGE', 'backend_storage'))
    file_path = base / key
    if not file_path.exists():
        raise HTTPException(status_code=404, detail=f"File not found: {key}")
    return StreamingResponse(open(file_path, 'rb'), media_type='application/octet-stream')


@app.post("/admin/calc/composite-beam/pdf", tags=["calculation"])
def admin_composite_beam_pdf(payload: CompositeBeamInput, admin=Depends(admin_required)):
    """Generate a printable PDF report for the composite-beam calculation and return it.

    Also stores the PDF in project storage.
    """
    out = run_composite_beam(payload)
    # Create PDF in-memory
    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=(595, 842))  # A4 approx in points
    c.setFont("Helvetica-Bold", 14)
    c.drawString(40, 800, "iBuildings - Composite Beam Report")
    c.setFont("Helvetica", 10)
    c.drawString(40, 782, f"Section: {out['summary'].get('section')}")
    c.drawString(40, 770, f"Mode: {out['summary'].get('mode')}")
    c.drawString(40, 758, f"Overall: {out['summary'].get('overall_status')}")
    c.drawString(40, 740, "--- ULS ---")
    c.drawString(60, 728, f"Moment (kN·m): {out['uls'].get('moment_kNm')}")
    c.drawString(60, 716, f"Shear (kN): {out['uls'].get('shear_kN')}")
    c.drawString(40, 700, "--- SLS ---")
    c.drawString(60, 688, f"Short deflection (mm): {out['sls'].get('deflection_short_mm')}")
    c.drawString(60, 676, f"Long deflection (mm): {out['sls'].get('deflection_long_mm')}")
    c.drawString(40, 650, "Warnings:")
    y = 638
    for w in out.get('warnings', [])[:10]:
        c.drawString(60, y, f"- {w}")
        y -= 12
    c.showPage()
    c.save()
    pdf_bytes = buf.getvalue()
    buf.close()
    ts = __import__('datetime').datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
    store.save_pdf(admin.get("project_code", "admin"), "composite-beam", ts, pdf_bytes)
    return StreamingResponse(io.BytesIO(pdf_bytes), media_type="application/pdf")
