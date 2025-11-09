import { headers } from 'next/headers';
import { Hero } from '@/components/Hero';
import { ContactCTA } from '@/components/ContactCTA';
import { EducationSection } from '@/components/EducationSection';
import { HonorsSection } from '@/components/HonorsSection';
import { ProjectExperienceSection } from '@/components/ProjectExperienceSection';
import { ResearchSection } from '@/components/ResearchSection';
import { ToyProjectsSection } from '@/components/ToyProjectsSection';
import type {
  EducationEntry,
  Honor,
  Profile,
  ProjectExperience,
  ResearchExperience,
  ToyProject,
} from '@/lib/types';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Builds the CV/portfolio landing page from REST payloads. (EN)
 * REST 페이로드를 기반으로 CV/포트폴리오 랜딩 페이지를 구성합니다. (KO)
 */
export default async function Home() {
  const headerList = headers();
  const protocol = headerList.get('x-forwarded-proto') ?? 'http';
  const host = headerList.get('x-forwarded-host') ?? headerList.get('host') ?? 'localhost:3000';
  const baseUrl = `${protocol}://${host}`;

  async function fetchJson<T>(path: string): Promise<T | null> {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        cache: 'no-store',
      });
      if (!response.ok) {
        return null;
      }
      return (await response.json()) as T;
    } catch {
      return null;
    }
  }

  function ensureArray<T>(value: unknown): T[] {
    return Array.isArray(value) ? (value as T[]) : [];
  }

  const [
    profileData,
    educationData,
    researchData,
    projectsData,
    honorsData,
    toyProjectsData,
  ] = await Promise.all([
    fetchJson<Profile>('/api/profile'),
    fetchJson<unknown>('/api/education'),
    fetchJson<unknown>('/api/experience'),
    fetchJson<unknown>('/api/projects'),
    fetchJson<unknown>('/api/honors'),
    fetchJson<unknown>('/api/toy-projects'),
  ]);

  if (!profileData) {
    throw new Error('Profile payload is required to render the page.');
  }

  const education = ensureArray<EducationEntry>(educationData);
  const research = ensureArray<ResearchExperience>(researchData);
  const projects = ensureArray<ProjectExperience>(projectsData);
  const honors = ensureArray<Honor>(honorsData);
  const toyProjects = ensureArray<ToyProject>(toyProjectsData);

  return (
    <div className="space-y-16">
      <Hero profile={profileData} />
      <EducationSection items={education} />
      <ResearchSection items={research} />
      <HonorsSection items={honors} />
      <ProjectExperienceSection items={projects} />
      <ToyProjectsSection items={toyProjects} />
      <ContactCTA email={profileData.email} links={profileData.links} />
    </div>
  );
}
