import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedInnovation from '../components/sections/FeaturedInnovation';
import TrendingGear from '../components/sections/TrendingGear';
import Spotlight from '../components/sections/Spotlight';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <FeaturedInnovation />
      <TrendingGear />
      
      {/* App Banner Promo */}
      <section className="bg-surface-container-lowest border-y border-outline-variant/30 py-16">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-headline-sm text-primary font-extrabold tracking-tighter shrink-0 text-3xl select-none">
            CORE TECH
          </div>
          <div className="text-center md:text-left flex-1 max-w-xl md:ml-12">
            <h2 className="font-headline-md text-headline-md text-white font-bold tracking-tight mb-2 leading-snug">
              CONTROL YOUR ECOSYSTEM WITH THE COMPANION APP
            </h2>
            <p className="text-on-surface-variant font-body-md opacity-85">
              Hardware monitoring, RGB sync, and remote power management.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shrink-0 shadow-lg">
            <div
              className="w-24 h-24 bg-cover bg-center select-none"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuASsOElbWbpNCSXULpjjINoV56N3MvmqibM79RfRkhyZ4yPeVKV3Xew0my8sj8dbaOWsUL5t6xJnKxb9wdWTxbfakx0OLLiTVo1kZgGdzkCHCa4w536jRS9Mjt70RHQJ1rWL9hG8lAe5lGw09NYk2icOTQuXmwL1mASvgN4H6uQNGKDZvknzvrnrO9020fl1oD4UUnQmrYod7h6sizXkNnErLVL6VapSc3y23ei60pAQQZa5y_74Xzqmjts5yLYjPVEHRtYBZTCVGM')`,
              }}
            />
          </div>
        </div>
      </section>

      <Spotlight />
    </div>
  );
};

export default Home;
