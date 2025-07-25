// src/App.jsx
import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
