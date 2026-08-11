import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse } from '@/lib/auth';
import { validateBody, createCourseSchema } from '@/lib/validation';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const isAdmin = user.role === 'ADMIN';

  const coursesQuery = isAdmin
    ? 'SELECT * FROM courses ORDER BY createdAt DESC'
    : 'SELECT * FROM courses WHERE status != "DRAFT" ORDER BY createdAt DESC';

  const courses = db.prepare(coursesQuery).all() as Array<{
    id: string; title: string; description: string; longDescription: string;
    instructor: string; level: string; price: number; status: string;
    sessionsCount: number; imageUrl?: string; createdAt: string;
  }>;

  const getLessons = db.prepare('SELECT id, title, description, orderNum as "order", duration FROM lessons WHERE courseId = ? ORDER BY orderNum ASC');
  const getEnrollmentCount = db.prepare('SELECT COUNT(*) as count FROM enrollments WHERE courseId = ? AND paymentStatus = "PAID"');
  const getUserEnrollment = db.prepare('SELECT progress FROM enrollments WHERE userId = ? AND courseId = ? AND paymentStatus = "PAID"');

  const result = courses.map(c => {
    const lessons = getLessons.all(c.id);
    const enrollmentCount = (getEnrollmentCount.get(c.id) as { count: number }).count;
    const userEnrollment = getUserEnrollment.get(user.id, c.id) as { progress: number } | undefined;

    return {
      ...c,
      lessons,
      enrollmentCount,
      isEnrolled: !!userEnrollment,
      progress: userEnrollment?.progress || 0,
    };
  });

  return jsonResponse({ courses: result });
}

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { data, error } = await validateBody(req, createCourseSchema);
  if (error || !data) return jsonResponse({ error: error || 'داده ارسال شده نامعتبر است.' }, 400);

  const courseId = uuidv4();
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO courses (id, title, description, longDescription, instructor, level, price, status, sessionsCount, imageUrl, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    courseId, data.title, data.description, data.longDescription,
    data.instructor, data.level, data.price, data.status || 'DRAFT',
    data.sessionsCount || 0, data.imageUrl || null, now
  );

  db.prepare(`
    INSERT INTO course_ai_configs (id, courseId, systemPrompt, model, temperature, maxTokens)
    VALUES (?, ?, ?, 'gpt-4o-mini', 0.7, 1024)
  `).run(uuidv4(), courseId, `تو دستیار آموزشی دوره «${data.title}» در پلتفرم مداح شو هستی.`);

  const course = db.prepare('SELECT * FROM courses WHERE id = ?').get(courseId);
  return jsonResponse({ course }, 201);
}
