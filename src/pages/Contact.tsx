import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';
import Breadcrumb from '../components/Breadcrumb';
import RenderSections from '../content/RenderSections';
import { contact } from '../content/pages/contact';

export default function Contact() {
  // GoHighLevel's embed script auto-resizes the form iframe to its content —
  // without it the form clips on mobile where fields stack much taller.
  useEffect(() => {
    const id = 'ghl-form-embed-script';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = 'https://crm.ikonic303.com/js/form_embed.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const jsonLd = (contact.schema ?? []).map((o) =>
    JSON.stringify(o).replace(/</g, '\\u003c'),
  );

  return (
    <div className="relative bg-charcoal min-h-screen">
      <PageSEO
        title={contact.seo.title}
        description={contact.seo.description}
        canonical="/contact"
        appendSiteName={false}
      />
      <Helmet>
        {jsonLd.map((s, i) => (
          <script key={i} type="application/ld+json">
            {s}
          </script>
        ))}
      </Helmet>

      <MatrixBackground />
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-10 px-[6vw] relative z-10">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb crumbs={contact.breadcrumb} />
          <p className="text-micro text-mint mb-4 tracking-[0.2em]">{contact.eyebrow}</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-bold text-offwhite mb-8 leading-[1.15] break-words">
            {contact.h1}
          </h1>
          <p className="text-base sm:text-lg text-offwhite font-medium leading-relaxed rounded-xl border border-mint/25 bg-mint/[0.06] px-5 py-4 max-w-2xl">
            {contact.answer}
          </p>
        </div>
      </section>

      <section className="pb-20 px-[6vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="bg-charcoal-light border border-white/10 rounded-2xl p-4 sm:p-8">
            <h2 className="font-display text-2xl font-bold text-offwhite mb-6">
              Tell us about the workflow
            </h2>
            <iframe
              src="https://crm.ikonic303.com/widget/form/YoKGheZ0aVCEaSOJQFxY"
              id="inline-YoKGheZ0aVCEaSOJQFxY"
              data-layout="{'id':'INLINE'}"
              data-form-id="YoKGheZ0aVCEaSOJQFxY"
              data-height="1199"
              data-layout-iframe-id="inline-YoKGheZ0aVCEaSOJQFxY"
              data-form-name="Book a strategy call"
              className="w-full h-[1500px] sm:h-[1199px] border-0 rounded-[3px] bg-charcoal-light"
              title="Start with the measurement"
              loading="lazy"
            />
          </div>

          <div className="max-w-xl">
            <RenderSections sections={contact.sections} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
