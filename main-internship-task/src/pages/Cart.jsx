import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { user, setIsGetStartedOpen, setGetStartedStep } = useAuth();
  const navigate = useNavigate();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    if (!user) {
      setGetStartedStep(1); // Email step
      setIsGetStartedOpen(true);
      return;
    }

    if (!user.shippingAddress) {
      setGetStartedStep(3); // Address step
      setIsGetStartedOpen(true);
      return;
    }

    // Process to real checkout (mocked)
    alert("Proceeding to secure payment gateway!");
  };

  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto selection:bg-primary selection:text-background min-h-screen">
      
      {/* Page Title */}
      <header className="mb-16 text-center">
        <h1 className="font-headline-md text-headline-md uppercase tracking-[0.2em] font-light text-white">Shopping Bag</h1>
        <p className="font-label-sm text-on-surface-variant mt-2 uppercase tracking-widest">
          {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} — Estimated Shipping: 2-3 Days
        </p>
      </header>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-surface-container-low border border-white/10 rounded-xl max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">shopping_bag</span>
          <h2 className="text-2xl font-bold text-white mb-2">Your bag is empty</h2>
          <p className="text-on-surface-variant mb-8">Let's find some gear to fill it up.</p>
          <Link to="/shop" className="bg-white text-background px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white/90 transition-colors inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="group flex flex-col md:flex-row gap-6 p-6 bg-surface-container-low rounded-lg border border-outline-variant/10 transition-all hover:border-outline-variant/30">
                <div className="w-full md:w-48 aspect-square bg-surface-container-lowest rounded overflow-hidden flex-shrink-0 relative">
                  <img alt={item.name} className="w-full h-full object-cover" src={item.imageUrl} />
                </div>
                
                <div className="flex flex-col flex-grow justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="opacity-0 group-hover:opacity-100 text-on-surface-variant hover:text-error transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                    {item.specs ? (
                      <p className="font-label-sm text-on-surface-variant uppercase mb-4 max-w-xs truncate">
                        {item.type === 'custom' 
                          ? `Configured • ${item.specs.processor}` 
                          : 'Custom Build'}
                      </p>
                    ) : (
                      <p className="font-label-sm text-on-surface-variant uppercase mb-4">Standard Edition</p>
                    )}
                    
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-bold text-lg">${item.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center border border-outline-variant rounded-full overflow-hidden bg-surface-container">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 hover:bg-surface-variant transition-colors text-on-surface cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <input 
                        className="w-10 bg-transparent border-none text-center font-label-sm focus:ring-0 text-white" 
                        type="text" 
                        value={item.quantity} 
                        readOnly 
                      />
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-surface-variant transition-colors text-on-surface cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="font-label-sm text-on-surface-variant underline hover:text-primary transition-colors cursor-pointer"
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Summary Card */}
          <aside className="lg:col-span-5">
            <div className="bg-surface-container p-8 rounded-lg border border-outline-variant/20 sticky top-28">
              <h2 className="font-label-sm text-on-surface-variant uppercase tracking-[0.2em] mb-8">Order Summary</h2>
              
              {/* Make it a Gift */}
              <div className="flex items-center justify-between p-4 bg-surface-container-highest/50 rounded-lg mb-6 group cursor-pointer hover:bg-surface-container-highest transition-all">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">featured_seasonal_and_gifts</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-white">Make it a gift</p>
                    <p className="text-xs text-on-surface-variant">Personalized note & premium wrap</p>
                  </div>
                </div>
                <button className="text-primary font-label-sm font-bold underline cursor-pointer">ADD</button>
              </div>
              
              {/* Dropdowns */}
              <div className="space-y-4 mb-8">
                <button className="w-full flex justify-between items-center py-4 border-b border-outline-variant/30 text-on-surface hover:text-primary transition-all cursor-pointer">
                  <span className="font-label-sm uppercase tracking-widest">Coupons & Offers</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
                <button className="w-full flex justify-between items-center py-4 border-b border-outline-variant/30 text-on-surface hover:text-primary transition-all cursor-pointer">
                  <span className="font-label-sm uppercase tracking-widest">Redeem Gift Card</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
              </div>
              
              {/* Order Analysis */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="text-primary font-bold text-xs bg-surface-container-highest px-3 py-1 rounded-full uppercase">Free</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Estimated Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-end">
                  <div>
                    <p className="text-on-surface-variant text-xs uppercase mb-1">Total Amount</p>
                    <p className="font-headline-sm text-primary font-bold">${total.toFixed(2)}</p>
                  </div>
                  <p className="text-[10px] text-on-surface-variant uppercase text-right">Inclusive of all taxes</p>
                </div>
              </div>
              
              {/* Checkout Button */}
              <button 
                onClick={handleCheckout}
                className="w-full bg-primary text-on-primary py-5 rounded-full font-bold uppercase tracking-[0.1em] hover:opacity-90 transition-all active:scale-[0.98] cursor-pointer"
              >
                Secure Checkout
              </button>
              <div className="mt-6 flex items-center justify-center gap-4 opacity-40">
                <span className="material-symbols-outlined text-sm text-white">verified_user</span>
                <p className="text-[10px] uppercase tracking-widest text-white">AES-256 Bit Encryption</p>
              </div>
            </div>
          </aside>

        </div>
      )}
    </div>
  );
};

export default Cart;
