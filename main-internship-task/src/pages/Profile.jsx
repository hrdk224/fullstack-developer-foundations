import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, setIsAuthOpen, setIsGetStartedOpen, setGetStartedStep } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!user) {
      navigate('/');
      setIsAuthOpen(true);
    }
  }, [user, navigate, setIsAuthOpen]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleEditAddress = () => {
    setGetStartedStep(3);
    setIsGetStartedOpen(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
              <h2 className="text-xl font-headline-sm text-white">Account Overview</h2>
              <button className="text-sm font-label-sm uppercase tracking-widest text-primary border border-outline-variant/30 px-4 py-1.5 rounded-full hover:bg-surface-container transition-colors cursor-pointer">
                Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Full Name</p>
                <p className="text-base text-white">{user.name}</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Email Address</p>
                <p className="text-base text-white">{user.email}</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Phone Number</p>
                <p className="text-base text-white">{user.phone || '+1 (555) 000-0000'}</p>
              </div>
            </div>
          </div>
        );
      case 'addresses':
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
              <h2 className="text-xl font-headline-sm text-white">Saved Addresses</h2>
              <button onClick={handleEditAddress} className="text-sm font-label-sm uppercase tracking-widest text-background bg-primary px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity cursor-pointer">
                Add New Address
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {user.shippingAddress ? (
                <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6">
                  <p className="font-semibold text-white mb-2">Primary Shipping</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {user.name}<br />
                    {user.shippingAddress}
                  </p>
                  <div className="flex gap-4">
                    <button onClick={handleEditAddress} className="text-xs text-primary uppercase tracking-widest hover:underline cursor-pointer">Edit</button>
                  </div>
                </div>
              ) : (
                <div className="bg-surface-container-low border border-outline-variant/20 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center opacity-60 h-40">
                  <p className="text-sm text-on-surface-variant">No saved addresses yet.</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="border-b border-outline-variant/20 pb-4">
              <h2 className="text-xl font-headline-sm text-white">Order History</h2>
            </div>
            {(!user.orders || user.orders.length === 0) ? (
              <div className="text-center py-12">
                <p className="text-on-surface-variant">You have no recent orders.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/30 text-xs text-on-surface-variant uppercase tracking-widest">
                      <th className="py-4 font-normal">Order ID</th>
                      <th className="py-4 font-normal">Date</th>
                      <th className="py-4 font-normal">Status</th>
                      <th className="py-4 font-normal text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {user.orders.map((order) => (
                      <tr key={order.id} className="border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors">
                        <td className="py-4 font-medium text-white">{order.id}</td>
                        <td className="py-4 text-on-surface-variant">{order.date}</td>
                        <td className="py-4">
                          <span className="bg-surface-container-highest text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 text-right font-medium text-white">${order.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-lg uppercase tracking-tighter text-white select-none">
              {user.name.substring(0, 2)}
            </div>
            <div>
              <p className="text-sm text-on-surface-variant">Welcome back,</p>
              <h1 className="text-lg font-bold text-white truncate">{user.name.split(' ')[0]}</h1>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`text-left px-4 py-3 rounded-lg text-sm transition-all cursor-pointer ${
                activeTab === 'overview' 
                  ? 'bg-surface-container-highest text-white font-medium' 
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-white'
              }`}
            >
              Account Overview
            </button>
            <button
              onClick={() => setActiveTab('addresses')}
              className={`text-left px-4 py-3 rounded-lg text-sm transition-all cursor-pointer ${
                activeTab === 'addresses' 
                  ? 'bg-surface-container-highest text-white font-medium' 
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-white'
              }`}
            >
              Saved Addresses
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`text-left px-4 py-3 rounded-lg text-sm transition-all cursor-pointer ${
                activeTab === 'orders' 
                  ? 'bg-surface-container-highest text-white font-medium' 
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-white'
              }`}
            >
              Order History
            </button>
            
            <div className="mt-8 pt-4 border-t border-outline-variant/20">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-sm text-error hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-h-[500px]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Profile;

