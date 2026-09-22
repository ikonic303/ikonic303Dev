/* Exercises funnel.js in a real DOM. Proves the math, the annual upsell, the
   dead-checkout state and the disabled bumps — without a browser. */
import { JSDOM } from 'jsdom';
import fs from 'fs';

const html = fs.readFileSync('standalone.html', 'utf8');
const data = JSON.parse(fs.readFileSync('funnel.data.json', 'utf8'));
const js   = fs.readFileSync('funnel.js', 'utf8');

function boot(overrides = {}) {
  const d = JSON.parse(JSON.stringify(data));
  Object.assign(d, overrides.top || {});
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

// 1. shipped state — nothing set but the Core price
let doc = boot();
is('staging banner names the gaps',
   /checkout URL/.test(doc.getElementById('stagebanner').textContent), 'true');
is('core renders the recorded price', doc.getElementById('priceMain').textContent, '$250 / month');
is('checkout is dead', doc.getElementById('cta').textContent, 'Checkout not connected');
is('cta has no href', doc.getElementById('cta').getAttribute('href'), 'null');
is('every bump disabled',
   [...doc.querySelectorAll('#bumps input')].every(i => i.disabled), 'true');
is('total shows the plan only', doc.getElementById('total').textContent, '$250');

// 2. annual upsell arithmetic: 2 months free
doc = boot({ top: { checkoutUrl: 'https://x.invalid/c' } });
doc.getElementById('btnAnnual').dispatchEvent(new (doc.defaultView.Event)('click'));
is('annual price = 10 months', doc.getElementById('priceMain').textContent, '$2,500 / year');
is('annual saving stated', /\$500 of it/.test(doc.getElementById('priceNote').textContent), 'true');
is('annual cta live', doc.getElementById('cta').textContent, 'Create my account — $2,500');
is('term rides on the url', /term=annual/.test(doc.getElementById('cta').getAttribute('href')), 'true');

// 3. an upsell that has been priced and switched on
doc = boot({ top: { checkoutUrl: 'https://x.invalid/c' },
             upsells: [{ id: 'seats', enabled: true, priceMonthly: 199 }] });
const box = doc.querySelector('input[data-id="seats"]');
is('priced bump is selectable', box.disabled, 'false');
box.checked = true;
box.dispatchEvent(new (doc.defaultView.Event)('change'));
is('bump adds to the total', doc.getElementById('total').textContent, '$449');
is('bump rides on the url',
   /addons=seats/.test(doc.getElementById('cta').getAttribute('href')), 'true');

// 4. an upsell switched on with NO price must never render a number
doc = boot({ top: { checkoutUrl: 'https://x.invalid/c' },
             upsells: [{ id: 'seats', enabled: true, priceMonthly: null }] });
is('unpriced bump stays disabled',
   doc.querySelector('input[data-id="seats"]').disabled, 'true');
is('unpriced bump says so', /price not set/.test(doc.getElementById('bumps').textContent), 'true');

// 5. no price at all -> the page refuses rather than guessing
doc = boot({ top: { checkoutUrl: 'https://x.invalid/c' }, });
doc.defaultView.FUNNEL = null; // sanity: module already ran, state frozen
doc = (() => { const d = JSON.parse(JSON.stringify(data)); d.core.priceMonthly = null;
  const dom = new JSDOM(html.replace(/<script[^>]*><\/script>/g,''), { runScripts:'outside-only' });
  dom.window.FUNNEL = d; dom.window.eval(js); return dom.window.document; })();
is('no price -> em dash', doc.getElementById('priceMain').textContent, '—');
is('no price -> no total', doc.getElementById('total').textContent, '—');
is('no price -> dead cta', doc.getElementById('cta').textContent, 'Checkout not connected');

console.log(`${pass}/${pass + fail} passed`);
process.exit(fail ? 1 : 0);
