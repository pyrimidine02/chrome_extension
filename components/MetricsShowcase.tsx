'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MetricItem {
  label: string;
  value: string | number;
  description: string;
  icon: string;
  color: string;
  suffix?: string;
}

const metrics: MetricItem[] = [
  {
    label: 'Active Users',
    value: '8.8K',
    description: 'RailNetwork 월간 활성 사용자 수',
    icon: '👥',
    color: 'from-success-500 to-success-600',
    suffix: '',
  },
  {
    label: 'Response Time',
    value: 150,
    description: 'TrainAccAPI 평균 응답시간',
    icon: '⚡',
    color: 'from-accent-500 to-accent-600',
    suffix: 'ms',
  },
  {
    label: 'Data Update',
    value: 15,
    description: '실시간 열차 위치 정보 업데이트 주기',
    icon: '⏱️',
    color: 'from-purple-500 to-purple-600',
    suffix: 's',
  },
  {
    label: 'Subway Lines',
    value: 20,
    description: '서울 지하철 실시간 추적 노선 수',
    icon: '🚇',
    color: 'from-indigo-500 to-indigo-600',
    suffix: '',
  },
  {
    label: 'Total Events',
    value: '25M',
    description: '누적 이벤트 처리 수',
    icon: '📊',
    color: 'from-primary-500 to-primary-600',
    suffix: '+',
  },
  {
    label: 'Platform Coverage',
    value: 'Cross',
    description: 'Android·iOS 크로스 플랫폼 지원',
    icon: '📱',
    color: 'from-pink-500 to-pink-600',
    suffix: '',
  },
];

/**
 * Animated metrics showcase highlighting key achievements and performance indicators.
 * 주요 성과와 성능 지표를 애니메이션으로 강조하는 메트릭 쇼케이스입니다.
 */
export function MetricsShowcase() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid bg-[size:30px_30px] opacity-5" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-success-500/20 border border-success-500/30 rounded-full text-success-300 text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Performance Metrics
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Impact by Numbers
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            TrainAccAPI 시스템의 실제 성능과 안정성을 보여주는 핵심 지표들입니다.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Production-Ready System
            </h3>
            <p className="text-secondary-300 leading-relaxed">
              모든 지표는 RailNetwork 실제 운영 환경에서 수집된 데이터입니다.
              20개 지하철 노선을 15초 주기로 실시간 추적하며,
              8,852명의 활성 사용자가 25M+ 이벤트를 생성하고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  metric: MetricItem;
  index: number;
  isVisible: boolean;
}

function MetricCard({ metric, index, isVisible }: MetricCardProps) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 50;
      const increment = typeof metric.value === 'number' ? metric.value / steps : 0;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= (typeof metric.value === 'number' ? metric.value : 0)) {
          setAnimatedValue(typeof metric.value === 'number' ? metric.value : 0);
          clearInterval(interval);
        } else {
          setAnimatedValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [isVisible, metric.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      <div className="relative bg-secondary-800/30 backdrop-blur-sm border border-secondary-700/50 rounded-3xl p-12 min-h-[380px] hover:border-secondary-600/50 transition-all duration-300">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 rounded-3xl transition-opacity group-hover:opacity-10`} />

        {/* Icon */}
        <div className="text-4xl mb-4 text-center">
          {metric.icon}
        </div>

        {/* Value */}
        <div className="text-center mb-4">
          <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-br ${metric.color} bg-clip-text text-transparent mb-2`}>
            {typeof metric.value === 'number' ? animatedValue.toLocaleString() : metric.value}
            {metric.suffix}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            {metric.label}
          </h3>
          <p className="text-secondary-300 text-sm leading-relaxed">
            {metric.description}
          </p>
        </div>

        {/* Pulse Effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute inset-0 bg-gradient-to-br ${metric.color} rounded-3xl opacity-0 group-hover:opacity-10`}
        />
      </div>
    </motion.div>
  );
}
