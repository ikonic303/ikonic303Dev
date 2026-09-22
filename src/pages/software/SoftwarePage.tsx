/**
 * ikonic303.dev — route `/software`
 *
 * Port of `standalone.html`. Same copy, same numbers, same source of truth
 * (`funnel.data.json`), so the preview Josh approves and the page that ships
 * cannot drift apart.
 *
 * Dependencies: React only. Styling is Tailwind utility classes against the
 * theme tokens already defined on this site (--background 220 14% 4%,
 * --primary 158 100% 50%, --card, --muted-foreground, --border) — measured off
 * the live stylesheet, not assumed.
 *
 * ⚠️ Jamilah: this file makes NO claim about what ikonic itself runs. That is
 * deliberate — the dogfood gate reads UNPROVEN on every AI/publishing claim
 * right now, so none of them may appear here. Do not add a "we use this
 * ourselves" line without a passing dogfood-proof run.
 */
import { useCallback, useMemo, useState } from 'react';
import { FUNNEL, annualize, isSellable, blockers, type Sku } from './funnel.config';

const money = (n: number) =>
  '$' + n.toLocaleString('en-US', { maximumFractionDigits: 0 });

export default function SoftwarePage() {
  const [annual, setAnnual] = useState(false);
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const missing = useMemo(() => blockers(), []);

  // Closes over `annual`, so it must itself be memoized on `annual` and listed as a
  // dependency below — otherwise the compiler can't verify `lines` recomputes correctly
  // when the billing term toggles (no behaviour change, just makes the dependency real).
  const price = useCallback(
    (s: Sku) => (annual ? annualize(s.priceMonthly) : s.priceMonthly),
    [annual],
  );

  const lines = useMemo(() => {
    const out: { label: string; amt: number }[] = [];
    const core = price(FUNNEL.core);
    if (core !== null)
      out.push({ label: FUNNEL.core.name + (annual ? ' (annual)' : ''), amt: core });
    FUNNEL.upsells.forEach((u) => {
      const p = price(u);
      if (picked[u.id] && p !== null) out.push({ label: u.name, amt: p });
    });
    return out;
  }, [annual, picked, price]);

  const total = lines.reduce((a, l) => a + l.amt, 0);
  const ready = Boolean(FUNNEL.checkoutUrl) && lines.length > 0;

  const checkoutHref = () => {
    if (!FUNNEL.checkoutUrl) return undefined;
    const addons = Object.keys(picked).filter((k) => picked[k]);
    const sep = FUNNEL.checkoutUrl.includes('?') ? '&' : '?';
    return (
      FUNNEL.checkoutUrl + sep +
      `plan=${encodeURIComponent(FUNNEL.core.id)}` +
      `&term=${annual ? 'annual' : 'monthly'}` +
      (addons.length ? `&addons=${encodeURIComponent(addons.join(','))}` : '')
    );
  };

  return (
    <main className="bg-background text-foreground">
      {missing.length > 0 && (
        <div className="border-b border-amber-900/60 bg-amber-950/40 py-2.5 font-mono text-xs text-amber-300">
          <div className="mx-auto max-w-5xl px-6">
            <b>STAGING — not live.</b> Unset, so the page will not pretend:{' '}
            {missing.join(' · ')}. Fill them in <b>funnel.data.json</b> only.
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- hero */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-primary">
            ikonic Core
          </p>
          <h1 className="max-w-[18ch] font-display text-4xl leading-[1.12] tracking-tight md:text-6xl">
            The one thing on this site with a price on it.
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg text-muted-foreground">
            Everything else here is an engagement — we move in, measure what one workflow
            costs you, and build against that number. This is not that. This is the software
            underneath it, on your own account, running the day you pay for it.
          </p>
          <p className="mt-3.5 max-w-[62ch] text-muted-foreground">
            No call. No demo. No onboarding queue. You sign up, it provisions, you log in.
            If that is all you wanted, you never have to speak to us.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- configure */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl tracking-tight">Build your account</h2>
          <p className="mt-3 max-w-[60ch] text-muted-foreground">
            Two choices, both reversible. Nothing here is a contract you have to get out of.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-[1.25fr_.85fr] md:items-start">
            <div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-xl">{FUNNEL.core.name}</h3>
                <p className="mt-3 text-muted-foreground">{FUNNEL.core.blurb}</p>

                <div className="mt-4 inline-flex gap-1 rounded-full border border-border p-1">
                  {([['Monthly', false], ['Annual', true]] as const).map(([label, v]) => (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={annual === v}
                      onClick={() => setAnnual(v)}
                      className={
                        'rounded-full px-4 py-2 text-sm font-medium transition ' +
                        (annual === v
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground')
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {FUNNEL.core.priceMonthly === null ? (
                  <>
                    <p className="mt-5 font-display text-5xl font-bold">—</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Price not set. Nothing is displayed until it is.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="mt-5 font-display text-5xl font-bold tracking-tight">
                      {money(price(FUNNEL.core)!)}
                      <span className="ml-2 text-base font-medium text-muted-foreground">
                        {annual ? '/ year' : '/ month'}
                      </span>
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {annual
                        ? `${FUNNEL.annualMonthsFree} months free versus paying monthly — ` +
                          `${money(FUNNEL.core.priceMonthly * 12 - annualize(FUNNEL.core.priceMonthly)!)} of it.`
                        : 'Cancel from inside the account, any month.'}
                    </p>
                  </>
                )}

                <ul className="mt-5 grid gap-2.5">
                  {FUNNEL.core.detail.map((d) => (
                    <li key={d} className="relative pl-6 text-muted-foreground">
                      <span className="absolute left-0 top-[.6em] h-0.5 w-2.5 bg-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="mt-11 font-display text-xl">Add to it</h3>
              <p className="mt-2 max-w-[60ch] text-muted-foreground">
                Each of these bills to the same card. Add or drop any of them later
                without talking to anyone.
              </p>

              <div className="mt-5 grid gap-5">
                {FUNNEL.upsells.map((u) => {
                  const usable = isSellable(u);
                  return (
                    <label
                      key={u.id}
                      className={
                        'flex items-start gap-3.5 rounded-lg border border-border bg-secondary p-4.5 ' +
                        (usable ? 'cursor-pointer' : 'cursor-not-allowed opacity-40')
                      }
                    >
                      <input
                        type="checkbox"
                        disabled={!usable}
                        checked={Boolean(picked[u.id])}
                        onChange={(e) =>
                          setPicked((p) => ({ ...p, [u.id]: e.target.checked }))
                        }
                        className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
                      />
                      <span>
                        <b className="block font-semibold">
                          {u.name}
                          {usable && ` — ${money(u.priceMonthly!)}/mo`}
                        </b>
                        <p className="mt-0.5 text-sm text-muted-foreground">{u.blurb}</p>
                        {!u.enabled && (
                          <span className="mt-2 inline-block rounded border border-amber-900/60 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-amber-300">
                            not available yet
                          </span>
                        )}
                        {u.enabled && u.priceMonthly === null && (
                          <span className="mt-2 inline-block rounded border border-amber-900/60 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-amber-300">
                            price not set
                          </span>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* ------------------------------------------------------- summary */}
            <div className="sticky top-6 rounded-lg border border-border bg-card p-6">
              <h3 className="font-display text-xl">Your account</h3>
              <div className="mt-3.5">
                {lines.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Nothing priced yet.</p>
                ) : (
                  lines.map((l) => (
                    <div
                      key={l.label}
                      className="flex justify-between gap-3 border-b border-border py-2.5"
                    >
                      <span>{l.label}</span>
                      <span className="font-mono">{money(l.amt)}</span>
                    </div>
                  ))
                )}
              </div>
              <div className="flex items-baseline justify-between pt-4.5">
                <span>Due today</span>
                <b className="font-display text-3xl font-bold">
                  {lines.length ? money(total) : '—'}
                </b>
              </div>
              {lines.length > 0 && (
                <p className="mt-3.5 text-sm text-muted-foreground">
                  {annual
                    ? 'Then the same again in twelve months.'
                    : 'Then the same on this date each month.'}
                </p>
              )}

              <a
                href={ready ? checkoutHref() : undefined}
                aria-disabled={!ready}
                className={
                  'mt-5 block rounded-lg px-4 py-4 text-center text-base font-semibold ' +
                  (ready
                    ? 'bg-primary text-primary-foreground'
                    : 'pointer-events-none bg-muted text-muted-foreground')
                }
              >
                {ready ? `Create my account — ${money(total)}` : 'Checkout not connected'}
              </a>
              <p className="mt-3.5 text-sm text-muted-foreground">
                {ready
                  ? 'Card is taken on the next screen. Your account exists about a minute later.'
                  : 'Deliberately dead: no checkout URL is set in funnel.data.json.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ after pay */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl tracking-tight">
            What happens after you pay, in order
          </h2>
          <p className="mt-3 max-w-[60ch] text-muted-foreground">
            Written down because most of this industry leaves it vague.
          </p>
          <table className="mt-7 w-full border-collapse">
            <tbody>
              {[
                ['Immediately', 'Your account is created and the login is emailed to you. Nobody approves it.'],
                ['First hour', 'You set your business name, your number and your hours. The pipelines, forms and calendars are already there.'],
                ['Any time', 'You change anything you like. It is your account, under your login — not a seat on ours.'],
                ['If you stop', 'You cancel from inside the account. You keep your data and we do not hold it hostage.'],
                ['If a card fails', 'We retry, and we email you. On day ten we stop and a human gets in touch. We do not switch your account off.'],
              ].map(([k, v]) => (
                <tr key={k}>
                  <td className="w-[30%] border-b border-border px-3.5 py-4 align-top font-medium">
                    {k}
                  </td>
                  <td className="border-b border-border px-3.5 py-4 align-top text-muted-foreground">
                    {v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ------------------------------------------------------------------ faq */}
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl tracking-tight">
            Questions worth answering before you pay
          </h2>
          <div className="mt-6">
            {[
              ['Is this the same thing you do on an engagement?',
               'No, and it would be dishonest to imply it. An engagement is people — measuring your workflow on site, building into your existing stack, and staying through launch. This is the software those systems get built on, handed to you to run yourself.'],
              ['Why does this have a price when nothing else on the site does?',
               'Because a product has one and an engagement does not. An engagement is priced against what a specific workflow costs a specific company, which is different every time. A piece of software costs what it costs.'],
              ['Whose account is it?',
               "Yours. Your login, your data, your customers' numbers. If you left, it keeps running."],
              ['Can I start here and do an engagement later?',
               'Yes, and people do. Starting here is the cheapest way to find out whether the seams in your business are a software problem or a process problem. Usually it is the second one.'],
              ['What happens if I do not pay?',
               'We retry the card and email you. After ten days a person reaches out. We do not suspend, pause or limit an account to collect money.'],
              ['Do I have to talk to anybody?', 'No. That is the point of this page.'],
            ].map(([q, a]) => (
              <details key={q} className="border-b border-border py-4.5">
                <summary className="cursor-pointer list-none text-lg font-medium marker:hidden">
                  {q}
                </summary>
                <p className="mt-2.5 max-w-[66ch] text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-11">
        <div className="mx-auto max-w-5xl px-6 text-sm text-muted-foreground">
          <p>
            <b className="text-foreground">ikonic303</b> — forward deployed engineering for
            operating companies of 50 to 500 people. This page is the self-serve product,
            not an engagement.
          </p>
          <p className="mt-2.5">
            Questions:{' '}
            <a href="mailto:solutions@ikonic303.dev" className="text-primary">
              solutions@ikonic303.dev
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
