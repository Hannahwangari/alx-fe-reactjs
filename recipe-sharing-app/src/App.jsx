// src/App.jsx
import React from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1>🍲 Recipe Sharing App</h1>

      {/* Form to add new recipes */}
      <section style={{ marginTop: "20px" }}>
        <AddRecipeForm />
      </section>

      {/* Search bar */}
      <section style={{ marginTop: "30px" }}>
        <SearchBar />
      </section>

      {/* List of all recipes */}
      <section style={{ marginTop: "30px" }}>
        <h2>All Recipes</h2>
        <RecipeList />
      </section>
    </main>
  );
}

export default App;
