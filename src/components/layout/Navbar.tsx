'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, Mic, User, LogOut, Home, BookOpen, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href={isAuthenticated ? '/home' : '/'} className="navbar-logo">
            <span className="navbar-logo-icon">
              <Mic size={18} />
            </span>
            مداح شو
          </Link>

          <div className="navbar-links">
            {isAuthenticated && (
              <>
                <Link href="/home" className="navbar-link">خانه</Link>
                <Link href="/courses" className="navbar-link">دوره‌ها</Link>
                <Link href="/profile" className="navbar-link">پروفایل</Link>
                {isAdmin && (
                  <Link href="/admin" className="navbar-link">پنل مدیریت</Link>
                )}
              </>
            )}
          </div>

          <div className="navbar-actions">
            {isAuthenticated ? (
              <>
                <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                  {user?.firstName}
                </span>
                <button className="btn btn-ghost btn-icon" onClick={logout} title="خروج">
                  <LogOut size={18} />
                </button>
              </>
            ) : (
              <Link href="/auth/login" className="btn btn-primary btn-sm">
                ورود
              </Link>
            )}
            <button
              className="navbar-mobile-toggle btn btn-ghost btn-icon"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)', color: 'var(--accent-gold)' }}>
            مداح شو
          </span>
          <button className="btn btn-ghost btn-icon" onClick={() => setMobileOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {isAuthenticated ? (
          <>
            <div style={{
              padding: 'var(--space-4)',
              background: 'var(--glass-bg)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
            }}>
              <div style={{ fontWeight: 'var(--font-weight-semibold)', marginBottom: 'var(--space-1)' }}>
                {user?.firstName} {user?.lastName}
              </div>
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)' }}>
                {user?.registrationCode}
              </div>
            </div>

            <Link href="/home" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
              <Home size={18} />
              خانه
            </Link>
            <Link href="/courses" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
              <BookOpen size={18} />
              دوره‌ها
            </Link>
            <Link href="/profile" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
              <User size={18} />
              پروفایل
            </Link>
            {isAdmin && (
              <Link href="/admin" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                <LayoutDashboard size={18} />
                پنل مدیریت
              </Link>
            )}

            <div style={{ marginTop: 'auto' }}>
              <button
                className="mobile-nav-link"
                onClick={() => { logout(); setMobileOpen(false); }}
                style={{ width: '100%', color: 'var(--error)' }}
              >
                <LogOut size={18} />
                خروج از حساب
              </button>
            </div>
          </>
        ) : (
          <Link
            href="/auth/login"
            className="btn btn-primary"
            onClick={() => setMobileOpen(false)}
            style={{ width: '100%' }}
          >
            ورود به مداح شو
          </Link>
        )}
      </div>
    </>
  );
}
