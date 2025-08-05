import React, { useState } from 'react';
import { fetchUsersAdvanced } from '../services/githubService';

function Search() {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    minRepos: ''
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const users = await fetchUsersAdvanced({
        ...formData,
        pageNumber: page
      });
      setResults(users);
    } catch (err) {
      console.error(err);
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="border px-3 py-2 rounded w-full"
          />
          <input
            type="number"
            name="minRepos"
            value={formData.minRepos}
            onChange={handleChange}
            placeholder="Min Repos"
            className="border px-3 py-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <ul className="mt-6 space-y-4">
        {results.map((user) => (
          <li key={user.id} className="p-4 border rounded shadow flex gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-bold">{user.login}</p>
              {user.location && <p className="text-sm">📍 {user.location}</p>}
              {user.public_repos !== undefined && (
                <p className="text-sm">📦 {user.public_repos} repositories</p>
              )}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View GitHub Profile
              </a>
            </div>
          </li>
        ))}
      </ul>

      {results.length > 0 && (
        <div className="flex justify-between mt-6">
          <button
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="self-center">Page {page}</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-4 py-2 bg-indigo-500 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
