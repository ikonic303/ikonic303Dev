// Tiny inline-markdown tokenizer shared by both renderers (React + static HTML).
// Supports exactly what the page copy uses: **bold**, [text](/path) and `code`.
// Deliberately not a full markdown parser.

export type InlineToken =
  | { t: 'text'; v: string }
  | { t: 'bold'; v: string }
  | { t: 'code'; v: string }
  | { t: 'link'; v: string; href: string };

// bold | link | code
const TOKEN_RE = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`/g;

export function parseInline(src: string): InlineToken[] {
  const out: InlineToken[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(src)) !== null) {
    if (m.index > last) out.push({ t: 'text', v: src.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ t: 'bold', v: m[1] });
    else if (m[2] !== undefined) out.push({ t: 'link', v: m[2], href: m[3] });
    else if (m[4] !== undefined) out.push({ t: 'code', v: m[4] });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ t: 'text', v: src.slice(last) });
  return out;
}

/** A bold span may itself wrap a link or code — resolve one level deeper. */
export function parseBoldChildren(v: string): InlineToken[] {
  return parseInline(v);
}

export function isInternalHref(href: string): boolean {
  return href.startsWith('/');
}
