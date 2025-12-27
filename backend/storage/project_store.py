import os
import json
from datetime import datetime
from pathlib import Path


class ProjectStore:
    def __init__(self, base_path: str = "backend_storage"):
        self.base = Path(base_path)
        self.base.mkdir(parents=True, exist_ok=True)
        # index file to track projects and calculations
        self.index_file = self.base / 'projects_index.json'
        if not self.index_file.exists():
            with self.index_file.open('w', encoding='utf-8') as f:
                json.dump({}, f)

    def _project_dir(self, project_code: str) -> Path:
        p = self.base / project_code
        p.mkdir(parents=True, exist_ok=True)
        return p

    def save_calculation(self, project_code: str, calc_type: str, version: int, inputs: dict, outputs: dict) -> dict:
        project_dir = self._project_dir(project_code)
        ts = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
        inputs_path = project_dir / f"{calc_type}_inputs_{ts}.json"
        outputs_path = project_dir / f"{calc_type}_outputs_{ts}.json"
        with inputs_path.open("w", encoding="utf-8") as f:
            json.dump(inputs, f, indent=2)
        with outputs_path.open("w", encoding="utf-8") as f:
            json.dump(outputs, f, indent=2)
        # update index
        try:
            idx = json.loads(self.index_file.read_text(encoding='utf-8'))
        except Exception:
            idx = {}
        proj = idx.get(project_code, [])
        record = {"calc_type": calc_type, "version": version, "inputs": str(inputs_path), "outputs": str(outputs_path), "timestamp": ts}
        proj.append(record)
        idx[project_code] = proj
        with self.index_file.open('w', encoding='utf-8') as f:
            json.dump(idx, f, indent=2)
        return {"inputs": str(inputs_path), "outputs": str(outputs_path), "timestamp": ts}

    def save_pdf(self, project_code: str, calc_type: str, ts: str, pdf_bytes: bytes) -> str:
        project_dir = self._project_dir(project_code)
        pdf_path = project_dir / f"{calc_type}_report_{ts}.pdf"
        with pdf_path.open("wb") as f:
            f.write(pdf_bytes)
        return str(pdf_path)
