import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const OrderSuccess = () => {
  const { orderId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto selection:bg-primary selection:text-background min-h-screen flex flex-col items-center justify-center text-center">
      <span className="material-symbols-outlined text-7xl text-primary mb-6 animate-in zoom-in duration-500">
        check_circle
      </span>
      <h1 className="font-headline-md text-4xl md:text-5xl text-white tracking-tight mb-4">
        Order Confirmed
      </h1>
      <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
        Thank you for your purchase, {user.name.split(' ')[0]}. We've sent a confirmation email to {user.email}.
      </p>
      
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 mb-12 w-full max-w-md">
        <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2">Order Reference Number</p>
        <p className="text-2xl font-bold tracking-widest text-white">{orderId}</p>
      </div>

      <div className="flex gap-4">
        <Link 
          to="/shop" 
          className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:opacity-90 transition-colors"
        >
          Continue Shopping
        </Link>
        <Link 
          to="/profile" 
          className="bg-transparent text-white border border-outline-variant/50 px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-surface-container transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
