import React, { useEffect } from 'react';
import useRecipeStore from './store/recipeStore';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    // Provide recipes here
    const sampleRecipes = [
      { id: 1, title: 'Ugali & Sukuma', description: 'A Kenyan staple meal.' },
      { id: 2, title: 'Chapati', description: 'Flatbread enjoyed with stew.' },
      { id: 3, title: 'Githeri', description: 'Beans and maize mix.' },
      { id: 4, title: 'Mandazi', description: 'Sweet fried dough.' },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
