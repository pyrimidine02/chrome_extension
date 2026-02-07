import { Hero } from '@/components/Hero';
import { ProjectGrid } from '@/components/ProjectGrid';
import { SkillsCloud } from '@/components/SkillsCloud';
import { EducationSection } from '@/components/EducationSection';
import { ResearchSection } from '@/components/ResearchSection';
import { AwardsSection } from '@/components/AwardsSection';
import { ContactCTA } from '@/components/ContactCTA';
import { getProfile, getProjects, getSkills, getEducation, getHonors } from '@/lib/content';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Modern developer portfolio with complete redesign - immersive full-screen experience (EN)
 * 완전 새로운 디자인의 현대적 개발자 포트폴리오 - 몰입형 풀스크린 경험 (KO)
 */
export default async function Home() {
  const [profile, projectItems, skillCategories, educationEntries, achievementHonors] = await Promise.all([
    getProfile(),
    getProjects(),
    getSkills(),
    getEducation(),
    getHonors(),
  ]);

  return (
    <main className="relative overflow-hidden">
      {/* Full-Screen Hero Section */}
      <section id="hero">
        <Hero profile={profile} />
      </section>

      {/* Main Content Sections */}
      <div className="relative">
        {/* Education Timeline */}
        <section id="education">
          <EducationSection education={educationEntries} />
        </section>

        {/* Featured Projects - Modern Grid Layout */}
        <section id="projects">
          <ProjectGrid projects={projectItems} />
        </section>

        {/* Research & Academic Activities */}
        <section id="research">
          <ResearchSection />
        </section>

        {/* Awards & Achievements */}
        <section id="honors">
          <AwardsSection honors={achievementHonors} />
        </section>

        {/* Interactive Technology Stack */}
        <section id="skills">
          <SkillsCloud skills={skillCategories} />
        </section>

        {/* Contact Section - Modern Dark Theme */}
        <section id="contact" className="relative py-32 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(234, 179, 8, 0.1) 0%, transparent 50%)',
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto px-6">
            <ContactCTA email={profile.email} links={profile.links} />
          </div>
        </section>
      </div>
    </main>
  );
}
