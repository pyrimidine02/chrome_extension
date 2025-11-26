'use client';

import Link from 'next/link';

type NavHref = {
  pathname: string;
  hash?: string;
};

const NAV_ITEMS: Array<{ href: NavHref; label: string }> = [
  { href: { pathname: '/', hash: 'hero' }, label: '소개' },
  { href: { pathname: '/', hash: 'education' }, label: '학력' },
  { href: { pathname: '/', hash: 'projects' }, label: '프로젝트' },
  { href: { pathname: '/', hash: 'research' }, label: '연구' },
  { href: { pathname: '/', hash: 'honors' }, label: '수상' },
  { href: { pathname: '/', hash: 'skills' }, label: '기술스택' },
  { href: { pathname: '/', hash: 'contact' }, label: '연락' },
];

/**
 * Renders the sticky navigation for the site. (EN)
 * 사이트의 고정 내비게이션을 렌더링합니다. (KO)
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200/20 bg-gradient-to-r from-white/95 via-secondary-50/95 to-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-secondary-900 hover:text-primary-600 transition-colors duration-200">
          손호영
        </Link>
        <nav className="hidden gap-1 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={`nav-${item.href.hash ?? 'root'}`}
              href={item.href}
              className="rounded-full px-4 py-2 text-secondary-700 transition-all duration-200 ease-out hover:bg-primary-500/10 hover:text-primary-600 hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
