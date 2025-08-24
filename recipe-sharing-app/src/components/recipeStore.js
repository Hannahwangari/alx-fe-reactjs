import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // Initial recipes
  recipes: [
    { id: 1, title: 'Spaghetti Bolognese', description: 'Hearty meat sauce with pasta.' },
    { id: 2, title: 'Vegetarian Chili', description: 'Spicy and satisfying.' },
    { id: 3, title: 'Lemon Chicken', description: 'Bright and zesty.' },
    { id: 4, title: 'Beef Stir Fry', description: 'Quick and easy Asian style dish.' },
  ],

  // States
  searchTerm: '',
  favorites: [],
  recommendations: [],

  // Actions
  setSearchTerm: (term) => set({ searchTerm: term }),

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => !favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

  // Derived getter for filtered recipes
  get filteredRecipes() {
    const { recipes, searchTerm } = get();
    if (!searchTerm.trim()) return recipes;
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },
}));

export default useRecipeStore;
