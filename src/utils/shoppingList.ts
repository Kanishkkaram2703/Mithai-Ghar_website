import { GiftBoxItem, MergedIngredient } from '../types';
import { SWEETS_DATA } from '../data/sweets';

interface NormalizedKey {
  canonicalName: string;
  category: 'Dairy & Ghee' | 'Sweeteners' | 'Flours & Grains' | 'Nuts & Seeds' | 'Aromatics & Spices' | 'Pantry Essentials';
  preferredUnit: string;
}

function getIngredientCanonicalKey(name: string): NormalizedKey {
  const lower = name.toLowerCase();

  // Dairy & Ghee
  if (lower.includes('ghee') || lower.includes('clarified butter')) {
    return { canonicalName: 'Pure Desi Ghee', category: 'Dairy & Ghee', preferredUnit: 'g' };
  }
  if (lower.includes('chenna') || lower.includes('cottage cheese') || lower.includes('paneer')) {
    return { canonicalName: 'Fresh Chenna / Soft Paneer', category: 'Dairy & Ghee', preferredUnit: 'g' };
  }
  if (lower.includes('khoya') || lower.includes('mawa')) {
    return { canonicalName: 'Fresh Khoya (Mawa)', category: 'Dairy & Ghee', preferredUnit: 'g' };
  }
  if (lower.includes('condensed milk')) {
    return { canonicalName: 'Sweetened Condensed Milk', category: 'Dairy & Ghee', preferredUnit: 'g' };
  }
  if (lower.includes('milk powder')) {
    return { canonicalName: 'Full Cream Milk Powder', category: 'Dairy & Ghee', preferredUnit: 'g' };
  }
  if (lower.includes('yogurt') || lower.includes('dahi')) {
    return { canonicalName: 'Plain Yogurt (Dahi)', category: 'Dairy & Ghee', preferredUnit: 'g' };
  }
  if (lower.includes('milk')) {
    return { canonicalName: 'Full Cream Milk', category: 'Dairy & Ghee', preferredUnit: 'ml' };
  }

  // Sweeteners
  if (lower.includes('bura') || lower.includes('tagar') || lower.includes('boora')) {
    return { canonicalName: 'Bura / Tagar Sugar (Granular)', category: 'Sweeteners', preferredUnit: 'g' };
  }
  if (lower.includes('powdered sugar') || lower.includes('nolen gur')) {
    return { canonicalName: 'Powdered Confectioners Sugar', category: 'Sweeteners', preferredUnit: 'g' };
  }
  if (lower.includes('sugar')) {
    return { canonicalName: 'Granulated White Sugar', category: 'Sweeteners', preferredUnit: 'g' };
  }

  // Flours
  if (lower.includes('besan') || lower.includes('gram flour')) {
    return { canonicalName: 'Gram Flour (Besan)', category: 'Flours & Grains', preferredUnit: 'g' };
  }
  if (lower.includes('maida') || lower.includes('all-purpose flour')) {
    return { canonicalName: 'All-Purpose Flour (Maida)', category: 'Flours & Grains', preferredUnit: 'g' };
  }
  if (lower.includes('rava') || lower.includes('semolina') || lower.includes('sooji')) {
    return { canonicalName: 'Fine Semolina (Rava / Sooji)', category: 'Flours & Grains', preferredUnit: 'g' };
  }
  if (lower.includes('cornstarch')) {
    return { canonicalName: 'Cornstarch', category: 'Flours & Grains', preferredUnit: 'g' };
  }

  // Nuts & Seeds
  if (lower.includes('cashew') || lower.includes('kaju')) {
    return { canonicalName: 'Raw Cashews (Kaju)', category: 'Nuts & Seeds', preferredUnit: 'g' };
  }
  if (lower.includes('pistachio')) {
    return { canonicalName: 'Pistachios (Pista slivers)', category: 'Nuts & Seeds', preferredUnit: 'g' };
  }
  if (lower.includes('almond')) {
    return { canonicalName: 'Almonds (Badam)', category: 'Nuts & Seeds', preferredUnit: 'g' };
  }
  if (lower.includes('coconut')) {
    return { canonicalName: 'Coconut (Fresh grated or desiccated)', category: 'Nuts & Seeds', preferredUnit: 'g' };
  }
  if (lower.includes('raisin') || lower.includes('kishmish')) {
    return { canonicalName: 'Golden Raisins (Kishmish)', category: 'Nuts & Seeds', preferredUnit: 'g' };
  }
  if (lower.includes('magaz') || lower.includes('melon seeds')) {
    return { canonicalName: 'Melon Seeds (Magaz)', category: 'Nuts & Seeds', preferredUnit: 'g' };
  }

  // Aromatics & Spices
  if (lower.includes('cardamom') || lower.includes('elaichi')) {
    return { canonicalName: 'Green Cardamom (Elaichi)', category: 'Aromatics & Spices', preferredUnit: 'tsp' };
  }
  if (lower.includes('saffron') || lower.includes('kesar')) {
    return { canonicalName: 'Kesar (Saffron Strands)', category: 'Aromatics & Spices', preferredUnit: 'pinch' };
  }
  if (lower.includes('rose water')) {
    return { canonicalName: 'Rose Water', category: 'Aromatics & Spices', preferredUnit: 'ml' };
  }

  // Pantry
  if (lower.includes('baking powder')) {
    return { canonicalName: 'Baking Powder', category: 'Pantry Essentials', preferredUnit: 'tsp' };
  }
  if (lower.includes('baking soda')) {
    return { canonicalName: 'Baking Soda', category: 'Pantry Essentials', preferredUnit: 'pinch' };
  }
  if (lower.includes('lemon juice') || lower.includes('vinegar')) {
    return { canonicalName: 'Fresh Lemon Juice', category: 'Pantry Essentials', preferredUnit: 'ml' };
  }
  if (lower.includes('oil')) {
    return { canonicalName: 'Refined Cooking Oil (for frying)', category: 'Pantry Essentials', preferredUnit: 'ml' };
  }

  return { canonicalName: name.trim(), category: 'Pantry Essentials', preferredUnit: 'g' };
}

export function generateShoppingList(giftBox: GiftBoxItem[]): {
  categorized: Record<string, MergedIngredient[]>;
  allMerged: MergedIngredient[];
  totalIngredientsCount: number;
} {
  const mergedMap = new Map<
    string,
    {
      name: string;
      quantity: number;
      unit: string;
      category: string;
      sweets: Set<string>;
    }
  >();

  giftBox.forEach((boxItem) => {
    const sweet = SWEETS_DATA.find((s) => s.slug === boxItem.sweetSlug);
    if (!sweet || boxItem.servings <= 0) return;

    const scaleFactor = boxItem.servings / sweet.servings;

    sweet.ingredients.forEach((ing) => {
      // Exclude water from dry grocery list
      if (ing.name.toLowerCase().includes('water (for') || ing.name.toLowerCase() === 'water') {
        return;
      }

      const { canonicalName, category, preferredUnit } = getIngredientCanonicalKey(ing.name);
      const scaledQty = ing.quantity * scaleFactor;

      let key = canonicalName;
      // If unit matches or is converted
      if (!mergedMap.has(key)) {
        mergedMap.set(key, {
          name: canonicalName,
          quantity: scaledQty,
          unit: ing.unit || preferredUnit,
          category,
          sweets: new Set([sweet.name])
        });
      } else {
        const existing = mergedMap.get(key)!;
        // Check unit alignment
        if (existing.unit === ing.unit) {
          existing.quantity += scaledQty;
        } else if (existing.unit === 'g' && ing.unit === 'g') {
          existing.quantity += scaledQty;
        } else if (existing.unit === 'ml' && ing.unit === 'ml') {
          existing.quantity += scaledQty;
        } else if (existing.unit === 'tsp' && ing.unit === 'tsp') {
          existing.quantity += scaledQty;
        } else {
          // Keep unit as is or combine
          existing.quantity += scaledQty;
        }
        existing.sweets.add(sweet.name);
      }
    });
  });

  const allMerged: MergedIngredient[] = [];
  const categorized: Record<string, MergedIngredient[]> = {};

  mergedMap.forEach((val) => {
    // Round to 1 decimal place or integer
    const finalQty =
      val.quantity >= 10
        ? Math.round(val.quantity)
        : Number(val.quantity.toFixed(1));

    const item: MergedIngredient = {
      name: val.name,
      quantity: finalQty,
      unit: val.unit,
      usedInSweets: Array.from(val.sweets)
    };

    allMerged.push(item);

    if (!categorized[val.category]) {
      categorized[val.category] = [];
    }
    categorized[val.category].push(item);
  });

  // Sort within categories by name
  Object.keys(categorized).forEach((cat) => {
    categorized[cat].sort((a, b) => a.name.localeCompare(b.name));
  });

  return {
    categorized,
    allMerged: allMerged.sort((a, b) => a.name.localeCompare(b.name)),
    totalIngredientsCount: allMerged.length
  };
}

export function formatShoppingListForClipboard(
  giftBox: GiftBoxItem[],
  list: MergedIngredient[]
): string {
  const boxSummary = giftBox
    .map((item) => {
      const sweet = SWEETS_DATA.find((s) => s.slug === item.sweetSlug);
      return `• ${sweet?.name || item.sweetSlug}: ${item.servings} pieces`;
    })
    .join('\n');

  const itemsFormatted = list
    .map((item) => `[ ] ${item.name}: ${item.quantity} ${item.unit} (for: ${item.usedInSweets.join(', ')})`)
    .join('\n');

  return `MITHAI GHAR — DIWALI SWEETS GIFT BOX SHOPPING LIST
==================================================
Selected Sweets Assortment:
${boxSummary}

Combined Ingredients List:
${itemsFormatted}

Generated with Mithai Ghar (Traditional Confectionery Archive)`;
}
