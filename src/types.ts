export type Region = 'North' | 'South' | 'East' | 'West';

export type SweetCategory = 'milk-based' | 'flour-based' | 'nut-based' | 'fried' | 'no-cook';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string; // 'g', 'ml', 'tbsp', 'tsp', 'pinch', 'pcs'
  notes?: string;
}

export interface RecipeStep {
  stepNumber: number;
  title: string;
  instruction: string;
  waitMinutes?: number;
  timerLabel?: string;
}

export interface SweetRecipe {
  slug: string;
  name: string;
  subname?: string;
  image?: string;
  region: Region;
  category: SweetCategory;
  difficulty: Difficulty;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  servingUnit: string;
  description: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  tips: {
    proTips: string[];
    commonMistakes: string[];
  };
  storage: {
    shelfLife: string;
    temperature: string;
    container: string;
  };
  visualTheme: {
    gradient: string;
    textColor: string;
    accentColor: string;
    motif: 'ladoo' | 'diamond' | 'spiral' | 'sphere' | 'disc' | 'cubes';
  };
}

export interface GiftBoxItem {
  sweetSlug: string;
  servings: number; // number of servings/pieces selected
  addedAt: number;
}

export interface MergedIngredient {
  name: string;
  quantity: number;
  unit: string;
  usedInSweets: string[];
}
