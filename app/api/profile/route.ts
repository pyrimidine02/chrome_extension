import { NextResponse } from 'next/server';
import { getProfile } from '@/lib/content';

/**
 * Handles profile fetch requests. (EN)
 * 프로필 조회 요청을 처리합니다. (KO)
 */
export async function GET() {
  const profile = await getProfile();
  return NextResponse.json(profile, {
    headers: { 'cache-control': 'public, max-age=0, s-maxage=0, must-revalidate' },
  });
}
