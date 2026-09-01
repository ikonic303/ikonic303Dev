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
import { PAGES } from '../src/content/index.ts';
import { pageToHtml } from '../src/content/emitHtml.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ORIGIN = 'https://ikonic303.dev';
const MIN_WORDS = 500;

const CONTACT_BLOCK = `<h2>Get in touch</h2>
<p>Email <a href="mailto:solutions@ikonic303.dev">solutions@ikonic303.dev</a> to start with the
measurement. ikonic303 is based in Colorado and works with clients nationwide. Looking for
signage, window graphics, or architectural window film? That is our sister site,
<a href="https://ikonic303.com">ikonic303.com</a>.</p>`;

// Site nav + footer, mirroring what <Navigation> and <Footer> render on every SPA page.
// Emitted into every content route's crawler HTML so the static view carries the same
// wayfinding and site context a browser gets, not a bare fragment.
const SITE_CHROME = `<hr />
<nav aria-label="Site">
<p><strong>ikonic303</strong> — forward deployed engineering for operating companies of 50 to 500
people. We embed with your team, measure what one workflow costs you today, build the software
into your existing stack on your accounts, and stay long enough to operate it. Not a strategy
deck. Not a pilot.</p>
<p>Explore:
<a href="${ORIGIN}/forward-deployed-engineering">What is a forward deployed engineer?</a> ·
<a href="${ORIGIN}/forward-deployed-engineer-vs-consultant">Forward deployed engineer vs consultant</a> ·
<a href="${ORIGIN}/forward-deployed-engineer-vs-hiring">Hire one or buy an engagement</a> ·
<a href="${ORIGIN}/fractional-forward-deployed-engineer">Fractional forward deployed engineer</a> ·
<a href="${ORIGIN}/how-we-work">How an engagement runs</a> ·
<a href="${ORIGIN}/what-it-costs">What it costs</a> ·
<a href="${ORIGIN}/who-we-work-with">Who we work with</a> ·
<a href="${ORIGIN}/about">About</a> ·
<a href="${ORIGIN}/contact">Contact</a></p>
<p>What we build:
<a href="${ORIGIN}/services">Services overview</a> ·
<a href="${ORIGIN}/services/ai-agents-and-automation">AI agents and automation</a> ·
<a href="${ORIGIN}/services/crm-and-sales-systems">CRM and sales systems</a> ·
<a href="${ORIGIN}/services/internal-tools-and-dashboards">Internal tools and dashboards</a> ·
<a href="${ORIGIN}/services/marketing-systems">Marketing systems</a>.
Everything runs on your accounts, inside your stack, documented, with your team trained on it —
the test we build to is whether it keeps running if we stop answering the phone.</p>
</nav>
${CONTACT_BLOCK}`;

/** Rough word count of a fragment of HTML, tags stripped. */
const htmlWords = (html) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;

// Routes that are not (yet) content-as-data pages. Everything else is generated
// from src/content so the crawler HTML and the SPA can never drift.
const STATIC_ROUTES = [
  {
    path: '/blogs',
    title: 'Insights — Measuring, Choosing and Deploying | ikonic303',
    description:
      'Practical guides on measuring what a workflow costs, choosing what to automate first, and not getting locked into whoever builds it.',
    body: `<h1>ikonic303 insights</h1>
<p>Practical guides on measuring what a manual workflow costs, choosing which one to fix first,
deploying it without a pilot, and keeping ownership of the result — written for owners and
operators of operating companies between 50 and 500 people.</p>
${CONTACT_BLOCK}`,
  },
  {
    path: '/careers',
    title: 'Careers at ikonic303 | Forward Deployed Engineers',
    description:
      "Join ikonic303. We're hiring forward deployed engineers who like embedding with a business, measuring the real cost of a workflow, and shipping the system that removes it.",
    body: `<h1>Careers at ikonic303</h1>
<p>We're a small forward deployed engineering practice — people who like embedding with an
operating company, measuring what a workflow really costs, and building the system that removes
most of that cost into production. Colorado-based or remote.</p>
${CONTACT_BLOCK}`,
  },
];

const CONTENT_ROUTES = PAGES.map((p) => {
  const body = pageToHtml(p) + '\n' + SITE_CHROME;
  return {
    path: p.slug,
    title: p.seo.title,
    description: p.seo.description,
    body,
    _words: htmlWords(body),
  };
});

for (const r of CONTENT_ROUTES) {
  if (r._words < MIN_WORDS) {
    console.warn(
      `prerender: WARNING ${r.path} crawler HTML is ~${r._words} words, floor is ${MIN_WORDS}`,
    );
  }
}

/** @type {{path:string,title:string,description:string,body:string}[]} */
const ROUTES = [...CONTENT_ROUTES, ...STATIC_ROUTES];

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
  const replacement = `content="${esc(value)}"`;
  // Function replacements so a "$" in `value` is never read as a capture reference.
  return html.replace(attrRe, (m) => m.replace(/content="[^"]*"/, () => replacement));
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
      <main style="max-width:820px;margin:0 auto;padding:2rem 1.25rem;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#e8e8e8;background:#0b0b0f">
        ${route.body}
        <p><a href="${ORIGIN}/">ikonic303 home</a> ·
           <a href="${ORIGIN}/services">services</a> ·
           <a href="${ORIGIN}/contact">contact</a></p>
      </main>
    `;
  // Function replacement, not a string: route.body contains literal "$10,260" etc.,
  // and String.replace would interpret "$1" as a capture-group reference.
  html = html.replace(rootRe, (_m, open, close) => open + fallback + close);
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
      <main style="max-width:820px;margin:0 auto;padding:2rem 1.25rem;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#e8e8e8;background:#0b0b0f">
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
  return html.replace(
    /(<div id="root">)[\s\S]*?(<\/div>\s*(?:<script|<\/body>))/,
    (_m, open, close) => open + body + close,
  );
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
      <main style="max-width:820px;margin:0 auto;padding:2rem 1.25rem;font-family:Inter,system-ui,sans-serif;line-height:1.6;color:#e8e8e8;background:#0b0b0f">
        <h1>Page not found</h1>
        <p>That page doesn't exist. The link may be out of date, or the address slightly off.</p>
        <p><a href="${ORIGIN}/">ikonic303 home</a> ·
           <a href="${ORIGIN}/services">services</a> ·
           <a href="${ORIGIN}/how-we-work">how we work</a> ·
           <a href="${ORIGIN}/contact">contact</a></p>
        <p>Or email <a href="mailto:solutions@ikonic303.dev">solutions@ikonic303.dev</a>.</p>
      </main>
    `;
  return html.replace(rootRe, (_m, open, close) => open + body + close);
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
