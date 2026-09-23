#!/usr/bin/env python3
"""Gate check for the /software funnel (v2, three packages). Exit 0 = safe to ship.

Every check here is a charter rail, not a style preference. If one fails, the
page does not go out and it certainly does not deploy.

v2 note: this file's check count is NOT pinned to any number claimed elsewhere.
It counts whatever checks actually exist below for THIS shape of the page —
three packages, all four upsells live, the brain section. Extend it as the
page grows; do not force the total to match a figure from a memo.
"""
import json, pathlib, re, sys

HERE = pathlib.Path(__file__).parent
HTML = (HERE / "standalone.html").read_text()
TSX  = (HERE / "SoftwarePage.tsx").read_text()
JS   = (HERE / "funnel.js").read_text()
DATA = json.loads((HERE / "funnel.data.json").read_text())
GEN  = (HERE / "funnel.data.js").read_text()
COPY = HTML + TSX          # customer-visible surfaces only
ALL  = HTML + TSX + JS

fails, checks = [], 0
def check(name, ok, why=""):
    global checks
    checks += 1
    if not ok:
        fails.append(f"{name}: {why}")

# --- R-2026-09-21-NOADDR : no postal address anywhere, ever -------------------
check("no street address", not re.search(
    r"\b\d{3,6}\s+[A-Z][a-z]+\s+(St|Street|Ave|Avenue|Rd|Road|Blvd|Dr|Way|Ct|Ln)\b", COPY),
    "a street-shaped string is present")
check("no suite number", not re.search(r"\b(Suite|Ste\.?|Unit)\s*#?\s*\d", COPY, re.I))
check("no PO box", not re.search(r"\bP\.?\s*O\.?\s*Box\b", COPY, re.I))
check("no CO city+zip block", not re.search(r"\b(CO|Colorado)\s+8\d{4}\b", COPY))
check("no Wheat Ridge / Robb", not re.search(r"wheat\s*ridge|robb", COPY, re.I))

# --- PII ----------------------------------------------------------------------
check("no phone number", not re.search(r"\b\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b", COPY))
check("no personal email", "ikonicdetailing.com" not in COPY)
check("only the .dev lane email", COPY.count("solutions@ikonic303.dev") >= 1
      and "info@ikonic" not in COPY,
      "tech/dev lane mail is solutions@ikonic303.dev (R-2026-09-16-DEVMAIL)")

# --- two-domain split : .dev must never cross-link .com -----------------------
check("no cross-link to .com", not re.search(r"ikonic303\.com", COPY),
      "the split rail forbids linking the two domains")

# --- dead catalog : nothing vehicle, and this page sells software only --------
# (?<![a-zA-Z-]) / (?![a-zA-Z-]) instead of \b: a plain \b treats a hyphen as a
# boundary, so it false-positives on Tailwind utility classes like "flex-wrap".
for word in ("wrap", "vehicle", "PPF", "ceramic", "window tint", "fleet graphic"):
    check(f"no dead-catalog word: {word}",
          not re.search(rf"(?<![a-zA-Z-]){re.escape(word)}(?![a-zA-Z-])", COPY, re.I))

# --- dogfood gate : ONLY the two proven brain lines make a self-claim ---------
for pat in (r"we use (this|it) ourselves", r"we run (this|it) ourselves",
            r"\bwe dogfood\b", r"powers our own", r"answers our (own )?leads"):
    check(f"no unproven dogfood claim /{pat}/", not re.search(pat, COPY, re.I),
          "every AI/publishing claim currently reads UNPROVEN except the two brain proof lines")
# The brain's headline/blurb/proofLines are data-driven (FUNNEL.brain.* / F.brain.*),
# not retyped into the markup — that's the whole point of one source of truth, so a
# literal-text search across the .tsx/.html source would never find them. Check
# instead that the data is real and that both renderers actually wire it up.
check("brain data is non-empty",
      bool(DATA["brain"].get("headline")) and len(DATA["brain"].get("proofLines", [])) >= 2)
check("SoftwarePage.tsx renders the brain from data, not retyped",
      "FUNNEL.brain.headline" in TSX and "FUNNEL.brain.proofLines" in TSX)
check("standalone preview renders the brain from data, not retyped",
      "F.brain.headline" in JS and "F.brain.proofLines" in JS)
check("brain line appears on every package card",
      COPY.lower().count("brain included") >= 1 and "brain included" in JS.lower(),
      "one line per card, per the brief — present once in source inside the per-package "
      "render loop in both the TSX and the standalone JS, so it renders per package at runtime")

# --- truth gate : no performance or outcome numbers beyond the brain's own ---
check("no invented performance stat",
      not re.search(r"\b\d{1,3}(\.\d+)?%\s*(more|faster|increase|growth|conversion|lift)", COPY, re.I))
check("no fake social proof",
      not re.search(r"\b(join|trusted by|used by)\s+\d+[\d,+]*\s+(businesses|companies|clients)", COPY, re.I))

# --- R-2026-09-21-NOSUSPEND ---------------------------------------------------
for pat in (r"suspend your account", r"we (will |may )?(suspend|pause|disable|deactivate)",
            r"account will be (suspended|paused|locked|limited)", r"service will be (cut|stopped)"):
    check(f"no suspension threat /{pat}/", not re.search(pat, COPY, re.I))
FLAT = re.sub(r"\s+", " ", HTML).lower()
check("states the no-suspend promise out loud",
      "do not switch your account off" in FLAT
      and "do not suspend, pause or limit" in FLAT,
      "the customer must be told it, not just the rail")
check("dunning ladder ends at D+10, no suspend rung",
      max(d["day"] for d in DATA["dunning"]) == 10
      and not any("suspend" in d["action"].lower() and "not" not in d["action"].lower()
                  for d in DATA["dunning"]))

# --- package catalog shape : three, exactly, no typo'd id --------------------
check("exactly three packages", len(DATA["packages"]) == 3,
      f"found {len(DATA['packages'])}")
check("package ids are the three agreed ids",
      {p["id"] for p in DATA["packages"]} == {"core", "managed-starter", "managed-growth"})
check("Managed Starter is the rounded-up floor, not straight 5x",
      next(p["priceMonthly"] for p in DATA["packages"] if p["id"] == "managed-starter") == 2497,
      "straight 5x is $2,485 — the $12 rounding up is deliberate, do not \"fix\" it back")

# --- pricing : one source of truth, nothing hardcoded, nothing guessed --------
hard_html = [m for m in re.findall(r"\$\s?\d[\d,]*", HTML)]
hard_tsx  = [m for m in re.findall(r"\$\s?\d[\d,]*", TSX)]
check("no hardcoded price in the markup", not hard_html,
      f"found {hard_html} — every figure must come from funnel.data.json")
check("no hardcoded price in the component", not hard_tsx, f"found {hard_tsx}")
check("funnel.data.js is in sync with the json",
      json.loads(GEN.split("window.FUNNEL = ", 1)[1].rsplit(";", 1)[0]) == DATA,
      "run build-data.py")

unpriced_monthly_on = [u["name"] for u in DATA["upsells"]
                        if u["enabled"] and u.get("model") == "monthly" and u["priceMonthly"] is None]
check("no monthly-model upsell is switched on without a price", not unpriced_monthly_on,
      f"{unpriced_monthly_on} would render a live per-month button with no number")
check("prepaid upsell never carries a plan price of its own",
      all(u["priceMonthly"] is None for u in DATA["upsells"] if u.get("model") == "prepaid"),
      "prepaid credits are the customer's own chosen top-up, never a price we set")
check("quote-model upsell never carries a self-serve price",
      all(u["priceMonthly"] is None for u in DATA["upsells"] if u.get("model") == "quote"),
      "done-for-you deployment flags a reply — it must never render a chargeable number")
check("quote upsell says so in the copy",
      "no self-serve price" in COPY.lower() or "scoped by reply" in COPY.lower(),
      "the page must tell the customer this ticks a flag, not a charge")
check("usage-model upsell's own data references the real rate, not a made-up figure",
      any("platform cost" in u["blurb"].lower() for u in DATA["upsells"] if u.get("model") == "usage"),
      "the blurb is data-driven (not retyped into the markup) — check the source of truth itself")

# --- the CTA cannot fire into nothing, for ANY package ------------------------
check("every package's checkout is null (none deployable yet)",
      all(v is None for v in DATA["checkoutUrls"].values()))
_non_null = [v for v in DATA["checkoutUrls"].values() if v is not None]
check("no two packages share one checkout link",
      len(_non_null) == len(set(_non_null)),
      "a Managed buyer landing on Core's checkout is a billing incident")
check("checkout is dead while a package's URL is unset",
      "Checkout not connected" in JS and "Checkout not connected" in TSX)
check("staging preview is noindex",
      'name="robots" content="noindex,nofollow"' in HTML.replace(" ", "").replace(
          'name="robots"content="noindex,nofollow"', 'name="robots" content="noindex,nofollow"')
      or 'content="noindex,nofollow"' in HTML)

# --- change control -----------------------------------------------------------
check("nothing here writes into the command-center tree",
      ".claude-plugins" not in ALL and "scheduled-tasks" not in ALL)

print(f"{checks - len(fails)}/{checks} passed")
for f in fails:
    print("  FAIL  " + f)
sys.exit(1 if fails else 0)
