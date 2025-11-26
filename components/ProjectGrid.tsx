'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectModal } from '@/components/ProjectModal';
import type { ProjectExperience } from '@/lib/types';

interface ProjectGridProps {
  projects: ProjectExperience[];
}

/**
 * Modern project showcase with staggered layout and interactive cards
 */
export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectExperience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: ProjectExperience) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <section className="relative py-32 bg-gradient-to-br from-secondary-50 via-white to-secondary-50">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            주요 프로젝트
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            Production-Ready
            <span className="block text-primary-600">Engineering</span>
          </h2>

          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            실제 운영 환경에서 검증된 대규모 시스템 설계·구현 경험
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Project Content */}
                <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                  {/* Project Badge & Title */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium">
                        {project.role}
                      </span>
                      <span className="text-secondary-500 text-sm font-medium">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-tight">
                      {project.name}
                    </h3>

                    <p className="text-lg text-secondary-600 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + metricIndex * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="group relative p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-secondary-200/50 hover:border-primary-200 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="space-y-2">
                            <div className="text-2xl font-bold text-primary-600">
                              {metric.value}
                            </div>
                            <div className="text-sm text-secondary-500 font-medium">
                              {metric.label}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Key Contributions */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-secondary-800">
                      핵심 기여사항
                    </h4>
                    <div className="space-y-3">
                      {project.contributions.slice(0, 3).map((contribution, contribIndex) => (
                        <motion.div
                          key={contribIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + contribIndex * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 flex-shrink-0" />
                          <p className="text-secondary-700 leading-relaxed">
                            {contribution}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links & Details Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary-800 text-white text-sm font-medium hover:bg-secondary-700 transition-all duration-200 hover:shadow-lg hover:scale-105"
                      >
                        <span>{link.label}</span>
                        <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">↗</span>
                      </a>
                    ))}
                    {/* 자세히 보기 버튼 */}
                    <button
                      onClick={() => openProjectModal(project)}
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105"
                    >
                      <span>자세히 보기</span>
                      <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </button>
                  </motion.div>
                </div>

                {/* Project Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                >
                  <div className="group relative">
                    {/* 3D Card Effect */}
                    <div className="relative perspective-1000">
                      <div className="relative transform-gpu transition-all duration-500 group-hover:scale-105">
                        {/* Main Card */}
                        <div
                          className="relative aspect-video rounded-2xl bg-gradient-to-br from-secondary-800/90 via-secondary-700/90 to-secondary-900/90 p-6 overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer backdrop-blur-sm border border-secondary-600/20 transition-all duration-300"
                          onClick={() => openProjectModal(project)}
                        >
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-5">
                            <div
                              className="w-full h-full"
                              style={{
                                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
                                backgroundSize: '16px 16px',
                              }}
                            />
                          </div>

                          {/* Architecture Visual */}
                          <div className="relative z-10 h-full flex flex-col justify-between">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse" />
                                <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-secondary-300 font-mono mb-1">
                                  {project.name}
                                </div>
                                <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                                  project.slug === 'girlsbandtabi' ?
                                    'bg-orange-500/20 border border-orange-400/30 text-orange-300' :
                                    'bg-success-500/20 border border-success-400/30 text-success-300'
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                                    project.slug === 'girlsbandtabi' ? 'bg-orange-400' : 'bg-success-400'
                                  }`} />
                                  {project.slug === 'girlsbandtabi' ? 'Development' : 'Production'}
                                </div>
                              </div>
                            </div>

                            {/* Architecture Diagram Simulation */}
                            <div className="space-y-4">
                              {project.slug === 'girlsbandtabi' ? (
                                <>
                                  {/* Database Layer */}
                                  <div className="grid grid-cols-3 gap-2">
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-blue-500/25 to-blue-600/25 rounded-md border border-blue-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-blue-200 font-medium tracking-wide">PostgreSQL</span>
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.1, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-green-500/25 to-green-600/25 rounded-md border border-green-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-green-200 font-medium tracking-wide">PostGIS</span>
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.2, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-red-500/25 to-red-600/25 rounded-md border border-red-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-red-200 font-medium tracking-wide">Redis</span>
                                    </motion.div>
                                  </div>
                                  {/* Application Layer */}
                                  <div className="grid grid-cols-2 gap-2">
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.3, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-purple-500/25 to-purple-600/25 rounded-md border border-purple-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-purple-200 font-medium tracking-wide">Spring Boot</span>
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.4, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-orange-500/25 to-orange-600/25 rounded-md border border-orange-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-orange-200 font-medium tracking-wide">JWT Auth</span>
                                    </motion.div>
                                  </div>
                                  {/* API Layer */}
                                  <div className="grid grid-cols-1 gap-2">
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.5, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-cyan-500/25 to-cyan-600/25 rounded-md border border-cyan-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-cyan-200 font-medium tracking-wide">180+ REST APIs</span>
                                    </motion.div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {/* RailNetwork Architecture */}
                                  <div className="grid grid-cols-3 gap-2">
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-green-500/25 to-green-600/25 rounded-md border border-green-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-green-200 font-medium tracking-wide">Express.js</span>
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.1, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-blue-500/25 to-blue-600/25 rounded-md border border-blue-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-blue-200 font-medium tracking-wide">gRPC</span>
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.2, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-red-500/25 to-red-600/25 rounded-md border border-red-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-red-200 font-medium tracking-wide">MongoDB</span>
                                    </motion.div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.3, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-orange-500/25 to-orange-600/25 rounded-md border border-orange-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-orange-200 font-medium tracking-wide">Redis Cache</span>
                                    </motion.div>
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.4, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-purple-500/25 to-purple-600/25 rounded-md border border-purple-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-purple-200 font-medium tracking-wide">WebSocket</span>
                                    </motion.div>
                                  </div>

                                  <div className="grid grid-cols-1 gap-2">
                                    <motion.div
                                      initial={{ opacity: 0, scale: 0 }}
                                      whileInView={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: 1.5, duration: 0.5 }}
                                      viewport={{ once: true }}
                                      className="h-8 bg-gradient-to-r from-yellow-500/25 to-yellow-600/25 rounded-md border border-yellow-400/25 flex items-center justify-center backdrop-blur-sm shadow-sm"
                                    >
                                      <span className="text-[9px] text-yellow-200 font-medium tracking-wide">TrainAccAPI</span>
                                    </motion.div>
                                  </div>
                                </>
                              )}

                              {/* Data Flow Lines */}
                              <div className="relative mt-3">
                                {[...Array(3)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    whileInView={{ scaleX: 1, opacity: 1 }}
                                    transition={{ delay: 1.8 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
                                    viewport={{ once: true }}
                                    className="h-0.5 bg-gradient-to-r from-primary-400/30 via-accent-400/40 to-primary-400/30 mb-1.5 rounded-full"
                                  />
                                ))}
                              </div>
                            </div>

                            {/* Performance Indicators */}
                            <div className="flex justify-between items-end">
                              <div className="space-y-2">
                                <div className="text-xs text-secondary-300 font-medium">
                                  {project.slug === 'girlsbandtabi' ? 'API Endpoints' : 'Live Trains'}
                                </div>
                                <div className="flex gap-1">
                                  {project.slug === 'girlsbandtabi' ? (
                                    // Show 180+ API endpoints as bars
                                    [...Array(5)].map((_, i) => (
                                      <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: [24, 20, 28, 16, 22][i] }}
                                        transition={{ delay: 2.2 + i * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="w-1.5 bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-full shadow-sm"
                                      />
                                    ))
                                  ) : (
                                    // Show train tracking performance
                                    [...Array(5)].map((_, i) => (
                                      <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: [26, 28, 24, 30, 28][i] }}
                                        transition={{ delay: 2.2 + i * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className='w-1.5 bg-gradient-to-t from-success-500 to-success-400 rounded-full shadow-sm'
                                      />
                                    ))
                                  )}
                                </div>
                              </div>

                              <div className="text-right space-y-1">
                                <div className="text-xs text-secondary-300 font-medium">
                                  Performance
                                </div>
                                <div className="text-sm font-bold text-white">
                                  {project.slug === 'girlsbandtabi' ? '180+' : '99.5%'}
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* Shadow Card */}
                        <div className="absolute inset-0 bg-secondary-900/30 rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </section>
  );
}
