from .composite_beam import compute
from .schemas import CompositeBeamInput, CompositeBeamOutput


def run_composite_beam(payload: CompositeBeamInput) -> CompositeBeamOutput:
    """Wrapper that converts Pydantic model to compute() and returns typed output."""
    try:
        data = payload.model_dump()
    except Exception:
        data = payload.dict() if hasattr(payload, "dict") else dict(payload)
    raw = compute(data)
    # coerce into Pydantic model for consistent JSON output
    return CompositeBeamOutput(**raw)
