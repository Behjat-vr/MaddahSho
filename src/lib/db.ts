import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'maddahshoo.db');
const db = new Database(dbPath);

// Enable WAL mode & foreign keys
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// ===== Initialize Schema =====
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    registrationCode TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL DEFAULT 'USER',
    createdAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS otps (
    id TEXT PRIMARY KEY,
    phone TEXT NOT NULL,
    code TEXT NOT NULL,
    expiresAt TEXT NOT NULL,
    used INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    longDescription TEXT NOT NULL,
    instructor TEXT NOT NULL,
    level TEXT NOT NULL DEFAULT 'BEGINNER',
    price INTEGER NOT NULL DEFAULT 0,
    status TEXT NOT NULL DEFAULT 'DRAFT',
    sessionsCount INTEGER NOT NULL DEFAULT 0,
    imageUrl TEXT,
    createdAt TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS lessons (
    id TEXT PRIMARY KEY,
    courseId TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    orderNum INTEGER NOT NULL,
    duration TEXT NOT NULL,
    FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS enrollments (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    courseId TEXT NOT NULL,
    progress INTEGER NOT NULL DEFAULT 0,
    enrolledAt TEXT NOT NULL,
    paymentAuthority TEXT,
    paymentRefId TEXT,
    paymentStatus TEXT NOT NULL DEFAULT 'PENDING',
    UNIQUE(userId, courseId),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS exercise_submissions (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    courseId TEXT NOT NULL,
    title TEXT NOT NULL,
    audioUrl TEXT,
    duration INTEGER NOT NULL DEFAULT 0,
    score INTEGER,
    status TEXT NOT NULL DEFAULT 'PENDING',
    createdAt TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS exercise_analyses (
    id TEXT PRIMARY KEY,
    exerciseId TEXT UNIQUE NOT NULL,
    overallScore INTEGER NOT NULL,
    strengthsJson TEXT NOT NULL,
    improvementsJson TEXT NOT NULL,
    detailsJson TEXT NOT NULL,
    aiRecommendation TEXT NOT NULL,
    nextExercise TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    FOREIGN KEY (exerciseId) REFERENCES exercise_submissions(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS support_conversations (
    id TEXT PRIMARY KEY,
    userId TEXT NOT NULL,
    courseId TEXT NOT NULL,
    messagesUsed INTEGER NOT NULL DEFAULT 0,
    createdAt TEXT NOT NULL,
    UNIQUE(userId, courseId),
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS support_messages (
    id TEXT PRIMARY KEY,
    conversationId TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    FOREIGN KEY (conversationId) REFERENCES support_conversations(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS knowledge_documents (
    id TEXT PRIMARY KEY,
    courseId TEXT NOT NULL,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt TEXT NOT NULL,
    FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS course_ai_configs (
    id TEXT PRIMARY KEY,
    courseId TEXT UNIQUE NOT NULL,
    systemPrompt TEXT NOT NULL,
    model TEXT NOT NULL DEFAULT 'gpt-4o-mini',
    temperature REAL NOT NULL DEFAULT 0.7,
    maxTokens INTEGER NOT NULL DEFAULT 1024,
    FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS system_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT DEFAULT ''
  );
`);

// ===== Seed Initial Data using INSERT OR IGNORE =====
const now = new Date().toISOString();

// Admin user
db.prepare(`
  INSERT OR IGNORE INTO users (id, firstName, lastName, phone, registrationCode, role, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`).run('u-admin', 'مدیر', 'سیستم', '09120000000', 'MDH-ADMIN-01', 'ADMIN', now);

// Test user
db.prepare(`
  INSERT OR IGNORE INTO users (id, firstName, lastName, phone, registrationCode, role, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`).run('u-test', 'محمدحسین', 'رضایی', '09121234567', 'MDH-TEST-01', 'USER', now);

// Course 1
db.prepare(`
  INSERT OR IGNORE INTO courses (id, title, description, longDescription, instructor, level, price, status, sessionsCount, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  'c1',
  'مبانی صداسازی مداحی',
  'آموزش پایه‌ای تکنیک‌های صداسازی و کنترل صدا برای مداحی.',
  'در این دوره شما با اصول اساسی صداسازی آشنا می‌شوید. از نفس‌گیری صحیح تا کنترل دیافراگم، از تنظیم تن صدا تا تقویت رزونانس. هر جلسه شامل تمرین‌های عملی و بازخورد هوشمند است.',
  'استاد محمدرضا حسینی',
  'BEGINNER',
  490000,
  'OPEN_FOR_REGISTRATION',
  12,
  now
);

// Course 2
db.prepare(`
  INSERT OR IGNORE INTO courses (id, title, description, longDescription, instructor, level, price, status, sessionsCount, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  'c2',
  'مقامات و لحن‌شناسی',
  'شناخت مقامات مختلف موسیقایی و کاربرد آن‌ها در مداحی.',
  'در این دوره پیشرفته، مقامات مختلف موسیقایی مانند بیات، صبا، حجاز و رست را یاد می‌گیرید. هر مقام با مثال‌های عملی از اساتید بزرگ مداحی تدریس می‌شود.',
  'استاد علی احمدی',
  'INTERMEDIATE',
  690000,
  'OPEN_FOR_REGISTRATION',
  10,
  now
);

// Course 3
db.prepare(`
  INSERT OR IGNORE INTO courses (id, title, description, longDescription, instructor, level, price, status, sessionsCount, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  'c3',
  'فنون اجرا و مجلس‌داری',
  'آموزش حرفه‌ای مدیریت مجلس، ارتباط با مخاطب و اجرای مؤثر.',
  'این دوره ویژه مداحانی است که تجربه کافی دارند و می‌خواهند مهارت‌های مجلس‌داری خود را ارتقا دهند. شامل تکنیک‌های ارتباط با مخاطب، مدیریت زمان، و ساختاربندی برنامه.',
  'استاد حسین محمدی',
  'ADVANCED',
  890000,
  'UPCOMING',
  8,
  now
);

// Lessons for Course 1
const lessons1 = [
  { title: 'مقدمه‌ای بر صداسازی', description: 'آشنایی با مفاهیم پایه صداسازی و اهمیت آن در مداحی', orderNum: 1, duration: '45 دقیقه' },
  { title: 'تنفس دیافراگمی', description: 'آموزش تکنیک تنفس از دیافراگم و تمرینات عملی', orderNum: 2, duration: '50 دقیقه' },
  { title: 'کنترل تن صدا', description: 'تنظیم بم و زیر صدا و انتقال بین آن‌ها', orderNum: 3, duration: '55 دقیقه' },
  { title: 'رزونانس و طنین', description: 'تقویت طنین صدا و استفاده از حفره‌های تشدید', orderNum: 4, duration: '45 دقیقه' },
  { title: 'تکنیک‌های ویبراتو', description: 'آموزش لرزش طبیعی صدا و کاربرد آن', orderNum: 5, duration: '50 دقیقه' },
  { title: 'مقامات پایه', description: 'آشنایی با مقام‌های اصلی در مداحی', orderNum: 6, duration: '60 دقیقه' },
];

const insertLesson = db.prepare(`
  INSERT OR IGNORE INTO lessons (id, courseId, title, description, orderNum, duration)
  VALUES (?, ?, ?, ?, ?, ?)
`);

lessons1.forEach(l => {
  insertLesson.run(`l-c1-${l.orderNum}`, 'c1', l.title, l.description, l.orderNum, l.duration);
});

// Enroll test user in c1
db.prepare(`
  INSERT OR IGNORE INTO enrollments (id, userId, courseId, progress, enrolledAt, paymentRefId, paymentStatus)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`).run('e-test-c1', 'u-test', 'c1', 35, now, 'SEED-REF-001', 'PAID');

// Exercise sample
db.prepare(`
  INSERT OR IGNORE INTO exercise_submissions (id, userId, courseId, title, duration, score, status, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`).run('ex-c1-1', 'u-test', 'c1', 'تمرین نفس‌گیری — جلسه ۲', 95, 72, 'COMPLETED', now);

db.prepare(`
  INSERT OR IGNORE INTO exercise_analyses (id, exerciseId, overallScore, strengthsJson, improvementsJson, detailsJson, aiRecommendation, nextExercise, createdAt)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`).run(
  'ana-c1-1',
  'ex-c1-1',
  72,
  JSON.stringify(['ریتم تنفس مناسب و یکنواخت', 'کنترل خوب دیافراگم در بخش اول', 'طول نفس‌گیری قابل قبول']),
  JSON.stringify(['در بخش‌های طولانی نفس کم می‌آورد', 'نیاز به تمرین بیشتر برای تنفس عمیق']),
  JSON.stringify([
    { label: 'وضوح صدا', score: 75, maxScore: 100 },
    { label: 'ریتم', score: 80, maxScore: 100 },
    { label: 'کنترل تنفس', score: 65, maxScore: 100 },
    { label: 'شدت صدا', score: 70, maxScore: 100 },
    { label: 'ثبات اجرا', score: 68, maxScore: 100 },
  ]),
  'عملکرد شما در تنفس دیافراگمی خوب بود ولی در ادامه کار نفس‌تان کم می‌آید. پیشنهاد می‌کنم تمرینات تنفس عمیق را روزانه ۱۰ دقیقه انجام دهید.',
  'تمرین کنترل تن صدا',
  now
);

// AI Configs
db.prepare(`
  INSERT OR IGNORE INTO course_ai_configs (id, courseId, systemPrompt, model, temperature, maxTokens)
  VALUES (?, ?, ?, ?, ?, ?)
`).run('aiconf-c1', 'c1', 'تو دستیار آموزشی دوره «مبانی صداسازی مداحی» در پلتفرم مداح شو هستی. وظیفه تو فقط پاسخ دادن به سؤالات مرتبط با صداسازی، تنفس، رزونانس و تکنیک‌های پایه مداحی است.', 'gpt-4o-mini', 0.7, 1024);

// Settings
db.prepare('INSERT OR IGNORE INTO system_settings (key, value, description) VALUES (?, ?, ?)').run('support_quota_free', '3', 'تعداد پیام‌های مجاز کاربر عادی');
db.prepare('INSERT OR IGNORE INTO system_settings (key, value, description) VALUES (?, ?, ?)').run('support_quota_enrolled', '5', 'تعداد پیام‌های مجاز کاربر ثبت‌نام شده');

export default db;
