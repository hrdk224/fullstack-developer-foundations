import React, { useState, useEffect } from 'react';
import Button from './Button';
import { useAuth } from '../../context/AuthContext';

const GetStartedModal = ({ isOpen, onClose, initialStep = 1 }) => {
  const { login, updateAddress, user } = useAuth();
  const [step, setStep] = useState(initialStep);
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [error, setError] = useState('');

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(initialStep);
      setError('');
      if (initialStep === 2) {
        setTimer(59);
      }
    }
  }, [isOpen, initialStep]);

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  if (!isOpen) return null;

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    setError('');
    setStep(2);
    setTimer(59);
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;
    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpCode[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const code = otpCode.join('');
    if (code.length < 6) {
      setError('Please enter the complete verification code');
      return;
    }
    // Simulate successful OTP
    login(email, 'dummy_password'); // Logs the user in
    setError('');
    setStep(3); // Move to address setup
  };

  const handleCompleteProfile = (e) => {
    e.preventDefault();
    const { street, city, state, zipCode } = addressData;
    if (!street || !city || !state || !zipCode) {
      setError('Please fill in all address fields');
      return;
    }
    const fullAddress = `${street}, ${city}, ${state} ${zipCode}`;
    updateAddress(fullAddress);
    onClose();
  };

  const handleSkipAddress = () => {
    // Address remains null
    onClose();
  };

  const handleSocialLogin = (provider) => {
    // Simulated social login
    login(`${provider.toLowerCase()}@coretech.com`, 'dummy_password');
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-surface-container-high/95 p-8 text-primary shadow-2xl glass-panel animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-white transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Step 1: Login / Sign Up */}
        {step === 1 && (
          <div className="animate-in slide-in-from-right-4 duration-300">
            <div className="text-center mb-8">
              <span className="text-2xl font-bold tracking-tighter text-white">CORE TECH</span>
              <p className="text-sm text-on-surface-variant mt-2">Sign in or create an account</p>
            </div>

            {error && (
              <div className="bg-error-container/30 border border-error/20 rounded-lg p-3 text-xs text-error mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full py-3 mt-2">
                Continue with Email
              </Button>
            </form>

            <div className="relative my-6 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <span className="relative bg-surface-container-high px-3 text-xs uppercase text-on-surface-variant">Or Continue With</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center gap-2 border border-white/10 rounded-lg py-3 text-sm hover:bg-white/5 transition-all cursor-pointer font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.99 5.99 0 0 1 8 12.5a5.99 5.99 0 0 1 5.99-6.023c1.48 0 2.82.54 3.86 1.427l3.223-3.223C19.123 2.802 16.79 2 13.99 2A10 10 0 0 0 4 12a10 10 0 0 0 10 10c5.955 0 9.89-4.184 9.89-10.08c0-.668-.06-1.312-.178-1.921H12.24Z"/>
                </svg>
                Google
              </button>
              <button 
                type="button"
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center gap-2 border border-white/10 rounded-lg py-3 text-sm hover:bg-white/5 transition-all cursor-pointer font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10Z"/>
                </svg>
                GitHub
              </button>
            </div>
            <p className="text-center text-xs text-on-surface-variant mt-6">
              By continuing, you agree to our <a href="#" className="text-white hover:underline font-medium">Terms of Service</a> and <a href="#" className="text-white hover:underline font-medium">Privacy Policy</a>.
            </p>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="animate-in slide-in-from-right-4 duration-300">
            <button 
              onClick={() => setStep(1)}
              className="mb-6 text-on-surface-variant hover:text-white flex items-center gap-1 text-sm transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back
            </button>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Check your email</h2>
              <p className="text-sm text-on-surface-variant">
                We sent a verification code to <strong className="text-white font-medium">{email}</strong>
              </p>
            </div>

            {error && (
              <div className="bg-error-container/30 border border-error/20 rounded-lg p-3 text-xs text-error mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="flex justify-between gap-2">
                {otpCode.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    className="w-12 h-14 text-center text-lg font-bold bg-surface-container-low border border-white/10 rounded-lg text-white focus:outline-none focus:border-white transition-colors"
                  />
                ))}
              </div>

              <Button type="submit" variant="primary" className="w-full py-3">
                Verify Account
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-on-surface-variant flex justify-center items-center gap-2">
              <span>Didn't receive the code?</span>
              {timer > 0 ? (
                <span className="text-white font-mono">{timer}s</span>
              ) : (
                <button 
                  onClick={() => {
                    setTimer(59);
                    setOtpCode(['', '', '', '', '', '']);
                  }} 
                  className="text-white hover:underline font-medium cursor-pointer"
                >
                  Resend
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Shipping Address Setup */}
        {step === 3 && (
          <div className="animate-in slide-in-from-right-4 duration-300">
            <div className="mb-6 flex justify-between items-center text-xs text-on-surface-variant uppercase tracking-widest border-b border-white/5 pb-3">
              <span>Setup Profile</span>
              <div className="flex gap-1">
                <div className="w-8 h-1 bg-white rounded-full"></div>
                <div className="w-8 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Shipping Details</h2>
              <p className="text-sm text-on-surface-variant">Where should we send your hardware?</p>
            </div>

            {error && (
              <div className="bg-error-container/30 border border-error/20 rounded-lg p-3 text-xs text-error mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleCompleteProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">Street Address</label>
                <input 
                  type="text" 
                  value={addressData.street}
                  onChange={(e) => setAddressData({...addressData, street: e.target.value})}
                  placeholder="123 Innovation Way"
                  className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">City</label>
                <input 
                  type="text" 
                  value={addressData.city}
                  onChange={(e) => setAddressData({...addressData, city: e.target.value})}
                  placeholder="San Francisco"
                  className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">State / Province</label>
                  <input 
                    type="text" 
                    value={addressData.state}
                    onChange={(e) => setAddressData({...addressData, state: e.target.value})}
                    placeholder="CA"
                    className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">ZIP / Postal Code</label>
                  <input 
                    type="text" 
                    value={addressData.zipCode}
                    onChange={(e) => setAddressData({...addressData, zipCode: e.target.value})}
                    placeholder="94105"
                    className="w-full bg-surface-container-low border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <Button type="submit" variant="primary" className="w-full py-3">
                  Complete Profile
                </Button>
                <button 
                  type="button" 
                  onClick={handleSkipAddress}
                  className="w-full py-3 text-sm text-on-surface-variant hover:text-white transition-colors font-medium cursor-pointer"
                >
                  Skip for now
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default GetStartedModal;
