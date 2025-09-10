// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

function App() {
  return (
    <Router>
      <main style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
        <h1>🍲 Recipe Sharing App</h1>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section>
                  <AddRecipeForm />
                </section>

                <section style={{ marginTop: '30px' }}>
                  <h2>All Recipes</h2>
                  <RecipeList />
                </section>
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
