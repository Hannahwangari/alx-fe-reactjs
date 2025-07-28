// src/components/Home.jsx
import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';

const Home = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default Home;
