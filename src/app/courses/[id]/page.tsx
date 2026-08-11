'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { mockCourses, formatPrice, courseLevelLabels, mockEnrollments } from '@/data/mock';
import {
  BookOpen, User, Clock, BarChart3, Sparkles, Mic,
  ArrowLeft, Check, Lock, ChevronDown, ChevronUp
} from 'lucide-react';

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, isEnrolled, enrollInCourse } = useAuth();
  const [showLessons, setShowLessons] = useState(false);
  const [enrollModal, setEnrollModal] = useState(false);

  React.useEffect(() => {
    if (!isAuthenticated) router.push('/auth/login');
  }, [isAuthenticated, router]);

  const course = mockCourses.find(c => c.id === params.id);
  if (!course) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <main className="page-content">
          <div className="empty-state">
            <p className="empty-state-title">دوره یافت نشد</p>
            <Link href="/courses" className="btn btn-primary">بازگشت به دوره‌ها</Link>
          </div>
        </main>
      </div>
    );
  }

  const enrolled = isEnrolled(course.id);
  const enrollment = mockEnrollments.find(e => e.courseId === course.id);

  const handleEnroll = () => {
    enrollInCourse(course.id);
    setEnrollModal(false);
  };

  const gradients: Record<string, string> = {
    c1: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #162447 100%)',
    c2: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b3d 50%, #3a1f4e 100%)',
    c3: 'linear-gradient(135deg, #2a0a0a 0%, #3d1b1b 50%, #4e1f1f 100%)',
    c4: 'linear-gradient(135deg, #0a2a1a 0%, #1b3d2d 50%, #1f4e3a 100%)',
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        {/* Hero */}
        <section className="course-hero">
          <div className="course-hero-bg">
            <div style={{
              width: '100%',
              height: '100%',
              background: gradients[course.id] || gradients.c1,
            }} />
            <div className="course-hero-overlay" />
          </div>
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <ParticleBackground count={12} />
          </div>

          <div className="container course-hero-content">
            <div className="animate-fade-in-up">
              {enrolled && (
                <span className="badge badge-gold" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>
                  <Check size={12} />
                  شما در این دوره ثبت‌نام کرده‌اید
                </span>
              )}
              <h1 className="heading-1" style={{ marginBottom: 'var(--space-4)' }}>
                {course.title}
              </h1>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-size-md)',
                lineHeight: 'var(--line-height-relaxed)',
                maxWidth: '600px',
                marginBottom: 'var(--space-6)',
              }}>
                {course.longDescription}
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-6)',
                alignItems: 'center',
                marginBottom: 'var(--space-8)',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  <User size={16} color="var(--accent-gold)" />
                  {course.instructor}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  <Clock size={16} color="var(--accent-gold)" />
                  {course.sessionsCount} جلسه
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  <BarChart3 size={16} color="var(--accent-gold)" />
                  {courseLevelLabels[course.level]}
                </span>
              </div>

              {/* Enrollment / Price */}
              {!enrolled && course.status === 'OPEN_FOR_REGISTRATION' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
                  <span style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-extrabold)',
                    color: 'var(--accent-gold)',
                  }}>
                    {formatPrice(course.price)}
                  </span>
                  <button className="btn btn-primary btn-lg" onClick={() => setEnrollModal(true)}>
                    ثبت‌نام در دوره
                    <ArrowLeft size={18} />
                  </button>
                </div>
              )}

              {!enrolled && course.status === 'CLOSED' && (
                <div className="badge badge-error" style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-2) var(--space-4)' }}>
                  <Lock size={14} />
                  ثبت‌نام بسته است
                </div>
              )}

              {enrolled && enrollment && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                }}>
                  <div style={{ flex: 1, maxWidth: '300px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>پیشرفت شما</span>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--accent-gold)', fontWeight: 'var(--font-weight-bold)' }}>{enrollment.progress}%</span>
                    </div>
                    <div className="progress-bar-track">
                      <div className="progress-bar-fill" style={{ width: `${enrollment.progress}%` }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        {enrolled && (
          <section className="section" style={{ paddingTop: 'var(--space-8)' }}>
            <div className="container">
              <div className="grid-2 animate-fade-in-up">
                {/* AI Support */}
                <Link href={`/courses/${course.id}/support`} style={{ textDecoration: 'none' }}>
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <Sparkles size={28} />
                    </div>
                    <h3 className="feature-card-title">پشتیبانی هوشمند</h3>
                    <p className="feature-card-desc">
                      سؤال خودت را درباره این دوره از دستیار هوشمند بپرس.
                    </p>
                    <span className="btn btn-secondary btn-sm">شروع پشتیبانی</span>
                  </div>
                </Link>

                {/* Exercise */}
                <Link href={`/courses/${course.id}/exercise`} style={{ textDecoration: 'none' }}>
                  <div className="feature-card">
                    <div className="feature-card-icon" style={{ background: 'rgba(122, 32, 64, 0.15)' }}>
                      <Mic size={28} color="var(--accent-burgundy-light)" />
                    </div>
                    <h3 className="feature-card-title">ارسال تمرین</h3>
                    <p className="feature-card-desc">
                      تمرین صوتی خودت را ارسال کن و بازخورد تخصصی بگیر.
                    </p>
                    <span className="btn btn-secondary btn-sm">ارسال تمرین</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Lessons */}
        {course.lessons.length > 0 && (
          <section className="section">
            <div className="container">
              <button
                onClick={() => setShowLessons(!showLessons)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: 'var(--space-5) var(--space-6)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  fontSize: 'var(--font-size-md)',
                  fontWeight: 'var(--font-weight-semibold)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <BookOpen size={20} color="var(--accent-gold)" />
                  سرفصل‌ها ({course.lessons.length} جلسه)
                </span>
                {showLessons ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {showLessons && (
                <div style={{
                  marginTop: 'var(--space-3)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                }}>
                  {course.lessons.map((lesson, i) => (
                    <div
                      key={lesson.id}
                      style={{
                        padding: 'var(--space-4) var(--space-6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: i < course.lessons.length - 1 ? '1px solid var(--border-primary)' : 'none',
                        background: 'var(--bg-card)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                        <span style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'rgba(212, 168, 83, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 'var(--font-size-sm)',
                          color: 'var(--accent-gold)',
                          fontWeight: 'var(--font-weight-bold)',
                          flexShrink: 0,
                        }}>
                          {lesson.order}
                        </span>
                        <div>
                          <div style={{ fontWeight: 'var(--font-weight-medium)', marginBottom: 'var(--space-1)' }}>
                            {lesson.title}
                          </div>
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                            {lesson.description}
                          </div>
                        </div>
                      </div>
                      <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', flexShrink: 0 }}>
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Enrollment Modal */}
        <div className={`modal-overlay ${enrollModal ? 'open' : ''}`} onClick={() => setEnrollModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="heading-4">ثبت‌نام در دوره</h3>
              <button className="btn btn-ghost btn-icon" onClick={() => setEnrollModal(false)}>✕</button>
            </div>
            <div className="modal-body" style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: 'var(--space-4)', color: 'var(--text-primary)' }}>{course.title}</h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                با ثبت‌نام در این دوره به تمام محتوای آموزشی، پشتیبانی هوشمند و امکان ارسال تمرین دسترسی خواهید داشت.
              </p>
              <div style={{
                padding: 'var(--space-4)',
                background: 'rgba(212, 168, 83, 0.08)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-6)',
              }}>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>مبلغ قابل پرداخت</span>
                <div style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-extrabold)',
                  color: 'var(--accent-gold)',
                  marginTop: 'var(--space-2)',
                }}>
                  {formatPrice(course.price)}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleEnroll}>
                پرداخت و ثبت‌نام
              </button>
              <button className="btn btn-secondary" onClick={() => setEnrollModal(false)}>
                انصراف
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
