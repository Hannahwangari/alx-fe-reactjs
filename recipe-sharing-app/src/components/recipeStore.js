// src/store/recipeStore.js
import { create } from 'zustand'

// Named export ✅
export const useRecipeStore = create((set) => ({
  // initial state
  recipes: [],

  // add a new recipe to the list
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // replace the entire list (useful for initialization)
  setRecipes: (recipes) => set({ recipes }),
}))
