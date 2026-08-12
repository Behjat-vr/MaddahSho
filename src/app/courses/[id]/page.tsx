'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { mockCourses, formatPrice, courseLevelLabels, mockEnrollments } from '@/data/mock';
import {
  BookOpen, User, Clock, BarChart3, Sparkles, Mic,
  ArrowLeft, Check, Lock, ChevronDown, ChevronUp,
  Star, ShieldCheck, Award, Zap, Play, Flame,
  MessageSquare, CheckCircle2, Headphones, Gift, Volume2, Target,
  FileText, ArrowUpRight, Share2, Heart, CheckCircle
} from 'lucide-react';

interface LessonItem {
  id: string;
  title: string;
  description?: string;
  order: number;
  duration: string;
}

interface CourseData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  instructor: string;
  level: string;
  price: number;
  status: string;
  sessionsCount: number;
  imageUrl?: string;
  createdAt: string;
  lessons?: LessonItem[];
  enrollmentCount?: number;
}

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, isEnrolled: checkIsEnrolled, enrollInCourse, user } = useAuth();

  const courseId = params?.id as string;

  // States
  const [course, setCourse] = useState<CourseData | null>(null);
  const [enrolled, setEnrolled] = useState<boolean>(false);
  const [enrollmentProgress, setEnrollmentProgress] = useState<number>(72);
  const [loading, setLoading] = useState<boolean>(true);
  const [enrollModal, setEnrollModal] = useState<boolean>(false);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'curriculum' | 'overview' | 'instructor' | 'reviews'>('curriculum');
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 0: true, 1: true });
  const [playingPreview, setPlayingPreview] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  // Fetch Course Data from API with mock fallback
  useEffect(() => {
    let isMounted = true;
    async function loadCourse() {
      try {
        const res = await fetch(`/api/courses/${courseId}`);
        if (res.ok) {
          const data: any = await res.json();
          if (data.course && isMounted) {
            setCourse(data.course);
            if (data.isEnrolled) setEnrolled(true);
            if (data.enrollment?.progress !== undefined) setEnrollmentProgress(data.enrollment.progress);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('API course fetch notice:', err);
      }

      // Fallback to local mock data
      const localCourse = mockCourses.find(c => c.id === courseId);
      if (localCourse && isMounted) {
        setCourse(localCourse);
        const hasEnrollment = checkIsEnrolled(courseId);
        setEnrolled(hasEnrollment);
        const localEnrollment = mockEnrollments.find(e => e.courseId === courseId);
        if (localEnrollment) setEnrollmentProgress(localEnrollment.progress);
      }
      if (isMounted) setLoading(false);
    }

    if (courseId) {
      loadCourse();
    }
  }, [courseId, checkIsEnrolled]);

  const handleEnrollAction = async () => {
    if (!isAuthenticated) {
      router.push('/auth/login');
      return;
    }
    setEnrolling(true);
    try {
      await enrollInCourse(courseId);
      setEnrolled(true);
      setEnrollModal(false);
    } catch (err) {
      console.error('Enroll error:', err);
    } finally {
      setEnrolling(false);
    }
  };

  // Group lessons into 2 modules if available
  const modules = useMemo(() => {
    if (!course?.lessons || course.lessons.length === 0) return [];
    const mid = Math.ceil(course.lessons.length / 2);
    return [
      {
        title: 'فصل اول — اصول بنیادین و تکنیک‌های پایه',
        description: 'تمرکز بر وضوح صدا، تکنیک‌های تنفسی و آماده‌سازی حنجره',
        lessons: course.lessons.slice(0, mid),
      },
      {
        title: 'فصل دوم — مقامات، لحن‌شناسی و اجرای حرفه‌ای',
        description: 'تمرکز بر مقامات موسیقی مداحی، کنترل مکث‌ها و مدیریت مجلس',
        lessons: course.lessons.slice(mid),
      },
    ];
  }, [course?.lessons]);

  if (loading) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <main className="page-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
          <div style={{ textAlign: 'center', color: 'var(--brand-red)' }}>
            <Sparkles size={40} className="animate-spin" style={{ animation: 'spin 1.5s linear infinite' }} />
            <p style={{ marginTop: 'var(--space-4)', fontWeight: 'bold' }}>در حال بارگذاری تجربه آموزشی...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <main className="page-content">
          <div className="container" style={{ padding: 'var(--space-16) 0', textAlign: 'center' }}>
            <div className="glass-card-static" style={{ maxWidth: '500px', margin: '0 auto', padding: 'var(--space-8)' }}>
              <BookOpen size={48} color="var(--brand-red)" style={{ margin: '0 auto var(--space-4)' }} />
              <h2 className="heading-3" style={{ marginBottom: 'var(--space-3)' }}>دوره مورد نظر یافت نشد</h2>
              <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>ممکن است این دوره حذف شده باشد یا آدرس وارد شده اشتباه باشد.</p>
              <Link href="/courses" className="btn btn-primary">
                مشاهده لیست دوره‌ها
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const isClosed = course.status === 'CLOSED';
  const isUpcoming = course.status === 'UPCOMING';
  const totalLessonsCount = course.lessons?.length || course.sessionsCount || 12;

  return (
    <div className="page-wrapper" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Navbar />

      <main className="page-content" style={{ paddingBottom: '100px' }}>
        {/* =========================================================
            1. CINEMATIC HERO SECTION
           ========================================================= */}
        <section style={{
          position: 'relative',
          background: 'linear-gradient(180deg, #1A0508 0%, #2A090E 50%, var(--bg-primary) 100%)',
          color: '#FFFFFF',
          padding: 'var(--space-12) 0 var(--space-16)',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(232, 220, 200, 0.2)',
        }}>
          {/* Ambient Glow & Particles */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
            <ParticleBackground count={25} />
            <div style={{
              position: 'absolute',
              top: '-10%',
              right: '15%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(169, 0, 28, 0.45) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '0%',
              left: '10%',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(231, 184, 75, 0.25) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }} />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Breadcrumb Navigation */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--font-size-xs)',
              color: 'rgba(255, 249, 239, 0.7)',
              marginBottom: 'var(--space-6)',
            }}>
              <Link href="/home" style={{ color: 'rgba(255, 249, 239, 0.7)', textDecoration: 'none' }}>خانه</Link>
              <span>/</span>
              <Link href="/courses" style={{ color: 'rgba(255, 249, 239, 0.7)', textDecoration: 'none' }}>دوره‌های تخصصی</Link>
              <span>/</span>
              <span style={{ color: 'var(--brand-gold)', fontWeight: 'bold' }}>{course.title}</span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 380px',
              gap: 'var(--space-10)',
              alignItems: 'center',
            }} className="hero-responsive-grid">

              {/* Right Column: Title, Metadata & Action */}
              <div>
                {/* Badges Bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(231, 184, 75, 0.15)',
                    border: '1px solid rgba(231, 184, 75, 0.4)',
                    color: 'var(--brand-gold)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'bold',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    <Sparkles size={14} />
                    دوره پرمخاطب تخصصی
                  </span>

                  <span style={{
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFF9EF',
                    fontSize: 'var(--font-size-xs)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    <BarChart3 size={14} color="var(--brand-gold)" />
                    سطح: {courseLevelLabels[course.level] || 'متوسط'}
                  </span>

                  {enrolled && (
                    <span style={{
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(34, 197, 94, 0.2)',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                      color: '#4ADE80',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                      <CheckCircle2 size={14} />
                      شما دانشجوی این دوره هستید
                    </span>
                  )}
                </div>

                {/* Course Title */}
                <h1 style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                  fontWeight: 900,
                  lineHeight: 1.25,
                  marginBottom: 'var(--space-4)',
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                }}>
                  {course.title}
                </h1>

                {/* Short Emotional Description */}
                <p style={{
                  fontSize: 'var(--font-size-md)',
                  lineHeight: 1.7,
                  color: '#E8DCC8',
                  marginBottom: 'var(--space-6)',
                  maxWidth: '680px',
                }}>
                  {course.longDescription || course.description}
                </p>

                {/* Instructor & Quick Specs Bar */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-4)',
                  alignItems: 'center',
                  padding: 'var(--space-4) var(--space-5)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid rgba(232, 220, 200, 0.15)',
                  marginBottom: 'var(--space-8)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--brand-red) 0%, var(--brand-gold) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontWeight: 'bold',
                      fontSize: 'var(--font-size-md)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    }}>
                      <User size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255, 249, 239, 0.6)' }}>مدرس و استاد دوره</div>
                      <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold', color: '#FFF9EF' }}>{course.instructor}</div>
                    </div>
                  </div>

                  <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.15)' }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: '#FFF9EF' }}>
                    <Clock size={18} color="var(--brand-gold)" />
                    <span>{totalLessonsCount} جلسه آموزشی</span>
                  </div>

                  <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.15)' }} />

                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: '#FFF9EF' }}>
                    <Star size={18} color="var(--brand-gold)" fill="var(--brand-gold)" />
                    <span style={{ fontWeight: 'bold' }}>۴.۹</span>
                    <span style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255,249,239,0.6)' }}>(۱,۴۲۰ دانش‌پژوه)</span>
                  </div>
                </div>

                {/* Primary CTA Area */}
                {!enrolled ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'center' }}>
                    {!isClosed && !isUpcoming ? (
                      <>
                        <button
                          onClick={() => setEnrollModal(true)}
                          className="btn btn-primary btn-lg"
                          style={{
                            padding: 'var(--space-4) var(--space-8)',
                            fontSize: 'var(--font-size-lg)',
                            background: 'linear-gradient(135deg, var(--brand-red) 0%, var(--brand-red-hover) 100%)',
                            boxShadow: '0 8px 24px rgba(169, 0, 28, 0.4)',
                            border: '1px solid rgba(231, 184, 75, 0.4)',
                          }}
                        >
                          <Zap size={22} color="var(--brand-gold)" />
                          شروع یادگیری — {formatPrice(course.price)}
                        </button>

                        <button
                          onClick={() => setIsLiked(!isLiked)}
                          className="btn btn-secondary btn-lg"
                          style={{
                            borderColor: 'rgba(255,255,255,0.2)',
                            color: '#FFFFFF',
                            background: isLiked ? 'rgba(169, 0, 28, 0.3)' : 'rgba(255,255,255,0.05)',
                          }}
                        >
                          <Heart size={20} fill={isLiked ? 'var(--brand-red)' : 'none'} color={isLiked ? 'var(--brand-red)' : '#FFFFFF'} />
                          {isLiked ? 'ذخیره شده' : 'علاقه‌مندی'}
                        </button>
                      </>
                    ) : (
                      <div style={{
                        padding: 'var(--space-4) var(--space-6)',
                        background: 'rgba(229, 72, 77, 0.15)',
                        border: '1px solid rgba(229, 72, 77, 0.3)',
                        borderRadius: 'var(--radius-lg)',
                        color: '#F87171',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                      }}>
                        <Lock size={20} />
                        {isClosed ? 'ثبت‌نام این دوره به حد نصاب رسیده و فعلاً بسته است.' : 'ثبت‌نام این دوره به‌زودی آغاز خواهد شد.'}
                      </div>
                    )}
                  </div>
                ) : (
                  /* Enrolled State CTA */
                  <div style={{
                    padding: 'var(--space-6)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid rgba(231, 184, 75, 0.3)',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: '#E8DCC8' }}>میزان پیشرفت شما در دوره:</span>
                      <span style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', color: 'var(--brand-gold)' }}>{enrollmentProgress}%</span>
                    </div>

                    <div className="progress-bar-track" style={{ height: '10px', marginBottom: 'var(--space-5)', background: 'rgba(255,255,255,0.1)' }}>
                      <div className="progress-bar-fill" style={{ width: `${enrollmentProgress}%`, background: 'linear-gradient(90deg, var(--brand-gold) 0%, #34D399 100%)' }} />
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                      <button
                        onClick={() => {
                          const firstLesson = course.lessons?.[0]?.id || 'l1';
                          router.push(`/courses/${course.id}`);
                          // Smooth scroll down to curriculum
                          window.scrollTo({ top: 900, behavior: 'smooth' });
                        }}
                        className="btn btn-primary btn-md"
                        style={{ background: 'var(--brand-gold)', color: '#171717', fontWeight: 'bold' }}
                      >
                        <Play size={18} fill="#171717" />
                        ادامه یادگیری (جلسه ۵ از {totalLessonsCount})
                      </button>

                      <Link href={`/courses/${course.id}/support`} className="btn btn-secondary btn-md" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
                        <Sparkles size={18} color="var(--brand-gold)" />
                        دستیار هوشمند AI
                      </Link>

                      <Link href={`/courses/${course.id}/exercise`} className="btn btn-secondary btn-md" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
                        <Mic size={18} color="var(--brand-red)" />
                        ارسال تمرین صوتی
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Left Column: 3D Product Card Cover */}
              <div style={{ position: 'relative' }}>
                <div className="hero-3d-card" style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(169, 0, 28, 0.8) 0%, rgba(23, 23, 23, 0.95) 100%)',
                  border: '2px solid rgba(231, 184, 75, 0.4)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(169, 0, 28, 0.3)',
                  padding: 'var(--space-6)',
                  textAlign: 'center',
                  transform: 'perspective(1000px) rotateY(-4deg) rotateX(2deg)',
                  transition: 'all 0.4s ease',
                }}>

                  {/* Artwork Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'var(--brand-gold)',
                    color: '#171717',
                    fontWeight: 'bold',
                    fontSize: 'var(--font-size-xs)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                  }}>
                    پکیج ویژه دوره
                  </div>

                  {/* Icon Emblem */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    margin: 'var(--space-6) auto var(--space-4)',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(231, 184, 75, 0.3) 0%, rgba(169, 0, 28, 0.1) 100%)',
                    border: '2px dashed var(--brand-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 25px rgba(231, 184, 75, 0.4)',
                  }}>
                    <Mic size={48} color="var(--brand-gold)" />
                  </div>

                  <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', color: '#FFF9EF', marginBottom: 'var(--space-2)' }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'rgba(255, 249, 239, 0.7)', marginBottom: 'var(--space-6)' }}>
                    آموزش کامل با لایسنس دائمی و پشتیبانی AI
                  </p>

                  <div style={{
                    padding: 'var(--space-3) var(--space-4)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'var(--font-size-xs)',
                    color: '#E8DCC8',
                  }}>
                    <span>کیفیت استودیو: <b>HD Voice</b></span>
                    <span>فرمت: <b>ویدیو + صوت + AI</b></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            2. EMOTIONAL VALUE & BENEFIT CARDS SECTION
           ========================================================= */}
        <section className="section" style={{ padding: 'var(--space-16) 0 var(--space-12)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-10)' }}>
              <span className="badge badge-gold" style={{ marginBottom: 'var(--space-3)', display: 'inline-flex' }}>
                <Target size={14} />
                دستاورد ملموس دوره
              </span>
              <h2 className="heading-2">با این دوره قرار است به کجا برسید؟</h2>
              <p className="text-muted">
                این فقط یک سری ویدیو نیست؛ یک مسیر تحول‌آفرین برای صدای شماست.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 'var(--space-6)',
            }}>
              {/* Benefit Card 1 */}
              <div className="glass-card-static" style={{ padding: 'var(--space-6)', transition: 'transform 0.3s ease' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--brand-red-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}>
                  <Mic size={24} color="var(--brand-red)" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                  اجرای قدرتمند و بدون خستگی
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  یادگیری تکنیک‌های تنفس دیافراگمی برای جلوگیری از آسیب به تارهای صوتی در جلسات طولانی.
                </p>
              </div>

              {/* Benefit Card 2 */}
              <div className="glass-card-static" style={{ padding: 'var(--space-6)', transition: 'transform 0.3s ease' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(231, 184, 75, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}>
                  <Volume2 size={24} color="var(--brand-gold-dark)" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                  تسلط بر لحن و مقامات
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  شناخت دقیق مقامات بیات، حجاز و صبا برای انتخاب مناسب‌ترین لحن متناسب با شعر و مجلس.
                </p>
              </div>

              {/* Benefit Card 3 */}
              <div className="glass-card-static" style={{ padding: 'var(--space-6)', transition: 'transform 0.3s ease' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--brand-red-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}>
                  <Sparkles size={24} color="var(--brand-red)" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                  بازخورد هوشمند AI
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  تحلیل خودکار فایل‌های صوتی شما توسط مدل‌های پیشرفته هوش مصنوعی جهت اصلاح خطاها.
                </p>
              </div>

              {/* Benefit Card 4 */}
              <div className="glass-card-static" style={{ padding: 'var(--space-6)', transition: 'transform 0.3s ease' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(231, 184, 75, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-4)',
                }}>
                  <ShieldCheck size={24} color="var(--brand-gold-dark)" />
                </div>
                <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                  اعتمادبه‌نفس مقتدرانه
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  مدیریت استرس، کنترل مکث‌های عاطفی و اجرای باصلابت در انواع حسینیه‌ها و مراسم.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            3. VISUAL LEARNING ROADMAP (مسیر ۵ گام تا تسلط)
           ========================================================= */}
        <section style={{
          padding: 'var(--space-16) 0',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--brand-border)',
          borderBottom: '1px solid var(--brand-border)',
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-12)' }}>
              <h2 className="heading-2">مسیر ۵ گام تا تسلط کامل</h2>
              <p className="text-muted">نحوه پیشرفت شما از روز اول تا اجرای حرفه‌ای</p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-4)',
              position: 'relative',
            }}>
              {[
                { step: '۱', title: 'آشنایی و اصول', desc: 'شناخت دستگاه صوتی و تنفس دیافراگمی', icon: <BookOpen size={20} /> },
                { step: '۲', title: 'تمرینات وارم‌آپ', desc: 'گرم کردن حنجره و کنترل شدت صدا', icon: <Volume2 size={20} /> },
                { step: '۳', title: 'تحویل تمرین به AI', desc: 'ارسال صوت و دریافت امتیاز دقیق', icon: <Sparkles size={20} /> },
                { step: '۴', title: 'تسلط بر مقامات', desc: 'اجرای لحن بیات، حجاز و صبا', icon: <Flame size={20} /> },
                { step: '۵', title: 'اجرای حرفه‌ای', desc: 'مدیریت مجلس و اعطای گواهی', icon: <Award size={20} /> },
              ].map((item, idx) => (
                <div key={idx} className="glass-card-static" style={{
                  padding: 'var(--space-5)',
                  textAlign: 'center',
                  position: 'relative',
                  borderTop: idx === 0 ? '3px solid var(--brand-red)' : '3px solid var(--brand-gold)',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: idx === 0 ? 'var(--brand-red)' : 'var(--brand-gold)',
                    color: idx === 0 ? '#FFFFFF' : '#171717',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-3)',
                    fontSize: 'var(--font-size-sm)',
                  }}>
                    {item.step}
                  </div>
                  <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'bold', marginBottom: 'var(--space-1)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* =========================================================
            4. INTERACTIVE CURRICULUM & LESSONS
           ========================================================= */}
        <section className="section" style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
            }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: 'var(--space-2)', display: 'inline-flex' }}>
                  <BookOpen size={14} />
                  محتوای دوره
                </span>
                <h2 className="heading-2">سرفصل‌ها و جلسات آموزشی</h2>
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                <span>مجموعاً <b>{totalLessonsCount} جلسه</b></span>
                <span>•</span>
                <span>مدت زمان: <b>حدود ۸ ساعت</b></span>
              </div>
            </div>

            {/* Modules List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {modules.length > 0 ? (
                modules.map((mod, mIdx) => (
                  <div key={mIdx} className="glass-card-static" style={{ overflow: 'hidden' }}>
                    {/* Module Header */}
                    <div
                      onClick={() => setExpandedModules(prev => ({ ...prev, [mIdx]: !prev[mIdx] }))}
                      style={{
                        padding: 'var(--space-5) var(--space-6)',
                        background: 'var(--bg-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        userSelect: 'none',
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                          {mod.title}
                        </h3>
                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)', marginTop: '2px' }}>
                          {mod.description}
                        </p>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--brand-red)', fontWeight: 'bold' }}>
                          {mod.lessons.length} جلسه
                        </span>
                        {expandedModules[mIdx] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    {/* Lessons Grid */}
                    {expandedModules[mIdx] && (
                      <div style={{ borderTop: '1px solid var(--brand-border)' }}>
                        {mod.lessons.map((lesson, lIdx) => {
                          const isPreviewAvailable = lIdx === 0 || enrolled;
                          return (
                            <div
                              key={lesson.id}
                              style={{
                                padding: 'var(--space-4) var(--space-6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                borderBottom: lIdx < mod.lessons.length - 1 ? '1px solid var(--brand-border)' : 'none',
                                background: 'var(--bg-card)',
                                transition: 'background 0.2s ease',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                <div style={{
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '50%',
                                  background: enrolled && lIdx === 0 ? 'var(--brand-red-light)' : 'rgba(231, 184, 75, 0.12)',
                                  color: enrolled && lIdx === 0 ? 'var(--brand-red)' : 'var(--brand-gold-dark)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: 'var(--font-size-xs)',
                                  fontWeight: 'bold',
                                  flexShrink: 0,
                                }}>
                                  {lesson.order}
                                </div>

                                <div>
                                  <div style={{ fontWeight: 'bold', fontSize: 'var(--font-size-sm)', color: 'var(--text-primary)' }}>
                                    {lesson.title}
                                  </div>
                                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                                    {lesson.description || 'تمرین عملی و توضیحات استاد'}
                                  </div>
                                </div>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                                  {lesson.duration}
                                </span>

                                {isPreviewAvailable ? (
                                  <button
                                    onClick={() => setPlayingPreview(playingPreview === lesson.id ? null : lesson.id)}
                                    className="btn btn-ghost btn-sm"
                                    style={{ color: 'var(--brand-red)', fontWeight: 'bold' }}
                                  >
                                    <Play size={14} fill="currentColor" />
                                    {playingPreview === lesson.id ? 'توقف' : 'مشاهده'}
                                  </button>
                                ) : (
                                  <Lock size={16} color="var(--text-tertiary)" />
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                /* Single List Fallback if no modules */
                <div className="glass-card-static" style={{ padding: 'var(--space-6)' }}>
                  <p style={{ color: 'var(--text-secondary)' }}>لیست جلسات پس از ثبت‌نام در دسترس خواهد بود.</p>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* =========================================================
            5. INSTRUCTOR MENTOR PROFILE
           ========================================================= */}
        <section style={{
          padding: 'var(--space-12) 0',
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--brand-border)',
        }}>
          <div className="container">
            <div className="glass-card-static instructor-responsive" style={{
              padding: 'var(--space-8)',
              display: 'grid',
              gridTemplateColumns: '120px minmax(0, 1fr)',
              gap: 'var(--space-6)',
              alignItems: 'center',
            }}>
              <div style={{
                width: '110px',
                height: '110px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--brand-red) 0%, var(--brand-gold) 100%)',
                padding: '3px',
                boxShadow: '0 8px 20px rgba(169,0,28,0.2)',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-red)',
                  fontWeight: 'bold',
                  fontSize: 'var(--font-size-2xl)',
                }}>
                  <User size={48} />
                </div>
              </div>

              <div>
                <span className="badge badge-gold" style={{ marginBottom: 'var(--space-2)', display: 'inline-flex' }}>
                  مدرس ارشد دوره
                </span>
                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                  {course.instructor}
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                  استاد برجسته صداسازی و مدرس بیش از ۲۰ دوره تخصصی مداحی در کشور. با سابقه سال‌ها اجرای زنده و تربیت دانش‌پژوهان موفق در حوزه مداحی و لحن‌شناسی.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                  <span><b>۱۵+</b> سال سابقه تدریس</span>
                  <span>•</span>
                  <span><b>۱,۴۵۰+</b> دانش‌پژوه فعال</span>
                  <span>•</span>
                  <span><b>۴.۹</b> رضایت دانشجویان</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* =========================================================
            6. VALUE & PRICING BOX FOR UNENROLLED USERS
           ========================================================= */}
        {!enrolled && !isClosed && (
          <section className="section" style={{ padding: 'var(--space-16) 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
              <div className="glass-card-static" style={{
                padding: 'var(--space-8)',
                border: '2px solid var(--brand-gold)',
                boxShadow: '0 12px 32px rgba(231, 184, 75, 0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  background: 'var(--brand-gold)',
                  color: '#171717',
                  fontWeight: 'bold',
                  fontSize: 'var(--font-size-xs)',
                  padding: '6px 20px',
                  borderRadius: '0 0 12px 0',
                }}>
                  تضمین ۱۰۰٪ کیفیت
                </div>

                <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                    همین امروز آموزش خود را آغاز کنید
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                    با ثبت‌نام در این دوره، بلافاصله به تمامی محتواها و دستیار هوشمند دسترسی خواهید داشت.
                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 'var(--space-3)',
                  marginBottom: 'var(--space-8)',
                }}>
                  {[
                    'دسترسی همیشگی و نامحدود به ویدیوها',
                    'دستیار هوشمند AI برای پاسخ به سؤالات',
                    'امکان ارسال تمرین صوتی و دریافت بازخورد',
                    'اعطای گواهی پایان دوره تخصصی',
                  ].map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
                      <CheckCircle size={18} color="var(--brand-red)" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 'var(--space-4)',
                  paddingTop: 'var(--space-6)',
                  borderTop: '1px solid var(--brand-border)',
                }}>
                  <div>
                    <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>مبلغ سرمایه‌گذاری شما:</div>
                    <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 900, color: 'var(--brand-red)' }}>
                      {formatPrice(course.price)}
                    </div>
                  </div>

                  <button
                    onClick={() => setEnrollModal(true)}
                    className="btn btn-primary btn-lg"
                    style={{ padding: 'var(--space-4) var(--space-8)', fontSize: 'var(--font-size-md)' }}
                  >
                    ثبت‌نام و دسترسی آنی
                    <ArrowLeft size={18} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* =========================================================
          7. STICKY MOBILE BOTTOM ACTION BAR
         ========================================================= */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        background: 'rgba(255, 249, 239, 0.95)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--brand-border)',
        padding: 'var(--space-3) var(--space-4)',
        display: 'none',
      }} className="mobile-sticky-bar">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
          <div>
            <div style={{ fontSize: 'var(--font-size-xs)', fontWeight: 'bold', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '160px' }}>
              {course.title}
            </div>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--brand-red)', fontWeight: 'bold' }}>
              {enrolled ? `${enrollmentProgress}% تکمیل` : formatPrice(course.price)}
            </div>
          </div>

          {!enrolled ? (
            <button
              onClick={() => setEnrollModal(true)}
              className="btn btn-primary btn-sm"
              disabled={isClosed}
            >
              {isClosed ? 'ثبت‌نام بسته' : 'ثبت‌نام آنی'}
            </button>
          ) : (
            <button
              onClick={() => window.scrollTo({ top: 900, behavior: 'smooth' })}
              className="btn btn-primary btn-sm"
              style={{ background: 'var(--brand-gold)', color: '#171717' }}
            >
              ادامه یادگیری
            </button>
          )}
        </div>
      </div>

      {/* =========================================================
          8. ENROLLMENT CONFIRMATION MODAL
         ========================================================= */}
      <div className={`modal-overlay ${enrollModal ? 'open' : ''}`} onClick={() => setEnrollModal(false)}>
        <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '480px' }}>
          <div className="modal-header" style={{ borderBottom: '1px solid var(--brand-border)' }}>
            <h3 className="heading-4" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <ShieldCheck size={20} color="var(--brand-gold)" />
              ثبت‌نام نهایی در دوره
            </h3>
            <button className="btn btn-ghost btn-icon" onClick={() => setEnrollModal(false)}>✕</button>
          </div>

          <div className="modal-body" style={{ textAlign: 'right', padding: 'var(--space-6)' }}>
            <h4 style={{ marginBottom: 'var(--space-2)', color: 'var(--text-primary)', fontWeight: 'bold' }}>{course.title}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-6)' }}>
              مدرس: {course.instructor} • {totalLessonsCount} جلسه آموزشی
            </p>

            <div style={{
              padding: 'var(--space-5)',
              background: 'var(--brand-cream)',
              border: '1px solid var(--brand-border)',
              borderRadius: 'var(--radius-lg)',
              marginBottom: 'var(--space-6)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
                <span>مبلغ دوره:</span>
                <span style={{ fontWeight: 'bold' }}>{formatPrice(course.price)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-sm)', color: '#059669' }}>
                <span>تخفیف ویژه تست:</span>
                <span style={{ fontWeight: 'bold' }}>رایگان (امکان ورود مستقیم)</span>
              </div>
              <div style={{ height: '1px', background: 'var(--brand-border)', margin: 'var(--space-3) 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-size-md)', fontWeight: 'bold', color: 'var(--brand-red)' }}>
                <span>مبلغ قابل پرداخت:</span>
                <span>{formatPrice(course.price)}</span>
              </div>
            </div>

            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
              🔒 با کلیک روی ثبت‌نام، دسترسی به تمامی محتوای ویدئویی، فایل‌های تمرین و پشتیبانی هوشمند برای شما فعال خواهد شد.
            </p>
          </div>

          <div className="modal-footer" style={{ borderTop: '1px solid var(--brand-border)' }}>
            <button
              className="btn btn-primary"
              style={{ flex: 1, padding: 'var(--space-3) var(--space-4)' }}
              onClick={handleEnrollAction}
              disabled={enrolling}
            >
              {enrolling ? 'در حال ثبت‌نام...' : 'تأیید و ثبت‌نام نهایی'}
            </button>
            <button className="btn btn-secondary" onClick={() => setEnrollModal(false)}>
              انصراف
            </button>
          </div>
        </div>
      </div>

      {/* Embedded CSS for Page Responsive Breakpoints & Effects */}
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .hero-responsive-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-3d-card {
            transform: none !important;
            max-width: 320px;
            margin: 0 auto;
          }
          .instructor-responsive {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
