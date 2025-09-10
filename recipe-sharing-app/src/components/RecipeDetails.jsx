// src/components/RecipeDetails.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = Number(id)
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  )

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h2>Edit Recipe</h2>
      <EditRecipeForm recipe={recipe} />

      <DeleteRecipeButton id={recipe.id} />

      <p>
        <Link to="/">⬅ Back to All Recipes</Link>
      </p>
    </div>
  )
}

export default RecipeDetails
