/**
 * ikonic303.dev — /software self-serve funnel (v2, three packages).
 *
 * ⚠️ THIS FILE HOLDS NO NUMBERS. The single source of truth is `funnel.data.json`,
 * so the React page and the standalone preview can never disagree about a price.
 * After editing that JSON, run `python3 build-data.py`.
 *
 * A price of `null` means Josh has not set it. The page renders that item DISABLED
 * with the reason on it — it never falls back to a guess. No agent fills one in;
 * prices are Josh's under the scope gate. Same rule for checkoutUrls: one slot per
 * package id, every slot null until Josh pastes a real GHL SaaS Configurator link.
 */
import data from './funnel.data.json';

export type Provisioning = 'AUTO' | 'HUMAN' | 'ACCOUNT_AUTO_DELIVERY_HUMAN';
export type UpsellModel = 'monthly' | 'usage' | 'prepaid' | 'quote';

export interface Package {
  id: string;
  name: string;
  blurb: string;
  priceMonthly: number | null;
  detail: string[];
  provisioning: Provisioning;
  provisioningNote: string;
}

export interface Upsell {
  id: string;
  name: string;
  blurb: string;
  model: UpsellModel;
  priceMonthly: number | null;
  prepaidOptions?: number[];
  provisioning: Provisioning;
  provisioningNote: string;
  enabled: boolean;
}

export interface Brain {
  headline: string;
  blurb: string;
  proofLines: string[];
}

export interface FunnelData {
  currency: string;
  annualMonthsFree: number;
  checkoutUrls: Record<string, string | null>;
  packages: Package[];
  brain: Brain;
  upsells: Upsell[];
  dunning: { day: number; action: string }[];
}

export const FUNNEL = data as unknown as FunnelData;

/** Annual price for a monthly figure, or null if the figure is unset. */
export const annualize = (m: number | null): number | null =>
  m === null ? null : m * (12 - FUNNEL.annualMonthsFree);

export const packageById = (id: string): Package | undefined =>
  FUNNEL.packages.find((p) => p.id === id);

/**
 * Whether an upsell can be picked at all, independent of its displayed price:
 * - monthly  → needs a real priceMonthly (never guess a number)
 * - usage    → always sellable; it adds $0 up front by definition
 * - prepaid  → always sellable; the customer names their own top-up amount
 * - quote    → always sellable; ticking it flags a reply, not a charge
 */
export const isSellable = (u: Upsell): boolean => {
  if (!u.enabled) return false;
  if (u.model === 'monthly') return u.priceMonthly !== null;
  return true;
};

/** The amount an upsell adds to today's total. null = adds nothing today
 * (usage, and quote — quote never bills through this page at all). */
export const upsellDueToday = (u: Upsell, annual: boolean): number | null => {
  if (u.model === 'usage') return 0;
  if (u.model === 'quote') return null;
  if (u.model === 'prepaid') return null; // customer's own chosen top-up, not part of the plan total
  return annual ? annualize(u.priceMonthly) : u.priceMonthly;
};

/** Everything a deploy is still waiting on. Empty array = safe to go live. */
export const blockers = (): string[] => {
  const out: string[] = [];
  FUNNEL.packages.forEach((p) => {
    if (!FUNNEL.checkoutUrls[p.id]) out.push(`${p.name}: checkout URL is not set`);
    if (p.priceMonthly === null) out.push(`${p.name}: price is not set`);
  });
  FUNNEL.upsells.forEach((u) => {
    if (u.enabled && u.model === 'monthly' && u.priceMonthly === null) {
      out.push(`${u.name}: price is not set`);
    }
  });
  return out;
};
