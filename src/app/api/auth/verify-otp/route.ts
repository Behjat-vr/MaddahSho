import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { createToken, setSessionCookie, generateRegistrationCode, jsonResponse, errorResponse, type DBUser } from '@/lib/auth';
import { validateBody, verifyOtpSchema } from '@/lib/validation';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const { data, error } = await validateBody(req, verifyOtpSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  const { phone, code, firstName, lastName } = data;
  const now = new Date().toISOString();

  // Find valid OTP
  const otp = db.prepare(`
    SELECT * FROM otps
    WHERE phone = ? AND code = ? AND used = 0 AND expiresAt > ?
    ORDER BY createdAt DESC LIMIT 1
  `).get(phone, code, now) as { id: string } | undefined;

  if (!otp) {
    return errorResponse('کد تأیید نامعتبر یا منقضی شده است.', 401);
  }

  // Mark OTP used
  db.prepare('UPDATE otps SET used = 1 WHERE id = ?').run(otp.id);

  // Check if user exists
  const existing = db.prepare('SELECT id FROM users WHERE phone = ?').get(phone);
  if (existing) {
    return errorResponse('این شماره قبلاً ثبت‌نام شده است. لطفاً وارد شوید.');
  }

  // Generate registration code
  let registrationCode: string;
  let codeExists = true;
  do {
    registrationCode = generateRegistrationCode();
    const check = db.prepare('SELECT id FROM users WHERE registrationCode = ?').get(registrationCode);
    codeExists = !!check;
  } while (codeExists);

  const userId = uuidv4();
  db.prepare(`
    INSERT INTO users (id, firstName, lastName, phone, registrationCode, role, createdAt)
    VALUES (?, ?, ?, ?, ?, 'USER', ?)
  `).run(userId, firstName, lastName, phone, registrationCode, now);

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(userId) as DBUser;

  const token = await createToken({ userId: user.id, role: user.role });
  await setSessionCookie(token);

  return jsonResponse({
    message: 'ثبت‌نام موفق!',
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      registrationCode: user.registrationCode,
      role: user.role,
      createdAt: user.createdAt,
    },
    registrationCode,
  });
}
