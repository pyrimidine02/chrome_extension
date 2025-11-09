import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/ProjectDetail';
import { getProjectBySlug, getProjectDeepDive, getProjects } from '@/lib/content';

export const dynamic = 'force-dynamic';

interface ProjectDetailPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }

  const title = `${project.name} · 프로젝트 경험`;
  return {
    title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [project, deepDive] = await Promise.all([
    getProjectBySlug(params.slug),
    getProjectDeepDive(params.slug),
  ]);
  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <ProjectDetail project={project} deepDive={deepDive} />
    </div>
  );
}
