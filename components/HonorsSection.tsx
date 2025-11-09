'use client';
import type { Honor } from '@/lib/types';

interface HonorsSectionProps {
  items: Honor[];
}

/**
 * Summarizes notable awards and recognitions. (EN)
 * 주요 수상 및 성과를 요약합니다. (KO)
 */
export function HonorsSection({ items }: HonorsSectionProps) {
  const heading = '수상이력';
  const subtitle = '대회 및 산업 과제에서의 성과를 정리했습니다.';

  return (
    <section id="honors" aria-labelledby="honors-heading" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 id="honors-heading" className="section-title">
          {heading}
        </h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((honor) => (
          <article key={`${honor.title}-${honor.date}`} className="rounded-3xl bg-white p-6 shadow-card/40 ring-1 ring-primary/10">
            <header className="space-y-1">
              <h3 className="text-lg font-semibold text-ink">{honor.title}</h3>
              <p className="text-sm text-primary">{honor.organization}</p>
              <p className="text-xs uppercase tracking-wide text-primary/70">
                {honor.date}
              </p>
            </header>
            <p className="mt-3 text-sm leading-relaxed text-slate">{honor.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
