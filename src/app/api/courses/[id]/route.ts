import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, errorResponse, forbiddenResponse } from '@/lib/auth';
import { validateBody, updateCourseSchema } from '@/lib/validation';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const { id } = await params;

  const course = db.prepare('SELECT * FROM courses WHERE id = ?').get(id) as {
    id: string; title: string; description: string; longDescription: string;
    instructor: string; level: string; price: number; status: string;
    sessionsCount: number; imageUrl?: string; createdAt: string;
  } | undefined;

  if (!course) {
    return errorResponse('دوره یافت نشد.', 404);
  }

  const lessons = db.prepare('SELECT id, title, description, orderNum as "order", duration FROM lessons WHERE courseId = ? ORDER BY orderNum ASC').all(id);
  const enrollmentCount = (db.prepare('SELECT COUNT(*) as count FROM enrollments WHERE courseId = ? AND paymentStatus = "PAID"').get(id) as { count: number }).count;
  const enrollment = db.prepare('SELECT progress, enrolledAt FROM enrollments WHERE userId = ? AND courseId = ? AND paymentStatus = "PAID"').get(user.id, id) as { progress: number; enrolledAt: string } | undefined;

  return jsonResponse({
    course: {
      ...course,
      lessons,
      enrollmentCount,
    },
    enrollment: enrollment ? {
      progress: enrollment.progress,
      enrolledAt: enrollment.enrolledAt,
    } : null,
    isEnrolled: !!enrollment,
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { id } = await params;
  const { data, error } = await validateBody(req, updateCourseSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  const updates: string[] = [];
  const values: unknown[] = [];

  (Object.entries(data) as Array<[string, unknown]>).forEach(([key, val]) => {
    if (val !== undefined) {
      updates.push(`${key} = ?`);
      values.push(val);
    }
  });

  if (updates.length > 0) {
    values.push(id);
    db.prepare(`UPDATE courses SET ${updates.join(', ')} WHERE id = ?`).run(...values);
  }

  const course = db.prepare('SELECT * FROM courses WHERE id = ?').get(id);
  return jsonResponse({ course });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { id } = await params;
  db.prepare('UPDATE courses SET status = "ARCHIVED" WHERE id = ?').run(id);

  return jsonResponse({ message: 'دوره آرشیو شد.' });
}
