import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import Button from '../components/ui/Button';
import BentoCard from '../components/ui/BentoCard';

const ECOSYSTEM_PRODUCTS = PRODUCTS.filter(p => p.category === 'accessories' || p.category === 'displays');

const Ecosystem = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [successToast, setSuccessToast] = useState('');

  const handleQuickAdd = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      type: 'standard',
      quantity: 1
    });

    setSuccessToast(product.name);
    setTimeout(() => setSuccessToast(''), 3000);
  };

  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">
      {/* Toast */}
      {successToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-white text-background rounded-lg px-4 py-3 flex items-center gap-2 border border-white/10 shadow-2xl glass-panel animate-in fade-in slide-in-from-bottom-5 duration-300">
          <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
          <span className="text-xs font-semibold uppercase tracking-wider">{successToast} added to bag!</span>
          <button 
            onClick={() => {
              setSuccessToast('');
              setIsCartOpen(true);
            }} 
            className="text-xs font-bold underline ml-2 cursor-pointer hover:text-gray-600"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Header */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
          Modular Ecosystem
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          CORE TECH ACCESSORIES
        </h1>
        <p className="text-on-surface-variant font-body-md leading-relaxed">
          Enhance your workstations and laptops with modules built on standard dimensions. Fully backward and forward compatible. Designed for longevity and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {ECOSYSTEM_PRODUCTS.map((product) => (
          <BentoCard key={product.id} className="bg-surface-container-high/60 flex flex-col justify-between h-full border border-white/5 group">
            <div>
              <div className="w-full aspect-video overflow-hidden border-b border-white/5 bg-surface-container-low relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              <div className="p-8 space-y-3">
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug">{product.name}</h3>
                  <span className="text-base font-bold text-white shrink-0">${product.price}</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </div>
            
            <div className="px-8 pb-8">
              <Button
                variant="outline"
                className="w-full py-2.5 font-semibold text-xs tracking-wider uppercase border-white/10 hover:border-white text-white hover:bg-white hover:text-background"
                onClick={() => handleQuickAdd(product)}
              >
                Add to Bag
              </Button>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};

export default Ecosystem;
export { ECOSYSTEM_PRODUCTS };
