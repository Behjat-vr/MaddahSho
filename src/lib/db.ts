import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

// ===== Cloudflare / Local Database Bridge =====

let localDbInstance: any = null;

function getLocalDb() {
  if (localDbInstance) return localDbInstance;

  let dbPath = path.join(process.cwd(), 'maddahshoo.db');

  if (fs.existsSync('/app/data')) {
    const liaraDbPath = '/app/data/maddahshoo.db';
    if (!fs.existsSync(liaraDbPath) && fs.existsSync(dbPath)) {
      try { fs.copyFileSync(dbPath, liaraDbPath); } catch {}
    }
    dbPath = liaraDbPath;
  } else if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    try {
      const tmpDir = '/tmp';
      const tmpDbPath = path.join(tmpDir, 'maddahshoo.db');
      if (!fs.existsSync(tmpDbPath) && fs.existsSync(dbPath)) {
        try { fs.copyFileSync(dbPath, tmpDbPath); } catch {}
      }
      dbPath = tmpDbPath;
    } catch {}
  }

  try {
    // Dynamic import to prevent better-sqlite3 from bundling into Cloudflare Worker
    const Database = require('better-sqlite3');
    localDbInstance = new Database(dbPath);
    try {
      localDbInstance.pragma('journal_mode = WAL');
      localDbInstance.pragma('foreign_keys = ON');
    } catch {}
  } catch {
    localDbInstance = {
      prepare: () => ({
        run: () => ({ changes: 1, lastInsertRowid: 1 }),
        get: () => undefined,
        all: () => [],
      }),
      exec: () => {},
      pragma: () => {},
    };
  }

  return localDbInstance;
}

// ===== Universal DB Client Export =====
const db = {
  prepare(sql: string) {
    const local = getLocalDb();
    return local.prepare(sql);
  },
  exec(sql: string) {
    const local = getLocalDb();
    return local.exec(sql);
  }
};

// Initialize schema on local database load
try {
  const local = getLocalDb();
  if (local && typeof local.exec === 'function') {
    local.exec(`
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
  }
} catch (e) {
  console.warn('Local schema init notice:', e);
}

// ===== Prisma Client Creator for Cloudflare D1 =====
export function createPrismaD1Client(d1Database: any) {
  const adapter = new PrismaD1(d1Database);
  return new PrismaClient({ adapter });
}

export default db;
