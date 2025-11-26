import { notFound } from 'next/navigation';
import { getProjects } from '@/lib/content';
import { ProjectDetailPage } from '@/components/ProjectDetailPage';

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}

// Generate static params for better performance
export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps) {
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | Portfolio`,
    description: project.summary,
  };
}
