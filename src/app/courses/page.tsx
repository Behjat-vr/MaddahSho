'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import CourseCard from '@/components/course/CourseCard';
import { mockCourses } from '@/data/mock';
import type { Course } from '@/types';
import { Loader2 } from 'lucide-react';

const filters: { label: string; value: string }[] = [
  { label: 'همه', value: 'ALL' },
  { label: 'ثبت‌نام باز', value: 'OPEN_FOR_REGISTRATION' },
  { label: 'به زودی', value: 'UPCOMING' },
  { label: 'بسته شده', value: 'CLOSED' },
];

export default function CoursesPage() {
  const { isAuthenticated, isLoading: authLoading, enrollments } = useAuth();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [loading, setLoading] = useState(true);

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
          const data = await res.json();
          if (data.courses && data.courses.length > 0) {
            setCourses(data.courses);
          }
        }
      } catch {
        // Fallback to mockCourses
      } finally {
        setLoading(false);
      }
    }
    if (isAuthenticated) {
      fetchCourses();
    }
  }, [isAuthenticated]);

  const enrolledIds = enrollments.map(e => e.courseId);

  const filtered = activeFilter === 'ALL'
    ? courses
    : courses.filter(c => c.status === activeFilter);

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <section className="section">
          <div className="container">
            <div className="animate-fade-in-up" style={{ marginBottom: 'var(--space-8)' }}>
              <h1 className="heading-1" style={{ marginBottom: 'var(--space-3)' }}>
                دوره‌های <span className="text-gradient">آموزشی</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                دوره مناسب خودت را انتخاب کن و مسیر یادگیری رو شروع کن.
              </p>
            </div>

            {/* Filters */}
            <div className="animate-fade-in-up-delay-1" style={{
              display: 'flex',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-8)',
              flexWrap: 'wrap',
            }}>
              {filters.map(f => (
                <button
                  key={f.value}
                  className={`btn ${activeFilter === f.value ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--space-12)' }}>
                <Loader2 size={32} color="var(--accent-gold)" style={{ animation: 'spin 1s linear infinite' }} />
              </div>
            ) : (
              /* Course Grid */
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 'var(--space-6)',
              }}>
                {filtered.map((course, i) => (
                  <div key={course.id} className={`animate-fade-in-up-delay-${Math.min(i + 1, 4)}`}>
                    <CourseCard
                      course={course}
                      isEnrolled={enrolledIds.includes(course.id)}
                    />
                  </div>
                ))}
              </div>
            )}

            {!loading && filtered.length === 0 && (
              <div className="empty-state">
                <div className="empty-state-icon">📚</div>
                <p className="empty-state-title">دوره‌ای یافت نشد</p>
                <p className="empty-state-desc">در حال حاضر دوره‌ای با این فیلتر موجود نیست.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
