from fastapi import HTTPException, Request
import os
import jwt
from jwt import PyJWTError


def admin_required(request: Request):
    """Validate admin JWT from Authorization header or cookie.

    Looks for Bearer token in `Authorization`, then cookie `IBUILDINGS_ADMIN_TOKEN`.
    Verifies signature using env `ADMIN_JWT_SECRET`.
    """
    token = None
    auth = request.headers.get("authorization")
    if auth and auth.lower().startswith("bearer "):
        token = auth.split(None, 1)[1].strip()
    if not token:
        token = request.cookies.get("IBUILDINGS_ADMIN_TOKEN")

    secret = os.environ.get("ADMIN_JWT_SECRET", "devsecret")
    if not token:
        raise HTTPException(status_code=401, detail="Unauthorized")
    try:
        payload = jwt.decode(token, secret, algorithms=["HS256"])
    except PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
    # return a small admin dict
    return {"role": "ADMIN", "user": payload.get("sub"), "project_code": payload.get("project_code", "default")}
