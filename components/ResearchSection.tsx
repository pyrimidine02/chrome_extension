'use client';

import { motion } from 'framer-motion';
import type { ResearchExperience } from '@/lib/types';

interface ResearchSectionProps {
  items: ResearchExperience[];
}

/**
 * Highlights research engagements with key outcomes. (EN)
 * 주요 산출물을 포함한 연구 경험을 강조합니다. (KO)
 */
export function ResearchSection({ items }: ResearchSectionProps) {
  const heading = '연구 경험';
  const subtitle = '헬스케어 엣지 AI에 집중한 학술 협업 경험입니다.';

  return (
    <section id="research" aria-labelledby="research-heading" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 id="research-heading" className="section-title">
          {heading}
        </h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-primary/20 md:block" aria-hidden />
        <ul className="space-y-6">
          {items.map((entry, index) => (
            <motion.li
              key={entry.slug}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative rounded-3xl bg-white p-6 shadow-card/40 ring-1 ring-primary/10 md:ml-16"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-sm uppercase tracking-widest text-primary/70">
                  {entry.period}
                </span>
                <h3 className="text-lg font-semibold text-ink">{entry.name}</h3>
                <span className="text-sm text-slate">{entry.affiliation}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-primary">{entry.focus}</p>
              <p className="mt-3 text-base leading-relaxed text-slate">{entry.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate">
                {entry.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-primary">•</span>
                    <span className="flex-1">{outcome}</span>
                  </li>
                ))}
              </ul>
              <span className="absolute -left-[3.05rem] top-6 hidden h-3 w-3 rounded-full border-2 border-white bg-primary md:inline" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
