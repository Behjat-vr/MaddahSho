import { NextRequest } from 'next/server';
import db from '@/lib/db';
import { verifyPayment } from '@/lib/zarinpal';
import { redirect } from 'next/navigation';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const authority = searchParams.get('Authority');
  const status = searchParams.get('Status');
  const courseId = searchParams.get('courseId');

  if (!authority || !courseId) {
    return redirect('/courses?payment=error');
  }

  const enrollment = db.prepare(`
    SELECT e.*, c.price FROM enrollments e
    JOIN courses c ON e.courseId = c.id
    WHERE e.paymentAuthority = ?
  `).get(authority) as { id: string; price: number } | undefined;

  if (!enrollment) {
    return redirect('/courses?payment=error');
  }

  if (status !== 'OK') {
    db.prepare('UPDATE enrollments SET paymentStatus = "FAILED" WHERE id = ?').run(enrollment.id);
    return redirect(`/courses/${courseId}?payment=failed`);
  }

  const result = await verifyPayment(authority, enrollment.price);

  if (result.success) {
    db.prepare('UPDATE enrollments SET paymentStatus = "PAID", paymentRefId = ? WHERE id = ?').run(result.refId || 'PAID', enrollment.id);
    return redirect(`/courses/${courseId}?payment=success`);
  } else {
    db.prepare('UPDATE enrollments SET paymentStatus = "FAILED" WHERE id = ?').run(enrollment.id);
    return redirect(`/courses/${courseId}?payment=failed`);
  }
}
