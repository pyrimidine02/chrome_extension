import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/content';

/**
 * Handles project experience fetch requests. (EN)
 * 프로젝트 경험 조회 요청을 처리합니다. (KO)
 */
export async function GET() {
  const projects = await getProjects();
  return NextResponse.json(projects, {
    headers: { 'cache-control': 'public, max-age=0, s-maxage=0, must-revalidate' },
  });
}
