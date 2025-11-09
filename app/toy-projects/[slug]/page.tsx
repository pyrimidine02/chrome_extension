import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ToyProjectDetail } from '@/components/ToyProjectDetail';
import { getToyProjectBySlug, getToyProjectDeepDive, getToyProjects } from '@/lib/content';

export const dynamic = 'force-dynamic';

interface ToyProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getToyProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ToyProjectPageProps): Promise<Metadata> {
  const project = await getToyProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Toy Project Not Found' };
  }

  const title = `${project.name} · 토이 프로젝트`;
  return {
    title,
    description: project.summary,
  };
}

export default async function ToyProjectPage({ params }: ToyProjectPageProps) {
  const [project, deepDive] = await Promise.all([
    getToyProjectBySlug(params.slug),
    getToyProjectDeepDive(params.slug),
  ]);
  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <ToyProjectDetail project={project} deepDive={deepDive} />
    </div>
  );
}
