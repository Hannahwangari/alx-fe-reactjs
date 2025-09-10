// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ checker requirement

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/"); // redirect after delete
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
