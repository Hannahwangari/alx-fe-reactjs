// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore((state) => ({
    filteredRecipes: state.filteredRecipes,
  }));

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '15px' }}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
