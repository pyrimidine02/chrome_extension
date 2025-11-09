'use client';

/* eslint-disable @next/next/no-img-element */

import Image from 'next/image';
import Link from 'next/link';
import type { DetailSection, ToyProject, ToyProjectDeepDive } from '@/lib/types';

interface ToyProjectDetailProps {
  project: ToyProject;
  deepDive?: ToyProjectDeepDive | null;
}

/**
 * Displays a toy project with implementation notes. (EN)
 * 토이 프로젝트를 구현 메모와 함께 보여줍니다. (KO)
 */
export function ToyProjectDetail({ project, deepDive }: ToyProjectDetailProps) {
  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary/80">토이 프로젝트</p>
        <h1 className="text-4xl font-bold text-ink">{project.name}</h1>
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
          {project.period}
        </span>
        <p className="text-base leading-relaxed text-slate">{project.summary}</p>
      </header>

      {deepDive ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-ink">{deepDive.architecture.title}</h2>
          {deepDive.architecture.description ? (
            <p className="text-base leading-relaxed text-slate">{deepDive.architecture.description}</p>
          ) : null}
          {renderMedia(deepDive.architecture.media)}
          {renderBulletList(deepDive.architecture.bullets)}
        </section>
      ) : null}

      {deepDive?.sections?.map((section) => (
        <section key={section.title} className="space-y-4">
          <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
          {section.description ? (
            <p className="text-base leading-relaxed text-slate">{section.description}</p>
          ) : null}
          {renderMedia(section.media)}
          {renderBulletList(section.bullets)}
        </section>
      ))}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-ink">구현 메모</h2>
        <ul className="space-y-3 text-base text-slate">
          {project.contributions.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-1 text-primary">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {project.links?.length ? (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">관련 링크</h2>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors duration-150 ease-out hover:bg-primary hover:text-white"
              >
                {link.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <div className="border-t border-primary/10 pt-6">
        <Link
          href="/#toy-projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors duration-150 ease-out hover:text-primary/80"
        >
          <span aria-hidden>←</span>
          토이 프로젝트 목록으로 돌아가기
        </Link>
      </div>
    </article>
  );
}

function renderBulletList(items?: DetailSection['bullets']) {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className="space-y-2 text-base text-slate">
      {items.map((line) => (
        <li key={line} className="flex gap-3">
          <span aria-hidden className="mt-1 text-primary">•</span>
          <span className="flex-1">{line}</span>
        </li>
      ))}
    </ul>
  );
}

function renderMedia(media?: DetailSection['media']) {
  if (!media) {
    return null;
  }

  const isSvg = media.src?.toLowerCase().endsWith('.svg');

  return (
    <div className="overflow-hidden rounded-2xl border border-primary/10">
      {isSvg ? (
        <img src={media.src} alt={media.alt} className="h-auto w-full" />
      ) : (
        <Image src={media.src} alt={media.alt} width={1280} height={720} className="h-auto w-full" />
      )}
    </div>
  );
}
