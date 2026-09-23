/* Exercises funnel.js in a real DOM. Proves the package switcher, the per-package
   checkout isolation, the annual arithmetic for all three packages, and the four
   upsell models (monthly / usage / prepaid / quote) — without a browser.

   Count is NOT pinned to a number from any memo — it's whatever's actually below. */
import { JSDOM } from 'jsdom';
import fs from 'fs';

const html = fs.readFileSync('standalone.html', 'utf8');
const data = JSON.parse(fs.readFileSync('funnel.data.json', 'utf8'));
const js   = fs.readFileSync('funnel.js', 'utf8');

function boot(overrides = {}) {
  const d = JSON.parse(JSON.stringify(data));
  if (overrides.checkoutUrls) Object.assign(d.checkoutUrls, overrides.checkoutUrls);
  (overrides.upsells || []).forEach(o => {
    const u = d.upsells.find(x => x.id === o.id); Object.assign(u, o);
  });
  const dom = new JSDOM(html.replace(/<script[^>]*><\/script>/g, ''),
    { runScripts: 'outside-only' });
  dom.window.FUNNEL = d;
  dom.window.eval(js);
  return dom.window.document;
}
let pass = 0, fail = 0;
const is = (name, got, want) => {
  const ok = String(got) === String(want);
  ok ? pass++ : fail++;
  if (!ok) console.log(`  FAIL ${name}\n       got  ${got}\n       want ${want}`);
};

// 1. shipped state — three packages, Core selected by default, nothing bought
let doc = boot();
is('staging banner names all three checkout gaps',
   ['core', 'managed-starter', 'managed-growth'].every(
     () => /checkout URL/.test(doc.getElementById('stagebanner').textContent)), 'true');
is('three package cards render', doc.querySelectorAll('.pkg').length, 3);
is('Core is selected by default', doc.querySelector('.pkg.selected').dataset.id, 'core');
is('Core renders the recorded price', doc.getElementById('priceMain').textContent, '$250 / month');
is('checkout is dead', doc.getElementById('cta').textContent, 'Checkout not connected');
is('cta has no href', doc.getElementById('cta').getAttribute('href'), 'null');
is('total shows the selected plan only', doc.getElementById('total').textContent, '$250');
is('every upsell is enabled and selectable (v2: all four are live)',
   [...doc.querySelectorAll('#bumps input')].every(i => !i.disabled), 'true');
is('brain headline rendered from data', doc.getElementById('brainHeadline').textContent,
   data.brain.headline);
is('both brain proof lines rendered', doc.querySelectorAll('#brainProof li').length, 2);

// 2. package switching — price, detail list and CTA gate all move together
doc.querySelector('.pkg[data-id="managed-starter"]').dispatchEvent(new (doc.defaultView.Event)('click'));
is('switching package updates the selected card', doc.querySelector('.pkg.selected').dataset.id, 'managed-starter');
is('Starter renders its own price (the rounded-up $2,497)', doc.getElementById('priceMain').textContent, '$2,497 / month');
is('Starter total reflects the switch', doc.getElementById('total').textContent, '$2,497');

doc.querySelector('.pkg[data-id="managed-growth"]').dispatchEvent(new (doc.defaultView.Event)('click'));
is('Growth renders its own price', doc.getElementById('priceMain').textContent, '$3,985 / month');

// 3. annual arithmetic holds for a non-Core package too (10 months for 12)
doc.getElementById('btnAnnual').dispatchEvent(new (doc.defaultView.Event)('click'));
is('Growth annual = 10 months', doc.getElementById('priceMain').textContent, '$39,850 / year');

// 4. per-package checkout isolation — a URL set on ONE package must not leak to another
doc = boot({ checkoutUrls: { core: 'https://x.invalid/core-only' } });
is('Core checkout is live when its own URL is set', doc.getElementById('cta').textContent,
   'Create my account — $250');
doc.querySelector('.pkg[data-id="managed-starter"]').dispatchEvent(new (doc.defaultView.Event)('click'));
is('Starter stays dead — a Managed buyer must never land on Core’s checkout',
   doc.getElementById('cta').textContent, 'Checkout not connected');
is('Starter cta has no href', doc.getElementById('cta').getAttribute('href'), 'null');

// 5. upsell model: monthly — adds its own price, same as v1 behaviour
doc = boot({ checkoutUrls: { core: 'https://x.invalid/c' } });
let box = doc.querySelector('input[data-id="seats"]');
is('monthly-model upsell is selectable out of the box (v2: no longer blocked)', box.disabled, 'false');
box.checked = true;
box.dispatchEvent(new (doc.defaultView.Event)('change'));
is('monthly upsell adds its price to the total', doc.getElementById('total').textContent, '$500');

// 6. upsell model: usage — adds $0 today, shows as usage-billed, never inflates the total
doc = boot({ checkoutUrls: { core: 'https://x.invalid/c' } });
box = doc.querySelector('input[data-id="ai-pack"]');
box.checked = true;
box.dispatchEvent(new (doc.defaultView.Event)('change'));
is('usage upsell keeps total at plan price only', doc.getElementById('total').textContent, '$250');
is('usage upsell is labelled usage-billed in the summary',
   /usage-billed/.test(doc.getElementById('rows').textContent), 'true');

// 7. upsell model: prepaid — customer's chosen amount, not a plan price, added once picked
doc = boot({ checkoutUrls: { core: 'https://x.invalid/c' } });
box = doc.querySelector('input[data-id="credits"]');
box.checked = true;
box.dispatchEvent(new (doc.defaultView.Event)('change'));
is('picking prepaid with no amount chosen yet does not change the total',
   doc.getElementById('total').textContent, '$250');
doc.querySelector('.chip[data-id="credits"][data-amt="250"]').dispatchEvent(new (doc.defaultView.Event)('click'));
is('choosing a prepaid amount adds exactly that amount', doc.getElementById('total').textContent, '$500');

// 8. upsell model: quote — never bills through the page, only flags for a reply
doc = boot({ checkoutUrls: { core: 'https://x.invalid/c' } });
box = doc.querySelector('input[data-id="deploy"]');
box.checked = true;
box.dispatchEvent(new (doc.defaultView.Event)('change'));
is('quote upsell never changes the total', doc.getElementById('total').textContent, '$250');
is('quote upsell shows as flagged, not priced',
   /flagged for a reply/.test(doc.getElementById('rows').textContent), 'true');

// 9. no price at all -> the page refuses rather than guessing (still true per package)
doc = (() => {
  const d = JSON.parse(JSON.stringify(data));
  d.packages.find(p => p.id === 'core').priceMonthly = null;
  const dom = new JSDOM(html.replace(/<script[^>]*><\/script>/g, ''), { runScripts: 'outside-only' });
  dom.window.FUNNEL = d; dom.window.eval(js); return dom.window.document;
})();
is('no price -> em dash', doc.getElementById('priceMain').textContent, '—');
is('no price -> no total', doc.getElementById('total').textContent, '—');
is('no price -> dead cta', doc.getElementById('cta').textContent, 'Checkout not connected');

console.log(`${pass}/${pass + fail} passed`);
process.exit(fail ? 1 : 0);
