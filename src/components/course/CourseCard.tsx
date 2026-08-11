'use client';

import React from 'react';
import Link from 'next/link';
import type { Course } from '@/types';
import { formatPrice, courseStatusLabels, courseLevelLabels } from '@/data/mock';
import { BookOpen, User, Clock, BarChart3, ArrowLeft } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  isEnrolled?: boolean;
}

export default function CourseCard({ course, isEnrolled }: CourseCardProps) {
  const statusConfig: Record<string, { className: string; label: string }> = {
    OPEN_FOR_REGISTRATION: { className: 'badge-success', label: 'ثبت‌نام باز است' },
    CLOSED: { className: 'badge-error', label: 'ثبت‌نام بسته است' },
    UPCOMING: { className: 'badge-info', label: 'به زودی' },
    DRAFT: { className: 'badge-warning', label: 'پیش‌نویس' },
    ARCHIVED: { className: 'badge-warning', label: 'آرشیو شده' },
  };

  const status = statusConfig[course.status] || statusConfig.DRAFT;

  return (
    <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
      <div className="course-card">
        {/* Image */}
        <div className="course-card-image">
          <div style={{
            width: '100%',
            height: '100%',
            background: course.id === 'c1'
              ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
              : course.id === 'c2'
              ? 'linear-gradient(135deg, #1a1a2e 0%, #2d1b3d 50%, #441a4a 100%)'
              : course.id === 'c3'
              ? 'linear-gradient(135deg, #1a1a2e 0%, #3d1b1b 50%, #4a1a1a 100%)'
              : 'linear-gradient(135deg, #1a1a2e 0%, #1b3d2d 50%, #1a4a2e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <BookOpen size={48} style={{ color: 'rgba(212, 168, 83, 0.3)' }} />
          </div>
          <div className="course-card-image-overlay" />

          {/* Badge */}
          <div className="course-card-badge">
            {isEnrolled ? (
              <span className="badge badge-gold">دوره شما</span>
            ) : (
              <span className={`badge ${status.className}`}>{status.label}</span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="course-card-body">
          <h3 className="course-card-title">{course.title}</h3>
          <div className="course-card-instructor">
            <User size={14} />
            {course.instructor}
          </div>
          <p className="course-card-desc">{course.description}</p>

          <div className="course-card-meta">
            <span className="course-card-meta-item">
              <Clock size={12} />
              {course.sessionsCount} جلسه
            </span>
            <span className="course-card-meta-item">
              <BarChart3 size={12} />
              {courseLevelLabels[course.level]}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="course-card-footer">
          {course.status === 'OPEN_FOR_REGISTRATION' && !isEnrolled ? (
            <span className="course-card-price">{formatPrice(course.price)}</span>
          ) : (
            <span />
          )}
          <span className="btn btn-ghost btn-sm" style={{ gap: 'var(--space-2)' }}>
            مشاهده دوره
            <ArrowLeft size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
