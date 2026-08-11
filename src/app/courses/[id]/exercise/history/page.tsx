'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import { mockExercises, formatDate, formatDuration } from '@/data/mock';
import { ArrowRight, Mic, Calendar, Clock, TrendingUp, BarChart3 } from 'lucide-react';

export default function ExerciseHistoryPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) router.push('/auth/login');
  }, [isAuthenticated, router]);

  const exercises = mockExercises.filter(e => e.courseId === params.id);
  const avgScore = exercises.length > 0
    ? Math.round(exercises.reduce((s, e) => s + (e.score || 0), 0) / exercises.length)
    : 0;
  const bestScore = Math.max(...exercises.map(e => e.score || 0), 0);

  // Progress chart data
  const chartMax = 100;
  const chartWidth = 100;
  const chartHeight = 60;
  const points = exercises.map((e, i) => ({
    x: (i / Math.max(exercises.length - 1, 1)) * chartWidth,
    y: chartHeight - ((e.score || 0) / chartMax) * chartHeight,
    score: e.score || 0,
  }));
  const pathD = points.length > 1
    ? `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`
    : '';

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <section className="section">
          <div className="container" style={{ maxWidth: 'var(--container-md)' }}>
            <Link href={`/courses/${params.id}`} style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-6)' }}>
              <ArrowRight size={16} />
              بازگشت به دوره
            </Link>

            <h1 className="heading-2 animate-fade-in-up" style={{ marginBottom: 'var(--space-8)' }}>
              تاریخچه تمرین‌ها
            </h1>

            {/* Stats Row */}
            <div className="animate-fade-in-up-delay-1" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
            }}>
              <div className="glass-card-static" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--accent-gold)' }}>
                  {exercises.length}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>تمرین‌های انجام‌شده</div>
              </div>
              <div className="glass-card-static" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--accent-gold)' }}>
                  {avgScore}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>امتیاز میانگین</div>
              </div>
              <div className="glass-card-static" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--success)' }}>
                  {bestScore}
                </div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>بهترین امتیاز</div>
              </div>
            </div>

            {/* Progress Chart */}
            {exercises.length > 1 && (
              <div className="glass-card-static animate-fade-in-up-delay-2" style={{
                padding: 'var(--space-6)',
                marginBottom: 'var(--space-8)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                  <TrendingUp size={18} color="var(--accent-gold)" />
                  <h3 className="heading-4">روند پیشرفت</h3>
                </div>
                <svg viewBox={`-5 -5 ${chartWidth + 10} ${chartHeight + 10}`} style={{ width: '100%', height: '120px' }}>
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map(v => {
                    const y = chartHeight - (v / chartMax) * chartHeight;
                    return (
                      <g key={v}>
                        <line x1="0" y1={y} x2={chartWidth} y2={y} stroke="var(--border-primary)" strokeWidth="0.5" />
                        <text x="-3" y={y + 2} fontSize="4" fill="var(--text-tertiary)" textAnchor="end">{v}</text>
                      </g>
                    );
                  })}
                  {/* Line */}
                  <path d={pathD} fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Area */}
                  {points.length > 1 && (
                    <path
                      d={`${pathD} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`}
                      fill="url(#goldGrad)"
                      opacity="0.15"
                    />
                  )}
                  {/* Dots */}
                  {points.map((p, i) => (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="2.5" fill="var(--accent-gold)" />
                      <text x={p.x} y={p.y - 5} fontSize="4" fill="var(--text-primary)" textAnchor="middle">{p.score}</text>
                    </g>
                  ))}
                  <defs>
                    <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-gold)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--accent-gold)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}

            {/* Exercise List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {exercises.map((ex, i) => (
                <Link
                  key={ex.id}
                  href={`/courses/${params.id}/exercise/${ex.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="glass-card" style={{
                    padding: 'var(--space-5) var(--space-6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(212, 168, 83, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Mic size={20} color="var(--accent-gold)" />
                      </div>
                      <div>
                        <div style={{ fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-1)' }}>
                          {ex.title}
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                            <Calendar size={10} />
                            {formatDate(ex.createdAt)}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                            <Clock size={10} />
                            {formatDuration(ex.duration)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        fontSize: 'var(--font-size-xl)',
                        fontWeight: 'var(--font-weight-extrabold)',
                        color: (ex.score || 0) >= 80 ? 'var(--success)' : (ex.score || 0) >= 60 ? 'var(--accent-gold)' : 'var(--warning)',
                      }}>
                        {ex.score}
                      </div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>امتیاز</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {exercises.length === 0 && (
              <div className="empty-state">
                <div className="empty-state-icon">
                  <Mic size={32} />
                </div>
                <p className="empty-state-title">هنوز تمرینی ارسال نکرده‌ای</p>
                <p className="empty-state-desc">اولین تمرینت را همین امروز شروع کن.</p>
                <Link href={`/courses/${params.id}/exercise`} className="btn btn-primary">
                  ارسال اولین تمرین
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
