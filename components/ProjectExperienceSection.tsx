'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ProjectExperience } from '@/lib/types';

interface ProjectExperienceSectionProps {
  items: ProjectExperience[];
}

/**
 * Showcases major projects with navigation to detailed write-ups. (EN)
 * 프로젝트 경험을 상세 페이지로 연결해 소개합니다. (KO)
 */
export function ProjectExperienceSection({ items }: ProjectExperienceSectionProps) {
  const heading = '프로젝트 경험';
  const subtitle = '인프라·데이터·UX 운영을 결합한 플랫폼 구축 사례입니다.';
  const detailLabel = '자세히 보기';

  return (
    <section id="projects" aria-labelledby="projects-heading" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 id="projects-heading" className="section-title">
          {heading}
        </h2>
        <p className="section-subtitle">{subtitle}</p>
      </div>
      <div className="space-y-4">
        {items.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-card/50 ring-1 ring-primary/10"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary/80">
                {project.period}
              </span>
              <h3 className="text-2xl font-semibold text-ink">{project.name}</h3>
              <span className="text-sm text-primary">{project.role}</span>
            </div>
            <p className="text-base leading-relaxed text-slate">{project.summary}</p>
            <ul className="space-y-2 text-sm text-slate">
              {project.contributions.slice(0, 2).map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-1 text-primary">•</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-primary/90"
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
