'use client';

import { motion } from 'framer-motion';
import type { ProfileLink } from '@/lib/types';

interface ContactCTAProps {
  email?: string;
  links?: ProfileLink[];
}

/**
 * Modern contact section with engaging call-to-action for hiring managers. (EN)
 * 채용 담당자를 위한 현대적이고 매력적인 연락처 섹션입니다. (KO)
 */
export function ContactCTA({ email, links }: ContactCTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid bg-[size:24px_24px] opacity-10" />

      <div className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 rounded-3xl p-8 lg:p-12 text-white shadow-card-xl">
        {/* Floating Elements */}
        <div className="absolute top-6 right-6 w-16 h-16 bg-primary-500/20 rounded-full blur-lg animate-pulse-slow" />
        <div className="absolute bottom-6 left-6 w-20 h-20 bg-accent-500/20 rounded-full blur-xl animate-float" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-success-500/20 border border-success-500/30 rounded-full text-success-300 text-sm font-medium"
            >
              <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse" />
              Open to New Opportunities
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Let&apos;s Build Something
                <span className="block text-primary-300">Exceptional Together</span>
              </h2>
              <p className="text-xl text-secondary-200 leading-relaxed max-w-2xl">
                실시간 시스템과 확장 가능한 백엔드 구축에 열정을 가진 개발자입니다.
                채용 관련 연락을 언제나 환영합니다.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-secondary-200">즉시 면접 가능</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-secondary-200">기술 과제 환영</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-success-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-secondary-200">원격 근무 경험</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-secondary-200">풀스택 개발</span>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4 lg:min-w-[240px]"
          >
            {email && (
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>이메일 연락</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            )}

            {links?.map((link, index) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-2xl transition-all duration-300 ${
                  index === 0 && !email ?
                    'bg-primary-600 hover:bg-primary-500 text-white shadow-glow' :
                    'bg-secondary-800/50 hover:bg-secondary-700 text-secondary-200 hover:text-white border border-secondary-700/50 hover:border-secondary-600'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                <span>{link.label}</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            ))}

            {/* CV Download Button */}
            <a
              href="/cv.pdf"
              download="손호영_이력서.pdf"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-2xl shadow-glow hover:shadow-glow transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>이력서 다운로드</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Cover Letter Download Button */}
            <a
              href="/cover_letter.pdf"
              download="손호영_자기소개서.pdf"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary-800/50 hover:bg-secondary-700 text-secondary-200 hover:text-white font-semibold rounded-2xl border border-secondary-700/50 hover:border-secondary-600 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span>자기소개서 다운로드</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            <div className="mt-4 text-center">
              <p className="text-secondary-300 text-sm">
                응답시간: 24시간 이내
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
