import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Package, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SWEETS_DATA } from '../data/sweets';
import { SweetCard } from '../components/SweetCard';
import { usePageMeta } from '../hooks/usePageMeta';

export const FavoritesPage: React.FC = () => {
  usePageMeta(
    'My Favorite Sweets — Mithai Ghar',
    'View and manage your saved traditional Indian Diwali sweets recipes.'
  );

  const { favorites, addToGiftBox } = useApp();
  const [addedAll, setAddedAll] = useState(false);

  const favoritedSweets = SWEETS_DATA.filter((s) => favorites.includes(s.slug));

  const handleAddAllToBox = () => {
    favoritedSweets.forEach((s) => addToGiftBox(s.slug, 6));
    setAddedAll(true);
    setTimeout(() => setAddedAll(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fff8ec] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8590c]">
              <Heart size={14} className="fill-[#e8590c]" />
              <span>Personal Bookmarks</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#5b1a1a] tracking-tight">
              Favorite Sweets
            </h1>
            <p className="text-xs sm:text-sm text-[#231815]/75 max-w-xl">
              Your saved collection of traditional recipes for quick kitchen access and gift box curation.
            </p>
          </div>

          {favoritedSweets.length > 0 && (
            <button
              onClick={handleAddAllToBox}
              className={`px-4 py-2 text-xs font-semibold rounded transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b1a1a] ${
                addedAll
                  ? 'bg-[#15803d] text-white'
                  : 'bg-[#5b1a1a] hover:bg-[#3a1010] text-[#fff8ec]'
              }`}
            >
              {addedAll ? (
                <>
                  <Check size={14} />
                  <span>Added All to Gift Box!</span>
                </>
              ) : (
                <>
                  <Package size={14} className="text-[#f2a900]" />
                  <span>Add All to Gift Box (6 pcs each)</span>
                </>
              )}
            </button>
          )}
        </div>

        {favoritedSweets.length > 0 ? (
          <div>
            <p className="text-xs text-[#231815]/70 mb-6 tabular-nums">
              Showing <strong className="text-[#5b1a1a]">{favoritedSweets.length}</strong> favorited sweets
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {favoritedSweets.map((sweet) => (
                <SweetCard key={sweet.slug} recipe={sweet} />
              ))}
            </div>
          </div>
        ) : (
          <div className="py-16 px-6 text-center bg-[#fffdfa] rounded-xl border border-dashed border-[#5b1a1a]/25 max-w-lg mx-auto space-y-4">
            <Heart size={44} className="mx-auto text-[#5b1a1a]/40" />
            <h3 className="text-2xl font-serif font-bold text-[#5b1a1a]">No Favorites Saved Yet</h3>
            <p className="text-xs text-[#231815]/75 leading-relaxed">
              Explore our sweets catalog and click the heart icon on any confection to bookmark it here for fast kitchen access.
            </p>
            <div className="pt-2">
              <Link
                to="/sweets"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010] transition-colors"
              >
                <span>Browse Sweets Catalog</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
