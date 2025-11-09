'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ToyProject } from '@/lib/types';

interface ToyProjectsSectionProps {
  items: ToyProject[];
}

/**
 * Lists toy projects with navigation to detailed summaries. (EN)
 * 토이 프로젝트를 상세 페이지로 안내하며 나열합니다. (KO)
 */
export function ToyProjectsSection({ items }: ToyProjectsSectionProps) {
  const heading = '토이 프로젝트';
  const subtitle = '협업과 데이터 툴링을 탐구한 실험적 작업입니다.';
  const detailLabel = '자세히 보기';

  return (
    <section id="toy-projects" aria-labelledby="toy-projects-heading" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 id="toy-projects-heading" className="section-title">
          {heading}
        </h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-card/40 ring-1 ring-primary/10"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-primary/70">
              {project.period}
              <span aria-hidden>✦</span>
            </div>
            <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
            <p className="text-sm leading-relaxed text-slate">{project.summary}</p>
            <ul className="space-y-2 text-xs text-slate">
              {project.contributions.slice(0, 2).map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-1 text-primary">•</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                href={`/toy-projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary transition-colors duration-150 ease-out hover:bg-primary hover:text-white"
              >
                {detailLabel}
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
