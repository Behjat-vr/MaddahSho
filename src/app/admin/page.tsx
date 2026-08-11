'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { mockAllUsers, mockCourses, mockExercises, formatPrice, formatDate, courseStatusLabels, courseLevelLabels } from '@/data/mock';
import {
  Users, BookOpen, Mic, Sparkles, DollarSign, BarChart3,
  Search, Eye, Settings, FileText, Brain, ChevronLeft,
  Plus, Upload, Save, Trash2
} from 'lucide-react';

type AdminTab = 'dashboard' | 'users' | 'courses' | 'ai';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'dashboard' as const, label: 'داشبورد', icon: BarChart3 },
    { id: 'users' as const, label: 'کاربران', icon: Users },
    { id: 'courses' as const, label: 'دوره‌ها', icon: BookOpen },
    { id: 'ai' as const, label: 'هوش مصنوعی', icon: Brain },
  ];

  const stats = [
    { label: 'کاربران', value: mockAllUsers.length, icon: Users, color: 'var(--info)' },
    { label: 'دوره‌ها', value: mockCourses.length, icon: BookOpen, color: 'var(--accent-gold)' },
    { label: 'تمرین‌ها', value: mockExercises.length, icon: Mic, color: 'var(--success)' },
    { label: 'درآمد', value: formatPrice(2870000), icon: DollarSign, color: 'var(--accent-amber)' },
    { label: 'درخواست AI', value: '127', icon: Sparkles, color: 'var(--accent-burgundy-light)' },
    { label: 'تحلیل تمرین', value: mockExercises.length, icon: BarChart3, color: 'var(--accent-crimson-light)' },
  ];

  const filteredUsers = mockAllUsers.filter(u =>
    !searchQuery ||
    u.firstName.includes(searchQuery) ||
    u.lastName.includes(searchQuery) ||
    u.phone.includes(searchQuery) ||
    u.registrationCode.includes(searchQuery)
  );

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        <div style={{ display: 'flex', minHeight: 'calc(100vh - var(--navbar-height))' }}>
          {/* Sidebar */}
          <aside style={{
            width: '240px',
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
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--accent-gold)',
            }}>
              پنل مدیریت
            </div>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`admin-sidebar-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </aside>

          {/* Content */}
          <div style={{ flex: 1, padding: 'var(--space-8)', overflowY: 'auto' }}>
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="animate-fade-in">
                <h2 className="heading-2" style={{ marginBottom: 'var(--space-6)' }}>داشبورد</h2>
                <div className="stats-grid" style={{ marginBottom: 'var(--space-8)' }}>
                  {stats.map((s, i) => (
                    <div key={i} className="stat-card">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <s.icon size={20} color={s.color} />
                      </div>
                      <div className="stat-card-value" style={{ color: s.color }}>{s.value}</div>
                      <div className="stat-card-label">{s.label}</div>
                    </div>
                  ))}
                </div>

                <h3 className="heading-3" style={{ marginBottom: 'var(--space-4)' }}>آخرین تمرین‌ها</h3>
                <div className="glass-card-static" style={{ overflow: 'hidden' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>کاربر</th>
                        <th>تمرین</th>
                        <th>امتیاز</th>
                        <th>تاریخ</th>
                        <th>وضعیت</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockExercises.slice(-4).reverse().map(ex => (
                        <tr key={ex.id}>
                          <td>محمدحسین رضایی</td>
                          <td>{ex.title}</td>
                          <td style={{ color: 'var(--accent-gold)', fontWeight: 'var(--font-weight-bold)' }}>{ex.score}</td>
                          <td style={{ fontSize: 'var(--font-size-xs)' }}>{formatDate(ex.createdAt)}</td>
                          <td><span className="badge badge-success">تحلیل شده</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Users */}
            {activeTab === 'users' && (
              <div className="animate-fade-in">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)' }}>
                  <h2 className="heading-2">مدیریت کاربران</h2>
                  <span className="badge badge-gold">{mockAllUsers.length} کاربر</span>
                </div>

                <div style={{ marginBottom: 'var(--space-6)', position: 'relative' }}>
                  <Search size={18} style={{ position: 'absolute', right: 'var(--space-4)', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }} />
                  <input
                    className="input"
                    placeholder="جستجوی نام، شماره یا کد ثبت‌نام..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{ paddingRight: 'var(--space-10)' }}
                  />
                </div>

                <div className="glass-card-static" style={{ overflow: 'hidden' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>نام</th>
                        <th>شماره</th>
                        <th>کد ثبت‌نام</th>
                        <th>تاریخ عضویت</th>
                        <th>عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.map(u => (
                        <tr key={u.id}>
                          <td style={{ fontWeight: 'var(--font-weight-medium)' }}>{u.firstName} {u.lastName}</td>
                          <td style={{ direction: 'ltr', textAlign: 'right' }}>{u.phone}</td>
                          <td style={{ direction: 'ltr', color: 'var(--accent-gold)', fontWeight: 'var(--font-weight-medium)' }}>{u.registrationCode}</td>
                          <td style={{ fontSize: 'var(--font-size-xs)' }}>{formatDate(u.createdAt)}</td>
                          <td>
                            <button className="btn btn-ghost btn-sm"><Eye size={14} /> مشاهده</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Courses */}
            {activeTab === 'courses' && (
              <div className="animate-fade-in">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-6)' }}>
                  <h2 className="heading-2">مدیریت دوره‌ها</h2>
                  <button className="btn btn-primary btn-sm">
                    <Plus size={16} />
                    دوره جدید
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {mockCourses.map(course => (
                    <div key={course.id} className="glass-card-static" style={{
                      padding: 'var(--space-5) var(--space-6)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <h4 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-2)' }}>
                            {course.title}
                          </h4>
                          <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                            <span>{course.instructor}</span>
                            <span>{course.sessionsCount} جلسه</span>
                            <span>{courseLevelLabels[course.level]}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                          <span className={`badge ${
                            course.status === 'OPEN_FOR_REGISTRATION' ? 'badge-success' :
                            course.status === 'CLOSED' ? 'badge-error' :
                            course.status === 'UPCOMING' ? 'badge-info' : 'badge-warning'
                          }`}>
                            {courseStatusLabels[course.status]}
                          </span>
                          <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
                            {formatPrice(course.price)}
                          </span>
                          <button className="btn btn-ghost btn-sm"><Settings size={14} /></button>
                          <button className="btn btn-ghost btn-sm"><FileText size={14} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Management */}
            {activeTab === 'ai' && (
              <div className="animate-fade-in">
                <h2 className="heading-2" style={{ marginBottom: 'var(--space-6)' }}>مدیریت هوش مصنوعی</h2>

                {/* Usage Stats */}
                <div className="stats-grid" style={{ marginBottom: 'var(--space-8)' }}>
                  <div className="stat-card">
                    <Sparkles size={20} color="var(--accent-gold)" />
                    <div className="stat-card-value">127</div>
                    <div className="stat-card-label">درخواست‌های AI</div>
                  </div>
                  <div className="stat-card">
                    <Users size={20} color="var(--info)" />
                    <div className="stat-card-value" style={{ color: 'var(--info)' }}>23</div>
                    <div className="stat-card-label">کاربران فعال</div>
                  </div>
                  <div className="stat-card">
                    <BarChart3 size={20} color="var(--success)" />
                    <div className="stat-card-value" style={{ color: 'var(--success)' }}>45.2K</div>
                    <div className="stat-card-label">توکن مصرفی</div>
                  </div>
                  <div className="stat-card">
                    <DollarSign size={20} color="var(--warning)" />
                    <div className="stat-card-value" style={{ color: 'var(--warning)' }}>$3.42</div>
                    <div className="stat-card-label">هزینه تقریبی</div>
                  </div>
                </div>

                {/* AI Settings per Course */}
                <h3 className="heading-3" style={{ marginBottom: 'var(--space-4)' }}>تنظیمات AI دوره‌ها</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {mockCourses.map(course => (
                    <div key={course.id} className="glass-card-static" style={{ padding: 'var(--space-6)' }}>
                      <h4 style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-4)' }}>
                        {course.title}
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                        <div className="input-wrapper">
                          <label className="input-label">مدل AI</label>
                          <select className="input" defaultValue="gpt-4o-mini">
                            <option value="gpt-4o-mini">GPT-4o Mini</option>
                            <option value="gpt-4o">GPT-4o</option>
                            <option value="gpt-4-turbo">GPT-4 Turbo</option>
                          </select>
                        </div>
                        <div className="input-wrapper">
                          <label className="input-label">Temperature</label>
                          <input className="input" type="number" defaultValue="0.7" min="0" max="2" step="0.1" dir="ltr" />
                        </div>
                        <div className="input-wrapper">
                          <label className="input-label">Max Tokens</label>
                          <input className="input" type="number" defaultValue="1024" dir="ltr" />
                        </div>
                      </div>

                      <div className="input-wrapper" style={{ marginTop: 'var(--space-4)' }}>
                        <label className="input-label">System Prompt</label>
                        <textarea
                          className="input"
                          rows={3}
                          defaultValue={`تو دستیار آموزشی دوره «${course.title}» در پلتفرم مداح شو هستی. وظیفه تو فقط پاسخ دادن به سؤالات مرتبط با محتوای این دوره است.`}
                          style={{ resize: 'vertical', minHeight: '80px' }}
                        />
                      </div>

                      <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
                        <button className="btn btn-primary btn-sm"><Save size={14} /> ذخیره</button>
                        <button className="btn btn-secondary btn-sm"><Upload size={14} /> آپلود Knowledge Base</button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quota Settings */}
                <h3 className="heading-3" style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-4)' }}>
                  تنظیم سهمیه پیام
                </h3>
                <div className="glass-card-static" style={{ padding: 'var(--space-6)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-4)' }}>
                    <div className="input-wrapper">
                      <label className="input-label">کاربر عادی (پیام)</label>
                      <input className="input" type="number" defaultValue="3" dir="ltr" />
                    </div>
                    <div className="input-wrapper">
                      <label className="input-label">کاربر ثبت‌نام شده در دوره (پیام)</label>
                      <input className="input" type="number" defaultValue="5" dir="ltr" />
                    </div>
                  </div>
                  <button className="btn btn-primary btn-sm" style={{ marginTop: 'var(--space-4)' }}>
                    <Save size={14} /> ذخیره تنظیمات
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
