import os
from typing import Any

from .project_store import ProjectStore


def get_storage_adapter() -> Any:
    """Return configured storage adapter: 's3' uses S3Adapter, otherwise local ProjectStore."""
    backend = os.environ.get('IBUILDINGS_STORAGE_BACKEND', 'local').lower()
    if backend == 's3':
        try:
            from .s3_adapter import S3Adapter
        except Exception as e:
            raise RuntimeError('S3 adapter selected but not available: ' + str(e))
        return S3Adapter()
    # default local file store
    return ProjectStore(os.environ.get('IBUILDINGS_BACKEND_STORAGE', 'backend_storage'))
