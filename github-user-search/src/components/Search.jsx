import React, { useState } from 'react';

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
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        setError(true);
        setUser(null);
      } else {
        const data = await response.json();
        setUser(data);
        setError(false);
      }
    
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
      {error && <p>Looks like we cant find the user</p>}
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
