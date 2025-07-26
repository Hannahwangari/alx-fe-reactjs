// src/App.jsx
import React from "react";
import AddRecipeForm from "./Components/AddRecipeForm";
import RecipeList from "./Components/RecipeList";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍽️ My Recipe Book</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    color: "#4caf50",
  },
};

export default App;
