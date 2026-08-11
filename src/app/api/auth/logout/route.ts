import { clearSessionCookie, jsonResponse } from '@/lib/auth';

export async function POST() {
  await clearSessionCookie();
  return jsonResponse({ message: 'با موفقیت از حساب خارج شدید.' });
}
