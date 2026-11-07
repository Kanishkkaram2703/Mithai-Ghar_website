import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, Check, Clock, ChefHat } from 'lucide-react';
import { SweetRecipe } from '../types';
import { useApp } from '../context/AppContext';

interface SweetCardProps {
  recipe: SweetRecipe;
}

export const SweetCard: React.FC<SweetCardProps> = ({ recipe }) => {
  const { isFavorite, toggleFavorite, addToGiftBox } = useApp();
  const favorite = isFavorite(recipe.slug);
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc = recipe.image || `/images/sweets/${recipe.slug}.jpg`;

  const handleAddGiftBox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToGiftBox(recipe.slug, 6);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.slug);
  };

  const totalTime = recipe.prepMinutes + recipe.cookMinutes;

  return (
    <div className="group relative flex flex-col bg-[#fffdfa] rounded-lg border border-[#5b1a1a]/15 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* Visual Block: Displays downloaded image if present, or elegant gradient block */}
      <Link
        to={`/sweets/${recipe.slug}`}
        className="relative block h-48 sm:h-52 w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
        aria-label={`View recipe for ${recipe.name}`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${recipe.visualTheme.gradient} opacity-95 transition-transform duration-300 group-hover:scale-105`}
        />

        {/* Real photo if downloaded/added to /public/images/sweets/ */}
        {!imageError && (
          <img
            src={imageSrc}
            alt={recipe.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Intricate Geometric Rangoli / Confection Motif Watermark */}
        <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center" aria-hidden="true">
          {recipe.visualTheme.motif === 'diamond' && (
            <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white">
              <polygon points="50,5 95,50 50,95 5,50" strokeWidth="1.5" />
              <polygon points="50,20 80,50 50,80 20,50" strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="50,32 68,50 50,68 32,50" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>
          )}
          {recipe.visualTheme.motif === 'spiral' && (
            <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white">
              <path d="M50 50 A 5 5 0 0 1 55 50 A 10 10 0 0 1 45 50 A 18 18 0 0 1 63 50 A 28 28 0 0 1 37 50 A 38 38 0 0 1 73 50" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
          {recipe.visualTheme.motif === 'ladoo' && (
            <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white">
              <circle cx="50" cy="50" r="40" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="30" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="18" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </svg>
          )}
          {recipe.visualTheme.motif === 'sphere' && (
            <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white">
              <circle cx="50" cy="50" r="42" strokeWidth="2" />
              <ellipse cx="50" cy="50" rx="42" ry="20" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="50" cy="50" rx="20" ry="42" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          )}
          {(recipe.visualTheme.motif === 'cubes' || recipe.visualTheme.motif === 'disc') && (
            <svg width="140" height="140" viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-white">
              <rect x="20" y="20" width="60" height="60" strokeWidth="1.5" />
              <rect x="32" y="32" width="36" height="36" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="20" y1="20" x2="80" y2="80" strokeWidth="1" />
              <line x1="80" y1="20" x2="20" y2="80" strokeWidth="1" />
            </svg>
          )}
        </div>

        {/* Center Typography Showcase */}
        <div className="relative h-full flex flex-col justify-end p-5 text-white z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex items-center gap-1.5 text-xs text-[#f2a900] font-medium tracking-wider uppercase mb-1">
            <span>{recipe.region} India</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.category.replace('-', ' ')}</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white tracking-tight leading-snug drop-shadow-sm">
            {recipe.name}
          </h3>
          {recipe.subname && (
            <p className="text-xs text-stone-200 line-clamp-1 mt-0.5 font-light">
              {recipe.subname}
            </p>
          )}
        </div>

        {/* Quick action buttons on card image */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
          <button
            onClick={handleToggleFavorite}
            className={`p-2 rounded-full backdrop-blur-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
              favorite
                ? 'bg-[#5b1a1a] text-[#f2a900] shadow-sm'
                : 'bg-black/35 hover:bg-black/55 text-white'
            }`}
            aria-label={favorite ? `Remove ${recipe.name} from favorites` : `Add ${recipe.name} to favorites`}
            title={favorite ? 'Favorited' : 'Add to Favorites'}
          >
            <Heart size={16} fill={favorite ? '#f2a900' : 'none'} strokeWidth={favorite ? 0 : 2} />
          </button>
        </div>
      </Link>

      {/* Card Body & Unboxed Metadata */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <p className="text-xs text-[#231815]/75 line-clamp-2 leading-relaxed mb-4">
          {recipe.description}
        </p>

        {/* Unboxed Clean Metadata */}
        <div className="pt-3 border-t border-[#5b1a1a]/10 flex items-center justify-between text-xs text-[#231815]/70">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1" title="Total time">
              <Clock size={13} className="text-[#e8590c]" />
              <span className="tabular-nums font-medium">{totalTime} min</span>
            </span>
            <span aria-hidden="true" className="text-[#5b1a1a]/30">·</span>
            <span className="inline-flex items-center gap-1" title="Skill level">
              <ChefHat size={13} className="text-[#e8590c]" />
              <span>{recipe.difficulty}</span>
            </span>
          </div>

          <span className="tabular-nums font-medium text-[#5b1a1a]">
            {recipe.servings} {recipe.servingUnit}
          </span>
        </div>

        {/* Action Footprint */}
        <div className="mt-4 pt-3 flex items-center gap-2">
          <Link
            to={`/sweets/${recipe.slug}`}
            className="flex-1 text-center py-2 px-3 text-xs font-semibold text-[#5b1a1a] bg-[#5b1a1a]/8 hover:bg-[#5b1a1a]/15 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b1a1a]"
          >
            Read Recipe
          </Link>
          <button
            onClick={handleAddGiftBox}
            className={`py-2 px-3 text-xs font-medium rounded transition-all duration-200 flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
              justAdded
                ? 'bg-[#15803d] text-white'
                : 'bg-[#5b1a1a] hover:bg-[#3a1010] text-[#fff8ec]'
            }`}
            aria-label={`Add 6 pieces of ${recipe.name} to Diwali gift box`}
            title="Add to Gift Box"
          >
            {justAdded ? (
              <>
                <Check size={14} className="stroke-[2.5]" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <Plus size={14} />
                <span className="hidden sm:inline">Gift Box</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
