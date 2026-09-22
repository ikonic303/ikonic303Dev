/**
 * ikonic303.dev — /software self-serve funnel.
 *
 * ⚠️ THIS FILE HOLDS NO NUMBERS. The single source of truth is `funnel.data.json`,
 * so the React page and the standalone preview can never disagree about a price.
 * After editing that JSON, run `python3 build-data.py`.
 *
 * A price of `null` means Josh has not set it. The page renders that item DISABLED
 * with the reason on it — it never falls back to a guess. No agent fills one in;
 * prices are Josh's under the scope gate.
 */
import data from './funnel.data.json';

export type Provisioning = 'AUTO' | 'BLOCKED' | 'HUMAN';

export interface Sku {
  id: string;
  name: string;
  blurb: string;
  priceMonthly: number | null;
  provisioning: Provisioning;
  provisioningNote: string;
  enabled: boolean;
}

export interface FunnelData {
  checkoutUrl: string | null;
  currency: string;
  annualMonthsFree: number;
  core: Sku & { detail: string[] };
  upsells: Sku[];
  dunning: { day: number; action: string }[];
}

export const FUNNEL = data as unknown as FunnelData;

/** Annual price for a monthly figure, or null if the figure is unset. */
export const annualize = (m: number | null): number | null =>
  m === null ? null : m * (12 - FUNNEL.annualMonthsFree);

/** An upsell is offerable only if it is switched on AND carries a real price. */
export const isSellable = (s: Sku): boolean =>
  s.enabled && s.priceMonthly !== null;

/** Everything a deploy is still waiting on. Empty array = safe to go live. */
export const blockers = (): string[] => {
  const out: string[] = [];
  if (!FUNNEL.checkoutUrl) out.push('checkout URL is not set');
  if (FUNNEL.core.priceMonthly === null) out.push('Core price is not set');
  FUNNEL.upsells.forEach((u) => {
    if (u.enabled && u.priceMonthly === null) out.push(`${u.name}: price is not set`);
  });
  return out;
};
