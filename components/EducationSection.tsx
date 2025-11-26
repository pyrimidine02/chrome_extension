'use client';

import { motion } from 'framer-motion';
import type { EducationEntry } from '@/lib/types';

interface EducationSectionProps {
  education: EducationEntry[];
}

/**
 * Modern education timeline with academic achievements showcase
 */
export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-secondary-50 via-white to-primary-50/30">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.03) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
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
            학력 및 교육
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            Academic
            <span className="block text-primary-600">Journey</span>
          </h2>

          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            전문 지식 습득과 실무 역량 강화를 위한 체계적인 학습 과정
          </p>

          {/* 학력 요약 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-100/50 shadow-lg">
              <div className="space-y-4 text-center">
                <p className="text-lg font-semibold text-secondary-800">
                  <span className="text-primary-600">인하대학교 컴퓨터공학과</span>에서 학사과정을 이수하며,
                  알고리즘과 시스템 프로그래밍 분야의 탄탄한 기초를 다지고 있습니다.
                </p>
                <p className="text-base text-secondary-700">
                  추가로 <span className="font-semibold text-primary-600">Google for Developers Machine Learning Bootcamp</span>을 수료하여
                  최신 ML/AI 기술 스택을 습득했으며, 실제 프로덕션 환경에서의 머신러닝 모델 배포 경험을 쌓았습니다.
                </p>
                <div className="flex justify-center items-center gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">2023~현재</div>
                    <div className="text-sm text-secondary-600">인하대 재학</div>
                  </div>
                  <div className="w-px h-12 bg-primary-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">2024</div>
                    <div className="text-sm text-secondary-600">Google ML 수료</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200"></div>

          <div className="space-y-12">
            {education.map((entry, index) => (
              <motion.div
                key={`${entry.school}-${entry.period}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"
                />

                {/* Education Card */}
                <div className="ml-20">
                  <motion.div
                    whileHover={{ y: -5, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 shadow-card border border-secondary-100/50 hover:border-primary-200 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                          {entry.school}
                        </h3>
                        <p className="text-lg text-primary-600 font-semibold mb-1">
                          {entry.program}
                        </p>
                        {entry.location && (
                          <div className="flex items-center gap-2 text-secondary-500">
                            <span className="text-sm">📍</span>
                            <span className="text-sm">{entry.location}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
                        <span className="text-lg">🗓️</span>
                        <span className="text-sm font-medium text-primary-700">
                          {entry.period}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    {entry.notes && entry.notes.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-secondary-800 mb-4">
                          주요 성과 및 활동
                        </h4>
                        <div className="grid gap-3">
                          {entry.notes.map((note, noteIndex) => (
                            <motion.div
                              key={noteIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + noteIndex * 0.1, duration: 0.6 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 p-3 rounded-xl bg-secondary-50/50 hover:bg-secondary-50 transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-secondary-700 leading-relaxed flex-1">
                                {note}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-5">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
              <span className="text-3xl">🎓</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
