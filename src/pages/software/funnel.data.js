/* GENERATED from funnel.data.json by build-data.py — DO NOT EDIT BY HAND. */
window.FUNNEL = {
  "_README": "SINGLE SOURCE OF TRUTH for every price, SKU and URL on /software. A price of null means Josh has not set it; the page REFUSES to render that item rather than guessing. No agent fills these in — prices are Josh's (scope gate).",
  "checkoutUrl": null,
  "_checkoutUrl_note": "The GHL SaaS Configurator checkout link for the ikonic Core plan. Copy it out of the configurator and paste it here. Until it is set, the button is dead on purpose.",
  "currency": "USD",
  "annualMonthsFree": 2,
  "core": {
    "id": "core",
    "name": "ikonic Core",
    "blurb": "The system underneath the work, on your own account, running from the day you pay for it.",
    "priceMonthly": 250,
    "_priceMonthly_note": "LAST RECORDED 5x value ($50 base x5, recorded 2026-09-21). There is no GHL endpoint that returns a SaaS plan price, so this is a RECORD, not a reading. Josh confirms or corrects before go-live.",
    "detail": [
      "One inbox for every channel a customer can reach you on",
      "Pipelines, calendars and forms already wired to each other",
      "Automations you can read and change without calling anyone",
      "Your account, your data, your logins — not a seat on ours"
    ],
    "provisioning": "AUTO",
    "provisioningNote": "GHL SaaS Configurator provisions the sub-account on payment. No human step."
  },
  "upsells": [
    {
      "id": "seats",
      "name": "Additional location",
      "blurb": "A second business, a second brand, or a franchise unit — its own account, billed on the same card.",
      "priceMonthly": null,
      "provisioning": "AUTO",
      "provisioningNote": "Same provisioning path as Core, one per unit — zero human labour, so this is the cleanest upsell on the page. OFF only because Josh has not set the per-location price.",
      "enabled": false
    },
    {
      "id": "ai-pack",
      "name": "AI add-on pack",
      "blurb": "Content, voice, workflow, reviews and funnel AI switched on, billed as you use it at 1.05x platform cost.",
      "priceMonthly": null,
      "provisioning": "BLOCKED",
      "provisioningNote": "Rebilling is FROZEN fleet-wide while agency autoSuspendEnabled = true (R-2026-09-21-NOSUSPEND): turning usage rebilling on against a wallet that can run dry IS a suspension path. Do not ship until Josh turns that agency toggle off and says so. Product codes are measured and real: Phone, Email, contentAI, voiceAI, workflow_ai, whatsApp, funnelAI, reviewsAI.",
      "enabled": false
    },
    {
      "id": "credits",
      "name": "Prepaid usage credits",
      "blurb": "Buy phone, email and AI usage up front at 1.05x, auto-recharging from the same card.",
      "priceMonthly": null,
      "provisioning": "BLOCKED",
      "provisioningNote": "Same rebilling freeze as ai-pack.",
      "enabled": false
    },
    {
      "id": "deploy",
      "name": "Done-for-you deployment",
      "blurb": "We build your pipelines, forms and automations before you log in. One time, inside ten business days.",
      "priceMonthly": null,
      "provisioning": "HUMAN",
      "provisioningNote": "CONSUMES JAMILAH HOURS. She is part-time on an UNSET weekly ceiling (jamilah-hours.conf). A self-serve button that sells her time with nobody deciding is a capacity promise we cannot keep. OFF until Josh sets BOTH a price AND a monthly quantity cap.",
      "enabled": false
    }
  ],
  "dunning": [
    {
      "day": 0,
      "action": "card declined — retry"
    },
    {
      "day": 3,
      "action": "retry + email the customer"
    },
    {
      "day": 7,
      "action": "retry + email"
    },
    {
      "day": 10,
      "action": "stop, queue a Josh tap. NOTHING is suspended, paused or limited."
    }
  ],
  "_dunning_note": "Ladder ENDS AT D+10. There is no suspend rung, on purpose — R-2026-09-21-NOSUSPEND."
};
