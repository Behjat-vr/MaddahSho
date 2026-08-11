'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import { mockCourses, mockExercises, mockEnrollments, formatDate, courseLevelLabels } from '@/data/mock';
import { User, Phone, Hash, BookOpen, Mic, TrendingUp, Award, Calendar } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const { user, isAuthenticated, enrollments } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) router.push('/auth/login');
  }, [isAuthenticated, router]);

  if (!user) return null;

  const enrolledCourses = mockCourses.filter(c => enrollments.some(e => e.courseId === c.id));
  const userExercises = mockExercises.filter(e => e.userId === user.id);
  const avgScore = userExercises.length > 0
    ? Math.round(userExercises.reduce((s, e) => s + (e.score || 0), 0) / userExercises.length)
    : 0;
  const bestScore = Math.max(...userExercises.map(e => e.score || 0), 0);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <section className="section">
          <div className="container" style={{ maxWidth: 'var(--container-md)' }}>
            <h1 className="heading-2 animate-fade-in-up" style={{ marginBottom: 'var(--space-8)' }}>
              پروفایل
            </h1>

            {/* User Info Card */}
            <div className="glass-card-static animate-fade-in-up-delay-1" style={{
              padding: 'var(--space-8)',
              marginBottom: 'var(--space-6)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'var(--gradient-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <User size={32} color="var(--text-inverse)" />
                </div>
                <div>
                  <h2 className="heading-3" style={{ marginBottom: 'var(--space-1)' }}>
                    {user.firstName} {user.lastName}
                  </h2>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)' }}>
                    عضو از {formatDate(user.createdAt)}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)' }}>
                  <Phone size={16} color="var(--accent-gold)" />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>شماره تماس:</span>
                  <span style={{ fontSize: 'var(--font-size-sm)', direction: 'ltr' }}>{user.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)' }}>
                  <Hash size={16} color="var(--accent-gold)" />
                  <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>کد ثبت‌نام:</span>
                  <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)', direction: 'ltr' }}>{user.registrationCode}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up-delay-2" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
            }}>
              <div className="glass-card-static" style={{ padding: 'var(--space-5)', textAlign: 'center' }}>
                <BookOpen size={20} color="var(--accent-gold)" style={{ margin: '0 auto var(--space-2)' }} />
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--accent-gold)' }}>{enrolledCourses.length}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>دوره ثبت‌نام شده</div>
              </div>
              <div className="glass-card-static" style={{ padding: 'var(--space-5)', textAlign: 'center' }}>
                <Mic size={20} color="var(--accent-gold)" style={{ margin: '0 auto var(--space-2)' }} />
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--accent-gold)' }}>{userExercises.length}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>تمرین ارسالی</div>
              </div>
              <div className="glass-card-static" style={{ padding: 'var(--space-5)', textAlign: 'center' }}>
                <TrendingUp size={20} color="var(--accent-gold)" style={{ margin: '0 auto var(--space-2)' }} />
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--accent-gold)' }}>{avgScore}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>میانگین امتیاز</div>
              </div>
              <div className="glass-card-static" style={{ padding: 'var(--space-5)', textAlign: 'center' }}>
                <Award size={20} color="var(--success)" style={{ margin: '0 auto var(--space-2)' }} />
                <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-extrabold)', color: 'var(--success)' }}>{bestScore}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>بهترین امتیاز</div>
              </div>
            </div>

            {/* Enrolled Courses */}
            <h3 className="heading-3 animate-fade-in-up-delay-3" style={{ marginBottom: 'var(--space-5)' }}>
              دوره‌های من
            </h3>

            {enrolledCourses.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {enrolledCourses.map(course => {
                  const enrollment = mockEnrollments.find(e => e.courseId === course.id);
                  return (
                    <Link key={course.id} href={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
                      <div className="glass-card" style={{
                        padding: 'var(--space-5) var(--space-6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                        <div>
                          <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-2)' }}>{course.title}</div>
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', display: 'flex', gap: 'var(--space-4)' }}>
                            <span>{course.instructor}</span>
                            <span>{courseLevelLabels[course.level]}</span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'center', minWidth: '80px' }}>
                          <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
                            {enrollment?.progress || 0}%
                          </div>
                          <div className="progress-bar-track" style={{ height: '4px', marginTop: 'var(--space-2)' }}>
                            <div className="progress-bar-fill" style={{ width: `${enrollment?.progress || 0}%` }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state" style={{ padding: 'var(--space-8)' }}>
                <p className="empty-state-desc">هنوز در دوره‌ای ثبت‌نام نکرده‌اید.</p>
                <Link href="/courses" className="btn btn-primary">مشاهده دوره‌ها</Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
