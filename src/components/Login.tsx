import React, { useState, useEffect, useRef } from 'react';
import { UserProfile, AppRole } from '../types';

const BACKEND = ((import.meta as unknown as { env: Record<string, string> }).env?.VITE_BACKEND_URL) || 'http://localhost:5000';

type ModalType = 'none' | 'forgotPassword' | 'createAccount' | 'signUp';

interface NotifProps { type: 'success' | 'error' | 'info'; message: string; }

function Notif({ type, message }: NotifProps) {
  const styles = {
    success: 'bg-primary-container text-primary border-primary/20',
    error: 'bg-error/10 text-error border-error/20',
    info: 'bg-secondary-container text-secondary border-secondary/20',
  };
  const icons = { success: 'check_circle', error: 'error', info: 'info' };
  return (
    <div className={`flex items-start gap-2 p-3 rounded-2xl border text-sm ${styles[type]}`}>
      <span className="material-symbols-outlined text-[16px] mt-0.5 shrink-0">{icons[type]}</span>
      <span>{message}</span>
    </div>
  );
}

function ModalBackdrop({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(8px)' }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="relative w-full max-w-md bg-white rounded-[28px] border border-outline/20 shadow-2xl overflow-hidden"
        style={{ animation: 'slideUp 0.22s cubic-bezier(0.22,1,0.36,1)' }}>
        {children}
      </div>
      <style>{`@keyframes slideUp { from { opacity: 0; transform: translateY(24px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }`}</style>
    </div>
  );
}

function ForgotPasswordModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState<NotifProps | null>(null);
  const [countdown, setCountdown] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown <= 0) return;
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  const sendOtp = async (targetEmail = email) => {
    if (!targetEmail) { setNotif({ type: 'error', message: 'Please enter your email address.' }); return; }
    setLoading(true); setNotif(null);
    try {
      const r = await fetch(`${BACKEND}/api/forgot-password`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: targetEmail }) });
      const d = await r.json();
      if (d.success) { setNotif({ type: 'success', message: d.message }); setCountdown(60); setStep(2); }
      else setNotif({ type: 'error', message: d.message });
    } catch { setNotif({ type: 'error', message: 'Unable to reach server.' }); }
    setLoading(false);
  };

  const handleOtpChange = (idx: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const next = [...otp]; next[idx] = val.slice(-1); setOtp(next);
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus();
  };

  const verifyOtp = async () => {
    const code = otp.join('');
    if (code.length < 6) { setNotif({ type: 'error', message: 'Please enter all 6 digits.' }); return; }
    setLoading(true); setNotif(null);
    try {
      const r = await fetch(`${BACKEND}/api/verify-otp`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, otp: code }) });
      const d = await r.json();
      if (d.success) { setResetToken(d.resetToken); setNotif({ type: 'success', message: 'OTP verified! Set your new password.' }); setStep(3); }
      else { setNotif({ type: 'error', message: d.message }); setOtp(['', '', '', '', '', '']); otpRefs.current[0]?.focus(); }
    } catch { setNotif({ type: 'error', message: 'Unable to reach server.' }); }
    setLoading(false);
  };

  const resetPassword = async () => {
    if (newPass.length < 6) { setNotif({ type: 'error', message: 'Password must be at least 6 characters.' }); return; }
    if (newPass !== confirmPass) { setNotif({ type: 'error', message: 'Passwords do not match.' }); return; }
    setLoading(true); setNotif(null);
    try {
      const r = await fetch(`${BACKEND}/api/reset-password`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, resetToken, newPassword: newPass }) });
      const d = await r.json();
      if (d.success) { setNotif({ type: 'success', message: d.message }); setTimeout(onClose, 2000); }
      else setNotif({ type: 'error', message: d.message });
    } catch { setNotif({ type: 'error', message: 'Unable to reach server.' }); }
    setLoading(false);
  };

  const steps = ['Email', 'Verify OTP', 'New Password'];
  const inputCls = "w-full pl-11 pr-4 py-3 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl text-sm text-on-surface placeholder-outline/60 outline-none transition-colors";

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-outline/10">
        <div>
          <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">key</span> Forgot Password
          </h3>
          <p className="text-xs text-outline mt-0.5 uppercase tracking-widest">Secure OTP Recovery</p>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-surface-container text-outline hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex items-center gap-2 px-6 pt-4">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className={`flex items-center gap-1.5 text-xs font-bold ${step > i + 1 ? 'text-primary' : step === i + 1 ? 'text-primary' : 'text-outline'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border ${step > i + 1 ? 'bg-primary-container border-primary/40' : step === i + 1 ? 'bg-primary-container border-primary/40' : 'bg-surface-container border-outline/20'}`}>
                {step > i + 1 ? <span className="material-symbols-outlined text-[12px]">check</span> : i + 1}
              </span>
              <span className="hidden sm:inline">{s}</span>
            </div>
            {i < steps.length - 1 && <span className="text-outline/40 text-xs">›</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="px-6 py-5 space-y-4">
        {notif && <Notif {...notif} />}
        {step === 1 && (
          <>
            <p className="text-sm text-outline">Enter the email linked to your account. We'll send a 6-digit OTP.</p>
            <div><label className="block text-sm font-bold text-on-surface mb-1.5">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
                <input type="email" value={email} onChange={e => { setEmail(e.target.value); setNotif(null); }} placeholder="name@company.com" className={inputCls} onKeyDown={e => e.key === 'Enter' && sendOtp()} autoFocus />
              </div>
            </div>
            <button onClick={() => sendOtp()} disabled={loading || !email} className="w-full h-11 bg-primary hover:bg-primary/90 disabled:opacity-50 text-on-primary rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">{loading ? 'hourglass_empty' : 'mail'}</span>
              {loading ? 'Sending OTP...' : 'Send OTP to Email'}
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <p className="text-sm text-outline">Enter the 6-digit code sent to <span className="text-primary font-bold">{email}</span>.</p>
            <div>
              <label className="block text-sm font-bold text-on-surface mb-3">Verification Code</label>
              <div className="flex gap-2 justify-between">
                {otp.map((digit, i) => (
                  <input key={i} ref={el => { otpRefs.current[i] = el; }} type="text" inputMode="numeric" maxLength={1} value={digit}
                    onChange={e => handleOtpChange(i, e.target.value)}
                    onKeyDown={e => { if (e.key === 'Backspace' && !otp[i] && i > 0) otpRefs.current[i - 1]?.focus(); }}
                    className="w-11 h-12 text-center bg-background border border-outline/30 focus:border-primary rounded-2xl text-lg font-bold text-on-surface outline-none transition-colors"
                    autoFocus={i === 0} />
                ))}
              </div>
            </div>
            <button onClick={verifyOtp} disabled={loading || otp.join('').length < 6} className="w-full h-11 bg-primary hover:bg-primary/90 disabled:opacity-50 text-on-primary rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">check</span> {loading ? 'Verifying...' : 'Verify Code'}
            </button>
            <button onClick={() => sendOtp()} disabled={countdown > 0 || loading} className="w-full text-center text-sm text-primary hover:text-primary/80 disabled:text-outline transition-colors py-1">
              {countdown > 0 ? `Resend OTP in ${countdown}s` : 'Resend OTP'}
            </button>
          </>
        )}
        {step === 3 && (
          <>
            <p className="text-sm text-outline">Choose a strong new password for your account.</p>
            <div><label className="block text-sm font-bold text-on-surface mb-1.5">New Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
                <input type={showPass ? 'text' : 'password'} value={newPass} onChange={e => { setNewPass(e.target.value); setNotif(null); }} placeholder="Min. 6 characters" className={inputCls} autoFocus />
                <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-[18px]">{showPass ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>
            <div><label className="block text-sm font-bold text-on-surface mb-1.5">Confirm Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
                <input type={showPass ? 'text' : 'password'} value={confirmPass} onChange={e => { setConfirmPass(e.target.value); setNotif(null); }} placeholder="Re-enter password" className={`${inputCls} pr-4`} onKeyDown={e => e.key === 'Enter' && resetPassword()} />
              </div>
            </div>
            <button onClick={resetPassword} disabled={loading || !newPass || !confirmPass} className="w-full h-11 bg-primary hover:bg-primary/90 disabled:opacity-50 text-on-primary rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-colors">
              <span className="material-symbols-outlined text-[18px]">lock_reset</span> {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </>
        )}
      </div>
    </ModalBackdrop>
  );
}

function CreateAccountModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: (user: UserProfile) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('');
  const [role, setRole] = useState<AppRole>('Employee');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState<NotifProps | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setNotif(null);
    try {
      const res = await fetch(`${BACKEND}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, department: dept, role })
      });
      const data = await res.json();
      
      if (data.success) {
        const newUser: UserProfile = {
          name: data.user.name,
          email: data.user.email,
          role: data.user.role,
          department: dept || 'General',
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user.name)}&background=random`
        };
        onSuccess(newUser);
        onClose();
      } else {
        setNotif({ type: 'error', message: data.message || 'Registration failed.' });
      }
    } catch { setNotif({ type: 'error', message: 'Unable to reach server.' }); }
    setLoading(false);
  };

  const inputCls = "w-full pl-11 pr-4 py-3 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl text-sm text-on-surface placeholder-outline/60 outline-none transition-colors";

  return (
    <ModalBackdrop onClose={onClose}>
      <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-outline/10">
        <div>
          <h3 className="text-base font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">person_add</span> Create New Account
          </h3>
          <p className="text-xs text-outline mt-0.5 uppercase tracking-widest">Enterprise Registration</p>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-surface-container text-outline hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
        {notif && <Notif {...notif} />}
        <div><label className="block text-sm font-bold text-on-surface mb-1.5">Full Name</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">person</span>
            <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="John Doe" className={inputCls} autoFocus />
          </div>
        </div>
        <div><label className="block text-sm font-bold text-on-surface mb-1.5">Corporate Email</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@company.com" className={inputCls} />
          </div>
        </div>
        <div><label className="block text-sm font-bold text-on-surface mb-1.5">Department <span className="text-outline">(optional)</span></label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">domain</span>
            <input type="text" value={dept} onChange={e => setDept(e.target.value)} placeholder="Engineering, Finance, HR…" className={inputCls} />
          </div>
        </div>
        <div><label className="block text-sm font-bold text-on-surface mb-1.5">System Role</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">manage_accounts</span>
            <select value={role} onChange={e => setRole(e.target.value as AppRole)} className={inputCls}>
              <option value="Employee">Employee</option>
              <option value="Department Head">Department Head</option>
              <option value="Asset Manager">Asset Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
        <div><label className="block text-sm font-bold text-on-surface mb-1.5">Password</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
            <input type={showPass ? 'text' : 'password'} required minLength={6} value={password} onChange={e => setPassword(e.target.value)} placeholder="Min. 6 characters" className={inputCls} />
            <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface">
              <span className="material-symbols-outlined text-[18px]">{showPass ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
        </div>
        <div className="bg-primary-container border border-primary/15 rounded-2xl px-4 py-3 text-sm text-primary/80">
          Your account will be created with the <strong>{role}</strong> role. {role === 'Admin' ? 'You will have full system access.' : 'An admin can upgrade your permissions later if needed.'}
        </div>
        <button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90 disabled:opacity-50 text-on-primary rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-colors">
          <span className="material-symbols-outlined text-[18px]">person_add</span> {loading ? 'Creating Account…' : 'Create Account'}
        </button>
      </form>
    </ModalBackdrop>
  );
}

interface LoginProps { onLoginSuccess: (user: UserProfile) => void; }

export default function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState('suresh.kumar@assetflow.com');
  const [password, setPassword] = useState('demo-password-123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [activeModal, setActiveModal] = useState<ModalType>('none');
  const [successBanner, setSuccessBanner] = useState('');

  const demoUsers: { name: string; email: string; role: AppRole; department?: string; avatar: string; tagline: string; roleColor: string }[] = [
    { name: 'Suresh Kumar', email: 'suresh.kumar@assetflow.com', role: 'Admin', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120', tagline: 'Full Org Access & Setup', roleColor: 'bg-purple-100 text-purple-700' },
    { name: 'Priya Shah', email: 'priya.shah@assetflow.com', role: 'Asset Manager', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120', tagline: 'Allocations, Approvals & Audits', roleColor: 'bg-blue-100 text-blue-700' },
    { name: 'Rohan Mehta', email: 'rohan.mehta@assetflow.com', role: 'Department Head', department: 'Facilities', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120', tagline: 'Facilities Dept — Bookings & Transfers', roleColor: 'bg-amber-100 text-amber-700' },
    { name: 'Alex Employee', email: 'alex.employee@assetflow.com', role: 'Employee', department: 'Engineering', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120', tagline: 'Engineering — My Assets & Requests', roleColor: 'bg-green-100 text-green-700' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError('Please enter your email address'); return; }
    const matched = demoUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (matched) {
      onLoginSuccess({ name: matched.name, email: matched.email, role: matched.role, avatar: matched.avatar, department: matched.department });
    } else {
      onLoginSuccess({ name: email.split('@')[0].split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '), email, role: 'Employee', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120' });
    }
  };

  return (
    <>
      {activeModal === 'forgotPassword' && <ForgotPasswordModal onClose={() => setActiveModal('none')} />}
      {activeModal === 'createAccount' && <CreateAccountModal onClose={() => setActiveModal('none')} onSuccess={(user) => { onLoginSuccess(user); }} />}

      <div id="login-screen" className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center relative overflow-hidden px-4">
        {/* Ambient background */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

        {/* Success banner */}
        {successBanner && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-primary-container border border-primary/25 text-primary text-sm px-5 py-3 rounded-2xl shadow-lg backdrop-blur-sm"
            style={{ animation: 'slideUp 0.3s ease' }}>
            <span className="material-symbols-outlined text-[18px]">check_circle</span>{successBanner}
          </div>
        )}

        <div className="w-full max-w-5xl max-h-[95vh] bg-white/5 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row backdrop-blur-md z-10">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-primary to-primary/80 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 text-white p-2.5 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[28px]">security</span>
                </div>
                <div>
                  <span className="font-bold text-xl tracking-tight text-white">AssetFlow</span>
                  <span className="block text-xs text-white/60 uppercase tracking-widest">Resource & Compliance</span>
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
                  Enterprise asset tracking, <span className="text-white/80">reimagined</span>
                </h1>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">
                  Streamline hardware allocations, real-time transfers, multi-user resource booking, audit trails, and automatic compliance verification in a single dashboard.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <p className="text-xs uppercase font-bold text-white/40 tracking-wider">New to AssetFlow?</p>
                <button id="btn-create-account" onClick={() => setActiveModal('createAccount')}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold transition-colors group">
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                  <span className="flex-1">Create New Account</span>
                  <span className="material-symbols-outlined text-[18px] text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all">chevron_right</span>
                </button>
              </div>
            </div>


          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center bg-white overflow-y-auto">
            <div className="max-w-md mx-auto w-full py-2">
              <h2 className="text-xl md:text-2xl font-bold text-on-surface mb-1 tracking-tight">Welcome Back</h2>
              <p className="text-xs md:text-sm text-outline mb-5">Select a demo role to instantly sign in or use custom credentials.</p>

              {/* Demo Profiles */}
              <div className="space-y-2 mb-5">
                <p className="text-xs uppercase font-bold text-outline tracking-wider">Quick Sign-In Profiles</p>
                <div className="grid grid-cols-1 gap-2">
                  {demoUsers.map((u) => {
                    const isSelected = email === u.email;
                    return (
                      <button key={u.email} type="button" onClick={() => { setEmail(u.email); setPassword('demo-password-123'); }}
                        className={`flex items-center gap-3 p-2.5 rounded-[16px] text-left transition-colors duration-200 border ${
                          isSelected ? 'bg-primary-container border-primary/30 shadow-sm' : 'bg-background border-outline/20 hover:border-primary/30'
                        }`}>
                        <img src={u.avatar} alt={u.name} className="w-8 h-8 rounded-xl object-cover border border-outline/20" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className={`text-sm font-bold truncate ${isSelected ? 'text-primary' : 'text-on-surface'}`}>{u.name}</p>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg shrink-0 ${u.roleColor}`}>{u.role}</span>
                          </div>
                          <p className="text-xs text-outline truncate mt-0.5">{u.tagline}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative flex py-1 items-center mb-4">
                <div className="flex-grow border-t border-outline/20" />
                <span className="flex-shrink mx-4 text-xs font-bold text-outline uppercase tracking-widest">Or credentials</span>
                <div className="flex-grow border-t border-outline/20" />
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="p-2.5 bg-error/10 border border-error/20 text-error rounded-xl text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-error animate-ping" />
                    {error}
                  </div>
                )}
                <div><label className="block text-sm font-bold text-on-surface mb-1.5">Corporate Email</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">mail</span>
                    <input type="email" required value={email} onChange={e => { setEmail(e.target.value); setError(''); }} placeholder="name@company.com"
                      className="w-full pl-11 pr-4 py-3 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl text-sm text-on-surface placeholder-outline/60 outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-sm font-bold text-on-surface">Access Key / Password</label>
                    <button id="btn-forgot-password" type="button" onClick={() => setActiveModal('forgotPassword')}
                      className="text-xs text-primary hover:text-primary/80 hover:underline transition-colors">Forgot?</button>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
                    <input type={showPassword ? 'text' : 'password'} required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
                      className="w-full pl-11 pr-11 py-3 bg-background border border-outline/30 focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-2xl text-sm text-on-surface placeholder-outline/60 outline-none transition-colors" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-outline hover:text-on-surface">
                      <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                    </button>
                  </div>
                </div>
                <button type="submit" className="w-full mt-4 h-12 bg-primary hover:bg-primary/90 text-on-primary rounded-2xl text-sm font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-colors group">
                  <span>Authorize & Establish Session</span>
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </button>
              </form>

              <p className="text-center text-xs text-outline mt-6 uppercase tracking-widest">Secure AES-256 Multi-tenant Workspace</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
