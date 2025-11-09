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
}

/**
 * Smaller experimental or hobby project entry. (EN)
 * 실험적이거나 취미 성격의 토이 프로젝트 항목입니다. (KO)
 */
export interface ToyProject {
  slug: string;
  name: string;
  period: string;
  summary: string;
  contributions: string[];
  links?: ProfileLink[];
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
 * Media asset reference for architectural narratives. (EN)
 * 아키텍처 서술에 사용하는 미디어 자원 정보를 담습니다. (KO)
 */
export interface DetailMedia {
  src: string;
  alt: string;
}

/**
 * Rich text section used when narrating a project deep dive. (EN)
 * 프로젝트 심층 소개에 사용하는 서술 섹션입니다. (KO)
 */
export interface DetailSection {
  title: string;
  description?: string;
  bullets?: string[];
  media?: DetailMedia;
}

/**
 * Additional architecture-first context for a project. (EN)
 * 아키텍처 중심의 프로젝트 심층 정보를 담고 있습니다. (KO)
 */
export interface ProjectDeepDive {
  slug: string;
  architecture: DetailSection;
  sections?: DetailSection[];
}

/**
 * Extended walkthrough content for toy projects. (EN)
 * 토이 프로젝트에 대한 확장 설명 콘텐츠입니다. (KO)
 */
export interface ToyProjectDeepDive {
  slug: string;
  architecture: DetailSection;
  sections?: DetailSection[];
}
