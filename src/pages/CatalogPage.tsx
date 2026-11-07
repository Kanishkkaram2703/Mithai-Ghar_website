import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, SlidersHorizontal, RotateCcw, Clock, Compass } from 'lucide-react';
import { SWEETS_DATA, CATEGORIES, REGIONS } from '../data/sweets';
import { SweetCard } from '../components/SweetCard';
import { SweetRecipe, Region, SweetCategory, Difficulty } from '../types';
import { usePageMeta } from '../hooks/usePageMeta';

export const CatalogPage: React.FC = () => {
  usePageMeta(
    'Sweets Catalog — All 14 Traditional Recipes',
    'Search and filter all 14 authentic Diwali sweets by region, confection type, difficulty, and cooking time.'
  );

  const [searchParams, setSearchParams] = useSearchParams();

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<SweetCategory | 'All'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'All'>('All');
  const [maxCookingTime, setMaxCookingTime] = useState<number>(45);
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'time-asc' | 'difficulty-asc'>('name-asc');

  // Check URL query params on mount
  useEffect(() => {
    const regionParam = searchParams.get('region');
    if (regionParam && ['North', 'South', 'East', 'West'].includes(regionParam)) {
      setSelectedRegion(regionParam as Region);
    }
  }, [searchParams]);

  const handleRegionChange = (reg: Region | 'All') => {
    setSelectedRegion(reg);
    if (reg === 'All') {
      searchParams.delete('region');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ region: reg });
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setMaxCookingTime(45);
    setSortBy('name-asc');
    setSearchParams({});
  };

  // Filter & Sort Pipeline
  const filteredSweets = useMemo(() => {
    return SWEETS_DATA.filter((sweet) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = sweet.name.toLowerCase().includes(q);
        const matchesSubname = sweet.subname?.toLowerCase().includes(q) || false;
        const matchesDesc = sweet.description.toLowerCase().includes(q);
        const matchesIng = sweet.ingredients.some((i) => i.name.toLowerCase().includes(q));
        if (!matchesName && !matchesSubname && !matchesDesc && !matchesIng) {
          return false;
        }
      }

      // Region
      if (selectedRegion !== 'All' && sweet.region !== selectedRegion) {
        return false;
      }

      // Category
      if (selectedCategory !== 'All' && sweet.category !== selectedCategory) {
        return false;
      }

      // Difficulty
      if (selectedDifficulty !== 'All' && sweet.difficulty !== selectedDifficulty) {
        return false;
      }

      // Cooking Time
      if (sweet.cookMinutes > maxCookingTime) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'time-asc') {
        const timeA = a.prepMinutes + a.cookMinutes;
        const timeB = b.prepMinutes + b.cookMinutes;
        return timeA - timeB;
      }
      if (sortBy === 'difficulty-asc') {
        const order: Record<Difficulty, number> = { Easy: 1, Medium: 2, Hard: 3 };
        return order[a.difficulty] - order[b.difficulty];
      }
      return 0;
    });
  }, [searchQuery, selectedRegion, selectedCategory, selectedDifficulty, maxCookingTime, sortBy]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedRegion !== 'All' ||
    selectedCategory !== 'All' ||
    selectedDifficulty !== 'All' ||
    maxCookingTime < 45;

  return (
    <div className="min-h-screen bg-[#fff8ec] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Catalog Header */}
        <div className="mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8590c]">
            <Compass size={14} />
            <span>Master Archive</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#5b1a1a] tracking-tight">
            Sweets Catalog
          </h1>
          <p className="text-xs sm:text-sm text-[#231815]/75 max-w-2xl leading-relaxed">
            Fourteen traditional recipes covering regional milk curdling, slow-roasted flours, saffron boondi pearls, and festive fried faral.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-5 sm:p-6 mb-8 shadow-sm space-y-6">
          {/* Row 1: Search & Sort Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <label htmlFor="search-input" className="sr-only">
                Search sweets by name or ingredient
              </label>
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5b1a1a]/50 pointer-events-none"
              />
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by sweet name (e.g., Ladoo, Kaju, Jamun) or ingredient..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-[#fff8ec]/60 border border-[#5b1a1a]/20 rounded-lg text-[#231815] placeholder-[#231815]/45 focus:outline-none focus:ring-2 focus:ring-[#f2a900] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#5b1a1a]/60 hover:text-[#5b1a1a]"
                  aria-label="Clear search text"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <label htmlFor="sort-select" className="text-xs font-semibold text-[#5b1a1a] whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2 px-3 text-xs bg-[#fff8ec]/60 border border-[#5b1a1a]/20 rounded-lg text-[#231815] focus:outline-none focus:ring-2 focus:ring-[#f2a900]"
              >
                <option value="name-asc">Name (A to Z)</option>
                <option value="name-desc">Name (Z to A)</option>
                <option value="time-asc">Cooking Time (Quickest)</option>
                <option value="difficulty-asc">Difficulty (Easiest)</option>
              </select>
            </div>
          </div>

          {/* Row 2: Filter Segmented Controls */}
          <div className="pt-4 border-t border-[#5b1a1a]/10 space-y-4">
            {/* Region Filter */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#5b1a1a] mb-2">
                Region
              </span>
              <div className="flex flex-wrap gap-1.5 p-1 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
                {(['All', 'North', 'South', 'East', 'West'] as const).map((reg) => (
                  <button
                    key={reg}
                    onClick={() => handleRegionChange(reg)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                      selectedRegion === reg
                        ? 'bg-[#5b1a1a] text-[#fff8ec] font-semibold shadow-2xs'
                        : 'text-[#231815]/75 hover:text-[#5b1a1a] hover:bg-white/60'
                    }`}
                  >
                    {reg === 'All' ? 'All Regions' : `${reg} India`}
                  </button>
                ))}
              </div>
            </div>

            {/* Type / Category Filter */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#5b1a1a] mb-2">
                Confection Type
              </span>
              <div className="flex flex-wrap gap-1.5 p-1 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                    selectedCategory === 'All'
                      ? 'bg-[#5b1a1a] text-[#fff8ec] font-semibold shadow-2xs'
                      : 'text-[#231815]/75 hover:text-[#5b1a1a] hover:bg-white/60'
                  }`}
                >
                  All Types
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                      selectedCategory === cat.id
                        ? 'bg-[#5b1a1a] text-[#fff8ec] font-semibold shadow-2xs'
                        : 'text-[#231815]/75 hover:text-[#5b1a1a] hover:bg-white/60'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty & Time Slider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Difficulty */}
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#5b1a1a] mb-2">
                  Skill Level
                </span>
                <div className="flex flex-wrap gap-1.5 p-1 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/10">
                  {(['All', 'Easy', 'Medium', 'Hard'] as const).map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                        selectedDifficulty === diff
                          ? 'bg-[#5b1a1a] text-[#fff8ec] font-semibold shadow-2xs'
                          : 'text-[#231815]/75 hover:text-[#5b1a1a] hover:bg-white/60'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Cooking Time Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5b1a1a] flex items-center gap-1">
                    <Clock size={13} className="text-[#e8590c]" />
                    <span>Max Cook Time:</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-[#e8590c] tabular-nums">
                    {maxCookingTime === 45 ? 'Any (up to 45m)' : `≤ ${maxCookingTime} minutes`}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#231815]/60 tabular-nums">10m</span>
                  <input
                    type="range"
                    min={10}
                    max={45}
                    step={5}
                    value={maxCookingTime}
                    onChange={(e) => setMaxCookingTime(Number(e.target.value))}
                    className="w-full accent-[#e8590c] cursor-pointer"
                    aria-label="Filter sweets by maximum cooking time in minutes"
                  />
                  <span className="text-[11px] text-[#231815]/60 tabular-nums">45m</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count & Active Filters Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-xs text-[#231815]/70">
          <p className="tabular-nums font-medium">
            Showing <strong className="text-[#5b1a1a]">{filteredSweets.length}</strong> of{' '}
            <strong className="text-[#5b1a1a]">{SWEETS_DATA.length}</strong> traditional sweets
          </p>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e8590c] hover:text-[#c2410c] hover:underline"
            >
              <RotateCcw size={13} />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Sweets Grid or Empty State */}
        {filteredSweets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSweets.map((sweet) => (
              <SweetCard key={sweet.slug} recipe={sweet} />
            ))}
          </div>
        ) : (
          <div className="py-16 px-6 text-center bg-[#fffdfa] rounded-xl border border-dashed border-[#5b1a1a]/25 max-w-lg mx-auto">
            <SlidersHorizontal size={36} className="mx-auto text-[#5b1a1a]/40 mb-3" />
            <h3 className="text-xl font-serif font-bold text-[#5b1a1a]">No Sweets Found</h3>
            <p className="text-xs text-[#231815]/70 mt-1 max-w-sm mx-auto leading-relaxed">
              No traditional sweets match your exact filter combination. Try adjusting your cooking time slider or clearing some criteria.
            </p>
            <div className="mt-5">
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-xs font-semibold rounded bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010] transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
