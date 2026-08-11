import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse, errorResponse } from '@/lib/auth';
import { validateBody, aiConfigSchema } from '@/lib/validation';
import { v4 as uuidv4 } from 'uuid';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { id: courseId } = await params;
  const { data, error } = await validateBody(req, aiConfigSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  const existing = db.prepare('SELECT id FROM course_ai_configs WHERE courseId = ?').get(courseId);

  if (existing) {
    db.prepare(`
      UPDATE course_ai_configs
      SET systemPrompt = ?, model = ?, temperature = ?, maxTokens = ?
      WHERE courseId = ?
    `).run(data.systemPrompt, data.model, data.temperature, data.maxTokens, courseId);
  } else {
    db.prepare(`
      INSERT INTO course_ai_configs (id, courseId, systemPrompt, model, temperature, maxTokens)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(uuidv4(), courseId, data.systemPrompt, data.model, data.temperature, data.maxTokens);
  }

  const config = db.prepare('SELECT * FROM course_ai_configs WHERE courseId = ?').get(courseId);
  return jsonResponse({ config });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { id: courseId } = await params;
  const config = db.prepare('SELECT * FROM course_ai_configs WHERE courseId = ?').get(courseId);

  return jsonResponse({ config });
}
