'use client';

import { motion } from 'framer-motion';
import type { Profile } from '@/lib/types';

interface HeroProps {
  profile: Profile;
}

const metrics = [
  { label: 'Lines', value: '20+', desc: '지하철 노선', icon: '🚇', gradient: 'from-primary-500 to-primary-700' },
  { label: 'Uptime', value: '99.5%', desc: '서비스 가용성', icon: '🎯', gradient: 'from-success-500 to-success-700' },
  { label: 'APIs', value: '180+', desc: 'REST 엔드포인트', icon: '🔗', gradient: 'from-accent-500 to-accent-700' },
  { label: 'Response', value: '40ms', desc: '평균 응답시간', icon: '⚡', gradient: 'from-danger-500 to-danger-700' },
];

const techIcons = [
  { name: 'Kotlin', icon: '🎯', color: 'text-orange-500', position: 'top-20 left-10' },
  { name: 'TypeScript', icon: '💙', color: 'text-blue-500', position: 'top-32 right-12' },
  { name: 'Spring Boot', icon: '🍃', color: 'text-green-500', position: 'top-48 left-16' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-indigo-500', position: 'top-24 right-24' },
  { name: 'Redis', icon: '🔥', color: 'text-red-500', position: 'top-40 left-32' },
];

/**
 * Modern full-screen hero section showcasing developer expertise and key metrics
 */
export function Hero({ profile }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950">
      {/* Animated Background Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute hidden lg:block ${tech.position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
        >
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 flex items-center justify-center text-2xl ${tech.color} shadow-lg`}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3 + index, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {tech.icon}
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Main Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              풀스택 백엔드 엔지니어
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {profile.name}
              <span className="block text-2xl md:text-4xl font-normal text-secondary-300 mt-4">
                {profile.title}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-secondary-300 max-w-4xl mx-auto leading-relaxed">
              {profile.summary}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {profile.location && (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 text-secondary-300">
                <span className="text-lg">📍</span>
                <span>{profile.location}</span>
              </div>
            )}
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors duration-200 shadow-lg hover:shadow-glow"
              >
                <span className="text-lg">✉️</span>
                <span>{profile.email}</span>
              </a>
            )}
          </motion.div>

          {/* Key Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 hover:border-secondary-600/50 transition-all duration-300 hover:shadow-card-lg">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  <div className="relative space-y-3">
                    <div className="text-3xl">{metric.icon}</div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-white">{metric.value}</div>
                      <div className="text-sm text-secondary-400 font-medium">{metric.desc}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Links */}
          {profile.links?.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              {profile.links.map((link, index) => (
                <motion.a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-secondary-800/50 backdrop-blur-sm border border-secondary-700/50 text-secondary-300 hover:text-white hover:border-secondary-600/50 transition-all duration-200 hover:shadow-lg"
                >
                  <span className="font-medium">{link.label}</span>
                  <span className="text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110">↗</span>
                </motion.a>
              ))}
            </motion.div>
          )}

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-secondary-400/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-3 bg-secondary-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
