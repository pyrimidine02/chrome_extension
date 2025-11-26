'use client';

import { motion } from 'framer-motion';
import type { Honor } from '@/lib/types';

interface AwardsSectionProps {
  honors: Honor[];
}

// Award category icons mapping
const getAwardIcon = (title: string, organization: string) => {
  if (title.includes('논문') || organization.includes('Conference')) return '📄';
  if (title.includes('해커톤') || title.includes('챌린지')) return '💻';
  if (title.includes('Kaggle') || title.includes('데이터') || title.includes('AI') || title.includes('인공지능')) return '🤖';
  if (title.includes('ICPC') || title.includes('프로그래밍')) return '🏆';
  if (title.includes('자격') || organization.includes('한국')) return '📜';
  if (organization.includes('REPLY')) return '🌍';
  return '🥇';
};

/**
 * Modern awards and achievements showcase with visual hierarchy
 */
export function AwardsSection({ honors }: AwardsSectionProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(234, 179, 8, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
          }}
        />

        {/* Floating achievement icons */}
        {['🏆', '🥇', '🎖️', '⭐', '💎'].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            수상 및 성과
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Awards &
            <span className="block text-accent-400">Achievements</span>
          </h2>

          <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            기술 역량과 문제해결 능력을 인정받은 주요 성과들
          </p>
        </motion.div>

        {/* Awards List */}
        <div className="space-y-8">
          {honors.filter((honor) => !honor.title.includes('ISIPS')).map((honor, index) => {
            const icon = getAwardIcon(honor.title, honor.organization);
            return (
              <motion.div
                key={honor.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-secondary-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-card border border-secondary-700/50 hover:border-accent-400/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Date Badge */}
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 rounded-full">
                        <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                        <span className="text-accent-400 text-sm font-medium">{honor.date}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{honor.title}</h3>
                          <p className="text-accent-400 font-semibold">{honor.organization}</p>
                        </div>
                      </div>

                      <p className="text-secondary-300 leading-relaxed">
                        {honor.summary}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-accent-500/10 to-accent-500/20 rounded-2xl items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{icon}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-12 mt-20"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.6, type: 'spring' }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-accent-400 mb-2"
            >
              {honors.filter((honor) => !honor.title.includes('ISIPS')).length}+
            </motion.div>
            <div className="text-sm text-secondary-400 font-medium">
              총 수상 건수
            </div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6, type: 'spring' }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-success-400 mb-2"
            >
              Top 1%
            </motion.div>
            <div className="text-sm text-secondary-400 font-medium">
              최고 성과
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
