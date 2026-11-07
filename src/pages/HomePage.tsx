import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Package, Sparkles, MapPin, Compass } from 'lucide-react';
import { SWEETS_DATA, REGIONS } from '../data/sweets';
import { SweetCard } from '../components/SweetCard';
import { DiyaRow } from '../components/DiyaRow';
import { PatternDivider } from '../components/PatternDivider';
import { usePageMeta } from '../hooks/usePageMeta';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  usePageMeta(
    'Mithai Ghar',
    'Explore 14 traditional Diwali sweet recipes with step-by-step instructions, live ingredient scaling, step timers, and an interactive gift box shopping list planner.'
  );

  // 6 featured sweets
  const featuredSlugs = ['kaju-katli', 'besan-ladoo', 'gulab-jamun', 'rasgulla', 'jalebi', 'mysore-pak'];
  const featuredSweets = SWEETS_DATA.filter((s) => featuredSlugs.includes(s.slug));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Standout Animated Hero Section (Deep Maroon Background) */}
      <section className="relative bg-[#5b1a1a] text-[#fff8ec] pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b-2 border-[#f2a900]/40">
        {/* Soft background glow and rangoli pattern */}
        <div className="absolute inset-0 bg-diya-glow opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-rangoli-subtle opacity-10 pointer-events-none" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          {/* Animated Row of Flickering Diyas */}
          <div className="mb-6">
            <DiyaRow count={5} />
          </div>

          {/* Title Revealed Once on Load */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f2a900]">
              <span className="w-6 h-px bg-[#f2a900]/70" />
              <span>A Diwali Sweets Recipe Collection</span>
              <span className="w-6 h-px bg-[#f2a900]/70" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#fff8ec] tracking-tight leading-[1.15] text-balance">
              Mithai Ghar
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#fff8ec]/90 font-light max-w-2xl mx-auto leading-relaxed text-balance pt-2">
              Fourteen time-honored Indian confections documented with traditional methods, live ingredient scaling, step timers, and an interactive gift box planner.
            </p>

            {/* Hero CTAs */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/sweets"
                className="px-6 py-3 text-sm font-semibold rounded bg-[#f2a900] hover:bg-[#e09b00] text-[#5b1a1a] transition-all shadow-md hover:shadow-lg flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Browse Sweets Catalog</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/gift-box"
                className="px-6 py-3 text-sm font-semibold rounded border border-[#f2a900]/60 hover:bg-[#f2a900]/15 text-[#fff8ec] transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
              >
                <Package size={16} className="text-[#f2a900]" />
                <span>Plan Diwali Gift Box</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Reading Section with Warm Cream Background (#fff8ec) */}
      <div className="bg-[#fff8ec] flex-1">
        {/* Browse By Region Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-[#5b1a1a]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8590c] mb-1">
                <Compass size={14} />
                <span>Culinary Geography</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#5b1a1a] tracking-tight">
                Browse by Region
              </h2>
            </div>
            <p className="text-xs text-[#231815]/75 max-w-md">
              From slow-roasted northern gram flours to delicate eastern chenna sponges and royal southern ghee delicacies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REGIONS.map((region) => {
              const count = SWEETS_DATA.filter((s) => s.region === region.id).length;
              return (
                <button
                  key={region.id}
                  onClick={() => navigate(`/sweets?region=${region.id}`)}
                  className="group text-left p-5 rounded-lg bg-[#fffdfa] border border-[#5b1a1a]/15 hover:border-[#e8590c] hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
                >
                  <div className="flex items-center justify-between text-xs text-[#e8590c] font-semibold mb-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {region.id} India
                    </span>
                    <span className="tabular-nums font-mono text-[#5b1a1a] bg-[#5b1a1a]/10 px-2 py-0.5 rounded">
                      {count} sweets
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#231815] group-hover:text-[#5b1a1a] transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-xs text-[#231815]/70 mt-1 line-clamp-2 leading-relaxed">
                    {region.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#5b1a1a]/10 flex items-center text-xs font-semibold text-[#5b1a1a] group-hover:text-[#e8590c] transition-colors">
                    <span>View recipes</span>
                    <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Featured Sweets Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#e8590c]">
              The Festive Crown Jewels
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#5b1a1a] tracking-tight mt-1">
              Featured Diwali Confections
            </h2>
            <p className="text-xs sm:text-sm text-[#231815]/75 mt-2">
              Six quintessential sweets that define celebratory tables, crafted through artisanal syrup stages, roasted flours, and pure desi ghee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredSweets.map((sweet) => (
              <SweetCard key={sweet.slug} recipe={sweet} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/sweets"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider rounded bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
            >
              <span>Explore All 14 Traditional Recipes</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <PatternDivider variant="rangoli" />

        {/* Plan Your Gift Box Banner CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative rounded-xl bg-gradient-to-br from-[#5b1a1a] via-[#481212] to-[#3a1010] text-[#fff8ec] p-8 sm:p-12 overflow-hidden border border-[#f2a900]/30 shadow-lg">
            {/* Background filigree SVG */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
              <svg width="280" height="280" viewBox="0 0 100 100" fill="none" stroke="#f2a900" strokeWidth="1">
                <circle cx="50" cy="50" r="45" />
                <circle cx="50" cy="50" r="35" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="25" />
                <path d="M50 5 L50 95 M5 50 L95 50 M18 18 L82 82 M18 82 L82 18" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#f2a900]">
                <Sparkles size={14} />
                <span>Interactive Tool</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#fff8ec]">
                Curate Your Custom Diwali Mithai Dabba
              </h2>
              <p className="text-xs sm:text-sm text-[#fff8ec]/85 leading-relaxed">
                Choose your favorite traditional sweets, dial in the desired pieces for family and friends, and get an automated, consolidated grocery shopping list that adds up ghee, sugar, flours, and nuts without duplication.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/gift-box"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider rounded bg-[#f2a900] hover:bg-[#e09b00] text-[#5b1a1a] transition-all shadow-md flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Package size={15} />
                  <span>Open Gift Box Planner</span>
                </Link>
                <Link
                  to="/about"
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#fff8ec] hover:text-[#f2a900] transition-colors"
                >
                  Read Recipe Standards →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Section / About Project Introduction */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#5b1a1a]">
            The Science & Tradition of Indian Confectionery
          </h2>
          <p className="text-xs sm:text-sm text-[#231815]/80 mt-4 leading-relaxed max-w-2xl mx-auto">
            Unlike Western baking governed by wheat gluten networks, Indian sweets (mithai) revolve around three foundational pillars: the gelatinization and bhunao of roasted grain flours in pure ghee, the temperature-dependent stages of single and multi-thread sugar syrups (chashni), and the delicate thermal curdling of fresh cow milk into chenna.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8 text-xs text-[#5b1a1a] font-medium">
            <span>14 Traditional Recipes</span>
            <span aria-hidden="true">·</span>
            <span>Zero Preservatives</span>
            <span aria-hidden="true">·</span>
            <span>Real Ghee Ratios</span>
            <span aria-hidden="true">·</span>
            <span>College Submission</span>
          </div>
        </section>
      </div>
    </div>
  );
};
