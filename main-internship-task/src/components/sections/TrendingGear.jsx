import React from 'react';
import { useNavigate } from 'react-router-dom';
import BentoCard from '../ui/BentoCard';
const trendingProducts = [
  {
    title: 'Tactile Precision',
    category: 'Mechanical Keyboards',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbZtlfDiPv_msirm0RmxYraU0X7e6exrbe1pHq_Hjh3myluJ8AFgtgylh5V0XLzJX7RXhyDbh8E6g73bSS8cCujSEK_BCmHpdM1KsZpACpYPSOtVMox49k_-Oh90nUD7XvAYiDDMJwIS_buaJomW1QEiNEuD4ceE1z1Setbm03WTFSY7kpewQiYjHe_NZHlwU8ZavsE5kYLg0ph18uH3eANKbcrhQ7uhicdU_jKMX3Ii_AY4F6g1sYXZzgKgQEmEwe81NGvFgfcAg',
    filter: 'keyboards',
  },
  {
    title: '6K Color Accuracy',
    category: 'Pro Displays',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXTHL6oVYP1bisXSp7N1t_sKVEUXYE40ZxuNv0ROjDxn15idAJrAzxLuLL5a5zgifgYGQ3d269d53Ino97QfiBR0pllQ9COVawgc34lXCdmG6okCxrvNxXZY_PU0QPkZKaEjWf5fo6lfykS5icrinWofNtVlEe_P-l2hQ5tR_4ajJx_mXtvdxmS-jdsenj0xmtbq9oRrJpeperiW9w_bhVRB_8VtorkeckattMfZTr15Lb2u8a-xwWbqPeabQ6eOkS0u7SRuVZ9r4',
    filter: 'displays',
  },
  {
    title: 'Ultra-Compact Power',
    category: 'GaN Chargers',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuApAYiqu9y31XeiILx7AGsafZwfre0j16L2rg9tors3EDmu7acx5l2seN6Y7h0W3eEnVr_qUC4DR-FqJELYASu3IiLEYRNZAVTs6rTyoX1JKWxw60BPGcHDLMOO9JJXh04TzKu3dMM9LmPH7CQjlZH1Vve6XpiqBSUsiezrNU-PxollgwrKprWg1XCrGD3-w-Xwb4vvqeys7wDvtsBZWZbPBjGrk2_MU8OS0jifvNJzvY1tI-4UQrAs2LYNnsThTHs3bmbmiJs0gg8',
    filter: 'accessories',
  },
];

function TrendingGear() {
  const navigate = useNavigate();

  const handleShopRedirect = filter => {
    navigate(`/shop?category=${filter}`);
  };

  return (
    <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/20">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h2 className="font-headline-md text-4xl text-headline-md text-on-surface mb-12">
          Trending Gear
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {trendingProducts.map((item, idx) => (
            <BentoCard
              key={idx}
              className="bg-surface-container-high border border-outline-variant/20 cursor-pointer"
              onClick={() => handleShopRedirect(item.filter)}
            >
              <div
                className="aspect-square bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                }}
              />
              <div className="p-8">
                <h4 className="font-headline-sm text-headline-sm text-white mb-1">
                  {item.title}
                </h4>
                <p className="font-body-md text-on-surface-variant mb-6">
                  {item.category}
                </p>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    handleShopRedirect(item.filter);
                  }}
                  className="bg-surface border border-outline-variant text-white px-8 py-2 rounded-full font-body-md hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  Shop
                </button>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingGear;
