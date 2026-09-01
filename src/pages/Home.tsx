import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';
import FaqSection from '../components/FaqSection';
import RenderSections from '../content/RenderSections';
import { home } from '../content/pages/home';

export default function Home() {
  // Section 0 is the AI-extraction blockquote — rendered in the hero, above the fold.
  const heroQuote = home.sections[0];
  const rest = home.sections.slice(1);

  return (
    <div className="relative bg-charcoal min-h-screen">
      <PageSEO
        title={home.seo.title}
        description={home.seo.description}
        canonical="/"
        appendSiteName={false}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: (home.faqs ?? []).map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          }).replace(/</g, '\\u003c')}
        </script>
      </Helmet>

      <MatrixBackground />
      <Navigation />

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-32 pb-16 px-[6vw]">
          <div className="max-w-4xl mx-auto">
            <p className="text-micro text-mint mb-4">{home.eyebrow}</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-offwhite mb-6 leading-tight break-words">
              {home.h1}
            </h1>
            <p className="text-base sm:text-lg text-offwhite-dark max-w-2xl mb-8">{home.answer}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-10">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Start with the measurement
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
              <Link to="/how-we-work" className="btn-outline text-center">
                See how an engagement runs
              </Link>
            </div>
            {heroQuote.type === 'blockquote' && (
              <blockquote className="border-l-2 border-mint pl-5 py-1 text-offwhite text-lg italic max-w-2xl">
                {heroQuote.text}
              </blockquote>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="pb-8 px-[6vw]">
          <div className="max-w-3xl mx-auto">
            <RenderSections sections={rest} />
          </div>
        </section>

        {home.faqs && home.faqs.length > 0 && (
          <FaqSection items={home.faqs} title="FAQ" includeSchema={false} />
        )}

        {/* Footer CTA */}
        <section className="py-16 px-[6vw] bg-charcoal-light/80 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-offwhite mb-4">
              The first conversation is a measurement, not a pitch
            </h2>
            <p className="text-offwhite-dark mb-8">
              Tell us which workflow everybody complains about. We will tell you, honestly, whether
              there is enough in it to be worth anyone's money — including when the answer is no.
            </p>
            <p className="text-offwhite-dark mb-8">
              <a href="mailto:solutions@ikonic303.dev" className="text-mint hover:text-mint-light break-all">
                solutions@ikonic303.dev
              </a>
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 sm:text-lg sm:px-8 sm:py-4"
            >
              <ArrowRight className="w-5 h-5 shrink-0" />
              Start with the measurement
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
