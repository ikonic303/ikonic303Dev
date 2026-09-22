#!/usr/bin/env python3
"""Regenerate funnel.data.js from funnel.data.json. Run after ANY price change."""
import json, pathlib
here = pathlib.Path(__file__).parent
d = json.loads((here / "funnel.data.json").read_text())
(here / "funnel.data.js").write_text(
    "/* GENERATED from funnel.data.json by build-data.py — DO NOT EDIT BY HAND. */\n"
    "window.FUNNEL = " + json.dumps(d, indent=2) + ";\n")
print("funnel.data.js regenerated")
