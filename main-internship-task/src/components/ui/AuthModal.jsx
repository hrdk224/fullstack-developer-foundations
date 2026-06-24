import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from './Button';

const AuthModal = () => {
  const { isAuthOpen, setIsAuthOpen, login, signup } = useAuth();
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  if (!isAuthOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || (!isLoginTab && !name)) {
      setError('Please fill in all fields');
      return;
    }

    if (isLoginTab) {
      const res = login(email, password);
      if (res.success) {
        setIsAuthOpen(false);
        resetForm();
      } else {
        setError(res.error || 'Invalid credentials');
      }
    } else {
      const res = signup(name, email, password);
      if (res.success) {
        setIsAuthOpen(false);
        resetForm();
      } else {
        setError(res.error || 'Signup failed');
      }
    }
  };

  const handleSocialLogin = (provider) => {
    // Simulated social login
    login(`${provider.toLowerCase()}@coretech.com`, 'password');
    setIsAuthOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={() => setIsAuthOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-surface-container-high/95 p-8 text-primary shadow-2xl glass-panel animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsAuthOpen(false)}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Logo/Header */}
        <div className="text-center mb-8">
          <span className="text-2xl font-bold tracking-tighter text-white">CORE TECH</span>
          <p className="text-sm text-on-surface-variant mt-2">Modular Hardware Ecosystem</p>
        </div>

        {/* Tab Headers */}
        <div className="flex border-b border-white/10 mb-6">
          <button 
            type="button"
            onClick={() => { setIsLoginTab(true); setError(''); }}
            className={`flex-1 pb-3 text-center text-sm font-medium transition-colors cursor-pointer ${
              isLoginTab ? 'text-white border-b-2 border-white' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Sign In
          </button>
          <button 
            type="button"
            onClick={() => { setIsLoginTab(false); setError(''); }}
            className={`flex-1 pb-3 text-center text-sm font-medium transition-colors cursor-pointer ${
              !isLoginTab ? 'text-white border-b-2 border-white' : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Create Account
          </button>
        </div>

        {error && (
          <div className="bg-error-container/30 border border-error/20 rounded-lg p-3 text-xs text-error mb-4">
            {error}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLoginTab && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Password</label>
              {isLoginTab && (
                <a href="#" className="text-xs text-on-surface-variant hover:text-white transition-colors">Forgot Password?</a>
              )}
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <Button type="submit" variant="primary" className="w-full py-3 mt-2">
            {isLoginTab ? 'Sign In' : 'Register'}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <span className="relative bg-surface-container-high px-3 text-xs uppercase text-on-surface-variant">Or Continue With</span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            type="button"
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center gap-2 border border-white/10 rounded-lg py-2.5 text-sm hover:bg-white/5 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.99 5.99 0 0 1 8 12.5a5.99 5.99 0 0 1 5.99-6.023c1.48 0 2.82.54 3.86 1.427l3.223-3.223C19.123 2.802 16.79 2 13.99 2A10 10 0 0 0 4 12a10 10 0 0 0 10 10c5.955 0 9.89-4.184 9.89-10.08c0-.668-.06-1.312-.178-1.921H12.24Z"/>
            </svg>
            Google
          </button>
          <button 
            type="button"
            onClick={() => handleSocialLogin('GitHub')}
            className="flex items-center justify-center gap-2 border border-white/10 rounded-lg py-2.5 text-sm hover:bg-white/5 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/>
            </svg>
            GitHub
          </button>
        </div>

      </div>
    </div>
  );
};

export default AuthModal;
