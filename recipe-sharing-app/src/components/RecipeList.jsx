import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);
  const filteredRecipes = useRecipeStore().filteredRecipes(); // <-- FIXED

  useEffect(() => {
    setRecipes(); // setRecipes will populate recipes from store
  }, [setRecipes]);

  return (
    <div>
      <h2>All Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {filteredRecipes.map(recipe => (
            recipe?.title && (
              <li key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </li>
            )
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
