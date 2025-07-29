// components/RecipeCard.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeCard = ({ recipe }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipe.id);

  const handleToggleFavorite = () => {
    if (isFavorite) removeFavorite(recipe.id);
    else addFavorite(recipe.id);
  };

  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeCard;
