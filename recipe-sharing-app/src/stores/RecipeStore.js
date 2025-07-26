// src/stores/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Set initial recipe list
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
