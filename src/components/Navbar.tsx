import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Package, Menu, X, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { totalGiftBoxItems, favorites } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/sweets', label: 'Sweets Catalog' },
    { to: '/gift-box', label: 'Gift Box Planner' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/about', label: 'About' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#5b1a1a] text-[#fff8ec] border-b border-[#f2a900]/25 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="text-2xl font-serif font-bold tracking-tight text-[#fff8ec] hover:text-[#f2a900] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
          >
            <span className="text-[#f2a900] text-xl font-serif" aria-hidden="true">✦</span>
            <span>Mithai Ghar</span>
          </Link>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                    active
                      ? 'text-[#f2a900] font-semibold'
                      : 'text-[#fff8ec]/85 hover:text-[#fff8ec]'
                  }`}
                >
                  {link.label}
                  {link.to === '/favorites' && favorites.length > 0 && (
                    <span className="ml-1.5 text-xs bg-[#e8590c] text-white px-1.5 py-0.2 rounded-full tabular-nums">
                      {favorites.length}
                    </span>
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f2a900] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              to="/gift-box"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded bg-[#f2a900] hover:bg-[#e09b00] text-[#5b1a1a] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap shrink-0"
              aria-label={`Gift box planner with ${totalGiftBoxItems} items`}
            >
              <Package size={15} />
              <span>Gift Box</span>
              <span className="ml-1 px-1.5 py-0.5 text-[11px] font-bold bg-[#5b1a1a] text-[#f2a900] rounded tabular-nums">
                {totalGiftBoxItems}
              </span>
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/gift-box"
              className="p-2 rounded text-[#f2a900] hover:bg-[#3a1010] relative"
              aria-label="View Gift Box"
            >
              <Package size={20} />
              {totalGiftBoxItems > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-[#e8590c] text-white text-[10px] font-bold flex items-center justify-center tabular-nums">
                  {totalGiftBoxItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-[#fff8ec] hover:bg-[#3a1010] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#3a1010] border-t border-[#f2a900]/20 px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#5b1a1a] text-[#f2a900] font-semibold'
                    : 'text-[#fff8ec]/90 hover:bg-[#5b1a1a]/60 text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.label}</span>
                  {link.to === '/favorites' && favorites.length > 0 && (
                    <span className="text-xs bg-[#e8590c] text-white px-2 py-0.5 rounded-full tabular-nums">
                      {favorites.length}
                    </span>
                  )}
                  {link.to === '/gift-box' && totalGiftBoxItems > 0 && (
                    <span className="text-xs bg-[#f2a900] text-[#5b1a1a] font-bold px-2 py-0.5 rounded tabular-nums">
                      {totalGiftBoxItems} pcs
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
