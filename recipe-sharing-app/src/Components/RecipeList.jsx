// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from '../stores/RecipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Please add one!</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> - {recipe.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
