import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query.trim()) return;

    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Step 1: Get basic user list
        const response = await axios.get(
          `https://api.github.com/search/users?q=${query}&page=${page}&per_page=5`
        );

        const basicUsers = response.data.items;

        // Step 2: Fetch detailed profile for each user
        const detailedUsers = await Promise.all(
          basicUsers.map(async (user) => {
            const userDetails = await axios.get(user.url); // user.url is the detail endpoint
            return userDetails.data;
          })
        );

        setResults(detailedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [query, page]);

  const handleSearch = () => {
    setPage(1);
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
                <p className="text-sm text-gray-600">
                  Location: {user.location || "Not available"}
                </p>
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
