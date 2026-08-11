import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, errorResponse } from '@/lib/auth';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; exId: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const { exId } = await params;

  const exercise = db.prepare('SELECT * FROM exercise_submissions WHERE id = ? AND userId = ?').get(exId, user.id) as {
    id: string; title: string; audioUrl?: string; duration: number; score?: number; status: string; createdAt: string;
  } | undefined;

  if (!exercise) {
    return errorResponse('تمرین یافت نشد.', 404);
  }

  const ana = db.prepare('SELECT * FROM exercise_analyses WHERE exerciseId = ?').get(exId) as {
    overallScore: number; strengthsJson: string; improvementsJson: string; detailsJson: string; aiRecommendation: string; nextExercise: string;
  } | undefined;

  return jsonResponse({
    exercise: {
      ...exercise,
      analysis: ana ? {
        overallScore: ana.overallScore,
        strengths: JSON.parse(ana.strengthsJson),
        improvements: JSON.parse(ana.improvementsJson),
        details: JSON.parse(ana.detailsJson),
        aiRecommendation: ana.aiRecommendation,
        nextExercise: ana.nextExercise,
      } : null,
    },
  });
}
