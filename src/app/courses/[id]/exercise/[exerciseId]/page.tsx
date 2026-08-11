'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import { mockExercises, formatDate, formatDuration } from '@/data/mock';
import { ArrowRight, CheckCircle, AlertTriangle, Sparkles, Mic, Calendar, Clock } from 'lucide-react';

export default function ExerciseResultPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) router.push('/auth/login');
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, [isAuthenticated, router]);

  const exercise = mockExercises.find(e => e.id === params.exerciseId);
  if (!exercise || !exercise.analysis) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <main className="page-content">
          <div className="empty-state" style={{ minHeight: '60vh' }}>
            <p className="empty-state-title">تمرین یافت نشد</p>
            <Link href={`/courses/${params.id}/exercise/history`} className="btn btn-primary">بازگشت</Link>
          </div>
        </main>
      </div>
    );
  }

  const { analysis } = exercise;
  const circumference = 2 * Math.PI * 68;
  const offset = circumference - (analysis.overallScore / 100) * circumference;

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <section className="section">
          <div className="container" style={{ maxWidth: 'var(--container-md)' }}>
            {/* Back link */}
            <Link href={`/courses/${params.id}/exercise/history`} style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-8)' }}>
              <ArrowRight size={16} />
              بازگشت به تاریخچه
            </Link>

            {/* Header */}
            <div className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h1 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>{exercise.title}</h1>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', color: 'var(--text-tertiary)', fontSize: 'var(--font-size-sm)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                  <Calendar size={14} />
                  {formatDate(exercise.createdAt)}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                  <Clock size={14} />
                  {formatDuration(exercise.duration)}
                </span>
              </div>
            </div>

            {/* Score Ring */}
            <div className="analysis-score-ring animate-fade-in-up-delay-1">
              <svg viewBox="0 0 160 160">
                <circle className="ring-bg" cx="80" cy="80" r="68" />
                <circle
                  className="ring-fill"
                  cx="80"
                  cy="80"
                  r="68"
                  strokeDasharray={circumference}
                  strokeDashoffset={animated ? offset : circumference}
                />
              </svg>
              <div className="analysis-score-value">
                <div className="analysis-score-number">{analysis.overallScore}</div>
                <div className="analysis-score-label">از ۱۰۰</div>
              </div>
            </div>

            {/* Detail Bars */}
            <div className="glass-card-static animate-fade-in-up-delay-2" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
              <h3 className="heading-4" style={{ marginBottom: 'var(--space-5)' }}>جزئیات امتیازات</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {analysis.details.map((d, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>{d.label}</span>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--accent-gold)', fontWeight: 'var(--font-weight-bold)' }}>{d.score}/{d.maxScore}</span>
                    </div>
                    <div className="progress-bar-track">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: animated ? `${(d.score / d.maxScore) * 100}%` : '0%',
                          transitionDelay: `${0.3 + i * 0.15}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="glass-card-static animate-fade-in-up-delay-3" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
              <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)', color: 'var(--success)' }}>
                <CheckCircle size={18} style={{ verticalAlign: 'middle', marginLeft: 'var(--space-2)' }} />
                نقاط قوت
              </h3>
              <div className="analysis-list">
                {analysis.strengths.map((s, i) => (
                  <div key={i} className="analysis-item analysis-item-strength">
                    <CheckCircle size={16} />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div className="glass-card-static animate-fade-in-up-delay-4" style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
              <h3 className="heading-4" style={{ marginBottom: 'var(--space-4)', color: 'var(--warning)' }}>
                <AlertTriangle size={18} style={{ verticalAlign: 'middle', marginLeft: 'var(--space-2)' }} />
                نیاز به بهبود
              </h3>
              <div className="analysis-list">
                {analysis.improvements.map((imp, i) => (
                  <div key={i} className="analysis-item analysis-item-improve">
                    <AlertTriangle size={16} />
                    {imp}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="glass-card-static" style={{
              padding: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
              borderColor: 'var(--border-accent)',
              background: 'var(--gradient-card)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
                <Sparkles size={18} color="var(--accent-gold)" />
                <h3 className="heading-4" style={{ color: 'var(--accent-gold)' }}>پیشنهاد هوش مصنوعی</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
                {analysis.aiRecommendation}
              </p>
              <button
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-5)' }}
                onClick={() => router.push(`/courses/${params.id}/exercise`)}
              >
                <Mic size={16} />
                تمرین پیشنهادی بعدی: {analysis.nextExercise}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
