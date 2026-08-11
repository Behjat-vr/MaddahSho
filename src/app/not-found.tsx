'use client';

import React from 'react';
import Link from 'next/link';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="hero" style={{ background: 'var(--bg-primary)' }}>
      <div className="hero-bg">
        <ParticleBackground count={15} />
        <div className="hero-radial" />
      </div>

      <div className="hero-content">
        <div className="animate-fade-in-up" style={{
          fontSize: 'var(--font-size-5xl)',
          fontWeight: 'var(--font-weight-extrabold)',
          marginBottom: 'var(--space-4)',
        }}>
          <span className="text-gradient">۴۰۴</span>
        </div>

        <h1 className="heading-2 animate-fade-in-up-delay-1" style={{ marginBottom: 'var(--space-4)' }}>
          صفحه مورد نظر یافت نشد
        </h1>

        <p className="animate-fade-in-up-delay-2" style={{
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-8)',
        }}>
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابجا شده است.
        </p>

        <div className="animate-fade-in-up-delay-3" style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary btn-lg">
            <Home size={18} />
            صفحه اصلی
          </Link>
          <Link href="/courses" className="btn btn-secondary btn-lg">
            دوره‌ها
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
