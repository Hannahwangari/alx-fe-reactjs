import React from 'react';
import useRecipeStore from '../store/recipeStore';

function RecommendationsList() {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong>: {recipe.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecommendationsList;
