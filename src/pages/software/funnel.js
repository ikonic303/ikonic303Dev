/* ikonic303.dev /software — funnel logic (v2, three packages).
   Reads window.FUNNEL (generated from funnel.data.json). Never invents a number:
   an item whose price is null is rendered DISABLED with the reason, not hidden and
   not guessed. Same logic as SoftwarePage.tsx so the two can never drift apart. */
(function () {
  var F = window.FUNNEL;
  var state = { annual: false, selectedId: F.packages[0].id, picked: {}, prepaidAmount: {} };

  var money = function (n) {
    return '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  };
  var el = function (id) { return document.getElementById(id); };
  var packageById = function (id) {
    for (var i = 0; i < F.packages.length; i++) if (F.packages[i].id === id) return F.packages[i];
    return F.packages[0];
  };
  var packagePrice = function (p) {
    return p.priceMonthly === null ? null
      : (state.annual ? p.priceMonthly * (12 - F.annualMonthsFree) : p.priceMonthly);
  };
  var isSellable = function (u) {
    if (!u.enabled) return false;
    if (u.model === 'monthly') return u.priceMonthly !== null;
    return true;
  };

  // ---- staging banner: says out loud what is not filled in -------------------
  function banner() {
    var missing = [];
    F.packages.forEach(function (p) {
      if (!F.checkoutUrls[p.id]) missing.push(p.name + ' checkout URL');
      if (p.priceMonthly === null) missing.push(p.name + ' price');
    });
    F.upsells.forEach(function (u) {
      if (u.enabled && u.model === 'monthly' && u.priceMonthly === null) missing.push(u.name + ' price');
    });
    var b = el('stagebanner');
    if (!missing.length) { b.remove(); return; }
    b.querySelector('.shell').innerHTML =
      '<b>STAGING — not live.</b> Unset, so the page will not pretend: ' +
      missing.join(' · ') + '. Fill them in <b>funnel.data.json</b> only.';
  }

  // ---- package picker ----------------------------------------------------------
  function renderPackages() {
    el('packages').innerHTML = F.packages.map(function (p) {
      var price = packagePrice(p);
      var sel = p.id === state.selectedId;
      return '' +
        '<button type="button" class="pkg' + (sel ? ' selected' : '') + '" data-id="' + p.id + '">' +
        '<h3>' + p.name + '</h3><p class="sub">' + p.blurb + '</p>' +
        '<p class="pkgprice">' + (price === null ? '—' :
          money(price) + '<span>' + (state.annual ? '/yr' : '/mo') + '</span>') + '</p>' +
        '<p class="pkgtag">Brain included</p></button>';
    }).join('');
    Array.prototype.forEach.call(el('packages').querySelectorAll('.pkg'), function (b) {
      b.addEventListener('click', function () {
        state.selectedId = b.dataset.id;
        renderPackages(); renderCore(); renderSummary();
      });
    });
  }

  // ---- selected package detail card -------------------------------------------
  function renderCore() {
    var p = packageById(state.selectedId);
    el('coreName').textContent = p.name;
    el('coreBlurb').textContent = p.blurb;
    el('coreList').innerHTML = p.detail.map(function (d) { return '<li>' + d + '</li>'; }).join('');
    if (p.priceMonthly === null) {
      el('priceMain').textContent = '—';
      el('priceNote').textContent = 'Price not set. Nothing is displayed until it is.';
      return;
    }
    if (state.annual) {
      var yr = p.priceMonthly * (12 - F.annualMonthsFree);
      el('priceMain').innerHTML = money(yr) + '<span> / year</span>';
      el('priceNote').textContent =
        F.annualMonthsFree + ' months free versus paying monthly — ' +
        money(p.priceMonthly * 12 - yr) + ' of it.';
    } else {
      el('priceMain').innerHTML = money(p.priceMonthly) + '<span> / month</span>';
      el('priceNote').textContent = 'Cancel from inside the account, any month.';
    }
  }

  // ---- add-ons, model-aware ----------------------------------------------------
  function renderBumps() {
    el('bumps').innerHTML = F.upsells.map(function (u) {
      var usable = isSellable(u);
      var priceTag = u.model === 'monthly' ? (usable ? ' — ' + money(u.priceMonthly) + '/mo' : '')
        : u.model === 'usage' ? ' — ' + money(0) + ' today, billed as used'
        : u.model === 'prepaid' ? ' — you choose the amount'
        : ' — scoped by reply, no self-serve price';
      var tag = '';
      if (!u.enabled) tag = '<span class="tag">not available yet</span>';
      else if (u.model === 'monthly' && u.priceMonthly === null) tag = '<span class="tag">price not set</span>';
      var chips = '';
      if (u.model === 'prepaid' && usable) {
        chips = '<div class="chips" data-for="' + u.id + '">' +
          (u.prepaidOptions || []).map(function (amt) {
            var on = state.prepaidAmount[u.id] === amt;
            return '<button type="button" class="chip' + (on ? ' selected' : '') +
              '" data-amt="' + amt + '" data-id="' + u.id + '">' + money(amt) + '</button>';
          }).join('') + '</div>';
      }
      return '' +
        '<div class="bump' + (usable ? '' : ' off') + '" data-wrap="' + u.id + '">' +
        '<label><input type="checkbox" data-id="' + u.id + '"' + (usable ? '' : ' disabled') + '>' +
        '<span><b>' + u.name + '<i>' + priceTag + '</i></b>' +
        '<p>' + u.blurb + '</p>' + tag + '</span></label>' + chips + '</div>';
    }).join('');
    Array.prototype.forEach.call(el('bumps').querySelectorAll('input'), function (i) {
      i.addEventListener('change', function () {
        state.picked[i.dataset.id] = i.checked;
        var wrap = el('bumps').querySelector('[data-wrap="' + i.dataset.id + '"]');
        var chips = wrap.querySelector('.chips');
        if (chips) chips.style.display = i.checked ? 'flex' : 'none';
        renderSummary();
      });
    });
    Array.prototype.forEach.call(el('bumps').querySelectorAll('.chip'), function (c) {
      c.addEventListener('click', function () {
        state.prepaidAmount[c.dataset.id] = Number(c.dataset.amt);
        renderBumps(); renderSummary();
        var box = el('bumps').querySelector('input[data-id="' + c.dataset.id + '"]');
        if (box) box.checked = state.picked[c.dataset.id] = true;
      });
    });
  }

  // ---- running total ---------------------------------------------------------
  function upsellDueToday(u) {
    if (u.model === 'usage') return 0;
    if (u.model === 'quote') return null;
    if (u.model === 'prepaid') return null;
    return state.annual ? (u.priceMonthly === null ? null : u.priceMonthly * (12 - F.annualMonthsFree))
      : u.priceMonthly;
  }
  function lines() {
    var out = [];
    var p = packageById(state.selectedId);
    var pp = packagePrice(p);
    if (pp !== null) out.push({ label: p.name + (state.annual ? ' (annual)' : ''), amt: pp });
    F.upsells.forEach(function (u) {
      if (!state.picked[u.id]) return;
      if (u.model === 'prepaid') {
        var amt = state.prepaidAmount[u.id];
        if (amt) out.push({ label: u.name + ' (' + money(amt) + ' credit)', amt: amt });
        return;
      }
      var due = upsellDueToday(u);
      if (due !== null && due > 0) out.push({ label: u.name, amt: due });
      else if (u.model === 'usage' && due === 0) out.push({ label: u.name + ' (usage-billed)', amt: 0 });
    });
    return out;
  }

  function renderSummary() {
    var L = lines();
    var flagged = F.upsells.some(function (u) { return u.model === 'quote' && state.picked[u.id]; });
    el('rows').innerHTML = (L.length
      ? L.map(function (l) {
          return '<div class="row"><span>' + l.label + '</span><span>' + money(l.amt) + '</span></div>';
        }).join('')
      : '<p class="fine">Nothing priced yet.</p>') +
      (flagged ? '<div class="row"><span>Done-for-you deployment</span><span class="fine">flagged for a reply</span></div>' : '');

    var total = L.reduce(function (a, l) { return a + l.amt; }, 0);
    el('total').textContent = L.length ? money(total) : '—';
    el('totalNote').textContent = L.length
      ? (state.annual ? 'Then the same again in twelve months, plus whatever you used.'
                      : 'Then the same on this date each month, plus whatever you used.')
      : '';

    var cta = el('cta');
    var checkoutUrl = F.checkoutUrls[state.selectedId];
    var ready = checkoutUrl && L.length;
    if (ready) {
      var q = Object.keys(state.picked).filter(function (k) { return state.picked[k]; });
      var url = checkoutUrl +
        (checkoutUrl.indexOf('?') > -1 ? '&' : '?') +
        'plan=' + encodeURIComponent(state.selectedId) +
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
        'Deliberately dead: no checkout URL is set for ' + packageById(state.selectedId).name + ' in funnel.data.json.';
    }
  }

  function renderBrain() {
    el('brainHeadline').textContent = F.brain.headline;
    el('brainBlurb').textContent = F.brain.blurb;
    el('brainProof').innerHTML = F.brain.proofLines
      .map(function (l) { return '<li class="proof">' + l + '</li>'; }).join('');
  }

  el('btnMonthly').addEventListener('click', function () { setTerm(false); });
  el('btnAnnual').addEventListener('click', function () { setTerm(true); });
  function setTerm(annual) {
    state.annual = annual;
    el('btnMonthly').setAttribute('aria-pressed', String(!annual));
    el('btnAnnual').setAttribute('aria-pressed', String(annual));
    renderPackages(); renderCore(); renderSummary();
  }

  banner(); renderPackages(); renderCore(); renderBumps(); renderBrain(); renderSummary();
})();
