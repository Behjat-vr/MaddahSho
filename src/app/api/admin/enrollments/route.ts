import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse, errorResponse } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  try {
    const body = await req.json();
    const { userId, courseId, action } = body; // action: 'grant' | 'revoke'

    if (!userId || !courseId) {
      return errorResponse('کاربر و دوره الزامی هستند.', 400);
    }

    if (action === 'revoke') {
      db.prepare('DELETE FROM enrollments WHERE userId = ? AND courseId = ?').run(userId, courseId);
      return jsonResponse({ message: 'دسترسی کاربر به دوره لغو شد.' });
    } else {
      // Grant enrollment
      const existing = db.prepare('SELECT id FROM enrollments WHERE userId = ? AND courseId = ?').get(userId, courseId);
      if (existing) {
        db.prepare('UPDATE enrollments SET paymentStatus = "PAID" WHERE userId = ? AND courseId = ?').run(userId, courseId);
      } else {
        const id = uuidv4();
        const now = new Date().toISOString();
        db.prepare(`
          INSERT INTO enrollments (id, userId, courseId, enrolledAt, paymentStatus, progress)
          VALUES (?, ?, ?, ?, 'PAID', 0)
        `).run(id, userId, courseId, now);
      }
      return jsonResponse({ message: 'دسترسی کاربر به دوره با موفقیت ثبت شد.' });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'خطای سرور';
    return errorResponse(message, 500);
  }
}
