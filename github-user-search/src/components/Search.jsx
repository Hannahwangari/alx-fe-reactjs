import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchUserData = async (searchQuery, pageNumber = 1) => {
  setLoading(true);
  try {
    // Step 1: Search users
    const searchRes = await axios.get(
      `https://api.github.com/search/users?q=${searchQuery}&page=${pageNumber}&per_page=5`
    );

    const userList = searchRes.data.items;

    // Step 2: For each user, fetch full profile
    const fullProfiles = await Promise.all(
      userList.map(async (user) => {
        const userRes = await axios.get(`https://api.github.com/users/${user.login}`);
        return userRes.data; // includes 'location'
      })
    );

    setResults(fullProfiles); // Store full profile data
  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    if (query.trim()) {
      fetchUserData(query, page);
    }
  }, [query, page]);

  const handleSearch = () => {
    setPage(1); // reset page
    fetchUserData(query, 1); // ✅ trigger API request manually
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="mt-4">Loading...</p>}

      <ul className="mt-4 space-y-3">
  {results.map((user) => (
    <li key={user.id} className="border p-4 rounded shadow">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{user.login}</p>
          {user.location && (
            <p className="text-sm text-gray-500">📍 {user.location}</p>
          )}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            View Profile
          </a>
        </div>
      </div>
    </li>
  ))}
</ul>


      {results.length > 0 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="self-center text-sm">Page {page}</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
