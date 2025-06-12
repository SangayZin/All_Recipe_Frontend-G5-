import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useRecipeStore = create(
  persist(
    (set) => ({
      // State
      favorites: [],
      searchQuery: "",
      showFavorites: false,
      selectedRecipe: null,

      // Actions
      setSearchQuery: (query) => set({ searchQuery: query }),
      toggleShowFavorites: () => 
        set((state) => ({ showFavorites: !state.showFavorites })),
      setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
      toggleFavorite: (title) =>
        set((state) => ({
          favorites: state.favorites.includes(title)
            ? state.favorites.filter((fav) => fav !== title)
            : [...state.favorites, title],
        })),
    }),
    {
      name: 'recipe-storage', // Save to localStorage
    }
  )
);

export default useRecipeStore;