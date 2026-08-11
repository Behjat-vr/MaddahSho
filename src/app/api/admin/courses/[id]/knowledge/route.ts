import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse, errorResponse } from '@/lib/auth';
import { validateBody, knowledgeDocSchema } from '@/lib/validation';
import { v4 as uuidv4 } from 'uuid';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { id: courseId } = await params;
  const { data, error } = await validateBody(req, knowledgeDocSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  const docId = uuidv4();
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO knowledge_documents (id, courseId, type, title, content, createdAt)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(docId, courseId, data.type, data.title, data.content, now);

  const document = db.prepare('SELECT * FROM knowledge_documents WHERE id = ?').get(docId);
  return jsonResponse({ document }, 201);
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { id: courseId } = await params;
  const docs = db.prepare('SELECT * FROM knowledge_documents WHERE courseId = ? ORDER BY createdAt DESC').all(courseId);

  return jsonResponse({ documents: docs });
}
