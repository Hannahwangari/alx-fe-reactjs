// src/components/DeleteRecipeButton.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
