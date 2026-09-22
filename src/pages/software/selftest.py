#!/usr/bin/env python3
"""Gate check for the /software funnel. Exit 0 = safe to hand to Jamilah.

Every check here is a charter rail, not a style preference. If one fails, the
page does not go to her and it certainly does not deploy.
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
for word in ("wrap", "vehicle", "PPF", "ceramic", "window tint", "fleet graphic"):
    check(f"no dead-catalog word: {word}",
          not re.search(rf"\b{re.escape(word)}\b", COPY, re.I))

# --- dogfood gate : no claim that ikonic runs this itself ---------------------
for pat in (r"we use (this|it) ourselves", r"we run (this|it) ourselves",
            r"\bwe dogfood\b", r"powers our own", r"answers our (own )?leads"):
    check(f"no unproven dogfood claim /{pat}/", not re.search(pat, COPY, re.I),
          "every AI/publishing claim currently reads UNPROVEN")

# --- truth gate : no performance or outcome numbers on the page ---------------
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

# --- pricing : one source of truth, nothing hardcoded, nothing guessed --------
hard_html = [m for m in re.findall(r"\$\s?\d[\d,]*", HTML)]
hard_tsx  = [m for m in re.findall(r"\$\s?\d[\d,]*", TSX)]
check("no hardcoded price in the markup", not hard_html,
      f"found {hard_html} — every figure must come from funnel.data.json")
check("no hardcoded price in the component", not hard_tsx, f"found {hard_tsx}")
check("funnel.data.js is in sync with the json",
      json.loads(GEN.split("window.FUNNEL = ", 1)[1].rsplit(";", 1)[0]) == DATA,
      "run build-data.py")

unpriced_on = [u["name"] for u in DATA["upsells"]
               if u["enabled"] and u["priceMonthly"] is None]
check("no upsell is switched on without a price", not unpriced_on,
      f"{unpriced_on} would render a live button with no number")
check("human-delivered upsell is OFF until capacity is set",
      all(not u["enabled"] for u in DATA["upsells"] if u["provisioning"] == "HUMAN"),
      "selling Jamilah's hours self-serve while her weekly ceiling is UNSET")
check("rebilling-dependent upsells are OFF",
      all(not u["enabled"] for u in DATA["upsells"] if u["provisioning"] == "BLOCKED"),
      "rebilling is frozen while agency autoSuspendEnabled = true")

# --- the CTA cannot fire into nothing ----------------------------------------
check("checkout is dead while the URL is unset",
      DATA["checkoutUrl"] is None
      and "Checkout not connected" in JS and "Checkout not connected" in TSX)
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
