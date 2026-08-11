import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse } from '@/lib/auth';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const userCount = (db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number }).count;
  const courseCount = (db.prepare('SELECT COUNT(*) as count FROM courses').get() as { count: number }).count;
  const exerciseCount = (db.prepare('SELECT COUNT(*) as count FROM exercise_submissions').get() as { count: number }).count;
  const enrollmentCount = (db.prepare('SELECT COUNT(*) as count FROM enrollments WHERE paymentStatus = "PAID"').get() as { count: number }).count;
  const conversationCount = (db.prepare('SELECT COUNT(*) as count FROM support_conversations').get() as { count: number }).count;
  const totalMessages = (db.prepare('SELECT COUNT(*) as count FROM support_messages').get() as { count: number }).count;

  const recentExercises = db.prepare(`
    SELECT e.id, e.title, e.score, e.status, e.createdAt, u.firstName || ' ' || u.lastName as userName, c.title as courseName
    FROM exercise_submissions e
    JOIN users u ON e.userId = u.id
    JOIN courses c ON e.courseId = c.id
    ORDER BY e.createdAt DESC LIMIT 10
  `).all();

  const recentEnrollments = db.prepare(`
    SELECT e.id, e.enrolledAt, u.firstName || ' ' || u.lastName as userName, c.title as courseName, c.price
    FROM enrollments e
    JOIN users u ON e.userId = u.id
    JOIN courses c ON e.courseId = c.id
    WHERE e.paymentStatus = 'PAID'
    ORDER BY e.enrolledAt DESC LIMIT 10
  `).all() as Array<{ price: number }>;

  const totalRevenue = recentEnrollments.reduce((sum, e) => sum + e.price, 0);

  return jsonResponse({
    stats: {
      users: userCount,
      courses: courseCount,
      exercises: exerciseCount,
      enrollments: enrollmentCount,
      aiConversations: conversationCount,
      aiMessages: totalMessages,
      totalRevenue,
    },
    recentExercises,
    recentEnrollments,
  });
}
