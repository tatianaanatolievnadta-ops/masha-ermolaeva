/** Учитывает base GitHub Pages (/masha-ermolaeva/) */
export function path(href: string): string {
  if (/^https?:\/\//i.test(href) || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return href;
  }
  const base = import.meta.env.BASE_URL || '/';
  if (href.startsWith(base)) return href;
  if (href.startsWith('/#')) {
    return `${base.replace(/\/$/, '')}${href}`;
  }
  if (href.startsWith('#')) return href;
  const clean = href.replace(/^\//, '');
  return `${base}${clean}`;
}
