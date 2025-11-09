import { NextResponse } from 'next/server';
import { getEducation } from '@/lib/content';

/**
 * Handles education history fetch requests. (EN)
 * 학력 정보 조회 요청을 처리합니다. (KO)
 */
export async function GET() {
  const education = await getEducation();
  return NextResponse.json(education, {
    headers: { 'cache-control': 'public, max-age=0, s-maxage=0, must-revalidate' },
  });
}
