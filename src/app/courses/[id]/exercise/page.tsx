'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import { mockCourses, mockExercises } from '@/data/mock';
import { Mic, Square, Upload, ArrowRight, History, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

type RecordingState = 'idle' | 'recording' | 'uploading' | 'analyzing' | 'done' | 'error';

export default function ExercisePage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, isEnrolled } = useAuth();
  const [state, setState] = useState<RecordingState>('idle');
  const [timer, setTimer] = useState(0);
  const [waveformBars, setWaveformBars] = useState<number[]>(Array(30).fill(8));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const waveRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const course = mockCourses.find(c => c.id === params.id);
  const enrolled = isEnrolled(params.id as string);

  useEffect(() => {
    if (!isAuthenticated) router.push('/auth/login');
  }, [isAuthenticated, router]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (waveRef.current) clearInterval(waveRef.current);
    };
  }, []);

  const startRecording = useCallback(() => {
    setState('recording');
    setTimer(0);
    timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    waveRef.current = setInterval(() => {
      setWaveformBars(Array.from({ length: 30 }, () => Math.random() * 50 + 8));
    }, 100);
  }, []);

  const stopRecording = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (waveRef.current) clearInterval(waveRef.current);
    setWaveformBars(Array(30).fill(8));
    simulateAnalysis();
  }, []);

  const simulateAnalysis = async () => {
    setState('uploading');
    await new Promise(r => setTimeout(r, 1500));
    setState('analyzing');
    await new Promise(r => setTimeout(r, 3000));
    setState('done');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = ['audio/mpeg', 'audio/wav', 'audio/mp4', 'audio/ogg', 'audio/x-m4a'];
    if (!allowed.includes(file.type) && !file.name.match(/\.(mp3|wav|m4a|ogg)$/i)) {
      alert('فرمت فایل مجاز نیست. فرمت‌های مجاز: MP3, WAV, M4A, OGG');
      return;
    }
    simulateAnalysis();
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  if (!course) return null;

  // Not enrolled modal
  if (!enrolled) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <main className="page-content">
          <div className="empty-state" style={{ minHeight: '60vh' }}>
            <div className="empty-state-icon">
              <AlertCircle size={32} />
            </div>
            <p className="empty-state-title">دسترسی محدود</p>
            <p className="empty-state-desc">
              برای ارسال تمرین ابتدا باید در این دوره ثبت‌نام کنید.
            </p>
            <Link href={`/courses/${course.id}`} className="btn btn-primary">
              مشاهده دوره
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        {/* Top bar */}
        <div className="container" style={{ padding: 'var(--space-6) var(--space-6) 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link href={`/courses/${course.id}`} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
              <ArrowRight size={16} />
              بازگشت به دوره
            </Link>
            <Link href={`/courses/${course.id}/exercise/history`} className="btn btn-ghost btn-sm">
              <History size={16} />
              تاریخچه تمرین‌ها
            </Link>
          </div>
        </div>

        {/* Recording UI */}
        {state === 'idle' && (
          <div className="recorder-container animate-fade-in-up">
            <h2 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>
              تمرینت را ضبط کن
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
              دکمه میکروفون را بزن و تمرین خودت را اجرا کن.
            </p>

            <button className="recorder-mic" onClick={startRecording}>
              <Mic />
            </button>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)' }}>
              شروع ضبط
            </p>

            <div style={{
              width: '100%',
              maxWidth: '400px',
              borderTop: '1px solid var(--border-primary)',
              paddingTop: 'var(--space-6)',
              marginTop: 'var(--space-6)',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
                یا فایل صوتی خود را آپلود کنید
              </p>
              <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
                <Upload size={16} />
                انتخاب فایل صوتی
                <input
                  type="file"
                  accept=".mp3,.wav,.m4a,.ogg"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>
              <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-2)' }}>
                MP3, WAV, M4A, OGG
              </p>
            </div>
          </div>
        )}

        {state === 'recording' && (
          <div className="recorder-container animate-fade-in">
            <h2 className="heading-2" style={{ color: 'var(--error)', marginBottom: 'var(--space-2)' }}>
              در حال ضبط...
            </h2>

            <button className="recorder-mic recording" onClick={stopRecording}>
              <Square style={{ width: 28, height: 28, fill: 'var(--error)' }} />
            </button>

            <div className="recorder-timer">{formatTime(timer)}</div>

            {/* Live Waveform */}
            <div className="waveform-container" style={{ maxWidth: '400px', width: '100%' }}>
              {waveformBars.map((h, i) => (
                <div
                  key={i}
                  className="waveform-bar active"
                  style={{ height: `${h}px`, animationDelay: `${i * 0.03}s` }}
                />
              ))}
            </div>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)' }}>
              برای اتمام ضبط، دکمه توقف را بزنید.
            </p>
          </div>
        )}

        {(state === 'uploading' || state === 'analyzing') && (
          <div className="recorder-container animate-fade-in">
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'rgba(212, 168, 83, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'breathe 2s ease-in-out infinite',
            }}>
              <Loader2 size={40} color="var(--accent-gold)" style={{ animation: 'spin 1.5s linear infinite' }} />
            </div>

            <h2 className="heading-3" style={{ marginTop: 'var(--space-6)' }}>
              {state === 'uploading' ? 'در حال آپلود...' : 'در حال تحلیل تمرین...'}
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              {state === 'uploading'
                ? 'فایل صوتی شما در حال ارسال است.'
                : 'هوش مصنوعی در حال بررسی تمرین شماست. لطفاً صبر کنید.'
              }
            </p>

            {state === 'analyzing' && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-6)',
                width: '100%',
                maxWidth: '300px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <CheckCircle size={16} color="var(--success)" />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--success)' }}>دریافت فایل صوتی</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <CheckCircle size={16} color="var(--success)" />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--success)' }}>پردازش صدا</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Loader2 size={16} color="var(--accent-gold)" style={{ animation: 'spin 1s linear infinite' }} />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--accent-gold)' }}>تحلیل هوش مصنوعی...</span>
                </div>
              </div>
            )}
          </div>
        )}

        {state === 'done' && (
          <div className="recorder-container animate-fade-in-up">
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--success-bg)',
              border: '2px solid rgba(62, 207, 142, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <CheckCircle size={36} color="var(--success)" />
            </div>

            <h2 className="heading-2" style={{ marginTop: 'var(--space-6)' }}>
              تحلیل شما آماده است
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
              نتیجه تحلیل هوش مصنوعی آماده مشاهده است.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <Link href={`/courses/${params.id}/exercise/ex4`} className="btn btn-primary btn-lg">
                مشاهده نتیجه
              </Link>
              <button className="btn btn-secondary btn-lg" onClick={() => setState('idle')}>
                ضبط دوباره
              </button>
            </div>
          </div>
        )}

        {state === 'error' && (
          <div className="recorder-container animate-fade-in-up">
            <div className="empty-state-icon" style={{ background: 'var(--error-bg)' }}>
              <AlertCircle size={32} color="var(--error)" />
            </div>
            <h2 className="heading-3" style={{ marginTop: 'var(--space-6)' }}>خطا در تحلیل</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
              ارتباط با سرویس هوش مصنوعی برقرار نشد. لطفاً چند لحظه دیگر دوباره تلاش کنید.
            </p>
            <button className="btn btn-primary" onClick={() => setState('idle')}>تلاش مجدد</button>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
