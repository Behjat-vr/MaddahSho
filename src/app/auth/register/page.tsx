'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { Mic, UserPlus, Loader2, Check, Copy } from 'lucide-react';

type Step = 'info' | 'otp' | 'success';

export default function RegisterPage() {
  const router = useRouter();
  const { sendOtp, register } = useAuth();
  const [step, setStep] = useState<Step>('info');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [regCode, setRegCode] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!firstName || !lastName || !phone) {
      setError('لطفاً تمام فیلدها را پر کنید.');
      return;
    }
    setLoading(true);
    try {
      const res = await sendOtp(phone);
      if (res.success) {
        setStep('otp');
      } else {
        setError(res.message || 'خطا در ارسال کد تأیید.');
      }
    } catch {
      setError('خطایی رخ داد. لطفاً دوباره تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 4) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < 5) {
      setError('لطفاً کد تأیید را کامل وارد کنید.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await register(firstName, lastName, phone, code);
      if (res.success && res.registrationCode) {
        setRegCode(res.registrationCode);
        setStep('success');
      } else {
        setError(res.message || 'کد وارد شده صحیح نیست.');
      }
    } catch {
      setError('خطایی رخ داد. لطفاً دوباره تلاش کنید.');
    } finally {
      setLoading(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(regCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="hero" style={{ background: 'var(--bg-primary)' }}>
      <div className="hero-bg">
        <ParticleBackground count={20} />
        <div className="hero-radial" />
      </div>

      <div className="hero-content" style={{ maxWidth: '440px', width: '100%' }}>
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

        {step === 'info' && (
          <>
            <h1 className="heading-2 animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-3)' }}>
              عضویت در <span className="text-gradient">مداح شو</span>
            </h1>
            <p className="text-muted animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-8)' }}>
              اطلاعات خود را وارد کنید تا حساب کاربری شما ساخته شود.
            </p>

            <form onSubmit={handleInfoSubmit} className="glass-card-static animate-fade-in-up-delay-2" style={{
              padding: 'var(--space-8)',
              textAlign: 'right',
            }}>
              <div className="input-wrapper" style={{ marginBottom: 'var(--space-5)' }}>
                <label className="input-label" htmlFor="firstName">نام</label>
                <input
                  id="firstName"
                  type="text"
                  className="input"
                  placeholder="نام شما"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>

              <div className="input-wrapper" style={{ marginBottom: 'var(--space-5)' }}>
                <label className="input-label" htmlFor="lastName">نام خانوادگی</label>
                <input
                  id="lastName"
                  type="text"
                  className="input"
                  placeholder="نام خانوادگی شما"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>

              <div className="input-wrapper" style={{ marginBottom: 'var(--space-6)' }}>
                <label className="input-label" htmlFor="regPhone">شماره موبایل</label>
                <input
                  id="regPhone"
                  type="tel"
                  className="input"
                  placeholder="09121234567"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
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

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                <UserPlus size={18} />
                دریافت کد تأیید
              </button>
            </form>

            <p style={{
              marginTop: 'var(--space-6)',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-tertiary)',
            }}>
              قبلاً ثبت‌نام کرده‌اید؟{' '}
              <Link href="/auth/login" style={{ color: 'var(--accent-gold)' }}>
                وارد شوید
              </Link>
            </p>
          </>
        )}

        {step === 'otp' && (
          <>
            <h1 className="heading-2 animate-fade-in-up" style={{ marginBottom: 'var(--space-3)' }}>
              تأیید شماره موبایل
            </h1>
            <p className="text-muted animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-8)' }}>
              کد تأیید ارسال شده به {phone} را وارد کنید.
            </p>

            <form onSubmit={handleOtpSubmit} className="glass-card-static animate-fade-in-up-delay-2" style={{
              padding: 'var(--space-8)',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-6)',
                direction: 'ltr',
              }}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="input"
                    value={digit}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    style={{
                      width: '50px',
                      height: '56px',
                      textAlign: 'center',
                      fontSize: 'var(--font-size-xl)',
                      fontWeight: 'var(--font-weight-bold)',
                      padding: '0',
                    }}
                  />
                ))}
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
                  textAlign: 'center',
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
                  <Check size={18} />
                )}
                {loading ? 'در حال تأیید...' : 'تأیید و ثبت‌نام'}
              </button>

              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => { setStep('info'); setError(''); }}
                style={{ width: '100%', marginTop: 'var(--space-3)' }}
              >
                بازگشت
              </button>
            </form>
          </>
        )}

        {step === 'success' && (
          <div className="animate-fade-in-up">
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'var(--success-bg)',
              border: '2px solid rgba(62, 207, 142, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-6)',
            }}>
              <Check size={32} color="var(--success)" />
            </div>

            <h1 className="heading-2" style={{ marginBottom: 'var(--space-3)' }}>
              ثبت‌نام موفق!
            </h1>
            <p className="text-muted" style={{ marginBottom: 'var(--space-8)' }}>
              حساب کاربری شما ساخته شد. کد ثبت‌نام خود را ذخیره کنید.
            </p>

            <div className="glass-card-static" style={{
              padding: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
            }}>
              <p style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-3)',
                textAlign: 'center',
              }}>
                کد ثبت‌نام شما
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-3)',
              }}>
                <span style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-extrabold)',
                  color: 'var(--accent-gold)',
                  letterSpacing: '0.05em',
                  direction: 'ltr',
                }}>
                  {regCode}
                </span>
                <button
                  className="btn btn-ghost btn-icon"
                  onClick={copyCode}
                  title="کپی"
                >
                  {copied ? <Check size={18} color="var(--success)" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg"
              onClick={() => router.push('/home')}
              style={{ width: '100%' }}
            >
              ورود به مداح شو
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
