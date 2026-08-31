import type { PageContent } from './types';
import { home } from './pages/home';
import { pillar } from './pages/forward-deployed-engineering';
import { fdeVsConsultant } from './pages/fde-vs-consultant';
import { fdeVsHiring } from './pages/fde-vs-hiring';
import { fractionalFde } from './pages/fractional-fde';
import { howWeWork } from './pages/how-we-work';
import { whatItCosts } from './pages/what-it-costs';
import { whoWeWorkWith } from './pages/who-we-work-with';
import { servicesHub } from './pages/services-hub';
import { aiAgents } from './pages/svc-ai-agents';
import { crmSystems } from './pages/svc-crm';
import { internalTools } from './pages/svc-internal-tools';
import { marketingSystems } from './pages/svc-marketing';
import { about } from './pages/about';
import { contact } from './pages/contact';

/**
 * Phase-1 editorial pages. Consumed by:
 *   - the route components under src/pages (via <ContentPage> or bespoke layouts)
 *   - scripts/prerender-routes.mjs, which emits each one to static crawler HTML
 */
export const PAGES: PageContent[] = [
  home,
  pillar,
  fdeVsConsultant,
  fdeVsHiring,
  fractionalFde,
  howWeWork,
  whatItCosts,
  whoWeWorkWith,
  servicesHub,
  aiAgents,
  crmSystems,
  internalTools,
  marketingSystems,
  about,
  contact,
];

export const PAGE_ROUTES: string[] = PAGES.map((p) => p.slug);

export {
  home,
  pillar,
  fdeVsConsultant,
  fdeVsHiring,
  fractionalFde,
  howWeWork,
  whatItCosts,
  whoWeWorkWith,
  servicesHub,
  aiAgents,
  crmSystems,
  internalTools,
  marketingSystems,
  about,
  contact,
};
