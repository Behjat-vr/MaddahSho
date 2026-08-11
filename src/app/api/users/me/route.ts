import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse } from '@/lib/auth';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const enrollments = db.prepare(`
    SELECT e.id, e.courseId, e.progress, e.enrolledAt, c.title as courseTitle
    FROM enrollments e
    JOIN courses c ON e.courseId = c.id
    WHERE e.userId = ? AND e.paymentStatus = 'PAID'
  `).all(user.id) as Array<{ id: string; courseId: string; progress: number; enrolledAt: string; courseTitle: string }>;

  const exCount = (db.prepare('SELECT COUNT(*) as count FROM exercise_submissions WHERE userId = ?').get(user.id) as { count: number }).count;

  return jsonResponse({
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      registrationCode: user.registrationCode,
      role: user.role,
      createdAt: user.createdAt,
    },
    enrollments: enrollments.map(e => ({
      id: e.id,
      courseId: e.courseId,
      courseTitle: e.courseTitle,
      progress: e.progress,
      enrolledAt: e.enrolledAt,
    })),
    stats: {
      enrolledCourses: enrollments.length,
      totalExercises: exCount,
    },
  });
}
