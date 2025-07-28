import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // ✅ Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // ✅ Replace all recipes (used for bulk updates)
  setRecipes: (recipes) => set({ recipes }),

  // ✅ Delete recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // ✅ Update existing recipe by ID
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

export default useRecipeStore;
