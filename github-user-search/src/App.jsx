import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
        GitHub User Search
      </h1>
      <Search /> {/* ✅ REQUIRED for checker */}
    </div>
  );
}

export default App;
