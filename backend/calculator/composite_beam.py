"""Composite castellated/cellular beam checker.

This module contains the engineering logic refactored to a single
`compute(data: dict) -> dict` function which accepts a JSON-like
dictionary and returns a structured result suitable for the frontend.

The original interactive script has been adapted to use `data.get(...)`
with sensible defaults and no `input()` / `print()` calls.
"""
from typing import Dict, Any
import math

# ---------------------------
# ISMB table (user-supplied)
ISMB = [
    {"name":"ISMB100","w":11.5,"d":100.0,"A":1460.0,"Ix":2575000.0,"Iy":408000.0,"Zex":51500.0,"Zey":10900.0,"Zpx":57439.36,"Zpy":20592.4,"bf":75.0,"tf":7.2,"tw":4.0,"dw":65.0,"rx":42.0,"ry":16.7},
    {"name":"ISMB125","w":13.0,"d":125.0,"A":1660.0,"Ix":4490000.0,"Iy":437000.0,"Zex":71800.0,"Zey":11700.0,"Zpx":80179.644,"Zpy":21906.432,"bf":75.0,"tf":7.6,"tw":4.4,"dw":89.2,"rx":52.0,"ry":16.2},
    {"name":"ISMB150","w":14.9,"d":150.0,"A":1900.0,"Ix":7264000.0,"Iy":526000.0,"Zex":96900.0,"Zey":13100.0,"Zpx":108384.448,"Zpy":25096.448,"bf":80.0,"tf":7.6,"tw":4.8,"dw":113.9,"rx":61.8,"ry":16.6},
    {"name":"ISMB175","w":19.3,"d":175.0,"A":2462.0,"Ix":12720000.0,"Iy":850000.0,"Zex":145400.0,"Zey":18900.0,"Zpx":163032.255,"Zpy":36023.3625,"bf":90.0,"tf":8.6,"tw":5.5,"dw":134.5,"rx":71.9,"ry":18.6},
    {"name":"ISMB200","w":25.4,"d":200.0,"A":3233.0,"Ix":22354000.0,"Iy":1500000.0,"Zex":223500.0,"Zey":30000.0,"Zpx":249688.848,"Zpy":55449.054,"bf":100.0,"tf":10.8,"tw":5.7,"dw":152.7,"rx":83.2,"ry":21.5},
    {"name":"ISMB225","w":31.2,"d":225.0,"A":3972.0,"Ix":34418000.0,"Iy":2183000.0,"Zex":305900.0,"Zey":39700.0,"Zpx":342646.785,"Zpy":73517.2875,"bf":110.0,"tf":11.8,"tw":6.5,"dw":173.3,"rx":93.1,"ry":23.4},
    {"name":"ISMB250","w":37.3,"d":250.0,"A":4755.0,"Ix":51316000.0,"Iy":3345000.0,"Zex":410500.0,"Zey":53500.0,"Zpx":458421.875,"Zpy":100334.3125,"bf":125.0,"tf":12.5,"tw":6.9,"dw":194.1,"rx":103.9,"ry":26.5},
    {"name":"ISMB300","w":44.2,"d":300.0,"A":5626.0,"Ix":86036000.0,"Iy":4539000.0,"Zex":573600.0,"Zey":64800.0,"Zpx":641276.8,"Zpy":125390.0,"bf":140.0,"tf":12.4,"tw":7.5,"dw":241.5,"rx":123.7,"ry":28.4},
    {"name":"ISMB350","w":52.4,"d":350.0,"A":6671.0,"Ix":136303000.0,"Iy":5377000.0,"Zex":778900.0,"Zey":76800.0,"Zpx":877009.184,"Zpy":144435.044,"bf":140.0,"tf":14.2,"tw":8.1,"dw":288.0,"rx":142.9,"ry":28.4},
    {"name":"ISMB400","w":61.6,"d":400.0,"A":7846.0,"Ix":204584000.0,"Iy":6221000.0,"Zex":1022900.0,"Zey":88900.0,"Zpx":1161478.4,"Zpy":164087.32,"bf":140.0,"tf":16.0,"tw":8.9,"dw":334.4,"rx":161.5,"ry":28.2},
    {"name":"ISMB450","w":72.4,"d":450.0,"A":9227.0,"Ix":303908000.0,"Iy":8340000.0,"Zex":1350700.0,"Zey":111200.0,"Zpx":1534204.944,"Zpy":204921.768,"bf":150.0,"tf":17.4,"tw":9.4,"dw":379.2,"rx":181.5,"ry":30.1},
    {"name":"ISMB500","w":86.9,"d":500.0,"A":11074.0,"Ix":452183000.0,"Iy":13698000.0,"Zex":1808700.0,"Zey":152200.0,"Zpx":2047546.368,"Zpy":290750.256,"bf":180.0,"tf":17.2,"tw":10.2,"dw":424.1,"rx":202.1,"ry":35.2},
    {"name":"ISMB550","w":103.7,"d":550.0,"A":13211.0,"Ix":648936000.0,"Iy":18338000.0,"Zex":2359800.0,"Zey":193000.0,"Zpx":2678360.788,"Zpy":364402.504,"bf":190.0,"tf":19.3,"tw":11.2,"dw":467.5,"rx":221.6,"ry":37.3},
    {"name":"ISMB600","w":122.6,"d":600.0,"A":15621.0,"Ix":918130000.0,"Iy":26510000.0,"Zex":3060400.0,"Zey":252500.0,"Zpx":3465377.28,"Zpy":478742.4,"bf":210.0,"tf":20.8,"tw":12.0,"dw":509.7,"rx":242.4,"ry":41.2}
]

# ---------------------------
# constants
G = 10.0                 # N = kg * G
FY = 250.0               # MPa
E_STEEL = 210000.0       # MPa
POISSON = 0.3
PHI_B = 0.9
Kc = 0.5                 # creep factor for long-term


# ---------------------------
# helpers & functions
def get_section(name: str) -> Dict[str, Any]:
    for s in ISMB:
        if s["name"].lower() == str(name).lower():
            return s
    raise ValueError("Section not found")


def kgm2_to_kgpm(kgm2, trib_m):
    return kgm2 * trib_m


def kgpm_to_Npm_and_Npmm(kgpm):
    N_per_m = kgpm * G
    N_per_mm = N_per_m / 1000.0
    return N_per_m, N_per_mm


def VM_uniform_from_wNm(L_m, w_N_per_mm):
    L_mm = L_m * 1000.0
    V_N = w_N_per_mm * L_mm / 2.0
    M_Nmm = w_N_per_mm * L_mm**2 / 8.0
    return V_N, M_Nmm


def epsilon(fy): return math.sqrt(250.0 / fy)


def estimate_Tv(h_over_tw, d_web, tw, fy=FY, E=E_STEEL, nu=POISSON, Kv=5.35):
    if d_web <= 0 or tw <= 0:
        raise ValueError("d_web and tw must be positive.")
    tau_cr = (Kv * math.pi**2 * E) / (12.0 * (1.0 - nu**2)) * (tw / d_web)**2  # MPa
    denom = math.sqrt(3.0) * tau_cr if tau_cr > 0 else 1e-12
    lambda_w = math.sqrt(max(0.0, fy / denom))
    Tv_08 = fy / math.sqrt(3.0)
    if lambda_w <= 0.8:
        Tv = Tv_08
    elif lambda_w < 1.2:
        Tv_12 = fy / (math.sqrt(3.0) * (1.2**2))
        Tv = Tv_08 + (Tv_12 - Tv_08) * (lambda_w - 0.8) / (1.2 - 0.8)
    else:
        Tv = fy / (math.sqrt(3.0) * (lambda_w**2))
    eps = epsilon(fy)
    thresh1 = 67.0 * eps
    thresh2 = 67.0 * eps * math.sqrt(Kv / 5.35)
    stiff_required = False
    note = ""
    if h_over_tw > thresh2:
        stiff_required = True
        note = f"Web stiffeners recommended (h/tw = {h_over_tw:.2f} > {thresh2:.2f})."
    elif h_over_tw > thresh1:
        note = f"Web near slenderness limit (h/tw = {h_over_tw:.2f} > {thresh1:.2f}); consider detailing."
    else:
        note = f"Web slenderness acceptable (h/tw = {h_over_tw:.2f} <= {thresh1:.2f})."
    return Tv, tau_cr, lambda_w, stiff_required, note


def shear_check_split_web_IS800(section, Do, spacing_mm, V_N, fy=FY):
    # If Do == 0 -> full I-section (single web)
    if Do <= 0:
        h_post = section["d"] - 2.0 * section["tf"]
        h_each = h_post
    else:
        # clear vertical web between holes
        h_post = spacing_mm - Do
        if h_post <= 0:
            h_post = max(1.0, section["d"] - 2.0 * section["tf"])
        h_each = h_post / 2.0
    tw = section["tw"]
    Aw = tw * h_each if h_each>0 else 0.0
    h_over_tw = h_each / tw if tw>0 else float('inf')
    Tv_MPa, tau_cr_MPa, lambda_w, stiff_req, note = estimate_Tv(h_over_tw, d_web=h_each, tw=tw, fy=fy)
    Vn_post_N = Tv_MPa * Aw
    Vn_total_N = (2.0 * Vn_post_N) if Do>0 else Vn_post_N
    shear_util = V_N / Vn_total_N if Vn_total_N > 0 else float('inf')
    per_post_tau_MPa = (V_N / (2.0 if Do>0 else 1.0)) / Aw if Aw>0 else float('inf')
    return {
        "h_post": h_post,
        "h_each": h_each,
        "Aw_post": Aw,
        "h_over_tw": h_over_tw,
        "Tv_MPa": Tv_MPa,
        "tau_cr_MPa": tau_cr_MPa,
        "lambda_w": lambda_w,
        "stiff_req": stiff_req,
        "note": note,
        "Vn_total_N": Vn_total_N,
        "Vn_post_N": Vn_post_N,
        "per_post_tau_MPa": per_post_tau_MPa,
        "shear_util": shear_util
    }

# studs table (simplified representative values)
TABLE9_Qn_fck25_kN = {16:42.0, 20:65.0, 22:79.0, 25:100.0}
def stud_capacity_from_table9(dia_mm, fck):
    sizes = sorted(TABLE9_Qn_fck25_kN.keys())
    chosen = min(sizes, key=lambda x: abs(x - dia_mm))
    base_kN = TABLE9_Qn_fck25_kN[chosen]
    scale = fck / 25.0
    Qn_kN = base_kN * scale
    return Qn_kN * 1000.0  # N

def studs_required_from_Qn(C_slab_N, L_m, Qn_N, smin=200.0, smax=500.0):
    if Qn_N <= 0:
        return {"nreq": None, "spacing_mm": None, "ok": False}
    nreq = math.ceil(C_slab_N / Qn_N)
    spacing_mm = (L_m * 1000.0) / nreq if nreq>0 else None
    ok = spacing_mm is not None and smin <= spacing_mm <= smax
    return {"nreq": nreq, "spacing_mm": spacing_mm, "ok": ok, "Qn_N": Qn_N}


def fmt(x,f="{:.3f}"):
    try: return f.format(x)
    except: return str(x)


def compute(data: Dict[str, Any]) -> Dict[str, Any]:
    """Compute composite beam checks from a JSON-like dict.

    Expected keys (all optional, defaults shown):
      - L (span, m) default 6.0
      - beam_spacing_mm default 1200
      - Td (deck slab mm) default 50
      - Tc (topping mm) default 50
      - beam_position 'interior' or 'edge' default 'interior'
      - mode 'castellated' or 'I' default 'castellated'
      - sec_name e.g. 'ISMB200' default 'ISMB200'
      - Do opening diameter mm default 0
      - propped bool default False
      - frac_live default 1.0
      - LL_kgm2 default 300
      - FF_kgm2 default 150
      - PR_kgm2 default 0
      - FI_kgm2 default 0
      - CL_kgm2 default 75
      - WL_kgm default 0
      - FCK default 25
      - stud_dia_user optional

    Returns a dict with keys: summary, uls, sls, warnings, and details.
    """
    # read inputs with defaults
    L = float(data.get("L", data.get("span_m", 6.0)))
    beam_spacing_mm = float(data.get("beam_spacing_mm",  data.get("beam_spacing", 1200.0)))
    bs_m = beam_spacing_mm / 1000.0

    Td = float(data.get("Td",  data.get("deck_slab_mm", 50.0)))
    if Td < 50.0: Td = 50.0
    Tc = float(data.get("Tc", data.get("topping_mm", 50.0)))
    if Tc < 50.0: Tc = 50.0
    Ts = Td + Tc

    beam_position = str(data.get("beam_position", data.get("position", "interior"))).strip().lower()
    if beam_position not in ("interior","edge"):
        beam_position = "interior"

    mode = str(data.get("mode", "castellated")).strip().lower()
    sec_name = str(data.get("sec_name", data.get("section", "ISMB200")))
    section = get_section(sec_name)
    Do_in = float(data.get("Do", data.get("Do_in", 0.0)))
    if mode == "i":
        Do_in = 0.0
    Do = Do_in if Do_in > 0 else 0.0

    propped = bool(data.get("propped", data.get("construction_propped", False)))
    frac_live = float(data.get("frac_live", 1.0))
    if frac_live < 0.0: frac_live = 0.0
    if frac_live > 1.0: frac_live = 1.0

    interior_beff_mm = min(beam_spacing_mm, 0.7 * L * 1000.0)
    beff_mm = interior_beff_mm if beam_position == "interior" else 0.5 * interior_beff_mm

    LL_kgm2 = float(data.get("LL_kgm2", data.get("LL", 300.0)))
    FF_kgm2 = float(data.get("FF_kgm2", data.get("FF", 150.0)))
    PR_kgm2 = float(data.get("PR_kgm2", data.get("PR", 0.0)))
    FI_kgm2 = float(data.get("FI_kgm2", data.get("FI", 0.0)))
    CL_kgm2 = float(data.get("CL_kgm2", data.get("CL", 75.0)))
    WL_kgm = float(data.get("WL_kgm", data.get("WL", 0.0)))
    FCK = float(data.get("FCK",  data.get("fck", 25.0)))
    if FCK < 25.0: FCK = 25.0
    stud_dia_user = data.get("stud_dia_user", None)
    if stud_dia_user is not None:
        try:
            stud_dia_user = int(stud_dia_user)
        except:
            stud_dia_user = None

    d_orig = section["d"]
    hex_side = Do / math.sqrt(3.0) if Do>0 else 0.0
    spacing_rule_mm = max(Do + hex_side, 225.0) if Do>0 else 0.0
    d_new = d_orig + (Do / 2.0) if Do>0 else d_orig

    slab_self_kgm2 = 2500.0 * ((Td / 2.0 + Tc) / 1000.0)
    slab_self_kgpm = kgm2_to_kgpm(slab_self_kgm2, bs_m)

    LL_kgpm = kgm2_to_kgpm(LL_kgm2, bs_m)
    FF_kgpm = kgm2_to_kgpm(FF_kgm2, bs_m)
    PR_kgpm = kgm2_to_kgpm(PR_kgm2, bs_m)
    FI_kgpm = kgm2_to_kgpm(FI_kgm2, bs_m)
    CL_kgpm = kgm2_to_kgpm(CL_kgm2, bs_m)
    WL_kgpm = WL_kgm

    w_service_kgpm = slab_self_kgpm + LL_kgpm + FF_kgpm + PR_kgpm + FI_kgpm + WL_kgpm
    w_service_tpm = w_service_kgpm / 1000.0

    load_factor = 1.5
    w_fact_kgpm = load_factor * w_service_kgpm
    w_fact_tpm = w_fact_kgpm / 1000.0
    w_fact_Npm, w_fact_Npmm = kgpm_to_Npm_and_Npmm(w_fact_kgpm)
    V_fact_N, M_fact_Nmm = VM_uniform_from_wNm(L, w_fact_Npmm)

    V_fact_t = V_fact_N / (1000.0 * G)
    V_fact_kN = V_fact_N / 1000.0
    M_fact_kNm = M_fact_Nmm / 1e6
    M_fact_t_m = M_fact_Nmm / (G * 1e6)

    def table16_a(fy, fck): return fy / (0.36 * fck)

    def table16_Md(As, Af, beff, ds, dc, tf, tw, d_new, fy, fck, gamma0=1.10):
        a = table16_a(fy, fck)
        beff_ds = beff * ds
        if beff_ds > a * As:
            xu = a * As / beff
            Md = As * (fy / gamma0) * (dc + 0.5*ds - 0.42 * xu)
            return Md, xu, 1
        if beff_ds < a * As <= (beff_ds + 2.0 * a * Af):
            sigma_c = 0.36 * fck
            bf = Af / tf
            xu = ds + ((fy * As) - (sigma_c * beff * ds)) / (fy * bf)
            Md = (fy / gamma0) * ( As * (dc + 0.08 * ds) - ( bf * ( (xu - ds) * (xu + 0.16 * ds) ) / 2.0 ) )
            return Md, xu, 2
        xu = ds + tf + ( a * (As - 2.0 * Af) - beff_ds ) / (2.0 * a * tw)
        Md = (fy / gamma0) * ( As * (dc + 0.08 * ds) - 2.0 * Af * (0.5 * tf + 0.58 * ds) - 2.0 * tw * (xu - ds - tf) * (0.5 * xu + 0.08 * ds + 0.5 * tf) )
        return Md, xu, 3

    As = section["A"]
    Af = section["bf"] * section["tf"]
    ds = Td
    dc = Ts + d_new / 2.0
    Md_Nmm, xu, case = table16_Md(As=As, Af=Af, beff=beff_mm, ds=ds, dc=dc, tf=section["tf"], tw=section["tw"], d_new=d_new, fy=FY, fck=FCK, gamma0=1.10)
    phiMp = PHI_B * Md_Nmm
    flex_util = (M_fact_Nmm / phiMp) if phiMp>0 else float('inf')
    flex_ok = flex_util <= 1.0

    shear = shear_check_split_web_IS800(section, Do, spacing_rule_mm, V_fact_N, FY)
    shear_util = shear["shear_util"]
    shear_ok = shear_util <= 1.0

    vier = None
    vier_ok = True
    if Do>0:
        def vierendeel_check(section, M_Nmm, V_N, pna_y, steel_centroid_from_slab_top_val, As):
            Mv = V_N * (section["d"] / 4.0)
            A_tee = 0.5 * As
            z = abs(steel_centroid_from_slab_top_val - pna_y)
            Z_tee = A_tee * z
            Mn_tee = FY * Z_tee
            d_eff = max(1.0, section["d"] - section["tf"])
            N_tee = M_Nmm / d_eff if d_eff>0 else float('inf')
            util_bend = (Mv / (PHI_B * Mn_tee)) if Mn_tee>0 else float('inf')
            util_axial = (N_tee / (A_tee * FY)) if (A_tee * FY)>0 else float('inf')
            return {"Mv":Mv, "Mn_tee":Mn_tee, "N_tee":N_tee, "util_bend":util_bend, "util_axial":util_axial, "combined":util_bend + util_axial}
        pna_assumed = xu if xu is not None else (Ts + d_new/2.0)
        steel_centroid_val = Ts + d_new/2.0
        vier = vierendeel_check(section, M_fact_Nmm, V_fact_N, pna_y=pna_assumed, steel_centroid_from_slab_top_val=steel_centroid_val, As=As)
        vier_ok = vier["combined"] <= 1.0

    def approx_cast_I(section, d_new, Do):
        d_orig = section["d"]
        if d_orig <= 0: return section["Ix"]
        scale = (d_new / d_orig)**3
        return section["Ix"] * scale

    I_steel_cast = approx_cast_I(section, d_new, Do)
    EI_steel_cast = E_STEEL * I_steel_cast

    def mid_deflection_uniform(w_N_per_mm, L_mm, EI_Nmm2):
        if EI_Nmm2 <= 0: return float('inf')
        return 5.0 * w_N_per_mm * L_mm**4 / (384.0 * EI_Nmm2)

    CL_kgpm = kgm2_to_kgpm(CL_kgm2, bs_m)
    w_dead_kgpm = slab_self_kgpm + CL_kgpm
    w_dead_Npm, w_dead_Npmm = kgpm_to_Npm_and_Npmm(w_dead_kgpm)
    L_mm = L * 1000.0
    delta_A_mm = 0.0 if propped else mid_deflection_uniform(w_dead_Npmm, L_mm, EI_steel_cast)

    LL_kgpm = kgm2_to_kgpm(LL_kgm2, bs_m)
    FF_kgpm = kgm2_to_kgpm(FF_kgm2, bs_m)
    PR_kgpm = kgm2_to_kgpm(PR_kgm2, bs_m)
    FI_kgpm = kgm2_to_kgpm(FI_kgm2, bs_m)
    WL_kgpm = WL_kgpm = WL_kgpm if 'WL_kgpm' in globals() else WL_kgm
    w_live_kgpm = LL_kgpm + FF_kgpm + PR_kgpm + FI_kgpm + WL_kgpm
    w_live_kgpm_for_defl = frac_live * w_live_kgpm
    w_live_Npm, w_live_Npmm = kgpm_to_Npm_and_Npmm(w_live_kgpm_for_defl)

    def transformed_EI_both(section, d_new, slab_thk, beff, fck, Kc):
        E_c = 5000.0 * math.sqrt(max(1.0, fck))
        E_s = E_STEEL
        m_short = E_s / E_c if E_c>0 else float('inf')
        m_long = E_s / (Kc * E_c) if (Kc * E_c)>0 else float('inf')
        n_short = E_c / E_s
        n_long = (Kc * E_c) / E_s
        A_slab = beff * slab_thk
        y_slab = slab_thk / 2.0
        A_steel = section["A"]
        y_steel = slab_thk + d_new / 2.0
        I_slab_cent = (beff * slab_thk**3) / 12.0
        d_orig = section["d"]
        I_steel_centroid_approx = section["Ix"] * (d_new / d_orig)**3 if d_orig>0 else section["Ix"]
        A_slab_t_short = n_short * A_slab
        denom_short = A_slab_t_short + A_steel
        y_bar_short = (A_slab_t_short * y_slab + A_steel * y_steel) / denom_short if denom_short != 0 else 0.0
        I_slab_transformed_short = n_short * (I_slab_cent + A_slab * (y_slab - y_bar_short)**2)
        I_steel_transformed_short = I_steel_centroid_approx + A_steel * (y_steel - y_bar_short)**2
        I_combined_short = I_slab_transformed_short + I_steel_transformed_short
        EI_comp_short = E_STEEL * I_combined_short
        A_slab_t_long = n_long * A_slab
        denom_long = A_slab_t_long + A_steel
        y_bar_long = (A_slab_t_long * y_slab + A_steel * y_steel) / denom_long if denom_long != 0 else 0.0
        I_slab_transformed_long = n_long * (I_slab_cent + A_slab * (y_slab - y_bar_long)**2)
        I_steel_transformed_long = I_steel_centroid_approx + A_steel * (y_steel - y_bar_long)**2
        I_combined_long = I_slab_transformed_long + I_steel_transformed_long
        EI_comp_long = E_STEEL * I_combined_long
        return {
            "E_c":E_c, "m_short":m_short, "m_long":m_long, "n_short":n_short, "n_long":n_long,
            "y_bar_short": y_bar_short, "I_combined_short": I_combined_short, "EI_comp_short": EI_comp_short,
            "y_bar_long": y_bar_long, "I_combined_long": I_combined_long, "EI_comp_long": EI_comp_long
        }

    trans = transformed_EI_both(section, d_new, Ts, beff_mm, FCK, Kc)
    delta_B_short_mm = mid_deflection_uniform(w_live_Npmm, L_mm, trans["EI_comp_short"])
    delta_B_total_mm = delta_B_short_mm if propped else (delta_A_mm + delta_B_short_mm)

    w_sustained_kgpm = w_dead_kgpm + (frac_live * w_live_kgpm)
    w_sustained_Npm, w_sustained_Npmm = kgpm_to_Npm_and_Npmm(w_sustained_kgpm)
    delta_C_mm = mid_deflection_uniform(w_sustained_Npmm, L_mm, trans["EI_comp_long"])

    limit_raw_mm = L_mm / 360.0
    limit_cap_mm = 20.0
    defl_limit_mm = min(limit_raw_mm, limit_cap_mm)

    partB_ok = delta_B_total_mm <= defl_limit_mm
    partC_ok = delta_C_mm <= defl_limit_mm

    m_short = trans["m_short"]
    m_long = trans["m_long"]
    m_short_ok = m_short >= 7.5
    m_long_ok = m_long >= 15.0

    A_slab_trans = beff_mm * Ts
    C_slab_N = 0.36 * FCK * A_slab_trans
    if stud_dia_user:
        Qn_N = stud_capacity_from_table9(stud_dia_user, FCK)
        studs = studs_required_from_Qn(C_slab_N, L, Qn_N)
        studs.update({"dia": stud_dia_user, "Qn_N": Qn_N})
    else:
        chosen = None
        table = []
        for d in sorted(TABLE9_Qn_fck25_kN.keys()):
            Qn_N = stud_capacity_from_table9(d, FCK)
            res = studs_required_from_Qn(C_slab_N, L, Qn_N)
            res.update({"dia": d, "Qn_N": Qn_N})
            table.append(res)
            if res["ok"] and chosen is None:
                chosen = res
        studs = chosen if chosen else table[0]
    studs_ok = studs.get("ok", True) if studs else True

    flex_ok = (M_fact_Nmm / phiMp) <= 1.0 if phiMp>0 else False
    vier_ok = True if Do==0 else (vier["combined"] <= 1.0)
    shear_ok = shear_ok
    defl_ok_short = partB_ok
    defl_ok_long = partC_ok
    overall = flex_ok and shear_ok and vier_ok and defl_ok_short and studs_ok

    summary = {
        "section": section["name"],
        "mode": "CASTELLATED" if Do>0 else "FULL I",
        "overall_status": "PASS" if overall else "FAIL",
        "d_orig_mm": d_orig,
        "d_new_mm": d_new,
        "Do_mm": Do,
    }

    uls = {
        "moment_kNm": M_fact_kNm,
        "shear_kN": V_fact_kN,
        "total_load_kN": w_fact_Npm / 1000.0,
        "flexural_utilization": flex_util,
    }

    sls = {
        "deflection_short_mm": delta_B_total_mm,
        "deflection_long_mm": delta_A_mm + delta_C_mm,
        "limit_mm": defl_limit_mm,
        "status": "PASS" if partB_ok and partC_ok else "FAIL",
    }

    warnings = []
    if shear.get("stiff_req"):
        warnings.append(shear.get("note"))
    if not m_short_ok:
        warnings.append("Modular ratio short-term below recommended")
    if not m_long_ok:
        warnings.append("Modular ratio long-term below recommended")

    details = {
        "Md_Nmm": Md_Nmm,
        "phiMp_Nmm": phiMp,
        "xu_mm": xu,
        "case": case,
        "shear": shear,
        "vier": vier,
        "deflection": {"A_mm": delta_A_mm, "B_short_mm": delta_B_short_mm, "B_total_mm": delta_B_total_mm, "C_mm": delta_C_mm},
        "studs": studs,
        "transformed": {k: v for k, v in trans.items() if isinstance(v, (int, float))},
    }

    return {"summary": summary, "uls": uls, "sls": sls, "warnings": warnings, "details": details}

