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
    <div className="min-h-screen flex items-center justify-center p-margin-mobile md:p-lg auth-bg-pattern">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-container opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] bg-tertiary-container opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <main className="w-full max-w-[480px] z-10 animate-in fade-in duration-700 slide-in-from-bottom-4">
        <div className="flex flex-col items-center mb-lg">
          <div className="w-16 h-16 bg-primary-container rounded-xl flex items-center justify-center mb-base border border-outline-variant shadow-lg">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">ScholarSys</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Institutional Management & Research Portal</p>
        </div>

        <div className="glass-panel p-md md:p-lg rounded-xl shadow-2xl">
          <div className="mb-lg">
            <h2 className="font-headline-sm text-headline-sm text-on-surface mb-xs">Create an Account</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Join our academic network and start managing data.</p>
          </div>

          <form className="space-y-md" onSubmit={handleSubmit}>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="full_name">Full Name</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-base top-1/2 -translate-y-1/2 text-outline text-body-md transition-colors group-focus-within:text-primary">person</span>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-xl pr-base py-sm font-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="full_name" name="full_name" placeholder="Johnathan Doe" required type="text" />
              </div>
            </div>

            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="email">Institutional Email</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-base top-1/2 -translate-y-1/2 text-outline text-body-md transition-colors group-focus-within:text-primary">alternate_email</span>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-xl pr-base py-sm font-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="email" name="email" placeholder="j.doe@institution.edu" required type="email" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-base">
              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-base top-1/2 -translate-y-1/2 text-outline text-body-md transition-colors group-focus-within:text-primary">lock</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-xl pr-base py-sm font-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="password" name="password" placeholder="••••••••" required type="password" />
                </div>
              </div>

              <div className="space-y-xs">
                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="confirm_password">Confirm</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-base top-1/2 -translate-y-1/2 text-outline text-body-md transition-colors group-focus-within:text-primary">verified_user</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-xl pr-base py-sm font-body-md text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" id="confirm_password" name="confirm_password" placeholder="••••••••" required type="password" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-base pt-xs">
              <input className="mt-1 w-4 h-4 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary/30" id="terms" name="terms" required type="checkbox" />
              <label className="font-body-sm text-body-sm text-on-surface-variant leading-tight" htmlFor="terms">
                I agree to the <Link className="text-primary hover:underline transition-all" href="#">Terms of Service</Link> and <Link className="text-primary hover:underline transition-all" href="#">Institutional Privacy Policy</Link>.
              </label>
            </div>

            <button className={`w-full text-on-primary-container font-headline-sm text-headline-sm py-sm rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-base mt-base shadow-lg shadow-primary-container/20 ${status === 'success' ? 'bg-green-600' : 'bg-primary-container'}`} type="submit" disabled={loading}>
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

          <div className="flex items-center gap-base my-lg">
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
            <span className="font-label-md text-label-md text-outline/50 uppercase">OR REGISTER WITH</span>
            <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
          </div>

          <div className="grid grid-cols-2 gap-base">
            <button className="flex items-center justify-center gap-base py-base border border-outline-variant rounded-lg hover:bg-surface-container transition-colors group">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">cloud</span>
              <span className="font-label-md text-label-md text-on-surface">SSO</span>
            </button>
            <button className="flex items-center justify-center gap-base py-base border border-outline-variant rounded-lg hover:bg-surface-container transition-colors group">
              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">domain</span>
              <span className="font-label-md text-label-md text-on-surface">ADFS</span>
            </button>
          </div>
        </div>

        <div className="text-center mt-lg">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Already have an account? <Link className="text-primary font-semibold hover:underline transition-all ml-xs" href="/login">Login here</Link>
          </p>
        </div>

        <div className="mt-xl text-center opacity-40">
          <p className="font-body-sm italic text-body-sm max-w-[300px] mx-auto text-on-surface-variant">
            "Advancing scholarly excellence through structured institutional coordination."
          </p>
        </div>
      </main>
    </div>
  );
}
