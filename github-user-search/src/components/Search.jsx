// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // ✅ import the function

const Search = ({ onUserFetched }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const data = await fetchUserData(username); // ✅ use username instead of searchTerm
      console.log(data);

      if (onUserFetched) {
        onUserFetched(data); // ✅ now this prop is actually used
      }
    } catch (err) {
      console.error("Error fetching GitHub user", err);
      setError("User not found. Please try again."); // ✅ show user-friendly error
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border px-2 py-1 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Search;
