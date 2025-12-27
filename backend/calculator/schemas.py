from pydantic import BaseModel, Field, condecimal
from typing import Optional, Dict, Any, List


class Loads(BaseModel):
    udl_kN_per_m: float = Field(0.0, description="Uniform distributed load (kN/m)")
    live_load_kN_per_m: float = Field(0.0, description="Live load (kN/m)")

    model_config = {"extra": "forbid"}


class CompositeBeamInput(BaseModel):
    model_config = {"extra": "forbid"}
    span_m: float = Field(6.0, gt=0, description="Clear span in metres")
    section: str = Field("ISMB200", description="Section name")
    loads: Loads = Field(default_factory=Loads)
    castellated: bool = False
    metadata: Optional[Dict[str, Any]] = None


class ULS(BaseModel):
    moment_kNm: float
    shear_kN: float
    total_load_kN: Optional[float] = None
    flexural_utilization: Optional[float] = None


class SLS(BaseModel):
    deflection_short_mm: float
    deflection_long_mm: Optional[float] = None
    limit_mm: float
    status: str


class CompositeBeamOutput(BaseModel):
    model_config = {"extra": "allow"}
    summary: Dict[str, Any]
    uls: ULS
    sls: SLS
    warnings: Optional[List[str]] = []
    details: Optional[Dict[str, Any]] = None
