'use client';

import React from 'react';
import Link from 'next/link';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { Mic, ArrowLeft, Sparkles, AudioWaveform } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="hero" style={{ background: 'var(--bg-primary)' }}>
      {/* Background Effects */}
      <div className="hero-bg">
        <ParticleBackground count={40} />
        <div className="hero-radial" />
        {/* Subtle waveform at bottom */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '4px',
          opacity: 0.12,
        }}>
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: `${Math.sin(i * 0.3) * 30 + 35}px`,
                background: 'var(--accent-gold)',
                borderRadius: 'var(--radius-full)',
                animation: `waveformPulse ${1 + Math.random()}s ease-in-out ${i * 0.05}s infinite alternate`,
              }}
            />
          ))}
        </div>
        {/* Gold glow orbs */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'glowPulse 4s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(122,32,64,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'glowPulse 5s ease-in-out 1s infinite',
        }} />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Mic Icon */}
        <div className="animate-fade-in-up" style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(212, 168, 83, 0.1)',
          border: '2px solid rgba(212, 168, 83, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto var(--space-8)',
          boxShadow: 'var(--shadow-glow-gold)',
        }}>
          <Mic size={32} color="var(--accent-gold)" />
        </div>

        {/* Title */}
        <h1 className="hero-title animate-fade-in-up-delay-1">
          <span className="text-gradient">مداح شو</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle animate-fade-in-up-delay-2">
          صدایت را بساز. مهارتت را تقویت کن. بهتر بخوان.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-3">
          <Link href="/auth/login" className="btn btn-primary btn-lg" style={{
            fontSize: 'var(--font-size-lg)',
            padding: 'var(--space-4) var(--space-12)',
          }}>
            شروع یادگیری
            <ArrowLeft size={20} />
          </Link>
        </div>

        {/* Features mini row */}
        <div className="animate-fade-in-up-delay-4" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-8)',
          marginTop: 'var(--space-12)',
          flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-sm)',
          }}>
            <Sparkles size={16} color="var(--accent-gold)" />
            پشتیبانی هوش مصنوعی
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-sm)',
          }}>
            <AudioWaveform size={16} color="var(--accent-gold)" />
            تحلیل صوتی هوشمند
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            color: 'var(--text-tertiary)',
            fontSize: 'var(--font-size-sm)',
          }}>
            <Mic size={16} color="var(--accent-gold)" />
            ضبط و ارسال تمرین
          </div>
        </div>
      </div>
    </div>
  );
}
