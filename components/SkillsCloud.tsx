'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import type { SkillCategory } from '@/lib/types';

interface SkillsCloudProps {
  skills: SkillCategory[];
}

// Color mapping for different skill categories and technologies
const skillColors = {
  // Core Languages
  'C++': 'bg-blue-600 text-white border-blue-700',
  'Python': 'bg-green-600 text-white border-green-700',
  'Kotlin': 'bg-orange-500 text-white border-orange-600',
  'TypeScript': 'bg-blue-500 text-white border-blue-600',
  'JavaScript': 'bg-yellow-500 text-black border-yellow-600',

  // Frameworks
  'Spring Boot': 'bg-green-500 text-white border-green-600',
  'Next.js': 'bg-black text-white border-gray-700',
  'Node.js': 'bg-green-700 text-white border-green-800',
  'React': 'bg-cyan-500 text-white border-cyan-600',
  'Express': 'bg-gray-700 text-white border-gray-800',

  // Databases
  'PostgreSQL': 'bg-indigo-600 text-white border-indigo-700',
  'PostGIS': 'bg-indigo-500 text-white border-indigo-600',
  'Redis': 'bg-red-500 text-white border-red-600',
  'MongoDB': 'bg-green-600 text-white border-green-700',
  'Supabase': 'bg-emerald-500 text-white border-emerald-600',

  // Cloud & Infrastructure
  'AWS': 'bg-orange-400 text-white border-orange-500',
  'EC2': 'bg-orange-400 text-white border-orange-500',
  'S3': 'bg-orange-400 text-white border-orange-500',
  'RDS': 'bg-orange-400 text-white border-orange-500',
  'Docker': 'bg-blue-600 text-white border-blue-700',
  'Cloudflare': 'bg-orange-500 text-white border-orange-600',
  'R2': 'bg-orange-500 text-white border-orange-600',
  'Nginx': 'bg-green-700 text-white border-green-800',

  // ML & Data Science
  'PyTorch': 'bg-red-600 text-white border-red-700',
  'TensorFlow': 'bg-orange-500 text-white border-orange-600',
  'scikit-learn': 'bg-blue-500 text-white border-blue-600',
  'XGBoost': 'bg-purple-600 text-white border-purple-700',
  'Pandas': 'bg-indigo-600 text-white border-indigo-700',
  'NumPy': 'bg-blue-600 text-white border-blue-700',
  'Matplotlib': 'bg-green-600 text-white border-green-700',

  // DevOps & Tools
  'Git': 'bg-red-500 text-white border-red-600',
  'GitHub Actions': 'bg-gray-800 text-white border-gray-900',
  'OpenAPI': 'bg-green-500 text-white border-green-600',
  'Swagger': 'bg-green-500 text-white border-green-600',

  // Default
  'default': 'bg-secondary-200 text-secondary-800 border-secondary-300 hover:bg-secondary-300',
};

const categoryIcons = {
  'Core Languages': '💻',
  'Learning Stack': '📚',
  'Data & Database': '🗃️',
  'Cloud & Infrastructure': '☁️',
  'ML & Data Science': '🤖',
  'Tooling & DevOps': '🛠️',
};

/**
 * Interactive skills visualization with filtering and animations
 */
export function SkillsCloud({ skills }: SkillsCloudProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Extract all individual skills with their categories
  const allSkills = useMemo(() => {
    const skillsArray: Array<{name: string; category: string; description: string}> = [];

    skills.forEach((category) => {
      category.skills.forEach((skill) => {
        // Split skills by · and • separators to get individual technologies
        const individualSkills = skill.split(/[·•]/).map((s) => s.trim()).filter(Boolean);

        individualSkills.forEach((individualSkill) => {
          // Clean up skill name (remove version numbers and descriptions in parentheses)
          const cleanSkillName = individualSkill
              .split(/[\(\)]|\/\/|\/|\d+\+|\s+\d/)[0]
              .trim();

          if (cleanSkillName && cleanSkillName.length > 0) {
            skillsArray.push({
              name: cleanSkillName,
              category: category.name,
              description: category.description || '',
            });
          }
        });
      });
    });

    return skillsArray;
  }, [skills]);

  // Filter skills based on selected category
  const filteredSkills = selectedCategory ?
    allSkills.filter((skill) => skill.category === selectedCategory) :
    allSkills;

  // Get color class for a skill
  const getSkillColor = (skillName: string) => {
    // Try exact match first
    if (skillColors[skillName as keyof typeof skillColors]) {
      return skillColors[skillName as keyof typeof skillColors];
    }

    // Try partial match
    const matchedKey = Object.keys(skillColors).find((key) =>
      skillName.toLowerCase().includes(key.toLowerCase()) ||
      key.toLowerCase().includes(skillName.toLowerCase())
    );

    if (matchedKey && matchedKey !== 'default') {
      return skillColors[matchedKey as keyof typeof skillColors];
    }

    return skillColors.default;
  };

  const stats = {
    totalSkills: allSkills.length,
    categories: skills.length,
    years: '4+',
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            기술 스택
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology
            <span className="block text-primary-400">Expertise</span>
          </h2>

          <p className="text-xl text-secondary-300 max-w-3xl mx-auto leading-relaxed mb-12">
            풀스택 개발부터 운영까지, 검증된 기술 스택으로 안정적인 서비스를 구축합니다
          </p>

          {/* Skills Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 mb-12"
          >
            {Object.entries(stats).map(([key, value], index) => (
              <div key={key} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6, type: 'spring' }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-primary-400"
                >
                  {value}
                </motion.div>
                <div className="text-sm text-secondary-400 font-medium mt-1 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null ?
                'bg-primary-500 text-white shadow-glow' :
                'bg-secondary-800/50 text-secondary-300 hover:bg-secondary-700/50 backdrop-blur-sm border border-secondary-700/50'
            }`}
          >
            <span>🌟</span>
            <span>모든 기술</span>
          </button>

          {skills.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.name ?
                  'bg-primary-500 text-white shadow-glow' :
                  'bg-secondary-800/50 text-secondary-300 hover:bg-secondary-700/50 backdrop-blur-sm border border-secondary-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{categoryIcons[category.name as keyof typeof categoryIcons] || '🔧'}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => {
            const skillColor = getSkillColor(skill.name);
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={`${skill.name}-${skill.category}`}
                layout
                initial={{ opacity: 0, scale: 0, rotateZ: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                exit={{ opacity: 0, scale: 0, rotateZ: 10 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotateZ: 5,
                  zIndex: 10,
                }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group relative"
              >
                <div className={`
                  relative px-4 py-2 md:px-6 md:py-3 rounded-2xl
                  font-medium text-sm md:text-base
                  border-2 cursor-pointer
                  transition-all duration-300 ease-out
                  backdrop-blur-sm
                  ${skillColor}
                  hover:shadow-lg hover:-translate-y-1
                  active:translate-y-0
                `}>
                  {skill.name}

                  {/* Hover tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? -45 : 10,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-3 py-2 bg-secondary-900 text-white text-xs rounded-lg shadow-lg border border-secondary-700 whitespace-nowrap z-20 pointer-events-none"
                  >
                    <div className="font-semibold">{skill.category}</div>
                    <div className="text-secondary-300">{skill.description}</div>

                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary-900" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Description */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="max-w-2xl mx-auto">
              <div className="p-6 rounded-2xl bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {selectedCategory}
                </h3>
                <p className="text-secondary-300">
                  {skills.find((cat) => cat.name === selectedCategory)?.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
