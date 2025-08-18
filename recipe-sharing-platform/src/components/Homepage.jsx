import React, { useState, useEffect } from 'react';

// Mock data - in a real app, this would be in a separate data.json file
const mockRecipeData = [
  {
    "id": 1,
    "title": "Spaghetti Carbonara",
    "summary": "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
    "image": "https://via.placeholder.com/150"
  },
  {
    "id": 2,
    "title": "Chicken Tikka Masala",
    "summary": "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato based gravy.",
    "image": "https://via.placeholder.com/150"
  }
];

// Recipe Card Component
const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {recipe.summary}
        </p>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
          View Recipe
        </button>
      </div>
    </div>
  );
};

// Main HomePage Component
const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from JSON file
    const loadRecipes = () => {
      setTimeout(() => {
        setRecipes(mockRecipeData);
        setLoading(false);
      }, 1000); // Simulate network delay
    };

    loadRecipes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Recipe Share</h1>
              <p className="text-gray-600 mt-1">Discover and share amazing recipes</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Recipes
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Delicious Recipes
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore our collection of mouth-watering recipes from around the world
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Explore Recipes
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Recipes</h2>
          <p className="text-gray-600">
            Handpicked recipes that our community loves the most
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300">
            Load More Recipes
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Recipe Share</h3>
            <p className="text-gray-400 mb-4">
              Bringing food lovers together, one recipe at a time.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;