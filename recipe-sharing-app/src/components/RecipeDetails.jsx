// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate();
  const { recipes, deleteRecipe } = useRecipeStore((state) => ({
    recipes: state.recipes,
    deleteRecipe: state.deleteRecipe,
  }));

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p>Recipe not found!</p>;

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/'); // Go back to homepage after deletion
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RecipeDetails;
