import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import BentoCard from '../components/ui/BentoCard';

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, setIsAuthOpen } = useAuth();
  const { addToCart, setIsCartOpen } = useCart();
  const [successToast, setSuccessToast] = useState('');

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/');
      setIsAuthOpen(true);
    }
  }, [user, navigate, setIsAuthOpen]);

  if (!user) return null;

  const handleAddSavedConfigToBag = (config) => {
    addToCart({
      id: `custom-saved-${Date.now()}`,
      name: config.name,
      price: config.price,
      imageUrl: config.type === 'workstation' 
        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxEIJZ5GNdGJ6YmzpJDzLZustUflNkLDvk2BJM-lSISCEEF3kZhGqDYjKXzeDA_no_4hrmLz9zbRIT6RVt0I5eJql9ktafZtq93eGSjieioJKCMm-ztr_noIw_-rKwTMJ9zDxt9EDk296Hie7JB9ArQyVskgKvG8aGeGPH2tNL4t8Xfrm8Dv-a7hOtwpDBm3mN3DzbLfHubGClu9QRDkGJokTlWID6edYXuz0YpTgz3fBBOiWzDgGiw7g_A_s4rUN-rN0xV27Z2Ac'
        : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqFEU0SVhQMKcFDI4vZobYy5SotgK6UcTiQ2kiU03p-zt_ptk-JrfCOr5A-ugGesihPOqqd4RYDqTk7KSsBY7NarCUFBP1gTYbiUr7A2EVhVqWkatfEKG6J_or0n38aalToQS0Oe0KMZGmtb0kiaUMhVguNHenoIyaUiqv0CvO3vb5ONNRQPQl_mkfn5xivmAYcvDK4d7KU8ro3F5jIB4qstYP9W9SDhuvCp0c0XCk5fXhSE9sEOR4r0i0sOWGSbr1UZAqO9ryLtg',
      type: config.type,
      specs: config.specs,
      quantity: 1
    });

    setSuccessToast(`${config.name} added to bag!`);
    setTimeout(() => setSuccessToast(''), 3000);
    setIsCartOpen(true);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">
      {/* Toast */}
      {successToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-white text-background rounded-lg px-4 py-3 flex items-center gap-2 border border-white/10 shadow-2xl glass-panel animate-in fade-in slide-in-from-bottom-5 duration-300">
          <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
          <span className="text-xs font-semibold uppercase tracking-wider">{successToast}</span>
        </div>
      )}

      {/* User Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-10 mb-12">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-bold text-2xl uppercase tracking-tighter text-white select-none">
            {user.name.substring(0, 2)}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase">{user.name}</h1>
            <p className="text-sm text-on-surface-variant mt-1">{user.email}</p>
          </div>
        </div>
        <Button 
          variant="secondary" 
          onClick={handleLogout}
          className="border border-white/10 hover:border-white py-2 px-6"
        >
          Sign Out
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        
        {/* Left Side: Saved Configurations */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-base">bookmark</span>
            Saved Configurations
          </h2>

          {user.savedConfigs.length === 0 ? (
            <div className="bg-surface-container-low border border-white/5 rounded-xl p-8 text-center opacity-60">
              <span className="material-symbols-outlined text-4xl mb-2">construction</span>
              <p className="text-sm">You haven't saved any custom workstation or laptop configurations yet.</p>
              <div className="flex gap-4 justify-center mt-6">
                <Button variant="link" onClick={() => navigate('/workstations')}>Configure Workstation</Button>
                <span className="text-white/20">|</span>
                <Button variant="link" onClick={() => navigate('/laptops')}>Configure Laptop</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {user.savedConfigs.map((config) => (
                <div key={config.id} className="bg-surface-container border border-white/10 rounded-xl p-6 shadow-md space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold">{config.name}</h4>
                      <span className="text-xxs text-on-surface-variant uppercase tracking-widest bg-white/5 border border-white/5 rounded-full px-2 py-0.5 mt-1.5 inline-block">
                        {config.type}
                      </span>
                    </div>
                    <span className="text-sm font-bold">${config.price}</span>
                  </div>

                  <div className="border-t border-white/5 pt-3">
                    <ul className="text-xxs text-on-surface-variant/80 space-y-1">
                      {Object.entries(config.specs).map(([key, val]) => (
                        <li key={key} className="truncate">
                          <span className="font-semibold text-white/50 uppercase tracking-wider mr-1">{key}:</span> {val}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="primary" 
                      onClick={() => handleAddSavedConfigToBag(config)}
                      className="flex-1 py-2 text-xs"
                    >
                      Add configuration to Bag
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Order History */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-lg font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
            <span className="material-symbols-outlined text-base">receipt_long</span>
            Order History
          </h2>

          {user.orders.length === 0 ? (
            <div className="bg-surface-container-low border border-white/5 rounded-xl p-8 text-center opacity-60">
              <span className="material-symbols-outlined text-4xl mb-2">shopping_bag</span>
              <p className="text-sm">No orders found.</p>
              <Button variant="link" className="mt-4" onClick={() => navigate('/shop')}>Browse Store</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {user.orders.map((order) => (
                <div key={order.id} className="bg-surface-container border border-white/5 rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                    <div>
                      <span className="font-bold text-white block">{order.id}</span>
                      <span className="text-on-surface-variant/60">{order.date}</span>
                    </div>
                    <span className="bg-white/10 text-white rounded-full px-3 py-0.5 text-xxs font-bold uppercase tracking-wider">
                      {order.status}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5 py-1">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xxs">
                        <span className="text-on-surface-variant truncate max-w-[200px]">{item.name} <span className="text-white/30">x{item.quantity}</span></span>
                        <span className="font-semibold text-white">${item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center border-t border-white/5 pt-2 text-xs font-bold">
                    <span>Total Paid</span>
                    <span>${order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;

