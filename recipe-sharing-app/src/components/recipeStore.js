// src/components/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // 🔍 search + filtering state
  searchTerm: "",
  filteredRecipes: [],

  // actions
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.filteredRecipes, recipe], // keep in sync
    })),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
}));
