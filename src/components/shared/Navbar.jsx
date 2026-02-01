import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { useCart } from '../context/CartContext';
import { Menu, X, ShoppingCart, Utensils } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Menu', path: 'menu' },
    { name: 'Deals', path: 'deals' },
    { name: 'Branches', path: 'branches' },
    { name: 'Reservation', path: 'reservation' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-colors ${
              isScrolled ? 'bg-red-700' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <Utensils className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Savory Haven
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={createPageUrl(link.path)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-red-700 hover:bg-red-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              to={createPageUrl('Cart')}
              className={`relative p-3 rounded-xl transition-all duration-200 ${
                isScrolled 
                  ? 'bg-red-700 text-white hover:bg-red-800' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-200 ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={createPageUrl(link.path)}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-red-50 hover:text-red-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}