import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, checkEnrollment, jsonResponse, unauthorizedResponse, errorResponse } from '@/lib/auth';
import { validateBody, supportMessageSchema } from '@/lib/validation';
import { chatCompletion, buildSystemPrompt } from '@/lib/ai';
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_QUOTA_FREE = 3;
const DEFAULT_QUOTA_ENROLLED = 5;

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const { id: courseId } = await params;
  const { data, error } = await validateBody(req, supportMessageSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  const course = db.prepare('SELECT * FROM courses WHERE id = ?').get(courseId) as { title: string } | undefined;
  if (!course) return errorResponse('دوره یافت نشد.', 404);

  const isEnrolled = await checkEnrollment(user.id, courseId);
  const qSetting = db.prepare(
    'SELECT value FROM system_settings WHERE key = ?'
  ).get(isEnrolled ? 'support_quota_enrolled' : 'support_quota_free') as { value: string } | undefined;

  const maxMessages = qSetting ? parseInt(qSetting.value) : (isEnrolled ? DEFAULT_QUOTA_ENROLLED : DEFAULT_QUOTA_FREE);

  let convo = db.prepare('SELECT * FROM support_conversations WHERE userId = ? AND courseId = ?').get(user.id, courseId) as { id: string; messagesUsed: number } | undefined;

  const now = new Date().toISOString();

  if (!convo) {
    const convoId = uuidv4();
    db.prepare('INSERT INTO support_conversations (id, userId, courseId, messagesUsed, createdAt) VALUES (?, ?, ?, 0, ?)').run(convoId, user.id, courseId, now);
    convo = { id: convoId, messagesUsed: 0 };
  }

  if (convo.messagesUsed >= maxMessages) {
    return errorResponse('سهمیه پیام شما به پایان رسیده است.', 429);
  }

  const userMsgId = uuidv4();
  db.prepare('INSERT INTO support_messages (id, conversationId, role, content, createdAt) VALUES (?, ?, "user", ?, ?)').run(userMsgId, convo.id, data.message, now);

  const prevMsgs = db.prepare('SELECT role, content FROM support_messages WHERE conversationId = ? ORDER BY createdAt ASC').all(convo.id) as Array<{ role: 'user' | 'assistant'; content: string }>;

  const aiConf = db.prepare('SELECT * FROM course_ai_configs WHERE courseId = ?').get(courseId) as { systemPrompt: string; model: string; temperature: number; maxTokens: number } | undefined;

  const systemPrompt = buildSystemPrompt(course.title, aiConf?.systemPrompt);

  const docs = db.prepare('SELECT title, content FROM knowledge_documents WHERE courseId = ? LIMIT 5').all(courseId) as Array<{ title: string; content: string }>;
  const kContext = docs.length > 0
    ? `\n\nمحتوای دوره:\n${docs.map(d => `--- ${d.title} ---\n${d.content}`).join('\n\n')}`
    : '';

  const llmMessages = [
    { role: 'system' as const, content: systemPrompt + kContext },
    ...prevMsgs,
  ];

  const aiResponse = await chatCompletion(
    llmMessages,
    aiConf?.model || 'gpt-4o-mini',
    aiConf?.temperature || 0.7,
    aiConf?.maxTokens || 1024
  );

  const aiMsgId = uuidv4();
  const aiNow = new Date().toISOString();
  db.prepare('INSERT INTO support_messages (id, conversationId, role, content, createdAt) VALUES (?, ?, "assistant", ?, ?)').run(aiMsgId, convo.id, aiResponse.content, aiNow);

  db.prepare('UPDATE support_conversations SET messagesUsed = messagesUsed + 1 WHERE id = ?').run(convo.id);

  return jsonResponse({
    message: {
      id: aiMsgId,
      role: 'assistant',
      content: aiResponse.content,
      createdAt: aiNow,
    },
    messagesUsed: convo.messagesUsed + 1,
    maxMessages,
    remaining: maxMessages - convo.messagesUsed - 1,
  });
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const { id: courseId } = await params;

  const isEnrolled = await checkEnrollment(user.id, courseId);
  const qSetting = db.prepare('SELECT value FROM system_settings WHERE key = ?').get(isEnrolled ? 'support_quota_enrolled' : 'support_quota_free') as { value: string } | undefined;
  const maxMessages = qSetting ? parseInt(qSetting.value) : (isEnrolled ? DEFAULT_QUOTA_ENROLLED : DEFAULT_QUOTA_FREE);

  const convo = db.prepare('SELECT * FROM support_conversations WHERE userId = ? AND courseId = ?').get(user.id, courseId) as { id: string; messagesUsed: number } | undefined;

  const msgs = convo
    ? db.prepare('SELECT id, role, content, createdAt FROM support_messages WHERE conversationId = ? ORDER BY createdAt ASC').all(convo.id)
    : [];

  return jsonResponse({
    messages: msgs,
    messagesUsed: convo?.messagesUsed || 0,
    maxMessages,
    remaining: maxMessages - (convo?.messagesUsed || 0),
  });
}
