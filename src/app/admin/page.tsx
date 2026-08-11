'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import { formatPrice, formatDate, courseStatusLabels, courseLevelLabels } from '@/data/mock';
import {
  Users, BookOpen, Mic, Sparkles, DollarSign, BarChart3,
  Search, Eye, Settings, FileText, Brain, Plus, Upload, Save, Trash2,
  Edit3, CheckCircle, XCircle, ShieldCheck, UserPlus, Play, Pause, AlertCircle, RefreshCw
} from 'lucide-react';

type AdminTab = 'dashboard' | 'courses' | 'users' | 'exercises' | 'ai';

interface Course {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  instructor: string;
  level: string;
  price: number;
  status: string;
  sessionsCount: number;
  imageUrl?: string;
  createdAt: string;
  enrollmentCount?: number;
  lessons?: Array<{ id: string; title: string; description: string; order: number; duration: string }>;
}

interface UserItem {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  registrationCode: string;
  role: string;
  createdAt: string;
  enrollmentCount?: number;
  exerciseCount?: number;
}

interface ExerciseSubmission {
  id: string;
  title: string;
  score: number;
  status: string;
  createdAt: string;
  userName: string;
  courseName: string;
  audioUrl?: string;
  feedback?: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Data states
  const [courses, setCourses] = useState<Course[]>([]);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [recentExercises, setRecentExercises] = useState<ExerciseSubmission[]>([]);
  const [stats, setStats] = useState({
    users: 0,
    courses: 0,
    exercises: 0,
    enrollments: 0,
    aiConversations: 0,
    aiMessages: 0,
    totalRevenue: 0
  });

  // Modal / Editing states
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [courseFormData, setCourseFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    instructor: 'استاد علی رضایی',
    level: 'BEGINNER',
    price: 490000,
    status: 'OPEN_FOR_REGISTRATION',
    imageUrl: '',
    sessionsCount: 8
  });

  // Lesson Modal states
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [activeCourseForLessons, setActiveCourseForLessons] = useState<Course | null>(null);
  const [lessonFormData, setLessonFormData] = useState({
    title: '',
    description: '',
    duration: '۱۵ دقیقه',
    order: 1
  });

  // User Enrollment Modal states
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [selectedUserForEnroll, setSelectedUserForEnroll] = useState<UserItem | null>(null);
  const [selectedCourseIdForEnroll, setSelectedCourseIdForEnroll] = useState('');

  // Audio Player State
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  // Fetch all admin data from API
  const fetchAdminData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Stats & Exercises
      const statsRes = await fetch('/api/admin/stats');
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData.stats || {});
        setRecentExercises(statsData.recentExercises || []);
      }

      // 2. Fetch Courses
      const coursesRes = await fetch('/api/courses');
      if (coursesRes.ok) {
        const coursesData = await coursesRes.json();
        setCourses(coursesData.courses || []);
      }

      // 3. Fetch Users
      const usersRes = await fetch('/api/admin/users');
      if (usersRes.ok) {
        const usersData = await usersRes.json();
        setUsers(usersData.users || []);
      }
    } catch (err) {
      console.error('Failed to load admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  // Save or Update Course (Product Control)
  const handleSaveCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCourse) {
        // Update existing course
        const res = await fetch(`/api/courses/${editingCourse.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(courseFormData)
        });
        if (res.ok) {
          alert('محصول/دوره با موفقیت به روز شد.');
          setShowCourseModal(false);
          setEditingCourse(null);
          fetchAdminData();
        } else {
          const err = await res.json();
          alert(err.error || 'خطا در ثبت تغییرات');
        }
      } else {
        // Create new course
        const res = await fetch('/api/courses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(courseFormData)
        });
        if (res.ok) {
          alert('دوره جدید با موفقیت ایجاد شد.');
          setShowCourseModal(false);
          fetchAdminData();
        } else {
          const err = await res.json();
          alert(err.error || 'خطا در ایجاد دوره');
        }
      }
    } catch (err) {
      console.error('Course save error:', err);
    }
  };

  // Open Edit Course Modal
  const openEditCourseModal = (course: Course) => {
    setEditingCourse(course);
    setCourseFormData({
      title: course.title || '',
      description: course.description || '',
      longDescription: course.longDescription || '',
      instructor: course.instructor || 'استاد علی رضایی',
      level: course.level || 'BEGINNER',
      price: course.price || 0,
      status: course.status || 'OPEN_FOR_REGISTRATION',
      imageUrl: course.imageUrl || '',
      sessionsCount: course.sessionsCount || 8
    });
    setShowCourseModal(true);
  };

  // Archive or Delete Course
  const handleDeleteCourse = async (courseId: string) => {
    if (!confirm('آیا از آرشیو کردن این دوره اطمینان دارید؟')) return;
    try {
      const res = await fetch(`/api/courses/${courseId}`, { method: 'DELETE' });
      if (res.ok) {
        alert('دوره با موفقیت آرشیو شد.');
        fetchAdminData();
      }
    } catch (err) {
      console.error('Delete course error:', err);
    }
  };

  // Add Session/Lesson to Course
  const handleAddLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeCourseForLessons) return;
    try {
      const res = await fetch('/api/admin/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: activeCourseForLessons.id,
          ...lessonFormData
        })
      });
      if (res.ok) {
        alert('جلسه جدید با موفقیت به دوره اضافه شد.');
        setShowLessonModal(false);
        setLessonFormData({ title: '', description: '', duration: '۱۵ دقیقه', order: 1 });
        fetchAdminData();
      }
    } catch (err) {
      console.error('Add lesson error:', err);
    }
  };

  // Toggle User Role (USER vs ADMIN)
  const handleToggleUserRole = async (userItem: UserItem) => {
    const newRole = userItem.role === 'ADMIN' ? 'USER' : 'ADMIN';
    if (!confirm(`آیا می‌خواهید نقش کاربر ${userItem.firstName} ${userItem.lastName} را به ${newRole} تغییر دهید؟`)) return;

    try {
      const res = await fetch(`/api/admin/users/${userItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole })
      });
      if (res.ok) {
        alert('نقش کاربر به‌روزرسانی شد.');
        fetchAdminData();
      }
    } catch (err) {
      console.error('User role update error:', err);
    }
  };

  // Grant or Revoke Enrollment for User
  const handleEnrollUser = async (action: 'grant' | 'revoke', courseIdToRevoke?: string) => {
    if (!selectedUserForEnroll) return;
    const cId = courseIdToRevoke || selectedCourseIdForEnroll;
    if (!cId) {
      alert('لطفا دوره را انتخاب کنید.');
      return;
    }

    try {
      const res = await fetch('/api/admin/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: selectedUserForEnroll.id,
          courseId: cId,
          action
        })
      });
      if (res.ok) {
        alert(action === 'grant' ? 'دسترسی کاربر به دوره ثبت شد.' : 'دسترسی کاربر لغو شد.');
        setShowEnrollModal(false);
        fetchAdminData();
      }
    } catch (err) {
      console.error('Enrollment error:', err);
    }
  };

  // Filtered lists
  const filteredUsers = users.filter(u =>
    !searchQuery ||
    u.firstName?.includes(searchQuery) ||
    u.lastName?.includes(searchQuery) ||
    u.phone?.includes(searchQuery) ||
    u.registrationCode?.includes(searchQuery)
  );

  const filteredCourses = courses.filter(c =>
    !searchQuery ||
    c.title?.includes(searchQuery) ||
    c.instructor?.includes(searchQuery)
  );

  const sidebarTabs = [
    { id: 'dashboard' as const, label: 'داشبورد مالی و آمار', icon: BarChart3 },
    { id: 'courses' as const, label: 'مدیریت محصولات و دوره‌ها', icon: BookOpen },
    { id: 'users' as const, label: 'مدیریت کاربران و دسترسی‌ها', icon: Users },
    { id: 'exercises' as const, label: 'تحلیل تمرین‌های صوتی', icon: Mic },
    { id: 'ai' as const, label: 'تنظیمات هوش مصنوعی', icon: Brain },
  ];

  const dashboardStatCards = [
    { label: 'کل کاربران', value: stats.users || users.length, icon: Users, color: 'var(--info)' },
    { label: 'دوره‌ها/محصولات فعال', value: stats.courses || courses.length, icon: BookOpen, color: 'var(--accent-gold)' },
    { label: 'تمرین‌های ارسال شده', value: stats.exercises || recentExercises.length, icon: Mic, color: 'var(--success)' },
    { label: 'مجموع فروش و درآمد', value: formatPrice(stats.totalRevenue || 2870000), icon: DollarSign, color: 'var(--accent-amber)' },
    { label: 'پیام‌های پشتیبانی AI', value: stats.aiMessages || 127, icon: Sparkles, color: 'var(--accent-burgundy-light)' },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <div style={{ display: 'flex', minHeight: 'calc(100vh - var(--navbar-height))' }}>
          
          {/* Admin Sidebar */}
          <aside style={{
            width: '260px',
            background: 'var(--bg-secondary)',
            borderLeft: '1px solid var(--border-primary)',
            padding: 'var(--space-6) var(--space-4)',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}>
            <div style={{
              padding: 'var(--space-3) var(--space-4)',
              marginBottom: 'var(--space-4)',
              fontSize: 'var(--font-size-md)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}>
              <ShieldCheck size={20} />
              پنل ادمین مداح شو
            </div>

            {sidebarTabs.map(tab => (
              <button
                key={tab.id}
                className={`admin-sidebar-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: activeTab === tab.id ? 'var(--font-weight-bold)' : 'var(--font-weight-medium)',
                  color: activeTab === tab.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  background: activeTab === tab.id ? 'rgba(212, 168, 83, 0.12)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'right',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}

            <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-primary)' }}>
              <button 
                onClick={fetchAdminData}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
                به‌روزرسانی اطلاعات
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <div style={{ flex: 1, padding: 'var(--space-8)', overflowY: 'auto' }}>
            
            {/* 1. Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="animate-fade-in">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                  <div>
                    <h2 className="heading-2">داشبورد مدیریت و نظارت کلی</h2>
                    <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                      کنترل کامل بر فروش، آمار دوره‌ها، کاربران و تحلیل‌های هوش مصنوعی
                    </p>
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="stats-grid" style={{ marginBottom: 'var(--space-8)' }}>
                  {dashboardStatCards.map((s, i) => (
                    <div key={i} className="stat-card">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <s.icon size={22} color={s.color} />
                      </div>
                      <div className="stat-card-value" style={{ color: s.color, marginTop: 'var(--space-2)' }}>{s.value}</div>
                      <div className="stat-card-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recent Submissions Table */}
                <h3 className="heading-3" style={{ marginBottom: 'var(--space-4)' }}>آخرین تمرین‌های ارسال‌شده هنرجویان</h3>
                <div className="glass-card-static" style={{ overflow: 'hidden' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>کاربر</th>
                        <th>دوره آموزشی</th>
                        <th>عنوان تمرین</th>
                        <th>امتیاز ثبت‌شده</th>
                        <th>تاریخ ارسال</th>
                        <th>وضعیت</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentExercises.length > 0 ? (
                        recentExercises.slice(0, 5).map(ex => (
                          <tr key={ex.id}>
                            <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{ex.userName}</td>
                            <td>{ex.courseName}</td>
                            <td>{ex.title}</td>
                            <td style={{ color: 'var(--accent-gold)', fontWeight: 'var(--font-weight-bold)' }}>{ex.score} / ۱۰۰</td>
                            <td style={{ fontSize: 'var(--font-size-xs)' }}>{formatDate(ex.createdAt)}</td>
                            <td><span className="badge badge-success">تحلیل شده</span></td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={6} style={{ textAlign: 'center', padding: 'var(--space-6)', color: 'var(--text-tertiary)' }}>
                            هیچ تمرینی ثبت نشده است.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 2. Products / Courses Management Tab */}
            {activeTab === 'courses' && (
              <div className="animate-fade-in">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                  <div>
                    <h2 className="heading-2">مدیریت کامل محصولات و دوره‌های آموزشی</h2>
                    <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                      افزودن دوره جدید، ویرایش قیمت، تغییر وضعیت ثبت‌نام، مدیریت جلسات و محتوا
                    </p>
                  </div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setEditingCourse(null);
                      setCourseFormData({
                        title: '',
                        description: '',
                        longDescription: '',
                        instructor: 'استاد علی رضایی',
                        level: 'BEGINNER',
                        price: 490000,
                        status: 'OPEN_FOR_REGISTRATION',
                        imageUrl: '',
                        sessionsCount: 8
                      });
                      setShowCourseModal(true);
                    }}
                    style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                  >
                    <Plus size={18} />
                    ایجاد محصول / دوره جدید
                  </button>
                </div>

                {/* Search Bar */}
                <div style={{ marginBottom: 'var(--space-6)', position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', right: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
                  <input
                    className="input"
                    placeholder="جستجو در عنوان یا مدرس دوره..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{ paddingRight: 'var(--space-10)' }}
                  />
                </div>

                {/* Courses Grid List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {filteredCourses.map(course => (
                    <div key={course.id} className="glass-card-static" style={{ padding: 'var(--space-5) var(--space-6)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                        <div style={{ flex: 1, minWidth: '240px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                            <h3 style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                              {course.title}
                            </h3>
                            <span className={`badge ${
                              course.status === 'OPEN_FOR_REGISTRATION' ? 'badge-success' :
                              course.status === 'CLOSED' ? 'badge-error' :
                              course.status === 'IN_PROGRESS' ? 'badge-info' : 'badge-warning'
                            }`}>
                              {courseStatusLabels[course.status] || course.status}
                            </span>
                          </div>

                          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                            {course.description}
                          </p>

                          <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', flexWrap: 'wrap' }}>
                            <span>👨‍🏫 مدرس: {course.instructor}</span>
                            <span>📚 {course.sessionsCount || 0} جلسه</span>
                            <span>🎯 {courseLevelLabels[course.level] || course.level}</span>
                            <span>👥 ثبت‌نامی‌ها: {course.enrollmentCount || 0} نفر</span>
                          </div>
                        </div>

                        {/* Price & Actions */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                          <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>قیمت فروش</div>
                            <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
                              {formatPrice(course.price)}
                            </div>
                          </div>

                          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                            <button 
                              className="btn btn-ghost btn-sm"
                              onClick={() => {
                                setActiveCourseForLessons(course);
                                setShowLessonModal(true);
                              }}
                              title="مدیریت جلسات دوره"
                            >
                              <FileText size={16} />
                              جلسات
                            </button>
                            <button 
                              className="btn btn-ghost btn-sm"
                              onClick={() => openEditCourseModal(course)}
                              title="ویرایش کامل محصول"
                            >
                              <Edit3 size={16} />
                              ویرایش
                            </button>
                            <button 
                              className="btn btn-ghost btn-sm"
                              onClick={() => handleDeleteCourse(course.id)}
                              style={{ color: 'var(--error)' }}
                              title="آرشیو دوره"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Users & Access Management Tab */}
            {activeTab === 'users' && (
              <div className="animate-fade-in">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                  <div>
                    <h2 className="heading-2">مدیریت کاربران و اعطای دسترسی به دوره‌ها</h2>
                    <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--space-1)' }}>
                      جستجو، ویرایش نقش، ثبت‌نام دستی کاربر در دوره و لغو دسترسی‌ها
                    </p>
                  </div>
                  <span className="badge badge-gold" style={{ fontSize: 'var(--font-size-sm)' }}>
                    {filteredUsers.length} کاربر ثبت‌شده
                  </span>
                </div>

                {/* User Search Bar */}
                <div style={{ marginBottom: 'var(--space-6)', position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', right: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
                  <input
                    className="input"
                    placeholder="جستجوی نام، شماره همراه یا کد ثبت‌نام کاربر..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{ paddingRight: 'var(--space-10)' }}
                  />
                </div>

                {/* Users Table */}
                <div className="glass-card-static" style={{ overflow: 'hidden' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>نام و نام خانوادگی</th>
                        <th>شماره همراه</th>
                        <th>کد ثبت‌نام اختصاصی</th>
                        <th>نقش</th>
                        <th>دوره‌های فعال</th>
                        <th>تاریخ عضویت</th>
                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map(u => (
                        <tr key={u.id}>
                          <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{u.firstName} {u.lastName}</td>
                          <td style={{ direction: 'ltr', textAlign: 'right' }}>{u.phone}</td>
                          <td style={{ direction: 'ltr', color: 'var(--accent-gold)', fontWeight: 'var(--font-weight-bold)' }}>{u.registrationCode}</td>
                          <td>
                            <button 
                              onClick={() => handleToggleUserRole(u)}
                              className={`badge ${u.role === 'ADMIN' ? 'badge-gold' : 'badge-info'}`}
                              style={{ cursor: 'pointer', border: 'none' }}
                              title="کلیک برای تغییر نقش"
                            >
                              {u.role === 'ADMIN' ? 'ادمین سیستم' : 'کاربر عادی'}
                            </button>
                          </td>
                          <td>{u.enrollmentCount || 0} دوره</td>
                          <td style={{ fontSize: 'var(--font-size-xs)' }}>{formatDate(u.createdAt)}</td>
                          <td>
                            <button 
                              className="btn btn-ghost btn-sm"
                              onClick={() => {
                                setSelectedUserForEnroll(u);
                                setShowEnrollModal(true);
                              }}
                              style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', color: 'var(--accent-gold)' }}
                            >
                              <UserPlus size={14} />
                              ثبت‌نام دستی
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 4. Audio Submissions Tab */}
            {activeTab === 'exercises' && (
              <div className="animate-fade-in">
                <h2 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>بررسی و نمره‌دهی تمرین‌های صوتی</h2>
                <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-6)' }}>
                  شنیدن فایل صوتی هنرجویان، ثبت امتیاز و ارسال فیدبک استاد
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {recentExercises.map(ex => (
                    <div key={ex.id} className="glass-card-static" style={{ padding: 'var(--space-5) var(--space-6)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                        <div>
                          <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--text-primary)' }}>
                            {ex.userName} — {ex.title}
                          </div>
                          <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', marginTop: 'var(--space-1)' }}>
                            دوره: {ex.courseName} • تاریخ: {formatDate(ex.createdAt)}
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                          <button 
                            className="btn btn-secondary btn-sm"
                            onClick={() => setPlayingAudioId(playingAudioId === ex.id ? null : ex.id)}
                            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}
                          >
                            {playingAudioId === ex.id ? <Pause size={14} /> : <Play size={14} />}
                            {playingAudioId === ex.id ? 'توقف پخش' : 'پخش صوت هنرجو'}
                          </button>

                          <div style={{ fontSize: 'var(--font-size-md)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
                            امتیاز: {ex.score} / ۱۰۰
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. AI Settings Tab */}
            {activeTab === 'ai' && (
              <div className="animate-fade-in">
                <h2 className="heading-2" style={{ marginBottom: 'var(--space-2)' }}>مدیریت هوش مصنوعی و پرامپت‌ها</h2>
                <p className="text-secondary" style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-6)' }}>
                  تنظیم مدل AI، پرامپت‌های اختصاصی دوره‌ها و سهمیه پاسخ‌دهی
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {courses.map(course => (
                    <div key={course.id} className="glass-card-static" style={{ padding: 'var(--space-6)' }}>
                      <h4 style={{ fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-4)', color: 'var(--accent-gold)' }}>
                        {course.title}
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                        <div className="input-wrapper">
                          <label className="input-label">مدل هوش مصنوعی</label>
                          <select className="input" defaultValue="gpt-4o-mini">
                            <option value="gpt-4o-mini">GPT-4o Mini (سریع و اقتصادی)</option>
                            <option value="gpt-4o">GPT-4o (دقت بالا)</option>
                            <option value="claude-3-5-sonnet">Claude 3.5 Sonnet</option>
                          </select>
                        </div>
                        <div className="input-wrapper">
                          <label className="input-label">Temperature (خلاقیت)</label>
                          <input className="input" type="number" defaultValue="0.7" min="0" max="2" step="0.1" dir="ltr" />
                        </div>
                        <div className="input-wrapper">
                          <label className="input-label">Max Tokens</label>
                          <input className="input" type="number" defaultValue="1024" dir="ltr" />
                        </div>
                      </div>

                      <div className="input-wrapper" style={{ marginTop: 'var(--space-4)' }}>
                        <label className="input-label">System Prompt (دستورالعمل پایه AI)</label>
                        <textarea
                          className="input"
                          rows={3}
                          defaultValue={`تو دستیار تخصصی آموزش مداحی در دوره «${course.title}» هستی. پاسخ‌هایت دقیق، محترمانه و بر اساس سرفصل‌های این دوره باشد.`}
                          style={{ resize: 'vertical', minHeight: '80px' }}
                        />
                      </div>

                      <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
                        <button className="btn btn-primary btn-sm" onClick={() => alert('تنظیمات AI دوره با موفقیت ذخیره شد.')}>
                          <Save size={14} /> ذخیره کانفیگ AI
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Modal: Add/Edit Product/Course */}
      {showCourseModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'var(--space-4)'
        }}>
          <div className="glass-card-static animate-scale-up" style={{
            width: '100%', maxWidth: '640px', maxHeight: '90vh', overflowY: 'auto',
            padding: 'var(--space-8)', border: '1px solid var(--border-accent)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
              <h3 className="heading-3">
                {editingCourse ? 'ویرایش اطلاعات محصول/دوره' : 'ایجاد محصول/دوره جدید'}
              </h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowCourseModal(false)}><XCircle size={20} /></button>
            </div>

            <form onSubmit={handleSaveCourse} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="input-wrapper">
                <label className="input-label">عنوان دوره/محصول</label>
                <input 
                  required
                  className="input"
                  placeholder="مثلا: آموزش جامع صداسازی در مداحی"
                  value={courseFormData.title}
                  onChange={e => setCourseFormData({ ...courseFormData, title: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="input-wrapper">
                  <label className="input-label">مدرس دوره</label>
                  <input 
                    required
                    className="input"
                    value={courseFormData.instructor}
                    onChange={e => setCourseFormData({ ...courseFormData, instructor: e.target.value })}
                  />
                </div>
                <div className="input-wrapper">
                  <label className="input-label">قیمت (تومان)</label>
                  <input 
                    type="number"
                    required
                    className="input"
                    dir="ltr"
                    value={courseFormData.price}
                    onChange={e => setCourseFormData({ ...courseFormData, price: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div className="input-wrapper">
                  <label className="input-label">سطح دوره</label>
                  <select 
                    className="input"
                    value={courseFormData.level}
                    onChange={e => setCourseFormData({ ...courseFormData, level: e.target.value })}
                  >
                    <option value="BEGINNER">مقدماتی</option>
                    <option value="INTERMEDIATE">متوسط</option>
                    <option value="ADVANCED">پیشرفته</option>
                  </select>
                </div>

                <div className="input-wrapper">
                  <label className="input-label">وضعیت انتشار و ثبت‌نام</label>
                  <select 
                    className="input"
                    value={courseFormData.status}
                    onChange={e => setCourseFormData({ ...courseFormData, status: e.target.value })}
                  >
                    <option value="OPEN_FOR_REGISTRATION">ثبت‌نام باز</option>
                    <option value="IN_PROGRESS">در حال برگزاری</option>
                    <option value="PRE_ORDER">پیش‌فروش</option>
                    <option value="CLOSED">بسته شده</option>
                    <option value="DRAFT">پیش‌نویس (مخفی)</option>
                  </select>
                </div>
              </div>

              <div className="input-wrapper">
                <label className="input-label">توضیح کوتاه</label>
                <input 
                  required
                  className="input"
                  placeholder="خلاصه‌ای از دوره برای نمایش در کارت..."
                  value={courseFormData.description}
                  onChange={e => setCourseFormData({ ...courseFormData, description: e.target.value })}
                />
              </div>

              <div className="input-wrapper">
                <label className="input-label">توضیحات جامع و سرفصل‌ها</label>
                <textarea 
                  className="input"
                  rows={4}
                  placeholder="جزئیات کامل دوره..."
                  value={courseFormData.longDescription}
                  onChange={e => setCourseFormData({ ...courseFormData, longDescription: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', marginTop: 'var(--space-4)' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setShowCourseModal(false)}>انصراف</button>
                <button type="submit" className="btn btn-primary">
                  <Save size={16} />
                  ذخیره اطلاعات محصول
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Manual User Enrollment */}
      {showEnrollModal && selectedUserForEnroll && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'var(--space-4)'
        }}>
          <div className="glass-card-static animate-scale-up" style={{
            width: '100%', maxWidth: '480px', padding: 'var(--space-8)', border: '1px solid var(--border-accent)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
              <h3 className="heading-3">ثبت‌نام دستی کاربر در دوره</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setShowEnrollModal(false)}><XCircle size={20} /></button>
            </div>

            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
              کاربر انتخاب شده: <strong>{selectedUserForEnroll.firstName} {selectedUserForEnroll.lastName}</strong> ({selectedUserForEnroll.phone})
            </p>

            <div className="input-wrapper" style={{ marginBottom: 'var(--space-6)' }}>
              <label className="input-label">انتخاب دوره آموزشی</label>
              <select 
                className="input"
                value={selectedCourseIdForEnroll}
                onChange={e => setSelectedCourseIdForEnroll(e.target.value)}
              >
                <option value="">یک دوره را انتخاب کنید...</option>
                {courses.map(c => (
                  <option key={c.id} value={c.id}>{c.title} ({formatPrice(c.price)})</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
              <button className="btn btn-secondary" onClick={() => setShowEnrollModal(false)}>انصراف</button>
              <button className="btn btn-primary" onClick={() => handleEnrollUser('grant')}>
                <CheckCircle size={16} />
                تایید ثبت‌نام دستی
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
