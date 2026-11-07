import React, { createContext, useContext, useState, useEffect } from 'react';
import { GiftBoxItem } from '../types';

interface AppContextType {
  favorites: string[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  giftBox: GiftBoxItem[];
  addToGiftBox: (slug: string, servings?: number) => void;
  updateGiftBoxServings: (slug: string, servings: number) => void;
  removeFromGiftBox: (slug: string) => void;
  clearGiftBox: () => void;
  loadCuratedBox: (items: { slug: string; servings: number }[]) => void;
  totalGiftBoxItems: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const FAVORITES_KEY = 'mithai_ghar_favorites_v1';
const GIFT_BOX_KEY = 'mithai_ghar_gift_box_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : ['besan-ladoo', 'kaju-katli', 'gulab-jamun'];
    } catch {
      return ['besan-ladoo', 'kaju-katli', 'gulab-jamun'];
    }
  });

  const [giftBox, setGiftBox] = useState<GiftBoxItem[]>(() => {
    try {
      const saved = localStorage.getItem(GIFT_BOX_KEY);
      return saved
        ? JSON.parse(saved)
        : [
            { sweetSlug: 'kaju-katli', servings: 8, addedAt: Date.now() - 3000 },
            { sweetSlug: 'motichoor-ladoo', servings: 6, addedAt: Date.now() - 2000 },
            { sweetSlug: 'besan-ladoo', servings: 6, addedAt: Date.now() - 1000 }
          ];
    } catch {
      return [
        { sweetSlug: 'kaju-katli', servings: 8, addedAt: Date.now() - 3000 },
        { sweetSlug: 'motichoor-ladoo', servings: 6, addedAt: Date.now() - 2000 },
        { sweetSlug: 'besan-ladoo', servings: 6, addedAt: Date.now() - 1000 }
      ];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.warn('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(GIFT_BOX_KEY, JSON.stringify(giftBox));
    } catch (e) {
      console.warn('Failed to save gift box to localStorage', e);
    }
  }, [giftBox]);

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const isFavorite = (slug: string) => favorites.includes(slug);

  const addToGiftBox = (slug: string, servings = 6) => {
    setGiftBox((prev) => {
      const existing = prev.find((item) => item.sweetSlug === slug);
      if (existing) {
        return prev.map((item) =>
          item.sweetSlug === slug ? { ...item, servings: item.servings + servings } : item
        );
      }
      return [...prev, { sweetSlug: slug, servings, addedAt: Date.now() }];
    });
  };

  const updateGiftBoxServings = (slug: string, servings: number) => {
    if (servings <= 0) {
      removeFromGiftBox(slug);
      return;
    }
    setGiftBox((prev) =>
      prev.map((item) => (item.sweetSlug === slug ? { ...item, servings } : item))
    );
  };

  const removeFromGiftBox = (slug: string) => {
    setGiftBox((prev) => prev.filter((item) => item.sweetSlug !== slug));
  };

  const clearGiftBox = () => {
    setGiftBox([]);
  };

  const loadCuratedBox = (items: { slug: string; servings: number }[]) => {
    setGiftBox(
      items.map((it) => ({
        sweetSlug: it.slug,
        servings: it.servings,
        addedAt: Date.now()
      }))
    );
  };

  const totalGiftBoxItems = giftBox.reduce((sum, item) => sum + item.servings, 0);

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        giftBox,
        addToGiftBox,
        updateGiftBoxServings,
        removeFromGiftBox,
        clearGiftBox,
        loadCuratedBox,
        totalGiftBoxItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
