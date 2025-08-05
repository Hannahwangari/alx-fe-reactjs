import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [query, setQuery] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ required
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const data = await fetchUserData(query);
      setUserData(data);
    } catch (err) {
      console.error('API Error:', err);
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* ✅ FORM and onSubmit */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter GitHub username"
          className="border px-3 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData && (
        <div className="mt-4 border p-4 rounded shadow">
          <div className="flex items-center space-x-4">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{userData.name || userData.login}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
