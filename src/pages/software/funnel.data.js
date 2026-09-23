/* GENERATED from funnel.data.json by build-data.py — DO NOT EDIT BY HAND. */
window.FUNNEL = {
  "_README": "SINGLE SOURCE OF TRUTH for every price, SKU and URL on /software. A price of null means Josh has not set it; the page REFUSES to render that item rather than guessing. No agent fills these in \u2014 prices are Josh's (scope gate). v2, 2026-09-24: three packages, all four upsells live, the brain section.",
  "currency": "USD",
  "annualMonthsFree": 2,
  "checkoutUrls": {
    "core": null,
    "managed-starter": null,
    "managed-growth": null
  },
  "_checkoutUrls_note": "One GHL SaaS Configurator checkout link per package. Copy each one out of the configurator into its own slot \u2014 never point two package ids at the same link. Until a package's slot is set, its button is dead on purpose.",
  "packages": [
    {
      "id": "core",
      "name": "ikonic Core",
      "blurb": "The system underneath the work, on your own account, running from the day you pay for it.",
      "priceMonthly": 250,
      "_priceMonthly_note": "RECORDED 5x value ($50 base x5, recorded 2026-09-21). There is no GHL endpoint that returns a SaaS plan price, so this is a RECORD, not a reading. Josh confirms or corrects before go-live.",
      "detail": [
        "One inbox for every channel a customer can reach you on",
        "Pipelines, calendars and forms already wired to each other",
        "Automations you can read and change without calling anyone",
        "Your account, your data, your logins \u2014 not a seat on ours"
      ],
      "provisioning": "AUTO",
      "provisioningNote": "GHL SaaS Configurator provisions the sub-account on payment. No human step."
    },
    {
      "id": "managed-starter",
      "name": "ikonic Managed \u2014 Starter",
      "blurb": "Everything in Core, set up and kept running by a person instead of by you.",
      "priceMonthly": 2497,
      "_priceMonthly_note": "5x of the recorded base rounds to $2,485, which sits $12 under Josh's own retainer floor \u2014 rounded UP to $2,497 on purpose. RECORDED 2026-09-21, not a live reading. There is no GHL endpoint that returns a SaaS plan price.",
      "detail": [
        "Everything in ikonic Core",
        "Your account built out by a person, not a wizard",
        "A human on the other end when something needs changing",
        "Same account, same data, same logins \u2014 the difference is who does the setup"
      ],
      "provisioning": "ACCOUNT_AUTO_DELIVERY_HUMAN",
      "provisioningNote": "The sub-account itself provisions automatically on payment, same as Core. The build-out and ongoing delivery behind it is done by a person, not automated."
    },
    {
      "id": "managed-growth",
      "name": "ikonic Managed \u2014 Growth",
      "blurb": "Managed Starter, scoped for a business running more volume through the system.",
      "priceMonthly": 3985,
      "_priceMonthly_note": "RECORDED 5x value, recorded 2026-09-21. Not a live reading \u2014 there is no GHL endpoint that returns a SaaS plan price.",
      "detail": [
        "Everything in ikonic Managed \u2014 Starter",
        "Built out for higher volume across locations, pipelines or channels",
        "The same human delivery, scoped for more of it"
      ],
      "provisioning": "ACCOUNT_AUTO_DELIVERY_HUMAN",
      "provisioningNote": "Account provisions automatically on payment; delivery and ongoing management is done by a person, scoped for growth-level volume."
    }
  ],
  "brain": {
    "headline": "The brain is included.",
    "blurb": "The same routing brain runs underneath all three packages \u2014 not a stripped-down version on Core and a full one on Managed. What changes between packages is who operates it, not what it can do.",
    "proofLines": [
      "26 logged escapes to a human on record \u2014 not zero, because a system that never escalates anything is a system nobody has actually tested.",
      "142 defects routed automatically and 32 of 32 guard assertions passing, per the last recorded run."
    ],
    "_proofLines_note": "Both lines read PROVEN in dogfood-proof.py as of 2026-09-22 and state only the recorded figures \u2014 no interpretation added. Every other AI/publishing claim in that tool currently reads UNPROVEN and may not appear anywhere else on this page. Gate-checked."
  },
  "upsells": [
    {
      "id": "seats",
      "name": "Additional location",
      "blurb": "A second business, a second brand, or a franchise unit \u2014 its own account, billed on the same card.",
      "model": "monthly",
      "priceMonthly": 250,
      "provisioning": "AUTO",
      "provisioningNote": "Same provisioning path as Core, one per unit. Carries Core's price because a second location IS a second Core account.",
      "enabled": true
    },
    {
      "id": "ai-pack",
      "name": "AI add-on pack",
      "blurb": "Content, voice, workflow, reviews and funnel AI switched on, billed as you use it at platform cost + 5%.",
      "model": "usage",
      "priceMonthly": 0,
      "provisioning": "AUTO",
      "provisioningNote": "Usage rebilling is authorised by Josh (2026-09-22). Adds $0 today \u2014 bills from the customer's own wallet as they use it, at platform cost plus 5%. Product codes: Phone, Email, contentAI, voiceAI, workflow_ai, whatsApp, funnelAI, reviewsAI.",
      "enabled": true
    },
    {
      "id": "credits",
      "name": "Prepaid usage credits",
      "blurb": "Buy phone, email and AI usage up front at platform cost + 5%, auto-recharging from the same card.",
      "model": "prepaid",
      "priceMonthly": null,
      "prepaidOptions": [
        100,
        250,
        500
      ],
      "provisioning": "AUTO",
      "provisioningNote": "The customer picks their own top-up amount from the recorded options \u2014 that figure is theirs, not a price we set.",
      "enabled": true
    },
    {
      "id": "deploy",
      "name": "Done-for-you deployment",
      "blurb": "We build your pipelines, forms and automations before you log in. One time, inside ten business days.",
      "model": "quote",
      "priceMonthly": null,
      "provisioning": "HUMAN",
      "provisioningNote": "No price published. Ticking it flags the signup for a scoping reply instead of a self-serve charge \u2014 it spends delivery hours, and a one-click button that books somebody's time with nobody deciding is a promise this page will not make.",
      "enabled": true
    }
  ],
  "dunning": [
    {
      "day": 0,
      "action": "card declined \u2014 retry"
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
  "_dunning_note": "Ladder ENDS AT D+10. There is no suspend rung, on purpose \u2014 R-2026-09-21-NOSUSPEND."
};
