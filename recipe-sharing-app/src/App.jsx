import React from 'react';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
