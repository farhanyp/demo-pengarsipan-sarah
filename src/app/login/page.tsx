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
    <div className="min-h-screen flex items-center justify-center p-margin-mobile md:p-margin-desktop overflow-hidden auth-bg-pattern relative">
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <main className="relative z-10 w-full max-w-[440px]">
        <div className="glass-background border border-outline-variant/30 rounded-xl p-md md:p-lg flex flex-col items-center">
          <div className="mb-lg flex flex-col items-center gap-base">
            <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <div className="text-center">
              <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">ScholarSys</h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Institutional Management Dashboard</p>
            </div>
          </div>
          
          <form className="w-full space-y-md" onSubmit={handleSubmit}>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant ml-1" htmlFor="email">INSTITUTIONAL EMAIL</label>
              <div className="relative group input-glow rounded-lg overflow-hidden transition-all duration-300">
                <span className="material-symbols-outlined absolute left-base top-1/2 -translate-y-1/2 text-outline">alternate_email</span>
                <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface pl-lg pr-base py-sm focus:border-primary focus:ring-0 outline-none transition-colors duration-200 rounded-lg placeholder:text-outline/50" id="email" placeholder="name@university.edu" required type="email" />
              </div>
            </div>
            
            <div className="space-y-xs">
              <div className="flex justify-between items-end px-1">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">SECURE PASSWORD</label>
                <Link className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors" href="/forgot-password">FORGOT?</Link>
              </div>
              <div className="relative group input-glow rounded-lg overflow-hidden transition-all duration-300">
                <span className="material-symbols-outlined absolute left-base top-1/2 -translate-y-1/2 text-outline">lock</span>
                <input className="w-full bg-surface-container-low border border-outline-variant text-on-surface pl-lg pr-[48px] py-sm focus:border-primary focus:ring-0 outline-none transition-colors duration-200 rounded-lg placeholder:text-outline/50" id="password" placeholder="••••••••" required type={showPassword ? 'text' : 'password'} />
                <button className="absolute right-base top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button" onClick={() => setShowPassword(!showPassword)}>
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-base px-1">
              <input className="w-4 h-4 rounded border-outline-variant bg-surface-container-low text-primary focus:ring-primary focus:ring-offset-background" id="remember" type="checkbox" />
              <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer" htmlFor="remember">Keep me logged in for research session</label>
            </div>
            
            <button className={`w-full text-on-primary font-headline-sm text-headline-sm py-sm rounded-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-base shadow-lg ${buttonText === 'Login' ? 'bg-primary-container' : 'bg-green-700'}`} type="submit" disabled={loading}>
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
          
          <div className="w-full mt-lg">
            <div className="relative flex items-center justify-center mb-md">
              <div className="w-full border-t border-outline-variant/30"></div>
              <span className="absolute px-base bg-surface-container text-label-md text-outline font-label-md uppercase">OR CONTINUE WITH</span>
            </div>
            <div className="grid grid-cols-2 gap-base">
              <button className="flex items-center justify-center gap-base py-sm border border-outline-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-sm">
                <img alt="Google" className="w-4 h-4 grayscale opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmbUxEO6TbRldKJtGrRBnEfV7YVoLsI0v-C8QJ0CWACi9wfuGfDCrdphqfc1a_sQFU9-CEdbmYV4gMm7U-n_yx5KryUK1iqMYbWqxx-LT-8gjqzOmHEdvjGXQ827XvKZPomhVwHFvweCyFHa_5DaUwnlUVRVA6poCQhBz59qmQYtCyHagwiwnqkull0wxnuKC_On2GjoPjCm_ekuFG6UOZxk_MCQjhfpHergdc3K4plD06BLsu_34NfP5hBb1kdoC9IR3OFimmnKo" />
                Institutional ID
              </button>
              <button className="flex items-center justify-center gap-base py-sm border border-outline-variant hover:bg-surface-container-high transition-colors rounded-lg font-body-sm">
                <span className="material-symbols-outlined text-outline">key</span>
                SSO Portal
              </button>
            </div>
          </div>
          
          <div className="mt-lg pt-md border-t border-outline-variant/20 w-full text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Don't have an account? <Link className="text-tertiary font-semibold hover:underline decoration-tertiary-fixed-dim transition-all" href="/register">Register here</Link>
            </p>
          </div>
        </div>
        
        <div className="mt-md flex justify-between px-base opacity-40">
          <span className="font-label-md text-label-md flex items-center gap-xs">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> System Online
          </span>
          <span className="font-label-md text-label-md">v2.4.0-stable</span>
        </div>
      </main>
    </div>
  );
}
