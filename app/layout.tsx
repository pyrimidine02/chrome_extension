import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from '@/components/Providers';
import { SiteHeader } from '@/components/SiteHeader';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Son Hoyoung · Portfolio',
  description:
    'Infrastructure-minded software engineer blending scalable backends with polished UX for CV and portfolio experiences.',
  openGraph: {
    title: 'Son Hoyoung · Portfolio',
    description:
      'Infrastructure-minded software engineer blending scalable backends with polished UX for CV and portfolio experiences.',
    url: 'https://pyrimidines.org',
    siteName: 'Son Hoyoung Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Establishes global font, providers, and layout chrome. (EN)
 * 전역 폰트, 프로바이더, 레이아웃 크롬을 설정합니다. (KO)
 */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className="bg-secondary">
        <Providers>
          <SiteHeader />
          <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
