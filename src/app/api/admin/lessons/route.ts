import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse, errorResponse } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  try {
    const body = await req.json() as { courseId?: string; title?: string; description?: string; duration?: string; order?: number };
    const { courseId, title, description, duration, order } = body;

    if (!courseId || !title) {
      return errorResponse('شناسه دوره و عنوان جلسه الزامی است.', 400);
    }

    const id = uuidv4();
    const orderNum = order || 1;

    db.prepare(`
      INSERT INTO lessons (id, courseId, title, description, orderNum, duration)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, courseId, title, description || '', orderNum, duration || '15 دقیقه');

    // Update course sessions count
    db.prepare(`
      UPDATE courses SET sessionsCount = (SELECT COUNT(*) FROM lessons WHERE courseId = ?) WHERE id = ?
    `).run(courseId, courseId);

    const lesson = db.prepare('SELECT id, title, description, orderNum as "order", duration FROM lessons WHERE id = ?').get(id);
    return jsonResponse({ lesson }, 201);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'خطای سرور';
    return errorResponse(message, 500);
  }
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) return errorResponse('شناسه جلسه الزامی است.', 400);

    const lesson = db.prepare('SELECT courseId FROM lessons WHERE id = ?').get(id) as { courseId: string } | undefined;
    if (lesson) {
      db.prepare('DELETE FROM lessons WHERE id = ?').run(id);
      db.prepare(`
        UPDATE courses SET sessionsCount = (SELECT COUNT(*) FROM lessons WHERE courseId = ?) WHERE id = ?
      `).run(lesson.courseId, lesson.courseId);
    }

    return jsonResponse({ message: 'جلسه حذف شد.' });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'خطای سرور';
    return errorResponse(message, 500);
  }
}
