import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { createToken, setSessionCookie, jsonResponse, errorResponse, type DBUser } from '@/lib/auth';
import { validateBody, loginSchema } from '@/lib/validation';

export async function POST(req: NextRequest) {
  const { data, error } = await validateBody(req, loginSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  const { phone, registrationCode } = data;

  const user = db.prepare(
    'SELECT * FROM users WHERE phone = ? AND registrationCode = ?'
  ).get(phone, registrationCode) as DBUser | undefined;

  if (!user) {
    return errorResponse('شماره تماس یا کد ثبت‌نام اشتباه است.', 401);
  }

  const token = await createToken({ userId: user.id, role: user.role });
  await setSessionCookie(token);

  return jsonResponse({
    message: 'ورود موفق',
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      registrationCode: user.registrationCode,
      role: user.role,
      createdAt: user.createdAt,
    },
  });
}
