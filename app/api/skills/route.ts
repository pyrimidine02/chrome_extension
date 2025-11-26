import { NextResponse } from 'next/server';
import { getSkills } from '@/lib/content';

/**
 * Handles skill category fetch requests. (EN)
 * 기술 스킬 카테고리 조회 요청을 처리합니다. (KO)
 */
export async function GET() {
  const skills = await getSkills();
  return NextResponse.json(skills, {
    headers: { 'cache-control': 'public, max-age=0, s-maxage=0, must-revalidate' },
  });
}
