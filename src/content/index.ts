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

import { guidesIndex } from './pages/guides-index';
import { guideCostOfManualWorkflow } from './pages/guide-cost-of-a-manual-workflow';
import { guideWhichWorkflowFirst } from './pages/guide-which-workflow-to-automate-first';
import { guideYouCannotAutomateAMess } from './pages/guide-you-cannot-automate-a-mess';
import { guideAgencyVsConsultantVsFde } from './pages/guide-agency-vs-consultant-vs-fde';
import { guideTwelveQuestions } from './pages/guide-twelve-questions-before-you-sign';
import { guideWhoOwnsTheSystem } from './pages/guide-who-owns-the-system';
import { guideBuildVsBuy } from './pages/guide-build-vs-buy-internal-tools';
import { guideWhatTenWeeksLooksLike } from './pages/guide-what-ten-weeks-looks-like';
import { guideWhyAiPilotsDie } from './pages/guide-why-ai-pilots-die';
import { guideAiAgentsThatDoWork } from './pages/guide-ai-agents-that-do-work';
import { guideMeasuringAutomationRoi } from './pages/guide-measuring-automation-roi';
import { guideSpeedToQuote } from './pages/guide-speed-to-quote';

import { indConstruction } from './pages/ind-construction-and-trades';
import { indDistribution } from './pages/ind-distribution-and-wholesale';
import { indFieldService } from './pages/ind-field-service';
import { indProfessionalServices } from './pages/ind-professional-services';

/** Core pages + the services hub / service pages. */
export const CORE_PAGES: PageContent[] = [
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

/** The 12 long-form guides, in the order the /guides index lists them. */
export const GUIDE_PAGES: PageContent[] = [
  guideCostOfManualWorkflow,
  guideWhichWorkflowFirst,
  guideYouCannotAutomateAMess,
  guideAgencyVsConsultantVsFde,
  guideTwelveQuestions,
  guideWhoOwnsTheSystem,
  guideBuildVsBuy,
  guideWhatTenWeeksLooksLike,
  guideWhyAiPilotsDie,
  guideAiAgentsThatDoWork,
  guideMeasuringAutomationRoi,
  guideSpeedToQuote,
];

/** The four industry pages (children of /who-we-work-with). */
export const INDUSTRY_PAGES: PageContent[] = [
  indConstruction,
  indDistribution,
  indFieldService,
  indProfessionalServices,
];

/**
 * Every editorial page. Consumed by:
 *   - the route components under src/pages (via <ContentPage> or bespoke layouts)
 *   - scripts/prerender-routes.mjs, which emits each one to static crawler HTML
 *     and to llms-full.txt
 */
export const PAGES: PageContent[] = [
  ...CORE_PAGES,
  guidesIndex,
  ...GUIDE_PAGES,
  ...INDUSTRY_PAGES,
];

export const PAGE_ROUTES: string[] = PAGES.map((p) => p.slug);

/** slug -> content, for the /guides/:slug and /industries/:slug route components. */
export const PAGE_BY_SLUG: Record<string, PageContent> = Object.fromEntries(
  PAGES.map((p) => [p.slug, p]),
);

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
  guidesIndex,
};
