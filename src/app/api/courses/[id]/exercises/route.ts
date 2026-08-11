import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, checkEnrollment, jsonResponse, unauthorizedResponse, errorResponse, forbiddenResponse } from '@/lib/auth';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const { id: courseId } = await params;

  const enrollment = await checkEnrollment(user.id, courseId);
  if (!enrollment) return forbiddenResponse();

  const formData = await req.formData();
  const title = formData.get('title') as string;
  const audioFile = formData.get('audio') as File | null;

  if (!title) return errorResponse('عنوان تمرین الزامی است.');

  let audioUrl: string | null = null;
  let duration = 0;

  if (audioFile) {
    const allowed = ['audio/mpeg', 'audio/wav', 'audio/mp4', 'audio/ogg', 'audio/x-m4a'];
    if (!allowed.includes(audioFile.type)) {
      return errorResponse('فرمت فایل مجاز نیست. فرمت‌های مجاز: MP3, WAV, M4A, OGG');
    }

    if (audioFile.size > 50 * 1024 * 1024) {
      return errorResponse('حداکثر حجم فایل ۵۰ مگابایت است.');
    }

    const ext = audioFile.name.split('.').pop() || 'mp3';
    const filename = `${uuidv4()}.${ext}`;
    const uploadsDir = path.join(process.cwd(), 'uploads', 'exercises');
    await mkdir(uploadsDir, { recursive: true });

    const buffer = Buffer.from(await audioFile.arrayBuffer());
    await writeFile(path.join(uploadsDir, filename), buffer);
    audioUrl = `/uploads/exercises/${filename}`;
    duration = Math.round(audioFile.size / 16000);
  }

  const exId = uuidv4();
  const now = new Date().toISOString();

  db.prepare(`
    INSERT INTO exercise_submissions (id, userId, courseId, title, audioUrl, duration, score, status, createdAt)
    VALUES (?, ?, ?, ?, ?, ?, NULL, 'PENDING', ?)
  `).run(exId, user.id, courseId, title, audioUrl, duration, now);

  // Background analysis simulation
  setTimeout(() => {
    try {
      const mockScore = Math.floor(Math.random() * 30) + 60;
      db.prepare('UPDATE exercise_submissions SET status = "COMPLETED", score = ? WHERE id = ?').run(mockScore, exId);

      db.prepare(`
        INSERT INTO exercise_analyses (id, exerciseId, overallScore, strengthsJson, improvementsJson, detailsJson, aiRecommendation, nextExercise, createdAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        uuidv4(),
        exId,
        mockScore,
        JSON.stringify([
          'وضوح صدا در بخش‌های ابتدایی قابل قبول است',
          'ریتم کلی اجرا مناسب بود',
          'کنترل تنفس نسبت به تمرین قبلی بهبود یافته',
        ]),
        JSON.stringify([
          'در بخش‌های بالا صدا کمی ناپایدار می‌شود',
          'نیاز به تمرین بیشتر برای انتقال بین اوج و فرود',
        ]),
        JSON.stringify([
          { label: 'وضوح صدا', score: Math.floor(Math.random() * 20) + 70, maxScore: 100 },
          { label: 'ریتم', score: Math.floor(Math.random() * 25) + 65, maxScore: 100 },
          { label: 'کنترل تنفس', score: Math.floor(Math.random() * 30) + 55, maxScore: 100 },
          { label: 'شدت صدا', score: Math.floor(Math.random() * 20) + 60, maxScore: 100 },
          { label: 'ثبات اجرا', score: Math.floor(Math.random() * 25) + 60, maxScore: 100 },
        ]),
        'عملکرد شما نسبت به تمرین‌های قبلی بهبود یافته است. پیشنهاد می‌کنم روی تمرینات تنفسی بیشتر تمرکز کنید و از تکنیک‌های کنترل دیافراگم استفاده کنید.',
        'تمرین تنفس دیافراگمی',
        new Date().toISOString()
      );
    } catch (err) {
      console.error('Analysis error:', err);
      db.prepare('UPDATE exercise_submissions SET status = "FAILED" WHERE id = ?').run(exId);
    }
  }, 3000);

  return jsonResponse({
    exercise: {
      id: exId,
      title,
      status: 'PENDING',
      createdAt: now,
    },
    message: 'تمرین ارسال شد و در حال تحلیل است.',
  }, 201);
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const { id: courseId } = await params;

  const enrollment = await checkEnrollment(user.id, courseId);
  if (!enrollment) return forbiddenResponse();

  const exercises = db.prepare('SELECT * FROM exercise_submissions WHERE userId = ? AND courseId = ? ORDER BY createdAt DESC').all(user.id, courseId) as Array<{
    id: string; title: string; audioUrl?: string; duration: number; score?: number; status: string; createdAt: string;
  }>;

  const getAnalysis = db.prepare('SELECT * FROM exercise_analyses WHERE exerciseId = ?');

  const result = exercises.map(e => {
    const ana = getAnalysis.get(e.id) as {
      overallScore: number; strengthsJson: string; improvementsJson: string; detailsJson: string; aiRecommendation: string; nextExercise: string;
    } | undefined;

    return {
      ...e,
      analysis: ana ? {
        overallScore: ana.overallScore,
        strengths: JSON.parse(ana.strengthsJson),
        improvements: JSON.parse(ana.improvementsJson),
        details: JSON.parse(ana.detailsJson),
        aiRecommendation: ana.aiRecommendation,
        nextExercise: ana.nextExercise,
      } : null,
    };
  });

  return jsonResponse({ exercises: result });
}
