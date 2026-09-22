/* ikonic303.dev /software — funnel logic.
   Reads window.FUNNEL (generated from funnel.data.json). Never invents a number:
   an item whose price is null is rendered DISABLED with the reason, not hidden and
   not guessed. */
(function () {
  var F = window.FUNNEL;
  var state = { annual: false, picked: {} };

  var money = function (n) {
    return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  };
  var el = function (id) { return document.getElementById(id); };

  // ---- staging banner: says out loud what is not filled in -------------------
  function banner() {
    var missing = [];
    if (!F.checkoutUrl) missing.push('checkout URL');
    if (F.core.priceMonthly === null) missing.push('Core price');
    F.upsells.forEach(function (u) {
      if (u.enabled && u.priceMonthly === null) missing.push(u.name + ' price');
    });
    var b = el('stagebanner');
    if (!missing.length) { b.remove(); return; }
    b.querySelector('.shell').innerHTML =
      '<b>STAGING — not live.</b> Unset, so the page will not pretend: ' +
      missing.join(' · ') + '. Fill them in <b>funnel.data.json</b> only.';
  }

  // ---- plan card -------------------------------------------------------------
  function renderCore() {
    el('coreName').textContent = F.core.name;
    el('coreBlurb').textContent = F.core.blurb;
    el('coreList').innerHTML = F.core.detail
      .map(function (d) { return '<li>' + d + '</li>'; }).join('');
    var p = F.core.priceMonthly;
    if (p === null) {
      el('priceMain').textContent = '—';
      el('priceNote').textContent = 'Price not set. Nothing is displayed until it is.';
      return;
    }
    if (state.annual) {
      var yr = p * (12 - F.annualMonthsFree);
      el('priceMain').innerHTML = money(yr) + '<span> / year</span>';
      el('priceNote').textContent =
        F.annualMonthsFree + ' months free versus paying monthly — ' +
        money(p * 12 - yr) + ' of it.';
    } else {
      el('priceMain').innerHTML = money(p) + '<span> / month</span>';
      el('priceNote').textContent = 'Cancel from inside the account, any month.';
    }
  }

  // ---- order bumps -----------------------------------------------------------
  function renderBumps() {
    el('bumps').innerHTML = F.upsells.map(function (u) {
      var usable = u.enabled && u.priceMonthly !== null;
      var tag = '';
      if (!u.enabled) tag = '<span class="tag">not available yet</span>';
      else if (u.priceMonthly === null) tag = '<span class="tag">price not set</span>';
      return '' +
        '<label class="bump' + (usable ? '' : ' off') + '">' +
        '<input type="checkbox" data-id="' + u.id + '"' + (usable ? '' : ' disabled') + '>' +
        '<span><b>' + u.name +
        (usable ? ' — ' + money(u.priceMonthly) + '/mo' : '') + '</b>' +
        '<p>' + u.blurb + '</p>' + tag + '</span></label>';
    }).join('');
    Array.prototype.forEach.call(
      el('bumps').querySelectorAll('input'), function (i) {
        i.addEventListener('change', function () {
          state.picked[i.dataset.id] = i.checked;
          renderSummary();
        });
      });
  }

  // ---- running total ---------------------------------------------------------
  function lines() {
    var out = [];
    if (F.core.priceMonthly !== null) {
      out.push(state.annual
        ? { label: F.core.name + ' (annual)',
            amt: F.core.priceMonthly * (12 - F.annualMonthsFree) }
        : { label: F.core.name, amt: F.core.priceMonthly });
    }
    F.upsells.forEach(function (u) {
      if (!state.picked[u.id] || u.priceMonthly === null) return;
      out.push({ label: u.name,
        amt: state.annual ? u.priceMonthly * (12 - F.annualMonthsFree) : u.priceMonthly });
    });
    return out;
  }

  function renderSummary() {
    var L = lines();
    el('rows').innerHTML = L.length
      ? L.map(function (l) {
          return '<div class="row"><span>' + l.label + '</span><span>' +
                 money(l.amt) + '</span></div>';
        }).join('')
      : '<p class="fine">Nothing priced yet.</p>';
    var total = L.reduce(function (a, l) { return a + l.amt; }, 0);
    el('total').textContent = L.length ? money(total) : '—';
    el('totalNote').textContent = L.length
      ? (state.annual ? 'Then the same again in twelve months.'
                      : 'Then the same on this date each month.')
      : '';

    var cta = el('cta');
    var ready = F.checkoutUrl && L.length;
    if (ready) {
      var q = Object.keys(state.picked).filter(function (k) { return state.picked[k]; });
      var url = F.checkoutUrl +
        (F.checkoutUrl.indexOf('?') > -1 ? '&' : '?') +
        'plan=' + encodeURIComponent(F.core.id) +
        '&term=' + (state.annual ? 'annual' : 'monthly') +
        (q.length ? '&addons=' + encodeURIComponent(q.join(',')) : '');
      cta.setAttribute('href', url);
      cta.removeAttribute('disabled');
      cta.textContent = 'Create my account — ' + money(total);
      el('ctaNote').textContent =
        'Card is taken on the next screen. Your account exists about a minute later.';
    } else {
      cta.setAttribute('disabled', '');
      cta.removeAttribute('href');
      cta.textContent = 'Checkout not connected';
      el('ctaNote').textContent =
        'Deliberately dead: no checkout URL is set in funnel.data.json.';
    }
  }

  el('btnMonthly').addEventListener('click', function () { setTerm(false); });
  el('btnAnnual').addEventListener('click', function () { setTerm(true); });
  function setTerm(annual) {
    state.annual = annual;
    el('btnMonthly').setAttribute('aria-pressed', String(!annual));
    el('btnAnnual').setAttribute('aria-pressed', String(annual));
    renderCore(); renderSummary();
  }

  banner(); renderCore(); renderBumps(); renderSummary();
})();
