'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Research activities and academic contributions showcase
 */
export function ResearchSection() {
  const [expandedResearch, setExpandedResearch] = useState<string | null>(null);

  const researchActivities = [
    {
      title: 'ISIPS 2023 논문 기여',
      description: 'Portable ECG Monitor on Edge Device using TensorFlow Lite',
      period: '2023',
      type: '논문 연구',
      details: 'MIT-BIH 부정맥 데이터 전처리, CNN 모델 설계, TensorFlow Lite 8-bit 양자화로 2.4MB→503KB 경량화 및 Arduino Nano 33 BLE 엣지 디바이스 배포',
      fullDetails: {
        overview: 'TensorFlow Lite를 활용한 엣지 디바이스 기반 휴대용 심전도 모니터링 시스템 개발 연구입니다. 심혈관 질환의 조기 진단을 위해 AI 기술을 Arduino Nano 33 BLE Sense와 같은 제한된 자원의 엣지 디바이스에 구현했습니다.',
        contributions: [
          {
            title: '데이터 전처리',
            items: [
              'MIT-BIH 부정맥 데이터베이스에서 QRS 파형 정점(높이 1250–1500, 간격 200) 식별 및 추출',
              'QRS 복합체 중심으로 좌측 85px, 우측 15px 크롭 후 96×96 이미지로 리사이징',
              '정상(N), 심실조기수축(PVC), 노이즈 데이터 분류 및 MLII 리드 타입 기반 전처리',
              'R-wave 중심 정렬, 12-bit 해상도 데이터를 96 단계로 다운스케일링 및 그레이스케일 변환',
            ],
          },
          {
            title: '모델링',
            items: [
              'CNN 모델 설계: 2개 합성곱 계층(3×3 커널, 8필터) + 2개 풀링 계층 + FC(Flatten-ReLU-Softmax)',
              'Adam 옵티마이저와 categorical_crossentropy 손실 함수를 적용한 다중 클래스 분류 학습',
              '입력 크기 96×96, 필터 수 최적화 실험을 통해 정확도와 경량화 간 최적 균형점 탐색',
              'Base 모델(32필터) 정확도 99.23%, 경량 모델(8필터) 정확도 88.72% 달성',
            ],
          },
          {
            title: '모델 경량화',
            items: [
              'TensorFlow Lite 변환 및 8-bit 정수 양자화로 모델 크기 2.4MB → 503KB (79% 축소)',
              'FlatBuffer 포맷 활용으로 메모리 사용량 최적화, Arduino Nano 33 BLE(1MB 플래시) 배포 성공',
              '개인 ECG 데이터 재학습을 통해 TF Lite 모델 정확도 53.75% → 83.55%로 개선',
              '1-bit BMP 변환 검증 프로세스로 부정맥/정상 데이터 교차 검증 수행',
            ],
          },
        ],
        system: {
          hardware: 'Arduino Nano 33 BLE Sense (nRF52840 SoC, ARM Cortex-M4, 64MHz)',
          software: 'TensorFlow Lite Micro, CNN 기반 심전도 분석 모델',
          data: 'MIT-BIH 부정맥 데이터베이스 (MLII 리드 타입 활용)',
        },
        results: '실시간 심전도 모니터링이 가능한 저전력 엣지 디바이스 구현에 성공했으며, 개인별 데이터로 재학습을 통해 사용자 맞춤형 고정확도 진단이 가능함을 입증했습니다.',
      },
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50/30">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)',
          backgroundSize: '25px 25px',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            연구 및 학술활동
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            Research &
            <span className="block text-accent-600">Activities</span>
          </h2>

          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            학술 연구와 오픈소스 기여를 통한 지식 창출 및 공유 활동
          </p>

          {/* 연구 활동 요약 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-accent-100/50 shadow-lg">
              <div className="space-y-4 text-center">
                <p className="text-lg font-semibold text-secondary-800">
                  <span className="text-accent-600">• ISIPS 2023 논문 기여</span>
                </p>
                <div className="flex justify-center items-center pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-600">1건</div>
                    <div className="text-sm text-secondary-600">논문 기여</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Research Activities */}
        <div className="space-y-8">
          {researchActivities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-card border border-secondary-100/50 hover:border-accent-200 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Type Badge */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 rounded-full">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-accent-700 text-sm font-medium">{activity.type}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">{activity.title}</h3>
                        <p className="text-accent-600 font-semibold">{activity.description}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-secondary-50 rounded-full">
                        <span className="text-sm">📅</span>
                        <span className="text-sm font-medium text-secondary-700">{activity.period}</span>
                      </div>
                    </div>

                    <p className="text-secondary-700 leading-relaxed">
                      {activity.details}
                    </p>

                    {/* 자세히 보기 버튼 */}
                    <button
                      onClick={() => setExpandedResearch(
                        expandedResearch === activity.title ? null : activity.title,
                      )}
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-colors"
                    >
                      <span>{expandedResearch === activity.title ? '간단히 보기' : '자세히 보기'}</span>
                      <motion.div
                        animate={{ rotate: expandedResearch === activity.title ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                  </div>

                  {/* Decorative Element */}
                  <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl items-center justify-center flex-shrink-0">
                    <span className="text-2xl">
                      {activity.type === '논문 연구' ? '📄' : activity.type === '학부 연구' ? '🔬' : '💻'}
                    </span>
                  </div>
                </div>

                {/* 확장된 상세 내용 */}
                <AnimatePresence>
                  {expandedResearch === activity.title && activity.fullDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-secondary-200">
                        <div className="space-y-8">
                          {/* 연구 개요 */}
                          <div>
                            <h4 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                              연구 개요
                            </h4>
                            <p className="text-secondary-700 leading-relaxed bg-accent-50/50 rounded-xl p-4">
                              {activity.fullDetails.overview}
                            </p>
                          </div>

                          {/* 주요 기여 */}
                          <div>
                            <h4 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                              주요 기술적 기여
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                              {activity.fullDetails.contributions.map((contribution, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 border border-accent-100/50 shadow-sm">
                                  <h5 className="font-semibold text-accent-700 mb-3">{contribution.title}</h5>
                                  <ul className="space-y-2">
                                    {contribution.items.map((item, itemIdx) => (
                                      <li key={itemIdx} className="flex items-start gap-2 text-sm text-secondary-700">
                                        <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 시스템 구성 */}
                          <div>
                            <h4 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                              시스템 구성
                            </h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl p-4">
                                <h6 className="font-semibold text-primary-700 mb-2">하드웨어</h6>
                                <p className="text-sm text-primary-600">{activity.fullDetails.system.hardware}</p>
                              </div>
                              <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-xl p-4">
                                <h6 className="font-semibold text-accent-700 mb-2">소프트웨어</h6>
                                <p className="text-sm text-accent-600">{activity.fullDetails.system.software}</p>
                              </div>
                              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100/50 rounded-xl p-4">
                                <h6 className="font-semibold text-secondary-700 mb-2">데이터</h6>
                                <p className="text-sm text-secondary-600">{activity.fullDetails.system.data}</p>
                              </div>
                            </div>
                          </div>

                          {/* 연구 성과 */}
                          <div>
                            <h4 className="text-lg font-bold text-secondary-900 mb-4 flex items-center gap-2">
                              <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                              연구 성과
                            </h4>
                            <div className="bg-gradient-to-r from-success-50 to-success-100/50 rounded-xl p-6 border border-success-200/50">
                              <p className="text-secondary-700 leading-relaxed">
                                {activity.fullDetails.results}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
