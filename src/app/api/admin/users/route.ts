import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse } from '@/lib/auth';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const users = db.prepare(`
    SELECT u.id, u.firstName, u.lastName, u.phone, u.registrationCode, u.role, u.createdAt,
      (SELECT COUNT(*) FROM enrollments WHERE userId = u.id AND paymentStatus = 'PAID') as enrollmentCount,
      (SELECT COUNT(*) FROM exercise_submissions WHERE userId = u.id) as exerciseCount
    FROM users u
    ORDER BY u.createdAt DESC
  `).all();

  return jsonResponse({ users });
}
