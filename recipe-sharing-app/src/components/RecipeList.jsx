// src/components/RecipeList.jsx
import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/recipes/${recipe.name}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
