import { NextResponse } from 'next/server';
import { getToyProjects } from '@/lib/content';

/**
 * Handles toy project fetch requests. (EN)
 * 토이 프로젝트 조회 요청을 처리합니다. (KO)
 */
export async function GET() {
  const toys = await getToyProjects();
  return NextResponse.json(toys, {
    headers: { 'cache-control': 'public, max-age=0, s-maxage=0, must-revalidate' },
  });
}
