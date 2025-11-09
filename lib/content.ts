import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';
import type {
  EducationEntry,
  Honor,
  Profile,
  ProjectExperience,
  ProjectDeepDive,
  ResearchExperience,
  ToyProject,
  ToyProjectDeepDive,
} from '@/lib/types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Loads a YAML document from disk and casts to the expected type. (EN)
 * 디스크에서 YAML 문서를 읽어 예상 타입으로 변환합니다. (KO)
 */
async function loadYaml<T>(fileName: string): Promise<T> {
  const filePath = path.join(CONTENT_DIR, fileName);
  const raw = await readFile(filePath, 'utf-8');
  return parse(raw) as T;
}

/**
 * Retrieves the profile payload consumed by the hero. (EN)
 * 히어로 섹션에서 사용하는 프로필 데이터를 반환합니다. (KO)
 */
export const getProfile = () => loadYaml<Profile>('profile.yml');

/**
 * Retrieves academic background entries. (EN)
 * 학력 정보를 반환합니다. (KO)
 */
export const getEducation = () => loadYaml<EducationEntry[]>('education.yml');

/**
 * Retrieves research experience entries. (EN)
 * 연구 경험 데이터를 반환합니다. (KO)
 */
export const getResearchExperience = () => loadYaml<ResearchExperience[]>('experience.yml');

/**
 * Retrieves project experience case studies. (EN)
 * 프로젝트 경험 사례를 반환합니다. (KO)
 */
export const getProjects = () => loadYaml<ProjectExperience[]>('projects.yml');

/**
 * Retrieves toy or hobby project entries. (EN)
 * 토이/취미 프로젝트 데이터를 반환합니다. (KO)
 */
export const getToyProjects = () => loadYaml<ToyProject[]>('toy-projects.yml');

/**
 * Retrieves awards and honors. (EN)
 * 수상 및 성과 이력을 반환합니다. (KO)
 */
export const getHonors = () => loadYaml<Honor[]>('honors.yml');

/**
 * Finds a project experience by slug. (EN)
 * 슬러그로 프로젝트 경험을 조회합니다. (KO)
 */
export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

/**
 * Finds a toy project by slug. (EN)
 * 슬러그로 토이 프로젝트를 조회합니다. (KO)
 */
export async function getToyProjectBySlug(slug: string) {
  const toyProjects = await getToyProjects();
  return toyProjects.find((project) => project.slug === slug) ?? null;
}

/**
 * Retrieves deep-dive content for projects. (EN)
 * 프로젝트 심층 콘텐츠를 조회합니다. (KO)
 */
export const getProjectDeepDives = () => loadYaml<{ projects: ProjectDeepDive[]; 'toy-projects': ToyProjectDeepDive[] }>('project-details.yml');

/**
 * Finds deep-dive data for a project by slug. (EN)
 * 프로젝트 슬러그로 심층 데이터를 조회합니다. (KO)
 */
export async function getProjectDeepDive(slug: string) {
  const { projects } = await getProjectDeepDives();
  return projects.find((entry) => entry.slug === slug) ?? null;
}

/**
 * Finds deep-dive data for a toy project by slug. (EN)
 * 토이 프로젝트 슬러그로 심층 데이터를 조회합니다. (KO)
 */
export async function getToyProjectDeepDive(slug: string) {
  const data = await getProjectDeepDives();
  const toyProjects = data['toy-projects'];
  return toyProjects.find((entry) => entry.slug === slug) ?? null;
}
