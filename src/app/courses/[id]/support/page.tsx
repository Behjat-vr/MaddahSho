'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/layout/Navbar';
import { mockCourses, mockSupportConversation } from '@/data/mock';
import type { SupportMessage } from '@/types';
import { Sparkles, Send, ArrowRight, MessageCircle, Lock } from 'lucide-react';

export default function AISupportPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, isEnrolled } = useAuth();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const course = mockCourses.find(c => c.id === params.id);
  const enrolled = isEnrolled(params.id as string);
  const maxMessages = enrolled ? 5 : 3;

  const [messages, setMessages] = useState<SupportMessage[]>(
    enrolled ? mockSupportConversation.messages : []
  );
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [messagesUsed, setMessagesUsed] = useState(enrolled ? mockSupportConversation.messagesUsed : 0);
  const [quotaExhausted, setQuotaExhausted] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) router.push('/auth/login');
  }, [isAuthenticated, router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinking]);

  if (!course) return null;

  const remaining = maxMessages - messagesUsed;
  const quotaLevel = remaining > 2 ? 'high' : remaining > 0 ? 'medium' : 'low';

  const handleSend = async () => {
    if (!input.trim() || thinking || remaining <= 0) return;

    const userMsg: SupportMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      createdAt: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setMessagesUsed(prev => prev + 1);
    setThinking(true);

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1500));

    const lowerInput = input.toLowerCase();
    const outOfScope = ['برنامه‌نویسی', 'سیاست', 'ریاضی', 'فوتبال', 'آشپزی', 'برنامه نویسی'].some(
      k => lowerInput.includes(k)
    );

    const aiMsg: SupportMessage = {
      id: `msg-${Date.now()}-ai`,
      role: 'assistant',
      content: outOfScope
        ? 'این سؤال خارج از محتوای این دوره است. من فقط می‌توانم درباره مطالب همین دوره به شما کمک کنم.'
        : `بر اساس محتوای دوره «${course.title}»، پاسخ شما:\n\nاین یک نکته مهم در آموزش مداحی است. در جلسات دوره به این موضوع پرداخته شده و تمرینات عملی برای تقویت این مهارت ارائه شده است.\n\nپیشنهاد می‌کنم جلسه مربوطه را دوباره مرور کنید و تمرینات پیشنهادی را انجام دهید. اگر سؤال بیشتری دارید، بپرسید.`,
      createdAt: new Date().toISOString(),
    };
    setMessages(prev => [...prev, aiMsg]);
    setThinking(false);

    if (messagesUsed + 1 >= maxMessages) {
      setQuotaExhausted(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - var(--navbar-height))' }}>
        <div className="chat-container" style={{ flex: 1 }}>
          {/* Header */}
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Link href={`/courses/${course.id}`} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)' }}>
                <ArrowRight size={16} />
                بازگشت به دوره
              </Link>
              <div className={`quota-indicator ${quotaLevel}`}>
                <MessageCircle size={12} />
                {remaining} پیام باقی‌مانده
              </div>
            </div>
            <div style={{ marginTop: 'var(--space-4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                <Sparkles size={20} color="var(--accent-gold)" />
                <h2 className="heading-4">دستیار هوشمند مداح شو</h2>
              </div>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-tertiary)' }}>
                پشتیبان هوشمند دوره «{course.title}»
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="empty-state" style={{ padding: 'var(--space-8)' }}>
                <div className="empty-state-icon">
                  <Sparkles size={32} />
                </div>
                <p className="empty-state-title">سؤالت را بپرس</p>
                <p className="empty-state-desc">
                  هر سؤالی درباره محتوای دوره داری از دستیار هوشمند بپرس.
                </p>
              </div>
            )}

            {messages.map(msg => (
              <div
                key={msg.id}
                className={`chat-message ${msg.role === 'user' ? 'chat-message-user' : 'chat-message-assistant'}`}
              >
                {msg.role === 'assistant' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-2)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--accent-gold)',
                  }}>
                    <Sparkles size={12} />
                    دستیار هوشمند
                  </div>
                )}
                <div style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</div>
              </div>
            ))}

            {thinking && (
              <div className="chat-message chat-message-assistant">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-2)',
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--accent-gold)',
                }}>
                  <Sparkles size={12} />
                  در حال فکر کردن...
                </div>
                <div className="thinking-dots">
                  <div className="thinking-dot" />
                  <div className="thinking-dot" />
                  <div className="thinking-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chat-input-area">
            <textarea
              className="chat-input"
              placeholder={remaining > 0 ? 'سؤال خود را بنویسید...' : 'سهمیه پیام شما تمام شده است'}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={remaining <= 0 || thinking}
              rows={1}
            />
            <button
              className="btn btn-primary btn-icon"
              onClick={handleSend}
              disabled={!input.trim() || thinking || remaining <= 0}
              style={{ flexShrink: 0 }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Quota Exhausted Modal */}
        <div className={`modal-overlay ${quotaExhausted ? 'open' : ''}`} onClick={() => setQuotaExhausted(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-body" style={{ textAlign: 'center', padding: 'var(--space-10) var(--space-8)' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--warning-bg)',
                border: '2px solid rgba(240, 180, 41, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-6)',
              }}>
                <Lock size={28} color="var(--warning)" />
              </div>
              <h3 className="heading-3" style={{ marginBottom: 'var(--space-3)' }}>
                سهمیه پشتیبانی شما به پایان رسیده است
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
                {enrolled
                  ? 'شما از تمام ۵ پیام خود استفاده کرده‌اید.'
                  : 'برای دسترسی به پیام‌های بیشتر، در دوره ثبت‌نام کنید.'
                }
              </p>
              <button className="btn btn-primary" onClick={() => setQuotaExhausted(false)}>
                متوجه شدم
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
