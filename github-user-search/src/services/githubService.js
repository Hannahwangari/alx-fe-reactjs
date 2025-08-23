// src/services/githubService.js

export const fetchUsers = async (query, location, minRepos) => {
  try {
    // Construct query string for GitHub search API
    let searchQuery = `${query}`;
    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>=${minRepos}`;
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${searchQuery}`
    );
    const data = await response.json();
    return data.items || [];
  } catch (err) {
    console.error("Error fetching users:", err);
    return [];
  }
};
