import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SLIDES = [
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgi_Ms8rESRnTfnyg-D2IxXn_HT2JPVPSv6_y0KtHkuTevX5IdcuCv_jE8_Ap0-wauSYgTCnCdbhInNiA-3urVpuOZUPnBom9nF9tOveBIOLMZjI0Y9ewwU4QuYtFiLdRifXzPi4hdndQK3XjRee_h2tC7osNeoAx7uwO8vjUjsOG4qYk3HBgz8_NUQcm09_To3mMeE8RivFUIhy_9ygkBuJPG3Qu0TlDcz0NCPqPat845-5t4BQWxs6kvybqiyKNE8IC6NONZvL8',
    title: 'The ultimate modular workstation.',
  },
  {
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlATcFhlZGDwNavo4PCbhGsR8E2_AEKn083-sWFWhCWZ8AgK-LcsNARdSwhsGhbsT1EiVdm7vhD5lE27gA-TBla8cvX3paF6dBI9vKpP3sa9iKj59XCRud7MrGCSrnAtC6iAySbSKdjVB0geMdnFtzmPsdaZFxIk2rbzq0cicSBIS3QiE0io5awbqk1QbeXwRzDX9KqsQqm6Kk3FlEurDWGb1eBYe7G_dAgt697gPMCFLfsEYDt2T7z2Fs5OlpQoSGpVzRu9-cjEE',
    title: 'Precision modules. Built for creators.',
  },
];

function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center w-full h-full transition-opacity duration-1000 ${
              idx === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            } transition-transform duration-[6000ms] ease-out`}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
        ))}
        {/* Overlay Darkner */}
        <div className="absolute inset-0 bg-black/50 z-1" />
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto space-y-8 select-none">
        <h1 className="font-display-lg text-6xl text-display-lg-mobile md:text-display-lg text-white font-light tracking-tight leading-tight  animate-in fade-in slide-in-from-bottom-6 duration-700">
          {SLIDES[currentSlide].title}
        </h1>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-900">
          <button
            onClick={() => navigate('/shop')}
            className="bg-white text-background px-10 py-4 rounded-full font-body-md font-bold text-lg hover:scale-105 transition-transform cursor-pointer"
          >
            View Collection
          </button>
        </div>
      </div>

      {/* Play/Pause Control Tray */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button
          onClick={() => setIsPlaying(true)}
          className={`w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 glass-panel transition-all cursor-pointer ${
            isPlaying
              ? 'bg-white/20 text-white border-white/40'
              : 'text-white/60'
          }`}
        >
          <span className="material-symbols-outlined">play_arrow</span>
        </button>
        <button
          onClick={() => setIsPlaying(false)}
          className={`w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 glass-panel transition-all cursor-pointer ${
            !isPlaying
              ? 'bg-white/20 text-white border-white/40'
              : 'text-white/60'
          }`}
        >
          <span className="material-symbols-outlined">pause</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
