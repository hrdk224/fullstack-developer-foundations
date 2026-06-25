import React from 'react';
import { useNavigate } from 'react-router-dom';

const innovations = [
  {
    category: 'Engineering',
    title: 'Next-Gen Modular Laptops',
    buttonText: 'Shop Laptops',
    path: '/laptops',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqFEU0SVhQMKcFDI4vZobYy5SotgK6UcTiQ2kiU03p-zt_ptk-JrfCOr5A-ugGesihPOqqd4RYDqTk7KSsBY7NarCUFBP1gTYbiUr7A2EVhVqWkatfEKG6J_or0n38aalToQS0Oe0KMZGmtb0kiaUMhVguNHenoIyaUiqv0CvO3vb5ONNRQPQl_mkfn5xivmAYcvDK4d7KU8ro3F5jIB4qstYP9W9SDhuvCp0c0XCk5fXhSE9sEOR4r0i0sOWGSbr1UZAqO9ryLtg',
  },
  {
    category: 'Productivity',
    title: 'Built for Creators',
    buttonText: 'Shop Workstations',
    path: '/workstations',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlATcFhlZGDwNavo4PCbhGsR8E2_AEKn083-sWFWhCWZ8AgK-LcsNARdSwhsGhbsT1EiVdm7vhD5lE27gA-TBla8cvX3paF6dBI9vKpP3sa9iKj59XCRud7MrGCSrnAtC6iAySbSKdjVB0geMdnFtzmPsdaZFxIk2rbzq0cicSBIS3QiE0io5awbqk1QbeXwRzDX9KqsQqm6Kk3FlEurDWGb1eBYe7G_dAgt697gPMCFLfsEYDt2T7z2Fs5OlpQoSGpVzRu9-cjEE',
  },
];

function FeaturedInnovation() {
  const navigate = useNavigate();

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h2 className="font-headline-md text-4xl text-on-surface mb-12">
        Featured Innovations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {innovations.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="relative h-[600px] rounded-lg overflow-hidden group bento-card border border-outline-variant/30 cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${item.imageUrl}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-12 w-full space-y-4">
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                {item.category}
              </p>
              <h3 className="font-headline-md text-headline-md text-white">
                {item.title}
              </h3>
              <button
                onClick={e => {
                  e.stopPropagation();
                  navigate(item.path);
                }}
                className="bg-white text-black px-8 py-3 rounded-full font-body-md font-medium hover:bg-primary-container transition-colors cursor-pointer"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedInnovation;
