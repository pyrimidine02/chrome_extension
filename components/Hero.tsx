'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Profile } from '@/lib/types';

interface HeroProps {
  profile: Profile;
}

/**
 * Presents the primary CV hero with summary and quick actions. (EN)
 * 핵심 요약과 빠른 액션을 담은 CV 히어로 영역을 제공합니다. (KO)
 */
export function Hero({ profile }: HeroProps) {
  const headline = '포트폴리오 하이라이트';

  return (
    <section id="hero" className="relative isolate overflow-hidden rounded-3xl bg-white px-8 py-10 shadow-card">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
      >
        <div className="flex-1 space-y-5">
          <p className="text-sm uppercase tracking-[0.2em] text-primary/80">{headline}</p>
          <div className="flex items-baseline gap-4">
            <h1 className="text-4xl font-bold text-ink sm:text-5xl">
              {profile.name}
            </h1>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              {profile.title}
            </span>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate">{profile.summary}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate">
            {profile.location ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                <span aria-hidden>📍</span>
                {profile.location}
              </span>
            ) : null}
            {profile.email ? (
              <a
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-3 py-1 text-primary hover:border-primary"
                href={`mailto:${profile.email}`}
              >
                <span aria-hidden>✉️</span>
                {profile.email}
              </a>
            ) : null}
          </div>
          {profile.links?.length ? (
            <div className="flex flex-wrap gap-2">
              {profile.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors duration-150 ease-out hover:bg-primary hover:text-white"
                >
                  <span>{link.label}</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-150 ease-out group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative flex h-36 w-full max-w-[200px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-ink text-5xl text-white md:h-56"
        >
          {profile.avatar ? (
            // Allow SVG placeholders without optimization.
            <Image
              src={profile.avatar}
              alt={`${profile.name} 프로필 사진`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 144px, 200px"
              priority
              unoptimized={profile.avatar.toLowerCase().endsWith('.svg')}
            />
          ) : (
            <span className="text-6xl font-semibold leading-none md:text-7xl">
              {profile.name[0] ?? 'S'}
            </span>
          )}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_60%)]" />
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute -right-20 top-16 hidden h-40 w-40 rounded-full bg-primary/10 blur-3xl md:block" />
    </section>
  );
}
