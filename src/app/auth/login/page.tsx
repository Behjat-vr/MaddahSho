'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { Mic, LogIn, Loader2, ShieldCheck, User } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!phone || !code) {
      setError('لطفاً شماره تماس و کد ثبت‌نام را وارد کنید.');
      return;
    }
    setLoading(true);
    try {
      const res = await login(phone, code);
      if (res.success) {
        if (phone === '09120000000') {
          router.push('/admin');
        } else {
          router.push('/home');
        }
      } else {
        setError(res.message || 'اطلاعات وارد شده نامعتبر است.');
      }
    } catch {
      setError('خطایی رخ داد. لطفاً دوباره تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickAdminLogin = async () => {
    setLoading(true);
    setError('');
    setPhone('09120000000');
    setCode('ADMIN123');
    try {
      const res = await login('09120000000', 'ADMIN123');
      if (res.success) {
        router.push('/admin');
      } else {
        setError(res.message || 'خطا در ورود ادمین.');
      }
    } catch {
      setError('خطایی رخ داد.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickUserLogin = async () => {
    setLoading(true);
    setError('');
    setPhone('09121111111');
    setCode('USER123');
    try {
      const res = await login('09121111111', 'USER123');
      if (res.success) {
        router.push('/home');
      } else {
        setError(res.message || 'خطا در ورود کاربر تستی.');
      }
    } catch {
      setError('خطایی رخ داد.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero" style={{ background: 'var(--bg-primary)' }}>
      <div className="hero-bg">
        <ParticleBackground count={20} />
        <div className="hero-radial" />
      </div>

      <div className="hero-content" style={{ maxWidth: '440px', width: '100%' }}>
        {/* Logo */}
        <div className="animate-fade-in-up" style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'var(--brand-red)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-6)',
          boxShadow: 'var(--shadow-glow-crimson)',
        }}>
          <Mic size={28} color="#FFFFFF" />
        </div>

        <h1 className="heading-2 animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-3)' }}>
          به <span className="text-gradient">مداح شو</span> خوش آمدید
        </h1>
        <p className="text-muted animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-8)' }}>
          برای ورود شماره تماس و کد ثبت‌نام را وارد کنید یا از دکمه‌های ورود سریع استفاده کنید.
        </p>

        <form onSubmit={handleSubmit} className="glass-card-static animate-fade-in-up-delay-2" style={{
          padding: 'var(--space-8)',
          textAlign: 'right',
        }}>
          <div className="input-wrapper" style={{ marginBottom: 'var(--space-5)' }}>
            <label className="input-label" htmlFor="phone">شماره تماس</label>
            <input
              id="phone"
              type="tel"
              className="input"
              placeholder="09120000000"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              dir="ltr"
              style={{ textAlign: 'left' }}
            />
          </div>

          <div className="input-wrapper" style={{ marginBottom: 'var(--space-6)' }}>
            <label className="input-label" htmlFor="code">کد ثبت‌نام / رمز</label>
            <input
              id="code"
              type="text"
              className="input"
              placeholder="ADMIN123 یا کد ثبت‌نام"
              value={code}
              onChange={e => setCode(e.target.value)}
              dir="ltr"
              style={{ textAlign: 'left' }}
            />
          </div>

          {error && (
            <div style={{
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--error-bg)',
              border: '1px solid rgba(169, 0, 28, 0.2)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--error)',
              fontSize: 'var(--font-size-sm)',
              marginBottom: 'var(--space-5)',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            disabled={loading}
          >
            {loading ? (
              <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
            ) : (
              <LogIn size={18} />
            )}
            {loading ? 'در حال ورود...' : 'ورود به حساب'}
          </button>

          {/* Quick Test Login Options */}
          <div style={{
            marginTop: 'var(--space-6)',
            paddingTop: 'var(--space-5)',
            borderTop: '1px solid var(--border-primary)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
          }}>
            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-tertiary)', textAlign: 'center', fontWeight: 'bold' }}>
              ⚡ ورود سریع آزمایشی (بدون نیاز به SMS)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{
                  borderColor: 'var(--brand-gold)',
                  color: 'var(--brand-gold-dark)',
                  fontWeight: 'bold',
                }}
                onClick={handleQuickAdminLogin}
                disabled={loading}
              >
                <ShieldCheck size={16} />
                ورود ادمین
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{
                  borderColor: 'var(--brand-border)',
                  color: 'var(--text-primary)',
                }}
                onClick={handleQuickUserLogin}
                disabled={loading}
              >
                <User size={16} />
                ورود کاربر عادی
              </button>
            </div>
          </div>
        </form>

        <p className="animate-fade-in-up-delay-3" style={{
          marginTop: 'var(--space-6)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--text-tertiary)',
        }}>
          هنوز ثبت‌نام نکرده‌اید؟{' '}
          <Link href="/auth/register" style={{ color: 'var(--brand-red)', fontWeight: 'bold' }}>
            ثبت‌نام کنید
          </Link>
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
