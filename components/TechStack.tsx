'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SkillCategory } from '@/lib/types';

interface TechStackProps {
  categories: SkillCategory[];
}

// Technology color mapping for visual distinction
const getTechColor = (skill: string, categoryName: string) => {
  const lowerSkill = skill.toLowerCase();

  // Language colors
  if (lowerSkill.includes('kotlin') || lowerSkill.includes('k ')) return 'from-orange-500 to-orange-600';
  if (lowerSkill.includes('typescript') || lowerSkill.includes('ts')) return 'from-blue-500 to-blue-600';
  if (lowerSkill.includes('python')) return 'from-green-500 to-green-600';
  if (lowerSkill.includes('next.js') || lowerSkill.includes('react')) return 'from-cyan-500 to-cyan-600';

  // Database colors
  if (lowerSkill.includes('postgres') || lowerSkill.includes('postgis')) return 'from-blue-600 to-blue-700';
  if (lowerSkill.includes('redis')) return 'from-red-500 to-red-600';
  if (lowerSkill.includes('mongo')) return 'from-green-600 to-green-700';

  // Platform colors
  if (lowerSkill.includes('docker')) return 'from-blue-400 to-blue-500';
  if (lowerSkill.includes('cloudflare')) return 'from-orange-400 to-orange-500';
  if (lowerSkill.includes('prometheus')) return 'from-red-400 to-red-500';

  // Default colors by category
  if (categoryName.includes('Languages')) return 'from-purple-500 to-purple-600';
  if (categoryName.includes('Data')) return 'from-indigo-500 to-indigo-600';
  if (categoryName.includes('Platform')) return 'from-green-500 to-green-600';
  if (categoryName.includes('Tooling')) return 'from-yellow-500 to-yellow-600';

  return 'from-secondary-500 to-secondary-600';
};

/**
 * Interactive technology stack showcase with visual skill cloud. (EN)
 * 인터랙티브한 스킬 클라우드로 기술 스택을 시각적으로 보여줍니다. (KO)
 */
export function TechStack({ categories }: TechStackProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  if (!categories?.length) {
    return null;
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid bg-[size:40px_40px] opacity-5" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            Technology Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Tools & Technologies
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            현대적인 기술 스택으로 확장 가능하고 성능 최적화된 시스템을 구축합니다.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-3 p-2 bg-secondary-800/50 backdrop-blur-sm rounded-2xl border border-secondary-700/50">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === null ?
                  'bg-primary-600 text-white shadow-glow' :
                  'text-secondary-300 hover:text-white hover:bg-secondary-700/50'
              }`}
            >
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.name ?
                    'bg-primary-600 text-white shadow-glow' :
                    'text-secondary-300 hover:text-white hover:bg-secondary-700/50'
                }`}
              >
                {category.name.replace(' & ', ' & ')}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Cloud */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {selectedCategory === null ? (
              // All Skills View - Cloud Layout
              <motion.div
                key="all-skills"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="min-h-[400px] flex flex-wrap justify-center items-center gap-4 p-8"
              >
                {categories.flatMap((category) =>
                  category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="relative group cursor-pointer"
                    >
                      <div className={`
                        bg-gradient-to-br ${getTechColor(skill, category.name)} 
                        text-white px-4 py-2 rounded-xl font-medium shadow-card
                        transform transition-all duration-300
                        ${hoveredSkill === skill ? 'scale-110 shadow-glow z-10' : 'hover:scale-105'}
                        text-sm md:text-base
                      `}>
                        {skill}
                      </div>

                      {/* Tooltip */}
                      <AnimatePresence>
                        {hoveredSkill === skill && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20"
                          >
                            <div className="bg-secondary-800 border border-secondary-700 text-secondary-100 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                              {category.name}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-secondary-800" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                )}
              </motion.div>
            ) : (
              // Category Detail View
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8"
              >
                {categories
                    .filter((category) => category.name === selectedCategory)
                    .map((category, categoryIndex) => (
                      <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-3xl p-8"
                      >
                        <div className="text-center mb-8">
                          <h3 className="text-3xl font-bold text-white mb-4">
                            {category.name}
                          </h3>
                          {category.description && (
                            <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
                              {category.description}
                            </p>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {category.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + skillIndex * 0.1, duration: 0.4 }}
                              className="group relative"
                            >
                              <div className={`
                              bg-gradient-to-br ${getTechColor(skill, category.name)}
                              text-white p-6 rounded-2xl shadow-card
                              transform transition-all duration-300
                              hover:scale-105 hover:shadow-glow
                              flex items-center justify-center text-center
                              min-h-[120px]
                            `}>
                                <span className="text-lg font-semibold">
                                  {skill}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">
              {categories.reduce((acc, cat) => acc + cat.skills.length, 0)}
            </div>
            <div className="text-secondary-300 text-sm">
              Technologies
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-2">
              {categories.length}
            </div>
            <div className="text-secondary-300 text-sm">
              Categories
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success-400 mb-2">
              5+
            </div>
            <div className="text-secondary-300 text-sm">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-danger-400 mb-2">
              24/7
            </div>
            <div className="text-secondary-300 text-sm">
              System Reliability
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
