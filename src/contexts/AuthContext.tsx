'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { User, Enrollment } from '@/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  enrollments: Enrollment[];
  sendOtp: (phone: string) => Promise<{ success: boolean; message?: string; code?: string }>;
  register: (firstName: string, lastName: string, phone: string, code: string) => Promise<{ success: boolean; registrationCode?: string; message?: string }>;
  login: (phone: string, registrationCode: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  isEnrolled: (courseId: string) => boolean;
  enrollInCourse: (courseId: string) => Promise<{ success: boolean; paymentUrl?: string; message?: string }>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUserData = useCallback(async () => {
    try {
      const res = await fetch('/api/users/me');
      if (res.ok) {
        const data = (await res.json()) as { user: User; enrollments?: Enrollment[] };
        setUser(data.user);
        setEnrollments(data.enrollments || []);
      } else {
        setUser(null);
        setEnrollments([]);
      }
    } catch {
      setUser(null);
      setEnrollments([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUserData();
  }, [refreshUserData]);

  const sendOtp = useCallback(async (phone: string) => {
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      const data = (await res.json()) as { error?: string; message?: string; code?: string };
      if (!res.ok) return { success: false, message: data.error };
      return { success: true, message: data.message, code: data.code };
    } catch {
      return { success: false, message: 'خطا در ارتباط با سرور.' };
    }
  }, []);

  const register = useCallback(async (firstName: string, lastName: string, phone: string, code: string) => {
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, phone, code }),
      });
      const data = (await res.json()) as { error?: string; user: User; registrationCode?: string };
      if (!res.ok) return { success: false, message: data.error };
      setUser(data.user);
      await refreshUserData();
      return { success: true, registrationCode: data.registrationCode };
    } catch {
      return { success: false, message: 'خطا در ارتباط با سرور.' };
    }
  }, [refreshUserData]);

  const login = useCallback(async (phone: string, registrationCode: string) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, registrationCode }),
      });
      const data = (await res.json()) as { error?: string; user: User };
      if (!res.ok) return { success: false, message: data.error };
      setUser(data.user);
      await refreshUserData();
      return { success: true };
    } catch {
      return { success: false, message: 'خطا در ارتباط با سرور.' };
    }
  }, [refreshUserData]);

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      setUser(null);
      setEnrollments([]);
    }
  }, []);

  const isEnrolled = useCallback((courseId: string): boolean => {
    return enrollments.some(e => e.courseId === courseId);
  }, [enrollments]);

  const enrollInCourse = useCallback(async (courseId: string) => {
    try {
      const res = await fetch(`/api/courses/${courseId}/enroll`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = (await res.json()) as { error?: string; paymentUrl?: string; message?: string };
      if (!res.ok) return { success: false, message: data.error };

      if (data.paymentUrl) {
        return { success: true, paymentUrl: data.paymentUrl };
      }

      await refreshUserData();
      return { success: true, message: data.message };
    } catch {
      return { success: false, message: 'خطا در ارتباط با سرور.' };
    }
  }, [refreshUserData]);

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === 'ADMIN';

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      isAuthenticated,
      isAdmin,
      enrollments,
      sendOtp,
      register,
      login,
      logout,
      isEnrolled,
      enrollInCourse,
      refreshUserData,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
