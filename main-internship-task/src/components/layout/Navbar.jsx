import { useState, useEffect } from 'react';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

const Navbar = ({ onOpenGetStarted }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { cartCount } = useCart();
  const { user, setIsAuthOpen } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      setIsAuthOpen(true);
    }
  };

  const navItems = [
    { name: 'Workstations', path: '/workstations' },
    { name: 'Laptops', path: '/laptops' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Shop All', path: '/shop' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 left-0 right-0 ${
          scrolled 
            ? 'bg-background/85 backdrop-blur-xl py-3 border-b border-white/10 shadow-lg' 
            : 'bg-background py-5 border-b border-white/5'
        } px-8 max-w-container-max mx-auto flex justify-between items-center text-white`}
      >
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white hover:opacity-90 select-none">
            CORE TECH
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-on-surface-variant hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/shop')}
            className="material-symbols-outlined text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            search
          </button>
          
          <button 
            onClick={() => navigate('/cart')}
            className="relative material-symbols-outlined text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            shopping_cart
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-white text-background text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center animate-in zoom-in duration-200">
                {cartCount}
              </span>
            )}
          </button>



          {!user && (
            <Button 
              variant="primary" 
              onClick={onOpenGetStarted}
              className="hidden md:block"
            >
              Get Started
            </Button>
          )}

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden material-symbols-outlined text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center text-center p-8 space-y-8 animate-in fade-in duration-300">
          <nav className="flex flex-col gap-6 text-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-semibold ${isActive ? 'text-white' : 'text-on-surface-variant hover:text-white'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="w-full max-w-xs pt-8 border-t border-white/10 flex flex-col gap-4">
            {!user && (
              <Button 
                variant="primary" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetStarted();
                }}
                className="w-full py-3"
              >
                Get Started
              </Button>
            )}
            {user ? (
              <Button 
                variant="secondary" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/profile');
                }}
                className="w-full py-3"
              >
                My Profile
              </Button>
            ) : (
              <Button 
                variant="secondary" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
                className="w-full py-3"
              >
                Sign In / Sign Up
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
