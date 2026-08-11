import { z } from 'zod';

// ===== Auth Schemas =====

export const sendOtpSchema = z.object({
  phone: z.string()
    .regex(/^09\d{9}$/, 'شماره موبایل معتبر نیست. مثال: 09121234567'),
});

export const verifyOtpSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/),
  code: z.string().length(5, 'کد تأیید باید ۵ رقمی باشد'),
  firstName: z.string().min(1, 'نام الزامی است').max(100),
  lastName: z.string().min(1, 'نام خانوادگی الزامی است').max(100),
});

export const loginSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/, 'شماره موبایل معتبر نیست'),
  registrationCode: z.string().min(1, 'کد ثبت‌نام الزامی است'),
});

// ===== Course Schemas =====

export const createCourseSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().min(1),
  longDescription: z.string().min(1),
  instructor: z.string().min(1).max(100),
  level: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  price: z.number().int().min(0),
  status: z.enum(['DRAFT', 'UPCOMING', 'OPEN_FOR_REGISTRATION', 'CLOSED', 'ARCHIVED']).optional(),
  sessionsCount: z.number().int().min(0).optional(),
  imageUrl: z.string().optional(),
});

export const updateCourseSchema = createCourseSchema.partial();

// ===== Support Schema =====

export const supportMessageSchema = z.object({
  message: z.string().min(1, 'پیام نمی‌تواند خالی باشد').max(2000),
});

// ===== Exercise Schema =====

export const exerciseSubmitSchema = z.object({
  title: z.string().min(1).max(200),
});

// ===== AI Config Schema =====

export const aiConfigSchema = z.object({
  systemPrompt: z.string().min(1),
  model: z.string().min(1),
  temperature: z.number().min(0).max(2),
  maxTokens: z.number().int().min(1).max(8192),
});

// ===== Settings Schema =====

export const settingsSchema = z.object({
  key: z.string().min(1),
  value: z.string().min(1),
});

// ===== Knowledge Document Schema =====

export const knowledgeDocSchema = z.object({
  type: z.enum(['LESSON', 'FAQ', 'NOTES', 'PDF']),
  title: z.string().min(1).max(200),
  content: z.string().min(1),
});

// ===== Helper: Validate Request Body =====
export async function validateBody<T>(
  request: Request,
  schema: z.ZodSchema<T>
): Promise<{ data: T; error: null } | { data: null; error: string }> {
  try {
    const body = await request.json();
    const data = schema.parse(body);
    return { data, error: null };
  } catch (err) {
    if (err instanceof z.ZodError) {
      const messages = err.issues.map((e: z.ZodIssue) => e.message).join('، ');
      return { data: null, error: messages };
    }
    return { data: null, error: 'داده ارسال شده نامعتبر است.' };
  }
}
