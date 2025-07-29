import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

function FavoritesList() {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>
              {recipe.title}
              <button onClick={() => removeFavorite(recipe.id)}>❌ Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;
