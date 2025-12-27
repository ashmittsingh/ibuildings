import sys
from fastapi.testclient import TestClient
from backend.main import app


def run():
    client = TestClient(app)
    print('Running smoke test: /public/calc/composite-beam')
    payload = {"span_m": 6.0, "section": "ISMB200", "loads": {"udl_kN_per_m": 5.0}}
    r = client.post('/public/calc/composite-beam', json=payload)
    print('Status:', r.status_code)
    if r.status_code != 200:
        print('Response:', r.text)
        return 2
    j = r.json()
    print('Keys:', list(j.keys()))

    print('Running validation test: negative span')
    r2 = client.post('/public/calc/composite-beam', json={"span_m": -1})
    print('Status:', r2.status_code)
    print('Body:', r2.text)
    return 0 if r2.status_code == 422 else 3


if __name__ == '__main__':
    sys.exit(run())
