/**
 * prerender-routes.mjs — per-route static HTML for crawlers and AI answer engines.
 *
 * THE PROBLEM THIS SOLVES
 * ikonic303.com is a client-rendered Vite/React SPA. Every SPA route (/about, /services,
 * /contact, …) was served the SAME dist/index.html — byte-identical, 9,658 bytes, with the
 * homepage's <title> and a canonical pointing at "https://ikonic303.com/". To any crawler that
 * does not execute JavaScript — GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, and Google's
 * first pass — the site was ONE page published at a dozen URLs, each one declaring itself a
 * duplicate of the homepage. react-helmet-async sets the correct per-page tags, but only after
 * JS runs, which is exactly when those crawlers have already left.
 *
 * THE FIX
 * After `vite build`, take the built dist/index.html as a template and emit a real
 * dist/<route>/index.html for every public route, each carrying its own <title>, description,
 * canonical, OG/Twitter tags, and a block of genuine page content inside #root. Vercel serves
 * a matching static file before it consults the SPA catch-all rewrite, so /about now returns
 * about-specific HTML.
 *
 * Users are unaffected: React's createRoot().render() replaces #root the instant JS runs, so
 * the interactive SPA is identical. Same HTML is served to every visitor — progressive
 * enhancement, not cloaking.
 *
 * MAINTENANCE
 * `title` and `description` below are copied verbatim from each page's <PageSEO> props so the
 * static shell and the React app never disagree. If you change PageSEO on a page, change it
 * here too. `body` is the crawler-visible content — keep every claim true and consistent with
 * listings/nap-truth.json; this text is what AI answer engines quote back about ikonic.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ORIGIN = 'https://ikonic303.dev';

const PHONE = '(720) 679-1230';
const CONTACT_BLOCK = `<h2>Get in touch</h2>
<p>Call <a href="tel:+17206791230">${PHONE}</a> or email
<a href="mailto:info@ikonicmarketing303.com">info@ikonicmarketing303.com</a> to book a strategy
call or a free automation audit. ikonic303 is based in Denver, Colorado and works with clients
nationwide. Looking for signage, window graphics, or architectural window film? That is our
sister site, <a href="https://ikonic303.com">ikonic303.com</a>.</p>`;

/** @type {{path:string,title:string,description:string,body:string}[]} */
const ROUTES = [
  {
    path: '/about',
    title: 'About ikonic303 | Technology & Growth Partner for Growing Businesses',
    description:
      'ikonic303 is a Forward Deployed Engineering, AI, automation, CRM, and digital marketing partner. We design, build, integrate, and deploy the systems small and medium businesses need to scale.',
    body: `<h1>About ikonic303</h1>
<p>ikonic303 helps businesses deploy the technology, automation, AI, CRM, and marketing
infrastructure they need to generate leads, improve operations, and scale. We work like a
forward deployed engineering team: we embed with your business, map how work actually flows, and
build the systems that remove the manual steps — then integrate them with the tools you already
run on.</p>
<p>We don't simply provide advice. We design, build, integrate, and deploy the actual systems,
document them, and hand them over — with support while they bed into your operations. Based in
Denver, Colorado; working with clients nationwide.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/services',
    title: 'Services — Forward Deployed Engineering, AI, CRM & Marketing | ikonic303',
    description:
      'ikonic303 services: Forward Deployed Engineering, AI & automation, CRM & sales systems, and digital marketing. We design, build, integrate, and deploy the systems growing businesses need.',
    body: `<h1>ikonic303 services</h1>
<p>Four connected practices, delivered as working systems inside your business — not
recommendations. We design the system, build it, integrate it with your stack, and stay until
it is running.</p>
<h2>Forward Deployed Engineering</h2>
<p>Custom business systems, API integrations, Zapier and workflow integrations, internal tools
and dashboards, CRM integrations, and automation deployment. Engineers embedded with your team,
shipping to production.</p>
<h2>AI &amp; Automation</h2>
<p>AI agents and assistants, AI front office / AI receptionist, AI lead qualification, automated
follow-up, appointment booking automation, customer support automation, and business process
automation — wired into the tools you already use.</p>
<h2>CRM &amp; Sales Systems</h2>
<p>GoHighLevel setup and management, CRM setup and optimization, sales pipeline automation, lead
management systems, lead nurturing, email and SMS automation, and reporting dashboards.</p>
<h2>Digital Marketing</h2>
<p>Website development, landing pages and sales funnels, local SEO, SEO and AEO optimization,
Google Business Profile optimization, paid ads and lead generation, social media marketing, and
marketing analytics and tracking.</p>
<h2>Why choose ikonic303?</h2>
<p><strong>We deploy, not just advise</strong> — every engagement ends with a system running in
production and documented. <strong>Integrated with your stack</strong> — one source of truth,
not five disconnected apps. <strong>Measured on outcomes</strong> — more qualified leads, faster
response, less manual work, higher conversion.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/services/forward-deployed-engineering',
    title: 'Forward Deployed Engineering | Custom Systems & Integrations | ikonic303',
    description:
      'We embed with your team and build the custom business systems, API integrations, internal tools, and automation your company runs on — deployed to production, not slide decks.',
    body: `<h1>Forward Deployed Engineering</h1>
<p>We work alongside your team, map how work actually flows, and build the systems that remove
the manual steps: custom business systems, API integrations, Zapier and workflow integrations,
internal tools and dashboards, CRM integrations, and automation deployment. Everything ships to
production with monitoring and documentation, then a handover walkthrough.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/services/ai-automation',
    title: 'AI Automation & AI Agents | AI Receptionist & Lead Qualification | ikonic303',
    description:
      'AI agents and assistants that qualify leads, answer customers, book appointments, and automate repetitive work — deployed into your CRM and phone/website channels.',
    body: `<h1>AI &amp; Automation</h1>
<p>AI agents and assistants that handle conversations, qualify leads, book appointments, and take
repetitive work off your team. AI front office / AI receptionist, AI lead qualification,
automated follow-up, appointment booking automation, customer support automation, and business
process automation — wired into the CRM, phone, and website you already use.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/services/crm-sales-systems',
    title: 'CRM & Sales Systems | GoHighLevel Setup & Automation | ikonic303',
    description:
      'GoHighLevel setup and optimization, sales pipeline automation, lead nurturing, and email/SMS sequences so every lead is tracked, followed up, and reported on.',
    body: `<h1>CRM &amp; Sales Systems</h1>
<p>We set up and optimize GoHighLevel — pipelines, automations, and email/SMS sequences — so
leads are captured, nurtured, and followed up without anyone remembering to. Includes CRM setup
and optimization, sales pipeline automation, lead management systems, lead nurturing, and
reporting dashboards for pipeline value, conversion, and cost per lead.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/services/digital-marketing',
    title: 'Digital Marketing | Websites, Funnels, Local SEO & Paid Ads | ikonic303',
    description:
      'Website development, sales funnels, local SEO, SEO/AEO, Google Business Profile optimization, paid ads, and marketing analytics — built to generate qualified leads and tracked end to end.',
    body: `<h1>Digital Marketing</h1>
<p>Websites, landing pages and sales funnels, local SEO, SEO and AEO optimization, Google
Business Profile optimization, paid ads and lead generation, social media marketing, and
marketing analytics and tracking. Built as a lead-generation system connected to your CRM and
measured on qualified leads and cost per lead.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/how-we-work',
    title: 'How We Work | Forward Deployed Engineering Process | ikonic303',
    description:
      'How ikonic303 scopes and ships: audit and map your operations, design one system at a time, build and deploy to production, then support and iterate. Fixed scope, full handover.',
    body: `<h1>How we work</h1>
<p>We work like a forward deployed engineering team. First we audit and map how work flows and
where leads and time leak. Then we design one system at a time with a fixed scope agreed up
front, build and deploy it to production integrated with your stack, and support it while it
beds in — before moving to the next highest-leverage build. You own the accounts, the code, and
the data.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/contact',
    title: 'Contact ikonic303 | Book a Strategy Call or Free Automation Audit',
    description:
      "Book a strategy call or request a free automation audit. We'll map the highest-leverage AI, CRM, and marketing system to build for your business. Call (720) 679-1230.",
    body: `<h1>Contact ikonic303</h1>
<p>Tell us where the manual work and dropped leads are. We'll map the highest-leverage
automation and show you what we'd build first — usually within one business day.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/blogs',
    title: 'Insights | AI, Automation, CRM & Growth Systems | ikonic303',
    description:
      'Practical guides on AI automation, CRM and sales systems, integrations, local SEO, and lead generation for small and medium businesses.',
    body: `<h1>ikonic303 insights</h1>
<p>Practical guides on AI automation, CRM and sales systems, integrations, local SEO, and lead
generation — written for owners and operators of growing businesses.</p>`,
  },
  {
    path: '/careers',
    title: 'Careers at ikonic303 | Automation Engineers & Growth Systems Builders',
    description:
      "Join ikonic303. We're hiring forward deployed engineers, automation and CRM builders, and growth-systems specialists who like shipping systems into real businesses.",
    body: `<h1>Careers at ikonic303</h1>
<p>We're growing our team of forward deployed engineers and automation builders — people who
like deploying AI, CRM, and marketing systems into real businesses. Denver-based or remote.</p>
${CONTACT_BLOCK}`,
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Replace the content of a meta/link tag matched by `attrRe`, preserving the rest of the tag. */

// JSON.stringify does NOT escape "/", so a value containing </script> breaks out of the
// block below and is baked into dist/**/index.html — XSS that fires before React mounts
// and even for JS-disabled crawlers. Blog titles/descriptions come from GHL, so they are
// not fully trusted. Escaping "<" to \u003c keeps the JSON valid and inert.
function jsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function setTag(html, attrRe, value) {
  return html.replace(attrRe, (m) => m.replace(/content="[^"]*"/, `content="${esc(value)}"`));
}

function buildPage(template, route) {
  const url = ORIGIN + route.path;
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`);
  html = setTag(html, /<meta\s+name="description"[^>]*>/, route.description);
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );
  html = setTag(html, /<meta\s+property="og:url"[^>]*>/, url);
  html = setTag(html, /<meta\s+property="og:title"[^>]*>/, route.title);
  html = setTag(html, /<meta\s+property="og:description"[^>]*>/, route.description);
  html = setTag(html, /<meta\s+name="twitter:title"[^>]*>/, route.title);
  html = setTag(html, /<meta\s+name="twitter:description"[^>]*>/, route.description);

  // Swap the homepage crawler fallback for this route's content. React replaces #root on boot.
  // In source, #root is followed by <script type="module">. After `vite build` that script is
  // hoisted into <head>, leaving </div> followed by </body>. Match either so the script works
  // against both the source template and the built output.
  const rootRe = /(<div id="root">)[\s\S]*?(<\/div>\s*(?:<script|<\/body>))/;
  if (!rootRe.test(html)) {
    throw new Error(
      'prerender: could not locate the #root fallback block in dist/index.html. ' +
        'If index.html changed shape, update the rootRe pattern in scripts/prerender-routes.mjs.'
    );
  }
  const fallback = `
      <main style="max-width:820px;margin:0 auto;padding:2rem 1.25rem;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#e8e8e8;background:#0A0E1A">
        ${route.body}
        <p><a href="${ORIGIN}/">ikonic303 home</a> ·
           <a href="${ORIGIN}/services">services</a> ·
           <a href="${ORIGIN}/contact">contact</a></p>
      </main>
    `;
  html = html.replace(rootRe, `$1${fallback}$2`);
  return html;
}

/**
 * Blog posts. There are ~53 of them and they were ALL served the homepage shell —
 * same <title>, canonical="https://ikonic303.com/" — so to a crawler that doesn't run
 * JS, every post looked like another copy of the homepage. Posts are the whole point
 * of the daily generator and the most citable thing on the site, so they get real
 * shells with their own title, description, canonical, opening text and Article schema.
 *
 * FAIL SOFT: the post list is fetched from the live API at build time. If that fetch
 * fails (site down, API blip, offline build) we log and skip — a broken blog feed must
 * never break the deploy of the whole site.
 *
 * STALENESS: a post published between builds has no shell until the next deploy. It
 * still renders for humans (the SPA handles /post/:slug) and is still indexable — it
 * just shows the generic shell to a crawler until then. Run scripts/deploy-site.sh
 * after publishing if a post matters immediately.
 */
async function fetchJson(url, ms = 15000) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), ms);
  try {
    const r = await fetch(url, { signal: ac.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return await r.json();
  } finally {
    clearTimeout(t);
  }
}

const stripHtml = (html) =>
  String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

function buildPost(template, post) {
  const url = `${ORIGIN}/post/${post.slug}`;
  const title = `${post.title} | ikonic303`;
  const desc = (post.description || post.excerpt || '').slice(0, 300);
  let html = template;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = setTag(html, /<meta\s+name="description"[^>]*>/, desc);
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta\s+property="og:url"[^>]*>/, url);
  html = setTag(html, /<meta\s+property="og:title"[^>]*>/, title);
  html = setTag(html, /<meta\s+property="og:description"[^>]*>/, desc);
  html = setTag(html, /<meta\s+name="twitter:title"[^>]*>/, title);
  html = setTag(html, /<meta\s+name="twitter:description"[^>]*>/, desc);
  html = html.replace(/<meta\s+property="og:type"[^>]*>/, '<meta property="og:type" content="article" />');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: desc,
    datePublished: post.publishedAt || undefined,
    author: { '@type': 'Organization', name: 'ikonic303' },
    publisher: { '@type': 'Organization', name: 'ikonic303', url: ORIGIN },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.category || undefined,
    keywords: Array.isArray(post.tags) && post.tags.length ? post.tags.join(', ') : undefined,
  };

  const body = `
      <main style="max-width:820px;margin:0 auto;padding:2rem 1.25rem;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#e8e8e8;background:#0A0E1A">
        <article>
          <h1>${esc(post.title)}</h1>
          <p><em>${esc(post.category || 'Insights')}${post.publishedAt ? ' · ' + new Date(post.publishedAt).toDateString() : ''}</em></p>
          ${post.body ? `<p>${esc(post.body)}</p>` : `<p>${esc(desc)}</p>`}
        </article>
        <p><a href="${ORIGIN}/blogs">All guides</a> ·
           <a href="${ORIGIN}/services">services</a> ·
           <a href="${ORIGIN}/contact">contact</a></p>
      </main>
      <script type="application/ld+json">${jsonLd(schema)}</script>
    `;
  return html.replace(/(<div id="root">)[\s\S]*?(<\/div>\s*(?:<script|<\/body>))/, `$1${body}$2`);
}

// Moon River (Rios's Brighton construction business) categories. The daily generator is
// not yet client-scoped, so it can still queue these onto ikonic's own blog. Unpublishing
// clears what's already live; this filter keeps any new ones out of ikonic's prerendered
// shells and sitemap until the generator itself is scoped at write time.
const MOON_RIVER_CATEGORIES = new Set([
  'Concrete & Hardscapes',
  'Landscaping & Outdoor Living',
  'Interior Remodeling',
  'Home Maintenance & Seasonal',
]);

// D4 vehicle content removal (2026-08-26): PPF, window tint, ceramic coating, and
// commercial/fleet vehicle wraps are no longer part of ikonic's content strategy — the
// 14 existing posts were unpublished via the Redis status flag and the generator no
// longer queues these topics (see TOPICS_BY_CATEGORY in auto-blog-generate.ts). This
// filter is defense-in-depth, same as MOON_RIVER_CATEGORIES above: it keeps any
// leftover or manually-added vehicle post out of the sitemap and prerendered shells.
//
// 2026-08-29 refocus: 'Digital Marketing' is retired from the blog for the same reason.
// Existing marketing posts are unpublished; this keeps any that slip through out of the
// sitemap and prerendered shells. See auto-blog-generate.ts for the matching change.
const VEHICLE_CATEGORIES = new Set([
  'Commercial Wraps', 'Vehicle Protection', 'Digital Marketing',
]);

// 2026-08-29 refocus: some older marketing posts were filed under generic categories
// ('Marketing', 'Lead Generation', etc.) so the category set alone doesn't catch them.
// This slug/title keyword filter is the belt-and-braces: any post that is clearly about
// digital marketing, SEO, ads, CRM, funnels, or lead automation is kept out of the
// prerendered shells and the sitemap. Unpublishing them in Redis is still the real fix.
const OFF_TOPIC_SLUG_RE =
  /(^|-)(marketing|gohighlevel|ghl|crm|seo|sem|ppc|funnel|funnels|lead-|leads-|lead-gen|lead-generation|automation|chatbot|ai-voice|retarget|ad-|ads-|advertising|google-ads|meta-ads|facebook-ads|newsletter|email-marketing|reputation|reviews?-automation|website-|web-design|sales-funnel)(-|$)/i;

async function prerenderPosts(template) {
  let list;
  try {
    const d = await fetchJson(`${ORIGIN}/api/blog-posts`, 20000);
    // ikonic303.dev "Insights" covers AI, automation, CRM, and marketing — the same
    // topics the old shop-site filtered OUT. Keep only the basic slug/link sanity check;
    // MOON_RIVER / VEHICLE / OFF_TOPIC filters above are legacy and intentionally unused.
    list = (d.posts || []).filter((p) => p.slug && !String(p.link || '').startsWith('http'));
    void MOON_RIVER_CATEGORIES; void VEHICLE_CATEGORIES; void OFF_TOPIC_SLUG_RE;
  } catch (err) {
    console.warn(`prerender: skipping blog posts — could not load the list (${err.message})`);
    return { count: 0, slugs: [] };
  }

  const slugs = [];
  for (const p of list) {
    // Opening text makes the shell genuinely citable; excerpt-only is the fallback.
    try {
      const full = await fetchJson(`${ORIGIN}/api/blog-post?slug=${encodeURIComponent(p.slug)}`, 12000);
      p.description = full.description || p.excerpt;
      p.body = stripHtml(full.content).slice(0, 1200);
      p.publishedAt = full.publishedAt || p.publishedAt;
      p.tags = full.tags;
      p.category = full.category || p.category;
    } catch {
      /* excerpt-only shell — still far better than a homepage clone */
    }
    const outDir = join(DIST, 'post', p.slug);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), buildPost(template, p), 'utf8');
    slugs.push(p.slug);
  }
  return { count: slugs.length, slugs };
}

/**
 * Rewrite dist/sitemap.xml: add every prerendered post and drop duplicates.
 */
function fixSitemap(postSlugs) {
  const smPath = join(DIST, 'sitemap.xml');
  if (!existsSync(smPath)) return 0;
  const xml = readFileSync(smPath, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const keep = [...new Set(locs)];
  for (const slug of postSlugs) keep.push(`${ORIGIN}/post/${slug}`);

  const body = [...new Set(keep)]
    .sort()
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join('\n');
  writeFileSync(smPath, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`, 'utf8');
  return [...new Set(keep)].length;
}

/**
 * The 404 shell. Every unmatched path rewrites here (see vercel.json), so it must:
 *  - carry <meta name="robots" content="noindex"> — otherwise every mistyped or stale
 *    URL returns the HOMEPAGE's title and canonical, telling Google there are infinite
 *    copies of the homepage (a "soft 404");
 *  - still load the JS bundle, so if someone adds a React route and forgets to add a
 *    rewrite here, the page STILL WORKS for humans — it just isn't indexed until the
 *    entry is added. Degrade gracefully, never blank-screen.
 */
function build404(template) {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>Page Not Found | ikonic303</title>');
  html = setTag(html, /<meta\s+name="description"[^>]*>/, "That page doesn't exist. Explore ikonic303's Forward Deployed Engineering, AI automation, CRM, and digital marketing services.");
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    '<meta name="robots" content="noindex,follow" />');
  const rootRe = /(<div id="root">)[\s\S]*?(<\/div>\s*(?:<script|<\/body>))/;
  const body = `
      <main style="max-width:820px;margin:0 auto;padding:2rem 1.25rem;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#e8e8e8;background:#0A0E1A">
        <h1>Page not found</h1>
        <p>That page doesn't exist. The link may be out of date, or the address slightly off.</p>
        <p><a href="${ORIGIN}/">ikonic303 home</a> ·
           <a href="${ORIGIN}/services">services</a> ·
           <a href="${ORIGIN}/how-we-work">how we work</a> ·
           <a href="${ORIGIN}/contact">contact</a></p>
        <p>Or call <a href="tel:+17206791230">(720) 679-1230</a>.</p>
      </main>
    `;
  return html.replace(rootRe, `$1${body}$2`);
}

async function main() {
  const templatePath = join(DIST, 'index.html');
  if (!existsSync(templatePath)) {
    console.error(`prerender: ${templatePath} not found — run \`vite build\` first.`);
    process.exit(1);
  }
  const template = readFileSync(templatePath, 'utf8');

  let count = 0;
  for (const route of ROUTES) {
    const outDir = join(DIST, route.path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), buildPage(template, route), 'utf8');
    count++;
  }
  writeFileSync(join(DIST, '404.html'), build404(template), 'utf8');

  const { count: postCount, slugs } = await prerenderPosts(template);
  const smCount = fixSitemap(slugs);

  console.log(
    `prerender: ${count} route shells + 404.html + ${postCount} post shells; sitemap has ${smCount} urls`
  );
}

await main();
