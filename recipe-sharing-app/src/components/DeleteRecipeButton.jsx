// src/components/DeleteRecipeButton.jsx
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  useEffect(() => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      deleteRecipe(id);
    }
    navigate('/');
  }, [id, deleteRecipe, navigate]);

  return null; // No UI needed; it's handled via route
};

export default DeleteRecipeButton;
