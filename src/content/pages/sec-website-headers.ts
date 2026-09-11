import type { PageContent } from '../types';
import { crumbs } from './_shared';

const slug = '/security/website-headers';

export const secWebsiteHeaders: PageContent = {
  slug,
  seo: {
    title: 'Website Security Headers, In The Order Worth Doing Them',
    description:
      'HSTS, CSP, frame-ancestors, cookie flags and the rest — what each header actually prevents, which ones can break your site, and the order that avoids an outage.',
  },
  breadcrumb: crumbs(
    { name: 'Security', href: '/security' },
    { name: 'Website headers', href: slug },
  ),
  eyebrow: 'SECURITY',
  h1: 'Security headers, in the order worth doing them',
  answer:
    'Security headers are a short list of instructions your website hands to every visitor’s browser. They cost nothing, they take an afternoon, and two of them can take your site down if you ship them carelessly. Here is what each prevents, what it breaks, and the order that avoids a bad morning.',
  sections: [
    { type: 'heading', level: 2, text: 'What headers can and cannot do' },
    {
      type: 'paragraph',
      text: "A security header does not protect your server. It protects your **user's browser** from being used against them — clickjacking their session, running an injected script, leaking their session token onto an insecure connection, or handing your URLs to a third party.",
    },
    {
      type: 'paragraph',
      text: "That makes them cheap, high-value, and easy to underrate: none of them stops an attacker who is already inside, and all of them raise the cost of the attacks that begin in a browser.",
    },
    {
      type: 'paragraph',
      text: 'They are also the single most visible signal of whether anybody is minding the site. A security reviewer at a prospective customer will check them in ten seconds, before they read a word of your questionnaire response.',
    },

    { type: 'heading', level: 2, text: 'The list, ordered by value per unit of risk' },
    { type: 'heading', level: 3, text: '1. HSTS — force HTTPS, and keep forcing it' },
    {
      type: 'paragraph',
      text: '`Strict-Transport-Security` tells the browser to refuse to talk to your site over plain HTTP for a stated period. Without it, the very first request a user makes — the one they type — can be intercepted and redirected before your redirect ever runs.',
    },
    { type: 'codeblock', code: 'Strict-Transport-Security: max-age=31536000; includeSubDomains' },
    {
      type: 'paragraph',
      text: '**What it breaks:** anything of yours that genuinely still needs to run over HTTP, including on a subdomain if you use `includeSubDomains`. Start with a short `max-age`, confirm nothing broke, then raise it. Adding `preload` is close to irreversible — do not add it until everything, on every subdomain, is HTTPS and staying that way.',
    },
    { type: 'heading', level: 3, text: '2. X-Content-Type-Options — no guessing' },
    { type: 'codeblock', code: 'X-Content-Type-Options: nosniff' },
    {
      type: 'paragraph',
      text: 'Stops the browser from second-guessing your declared content types and executing something you served as data. Breaks nothing in practice. There is no reason not to have it.',
    },
    { type: 'heading', level: 3, text: '3. Clickjacking protection — two headers, one job' },
    {
      type: 'paragraph',
      text: 'An attacker loads your site invisibly inside a frame on their page, and your user clicks their button while believing they are clicking yours. The modern control lives inside CSP:',
    },
    { type: 'codeblock', code: "Content-Security-Policy: frame-ancestors 'self'\nX-Frame-Options: SAMEORIGIN" },
    {
      type: 'paragraph',
      text: 'Ship both — the second is for older browsers. **What it breaks:** any legitimate embedding of your pages, including inside your own app, a partner’s portal, or a marketing tool’s preview. Find those before you ship, and list them explicitly.',
    },
    { type: 'heading', level: 3, text: '4. Referrer-Policy — stop leaking your own URLs' },
    { type: 'codeblock', code: 'Referrer-Policy: strict-origin-when-cross-origin' },
    {
      type: 'paragraph',
      text: 'Without it, every outbound click can hand the full URL of the page they were on — including anything in the path or query string — to a third-party site and to every analytics tag on it.',
    },
    { type: 'heading', level: 3, text: '5. Cookie flags — the ones that carry sessions' },
    {
      type: 'paragraph',
      text: 'A session cookie without `Secure` can travel over plain HTTP. Without `HttpOnly` it can be read by any script on the page, which turns a small injection into a stolen session. `SameSite` limits when it is sent from other sites.',
    },
    { type: 'codeblock', code: 'Set-Cookie: session=...; Secure; HttpOnly; SameSite=Lax; Path=/' },
    {
      type: 'paragraph',
      text: '**What it breaks:** `HttpOnly` breaks any script of yours that reads the cookie in the browser — if something does, that is worth knowing about on its own. `SameSite=Strict` breaks logins that arrive via a link from another site.',
    },
    { type: 'heading', level: 3, text: '6. Content-Security-Policy — the powerful one, shipped carefully' },
    {
      type: 'paragraph',
      text: 'CSP tells the browser which sources are allowed to load scripts, styles, images and frames. It is the strongest control on this page and the one that most reliably breaks a live site, because real pages load from more places than anybody remembers.',
    },
    { type: 'paragraph', text: '**Ship it in report-only mode first:**' },
    {
      type: 'codeblock',
      code: "Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' https://...",
    },
    {
      type: 'paragraph',
      text: 'Report-only enforces nothing and reports everything. Run it for a fortnight, collect what it would have blocked, add the legitimate origins, and only then move the same policy to the enforcing header. Anyone who hands you a CSP to paste in without that step has not seen your site.',
    },
    { type: 'heading', level: 3, text: '7. Permissions-Policy — switch off what you never use' },
    { type: 'codeblock', code: 'Permissions-Policy: camera=(), microphone=(), geolocation=()' },
    {
      type: 'paragraph',
      text: 'Denies capabilities to the page and anything embedded in it. If your marketing site never asks for a camera, saying so costs nothing and removes a class of abuse from anything that ever gets injected.',
    },

    { type: 'heading', level: 2, text: 'Two things next to headers that matter as much' },
    {
      type: 'paragraph',
      text: 'A **CAA record.** A DNS record naming which certificate authorities may issue certificates for your domain. Without it, any public authority in the world may issue one — with it, an attempt by anyone else is refused at the authority. Set it to the authority that actually issues yours, and remember to update it before you switch providers or your renewal will fail.',
    },
    {
      type: 'paragraph',
      text: '**DNSSEC.** Cryptographic signatures on your DNS records so a resolver can tell whether the answer it received is the one you published. It is enabled at your registrar and DNS host, and it prevents a class of attack where the answer is replaced in transit — which is to say, it protects everything above, because everything above is published in DNS.',
    },

    { type: 'heading', level: 2, text: 'The order that avoids an outage' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Ship the ones that break nothing: `nosniff`, `Referrer-Policy`, `Permissions-Policy`.',
        'Ship clickjacking protection after you have listed every place your pages are legitimately embedded.',
        'Ship cookie flags with your session cookie, and test a real login in a clean browser.',
        'Ship HSTS with a short `max-age`, verify, then raise it. Leave `preload` alone.',
        'Ship CSP in **report-only**, read the reports for two weeks, then enforce.',
        'Add CAA to match your real authority. Turn on DNSSEC last, at a quiet moment, with the registrar documentation open.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Every one of those steps has an obvious verification: a single request that shows the header now present, and a login that still works. If you cannot state what you would check afterwards, you are not ready to ship the change.',
    },
  ],
  faqs: [
    {
      question: 'Do headers matter if we are just a marketing site with no logins?',
      answer:
        'Less, but not zero — clickjacking and injected script still land on your visitors and your brand, and the headers are the first thing anybody assessing you will look at.',
    },
    {
      question: 'Our platform sets some of these automatically. Is that enough?',
      answer:
        'Some platforms set a few sensible defaults, and none of them sets a CSP that fits your site, because a fitting CSP depends on what your pages actually load. Check what is really being served rather than what the documentation says is the default.',
    },
    {
      question: 'Will a perfect header score mean we are secure?',
      answer:
        'No, and it is worth being blunt about it: a clean grade means your front door is tidy. It says nothing about your authentication, your backups, your vendors or your people. A tidy front door is still worth having — it is just not a conclusion.',
    },
    {
      question: 'How do we see which headers we serve today?',
      answer:
        'The free exposure report reads them from one ordinary request to your homepage and grades what it finds.',
    },
  ],
  related: [
    { label: 'How we test', href: '/security/how-we-test' },
    { label: 'Run the free exposure report', href: '/exposure' },
    { label: 'Ask for a scoping call', href: '/contact' },
  ],
};
