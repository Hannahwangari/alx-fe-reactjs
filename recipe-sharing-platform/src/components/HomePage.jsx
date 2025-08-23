import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Since data.json is in public folder, use fetch
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Add Recipe button placed OUTSIDE the loop */}
      <div className="flex justify-center mt-8">
        <Link 
          to="/add" 
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          ➕ Add Recipe
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
