import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageSEO from './components/PageSEO';
import MatrixBackground from './components/MatrixBackground';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import './App.css';

// Below-fold home sections — lazy loaded
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const AboutSection = lazy(() => import('./sections/AboutSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

// Route pages — lazy loaded
const AllServices = lazy(() => import('./pages/AllServices'));
const ForwardDeployedEngineering = lazy(() => import('./pages/ForwardDeployedEngineering'));
const AIAutomation = lazy(() => import('./pages/AIAutomation'));
const CRMSalesSystems = lazy(() => import('./pages/CRMSalesSystems'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const HowWeWork = lazy(() => import('./pages/LearnMore'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ProofManager = lazy(() => import('./pages/ProofManager'));
const ProofClient = lazy(() => import('./pages/ProofClient'));
const NotFound = lazy(() => import('./pages/NotFound'));

function HomePage() {
  return (
    <>
      <PageSEO
        title="Forward Deployed Engineering, AI Automation & Growth Systems | ikonic303"
        description="ikonic303 designs, builds, integrates, and deploys the AI automation, CRM, and digital marketing systems growing businesses need to generate leads, speed up follow-up, and scale."
        canonical="/"
      />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
}

function App() {
  useEffect(() => {
    // Meta Pixel
    if (!(window as any).fbq) {
      const fbq: any = function () {
        fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
      };
      (window as any).fbq = fbq;
      (window as any)._fbq = fbq;
      fbq.push = fbq;
      fbq.loaded = true;
      fbq.version = '2.0';
      fbq.queue = [];
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(script);
      fbq('init', '694226731767712');
      fbq('track', 'PageView');
    }

    // Load third-party widgets after 6s — outside the TBT measurement window
    const t = setTimeout(() => {
      const scriptId = 'ghl-chat-widget-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://widgets.leadconnectorhq.com/loader.js';
        script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
        script.setAttribute('data-widget-id', '69965105f3036706b875cf61');
        script.async = true;
        document.body.appendChild(script);
      }
    }, 6000);

    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      <div className="relative bg-charcoal min-h-screen">
        <MatrixBackground />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/forward-deployed-engineering" element={<ForwardDeployedEngineering />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/crm-sales-systems" element={<CRMSalesSystems />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/proof-manager" element={<ProofManager />} />
            <Route path="/proof/:token" element={<ProofClient />} />
            {/* Catch-all. Must stay LAST. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
