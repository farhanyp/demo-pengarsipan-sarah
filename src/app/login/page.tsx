'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setButtonText('Welcome Back');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-[100dvh] w-full p-6 md:p-0 relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-container/10 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-tertiary-container/10 blur-[120px]"></div>
      </div>

      <main className="relative z-10 w-full max-w-[480px]">
        {/* Branding Section (from Forgot Password) */}
        <div className="flex flex-col items-center mb-3 md:mb-lg">
          <div className="mb-1 md:mb-sm text-primary">
            <span className="material-symbols-outlined !text-[32px] md:!text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <h1 className="text-xl md:font-headline-md md:text-headline-md text-on-surface tracking-tight font-bold">ScholarSys</h1>
          <p className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant uppercase tracking-[0.2em]">Institutional Management</p>
        </div>

        {/* Main Card (from Forgot Password) */}
        <section className="custom-card p-4 md:p-lg shadow-2xl">

          <div className="mb-3 md:mb-lg">
            <h2 className="text-lg md:font-headline-sm md:text-headline-sm font-semibold text-on-surface mb-0 md:mb-xs">Login</h2>
            <p className="text-xs md:font-body-sm md:text-body-sm text-on-surface-variant">Sign in to your institutional account.</p>
          </div>

          <form className="w-full space-y-2 md:space-y-md" onSubmit={handleSubmit}>
            <div className="space-y-1 md:space-y-xs">
              <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant ml-1 font-semibold" htmlFor="email">INSTITUTIONAL EMAIL</label>
              <div className="relative group input-glow rounded-lg overflow-hidden transition-all duration-300">
                <span className="material-symbols-outlined absolute left-3 md:left-base top-1/2 -translate-y-1/2 text-outline text-[18px] md:text-[24px]">alternate_email</span>
                <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface pl-9 md:pl-lg pr-3 md:pr-base py-1.5 md:py-sm text-sm md:text-base focus:border-primary focus:ring-0 outline-none transition-colors duration-200 rounded-lg placeholder:text-outline/50" id="email" placeholder="name@university.edu" required type="email" />
              </div>
            </div>

            <div className="space-y-1 md:space-y-xs">
              <div className="flex justify-between items-end px-1">
                <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant font-semibold" htmlFor="password">SECURE PASSWORD</label>
                <Link className="text-[10px] md:font-label-md md:text-label-md text-primary hover:text-primary-fixed-dim transition-colors font-semibold" href="/forgot-password">FORGOT?</Link>
              </div>
              <div className="relative group input-glow rounded-lg overflow-hidden transition-all duration-300">
                <span className="material-symbols-outlined absolute left-3 md:left-base top-1/2 -translate-y-1/2 text-outline text-[18px] md:text-[24px]">lock</span>
                <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface pl-9 md:pl-lg pr-[48px] py-1.5 md:py-sm text-sm md:text-base focus:border-primary focus:ring-0 outline-none transition-colors duration-200 rounded-lg placeholder:text-outline/50" id="password" placeholder="••••••••" required type={showPassword ? 'text' : 'password'} />
                <button className="absolute right-3 md:right-base top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button" onClick={() => setShowPassword(!showPassword)}>
                  <span className="material-symbols-outlined text-[18px] md:text-[24px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-base px-1 pt-1 md:pt-0">
              <input className="w-3.5 h-3.5 md:w-4 md:h-4 rounded border-outline-variant bg-surface-container-low text-primary focus:ring-primary focus:ring-offset-background" id="remember" type="checkbox" />
              <label className="text-[11px] md:font-body-sm md:text-body-sm text-on-surface-variant cursor-pointer" htmlFor="remember">Keep me logged in for research session</label>
            </div>

            <button className={`w-full text-on-primary text-sm md:font-headline-sm md:text-headline-sm py-2 md:py-sm rounded-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 md:gap-base shadow-lg font-semibold mt-2 md:mt-0 ${buttonText === 'Login' ? 'bg-primary-container' : 'bg-green-700'}`} type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span> Authenticating...
                </>
              ) : buttonText === 'Login' ? (
                <>
                  Login
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              ) : (
                buttonText
              )}
            </button>
          </form>

          <div className="mt-4 md:mt-lg pt-3 md:pt-md border-t border-outline-variant/20 w-full text-center">
            <p className="text-xs md:font-body-sm md:text-body-sm text-on-surface-variant">
              Don't have an account? <Link className="text-tertiary font-semibold hover:underline decoration-tertiary-fixed-dim transition-all" href="/register">Register here</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
