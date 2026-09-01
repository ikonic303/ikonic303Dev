import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MatrixBackground from './components/MatrixBackground';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Route pages — lazy loaded
const Home = lazy(() => import('./pages/Home'));
const AllServices = lazy(() => import('./pages/AllServices'));
const ForwardDeployedEngineering = lazy(() => import('./pages/ForwardDeployedEngineering'));
const FdeVsConsultant = lazy(() => import('./pages/FdeVsConsultant'));
const FdeVsHiring = lazy(() => import('./pages/FdeVsHiring'));
const FractionalFde = lazy(() => import('./pages/FractionalFde'));
const HowWeWork = lazy(() => import('./pages/LearnMore'));
const WhatItCosts = lazy(() => import('./pages/WhatItCosts'));
const WhoWeWorkWith = lazy(() => import('./pages/WhoWeWorkWith'));
const AiAgentsAndAutomation = lazy(() => import('./pages/AiAgentsAndAutomation'));
const CrmAndSalesSystems = lazy(() => import('./pages/CrmAndSalesSystems'));
const InternalToolsAndDashboards = lazy(() => import('./pages/InternalToolsAndDashboards'));
const MarketingSystems = lazy(() => import('./pages/MarketingSystems'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const GuidesIndex = lazy(() => import('./pages/GuidesIndex'));
const GuideRoute = lazy(() => import('./pages/GuideRoute'));
const IndustryRoute = lazy(() => import('./pages/IndustryRoute'));
const Careers = lazy(() => import('./pages/Careers'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ProofManager = lazy(() => import('./pages/ProofManager'));
const ProofClient = lazy(() => import('./pages/ProofClient'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
      <ScrollToTop />
      <div className="relative bg-charcoal min-h-screen">
        <MatrixBackground />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Pillar + comparisons */}
            <Route path="/forward-deployed-engineering" element={<ForwardDeployedEngineering />} />
            <Route path="/forward-deployed-engineer-vs-consultant" element={<FdeVsConsultant />} />
            <Route path="/forward-deployed-engineer-vs-hiring" element={<FdeVsHiring />} />
            <Route path="/fractional-forward-deployed-engineer" element={<FractionalFde />} />

            {/* Core */}
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/what-it-costs" element={<WhatItCosts />} />
            <Route path="/who-we-work-with" element={<WhoWeWorkWith />} />
            <Route path="/industries/:slug" element={<IndustryRoute />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Guides */}
            <Route path="/guides" element={<GuidesIndex />} />
            <Route path="/guides/:slug" element={<GuideRoute />} />

            {/* Services */}
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/ai-agents-and-automation" element={<AiAgentsAndAutomation />} />
            <Route path="/services/crm-and-sales-systems" element={<CrmAndSalesSystems />} />
            <Route path="/services/internal-tools-and-dashboards" element={<InternalToolsAndDashboards />} />
            <Route path="/services/marketing-systems" element={<MarketingSystems />} />

            {/* Moved / renamed — client-side mirror of the vercel.json 301s */}
            <Route
              path="/services/forward-deployed-engineering"
              element={<Navigate to="/forward-deployed-engineering" replace />}
            />
            <Route
              path="/services/ai-automation"
              element={<Navigate to="/services/ai-agents-and-automation" replace />}
            />
            <Route
              path="/services/crm-sales-systems"
              element={<Navigate to="/services/crm-and-sales-systems" replace />}
            />
            <Route
              path="/services/digital-marketing"
              element={<Navigate to="/services/marketing-systems" replace />}
            />
            <Route path="/learn-more" element={<Navigate to="/how-we-work" replace />} />

            {/* Unchanged */}
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
