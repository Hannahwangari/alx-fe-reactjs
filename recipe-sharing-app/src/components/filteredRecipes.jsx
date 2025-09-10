// src/components/filteredRecipes.jsx
import React from "react";
import useRecipeStore from "./recipeStore";

const FilteredRecipes = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes match your search.</p>;
  }

  return (
    <div>
      <h2>Filtered Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredRecipes;
