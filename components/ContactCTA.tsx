'use client';
import type { ProfileLink } from '@/lib/types';

interface ContactCTAProps {
  email?: string;
  links?: ProfileLink[];
}

/**
 * Provides closing contact actions for recruiters and collaborators. (EN)
 * 리크루터와 협업자를 위한 마무리 연락 수단을 제공합니다. (KO)
 */
export function ContactCTA({ email, links }: ContactCTAProps) {
  const title = '채용담당자 분들의 연락을 기다립니다';
  const description = '채용 절차 안내나 과제 공유를 보내주시면 바로 검토하고 응답드리겠습니다.';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-ink px-8 py-10 text-white shadow-card"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-3">
          <h2 id="contact-heading" className="text-3xl font-semibold">
            {title}
          </h2>
          <p className="text-base text-white/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {email ? (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors duration-150 ease-out hover:bg-white/90"
            >
              이메일
              <span aria-hidden>↗</span>
            </a>
          ) : null}
          {links?.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold transition-colors duration-150 ease-out hover:bg-white/10"
            >
              {link.label}
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
