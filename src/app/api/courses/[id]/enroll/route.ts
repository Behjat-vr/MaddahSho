import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { getCurrentUser, jsonResponse, unauthorizedResponse, errorResponse } from '@/lib/auth';
import { createPaymentRequest } from '@/lib/zarinpal';
import { v4 as uuidv4 } from 'uuid';

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await getCurrentUser();
  if (!user) return unauthorizedResponse();

  const { id: courseId } = await params;

  const course = db.prepare('SELECT * FROM courses WHERE id = ?').get(courseId) as {
    id: string; title: string; price: number; status: string;
  } | undefined;

  if (!course) return errorResponse('دوره یافت نشد.', 404);
  if (course.status !== 'OPEN_FOR_REGISTRATION') {
    return errorResponse('ثبت‌نام در این دوره فعلاً امکان‌پذیر نیست.');
  }

  const existing = db.prepare(
    'SELECT * FROM enrollments WHERE userId = ? AND courseId = ?'
  ).get(user.id, courseId) as { paymentStatus: string } | undefined;

  if (existing?.paymentStatus === 'PAID') {
    return errorResponse('شما قبلاً در این دوره ثبت‌نام کرده‌اید.');
  }

  const now = new Date().toISOString();

  // Free course
  if (course.price === 0) {
    if (existing) {
      db.prepare('UPDATE enrollments SET paymentStatus = "PAID", paymentRefId = "FREE" WHERE userId = ? AND courseId = ?').run(user.id, courseId);
    } else {
      db.prepare(`
        INSERT INTO enrollments (id, userId, courseId, progress, enrolledAt, paymentRefId, paymentStatus)
        VALUES (?, ?, ?, 0, ?, 'FREE', 'PAID')
      `).run(uuidv4(), user.id, courseId, now);
    }

    return jsonResponse({
      message: 'ثبت‌نام موفق!',
      isEnrolled: true,
    });
  }

  // Paid course
  const payment = await createPaymentRequest(
    course.price,
    `ثبت‌نام دوره «${course.title}» — مداح شو`,
    undefined,
    user.phone,
    `${process.env.ZARINPAL_CALLBACK_URL}?courseId=${courseId}`,
  );

  if (!payment) {
    return errorResponse('خطا در ایجاد درخواست پرداخت. لطفاً دوباره تلاش کنید.', 500);
  }

  if (existing) {
    db.prepare('UPDATE enrollments SET paymentStatus = "PENDING", paymentAuthority = ? WHERE userId = ? AND courseId = ?').run(payment.authority, user.id, courseId);
  } else {
    db.prepare(`
      INSERT INTO enrollments (id, userId, courseId, progress, enrolledAt, paymentAuthority, paymentStatus)
      VALUES (?, ?, ?, 0, ?, ?, 'PENDING')
    `).run(uuidv4(), user.id, courseId, now, payment.authority);
  }

  return jsonResponse({
    paymentUrl: payment.paymentUrl,
    authority: payment.authority,
  });
}
