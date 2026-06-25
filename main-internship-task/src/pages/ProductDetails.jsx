import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById, PRODUCTS } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  
  const [product, setProduct] = useState(null);
  const [successToast, setSuccessToast] = useState('');

  useEffect(() => {
    const p = getProductById(id);
    if (!p) {
      navigate('/shop');
    } else {
      setProduct(p);
    }
  }, [id, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${Date.now()}`,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      type: 'standard',
      quantity: 1
    });

    setSuccessToast(`${product.name} added to bag!`);
    setTimeout(() => setSuccessToast(''), 3000);
  };

  return (
    <div className="pt-24 min-h-screen selection:bg-primary selection:text-background">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed bottom-6 left-6 z-50 bg-white text-background rounded-lg px-4 py-3 flex items-center gap-2 border border-white/10 shadow-2xl glass-panel animate-in fade-in slide-in-from-bottom-5 duration-300">
          <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
          <span className="text-xs font-semibold uppercase tracking-wider">{successToast}</span>
          <Link to="/cart" className="text-xs font-bold underline ml-2 cursor-pointer hover:text-gray-600">
            View Bag
          </Link>
        </div>
      )}

      {/* Main Product Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-96px)]">
        
        {/* Left: Gallery */}
        <div className="lg:col-span-7 bg-surface-container-lowest flex flex-col md:flex-row gap-6 p-margin-mobile md:p-margin-desktop items-center lg:items-start">
          <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
            <button className="w-16 h-16 border rounded-lg overflow-hidden p-1 transition-all border-outline-variant bg-transparent cursor-pointer hover:border-primary">
              <img alt="Detail 1" className="w-full h-full object-cover rounded" src={product.imageUrl} />
            </button>
            <button className="w-16 h-16 border border-outline-variant/30 rounded-lg overflow-hidden p-1 transition-all hover:border-primary bg-transparent cursor-pointer">
              <img alt="Detail 2" className="w-full h-full object-cover rounded" src={product.imageUrl} />
            </button>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full h-full flex items-center justify-center overflow-hidden">
            <img alt={product.name} className="w-full h-full object-contain max-h-[70vh] rounded-xl" src={product.imageUrl} />
          </div>
        </div>

        {/* Right: Configurator / Details */}
        <div className="lg:col-span-5 bg-surface-container p-margin-mobile md:p-margin-desktop overflow-y-auto">
          <div className="max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-label-sm font-medium border border-green-600/30">
                IN STOCK
              </span>
              <span className="text-on-surface-variant font-label-sm">{product.id.toUpperCase()}</span>
            </div>
            
            <h1 className="font-headline-md text-headline-md text-primary mb-2">{product.name}</h1>
            <p className="text-on-surface-variant font-body-md mb-8 capitalize">
              ({product.category.replace('-', ' ')})
            </p>



            {/* General Info Accordion */}
            <div className="border-t border-outline-variant pt-4 mt-4">
              <details className="group" open>
                <summary className="flex justify-between items-center cursor-pointer py-4 list-none outline-none">
                  <span className="font-label-sm text-primary">PRODUCT DETAILS</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-on-surface-variant">expand_more</span>
                </summary>
                <div className="pb-4 text-on-surface-variant font-label-sm leading-relaxed">
                  Manufactured by CORE TECH Dynamics. Global hardware assurance program enabled. Components sourced from sustainable certified silicon partners.
                </div>
              </details>
              <details className="group border-t border-outline-variant" open>
                <summary className="flex justify-between items-center cursor-pointer py-4 list-none outline-none">
                  <span className="font-label-sm text-primary">RETURN & EXCHANGE POLICY</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-on-surface-variant">expand_more</span>
                </summary>
                <div className="pb-4 text-on-surface-variant font-label-sm leading-relaxed">
                  30-day no-questions-asked returns. 2-year limited warranty on hardware defects. Free shipping on all hardware exchanges.
                </div>
              </details>
            </div>

            {/* Footer Actions */}
            <div className="sticky bottom-0 bg-surface-container pt-8 pb-4 border-t border-outline-variant/30 mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-body-md text-on-surface-variant">Total:</span>
                <span className="font-headline-sm text-primary">${product.price}</span>
              </div>
              <button 
                onClick={handleAddToCart}
                className="w-full bg-surface-bright text-primary py-4 rounded-full font-label-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2 border border-outline-variant cursor-pointer"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Carousel */}
      <section className="py-section-gap px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-headline-md text-headline-md mb-12 border-l-4 border-primary pl-6 uppercase">More from Ecosystem</h2>
        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
          {PRODUCTS.slice(-3).map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} className="min-w-[320px] md:min-w-[400px] bg-surface-container-low border border-outline-variant/30 rounded-xl overflow-hidden snap-start group cursor-pointer">
              <div className="h-[300px] overflow-hidden flex items-center justify-center p-8 relative">
                <img alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" src={item.imageUrl} />
              </div>
              <div className="p-6 bg-surface-container flex justify-between items-end">
                <div>
                  <p className="font-label-sm text-on-surface-variant mb-1 uppercase tracking-tighter">{item.category}</p>
                  <h4 className="font-headline-sm text-primary truncate max-w-[200px]">{item.name}</h4>
                </div>
                <p className="font-body-md text-primary">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>


    </div>
  );
};

export default ProductDetails;
