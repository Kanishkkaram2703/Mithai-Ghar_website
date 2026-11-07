import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5b1a1a] text-[#fff8ec] border-t-2 border-[#f2a900]/30 mt-auto select-none">
      {/* Decorative Rangoli Border Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#e8590c] via-[#f2a900] to-[#e8590c]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Publication Identity */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[#f2a900] font-serif text-xl" aria-hidden="true">✦</span>
              <span className="text-2xl font-serif font-bold tracking-tight text-[#fff8ec]">
                Mithai Ghar
              </span>
            </div>
            <p className="text-xs text-[#fff8ec]/75 leading-relaxed">
              A curated digital archive documenting the culinary science, time-honored techniques, and cultural heritage of authentic Indian sweets for Diwali.
            </p>
            <p className="text-[11px] text-[#f2a900]/80 font-mono">
              Confectionery Heritage
            </p>
          </div>

          {/* Regional Archives */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#f2a900]">
              Regional Sweets
            </h4>
            <ul className="space-y-2 text-xs text-[#fff8ec]/80">
              <li>
                <Link to="/sweets?region=North" className="hover:text-[#f2a900] transition-colors">
                  North India (Besan, Mawa & Saffron)
                </Link>
              </li>
              <li>
                <Link to="/sweets?region=East" className="hover:text-[#f2a900] transition-colors">
                  East India (Bengal Chenna & Sandesh)
                </Link>
              </li>
              <li>
                <Link to="/sweets?region=West" className="hover:text-[#f2a900] transition-colors">
                  West India (Faral, Barfi & Shankarpali)
                </Link>
              </li>
              <li>
                <Link to="/sweets?region=South" className="hover:text-[#f2a900] transition-colors">
                  South India (Mysore Pak & Rava Ladoo)
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#f2a900]">
              Interactive Tools
            </h4>
            <ul className="space-y-2 text-xs text-[#fff8ec]/80">
              <li>
                <Link to="/gift-box" className="hover:text-[#f2a900] transition-colors">
                  Diwali Gift Box Planner
                </Link>
              </li>
              <li>
                <Link to="/gift-box" className="hover:text-[#f2a900] transition-colors">
                  Aggregated Grocery Shopping List
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-[#f2a900] transition-colors">
                  Saved Favorite Recipes
                </Link>
              </li>
              <li>
                <Link to="/about#sugar-safety" className="hover:text-[#f2a900] transition-colors">
                  Hot Sugar Syrup & Ghee Safety Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Culinary Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#f2a900]">
              Culinary Standards
            </h4>
            <p className="text-xs text-[#fff8ec]/75 leading-relaxed">
              Every recipe uses traditional confection methods, exact metric units, verified serving scalers, and time-tested techniques. No artificial shortcuts or health claims.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center text-xs font-semibold text-[#f2a900] hover:underline"
              >
                Read Project Submission Details →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#f2a900]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fff8ec]/60">
          <p>© {new Date().getFullYear()} Mithai Ghar A Diwali Sweets Recipe Collection.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#fff8ec] transition-colors">About & Tech Stack</Link>
            <span aria-hidden="true">·</span>
            <Link to="/sweets" className="hover:text-[#fff8ec] transition-colors">All 14 Recipes</Link>
            <span aria-hidden="true">·</span>
            <Link to="/gift-box" className="hover:text-[#fff8ec] transition-colors">Box Planner</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
