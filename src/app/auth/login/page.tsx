'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { Mic, LogIn, Loader2 } from 'lucide-react';

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
        router.push('/home');
      } else {
        setError(res.message || 'اطلاعات وارد شده نامعتبر است.');
      }
    } catch {
      setError('خطایی رخ داد. لطفاً دوباره تلاش کنید.');
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
          background: 'rgba(212, 168, 83, 0.1)',
          border: '2px solid rgba(212, 168, 83, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-6)',
          boxShadow: 'var(--shadow-glow-gold)',
        }}>
          <Mic size={24} color="var(--accent-gold)" />
        </div>

        <h1 className="heading-2 animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-3)' }}>
          به <span className="text-gradient">مداح شو</span> خوش آمدید
        </h1>
        <p className="text-muted animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-8)' }}>
          برای ورود به حساب خود شماره تماس و کد ثبت‌نامتان را وارد کنید.
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
              placeholder="09121234567"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              dir="ltr"
              style={{ textAlign: 'left' }}
            />
          </div>

          <div className="input-wrapper" style={{ marginBottom: 'var(--space-6)' }}>
            <label className="input-label" htmlFor="code">کد ثبت‌نام</label>
            <input
              id="code"
              type="text"
              className="input"
              placeholder="MDH-XXXX-XX"
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
              border: '1px solid rgba(229, 72, 77, 0.2)',
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
            {loading ? 'در حال ورود...' : 'ورود به مداح شو'}
          </button>
        </form>

        <p className="animate-fade-in-up-delay-3" style={{
          marginTop: 'var(--space-6)',
          fontSize: 'var(--font-size-sm)',
          color: 'var(--text-tertiary)',
        }}>
          هنوز ثبت‌نام نکرده‌اید؟{' '}
          <Link href="/auth/register" style={{ color: 'var(--accent-gold)' }}>
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
