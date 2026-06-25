import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

const Workstations = () => {
  const workstations = PRODUCTS.filter(p => p.category === 'workstations');

  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">
      {/* Hero Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
          Engineering Excellence
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          CORE WORKSTATIONS
        </h1>
        <p className="text-on-surface-variant font-body-md leading-relaxed">
          High-density compute servers designed for compilers, machine learning tasks, 3D artists, and engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workstations.map(ws => (
          <Link 
            key={ws.id}
            to={`/product/${ws.id}`}
            className="group block bg-surface-container-low border border-outline-variant/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="h-[300px] overflow-hidden flex items-center justify-center p-8 relative bg-surface-container-lowest">
              <img 
                alt={ws.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                src={ws.imageUrl} 
              />
            </div>
            <div className="p-8 bg-surface-container flex flex-col justify-between items-start">
              <div className="mb-6">
                <p className="font-label-sm text-on-surface-variant mb-1 uppercase tracking-tighter">
                  {ws.category}
                </p>
                <h4 className="font-headline-sm text-primary mb-2">
                  {ws.name}
                </h4>
                <p className="font-body-md text-on-surface-variant line-clamp-2">
                  Extreme performance compute towers for the most demanding creative and engineering workloads.
                </p>
              </div>
              <div className="w-full flex items-center justify-between border-t border-outline-variant/30 pt-4">
                <span className="font-headline-sm text-white">${ws.price}</span>
                <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full font-label-sm uppercase font-bold">
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Workstations;
