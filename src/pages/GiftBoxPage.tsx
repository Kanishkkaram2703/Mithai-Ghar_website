import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Package,
  Trash2,
  Copy,
  Printer,
  Check,
  Plus,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  CheckSquare,
  Square
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SWEETS_DATA, CURATED_GIFT_BOXES } from '../data/sweets';
import { generateShoppingList, formatShoppingListForClipboard } from '../utils/shoppingList';
import { usePageMeta } from '../hooks/usePageMeta';

export const GiftBoxPage: React.FC = () => {
  usePageMeta(
    'Diwali Gift Box Planner & Smart Grocery List',
    'Assemble your custom Diwali Mithai Dabba and get an automatic combined grocery shopping list that adds up all ingredients without duplicates.'
  );

  const {
    giftBox,
    updateGiftBoxServings,
    removeFromGiftBox,
    clearGiftBox,
    loadCuratedBox,
    totalGiftBoxItems
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [checkedGroceries, setCheckedGroceries] = useState<Record<string, boolean>>({});

  // Generate the merged shopping list
  const { categorized, allMerged, totalIngredientsCount } = useMemo(
    () => generateShoppingList(giftBox),
    [giftBox]
  );

  const handleCopyList = async () => {
    try {
      const text = formatShoppingListForClipboard(giftBox, allMerged);
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  const toggleGroceryCheck = (name: string) => {
    setCheckedGroceries((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="min-h-screen bg-[#fff8ec] py-10 sm:py-14 print-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e8590c]">
              <Package size={14} />
              <span>Festive Gifting & Kitchen Planning</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#5b1a1a] tracking-tight">
              Diwali Gift Box Planner
            </h1>
            <p className="text-xs sm:text-sm text-[#231815]/75 max-w-2xl leading-relaxed">
              Design a custom Mithai Dabba for your festival celebrations. As you adjust pieces, our system merges ingredients into an aggregated grocery shopping list.
            </p>
          </div>

          {giftBox.length > 0 && (
            <div className="no-print flex items-center gap-3">
              <button
                onClick={handleCopyList}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded bg-[#f2a900] hover:bg-[#e09b00] text-[#5b1a1a] transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5b1a1a]"
                title="Copy combined list to clipboard"
              >
                {copied ? <Check size={14} className="stroke-[2.5]" /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Shopping List'}</span>
              </button>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded border border-[#5b1a1a]/20 bg-white hover:bg-[#fffdfa] text-[#5b1a1a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2a900]"
                title="Print gift box receipt and grocery checklist"
              >
                <Printer size={14} />
                <span>Print Box & List</span>
              </button>
            </div>
          )}
        </div>

        {/* Curated Presets Bar (Quick Inspiration) */}
        <div className="no-print mb-8 p-5 bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5b1a1a] mb-3">
            <Sparkles size={14} className="text-[#f2a900]" />
            <span>Load a Curated Confectionery Box</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CURATED_GIFT_BOXES.map((preset) => (
              <div
                key={preset.id}
                className="p-3.5 rounded-lg border border-[#5b1a1a]/15 bg-[#fff8ec]/70 hover:bg-[#fff8ec] transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#5b1a1a]">
                    {preset.title}
                  </h4>
                  <p className="text-[11px] text-[#231815]/70 mt-1 line-clamp-2">
                    {preset.description}
                  </p>
                </div>
                <button
                  onClick={() => loadCuratedBox(preset.items)}
                  className="mt-3 w-full py-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-wider rounded bg-[#5b1a1a]/10 hover:bg-[#5b1a1a] text-[#5b1a1a] hover:text-[#fff8ec] transition-colors text-center"
                >
                  Load This Assortment
                </button>
              </div>
            ))}
          </div>
        </div>

        {giftBox.length === 0 ? (
          /* Empty State */
          <div className="py-16 px-6 text-center bg-[#fffdfa] rounded-xl border border-dashed border-[#5b1a1a]/25 max-w-lg mx-auto space-y-4">
            <Package size={44} className="mx-auto text-[#5b1a1a]/40" />
            <h3 className="text-2xl font-serif font-bold text-[#5b1a1a]">Your Gift Box is Empty</h3>
            <p className="text-xs text-[#231815]/75 leading-relaxed">
              Add your favorite traditional sweets from the catalog, or load one of our curated classic festive platters above.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/sweets"
                className="px-5 py-2.5 text-xs font-semibold rounded bg-[#5b1a1a] text-[#fff8ec] hover:bg-[#3a1010] transition-colors inline-flex items-center gap-2"
              >
                <span>Browse Sweets Catalog</span>
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => loadCuratedBox(CURATED_GIFT_BOXES[0].items)}
                className="px-4 py-2.5 text-xs font-semibold rounded border border-[#f2a900] bg-[#f2a900]/20 text-[#5b1a1a] hover:bg-[#f2a900]/30 transition-colors"
              >
                Load The Royal Dabba
              </button>
            </div>
          </div>
        ) : (
          /* 2-Column Split: Selected Sweets (Left) & Combined Shopping List (Right) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Selected Sweets in Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-5 sm:p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#5b1a1a]/10">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#5b1a1a]">
                      Box Assortment
                    </h3>
                    <p className="text-xs text-[#231815]/70">
                      {giftBox.length} varieties · {totalGiftBoxItems} total pieces
                    </p>
                  </div>

                  <button
                    onClick={clearGiftBox}
                    className="no-print text-xs font-medium text-rose-800 hover:underline flex items-center gap-1"
                  >
                    <Trash2 size={13} />
                    <span>Clear Box</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-3.5">
                  {giftBox.map((item) => {
                    const sweet = SWEETS_DATA.find((s) => s.slug === item.sweetSlug);
                    if (!sweet) return null;

                    return (
                      <div
                        key={item.sweetSlug}
                        className="p-3.5 rounded-lg border border-[#5b1a1a]/10 bg-[#fff8ec]/50 flex items-center justify-between gap-4"
                      >
                        {/* Visual swatch & info */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-md bg-gradient-to-br ${sweet.visualTheme.gradient} shrink-0 relative overflow-hidden flex items-center justify-center text-white shadow-2xs`}
                          >
                            <img
                              src={sweet.image || `/images/sweets/${sweet.slug}.jpg`}
                              alt=""
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <span className="font-serif font-bold text-xs relative z-10 drop-shadow">
                              {sweet.name.charAt(0)}
                            </span>
                          </div>

                          <div>
                            <Link
                              to={`/sweets/${sweet.slug}`}
                              className="text-sm font-serif font-bold text-[#231815] hover:text-[#5b1a1a] transition-colors"
                            >
                              {sweet.name}
                            </Link>
                            <p className="text-[11px] text-[#231815]/65">
                              {sweet.region} India · {sweet.category.replace('-', ' ')}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Stepper & Delete */}
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="no-print flex items-center gap-1 bg-white rounded border border-[#5b1a1a]/15 p-1">
                            <button
                              onClick={() => updateGiftBoxServings(item.sweetSlug, item.servings - 2)}
                              className="w-6 h-6 rounded text-xs font-bold text-[#5b1a1a] hover:bg-[#5b1a1a]/10 flex items-center justify-center"
                              aria-label={`Decrease ${sweet.name} pieces`}
                            >
                              -
                            </button>
                            <span className="min-w-8 text-center text-xs font-mono font-bold text-[#5b1a1a] tabular-nums">
                              {item.servings}
                            </span>
                            <button
                              onClick={() => updateGiftBoxServings(item.sweetSlug, item.servings + 2)}
                              className="w-6 h-6 rounded text-xs font-bold text-[#5b1a1a] hover:bg-[#5b1a1a]/10 flex items-center justify-center"
                              aria-label={`Increase ${sweet.name} pieces`}
                            >
                              +
                            </button>
                          </div>

                          {/* Print representation of piece count */}
                          <span className="hidden print:inline text-xs font-mono font-bold">
                            {item.servings} pcs
                          </span>

                          <button
                            onClick={() => removeFromGiftBox(item.sweetSlug)}
                            className="no-print text-[#5b1a1a]/40 hover:text-rose-800 p-1"
                            aria-label={`Remove ${sweet.name} from gift box`}
                            title="Remove"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="no-print pt-2">
                  <Link
                    to="/sweets"
                    className="w-full py-2.5 px-3 text-xs font-semibold rounded border border-[#5b1a1a]/20 bg-white hover:bg-[#fff8ec] text-[#5b1a1a] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Plus size={14} />
                    <span>Add More Sweets to Box</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Automated Combined Shopping List */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#fffdfa] rounded-xl border border-[#5b1a1a]/15 p-5 sm:p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#5b1a1a]/10">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8590c]">
                      <ShoppingBag size={14} />
                      <span>Aggregated Grocery List</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#5b1a1a]">
                      Consolidated Ingredients
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-[#5b1a1a] bg-[#5b1a1a]/10 px-2.5 py-1 rounded tabular-nums font-semibold">
                    {totalIngredientsCount} items
                  </span>
                </div>

                <p className="text-xs text-[#231815]/75 leading-relaxed">
                  Identical ingredients across your selected sweets (such as desi ghee, sugar, cardamom, and flours) are merged and summed into exact metric quantities.
                </p>

                {/* Categorized Ingredient Groups */}
                <div className="space-y-6">
                  {Object.entries(categorized).map(([categoryName, items]) => (
                    <div key={categoryName} className="space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5b1a1a] flex items-center gap-2">
                        <span>{categoryName}</span>
                        <span className="h-px flex-1 bg-[#5b1a1a]/10" />
                      </h4>

                      <ul className="space-y-2">
                        {items.map((ing) => {
                          const isDone = checkedGroceries[ing.name];

                          return (
                            <li
                              key={ing.name}
                              onClick={() => toggleGroceryCheck(ing.name)}
                              className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                                isDone
                                  ? 'bg-[#5b1a1a]/5 border-transparent text-[#231815]/50'
                                  : 'bg-white border-[#5b1a1a]/10 hover:border-[#f2a900]'
                              }`}
                            >
                              <button
                                type="button"
                                className="no-print mt-0.5 text-[#5b1a1a] shrink-0"
                                aria-label={isDone ? `Uncheck ${ing.name}` : `Check ${ing.name}`}
                              >
                                {isDone ? (
                                  <CheckSquare size={16} className="text-[#15803d]" />
                                ) : (
                                  <Square size={16} className="text-[#5b1a1a]/30" />
                                )}
                              </button>

                              <div className="flex-1 text-xs">
                                <div className="flex items-baseline justify-between gap-2">
                                  <span className={`font-semibold ${isDone ? 'line-through text-[#231815]/60' : 'text-[#231815]'}`}>
                                    {ing.name}
                                  </span>
                                  <span className="font-mono font-bold text-[#5b1a1a] shrink-0 tabular-nums text-sm">
                                    {ing.quantity} {ing.unit}
                                  </span>
                                </div>
                                <p className="text-[11px] text-[#231815]/60 mt-0.5">
                                  Needed for: {ing.usedInSweets.join(', ')}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
