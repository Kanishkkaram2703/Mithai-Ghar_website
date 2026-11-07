import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  ChefHat,
  Users,
  Printer,
  Heart,
  Plus,
  Check,
  ArrowLeft,
  AlertTriangle,
  Lightbulb,
  Archive,
  Compass,
  CheckSquare,
  Square
} from 'lucide-react';
import { SWEETS_DATA } from '../data/sweets';
import { SweetCard } from '../components/SweetCard';
import { StepTimer } from '../components/StepTimer';
import { PatternDivider } from '../components/PatternDivider';
import { useApp } from '../context/AppContext';
import { usePageMeta } from '../hooks/usePageMeta';

export const RecipeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, addToGiftBox } = useApp();

  const recipe = SWEETS_DATA.find((s) => s.slug === slug);

  // Servings Adjuster state (defaults to recipe's baseline servings)
  const [currentServings, setCurrentServings] = useState<number>(recipe?.servings || 12);
  // Checked ingredients for mise-en-place tracking
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  // Gift box add state
  const [justAddedBox, setJustAddedBox] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc = recipe?.image || (recipe ? `/images/sweets/${recipe.slug}.jpg` : '');

  usePageMeta(
    recipe ? `${recipe.name} Recipe — Traditional Preparation` : 'Recipe Not Found',
    recipe
      ? `${recipe.name} (${recipe.subname}): Traditional Indian sweet recipe from ${recipe.region} India. Includes scaled ingredients, step timers, and pro tips.`
      : 'Diwali sweet recipe not found.'
  );

  if (!recipe) {
    return (
      <div className="min-h-screen bg-[#fff8ec] flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-8 rounded-xl border border-[#5b1a1a]/20 shadow-sm space-y-4">
          <h2 className="text-2xl font-serif font-bold text-[#5b1a1a]">Recipe Not Found</h2>
          <p className="text-xs text-[#231815]/75">
            The traditional sweet recipe you are looking for does not exist in our archive.
          </p>
          <Link
            to="/sweets"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010]"
          >
            <ArrowLeft size={14} />
            <span>Return to Sweets Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  const scaleFactor = currentServings / recipe.servings;
  const totalTime = recipe.prepMinutes + recipe.cookMinutes;
  const favorite = isFavorite(recipe.slug);

  const toggleIngredientCheck = (name: string) => {
    setCheckedIngredients((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleAdjustServings = (newVal: number) => {
    if (newVal >= 2 && newVal <= 100) {
      setCurrentServings(newVal);
    }
  };

  const handleAddBox = () => {
    addToGiftBox(recipe.slug, currentServings);
    setJustAddedBox(true);
    setTimeout(() => setJustAddedBox(false), 2000);
  };

  // 3 Related sweets
  const relatedSweets = SWEETS_DATA.filter(
    (s) => s.slug !== recipe.slug && (s.region === recipe.region || s.category === recipe.category)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fff8ec] py-8 sm:py-12 print-page">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="no-print mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5b1a1a] hover:text-[#e8590c] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded border border-[#5b1a1a]/20 bg-white hover:bg-[#fffdfa] text-[#5b1a1a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
              title="Print recipe for kitchen use"
            >
              <Printer size={13} />
              <span>Print Recipe</span>
            </button>
          </div>
        </div>

        {/* Recipe Title & Hero Showcase Header */}
        <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 shadow-sm overflow-hidden mb-8">
          {/* Visual Header Block with Motifs & Real Image */}
          <div className={`relative h-64 sm:h-80 w-full bg-gradient-to-r ${recipe.visualTheme.gradient} p-6 sm:p-10 flex flex-col justify-end text-white overflow-hidden`}>
            {/* Real photo if downloaded/added to /public/images/sweets/ */}
            {!imageError && (
              <img
                src={imageSrc}
                alt={recipe.name}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-90' : 'opacity-0'
                }`}
              />
            )}
            {/* Scrim for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

            {/* Geometric Rangoli / Sweet Motif Watermark */}
            <div className="absolute right-6 top-6 opacity-20 pointer-events-none" aria-hidden="true">
              <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="45" strokeWidth="1" />
                <circle cx="50" cy="50" r="32" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="18" strokeWidth="1" />
                <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.75" />
              </svg>
            </div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#f2a900]">
                <span>{recipe.region} India</span>
                <span aria-hidden="true">·</span>
                <span>{recipe.category.replace('-', ' ')}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-sm">
                {recipe.name}
              </h1>
              {recipe.subname && (
                <p className="text-sm sm:text-base text-stone-100 font-light max-w-2xl leading-relaxed">
                  {recipe.subname}
                </p>
              )}
            </div>
          </div>

          {/* Quick Metrics Bar (Prep, Cook, Total, Difficulty, Servings) */}
          <div className="px-6 py-4 bg-white border-b border-[#5b1a1a]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="space-y-0.5">
              <span className="text-[#231815]/60 uppercase tracking-wider block text-[11px]">Prep Time</span>
              <span className="font-mono font-semibold text-[#5b1a1a] text-sm tabular-nums">
                {recipe.prepMinutes} mins
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[#231815]/60 uppercase tracking-wider block text-[11px]">Cook Time</span>
              <span className="font-mono font-semibold text-[#5b1a1a] text-sm tabular-nums">
                {recipe.cookMinutes} mins
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[#231815]/60 uppercase tracking-wider block text-[11px]">Total Duration</span>
              <span className="font-mono font-semibold text-[#e8590c] text-sm tabular-nums">
                {totalTime} mins
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="text-[#231815]/60 uppercase tracking-wider block text-[11px]">Difficulty</span>
              <span className="font-semibold text-[#5b1a1a] text-sm flex items-center gap-1">
                <ChefHat size={14} className="text-[#e8590c]" />
                {recipe.difficulty}
              </span>
            </div>
          </div>

          {/* Recipe Overview Prose & Action Footprint */}
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-xs sm:text-sm text-[#231815]/85 leading-relaxed">
              {recipe.description}
            </p>

            {/* Action Bar (Favorites + Gift Box) */}
            <div className="no-print pt-4 border-t border-[#5b1a1a]/10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => toggleFavorite(recipe.slug)}
                className={`px-4 py-2 text-xs font-semibold rounded transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                  favorite
                    ? 'bg-[#5b1a1a] text-[#f2a900]'
                    : 'border border-[#5b1a1a]/25 text-[#5b1a1a] hover:bg-[#5b1a1a]/5'
                }`}
                aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart size={15} fill={favorite ? '#f2a900' : 'none'} strokeWidth={favorite ? 0 : 2} />
                <span>{favorite ? 'Favorited' : 'Add to Favorites'}</span>
              </button>

              <button
                onClick={handleAddBox}
                className={`px-4 py-2 text-xs font-semibold rounded transition-all duration-200 flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900] ${
                  justAddedBox
                    ? 'bg-[#15803d] text-white'
                    : 'bg-[#f2a900] hover:bg-[#e09b00] text-[#5b1a1a]'
                }`}
                aria-label={`Add ${currentServings} pieces to Diwali gift box`}
              >
                {justAddedBox ? (
                  <>
                    <Check size={15} className="stroke-[2.5]" />
                    <span>Added {currentServings} {recipe.servingUnit} to Box!</span>
                  </>
                ) : (
                  <>
                    <Plus size={15} />
                    <span>Add {currentServings} {recipe.servingUnit} to Gift Box</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Split: Scaled Ingredients (Left) & Numbered Steps (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Ingredients Column with Live Servings Scaler */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#5b1a1a]/10">
                <h3 className="text-xl font-serif font-bold text-[#5b1a1a]">Ingredients</h3>
                <span className="text-[11px] text-[#231815]/60 uppercase tracking-wider">
                  Metric Units
                </span>
              </div>

              {/* Interactive Servings Scaler */}
              <div className="no-print my-4 p-3.5 bg-[#fff8ec] rounded-lg border border-[#5b1a1a]/15 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5b1a1a]">
                  <Users size={14} className="text-[#e8590c]" />
                  <span>Servings:</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAdjustServings(currentServings - 2)}
                    disabled={currentServings <= 2}
                    className="w-7 h-7 rounded border border-[#5b1a1a]/20 bg-white text-[#5b1a1a] font-bold text-sm flex items-center justify-center hover:bg-[#fffdfa] disabled:opacity-40 transition-colors"
                    aria-label="Decrease servings by 2"
                  >
                    -
                  </button>
                  <span className="min-w-12 text-center font-mono font-bold text-sm text-[#5b1a1a] tabular-nums">
                    {currentServings} {recipe.servingUnit}
                  </span>
                  <button
                    onClick={() => handleAdjustServings(currentServings + 2)}
                    disabled={currentServings >= 60}
                    className="w-7 h-7 rounded border border-[#5b1a1a]/20 bg-white text-[#5b1a1a] font-bold text-sm flex items-center justify-center hover:bg-[#fffdfa] disabled:opacity-40 transition-colors"
                    aria-label="Increase servings by 2"
                  >
                    +
                  </button>
                </div>
              </div>

              {scaleFactor !== 1 && (
                <p className="no-print text-[11px] text-[#e8590c] font-medium italic mb-3">
                  * Quantities automatically rescaled from baseline {recipe.servings} {recipe.servingUnit}.
                </p>
              )}

              {/* Ingredients List with Mise-en-place Checkboxes */}
              <ul className="space-y-3 pt-1">
                {recipe.ingredients.map((ing) => {
                  const isChecked = checkedIngredients[ing.name];
                  const rawQty = ing.quantity * scaleFactor;
                  const displayQty =
                    rawQty >= 10 ? Math.round(rawQty) : Number(rawQty.toFixed(1));

                  return (
                    <li
                      key={ing.name}
                      onClick={() => toggleIngredientCheck(ing.name)}
                      className={`flex items-start gap-3 p-2 rounded cursor-pointer transition-colors ${
                        isChecked ? 'bg-[#5b1a1a]/5 text-[#231815]/50' : 'hover:bg-[#fff8ec]'
                      }`}
                    >
                      <button
                        type="button"
                        className="mt-0.5 text-[#5b1a1a] shrink-0 focus:outline-none"
                        aria-label={isChecked ? `Uncheck ${ing.name}` : `Check ${ing.name}`}
                      >
                        {isChecked ? (
                          <CheckSquare size={16} className="text-[#15803d]" />
                        ) : (
                          <Square size={16} className="text-[#5b1a1a]/40" />
                        )}
                      </button>

                      <div className="flex-1 text-xs">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className={`font-medium ${isChecked ? 'line-through text-[#231815]/60' : 'text-[#231815]'}`}>
                            {ing.name}
                          </span>
                          <span className="font-mono font-bold text-[#5b1a1a] shrink-0 tabular-nums">
                            {displayQty} {ing.unit}
                          </span>
                        </div>
                        {ing.notes && (
                          <p className="text-[11px] text-[#231815]/60 mt-0.5 italic">
                            {ing.notes}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Storage & Shelf Life Box */}
            <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5b1a1a]">
                <Archive size={15} className="text-[#e8590c]" />
                <span>Storage & Shelf Life</span>
              </div>
              <div className="space-y-2 text-xs text-[#231815]/80">
                <div>
                  <span className="font-semibold text-[#5b1a1a]">Duration: </span>
                  <span>{recipe.storage.shelfLife}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#5b1a1a]">Environment: </span>
                  <span>{recipe.storage.temperature}</span>
                </div>
                <div>
                  <span className="font-semibold text-[#5b1a1a]">Container: </span>
                  <span>{recipe.storage.container}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Numbered Steps Column with Timers */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#5b1a1a] pb-4 border-b border-[#5b1a1a]/10 mb-6">
                Preparation Steps
              </h3>

              <ol className="space-y-8">
                {recipe.steps.map((step) => (
                  <li key={step.stepNumber} className="relative flex gap-4">
                    {/* Step Number Circle */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#5b1a1a] text-[#fff8ec] font-serif font-bold text-sm flex items-center justify-center shadow-xs">
                      {step.stepNumber}
                    </div>

                    <div className="flex-1 space-y-1.5">
                      <h4 className="text-base font-serif font-bold text-[#231815]">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#231815]/85 leading-relaxed">
                        {step.instruction}
                      </p>

                      {/* Interactive Step Timer for steps with waiting times */}
                      {step.waitMinutes && (
                        <StepTimer
                          initialMinutes={step.waitMinutes}
                          label={step.timerLabel}
                          stepNumber={step.stepNumber}
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Chef's Tips & Common Mistakes Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pro Tips */}
              <div className="bg-[#fffdfa] rounded-xl border border-[#15803d]/20 p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#15803d]">
                  <Lightbulb size={16} />
                  <span>Chef's Pro Tips</span>
                </div>
                <ul className="space-y-2 text-xs text-[#231815]/80 leading-relaxed">
                  {recipe.tips.proTips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#15803d] font-bold" aria-hidden="true">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="bg-[#fffdfa] rounded-xl border border-[#e8590c]/25 p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8590c]">
                  <AlertTriangle size={16} />
                  <span>Common Pitfalls</span>
                </div>
                <ul className="space-y-2 text-xs text-[#231815]/80 leading-relaxed">
                  {recipe.tips.commonMistakes.map((mistake, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#e8590c] font-bold" aria-hidden="true">•</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <PatternDivider variant="minimal" className="no-print" />

        {/* Related Sweets Section */}
        {relatedSweets.length > 0 && (
          <section className="no-print my-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#e8590c]">
                  Confection Pairing
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#5b1a1a]">
                  More from {recipe.region} India & Similar Confections
                </h3>
              </div>
              <Link
                to="/sweets"
                className="text-xs font-semibold text-[#5b1a1a] hover:text-[#e8590c] hover:underline"
              >
                View all recipes →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSweets.map((rel) => (
                <SweetCard key={rel.slug} recipe={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
