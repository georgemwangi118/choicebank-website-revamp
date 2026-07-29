'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

const IDLE_MS = 30 * 60 * 1000;   // 30 minutes idle → show warning
const WARN_MS = 60 * 1000;         // 60 seconds to act before forced logout

const EVENTS = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'];

export default function SessionGuard() {
  const router = useRouter();
  const [warning, setWarning] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warnTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const signOut = useCallback(async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
  }, [router]);

  const clearTimers = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (warnTimer.current) clearTimeout(warnTimer.current);
    if (countdownInterval.current) clearInterval(countdownInterval.current);
  }, []);

  const startWarning = useCallback(() => {
    setWarning(true);
    setCountdown(60);
    countdownInterval.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(countdownInterval.current!);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    warnTimer.current = setTimeout(signOut, WARN_MS);
  }, [signOut]);

  const resetIdle = useCallback(() => {
    if (warning) return; // don't reset while warning is showing
    clearTimers();
    idleTimer.current = setTimeout(startWarning, IDLE_MS);
  }, [warning, clearTimers, startWarning]);

  const stayLoggedIn = useCallback(() => {
    clearTimers();
    setWarning(false);
    setCountdown(60);
    idleTimer.current = setTimeout(startWarning, IDLE_MS);
  }, [clearTimers, startWarning]);

  useEffect(() => {
    idleTimer.current = setTimeout(startWarning, IDLE_MS);
    EVENTS.forEach((e) => window.addEventListener(e, resetIdle, { passive: true }));
    return () => {
      clearTimers();
      EVENTS.forEach((e) => window.removeEventListener(e, resetIdle));
    };
  }, [resetIdle, startWarning, clearTimers]);

  if (!warning) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="bg-[#0A0534] px-8 pt-8 pb-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[#E8192C]/20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-[#E8192C]">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold">Session Expiring</h2>
          <p className="text-white/60 text-sm mt-1">You've been inactive for 30 minutes</p>
        </div>

        <div className="px-8 py-6 text-center">
          <div className="w-20 h-20 rounded-full border-4 border-[#E8192C]/20 flex items-center justify-center mx-auto mb-4 relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="36" fill="none" stroke="#E8192C" strokeWidth="4"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - countdown / 60)}`}
                className="transition-all duration-1000" />
            </svg>
            <span className="text-2xl font-bold text-[#0A0534]">{countdown}</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            You will be automatically logged out in <strong className="text-[#E8192C]">{countdown}s</strong> to protect your account.
          </p>

          <div className="flex gap-3">
            <button
              onClick={signOut}
              className="flex-1 border border-gray-200 text-gray-500 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Log out now
            </button>
            <button
              onClick={stayLoggedIn}
              className="flex-1 bg-[#0A0534] text-white py-2.5 rounded-full text-sm font-semibold hover:bg-[#0A0534]/90 transition-colors"
            >
              Stay logged in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
