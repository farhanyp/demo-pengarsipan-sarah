'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState('Register');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setButtonText('Creating Account...');

    setTimeout(() => {
      setStatus('success');
      setButtonText('Success!');
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    }, 1500);
  };

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center p-6 md:p-lg auth-bg-pattern relative">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-container opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-tertiary-container opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <main className="w-full max-w-[480px] z-10 animate-in fade-in duration-700 slide-in-from-bottom-4">
        <div className="flex flex-col items-center mb-2 md:mb-lg">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-primary-container rounded-xl flex items-center justify-center mb-2 md:mb-base border border-outline-variant shadow-lg">
            <span className="material-symbols-outlined text-primary text-2xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <h1 className="text-xl md:font-headline-md md:text-headline-md text-on-surface tracking-tight font-bold">ScholarSys</h1>
          <p className="text-[10px] md:font-body-sm md:text-body-sm text-on-surface-variant">Institutional Management & Research Portal</p>
        </div>

        <div className="glass-panel p-4 md:p-lg rounded-xl shadow-2xl">
          <div className="mb-3 md:mb-lg">
            <h2 className="text-lg md:font-headline-sm md:text-headline-sm font-semibold text-on-surface mb-0 md:mb-xs">Create an Account</h2>
            <p className="text-xs md:font-body-sm md:text-body-sm text-on-surface-variant">Join our academic network and start managing data.</p>
          </div>

          <form className="space-y-2 md:space-y-md" onSubmit={handleSubmit}>
            <div className="space-y-1 md:space-y-xs">
              <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant uppercase tracking-wider font-semibold" htmlFor="full_name">Full Name</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 md:left-base top-1/2 -translate-y-1/2 text-outline text-[18px] md:text-body-md transition-colors group-focus-within:text-primary">person</span>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-9 md:pl-xl pr-3 md:pr-base py-1.5 md:py-sm text-sm md:font-body-md md:text-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="full_name" name="full_name" placeholder="Johnathan Doe" required type="text" />
              </div>
            </div>

            <div className="space-y-1 md:space-y-xs">
              <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant uppercase tracking-wider font-semibold" htmlFor="email">Institutional Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 md:left-base top-1/2 -translate-y-1/2 text-outline text-[18px] md:text-body-md transition-colors group-focus-within:text-primary">alternate_email</span>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-9 md:pl-xl pr-3 md:pr-base py-1.5 md:py-sm text-sm md:font-body-md md:text-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="email" name="email" placeholder="j.doe@institution.edu" required type="email" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-base">
              <div className="space-y-1 md:space-y-xs">
                <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant uppercase tracking-wider font-semibold" htmlFor="password">Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 md:left-base top-1/2 -translate-y-1/2 text-outline text-[18px] md:text-body-md transition-colors group-focus-within:text-primary">lock</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-9 md:pl-xl pr-3 md:pr-base py-1.5 md:py-sm text-sm md:font-body-md md:text-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="password" name="password" placeholder="••••••••" required type="password" />
                </div>
              </div>

              <div className="space-y-1 md:space-y-xs">
                <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant uppercase tracking-wider font-semibold" htmlFor="confirm_password">Confirm</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 md:left-base top-1/2 -translate-y-1/2 text-outline text-[18px] md:text-body-md transition-colors group-focus-within:text-primary">verified_user</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-9 md:pl-xl pr-3 md:pr-base py-1.5 md:py-sm text-sm md:font-body-md md:text-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="confirm_password" name="confirm_password" placeholder="••••••••" required type="password" />
                </div>
              </div>
            </div>

            <button className={`w-full text-on-primary-container text-sm md:font-headline-sm md:text-headline-sm py-2 md:py-sm rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 md:gap-base mt-3 md:mt-base shadow-lg shadow-primary-container/20 font-semibold ${status === 'success' ? 'bg-green-600' : 'bg-primary-container'}`} type="submit" disabled={loading}>
              {loading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  {buttonText}
                </>
              ) : status === 'success' ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  {buttonText}
                </>
              ) : (
                <>
                  {buttonText}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>
          <div className="text-center mt-4 md:mt-lg">
            <p className="text-xs md:font-body-md md:text-body-md text-on-surface-variant">
              Already have an account? <Link className="text-primary font-semibold hover:underline transition-all ml-1 md:ml-xs" href="/login">Login here</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
