// src/components/RecipeDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Edit and Delete Controls */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />

      <Link to="/">← Back to recipes</Link>
    </div>
  );
};

export default RecipeDetails;
