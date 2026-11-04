/**
 * Image and Static Asset Resolution Utility
 * Ensures rock-solid URL resolution across all deployment targets:
 * - AI Studio preview environment
 * - GitHub Pages subpath deployments (e.g. https://jcfrom2000.github.io/Asuan/)
 * - Custom domain root deployments (e.g. https://overstreamtherapy.com/)
 */

export function getAssetUrl(path: string): string {
  if (!path) return '';
  // Return remote or data URLs as-is
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL || '/';
  const cleanBase = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${cleanBase}${cleanPath}`;
}
