// ===== Enums =====

export type CourseStatus = 'DRAFT' | 'UPCOMING' | 'OPEN_FOR_REGISTRATION' | 'CLOSED' | 'ARCHIVED';
export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type UserRole = 'USER' | 'ADMIN';
export type ExerciseStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
export type AccessLevel = 'PUBLIC' | 'REGISTERED' | 'ENROLLED' | 'ADMIN';

// ===== User =====

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  registrationCode: string;
  role: UserRole;
  createdAt: string;
}

// ===== Course =====

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  instructor: string;
  level: CourseLevel;
  price: number;
  status: CourseStatus;
  sessionsCount: number;
  imageUrl: string;
  createdAt: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  order: number;
  duration: string;
}

// ===== Enrollment =====

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  progress: number;
}

// ===== Exercise =====

export interface ExerciseSubmission {
  id: string;
  userId: string;
  courseId: string;
  title: string;
  audioUrl: string;
  duration: number;
  score: number | null;
  analysis: ExerciseAnalysisResult | null;
  status: ExerciseStatus;
  createdAt: string;
}

export interface ExerciseAnalysisResult {
  overallScore: number;
  strengths: string[];
  improvements: string[];
  details: AnalysisDetail[];
  aiRecommendation: string;
  nextExercise: string;
}

export interface AnalysisDetail {
  label: string;
  score: number;
  maxScore: number;
}

// ===== AI Support =====

export interface SupportConversation {
  id: string;
  userId: string;
  courseId: string;
  messagesUsed: number;
  maxMessages: number;
  messages: SupportMessage[];
  createdAt: string;
}

export interface SupportMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  createdAt: string;
}

// ===== Knowledge Base =====

export interface KnowledgeDocument {
  id: string;
  courseId: string;
  type: 'LESSON' | 'FAQ' | 'NOTES' | 'PDF';
  title: string;
  content: string;
  createdAt: string;
}

// ===== Notifications =====

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

// ===== System Settings =====

export interface SystemSetting {
  key: string;
  value: string;
  description: string;
}

// ===== AI Usage =====

export interface AIUsage {
  totalRequests: number;
  totalTokens: number;
  totalCost: number;
  exerciseAnalysisCount: number;
  uniqueUsers: number;
}

// ===== Admin Stats =====

export interface AdminStats {
  totalUsers: number;
  totalCourses: number;
  totalEnrollments: number;
  totalExercises: number;
  totalRevenue: number;
  aiUsage: AIUsage;
}
