'use client';

import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

/**
 * Wraps root layout with client-side providers. (EN)
 * 루트 레이아웃을 클라이언트 프로바이더로 감쌉니다. (KO)
 */
export function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}
