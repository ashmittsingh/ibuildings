from calculator.schemas import CompositeBeamInput
from calculator.service import run_composite_beam


def test_composite_beam_runs():
    payload = CompositeBeamInput(span_m=6.0, section="ISMB200", loads={"udl_kN_per_m": 5})
    out = run_composite_beam(payload)
    assert out.uls.moment_kNm is not None
    assert isinstance(out.warnings, list)
