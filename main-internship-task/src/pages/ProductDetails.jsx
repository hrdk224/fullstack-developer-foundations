import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById, PRODUCTS } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  
  const [product, setProduct] = useState(null);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [successToast, setSuccessToast] = useState('');

  // Configuration state (if customizable)
  const [selections, setSelections] = useState({
    processor: 'base',
    ram: '16gb',
    storage: '512gb',
    expansion: '4-port'
  });

  useEffect(() => {
    const p = getProductById(id);
    if (!p) {
      navigate('/shop');
    } else {
      setProduct(p);
    }
  }, [id, navigate]);

  if (!product) return null;

  const calculateTotal = () => {
    let total = product.price;
    if (product.isConfigurable) {
      if (selections.processor === 'i9') total += 249;
      if (selections.ram === '64gb') total += 180;
      if (selections.storage === '1tb') total += 120;
      if (selections.expansion !== '4-port') total += 25;
    }
    return total;
  };

  const handleAddToCart = () => {
    const specs = product.isConfigurable ? {
      processor: selections.processor,
      ram: selections.ram,
      storage: selections.storage,
      expansion: selections.expansion
    } : null;

    addToCart({
      id: `${product.id}-${Date.now()}`,
      name: product.name,
      price: calculateTotal(),
      imageUrl: product.imageUrl,
      type: product.isConfigurable ? 'custom' : 'standard',
      specs,
      quantity: 1
    });

    if (product.isConfigurable) {
      setIsUpsellOpen(true);
    } else {
      setSuccessToast(`${product.name} added to bag!`);
      setTimeout(() => setSuccessToast(''), 3000);
    }
  };

  const handleUpsellCheckout = () => {
    setIsUpsellOpen(false);
    navigate('/cart');
  };

  const trendingUpsells = PRODUCTS.filter(p => p.category === 'accessories').slice(0, 3);

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

            {/* Configurator Only if applicable */}
            {product.isConfigurable && (
              <div className="space-y-8">
                {/* Processor */}
                <div>
                  <h3 className="font-label-sm text-primary mb-4 uppercase tracking-widest">Processor</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setSelections({...selections, processor: 'base'})}
                      className={`p-4 border rounded-lg text-left transition-all cursor-pointer ${selections.processor === 'base' ? 'border-primary bg-surface-container-high' : 'border-outline-variant bg-transparent hover:border-primary/50'}`}
                    >
                      <p className={`font-label-sm ${selections.processor === 'base' ? 'text-primary' : 'text-on-surface-variant'}`}>Standard CPU</p>
                      <p className="text-[10px] text-on-surface-variant mt-1">Included</p>
                    </button>
                    <button 
                      onClick={() => setSelections({...selections, processor: 'i9'})}
                      className={`p-4 border rounded-lg text-left transition-all cursor-pointer ${selections.processor === 'i9' ? 'border-primary bg-surface-container-high' : 'border-outline-variant bg-transparent hover:border-primary/50'}`}
                    >
                      <p className={`font-label-sm ${selections.processor === 'i9' ? 'text-primary' : 'text-on-surface-variant'}`}>Pro CPU</p>
                      <p className="text-[10px] text-on-surface-variant mt-1">+$249.00</p>
                    </button>
                  </div>
                </div>

                {/* Memory */}
                <div>
                  <h3 className="font-label-sm text-primary mb-4 uppercase tracking-widest">Memory (RAM)</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['16gb', '32gb', '64gb'].map((ram) => (
                      <button 
                        key={ram}
                        onClick={() => setSelections({...selections, ram})}
                        className={`p-3 border rounded-lg text-center transition-all cursor-pointer ${selections.ram === ram ? 'border-primary bg-surface-container-high' : 'border-outline-variant bg-transparent hover:border-primary/50'}`}
                      >
                        <p className={`font-label-sm uppercase ${selections.ram === ram ? 'text-primary' : 'text-on-surface-variant'}`}>{ram}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Storage */}
                <div>
                  <h3 className="font-label-sm text-primary mb-4 uppercase tracking-widest">Storage</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setSelections({...selections, storage: '512gb'})}
                      className={`p-4 border rounded-lg text-left transition-all cursor-pointer ${selections.storage === '512gb' ? 'border-primary bg-surface-container-high' : 'border-outline-variant bg-transparent hover:border-primary/50'}`}
                    >
                      <p className={`font-label-sm uppercase ${selections.storage === '512gb' ? 'text-primary' : 'text-on-surface-variant'}`}>512GB NVMe</p>
                    </button>
                    <button 
                      onClick={() => setSelections({...selections, storage: '1tb'})}
                      className={`p-4 border rounded-lg text-left transition-all cursor-pointer ${selections.storage === '1tb' ? 'border-primary bg-surface-container-high' : 'border-outline-variant bg-transparent hover:border-primary/50'}`}
                    >
                      <p className={`font-label-sm uppercase ${selections.storage === '1tb' ? 'text-primary' : 'text-on-surface-variant'}`}>1TB Gen4 SSD</p>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* General Info Accordion */}
            <div className={`border-t border-outline-variant pt-4 ${product.isConfigurable ? 'mt-8' : 'mt-4'}`}>
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
                <span className="font-headline-sm text-primary">${calculateTotal()}</span>
              </div>
              <button 
                onClick={handleAddToCart}
                className="w-full bg-surface-bright text-primary py-4 rounded-full font-label-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2 border border-outline-variant cursor-pointer"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                {product.isConfigurable ? 'Configure & Add to Cart' : 'Add to Cart'}
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

      {/* Upsell Modal Overlay */}
      {isUpsellOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-surface-container-high w-full max-w-2xl rounded-2xl overflow-hidden relative border border-outline-variant/50 animate-in zoom-in-95 duration-300">
            <button 
              className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors cursor-pointer" 
              onClick={() => setIsUpsellOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="p-8 md:p-12">
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Complete Your Purchase</h3>
              <p className="text-on-surface-variant font-body-md mb-8">Maximize your new modular setup with these recommended peripherals.</p>
              
              <div className="space-y-4 mb-10">
                {trendingUpsells.map(upsell => (
                  <div key={upsell.id} className="flex items-center gap-4 p-4 bg-surface-container border border-outline-variant/30 rounded-xl">
                    <div className="w-20 h-20 rounded-lg bg-surface-container-lowest overflow-hidden flex-shrink-0">
                      <img alt={upsell.name} className="w-full h-full object-cover" src={upsell.imageUrl} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-label-sm text-primary uppercase truncate">{upsell.name}</h4>
                      <p className="text-on-surface-variant text-[11px] truncate uppercase">{upsell.category}</p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="font-body-md text-primary">${upsell.price}</span>
                      <button 
                        className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full font-label-sm hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                        onClick={() => {
                          addToCart({ ...upsell, type: 'standard', quantity: 1 });
                          setSuccessToast(`${upsell.name} added!`);
                          setTimeout(() => setSuccessToast(''), 2000);
                        }}
                      >
                        + ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleUpsellCheckout}
                className="w-full bg-surface-bright text-primary py-5 rounded-full font-label-sm font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-all border border-outline-variant cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
