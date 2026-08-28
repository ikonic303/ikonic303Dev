import { Helmet } from 'react-helmet-async';

// Brand token is "ikonic303" (Josh 2026-07-20: "ikonic303 branding on all pages") — used for
// og:site_name and the title suffix. The check below is case-insensitive so a title already
// naming the brand never gets a second one appended.
const SITE_NAME = 'ikonic303';
// ikonic303.dev is the technology / growth-systems site (Forward Deployed Engineering, AI,
// automation, CRM, marketing). The physical signage / window-film business lives on
// ikonic303.com — keep the two domains' canonicals separate. Keep this in sync with
// vercel.json's host redirect and index.html's canonical.
const BASE_URL = 'https://ikonic303.dev';
const DEFAULT_IMAGE = `${BASE_URL}/logo-ikonic.webp`;

interface PageSEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

export default function PageSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  noIndex = false,
}: PageSEOProps) {
  const fullTitle = title.toLowerCase().includes(SITE_NAME.toLowerCase())
    ? title
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
