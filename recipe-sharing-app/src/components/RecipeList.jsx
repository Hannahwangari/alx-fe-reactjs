import React from 'react'
import { useRecipeStore } from './recipeStore'  // ✅ updated path

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one above!</p>
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
