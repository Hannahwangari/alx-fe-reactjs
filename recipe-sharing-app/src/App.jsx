// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Recipe Sharing App</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
    </div>
  );
}

export default App;
