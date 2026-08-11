import db from './db';
import type { NextRequest } from 'next/server';
import { getSessionToken, verifyToken } from './jwt';

export * from './jwt';

export interface DBUser {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  registrationCode: string;
  role: string;
  createdAt: string;
}

// ===== Get Current User from Session =====
export async function getCurrentUser(): Promise<DBUser | null> {
  const token = await getSessionToken();
  if (!token) return null;

  const payload = await verifyToken(token);
  if (!payload) return null;

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(payload.userId) as DBUser | undefined;
  return user || null;
}

// ===== Get Current User from Request (for API routes) =====
export async function getUserFromRequest(req: NextRequest): Promise<DBUser | null> {
  const token = req.cookies.get('maddahshoo_session')?.value;
  if (!token) return null;

  const payload = await verifyToken(token);
  if (!payload) return null;

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(payload.userId) as DBUser | undefined;
  return user || null;
}

// ===== Check if user is enrolled in a course =====
export async function checkEnrollment(userId: string, courseId: string) {
  const enrollment = db.prepare(
    'SELECT * FROM enrollments WHERE userId = ? AND courseId = ? AND paymentStatus = "PAID"'
  ).get(userId, courseId);
  return enrollment || null;
}

// ===== Generate Registration Code =====
export function generateRegistrationCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const part1 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  const part2 = Array.from({ length: 2 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `MDH-${part1}-${part2}`;
}

// ===== Generate OTP Code =====
export function generateOTP(): string {
  return Math.floor(10000 + Math.random() * 90000).toString();
}

// ===== API Response Helpers =====
export function jsonResponse(data: unknown, status = 200) {
  return Response.json(data, { status });
}

export function errorResponse(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

export function unauthorizedResponse() {
  return errorResponse('دسترسی غیرمجاز. لطفاً وارد حساب خود شوید.', 401);
}

export function forbiddenResponse() {
  return errorResponse('شما اجازه دسترسی به این بخش را ندارید.', 403);
}
