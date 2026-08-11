import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse, errorResponse } from '@/lib/auth';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { id } = await params;

  try {
    const body = await req.json();
    const { role } = body;

    if (role && ['USER', 'ADMIN'].includes(role)) {
      db.prepare('UPDATE users SET role = ? WHERE id = ?').run(role, id);
      return jsonResponse({ message: 'نقش کاربر به‌روزرسانی شد.' });
    }

    return errorResponse('نقش نامعتبر است.', 400);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'خطای سرور';
    return errorResponse(message, 500);
  }
}
