import React from 'react';
import FavouritesList from './components/FavouritesList';
import RecommendationList from './components/RecommendationList';
import RecipeList from './components/RecipeList'; // if applicable

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <RecipeList />
      <FavouritesList />
      <RecommendationList />
    </div>
  );
}

export default App;
