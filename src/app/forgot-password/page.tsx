'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true);
    }, 1500);
  };

  const handleGoToLogin = () => {
    setShowSuccessModal(false);
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-[100dvh] w-full p-6 md:p-0 relative">
      {/* Atmospheric Background Decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary-container/10 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-tertiary-container/10 blur-[120px]"></div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-[480px]">
        {/* Branding Section */}
        <div className="flex flex-col items-center mb-3 md:mb-lg">
          <div className="mb-1 md:mb-sm text-primary">
            <span className="material-symbols-outlined !text-[32px] md:!text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <h1 className="text-xl md:font-headline-md md:text-headline-md text-on-surface tracking-tight font-bold">ScholarSys</h1>
          <p className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant uppercase tracking-[0.2em]">Institutional Management</p>
        </div>

        {/* Reset Password Card */}
        <section className="custom-card p-4 md:p-lg shadow-2xl">
          <div className="mb-3 md:mb-lg">
            <h2 className="text-lg md:font-headline-sm md:text-headline-sm text-on-surface mb-0 md:mb-xs font-semibold">Reset Password</h2>
            <p className="text-xs md:font-body-sm md:text-body-sm text-on-surface-variant">Please enter your new password to regain access to your account.</p>
          </div>

          <form className="space-y-3 md:space-y-md" onSubmit={handleSubmit}>
            {/* Field 1: New Password */}
            <div className="space-y-1 md:space-y-xs">
              <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant font-semibold" htmlFor="newPassword">New Password</label>
              <div className="relative">
                <span className="absolute left-3 md:left-md top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[18px] md:text-[20px]">lock</span>
                <input 
                  className="w-full h-[36px] md:h-[48px] pl-[36px] md:pl-[48px] pr-[36px] md:pr-[48px] bg-surface-container-low border border-outline-variant rounded-[6px] text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:font-body-md md:text-body-md" 
                  id="newPassword" 
                  placeholder="Enter new password" 
                  type={showNewPassword ? 'text' : 'password'} 
                  required
                />
                <button 
                  className="absolute right-3 md:right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" 
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                    {showNewPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Field 2: Confirm New Password */}
            <div className="space-y-1 md:space-y-xs">
              <label className="text-[10px] md:font-label-md md:text-label-md text-on-surface-variant font-semibold" htmlFor="confirmPassword">Confirm New Password</label>
              <div className="relative">
                <span className="absolute left-3 md:left-md top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[18px] md:text-[20px]">lock</span>
                <input 
                  className="w-full h-[36px] md:h-[48px] pl-[36px] md:pl-[48px] pr-[36px] md:pr-[48px] bg-surface-container-low border border-outline-variant rounded-[6px] text-on-surface placeholder:text-outline/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm md:font-body-md md:text-body-md" 
                  id="confirmPassword" 
                  placeholder="Confirm new password" 
                  type={showConfirmPassword ? 'text' : 'password'} 
                  required
                />
                <button 
                  className="absolute right-3 md:right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                    {showConfirmPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Action Button */}
            <button 
              className="w-full h-[36px] md:h-[48px] bg-primary-container hover:bg-primary-container/90 active:scale-[0.98] transition-all text-on-surface text-sm md:font-headline-sm md:text-headline-sm rounded-[6px] mt-3 md:mt-base flex items-center justify-center font-semibold" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
              ) : (
                'Ubah Password'
              )}
            </button>
          </form>

          {/* Footer Section */}
          <div className="mt-3 md:mt-lg pt-3 md:pt-md border-t border-outline-variant/30 text-center">
            <Link className="inline-flex items-center gap-1 md:gap-xs text-xs md:font-label-md md:text-label-md text-on-surface-variant hover:text-primary transition-colors group" href="/login">
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Login
            </Link>
          </div>
        </section>

        {/* Illustration / Background Accent */}
        <div className="mt-4 md:mt-lg text-center opacity-20">
          <p className="font-body-sm text-body-sm italic">Academic Excellence System v4.2</p>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="custom-card p-lg max-w-[360px] w-full mx-md text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-primary-container/20 text-primary rounded-full flex items-center justify-center mx-auto mb-md">
              <span className="material-symbols-outlined !text-[32px]">check_circle</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-xs">Success</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Your password has been successfully updated. You can now log in with your new credentials.</p>
            <button 
              className="w-full h-[40px] bg-primary-container hover:bg-primary-container/90 active:scale-[0.98] transition-all text-on-surface rounded-[6px] font-label-md text-label-md" 
              onClick={handleGoToLogin}
            >
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
