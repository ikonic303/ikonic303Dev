import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Navigation from './Navigation';
import MatrixBackground from './MatrixBackground';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import PageSEO from './PageSEO';
import FaqSection from './FaqSection';
import RenderSections from '../content/RenderSections';
import type { PageContent } from '../content/types';

/**
 * Shell for the editorial pages. Everything visible is driven by a PageContent
 * module under src/content/pages — the same module the build-time prerender emits
 * to static HTML, so the SPA and the crawler view never diverge.
 */
export default function ContentPage({ page }: { page: PageContent }) {
  const jsonLd = (page.schema ?? []).map((obj) =>
    JSON.stringify(obj).replace(/</g, '\\u003c'),
  );

  return (
    <div className="relative bg-charcoal min-h-screen">
      <PageSEO
        title={page.seo.title}
        description={page.seo.description}
        canonical={page.slug}
        ogType="article"
        appendSiteName={false}
      />
      {jsonLd.length > 0 && (
        <Helmet>
          {jsonLd.map((s, i) => (
            <script key={i} type="application/ld+json">
              {s}
            </script>
          ))}
        </Helmet>
      )}

      <MatrixBackground />
      <Navigation />

      <article className="pt-28 sm:pt-32 pb-16 px-[6vw] relative z-10">
        <div key={page.slug} className="max-w-3xl mx-auto fd-rise">
          <Breadcrumb crumbs={page.breadcrumb} />
          {page.eyebrow && (
            <p className="text-micro text-mint mb-4 tracking-[0.2em]">{page.eyebrow}</p>
          )}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-offwhite mb-8 leading-[1.15] break-words">
            {page.h1}
          </h1>
          <p className="text-base sm:text-lg text-offwhite font-medium leading-relaxed rounded-xl border border-mint/25 bg-mint/[0.06] px-5 py-4 mb-12">
            {page.answer}
          </p>
          <RenderSections sections={page.sections} />

          {page.related && page.related.length > 0 && (
            <nav aria-label="Related pages" className="mt-16 border-t border-white/10 pt-8">
              <p className="text-micro text-mint mb-4 tracking-[0.2em]">Keep reading</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {page.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      to={r.href}
                      className="group flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-charcoal-light/60 px-4 py-3 text-sm text-offwhite hover:border-mint/40 hover:bg-mint/[0.06] transition-colors"
                    >
                      <span>{r.label}</span>
                      <ArrowRight className="w-4 h-4 shrink-0 text-mint transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </article>

      {page.faqs && page.faqs.length > 0 && (
        <FaqSection
          items={page.faqs}
          title="FAQ"
          subtitle="The questions buyers actually ask."
        />
      )}

      <section className="py-16 px-[6vw] border-t border-white/10 bg-charcoal-light/60 backdrop-blur-sm relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-4">
            The first conversation is a measurement, not a pitch
          </h2>
          <p className="text-offwhite-dark mb-8 max-w-xl mx-auto">
            Tell us which workflow everybody complains about. We'll tell you, honestly, whether
            there is enough in it to be worth anyone's money — including when the answer is no.
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center justify-center gap-2 sm:text-lg sm:px-8 sm:py-4"
          >
            Start with the measurement
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
