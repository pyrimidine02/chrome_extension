'use client';
import type { EducationEntry } from '@/lib/types';

interface EducationSectionProps {
  items: EducationEntry[];
}

/**
 * Presents academic background in a concise card layout. (EN)
 * 학력 정보를 간결한 카드 레이아웃으로 제공합니다. (KO)
 */
export function EducationSection({ items }: EducationSectionProps) {
  const heading = '학력';
  const subtitle = '시스템·알고리즘·ML 학습 경험을 바탕으로 합니다.';

  return (
    <section id="education" aria-labelledby="education-heading" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 id="education-heading" className="section-title">
          {heading}
        </h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((entry) => (
          <article key={entry.school} className="rounded-3xl bg-white p-6 shadow-card/40 ring-1 ring-primary/10">
            <header className="space-y-1">
              <h3 className="text-xl font-semibold text-ink">{entry.school}</h3>
              <p className="text-sm text-primary">{entry.program}</p>
              <p className="text-sm text-slate">
                {entry.period}
                {entry.location ? (
                  <span className="ml-2 inline-flex items-center gap-1 text-xs uppercase tracking-wide text-primary/70">
                    <span aria-hidden>•</span>
                    {entry.location}
                  </span>
                ) : null}
              </p>
            </header>
            {entry.notes?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-slate">
                {entry.notes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span aria-hidden className="mt-1 text-primary">–</span>
                    <span className="flex-1">{note}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
