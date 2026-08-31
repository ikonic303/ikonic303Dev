import type { Crumb } from '../types';

export const ORIGIN = 'https://ikonic303.dev';

const HOME: Crumb = { name: 'Home', href: '/' };

/** Breadcrumb trail with Home prepended. */
export function crumbs(...trail: Crumb[]): Crumb[] {
  return [HOME, ...trail];
}

export function articleSchema(opts: {
  slug: string;
  headline: string;
  description: string;
  section?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${ORIGIN}${opts.slug}` },
    author: { '@type': 'Organization', name: 'ikonic303', url: `${ORIGIN}/` },
    publisher: { '@type': 'Organization', name: 'ikonic303', url: `${ORIGIN}/` },
    ...(opts.section ? { articleSection: opts.section } : {}),
  };
}

export function howToSchema(opts: {
  slug: string;
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string }[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${ORIGIN}${opts.slug}#howto`,
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
