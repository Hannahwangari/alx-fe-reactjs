import React, { useState } from 'react';
import { fetchUserData } from '../api'; // ✅ import the helper function

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
const handleSearch = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError(false);
  setUser(null);

  try {
    const data = await fetchUserData(username); // ✅ use your helper
    setUser(data);
  } catch (err) {
    console.error(err);
    setError(true);
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
