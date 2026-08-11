import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { generateOTP, jsonResponse, errorResponse } from '@/lib/auth';
import { validateBody, sendOtpSchema } from '@/lib/validation';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const { data, error } = await validateBody(req, sendOtpSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  const { phone } = data;

  // Mark previous OTPs as used
  db.prepare('UPDATE otps SET used = 1 WHERE phone = ? AND used = 0').run(phone);

  const code = process.env.SMS_PROVIDER === 'mock' ? '12345' : generateOTP();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();
  const now = new Date().toISOString();

  const user = db.prepare('SELECT id FROM users WHERE phone = ?').get(phone) as { id: string } | undefined;

  db.prepare(`
    INSERT INTO otps (id, phone, code, expiresAt, used, createdAt)
    VALUES (?, ?, ?, ?, 0, ?)
  `).run(uuidv4(), phone, code, expiresAt, now);

  if (process.env.SMS_PROVIDER === 'mock') {
    console.log(`[OTP Mock] Phone: ${phone}, Code: ${code}`);
  }

  return jsonResponse({
    message: 'کد تأیید ارسال شد.',
    ...(process.env.NODE_ENV !== 'production' ? { code } : {}),
  });
}
