// src/components/RecipeList.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) {
    return <p>No recipes match your search.</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "20px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
