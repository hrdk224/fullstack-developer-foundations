import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import BentoCard from '../components/ui/BentoCard';

const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'workstations', name: 'Workstations' },
  { id: 'laptops', name: 'Laptops' },
  { id: 'keyboards', name: 'Keyboards' },
  { id: 'displays', name: 'Displays' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'apparel', name: 'Apparel' }
];

const ShopAll = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // Handle URL category parameters
  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam && CATEGORIES.some(c => c.id === catParam)) {
      setSelectedCategory(catParam);
    } else {
      setSelectedCategory('all');
    }
  }, [searchParams]);

  // Handle Filtering and Sorting
  useEffect(() => {
    let result = [...PRODUCTS];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort Products
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (catId) => {
    setSearchParams(catId === 'all' ? {} : { category: catId });
    setSelectedCategory(catId);
  };



  return (
    <div className="pt-32 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">


      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">SHOP ALL GEAR</h1>
        <p className="text-on-surface-variant font-body-md max-w-2xl">
          Browse the full CORE TECH catalog of modular devices, customizable workstations, repairable laptops, and ergonomic desktop gear.
        </p>
      </div>

      {/* Controls: Search, Filter Tabs, Sort */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
              search
            </span>
            <input 
              type="text" 
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-low border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Sort Menu */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-surface-container-low border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id 
                  ? 'bg-white text-background font-bold' 
                  : 'bg-white/5 text-on-surface-variant hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 opacity-60">
          <span className="material-symbols-outlined text-5xl mb-4">search_off</span>
          <p className="text-sm">No products found matching your search and filter criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
          {filteredProducts.map((product) => (
            <BentoCard key={product.id} className="bg-surface-container flex flex-col justify-between h-full border border-white/5 group relative">
              <div>
                <div className="w-full aspect-square overflow-hidden border-b border-white/5 bg-surface-container-low relative">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/5 rounded-full px-3 py-0.5 text-[9px] uppercase tracking-widest text-on-surface-variant font-bold">
                    {product.category}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-sm font-bold text-white tracking-tight line-clamp-1">{product.name}</h3>
                  <p className="text-sm font-semibold text-white">${product.price}</p>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-2">
                <Link
                  to={`/product/${product.id}`}
                  className="block w-full py-2 font-semibold text-xxs tracking-wider uppercase border border-white/10 hover:border-white text-white hover:bg-white hover:text-background text-center rounded-full transition-colors"
                >
                  View Details
                </Link>
              </div>
            </BentoCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopAll;
