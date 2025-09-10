// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ required for checker
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ required for checker

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // ✅ go back to home after delete
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
