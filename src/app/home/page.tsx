'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import CourseCard from '@/components/course/CourseCard';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { mockCourses, mockExercises } from '@/data/mock';
import type { Course } from '@/types';
import { Sparkles, TrendingUp, Mic } from 'lucide-react';

export default function HomePage() {
  const { user, isAuthenticated, isLoading: authLoading, enrollments } = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>(mockCourses);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch('/api/courses');
        if (res.ok) {
          const data = (await res.json()) as { courses?: typeof courses };
          if (data.courses && data.courses.length > 0) {
            setCourses(data.courses);
          }
        }
      } catch {
        // Fallback to mockCourses
      }
    }
    if (isAuthenticated) {
      fetchCourses();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated || !user) return null;

  const enrolledCourseIds = enrollments.map(e => e.courseId);
  const latestExercise = mockExercises[mockExercises.length - 1];
  const firstEnrollment = enrollments[0];

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          padding: 'var(--space-16) 0 var(--space-12)',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}>
            <ParticleBackground count={15} />
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(212,168,83,0.05) 0%, transparent 70%)',
              borderRadius: '50%',
            }} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Greeting */}
            <div className="animate-fade-in-up">
              <p style={{
                fontSize: 'var(--font-size-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-2)',
              }}>
                سلام، <span style={{ color: 'var(--accent-gold)', fontWeight: 'var(--font-weight-semibold)' }}>{user.firstName}</span>
              </p>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-8)',
              }}>
                امروز برای بهتر شدن صدایت چه تمرینی انجام می‌دهی؟
              </p>
            </div>

            {/* Hero Card */}
            <div className="glass-card-static animate-fade-in-up-delay-1" style={{
              padding: 'var(--space-10) var(--space-8)',
              textAlign: 'center',
              background: 'var(--gradient-card)',
            }}>
              <h1 className="heading-1" style={{ marginBottom: 'var(--space-4)' }}>
                مسیر مداح شدن تو از <span className="text-gradient">همینجا</span> شروع می‌شود.
              </h1>
              <p style={{
                color: 'var(--text-secondary)',
                maxWidth: '500px',
                margin: '0 auto',
                lineHeight: 'var(--line-height-relaxed)',
              }}>
                با دوره‌های تخصصی مداح شو، مهارت‌هایت را تقویت کن و با کمک هوش مصنوعی سریع‌تر پیشرفت کن.
              </p>
            </div>

            {/* Quick Stats */}
            {firstEnrollment && (
              <div className="animate-fade-in-up-delay-2" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--space-4)',
                marginTop: 'var(--space-8)',
              }}>
                <div className="glass-card-static" style={{
                  padding: 'var(--space-5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(62, 207, 142, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <TrendingUp size={20} color="var(--success)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
                      {firstEnrollment.progress}%
                    </div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>پیشرفت دوره</div>
                  </div>
                </div>

                <div className="glass-card-static" style={{
                  padding: 'var(--space-5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(212, 168, 83, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Mic size={20} color="var(--accent-gold)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
                      {mockExercises.length}
                    </div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>تمرین ارسال شده</div>
                  </div>
                </div>

                <div className="glass-card-static" style={{
                  padding: 'var(--space-5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-4)',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(107, 166, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Sparkles size={20} color="var(--info)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
                      {latestExercise?.score || '—'}
                    </div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>آخرین امتیاز</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Courses Section */}
        <section className="section">
          <div className="container">
            <h2 className="heading-2 animate-fade-in-up" style={{ marginBottom: 'var(--space-8)' }}>
              دوره‌های <span className="text-gradient">مداح شو</span>
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-6)',
            }}>
              {courses.map((course, index) => (
                <div
                  key={course.id}
                  className={`animate-fade-in-up-delay-${Math.min(index + 1, 4)}`}
                >
                  <CourseCard
                    course={course}
                    isEnrolled={enrolledCourseIds.includes(course.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
