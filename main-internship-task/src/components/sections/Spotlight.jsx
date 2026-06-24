import React from 'react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';
import { Link } from 'react-router-dom';

const SPOTLIGHT_PRODUCTS = PRODUCTS.filter(p => p.category !== 'workstations' && p.category !== 'laptops');

function Spotlight() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
      
      {/* Toast Notification */}
      {/* Removed direct add to cart logic */}

      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="font-display-lg text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-4">
          SPOTLIGHT
        </h2>
        <p className="text-on-surface-variant font-body-lg max-w-2xl">
          Classic silhouettes and cutting-edge innovation to build your game
          from the ground up.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-gutter">
        {SPOTLIGHT_PRODUCTS.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-full aspect-square bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant/20 group-hover:border-primary/50 transition-colors mb-4 relative">
              <img
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={product.imageUrl}
              />
              
              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="material-symbols-outlined text-white text-3xl font-light">visibility</span>
              </div>
            </div>
            <span className="font-label-sm text-[10px] md:text-label-sm text-on-surface-variant group-hover:text-white transition-colors text-center font-semibold truncate w-full px-1">
              {product.name.replace(' Cooling Fan', '').replace(' Interface', '').replace(' Deskmat', '').replace(' Smart Frame', '').replace(' Ergonomic Chair', '').replace(' Headset', '').replace(' Custom gamepad', '').replace(' Braided Connectors', '').replace(' Utility Bag', '').replace(' Chassis', '').replace(' GaN Hub', '')}
            </span>
            <span className="text-xxs text-on-surface-variant/60 font-semibold mt-0.5">${product.price}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Spotlight;
export { SPOTLIGHT_PRODUCTS };
