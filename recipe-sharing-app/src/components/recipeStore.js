import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      const updatedFiltered = updatedRecipes.filter((r) =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFiltered,
      };
    }),
}));
export default useRecipeStore;
