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
                        '열차위치조회·편성정보·운행계획·크라우드소싱 4개 서비스 도메인으로 설계한 고성능 백엔드 시스템입니다. SMSS 실패 시 열린데이터 API로 자동 폴백하는 이중 API 폴백 시스템을 구축하고, Express.js RESTful API와 gRPC 서버를 병행 운영합니다. Redis 캐싱과 MongoDB로 데이터 지속성을 확보하며, Firebase Analytics로 지역별 사용자 분포와 트래픽 패턴을 분석합니다.' :
                        'Spring Modulith 이벤트 드리븐 Modulith 아키텍처로 identity·place·event·social·analytics 5개 도메인을 느슨한 결합으로 분리했습니다. Hibernate Spatial + JTS 기반 지리공간 처리와 프로젝트·유닛·지역 계층 구조로 멀티테넌트 시스템을 구축하고, Cloudflare R2 비용 보호(일일 대역폭/월간 요청 제한, 긴급 차단 임계값)로 인프라 비용을 통제합니다.'
                      }
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                    <h3 className="text-lg font-semibold text-accent-400 mb-3">
                      성능 최적화
                    </h3>
                    <p className="text-secondary-300 leading-relaxed">
                      {project.slug === 'railnetwork' ?
                        'Promise.all 기반 병렬 API 호출로 전체 노선 업데이트 시간을 75% 단축하고, 압축 미들웨어 적용으로 네트워크 트래픽을 40% 절감했습니다. Redis 캐싱을 통해 평균 응답시간 150ms 이하, 99.5% 가용성을 달성하며 일 평균 1,400+ DAU를 안정적으로 처리합니다. Flutter 기반 크로스 플랫폼(Android/iOS) 서비스를 제공합니다.' :
                        'Resilience4j 서킷 브레이커로 외부 서비스 장애 전파를 차단하고, Caffeine/Redis 이중 캐시와 GIST/GIN 인덱스 조합으로 공간 쿼리와 대용량 필터링 성능을 최적화했습니다. Flyway 마이그레이션과 HikariCP 커넥션 풀 최적화로 DB 운영 안정성을 확보하고, Prometheus + Actuator 기반 관측성 체계로 실시간 성능 모니터링을 구현했습니다.'
                      }
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">
                      보안 및 안정성
                    </h3>
                    <p className="text-secondary-300 leading-relaxed">
                      {project.slug === 'railnetwork' ?
                        'HMAC-SHA256 해시와 Nonce를 활용한 디지털 서명 검증 시스템을 구축하고, JWT 인증과 Rate Limiting, IP 지역 제한을 통해 보안을 강화했습니다. Winston 구조화된 로깅과 에러 처리로 24/7 안정 운영(99.5% 가용성)을 달성했습니다.' :
                        'JWT + OAuth2(Google/Apple) 소셜 로그인 + 이메일 인증을 결합한 다중 인증 체계와 프로젝트 수준 RBAC를 구현했습니다. Anti-tamper 위치 검증으로 위변조를 차단하고, Redis 분산 속도 제한과 커뮤니티 모더레이션(신고/차단) 시스템으로 서비스 안정성을 확보했습니다. Detekt/Ktlint 정적 분석과 Kover 커버리지(서비스 계층 80% 목표)를 CI에 통합해 코드 품질을 관리합니다.'
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
                        Hibernate Spatial + JTS Core 기반으로 PostGIS geography 타입과
                        EPSG:4326 좌표계를 활용한 정밀 위치 관리를 구현했습니다.
                        Anti-tamper 위치 검증(거리 임계값, 속도 검증, 텔레포트 감지)으로 위변조를 차단합니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">
                        Spring Modulith 이벤트 아키텍처
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        identity·place·event·social·analytics 5개 도메인을
                        Spring Modulith 이벤트 기반으로 느슨하게 결합했습니다.
                        프로젝트 → 유닛 → 멤버 계층과 지역 트리 구조로 멀티테넌트 아키텍처를 구현했습니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-secondary-900/50 border border-secondary-700/30">
                      <h3 className="text-lg font-semibold text-orange-400 mb-3">
                        관측성 및 테스트
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        Prometheus + Actuator로 실시간 메트릭을 수집하고,
                        Testcontainers로 PostgreSQL 통합 테스트를 자동화했습니다.
                        Kover 커버리지 검증(서비스 계층 80% 목표)과 Detekt/Ktlint 정적 분석으로 코드 품질을 관리합니다.
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
                        다중 인증 체계
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        JWT + OAuth2(Google/Apple) 소셜 로그인 + 이메일 인증을 결합한 다중 인증과 프로젝트 수준 RBAC를 구현했습니다.
                        Redis 기반 토큰 블랙리스트와 세션당 최대 5개 디바이스 제한으로 보안성을 강화했습니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-red-900/20 border border-red-700/30">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                        속도 제한 및 장애 차단
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        Redis 분산 속도 제한(IP/API/로그인별 다단계)과 Resilience4j 서킷 브레이커로 장애 전파를 차단합니다.
                        R2 비용 보호(일일 대역폭/월간 요청 제한, 긴급 차단 임계값)로 인프라 비용을 통제합니다.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-red-900/20 border border-red-700/30">
                      <h3 className="text-lg font-semibold text-purple-400 mb-3">
                        커뮤니티 모더레이션
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        게시글·댓글 신고 시스템과 사용자 차단, 일일 신고 제한(사용자 10건/대상 1건)으로 커뮤니티를 보호합니다.
                        Anti-tamper 위치 검증(거리·속도·텔레포트 감지, 일일 방문 제한)으로 위변조를 차단합니다.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* User Analytics & Reach (RailNetwork specific) */}
              {project.slug === 'railnetwork' && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-blue-500/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-3xl">📊</span>
                    사용자 분석 및 도달 범위
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-700/30">
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">
                        지역별 사용자 분포
                      </h3>
                      <p className="text-secondary-300 leading-relaxed mb-4">
                        Firebase Analytics 기반 지역 분석 결과,
                        서울(68%)·경기(22%)·기타(10%) 분포로
                        수도권 사용자가 전체의 90%를 차지합니다.
                      </p>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-secondary-300">서울</span>
                            <span className="text-blue-400 font-medium">68%</span>
                          </div>
                          <div className="h-2 bg-secondary-700/50 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '68%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-secondary-300">경기</span>
                            <span className="text-blue-400 font-medium">22%</span>
                          </div>
                          <div className="h-2 bg-secondary-700/50 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '22%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-secondary-300">기타</span>
                            <span className="text-blue-400 font-medium">10%</span>
                          </div>
                          <div className="h-2 bg-secondary-700/50 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '10%' }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-700/30">
                      <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                        트래픽 및 리텐션
                      </h3>
                      <p className="text-secondary-300 leading-relaxed">
                        일 평균 1,400+ DAU, 90일간 12M+ 이벤트를 처리하며 99.5% 가용성을 유지합니다.
                        15초 간격 실시간 업데이트와 크라우드소싱 편성 투표로
                        사용자 참여를 유도하고, Flutter 기반 Android/iOS
                        크로스 플랫폼으로 도달 범위를 극대화했습니다.
                      </p>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="text-center p-3 rounded-lg bg-secondary-800/50">
                          <div className="text-xl font-bold text-blue-400">1,400+</div>
                          <div className="text-xs text-secondary-400 mt-1">일 평균 DAU</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-secondary-800/50">
                          <div className="text-xl font-bold text-cyan-400">12M+</div>
                          <div className="text-xs text-secondary-400 mt-1">90일 이벤트</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-secondary-800/50">
                          <div className="text-xl font-bold text-green-400">99.5%</div>
                          <div className="text-xs text-secondary-400 mt-1">가용성</div>
                        </div>
                      </div>
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
                    {project.slug === 'girlsbandtabi' ? (
                      <span className="inline-flex items-center gap-1 text-orange-400">
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                        Server Live / App Internal Testing
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-success-400">
                        <span className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></span>
                        Production
                      </span>
                    )}
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
                    'Node.js', 'Express.js', 'gRPC', 'MongoDB', 'Redis', 'JWT', 'HMAC-SHA256', 'Flutter', 'Winston', 'Firebase Analytics', 'Docker', 'Swagger',
                  ] : project.slug === 'girlsbandtabi' ? [
                    'Kotlin', 'Spring Boot 3', 'Spring Modulith', 'PostgreSQL', 'Hibernate Spatial', 'Redis', 'Resilience4j', 'JWT', 'OAuth2', 'Flyway', 'HikariCP', 'Caffeine', 'Prometheus', 'Cloudflare R2', 'Testcontainers', 'Docker', 'OpenAPI 3.0',
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
