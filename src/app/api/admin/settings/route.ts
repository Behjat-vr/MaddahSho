import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, forbiddenResponse, errorResponse } from '@/lib/auth';
import { validateBody, settingsSchema } from '@/lib/validation';

export async function PUT(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const { data, error } = await validateBody(req, settingsSchema);
  if (error || !data) return errorResponse(error || 'داده ارسال شده نامعتبر است.');

  db.prepare('INSERT OR REPLACE INTO system_settings (key, value) VALUES (?, ?)').run(data.key, data.value);

  const setting = db.prepare('SELECT * FROM system_settings WHERE key = ?').get(data.key);
  return jsonResponse({ setting });
}

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();
  if (user.role !== 'ADMIN') return forbiddenResponse();

  const settings = db.prepare('SELECT * FROM system_settings').all() as Array<{ key: string; value: string }>;

  return jsonResponse({
    settings: settings.reduce((acc, s) => {
      acc[s.key] = s.value;
      return acc;
    }, {} as Record<string, string>),
  });
}
