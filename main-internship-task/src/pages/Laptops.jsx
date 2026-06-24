import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const MODULES = [
  { id: 'usb-c', name: 'USB-C Expansion Card', price: 15, icon: 'settings_ethernet' },
  { id: 'usb-a', name: 'USB-A Expansion Card', price: 15, icon: 'usb' },
  { id: 'hdmi', name: 'HDMI 2.1 Expansion Card', price: 25, icon: 'settings_input_hdmi' },
  { id: 'displayport', name: 'DisplayPort Expansion Card', price: 25, icon: 'settings_input_hdmi' },
  { id: 'microsd', name: 'MicroSD Card Slot Module', price: 25, icon: 'sd_card' },
  { id: 'ethernet', name: 'Gigabit Ethernet Card', price: 35, icon: 'lan' },
  { id: '1tb-ssd', name: '1TB Extra SSD Expansion', price: 120, icon: 'database' }
];

const PLATFORMS = [
  { id: 'laptop-13', name: 'CORE LAPTOP 13 (Intel Core Ultra 7)', price: 1199, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqFEU0SVhQMKcFDI4vZobYy5SotgK6UcTiQ2kiU03p-zt_ptk-JrfCOr5A-ugGesihPOqqd4RYDqTk7KSsBY7NarCUFBP1gTYbiUr7A2EVhVqWkatfEKG6J_or0n38aalToQS0Oe0KMZGmtb0kiaUMhVguNHenoIyaUiqv0CvO3vb5ONNRQPQl_mkfn5xivmAYcvDK4d7KU8ro3F5jIB4qstYP9W9SDhuvCp0c0XCk5fXhSE9sEOR4r0i0sOWGSbr1UZAqO9ryLtg' },
  { id: 'laptop-16', name: 'CORE LAPTOP 16 (Intel Core Ultra 9 / RTX 4050)', price: 1599, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqFEU0SVhQMKcFDI4vZobYy5SotgK6UcTiQ2kiU03p-zt_ptk-JrfCOr5A-ugGesihPOqqd4RYDqTk7KSsBY7NarCUFBP1gTYbiUr7A2EVhVqWkatfEKG6J_or0n38aalToQS0Oe0KMZGmtb0kiaUMhVguNHenoIyaUiqv0CvO3vb5ONNRQPQl_mkfn5xivmAYcvDK4d7KU8ro3F5jIB4qstYP9W9SDhuvCp0c0XCk5fXhSE9sEOR4r0i0sOWGSbr1UZAqO9ryLtg' }
];

const Laptops = () => {
  const { addToCart } = useCart();
  const { saveConfig } = useAuth();
  const navigate = useNavigate();
  
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [activeSlot, setActiveSlot] = useState(null); // null or 1 | 2 | 3 | 4
  const [slots, setSlots] = useState({
    slot1: MODULES[0], // Left Front: USB-C
    slot2: MODULES[1], // Left Rear: USB-A
    slot3: MODULES[2], // Right Front: HDMI
    slot4: null        // Right Rear: Empty
  });
  
  const [notification, setNotification] = useState('');

  const handleSlotSelect = (slotNum) => {
    setActiveSlot(slotNum);
  };

  const handleModuleInsert = (module) => {
    if (!activeSlot) return;
    setSlots({ ...slots, [`slot${activeSlot}`]: module });
    setActiveSlot(null);
  };

  const handleClearSlot = (slotNum) => {
    setSlots({ ...slots, [`slot${slotNum}`]: null });
  };

  const calculateTotal = () => {
    let total = platform.price;
    Object.values(slots).forEach((mod) => {
      if (mod) total += mod.price;
    });
    return total;
  };

  const handleAddToBag = () => {
    const total = calculateTotal();
    const specs = {
      model: platform.name,
      leftFront: slots.slot1 ? slots.slot1.name : 'Empty Slot',
      leftRear: slots.slot2 ? slots.slot2.name : 'Empty Slot',
      rightFront: slots.slot3 ? slots.slot3.name : 'Empty Slot',
      rightRear: slots.slot4 ? slots.slot4.name : 'Empty Slot'
    };

    addToCart({
      id: `custom-laptop-${Date.now()}`,
      name: 'Custom CORE MODULAR LAPTOP',
      price: total,
      imageUrl: platform.imageUrl,
      type: 'laptop',
      specs,
      quantity: 1
    });

    setNotification('Custom Laptop added to shopping bag!');
    setTimeout(() => {
      setNotification('');
      navigate('/cart');
    }, 1500);
  };

  const handleSaveToProfile = () => {
    const total = calculateTotal();
    const specs = {
      model: platform.name,
      leftFront: slots.slot1 ? slots.slot1.name : 'Empty Slot',
      leftRear: slots.slot2 ? slots.slot2.name : 'Empty Slot',
      rightFront: slots.slot3 ? slots.slot3.name : 'Empty Slot',
      rightRear: slots.slot4 ? slots.slot4.name : 'Empty Slot'
    };

    const res = saveConfig({
      name: 'Custom CORE MODULAR LAPTOP',
      type: 'laptop',
      price: total,
      specs
    });

    if (res.success) {
      setNotification('Configuration saved to your profile dashboard.');
    } else {
      setNotification(res.error || 'Failed to save configuration');
    }
    setTimeout(() => setNotification(''), 4000);
  };

  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">
      {/* Toast */}
      {notification && (
        <div className="fixed bottom-6 left-6 z-50 bg-white text-background rounded-lg px-4 py-3 flex items-center gap-2 border border-white/10 shadow-2xl glass-panel animate-in fade-in slide-in-from-bottom-5 duration-300">
          <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
          <span className="text-xs font-semibold uppercase tracking-wider">{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
          Ecosystem Customizer
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          CORE MODULAR LAPTOP
        </h1>
        <p className="text-on-surface-variant font-body-md leading-relaxed">
          The ultimate thin-and-light laptop with modular hardware parts. Swap CPU/motherboard mainboards, keyboard layouts, and configure your side expansion card slots with standard ports in seconds.
        </p>
      </div>

      {/* Platform Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {PLATFORMS.map((plat) => (
          <button
            key={plat.id}
            onClick={() => setPlatform(plat)}
            className={`text-left rounded-xl p-6 border transition-all cursor-pointer flex justify-between items-center ${
              platform.id === plat.id 
                ? 'border-white bg-white/5 shadow-md' 
                : 'border-white/10 bg-surface-container-high/50 hover:border-white/30'
            }`}
          >
            <div>
              <h4 className="text-sm font-semibold">{plat.name}</h4>
              <p className="text-xxs text-on-surface-variant mt-1">Starting at ${plat.price}</p>
            </div>
            <span className="text-base font-bold">${plat.price}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        
        {/* Left Side: Laptop Customizer Interface */}
        <div className="lg:col-span-8 bg-surface-container-low border border-white/10 rounded-xl p-8 relative flex flex-col items-center justify-center min-h-[500px]">
          <h3 className="absolute top-6 left-6 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Hot-Swappable Card Deck
          </h3>
          <p className="absolute top-6 right-6 text-xxs text-on-surface-variant font-semibold">
            Click on a slot to insert or remove port cards
          </p>

          {/* Stylized Laptop Chassis */}
          <div className="relative w-full max-w-[550px] bg-zinc-900 border-2 border-zinc-800 rounded-3xl p-10 pb-14 shadow-2xl flex flex-col items-center mt-6">
            
            {/* Left Slot 1 (Rear) */}
            <div className="absolute top-24 -left-12 flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-on-surface-variant">L1</span>
              <button 
                onClick={() => handleSlotSelect(1)}
                className={`w-20 h-10 border rounded flex flex-col items-center justify-center transition-all cursor-pointer ${
                  activeSlot === 1 
                    ? 'border-white bg-white/20' 
                    : slots.slot1 
                      ? 'border-white/40 bg-zinc-800 text-white' 
                      : 'border-dashed border-white/10 bg-transparent hover:border-white/30'
                }`}
              >
                {slots.slot1 ? (
                  <>
                    <span className="material-symbols-outlined text-sm">{slots.slot1.icon}</span>
                    <span className="text-[8px] truncate font-bold max-w-[70px] uppercase">{slots.slot1.id}</span>
                  </>
                ) : (
                  <span className="text-[9px] font-bold text-on-surface-variant">EMPTY</span>
                )}
              </button>
            </div>

            {/* Left Slot 2 (Front) */}
            <div className="absolute top-[170px] -left-12 flex items-center gap-1.5">
              <span className="text-[9px] font-bold text-on-surface-variant">L2</span>
              <button 
                onClick={() => handleSlotSelect(2)}
                className={`w-20 h-10 border rounded flex flex-col items-center justify-center transition-all cursor-pointer ${
                  activeSlot === 2 
                    ? 'border-white bg-white/20' 
                    : slots.slot2 
                      ? 'border-white/40 bg-zinc-800 text-white' 
                      : 'border-dashed border-white/10 bg-transparent hover:border-white/30'
                }`}
              >
                {slots.slot2 ? (
                  <>
                    <span className="material-symbols-outlined text-sm">{slots.slot2.icon}</span>
                    <span className="text-[8px] truncate font-bold max-w-[70px] uppercase">{slots.slot2.id}</span>
                  </>
                ) : (
                  <span className="text-[9px] font-bold text-on-surface-variant">EMPTY</span>
                )}
              </button>
            </div>

            {/* Right Slot 3 (Rear) */}
            <div className="absolute top-24 -right-12 flex items-center gap-1.5">
              <button 
                onClick={() => handleSlotSelect(3)}
                className={`w-20 h-10 border rounded flex flex-col items-center justify-center transition-all cursor-pointer ${
                  activeSlot === 3 
                    ? 'border-white bg-white/20' 
                    : slots.slot3 
                      ? 'border-white/40 bg-zinc-800 text-white' 
                      : 'border-dashed border-white/10 bg-transparent hover:border-white/30'
                }`}
              >
                {slots.slot3 ? (
                  <>
                    <span className="material-symbols-outlined text-sm">{slots.slot3.icon}</span>
                    <span className="text-[8px] truncate font-bold max-w-[70px] uppercase">{slots.slot3.id}</span>
                  </>
                ) : (
                  <span className="text-[9px] font-bold text-on-surface-variant">EMPTY</span>
                )}
              </button>
              <span className="text-[9px] font-bold text-on-surface-variant">R1</span>
            </div>

            {/* Right Slot 4 (Front) */}
            <div className="absolute top-[170px] -right-12 flex items-center gap-1.5">
              <button 
                onClick={() => handleSlotSelect(4)}
                className={`w-20 h-10 border rounded flex flex-col items-center justify-center transition-all cursor-pointer ${
                  activeSlot === 4 
                    ? 'border-white bg-white/20' 
                    : slots.slot4 
                      ? 'border-white/40 bg-zinc-800 text-white' 
                      : 'border-dashed border-white/10 bg-transparent hover:border-white/30'
                }`}
              >
                {slots.slot4 ? (
                  <>
                    <span className="material-symbols-outlined text-sm">{slots.slot4.icon}</span>
                    <span className="text-[8px] truncate font-bold max-w-[70px] uppercase">{slots.slot4.id}</span>
                  </>
                ) : (
                  <span className="text-[9px] font-bold text-on-surface-variant">EMPTY</span>
                )}
              </button>
              <span className="text-[9px] font-bold text-on-surface-variant">R2</span>
            </div>

            {/* Keyboard Grid */}
            <div className="w-full aspect-[16/9] bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between mb-4">
              <div className="w-full h-8 bg-zinc-900 border border-zinc-800 rounded flex items-center px-4 justify-between">
                <span className="w-6 h-2 bg-zinc-850 rounded"></span>
                <span className="w-48 h-2 bg-zinc-850 rounded"></span>
                <span className="w-12 h-2 bg-zinc-850 rounded"></span>
              </div>
              <div className="flex-1 grid grid-cols-12 gap-1.5 py-4">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="bg-zinc-900 border border-zinc-850 rounded flex items-center justify-center text-[6px] font-bold text-zinc-600">
                    key
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center">
                <div className="w-32 h-14 bg-zinc-900 border border-zinc-850 rounded-t-lg"></div>
              </div>
            </div>

            {/* Laptop Front Bezel details */}
            <div className="w-12 h-1.5 bg-zinc-800 rounded-full mb-1"></div>
            <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">CORE TECH</div>

          </div>

          {/* Configurator Deck status list */}
          <div className="w-full max-w-[450px] mt-10 grid grid-cols-2 gap-4 text-xs">
            {Object.entries(slots).map(([slotKey, mod], i) => (
              <div key={slotKey} className="flex justify-between items-center bg-surface-container/50 border border-white/5 rounded-lg px-3 py-2">
                <div>
                  <span className="text-[9px] text-on-surface-variant font-bold block uppercase">Slot {i+1}</span>
                  <span className="font-semibold text-white truncate max-w-[120px] block">{mod ? mod.name : 'Empty Slot'}</span>
                </div>
                {mod && (
                  <button 
                    onClick={() => handleClearSlot(i+1)}
                    className="text-on-surface-variant hover:text-error transition-colors text-xs font-semibold cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Options Selector */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Active Slot Module Selector */}
          {activeSlot ? (
            <div className="bg-surface-container rounded-xl border border-white p-6 space-y-4 shadow-xl animate-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  Slot {activeSlot} Card Selection
                </h3>
                <button 
                  onClick={() => setActiveSlot(null)}
                  className="text-on-surface-variant hover:text-white transition-colors cursor-pointer text-xs"
                >
                  Cancel
                </button>
              </div>
              <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                {MODULES.map((mod) => (
                  <button
                    key={mod.id}
                    onClick={() => handleModuleInsert(mod)}
                    className="w-full text-left rounded-lg px-4 py-3 border border-white/10 bg-background/50 hover:border-white/30 hover:bg-white/5 transition-all cursor-pointer flex justify-between items-center"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-on-surface-variant">{mod.icon}</span>
                      <span className="text-xs font-semibold">{mod.name}</span>
                    </div>
                    <span className="text-xxs font-bold text-white">${mod.price}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-surface-container/60 rounded-xl border border-white/5 p-6 text-center space-y-2">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant">settings_input_hdmi</span>
              <h4 className="text-sm font-semibold text-white">Swap Card Configurations</h4>
              <p className="text-xs text-on-surface-variant max-w-xs mx-auto leading-relaxed">
                Click on any of the L1, L2, R1, or R2 slot buttons on the laptop deck model to assign or swap out ports.
              </p>
            </div>
          )}

          {/* Pricing & Add to Cart */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg text-center">
            <div className="space-y-2 text-sm text-on-surface-variant">
              <div className="flex justify-between">
                <span>Base Platform</span>
                <span className="text-white">${platform.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Expansion Cards</span>
                <span className="text-white">
                  ${Object.values(slots).reduce((total, mod) => total + (mod ? mod.price : 0), 0)}
                </span>
              </div>
              <div className="flex justify-between border-t border-white/5 pt-2 text-base font-bold text-white">
                <span>Total Price</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
            
            <div className="flex gap-4 pt-2">
              <Button
                variant="primary"
                className="flex-1 py-4 font-bold text-base shadow-xl"
                onClick={handleAddToBag}
              >
                Add Custom Laptop
              </Button>
              <Button
                variant="secondary"
                className="py-4 px-5 border border-white/10 hover:border-white/30 shadow-md"
                onClick={handleSaveToProfile}
              >
                <span className="material-symbols-outlined align-middle">bookmark</span>
              </Button>
            </div>
            
            <p className="text-xxs text-on-surface-variant/65 uppercase tracking-widest pt-2">
              Hot-Swappable Framework Technology. 100% Customer Repairable.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Laptops;
