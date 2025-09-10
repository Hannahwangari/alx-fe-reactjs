// src/components/AddRecipeForm.jsx
import React, { useState } from 'react'
import { useRecipeStore } from '../store/recipeStore'  // ✅ fixed path

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title.trim() || !description.trim()) return

    addRecipe({
      id: Date.now(), // unique enough for demo
      title: title.trim(),
      description: description.trim(),
    })

    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  )
}

export default AddRecipeForm
