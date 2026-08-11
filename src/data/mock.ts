import type { Course, User, Enrollment, ExerciseSubmission, SupportConversation, ExerciseAnalysisResult } from '@/types';

// ===== Mock User =====
export const mockUser: User = {
  id: 'u1',
  firstName: 'محمدحسین',
  lastName: 'رضایی',
  phone: '09121234567',
  registrationCode: 'MDH-7K42-X9',
  role: 'USER',
  createdAt: '2025-06-15T10:00:00Z',
};

export const mockAdmin: User = {
  id: 'admin1',
  firstName: 'مدیر',
  lastName: 'سیستم',
  phone: '09109876543',
  registrationCode: 'MDH-ADMN-01',
  role: 'ADMIN',
  createdAt: '2025-01-01T00:00:00Z',
};

// ===== Mock Courses =====
export const mockCourses: Course[] = [
  {
    id: 'c1',
    title: 'اصول صداسازی در مداحی',
    description: 'یادگیری تکنیک‌های پایه‌ای صداسازی، تنفس صحیح و کنترل صدا برای مداحی حرفه‌ای',
    longDescription: 'در این دوره جامع، شما با اصول بنیادین صداسازی در مداحی آشنا خواهید شد. از تکنیک‌های تنفس دیافراگمی گرفته تا کنترل شدت صدا، مدیریت مکث‌ها و اجرای صحیح حرکات صوتی. این دوره برای افرادی طراحی شده که قصد دارند مسیر حرفه‌ای خود در مداحی را آغاز کنند.',
    instructor: 'استاد محمدرضا احمدی',
    level: 'BEGINNER',
    price: 890000,
    status: 'OPEN_FOR_REGISTRATION',
    sessionsCount: 12,
    imageUrl: '/images/course-1.jpg',
    createdAt: '2025-05-01T00:00:00Z',
    lessons: [
      { id: 'l1', courseId: 'c1', title: 'آشنایی با دستگاه صوتی', description: 'شناخت اجزای تولید صدا', order: 1, duration: '45 دقیقه' },
      { id: 'l2', courseId: 'c1', title: 'تنفس دیافراگمی', description: 'تمرینات تنفس صحیح', order: 2, duration: '50 دقیقه' },
      { id: 'l3', courseId: 'c1', title: 'گرم کردن صدا', description: 'تکنیک‌های وارم‌آپ صوتی', order: 3, duration: '40 دقیقه' },
      { id: 'l4', courseId: 'c1', title: 'کنترل شدت صدا', description: 'تمرین پیانو و فورته', order: 4, duration: '55 دقیقه' },
      { id: 'l5', courseId: 'c1', title: 'مدیریت مکث', description: 'هنر سکوت در مداحی', order: 5, duration: '35 دقیقه' },
      { id: 'l6', courseId: 'c1', title: 'ادای صحیح کلمات', description: 'تلفظ واضح و دقیق', order: 6, duration: '45 دقیقه' },
    ],
  },
  {
    id: 'c2',
    title: 'مقام‌شناسی و لحن در مداحی',
    description: 'آشنایی با مقامات اصلی موسیقایی و نحوه استفاده از آنها در مداحی',
    longDescription: 'مقام‌شناسی یکی از مهم‌ترین مهارت‌ها برای یک مداح حرفه‌ای است. در این دوره با مقامات پایه مانند بیات، حجاز، صبا و نهاوند آشنا شده و نحوه استفاده صحیح از هر مقام در انواع مراسم‌های مذهبی را فرا خواهید گرفت.',
    instructor: 'استاد علی محمدی',
    level: 'INTERMEDIATE',
    price: 1290000,
    status: 'OPEN_FOR_REGISTRATION',
    sessionsCount: 16,
    imageUrl: '/images/course-2.jpg',
    createdAt: '2025-06-01T00:00:00Z',
    lessons: [
      { id: 'l7', courseId: 'c2', title: 'مقدمه‌ای بر مقامات', description: 'آشنایی کلی با مفهوم مقام', order: 1, duration: '50 دقیقه' },
      { id: 'l8', courseId: 'c2', title: 'مقام بیات', description: 'شناخت و تمرین مقام بیات', order: 2, duration: '60 دقیقه' },
      { id: 'l9', courseId: 'c2', title: 'مقام حجاز', description: 'شناخت و تمرین مقام حجاز', order: 3, duration: '55 دقیقه' },
      { id: 'l10', courseId: 'c2', title: 'مقام صبا', description: 'شناخت و تمرین مقام صبا', order: 4, duration: '60 دقیقه' },
    ],
  },
  {
    id: 'c3',
    title: 'روضه‌خوانی حرفه‌ای',
    description: 'تکنیک‌های پیشرفته روضه‌خوانی، احساس‌رسانی و مدیریت مجلس',
    longDescription: 'روضه‌خوانی هنری است که ترکیبی از مهارت صوتی، ادبی و عاطفی می‌خواهد. در این دوره پیشرفته، تکنیک‌های احساس‌رسانی، مدیریت فضای مجلس، انتخاب متن مناسب و اجرای حرفه‌ای روضه را خواهید آموخت.',
    instructor: 'استاد حسین کریمی',
    level: 'ADVANCED',
    price: 1690000,
    status: 'CLOSED',
    sessionsCount: 20,
    imageUrl: '/images/course-3.jpg',
    createdAt: '2025-03-01T00:00:00Z',
    lessons: [
      { id: 'l11', courseId: 'c3', title: 'مبانی روضه‌خوانی', description: 'اصول اولیه', order: 1, duration: '45 دقیقه' },
      { id: 'l12', courseId: 'c3', title: 'انتخاب متن', description: 'معیارهای متن مناسب', order: 2, duration: '50 دقیقه' },
    ],
  },
  {
    id: 'c4',
    title: 'شعرخوانی و ادبیات مداحی',
    description: 'آشنایی با اوزان شعری، انتخاب اشعار مناسب و تکنیک‌های شعرخوانی',
    longDescription: 'ادبیات و شعر، ستون فقرات مداحی هستند. در این دوره با اوزان عروضی رایج در مداحی، نحوه انتخاب اشعار متناسب با مناسبت‌ها و تکنیک‌های شعرخوانی صحیح آشنا می‌شوید.',
    instructor: 'استاد رضا صادقی',
    level: 'BEGINNER',
    price: 690000,
    status: 'UPCOMING',
    sessionsCount: 10,
    imageUrl: '/images/course-4.jpg',
    createdAt: '2025-07-01T00:00:00Z',
    lessons: [],
  },
];

// ===== Mock Enrollments =====
export const mockEnrollments: Enrollment[] = [
  {
    id: 'e1',
    userId: 'u1',
    courseId: 'c1',
    enrolledAt: '2025-06-20T10:00:00Z',
    progress: 72,
  },
];

// ===== Mock Exercise Submissions =====
export const mockExercises: ExerciseSubmission[] = [
  {
    id: 'ex1',
    userId: 'u1',
    courseId: 'c1',
    title: 'تمرین تنفس دیافراگمی',
    audioUrl: '/audio/exercise-1.mp3',
    duration: 45,
    score: 64,
    analysis: {
      overallScore: 64,
      strengths: ['وضوح مناسب کلمات', 'سرعت قابل قبول'],
      improvements: ['کنترل تنفس', 'ثبات شدت صدا', 'مکث‌های بین جملات'],
      details: [
        { label: 'وضوح صدا', score: 72, maxScore: 100 },
        { label: 'ریتم', score: 58, maxScore: 100 },
        { label: 'کنترل تنفس', score: 55, maxScore: 100 },
        { label: 'شدت صدا', score: 68, maxScore: 100 },
        { label: 'ثبات اجرا', score: 60, maxScore: 100 },
      ],
      aiRecommendation: 'در بخش پایانی جمله، شدت صدایت افت می‌کند. قبل از شروع جمله بعدی یک دم عمیق‌تر و کنترل‌شده داشته باش.',
      nextExercise: 'تمرین کنترل مکث و تنفس',
    },
    status: 'COMPLETED',
    createdAt: '2025-06-25T14:00:00Z',
  },
  {
    id: 'ex2',
    userId: 'u1',
    courseId: 'c1',
    title: 'تمرین گرم کردن صدا',
    audioUrl: '/audio/exercise-2.mp3',
    duration: 62,
    score: 71,
    analysis: {
      overallScore: 71,
      strengths: ['وضوح مناسب کلمات', 'کنترل بهتر سرعت', 'شروع قوی'],
      improvements: ['کنترل تنفس در جملات بلند', 'ثبات شدت صدا'],
      details: [
        { label: 'وضوح صدا', score: 78, maxScore: 100 },
        { label: 'ریتم', score: 65, maxScore: 100 },
        { label: 'کنترل تنفس', score: 62, maxScore: 100 },
        { label: 'شدت صدا', score: 72, maxScore: 100 },
        { label: 'ثبات اجرا', score: 70, maxScore: 100 },
      ],
      aiRecommendation: 'پیشرفت خوبی داشتی! حالا روی حفظ شدت صدا در طول جملات بلندتر تمرکز کن.',
      nextExercise: 'تمرین شدت صدا',
    },
    status: 'COMPLETED',
    createdAt: '2025-07-02T10:00:00Z',
  },
  {
    id: 'ex3',
    userId: 'u1',
    courseId: 'c1',
    title: 'تمرین کنترل مکث',
    audioUrl: '/audio/exercise-3.mp3',
    duration: 38,
    score: 78,
    analysis: {
      overallScore: 78,
      strengths: ['مدیریت خوب مکث‌ها', 'وضوح عالی کلمات', 'بهبود قابل توجه ریتم'],
      improvements: ['کنترل تنفس در انتهای جملات'],
      details: [
        { label: 'وضوح صدا', score: 85, maxScore: 100 },
        { label: 'ریتم', score: 76, maxScore: 100 },
        { label: 'کنترل تنفس', score: 70, maxScore: 100 },
        { label: 'شدت صدا', score: 78, maxScore: 100 },
        { label: 'ثبات اجرا', score: 80, maxScore: 100 },
      ],
      aiRecommendation: 'عالی بود! مکث‌هایت خیلی بهتر شده. الان وقت تمرین ترکیبی تنفس و شدت صداست.',
      nextExercise: 'تمرین ترکیبی',
    },
    status: 'COMPLETED',
    createdAt: '2025-07-10T16:00:00Z',
  },
  {
    id: 'ex4',
    userId: 'u1',
    courseId: 'c1',
    title: 'تمرین شدت صدا',
    audioUrl: '/audio/exercise-4.mp3',
    duration: 55,
    score: 82,
    analysis: {
      overallScore: 82,
      strengths: ['کنترل عالی شدت صدا', 'وضوح بسیار خوب', 'اجرای صحیح تمرین', 'ریتم مناسب'],
      improvements: ['کنترل تنفس در عبارات طولانی'],
      details: [
        { label: 'وضوح صدا', score: 88, maxScore: 100 },
        { label: 'ریتم', score: 80, maxScore: 100 },
        { label: 'کنترل تنفس', score: 75, maxScore: 100 },
        { label: 'شدت صدا', score: 85, maxScore: 100 },
        { label: 'ثبات اجرا', score: 82, maxScore: 100 },
      ],
      aiRecommendation: 'برای تمرین بعدی، روی کنترل مکث بین جمله‌ها تمرکز کن. سعی کن قبل از هر جمله یک دم عمیق بگیری.',
      nextExercise: 'تمرین جامع صداسازی',
    },
    status: 'COMPLETED',
    createdAt: '2025-07-18T12:00:00Z',
  },
];

// ===== Mock Support Conversations =====
export const mockSupportConversation: SupportConversation = {
  id: 'sc1',
  userId: 'u1',
  courseId: 'c1',
  messagesUsed: 2,
  maxMessages: 5,
  messages: [
    {
      id: 'sm1',
      role: 'user',
      content: 'چطور می‌تونم تنفس دیافراگمی رو بهتر تمرین کنم؟',
      createdAt: '2025-07-01T10:00:00Z',
    },
    {
      id: 'sm2',
      role: 'assistant',
      content: 'برای تمرین تنفس دیافراگمی، این مراحل را دنبال کنید:\n\n۱. به پشت دراز بکشید و یک دست را روی سینه و دست دیگر را روی شکم بگذارید.\n\n۲. از بینی نفس عمیق بکشید. شکم شما باید بالا بیاید، نه سینه.\n\n۳. به آرامی از دهان بازدم کنید. سعی کنید بازدم دو برابر طول دم باشد.\n\n۴. این تمرین را روزانه ۱۰ دقیقه انجام دهید.\n\nنکته مهم: در مداحی، کنترل تنفس کلید حفظ ثبات صداست. تمرین منظم تنفس دیافراگمی باعث می‌شود بتوانید جملات طولانی‌تر را بدون افت شدت صدا اجرا کنید.',
      createdAt: '2025-07-01T10:00:05Z',
    },
    {
      id: 'sm3',
      role: 'user',
      content: 'وقتی صدام گرفته چکار کنم؟',
      createdAt: '2025-07-01T10:05:00Z',
    },
    {
      id: 'sm4',
      role: 'assistant',
      content: 'گرفتگی صدا معمولاً به دلایل مختلف رخ می‌دهد. طبق محتوای دوره، این توصیه‌ها را رعایت کنید:\n\n✅ آب ولرم بنوشید (نه سرد و نه داغ)\n✅ از صحبت کردن بلند و فریاد زدن خودداری کنید\n✅ استراحت صوتی داشته باشید (حداقل ۲-۳ ساعت سکوت)\n✅ از بخار آب استفاده کنید\n✅ قبل از تمرین حتماً صدا را گرم کنید\n\n⚠️ اگر گرفتگی بیش از ۳ روز ادامه داشت، حتماً به پزشک متخصص مراجعه کنید.\n\nدر جلسه سوم دوره (گرم کردن صدا) تکنیک‌های پیشگیری از آسیب صوتی به طور کامل توضیح داده شده است.',
      createdAt: '2025-07-01T10:05:10Z',
    },
  ],
  createdAt: '2025-07-01T09:55:00Z',
};

// ===== Mock AI Responses =====
export const mockAIResponses: Record<string, string> = {
  default: 'ممنون از سؤالت! بر اساس محتوای دوره، پاسخ شما این است...',
  outOfScope: 'این سؤال خارج از محتوای این دوره است. من فقط می‌توانم درباره مطالب همین دوره به شما کمک کنم.',
};

// ===== Mock All Users (Admin) =====
export const mockAllUsers: User[] = [
  mockUser,
  {
    id: 'u2',
    firstName: 'علی',
    lastName: 'محمدی',
    phone: '09131234567',
    registrationCode: 'MDH-8F31-Y2',
    role: 'USER',
    createdAt: '2025-06-18T08:00:00Z',
  },
  {
    id: 'u3',
    firstName: 'حسین',
    lastName: 'کریمی',
    phone: '09141234567',
    registrationCode: 'MDH-3D92-K7',
    role: 'USER',
    createdAt: '2025-06-22T12:00:00Z',
  },
  {
    id: 'u4',
    firstName: 'رضا',
    lastName: 'صادقی',
    phone: '09351234567',
    registrationCode: 'MDH-5R18-W4',
    role: 'USER',
    createdAt: '2025-07-01T09:00:00Z',
  },
  {
    id: 'u5',
    firstName: 'مهدی',
    lastName: 'حسینی',
    phone: '09161234567',
    registrationCode: 'MDH-2M77-P6',
    role: 'USER',
    createdAt: '2025-07-05T15:00:00Z',
  },
];

// ===== Helper: Format Price =====
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
}

// ===== Helper: Format Date =====
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// ===== Helper: Format Duration =====
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ===== Course Status Labels =====
export const courseStatusLabels: Record<string, string> = {
  DRAFT: 'پیش‌نویس',
  UPCOMING: 'به زودی',
  OPEN_FOR_REGISTRATION: 'ثبت‌نام باز است',
  CLOSED: 'ثبت‌نام بسته است',
  ARCHIVED: 'آرشیو شده',
};

export const courseLevelLabels: Record<string, string> = {
  BEGINNER: 'مقدماتی',
  INTERMEDIATE: 'متوسط',
  ADVANCED: 'پیشرفته',
};
