import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchUserData(query, location, minRepos);
    setUsers(data.items || []); // GitHub search returns { items: [...] }
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 max-w-md mx-auto bg-white p-4 rounded-lg shadow-md"
      >
        <input
          type="text"
          placeholder="Search username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., Nairobi)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {users.length > 0 && (
          <ul className="grid gap-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </p>
                {user.location && <p>📍 {user.location}</p>}
                {user.public_repos !== undefined && (
                  <p>Repos: {user.public_repos}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
