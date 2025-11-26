'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { ProjectExperience } from '@/lib/types';

interface MainProjectsProps {
  items: ProjectExperience[];
}

/**
 * Showcases flagship projects with visual impact and technical achievements. (EN)
 * 시각적 임팩트와 기술적 성과를 강조하는 대표 프로젝트를 소개합니다. (KO)
 */
export function MainProjects({ items }: MainProjectsProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Featured Projects
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Technical Excellence in Action
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            대규모 시스템 설계부터 실시간 데이터 처리까지, 복잡한 문제를 우아한 솔루션으로 해결한 대표작들입니다.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {items.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`grid gap-8 lg:gap-16 items-center ${
                index % 2 === 0 ? 'lg:grid-cols-[1fr_520px]' : 'lg:grid-cols-[520px_1fr]'
              }`}>

                {/* Project Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {/* Project Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm font-semibold rounded-full">
                        {project.role}
                      </span>
                      <span className="text-secondary-500 text-sm">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-lg text-secondary-700 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  {project.metrics?.length ? (
                    <div className="flex flex-wrap gap-4">
                      {project.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={`${project.slug}-${metric.label}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + metricIndex * 0.1 }}
                          className="bg-white border-2 border-primary-100 rounded-2xl p-4 shadow-card hover:shadow-card-lg transition-all duration-300 hover:border-primary-200"
                        >
                          <div className="text-2xl font-bold text-primary-600">
                            {metric.value}
                          </div>
                          <div className="text-sm text-secondary-600 font-medium">
                            {metric.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : null}

                  {/* Technical Highlights */}
                  {project.contributions?.length ? (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-secondary-800 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Technical Achievements
                      </h4>
                      <div className="grid gap-3">
                        {project.contributions.slice(0, 3).map((contribution, contribIndex) => (
                          <motion.div
                            key={contribIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + contribIndex * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-secondary-50 rounded-xl border border-secondary-100 hover:bg-secondary-100 transition-colors"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                            <p className="text-secondary-700 leading-relaxed">
                              {contribution}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.links?.map((link, linkIndex) => (
                      <a
                        key={`${project.slug}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/link inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                          linkIndex === 0 ?
                            'bg-primary-600 hover:bg-primary-500 text-white shadow-glow' :
                            'bg-white border-2 border-secondary-200 hover:border-primary-300 text-secondary-700 hover:text-primary-600'
                        }`}
                      >
                        <span>{link.label}</span>
                        <svg
                          className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Project Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  {project.cover ? (
                    <div className="relative bg-gradient-to-br from-secondary-900 to-secondary-800 rounded-3xl p-8 shadow-card-xl overflow-hidden">
                      {/* Background Tech Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-16 h-16 border border-primary-400 rounded-lg" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 border border-accent-400 rounded-full" />
                        <div className="absolute top-1/2 left-1/3 w-8 h-8 border border-success-400" />
                      </div>

                      <div className="relative bg-white rounded-2xl p-6 shadow-inner">
                        <Image
                          src={project.cover}
                          alt={`${project.name} architecture diagram`}
                          width={480}
                          height={320}
                          className="w-full h-auto object-contain"
                        />
                      </div>

                      {/* Floating Tech Badges */}
                      <div className="absolute -top-4 -right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {project.slug === 'railnetwork' ? 'Real-time' : 'Spatial'}
                      </div>
                      <div className="absolute -bottom-4 -left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {project.slug === 'railnetwork' ? '99.5% Uptime' : '40ms Response'}
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary-300">
                        {project.name[0]}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
