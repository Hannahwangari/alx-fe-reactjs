import axios from 'axios';


export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};


export const fetchUsersAdvanced = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  try {
    const response = await axios.get(url);
    return response.data.items; // array of users
  } catch (error) {
    console.error('Error fetching advanced users:', error);
    throw error;
  }
};
