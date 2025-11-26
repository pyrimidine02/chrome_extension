import Image from 'next/image';
import type { Profile } from '@/lib/types';

interface IntroProps {
  profile: Profile;
}

/**
 * Presents the hero introduction with contact links. (EN)
 * 소개 및 연락 링크를 보여주는 히어로 섹션입니다. (KO)
 */
export function Intro({ profile }: IntroProps) {
  const initials = profile.name.split(' ').map((part) => part[0]).join('');
  const highlightTags = ['RailNetwork Control', 'Girls Band Tabi'];

  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="rounded-4xl border border-border bg-white px-8 py-12 shadow-[0_12px_40px_rgba(15,23,42,0.15)]"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-shrink-0">
          {profile.avatar ? (
            <Image
              src={profile.avatar}
              alt={`${profile.name} avatar`}
              width={144}
              height={144}
              className="h-36 w-36 rounded-3xl border border-border object-cover"
            />
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-muted text-3xl font-semibold text-muted-foreground">
              {initials}
            </div>
          )}
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
            <h1 id="intro-heading" className="text-4xl font-semibold text-foreground">
              {profile.name}
            </h1>
            <p className="text-lg text-accent mt-1">{profile.title}</p>
          </div>
          <p className="whitespace-pre-line text-base leading-relaxed text-foreground">{profile.summary}</p>
          <div className="flex flex-wrap gap-3">
            {highlightTags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
          <dl className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {profile.location ? (
              <div>
                <dt className="font-semibold text-foreground">Location</dt>
                <dd>{profile.location}</dd>
              </div>
            ) : null}
            {profile.email ? (
              <div>
                <dt className="font-semibold text-foreground">Email</dt>
                <dd>
                  <a href={`mailto:${profile.email}`} className="text-accent underline decoration-dotted underline-offset-4">
                    {profile.email}
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
          {profile.links && profile.links.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {profile.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-foreground hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
