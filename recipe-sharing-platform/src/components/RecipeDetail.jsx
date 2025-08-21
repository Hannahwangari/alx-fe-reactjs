import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Use fetch since data.json is in public folder
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.find(item => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch(error => console.error('Error loading recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Recipes
      </Link>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6 text-gray-600">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">Instructions</h2>
      <ol className="list-decimal list-inside text-gray-600 space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;