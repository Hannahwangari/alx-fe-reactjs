import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm'; // ✅ Import

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const [editingId, setEditingId] = useState(null); // 🔄 Track which recipe is being edited

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            {editingId === recipe.id ? (
              <EditRecipeForm recipe={recipe} onClose={() => setEditingId(null)} />
            ) : (
              <>
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button onClick={() => setEditingId(recipe.id)}>Edit</button>
                <DeleteRecipeButton recipeId={recipe.id} />
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
