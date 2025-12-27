from fastapi.testclient import TestClient
from backend.main import app


client = TestClient(app)


def test_public_composite_beam_ok():
    payload = {
        "span_m": 6.0,
        "section": "ISMB200",
        "loads": {"udl_kN_per_m": 5.0, "live_load_kN_per_m": 0.0}
    }
    r = client.post('/public/calc/composite-beam', json=payload)
    assert r.status_code == 200, r.text
    j = r.json()
    assert 'uls' in j and 'sls' in j


def test_public_composite_beam_validation_error():
    payload = {"span_m": -1, "section": "ISMB200"}
    r = client.post('/public/calc/composite-beam', json=payload)
    assert r.status_code == 422
    j = r.json()
    assert j.get('error') == 'validation_error'
