import type { EducationEntry } from '@/lib/types';

interface EducationListProps {
  items: EducationEntry[];
}

/**
 * Lists education history in chronological order. (EN)
 * 학력 정보를 시간 순으로 보여주는 섹션입니다. (KO)
 */
export function EducationList({ items }: EducationListProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section id="education" aria-labelledby="education-heading" className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-wide text-muted-foreground">Education</p>
        <h2 id="education-heading" className="text-3xl font-semibold text-foreground">
          학력
        </h2>
      </header>
      <div className="space-y-4">
        {items.map((entry) => (
          <article key={`${entry.school}-${entry.period}`} className="rounded-3xl border border-border/60 bg-card/60 p-5 shadow-sm backdrop-blur">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{entry.school}</h3>
                <p className="text-sm text-muted-foreground">{entry.program}</p>
              </div>
              <div className="text-sm text-muted-foreground">{entry.period}</div>
            </div>
            {entry.location ? <p className="mt-1 text-sm text-muted-foreground">{entry.location}</p> : null}
            {entry.notes && entry.notes.length > 0 ? (
              <ul className="mt-3 space-y-1 border-l border-border/50 pl-4 text-sm text-foreground">
                {entry.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
