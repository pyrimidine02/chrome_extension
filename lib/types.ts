/**
 * Contact or social link reference. (EN)
 * 연락처 또는 소셜 링크 정보를 나타냅니다. (KO)
 */
export interface ProfileLink {
  label: string;
  url: string;
}

/**
 * Primary profile metadata for the hero section. (EN)
 * 히어로 섹션에서 사용하는 주요 프로필 메타데이터입니다. (KO)
 */
export interface Profile {
  name: string;
  title: string;
  summary: string;
  location?: string;
  email?: string;
  links?: ProfileLink[];
  avatar?: string;
}

/**
 * Academic record entry. (EN)
 * 학력 정보를 나타내는 항목입니다. (KO)
 */
export interface EducationEntry {
  school: string;
  program: string;
  period: string;
  location?: string;
  notes?: string[];
}

/**
 * Research engagement highlighted separately from product work. (EN)
 * 제품 업무와 구분되는 연구 경험을 나타냅니다. (KO)
 */
export interface ResearchExperience {
  slug: string;
  name: string;
  affiliation: string;
  period: string;
  focus: string;
  summary: string;
  outcomes: string[];
}

/**
 * Major product or platform project experience. (EN)
 * 주요 제품 또는 플랫폼 프로젝트 경험을 나타냅니다. (KO)
 */
export interface ProjectExperience {
  slug: string;
  name: string;
  period: string;
  role: string;
  summary: string;
  contributions: string[];
  outcomes?: string[];
  links?: ProfileLink[];
  cover?: string;
  metrics?: { label: string; value: string }[];
  techStack?: {
    backend?: string[];
    database?: string[];
    security?: string[];
    monitoring?: string[];
    development?: string[];
  };
}

/**
 * Award or honorific achievement entry. (EN)
 * 수상 및 성과 이력을 나타내는 항목입니다. (KO)
 */
export interface Honor {
  title: string;
  organization: string;
  date: string;
  summary: string;
}

/**
 * Represents a grouped set of skills for the tech stack section. (EN)
 * 기술 스택 섹션에서 사용하는 스킬 묶음을 나타냅니다. (KO)
 */
export interface SkillCategory {
  name: string;
  description?: string;
  skills: string[];
}
