// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <main style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
        <h1>🍲 Recipe Sharing App</h1>

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />

          {/* Recipe details route */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
