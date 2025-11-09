import { NextResponse } from 'next/server';
import { getHonors } from '@/lib/content';

/**
 * Handles honors and awards fetch requests. (EN)
 * 수상 및 성과 조회 요청을 처리합니다. (KO)
 */
export async function GET() {
  const honors = await getHonors();
  return NextResponse.json(honors, {
    headers: { 'cache-control': 'public, max-age=0, s-maxage=0, must-revalidate' },
  });
}
