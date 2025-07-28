// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton'; // ✅ Add this

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
  }));

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <DeleteRecipeButton id={recipe.id} /> {/* ✅ Uses imported component */}
    </div>
  );
};

export default RecipeDetails;
