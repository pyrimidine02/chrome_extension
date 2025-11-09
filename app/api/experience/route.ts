import { NextResponse } from 'next/server';
import { getResearchExperience } from '@/lib/content';

/**
 * Handles research experience fetch requests. (EN)
 * 연구 경험 조회 요청을 처리합니다. (KO)
 */
export async function GET() {
  const experience = await getResearchExperience();
  return NextResponse.json(experience, {
    headers: { 'cache-control': 'public, max-age=0, s-maxage=0, must-revalidate' },
  });
}
