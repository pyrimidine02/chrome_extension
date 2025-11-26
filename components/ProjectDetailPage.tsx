'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ProjectExperience } from '@/lib/types';

interface ProjectDetailPageProps {
  project: ProjectExperience;
}

/**
 * Comprehensive project detail page with technical deep dive
 */
export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-secondary-300 hover:text-white transition-colors duration-200"
            >
              <span>←</span>
              <span>돌아가기</span>
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              {project.role} • {project.period}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {project.name}
            </h1>

            <p className="text-xl text-secondary-300 max-w-4xl mx-auto leading-relaxed">
              {project.summary}
            </p>

            {/* Metrics Display */}
            {project.metrics && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-6 mt-8"
              >
                {project.metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl px-6 py-4"
                  >
                    <div className="text-2xl font-bold text-primary-400 text-center">
                      {metric.value}
                    </div>
                    <div className="text-sm text-secondary-400 text-center mt-1">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Project Links */}
            {project.links && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-2xl transition-all duration-200 hover:shadow-glow hover:scale-105"
                  >
                    <span>{link.label}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                  </a>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">

              {/* Key Contributions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">🔧</span>
                  핵심 기여사항
                </h2>

                <div className="space-y-6">
                  {project.contributions.map((contribution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary-900/30 hover:bg-secondary-900/50 transition-colors duration-200"
                    >
                      <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-400 font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-secondary-200 leading-relaxed">
                        {contribution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Outcomes */}
              {project.outcomes && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-success-500/5 backdrop-blur-sm border border-success-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    주요 성과
                  </h2>

                  <div className="grid gap-4">
                    {project.outcomes.map((outcome, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-success-500/10 border border-success-500/20"
                      >
                        <div className="w-2 h-2 bg-success-400 rounded-full flex-shrink-0" />
                        <p className="text-secondary-100 leading-relaxed">
                          {outcome}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Technical Deep Dive */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-3xl">🏗️</span>
                  기술적 구현
                </h2>

                {/* This would be expanded with more technical details
                    from project documentation */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                    <h3 className="text-lg font-semibold text-primary-400 mb-3">
                      아키텍처 설계
                    </h3>
                    <p className="text-secondary-300 leading-relaxed">
                      {project.slug === 'railnetwork' ?
                        '20개 지하철 노선의 실시간 데이터를 처리하는 고성능 백엔드 시스템을 설계했습니다. Express.js 기반의 RESTful API와 gRPC 서버를 병행 운영하며, Redis 캐싱과 MongoDB를 활용한 데이터 지속성을 구현했습니다.' :
                        'PostgreSQL 15 + PostGIS 3.3 기반 지리공간 데이터베이스를 중심으로 한 확장 가능한 백엔드 아키텍처를 설계했습니다. 프로젝트·유닛·지역 계층 구조와 DDD 모듈 설계를 적용해 여러 밴드 프랜차이즈를 독립적으로 관리할 수 있는 멀티테넌트 시스템을 구축했습니다.'
                      }
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                    <h3 className="text-lg font-semibold text-accent-400 mb-3">
                      성능 최적화
                    </h3>
                    <p className="text-secondary-300 leading-relaxed">
                      {project.slug === 'railnetwork' ?
                        'Promise.all을 활용한 병렬 API 호출로 업데이트 시간을 75% 단축하고, 압축 미들웨어 적용으로 네트워크 트래픽을 40% 절감했습니다. Redis 캐싱을 통해 평균 응답시간을 50ms 이하로 유지했습니다.' :
                        'PostGIS GIST 인덱스와 geography 타입을 활용한 공간 쿼리 최적화로 고성능 반경 검색과 위치 검증을 구현했습니다. 배열 컬럼의 GIN 인덱스와 부분 인덱스를 조합해 대용량 필터링 성능을 최적화하고, Caffeine/Redis 이중 캐시 전략으로 읽기 성능을 극대화했습니다.'
                      }
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">
                      보안 및 안정성
                    </h3>
                    <p className="text-secondary-300 leading-relaxed">
                      {project.slug === 'railnetwork' ?
                        'SHA-256 해시와 Nonce를 활용한 디지털 서명 검증 시스템을 구축하고, Rate Limiting과 IP 지역 제한을 통해 보안을 강화했습니다. 구조화된 로깅과 에러 처리로 24/7 안정 운영을 달성했습니다.' :
                        'JWT 기반 무상태 인증과 프로젝트 수준 RBAC를 구현해 세분화된 권한 관리를 제공합니다. Spring Security 필터 체인과 Redis 분산 속도 제한으로 DDoS와 브루트포스 공격을 차단하고, Bean Validation과 입력 정화를 통해 XSS/CSRF 공격을 방어합니다. Flyway 마이그레이션과 HikariCP 최적화로 안정적인 데이터 계층을 보장합니다.'
                      }
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Database Architecture (Girls Band Tabi specific) */}
              {project.slug === 'girlsbandtabi' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">🗄️</span>
                    데이터베이스 아키텍처
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                      <h3 className="text-lg font-semibold text-green-400 mb-3">
                        지리공간 데이터 설계
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        PostGIS의 geography 타입과 EPSG:4326 (WGS84) 좌표계를 사용해 정밀한 위치 데이터를 관리합니다.
                        GIST 인덱스를 활용한 공간 쿼리 최적화로 근접성 검색, 위치 검증, 지역별 필터링을 고성능으로 처리합니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">
                        계층적 데이터 모델
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        프로젝트 → 유닛 → 멤버 계층과 지역 → 하위지역 트리 구조로 확장 가능한 멀티테넌트 아키텍처를 구현했습니다.
                        배열 컬럼과 GIN 인덱스를 조합해 복합 필터링 성능을 최적화했습니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                      <h3 className="text-lg font-semibold text-orange-400 mb-3">
                        마이그레이션 전략
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        Flyway를 활용한 버전 관리형 스키마 마이그레이션으로 안전한 데이터베이스 변경을 보장합니다.
                        HikariCP 커넥션 풀 최적화와 배치 작업 튜닝으로 대용량 데이터 처리 성능을 향상시켰습니다.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Security Deep Dive (Girls Band Tabi specific) */}
              {project.slug === 'girlsbandtabi' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-red-500/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">🛡️</span>
                    보안 아키텍처
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-red-900/20 border border-red-700/30">
                      <h3 className="text-lg font-semibold text-red-400 mb-3">
                        다층 인증 시스템
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        HMAC-SHA256 서명이 적용된 JWT 토큰과 프로젝트 수준 RBAC으로 세분화된 권한 관리를 구현했습니다.
                        무상태 토큰 설계로 확장성을 확보하고, 토큰 갱신과 순환을 통해 보안성을 강화했습니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-red-900/20 border border-red-700/30">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                        속도 제한 및 DDoS 보호
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        Redis 기반 분산 속도 제한과 Cloudflare CDN을 통한 네트워크 레벨 보호를 구축했습니다.
                        IP별, 엔드포인트별, 사용자별 다단계 제한으로 서비스 가용성을 보장합니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-red-900/20 border border-red-700/30">
                      <h3 className="text-lg font-semibold text-purple-400 mb-3">
                        입력 검증 및 데이터 보호
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        Bean Validation (JSR-380)과 사용자 정의 정화 기능으로 입력 검증을 강화했습니다.
                        TLS 1.3 암호화, 보안 헤더, CORS 구성을 통한 종합적인 웹 보안을 구현했습니다.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">프로젝트 정보</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-400">역할</span>
                    <span className="text-secondary-200">{project.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-400">기간</span>
                    <span className="text-secondary-200">{project.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-400">상태</span>
                    <span className="inline-flex items-center gap-1 text-success-400">
                      <span className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></span>
                      Production
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4">기술 스택 (통일된 디자인)</h3>
                <div className="flex flex-wrap gap-2">
                  {(project.slug === 'railnetwork' ? [
                    'Node.js', 'Express.js', 'gRPC', 'MongoDB', 'Redis', 'Winston', 'JWT', 'HMAC-SHA256', 'ESLint', 'Prettier', 'Swagger', 'Nodemon',
                  ] : project.slug === 'girlsbandtabi' ? [
                    'Kotlin', 'Spring Boot 3', 'PostgreSQL 15', 'PostGIS 3.3', 'Spring Security', 'JWT', 'Flyway', 'HikariCP', 'Caffeine', 'Redis', 'Cloudflare R2', 'Docker', 'OpenAPI 3.0',
                  ] : []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Architecture Diagram */}
              {project.cover && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-4">아키텍처</h3>
                  <div className="aspect-video bg-secondary-900/50 rounded-lg flex items-center justify-center">
                    <span className="text-secondary-400">Architecture Diagram</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
