import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const WORKSTATION_OPTIONS = {
  cpu: [
    { id: 'ryzen9', name: 'AMD Ryzen 9 7900X (12 Cores)', price: 0 },
    { id: 'core9', name: 'Intel Core Ultra 9 285K (24 Cores)', price: 250 },
    { id: 'threadripper', name: 'AMD Ryzen Threadripper 7960X (24 Cores)', price: 950 }
  ],
  gpu: [
    { id: 'rtx4070', name: 'NVIDIA RTX 4070 Ti Super 16GB', price: 0 },
    { id: 'rtx4080', name: 'NVIDIA RTX 4080 Super 16GB', price: 400 },
    { id: 'rtx4090', name: 'NVIDIA RTX 4090 24GB', price: 1100 },
    { id: 'dual4090', name: 'Dual NVIDIA RTX 4090 48GB (NVLink)', price: 2400 }
  ],
  ram: [
    { id: '32gb', name: '32GB DDR5 6000MHz Dual-Channel', price: 0 },
    { id: '64gb', name: '64GB DDR5 6000MHz Quad-Channel', price: 180 },
    { id: '128gb', name: '128GB DDR5 6000MHz Quad-Channel', price: 480 }
  ],
  storage: [
    { id: '1tb', name: '1TB Gen5 NVMe M.2 SSD', price: 0 },
    { id: '2tb', name: '2TB Gen5 NVMe M.2 SSD', price: 120 },
    { id: '4tb', name: '4TB Dual Gen5 NVMe RAID-0 SSD', price: 320 }
  ],
  cooling: [
    { id: 'air', name: 'Stealth Dual-Tower Air Cooler', price: 0 },
    { id: 'aio', name: '360mm Liquid Ice AIO Cooler', price: 150 },
    { id: 'custom', name: 'Custom Hardline Acrylic Waterloop', price: 650 }
  ]
};

const Workstations = () => {
  const { addToCart } = useCart();
  const { user, saveConfig } = useAuth();
  const navigate = useNavigate();
  
  // Selection states
  const [selections, setSelections] = useState({
    cpu: WORKSTATION_OPTIONS.cpu[0],
    gpu: WORKSTATION_OPTIONS.gpu[0],
    ram: WORKSTATION_OPTIONS.ram[0],
    storage: WORKSTATION_OPTIONS.storage[0],
    cooling: WORKSTATION_OPTIONS.cooling[0]
  });

  const [notification, setNotification] = useState('');

  const handleSelect = (category, option) => {
    setSelections({ ...selections, [category]: option });
  };

  const calculateTotal = () => {
    const basePrice = 1499;
    return (
      basePrice +
      selections.cpu.price +
      selections.gpu.price +
      selections.ram.price +
      selections.storage.price +
      selections.cooling.price
    );
  };

  const handleAddToBag = () => {
    const total = calculateTotal();
    const specs = {
      cpu: selections.cpu.name,
      gpu: selections.gpu.name,
      ram: selections.ram.name,
      storage: selections.storage.name,
      cooling: selections.cooling.name
    };

    addToCart({
      id: `custom-workstation-${Date.now()}`,
      name: 'Custom CORE WORKSTATION Apex',
      price: total,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxEIJZ5GNdGJ6YmzpJDzLZustUflNkLDvk2BJM-lSISCEEF3kZhGqDYjKXzeDA_no_4hrmLz9zbRIT6RVt0I5eJql9ktafZtq93eGSjieioJKCMm-ztr_noIw_-rKwTMJ9zDxt9EDk296Hie7JB9ArQyVskgKvG8aGeGPH2tNL4t8Xfrm8Dv-a7hOtwpDBm3mN3DzbLfHubGClu9QRDkGJokTlWID6edYXuz0YpTgz3fBBOiWzDgGiw7g_A_s4rUN-rN0xV27Z2Ac',
      type: 'workstation',
      specs,
      quantity: 1
    });

    setNotification('Custom Workstation added to shopping bag!');
    setTimeout(() => {
      setNotification('');
      navigate('/cart');
    }, 1500);
  };

  const handleSaveToProfile = () => {
    const total = calculateTotal();
    const specs = {
      cpu: selections.cpu.name,
      gpu: selections.gpu.name,
      ram: selections.ram.name,
      storage: selections.storage.name,
      cooling: selections.cooling.name
    };

    const res = saveConfig({
      name: 'Custom CORE WORKSTATION Apex',
      type: 'workstation',
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

      {/* Hero Header */}
      <div className="max-w-3xl mb-12 space-y-4">
        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
          Engineering Excellence
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          CORE WORKSTATION APEX
        </h1>
        <p className="text-on-surface-variant font-body-md leading-relaxed">
          Configure a high-density compute server designed for compilers, machine learning tasks, 3D artists, and engineering teams. Features a clean architectural steel frame and modular dual-chamber layout.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        
        {/* Left Side: Visual Preview */}
        <div className="lg:col-span-7 space-y-8 lg:sticky lg:top-32">
          <div className="w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-surface-container-low relative shadow-xl group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxEIJZ5GNdGJ6YmzpJDzLZustUflNkLDvk2BJM-lSISCEEF3kZhGqDYjKXzeDA_no_4hrmLz9zbRIT6RVt0I5eJql9ktafZtq93eGSjieioJKCMm-ztr_noIw_-rKwTMJ9zDxt9EDk296Hie7JB9ArQyVskgKvG8aGeGPH2tNL4t8Xfrm8Dv-a7hOtwpDBm3mN3DzbLfHubGClu9QRDkGJokTlWID6edYXuz0YpTgz3fBBOiWzDgGiw7g_A_s4rUN-rN0xV27Z2Ac" 
              alt="CORE WORKSTATION APEX" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            
            {/* Live Pricing tag */}
            <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-5 py-2">
              <span className="text-xs text-on-surface-variant mr-1">Estimated Total</span>
              <span className="text-lg font-bold">${calculateTotal()}</span>
            </div>
          </div>

          {/* Configuration Summary Card */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg glass-panel">
            <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant border-b border-white/5 pb-2">
              Active Configuration Specs
            </h3>
            <ul className="text-xs space-y-2.5">
              <li className="flex justify-between"><span className="text-on-surface-variant">CPU Processor:</span><span className="font-semibold text-right max-w-xs truncate">{selections.cpu.name}</span></li>
              <li className="flex justify-between"><span className="text-on-surface-variant">GPU Graphics:</span><span className="font-semibold text-right max-w-xs truncate">{selections.gpu.name}</span></li>
              <li className="flex justify-between"><span className="text-on-surface-variant">System Memory:</span><span className="font-semibold text-right max-w-xs truncate">{selections.ram.name}</span></li>
              <li className="flex justify-between"><span className="text-on-surface-variant">Primary Storage:</span><span className="font-semibold text-right max-w-xs truncate">{selections.storage.name}</span></li>
              <li className="flex justify-between"><span className="text-on-surface-variant">Thermal Solution:</span><span className="font-semibold text-right max-w-xs truncate">{selections.cooling.name}</span></li>
            </ul>
          </div>
        </div>

        {/* Right Side: Configurator Controls */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* CPU Selection */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              1. Choose CPU Processor
            </h3>
            <div className="space-y-3">
              {WORKSTATION_OPTIONS.cpu.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('cpu', opt)}
                  className={`w-full text-left rounded-lg p-4 border transition-all cursor-pointer flex justify-between items-center ${
                    selections.cpu.id === opt.id 
                      ? 'border-white bg-white/5 shadow-md' 
                      : 'border-white/10 bg-background/50 hover:border-white/30'
                  }`}
                >
                  <span className="text-sm font-semibold">{opt.name}</span>
                  <span className="text-xs text-on-surface-variant">
                    {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* GPU Selection */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              2. Choose GPU Graphics Card
            </h3>
            <div className="space-y-3">
              {WORKSTATION_OPTIONS.gpu.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('gpu', opt)}
                  className={`w-full text-left rounded-lg p-4 border transition-all cursor-pointer flex justify-between items-center ${
                    selections.gpu.id === opt.id 
                      ? 'border-white bg-white/5 shadow-md' 
                      : 'border-white/10 bg-background/50 hover:border-white/30'
                  }`}
                >
                  <span className="text-sm font-semibold">{opt.name}</span>
                  <span className="text-xs text-on-surface-variant">
                    {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Memory Selection */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              3. Choose Memory (RAM)
            </h3>
            <div className="space-y-3">
              {WORKSTATION_OPTIONS.ram.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('ram', opt)}
                  className={`w-full text-left rounded-lg p-4 border transition-all cursor-pointer flex justify-between items-center ${
                    selections.ram.id === opt.id 
                      ? 'border-white bg-white/5 shadow-md' 
                      : 'border-white/10 bg-background/50 hover:border-white/30'
                  }`}
                >
                  <span className="text-sm font-semibold">{opt.name}</span>
                  <span className="text-xs text-on-surface-variant">
                    {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Storage Selection */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              4. Choose SSD Storage
            </h3>
            <div className="space-y-3">
              {WORKSTATION_OPTIONS.storage.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('storage', opt)}
                  className={`w-full text-left rounded-lg p-4 border transition-all cursor-pointer flex justify-between items-center ${
                    selections.storage.id === opt.id 
                      ? 'border-white bg-white/5 shadow-md' 
                      : 'border-white/10 bg-background/50 hover:border-white/30'
                  }`}
                >
                  <span className="text-sm font-semibold">{opt.name}</span>
                  <span className="text-xs text-on-surface-variant">
                    {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Cooling Selection */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              5. Choose Cooling System
            </h3>
            <div className="space-y-3">
              {WORKSTATION_OPTIONS.cooling.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('cooling', opt)}
                  className={`w-full text-left rounded-lg p-4 border transition-all cursor-pointer flex justify-between items-center ${
                    selections.cooling.id === opt.id 
                      ? 'border-white bg-white/5 shadow-md' 
                      : 'border-white/10 bg-background/50 hover:border-white/30'
                  }`}
                >
                  <span className="text-sm font-semibold">{opt.name}</span>
                  <span className="text-xs text-on-surface-variant">
                    {opt.price === 0 ? 'Included' : `+$${opt.price}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Center */}
          <div className="bg-surface-container rounded-xl border border-white/10 p-6 space-y-4 shadow-lg text-center">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Total Price</span>
              <span className="text-3xl font-black text-white">${calculateTotal()}</span>
            </div>
            
            <div className="flex gap-4">
              <Button
                variant="primary"
                className="flex-1 py-4 font-bold text-base shadow-xl"
                onClick={handleAddToBag}
              >
                Add Custom Workstation
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
              Includes 3-Year Hardware Warranty & Dedicated Engineering Support
            </p>
          </div>

        </div>

      </div>

      {/* Details Specs Table */}
      <div className="mt-24 border-t border-white/10 pt-16 max-w-4xl">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-tight">Full Specifications Sheet</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <tbody>
              <tr className="border-b border-white/5 py-4 flex flex-col md:flex-row md:items-center"><td className="w-48 font-bold text-on-surface-variant py-2 uppercase tracking-wider">Form Factor</td><td className="flex-1 text-white py-2">Dual-Chamber Mid-Tower Chassis (Full Modular Support)</td></tr>
              <tr className="border-b border-white/5 py-4 flex flex-col md:flex-row md:items-center"><td className="w-48 font-bold text-on-surface-variant py-2 uppercase tracking-wider">Dimensions</td><td className="flex-1 text-white py-2">520mm x 245mm x 485mm (H x W x D)</td></tr>
              <tr className="border-b border-white/5 py-4 flex flex-col md:flex-row md:items-center"><td className="w-48 font-bold text-on-surface-variant py-2 uppercase tracking-wider">Power Supply</td><td className="flex-1 text-white py-2">CORE 1200W PCIe 5.0 ATX 3.0 Modular Power Unit (GaN Silicon)</td></tr>
              <tr className="border-b border-white/5 py-4 flex flex-col md:flex-row md:items-center"><td className="w-48 font-bold text-on-surface-variant py-2 uppercase tracking-wider">Motherboard Chipset</td><td className="flex-1 text-white py-2">X870E Creator Edition (AMD) or Z890 workstation (Intel)</td></tr>
              <tr className="border-b border-white/5 py-4 flex flex-col md:flex-row md:items-center"><td className="w-48 font-bold text-on-surface-variant py-2 uppercase tracking-wider">Rear Ports</td><td className="flex-1 text-white py-2">2x USB4 (40Gbps), 4x USB 3.2 Gen2, 1x 10G Ethernet, 1x 2.5G Ethernet, Wi-Fi 7, Audio Jacks</td></tr>
              <tr className="border-b border-white/5 py-4 flex flex-col md:flex-row md:items-center"><td className="w-48 font-bold text-on-surface-variant py-2 uppercase tracking-wider">Warranty</td><td className="flex-1 text-white py-2">3-Year Parts & Labor Warranty with next-business-day on-site service</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workstations;
export { WORKSTATION_OPTIONS };
