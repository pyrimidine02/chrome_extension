'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectExperience } from '@/lib/types';

interface ProjectModalProps {
  project: ProjectExperience | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal component for detailed project information
 */
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-secondary-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-secondary-800/80 hover:bg-secondary-700 rounded-full flex items-center justify-center text-secondary-300 hover:text-white transition-colors duration-200"
              >
                <span className="text-xl">×</span>
              </button>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Header */}
                <div className="relative px-8 py-8 bg-gradient-to-br from-secondary-800 to-secondary-900">
                  {/* Background Effects */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                      }}
                    />
                  </div>

                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
                      <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                      {project.role} • {project.period}
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{project.name}</h2>
                    <p className="text-lg text-secondary-300 leading-relaxed">{project.summary}</p>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-4 mt-6">
                        {project.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 rounded-xl px-4 py-2"
                          >
                            <div className="text-lg font-bold text-primary-400 text-center">
                              {metric.value}
                            </div>
                            <div className="text-xs text-secondary-400 text-center">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Links */}
                    {project.links && (
                      <div className="flex flex-wrap gap-3 mt-6">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-glow hover:scale-105"
                          >
                            <span>{link.label}</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Main Content */}
                <div className="px-8 py-8 space-y-8">
                  {/* Key Contributions */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">🔧</span>
                      핵심 기여사항
                    </h3>
                    <div className="space-y-3">
                      {project.contributions.map((contribution, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 rounded-xl bg-secondary-800/30 hover:bg-secondary-800/50 transition-colors duration-200"
                        >
                          <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary-400 font-bold text-xs">{index + 1}</span>
                          </div>
                          <p className="text-secondary-200 leading-relaxed">{contribution}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  {project.outcomes && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        주요 성과
                      </h3>
                      <div className="grid gap-3">
                        {project.outcomes.map((outcome, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-4 rounded-xl bg-success-500/10 border border-success-500/20"
                          >
                            <div className="w-2 h-2 bg-success-400 rounded-full flex-shrink-0" />
                            <p className="text-secondary-100 leading-relaxed">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">🛠️</span>
                      기술 스택
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.slug === 'railnetwork' ? [
                        'Node.js', 'Express.js', 'gRPC', 'MongoDB', 'Redis', 'Winston', 'Docker',
                      ] : [
                        'Kotlin', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'Redis', 'Cloudflare R2', 'Docker',
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Implementation */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="text-2xl">🏗️</span>
                      기술적 구현
                    </h3>
                    <div className="space-y-4">
                      <div className="p-6 rounded-xl bg-secondary-800/50 border border-secondary-700/30">
                        <h4 className="text-lg font-semibold text-primary-400 mb-3">아키텍처 설계</h4>
                        <p className="text-secondary-300 leading-relaxed">
                          {project.slug === 'railnetwork' ?
                            '20개 지하철 노선의 실시간 데이터를 처리하는 고성능 백엔드 시스템을 설계했습니다. Express.js 기반의 RESTful API와 gRPC 서버를 병행 운영하며, Redis 캐싱과 MongoDB를 활용한 데이터 지속성을 구현했습니다.' :
                            'Spring Boot 3.x 기반의 DDD(Domain-Driven Design) 아키텍처를 적용해 멀티 프로젝트 관리가 가능한 확장 가능한 백엔드를 구축했습니다. PostGIS를 활용한 공간 데이터 처리와 Caffeine/Redis 이중 캐시 구조로 고성능을 달성했습니다.'
                          }
                        </p>
                      </div>

                      <div className="p-6 rounded-xl bg-secondary-800/50 border border-secondary-700/30">
                        <h4 className="text-lg font-semibold text-accent-400 mb-3">성능 최적화</h4>
                        <p className="text-secondary-300 leading-relaxed">
                          {project.slug === 'railnetwork' ?
                            'Promise.all을 활용한 병렬 API 호출로 업데이트 시간을 75% 단축하고, 압축 미들웨어 적용으로 네트워크 트래픽을 40% 절감했습니다. Redis 캐싱을 통해 평균 응답시간을 50ms 이하로 유지했습니다.' :
                            'PostGIS의 geography 타입과 GIST 인덱스를 활용해 공간 쿼리 성능을 최적화했습니다. 배열 컬럼과 GIN 인덱스를 조합한 읽기 최적화로 대용량 데이터 처리 성능을 향상시켰습니다.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
