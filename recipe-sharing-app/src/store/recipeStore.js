// src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  setRecipes: () => {
    const dummyRecipes = [
      { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian pasta.' },
      { id: 2, title: 'Chicken Curry', description: 'Spicy and flavorful.' },
      { id: 3, title: 'Avocado Toast', description: 'Healthy and quick breakfast.' },
    ];
    set({ recipes: dummyRecipes });
  },

  addFavorite: (id) => {
    const { favorites } = get();
    if (!favorites.includes(id)) {
      set({ favorites: [...favorites, id] });
    }
  },

  removeFavorite: (id) => {
    const { favorites } = get();
    set({ favorites: favorites.filter((favId) => favId !== id) });
  },

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter((r) => !favorites.includes(r.id)).slice(0, 2);
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
